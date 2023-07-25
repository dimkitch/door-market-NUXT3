<template>
    <div class="accordion" @click="toggleAccordion">
        <div class="accordion__inner">
            <div class="accordion__header">
                <div class="accordion__title fw-700 text-xl"> 
                    <slot name="title"/>
                </div>
                <ArrowIcon class="accordion__icon" :class="{'accordion__icon--active': isActive}"/>
            </div>
            <div 
                ref="accordionBody"
                class="accordion__body" 
                :class="{'accordion__body--active': isActive}" 
                :style="accordionBodyStyle"
            >
                <slot name="body" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, computed,onMounted,nextTick } from 'vue'

const isActive = ref(true)
const accordionBody = ref()
const bodyHeight = ref(Infinity)

const accordionBodyStyle = computed(() => {
    const height = isActive.value ? bodyHeight.value : 0
    return `max-height:${height}px` 
})

function toggleAccordion() {
    isActive.value = !isActive.value
}

onMounted(async() => {
    await nextTick()

    if (!accordionBody.value && !(accordionBody.value instanceof HTMLElement)) return
    const { height } = accordionBody.value.getBoundingClientRect()
    
    bodyHeight.value = Math.round(height)
    isActive.value = false
})
</script>
<style lang="scss">
$b:'.accordion';

#{$b} {
    // .accordion__inner
    &__inner {

    }
    // .accordion__header
    &__header {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        cursor: pointer;

        &:hover {
            color: $color-warning;
        }
    }
    // .accordion__icon
    &__icon {
        margin-left: auto;
        
        &--active {
            transform: rotate(180deg);
        }
    }
    // .accordion__body
    &__body {
        opacity: 0;
        transition: $transition-mod;

        &--active {
            opacity: 1;
        }
    }

}
</style>