<template>
    <div class="custom-dropdown" @click="toggleDropdown" :class="{'custom-dropdown--is-active': isActive}">
        <div class="custom-dropdown__inner">
            <div class="custom-dropdown__field">
                <div class="custom-dropdown__placholder text-xl fw-500">
                    <slot />
                </div>
                <div class="custom-dropdown__result"></div>
                <ArrowIcon class="custom-dropdown__icon"/>
            </div>
            <ul class="custom-dropdown__list text-xl fw-500">
                <li class="custom-dropdown__item">Зарядные станции</li>
                <li class="custom-dropdown__item">Оборудование</li>
                <li class="custom-dropdown__item">Аксессуары</li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
    import {ref} from 'vue'

    const isActive = ref(false)

    function toggleDropdown () {
        isActive.value = !isActive.value
        if(isActive) {
            
        }
    }

</script>
<style lang="scss">
$b: '.custom-dropdown';

#{$b} {
    // .custom-dropdown__inner
    &__inner {
        position: relative;
        display: inline-block;
        width: 300px;
        height: 60px;

        // .custom-dropdown--is-active .custom-dropdown__inner
        #{$b}--is-active & {
            border-bottom: none;
        }
    }

    //  .custom-dropdown__field
    &__field {
        position: relative;
        display: flex;
        align-items: center;
        padding: 20px 23px;
        border: 1px solid transparent;
        border-bottom: none;
        cursor: pointer;

        // .custom-dropdown--is-active .custom-dropdown__field
        #{$b}--is-active & {
            border-color: $color-secondary;
        }

        // .custom-dropdown--is-active .custom-dropdown__field::before 
        #{$b}--is-active &::before {
            position: absolute;
            z-index: 2;
            left: 25px;
            bottom: 0;
            content: '';
            height: 1px;
            width: 250px;
            background-color: $color-secondary;
        }
    }

    // .custom-dropdown__icon
    &__icon {
        position: absolute;
        top: 50%;
        right: 25px;
        transform: translateY(-50%);
    }
    
    // .custom-dropdown__list
    &__list {
        position: absolute;
        top: 100%;
        left: 0;
        max-height: 0;
        width: 100%;
        opacity: 0;
        padding-top: 0;
        padding-left: 23px;
        padding-bottom: 23px;
        padding-right: 23px;
        border: 1px solid transparent;
        border-top: none;
        background-color: $color-white;
        transition: $transition-mod;
        
        // .custom-dropdown--is-active .custom-dropdown__list
        #{$b}--is-active & {
            padding-top: 20px;
            max-height: 250px;
            opacity: 1;
            border-color: $color-secondary;
        }
    }
    
    // .custom-dropdown__item
    &__item {
        
        &:hover {
            cursor: pointer;
            color: $color-warning;
        }
        
        &:not(:last-child){
            padding-bottom: 19px;
        }
    }
}
</style>