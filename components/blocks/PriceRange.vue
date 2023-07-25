<template>
    <div class="price-range">
        <div class="price-range__inner">
            <div class="price-range__header">
                <div class="price-range__title text-xl fw-700">Ценовой диапазон</div>
            </div>
            <div class="price-range__body">
                <div class="price-range__item">
                    <div class="price-range__description text-md">Выбрано</div>
                    <input 
                        class="price-range__input" 
                        :class="{'price-range__input--active': isActiveLeftpoint}"  
                        type="text" 
                        :value="values.min"
                        @input="onInputMin"
                    >
                </div>
                <div class="price-range__item">
                    <div class="price-range__close-btn text-md" @click="clearFilter">
                        очистить 
                        <CrossIcon class="price-range__icon"/>
                    </div>
                    <input 
                        class="price-range__input" 
                        :class="{'price-range__input--active': isActiveRightpoint}"  
                        type="text" 
                        :value="values.max"
                        @input="onInputMax"
                    >
                </div>
            </div>
            <div class="price-range__footer">
                <div class="price-range__selecter">
                    <div class="price-range__line" ref="line">
                        <span 
                            class="price-range__line-bg" 
                            :style="[activeRangeLineStyle, pointerLeftStyle]"  
                        />
                        <span 
                            ref="pointLeft" 
                            class="price-range__point"
                            :class="{'price-range__point--active': isActiveLeftpoint}"  
                            :style="pointerLeftStyle"  
                        />
                        <span 
                            ref="pointRight"
                            class="price-range__point"
                            :class="{'price-range__point--active': isActiveRightpoint}"  
                            :style="pointerRightStyle"  
                        />
                    </div>
                    <div class="price-range__values">
                        <div class="price-range__min">{{ values.min }}</div>
                        <div class="price-range__max">{{ values.max }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { 
        reactive, 
        ref, 
        computed, 
        onMounted, 
        nextTick, 
        onBeforeUnmount 
    } from 'vue'

    interface IPoints {
        min: number;
        max: number;
    }
    interface IProps {
        modelValue: IPoints;
    }

    const props =  withDefaults(defineProps<IProps>(),{
        modelValue: () => ({
            min: 0,
            max: 0,
        }),
    })

    const reg = /[^0-9\.]/g 

    const pointLeft = ref()
    const pointRight = ref()
    const line = ref()
    const isActiveLeftpoint = ref(false)
    const isActiveRightpoint = ref(false)

    const isCanMove = reactive({
        left: false,
        right: false,
    })
    const values = reactive(props.modelValue)
    const range = reactive({...props.modelValue})

    const pointerLeftStyle = computed(() => {
        if (!line.value && !(line.value instanceof HTMLElement)) return
        const { width } = line.value.getBoundingClientRect()
        const coefficient = range.max / width
        const left = Math.floor(values.min / coefficient)
        return `left:${left}px` 
    })
    const pointerRightStyle = computed(() => {
        if (!line.value && !(line.value instanceof HTMLElement)) return
        const { width } = line.value.getBoundingClientRect()
        const coefficient = range.max / width
        const right = Math.floor(values.max / coefficient)
        return `left:${right}px` 
    })
    const activeRangeLineStyle = computed(() => {
        if (!line.value && !(line.value instanceof HTMLElement)) return
        const { width } = line.value.getBoundingClientRect()
        const coefficient = range.max / width
        const lineWidth = Math.floor((values.max - values.min) / coefficient)
        return `width:${lineWidth}px`        
    })

    function onMousedownLeftPoint(e: MouseEvent) {
        isCanMove.left = true
        isActiveLeftpoint.value = true
    }
    function onMousedownRightPoint(e: MouseEvent) {
        isCanMove.right = true
        isActiveRightpoint.value = true
    }
    function onMouseupLeftPoint(e: MouseEvent) {
        isCanMove.left = false
        isActiveLeftpoint.value = false
    }
    function onMouseupRightPoint(e: MouseEvent) {
        isCanMove.right = false
        isActiveRightpoint.value = false
    }
    function onMousemoveLeftPoint(e: MouseEvent) {
        const { width, x } = line.value.getBoundingClientRect()
        const currentX = e.clientX - x
        const { width: pointWidth } = pointLeft.value.getBoundingClientRect()

        if (!isCanMove.left || currentX > width || e.clientX < x) return

        const coefficient = range.max / width
        const value = Math.floor(currentX * coefficient)
        const rightPosition = values.max / coefficient

        if (rightPosition - (pointWidth / 2) <= currentX - (pointWidth / 2) ) { 
            values.min = Math.round((rightPosition - (pointWidth)) * coefficient)
        } else {
            values.min = value
        }

    }
    function onMousemoveRightPoint(e: MouseEvent) {
        const { width, x } = line.value.getBoundingClientRect()
        const currentX = e.clientX - x
        const { width: pointWidth } = pointLeft.value.getBoundingClientRect()

        if (!isCanMove.right || currentX > width || e.clientX < x) return

        const coefficient = range.max / width
        const value = Math.floor(currentX * coefficient)
        const leftPosition = values.min / coefficient
         
        if (leftPosition + (pointWidth / 2) >= currentX - (pointWidth / 2) ) { 
            values.max = Math.round((leftPosition + (pointWidth)) * coefficient)
        } else {
            values.max = value
        }
        
    }
    function isValidNumberInput(e: InputEvent) {
        if(!e.target || !(e.target instanceof HTMLInputElement)) return false
        if (
            e.target.value.match(reg)
            || e.target.value.startsWith('.')
            || ((e.target.value && e.target.value.indexOf('.') !== -1))
        ) {
            return false
        }
        return true
    }
    function validateInput(e: InputEvent,max: number,min: number){
        if(!e.target || !(e.target instanceof HTMLInputElement)) return
        if(!isValidNumberInput(e)) {
            e.target.value = e.target.value.replace(reg, '')
        }
         if (Number(e.target.value) >= max) {
            e.target.value = String(max)
        } 
        if (Number(e.target.value) <= min) {
            e.target.value = String(min)
        }
    }
    function onInputMin(e) {
        validateInput(e, values.max, range.min)
        values.min = Number(e.target.value)
    }
    function onInputMax(e) {
        validateInput(e, range.max, values.min)
        values.max = Number(e.target.value)
    }
    function clearFilter(){
        values.min = range.min
        values.max = range.max
    }
    onMounted(async () => {
        await nextTick()
        pointLeft.value.addEventListener('mousedown', onMousedownLeftPoint)
        pointRight.value.addEventListener('mousedown', onMousedownRightPoint)
        window.addEventListener('mouseup', onMouseupLeftPoint)
        window.addEventListener('mouseup', onMouseupRightPoint)
        window.addEventListener('mousemove', onMousemoveLeftPoint)
        window.addEventListener('mousemove', onMousemoveRightPoint)
    })
    onBeforeUnmount(() => {
        pointLeft.value.removeEventListener('mousedown', onMousedownLeftPoint)
        pointRight.value.removeEventListener('mousedown', onMousedownRightPoint)
        window.removeEventListener('mouseup', onMouseupLeftPoint)
        window.removeEventListener('mouseup', onMouseupRightPoint)
        window.removeEventListener('mousemove', onMousemoveLeftPoint)
        window.removeEventListener('mousemove', onMousemoveRightPoint)
    })
</script>
<style lang="scss">
$b: '.price-range';

#{$b} {
    user-select: none;
    // .price-range__body
    &__body {
        display: flex;
        margin-top: 13px;
    }

    // .price-range__item
    &__item {

        &:not(:last-child) {
            margin-right: 10px;
        }
    }

    // .price-range__description
    &__description {
        display: flex;
        justify-content: flex-start;
        text-align: start;
    }

    // .price-range__close-btn
    &__close-btn {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        text-align: end;
        cursor: pointer;

        &:hover {
            color: $color-warning;
        }
    }

    // .price-range__icon
    &__icon {
        margin-left: 5px;
    }

    // .price-range__input
    &__input {
        padding: 9px 12px;
        margin-top: 4px;
        border: solid 1px $color-secondary-deep;

        // .price-range__input--active
        &--active {
            border-color: $color-secondary;
        }
    }

    // .price-range__footer
    &__footer {
        margin-top: 10px;
    }

    // .price-range__selecter
    &__selecter {
        display: flex;
        align-items: center;
        height: 48px;
        padding-top: 10px   ;
        padding-left: 12px;
        padding-right: 12px;
        padding-bottom: 7px;
        background-color: $color-secondary-light;
        flex-direction: column;
    }

    // .price-range__line
    &__line {
        position: relative;
        width: 100%;
        height: 2px;
        background-color: $color-secondary;
        order: 1;
    }

    // .price-range__line-bg
    &__line-bg{
        position: absolute;
        top: 0;
        left: 0;
        background-color: $color-dark;
        height: 100%;
    }

    // .price-range__point
    &__point {
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: $color-white;
        border: 2px solid $color-dark;
        cursor: pointer;

        // .price-range__point--active 
        &--active {
            background-color: $color-dark;
        }
    }

    // .price-range__values
    &__values {
        display: flex;
        width: 100%;
        order: 2;
        margin-top: 7px;
        justify-content: space-between;
    }
}
</style>
