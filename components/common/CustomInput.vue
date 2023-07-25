<template>
    <div class="custom-input" :class="{'custom-input--active': isMoved, 'custom-input--error': isError}">
        <div class="custom-input__wrapper">
            <input 
                class="custom-input__input" 
                :type="type"
                :value="modelValue"
                @focus="movePlacholder" 
                @blur="unsetMove"
                @input="onInput" 
            >
            <div class="custom-input__placeholder">
                <slot />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
    // import { CustomInputValid } from '@/types/common/CustomInput'
    import { ref } from 'vue'
    
    interface IProps {
        isValid?: boolean;
        type?: string;
        modelValue: string;
    }

    interface IEmits {
        (e: 'update:modelValue', value: any) : void
    }
    
    const isMoved = ref(false)
    const props = withDefaults(defineProps<IProps>(), {
        isValid: true,
        type:'text',
        modelValue:'',
    })
    const emit = defineEmits<IEmits>()
    const isError = ref(false)

    function movePlacholder(e) {
        isMoved.value = true
    }

    function unsetMove(e) {
        isMoved.value = Boolean(e.target.value)
    }

    function onInput(e) {
        if (e.target && e.target instanceof HTMLInputElement) 
            emit('update:modelValue', e.target.value);
    }
</script>
<style lang="scss">
    $b:'.custom-input';

    #{$b} {
        
        // .custom-input__wrapper
        &__wrapper {
            position: relative;
            width: 300px;
            height: 60px;
            border: 1px solid transparent;

            // .custom-input--active .custom-input__wrapper
            #{$b}--active & {
                border-color: $color-secondary;
            }

            // .custom-input--error .custom-input__wrapper
            #{$b}--error & {
                border-color: $color-warning;
            }
        }

        // .custom-input__input
        &__input {
            height: 100%;
            width: 100%;
            padding-left: 23px;
            font-size: 18px;
            font-weight: 700;
            color: $color-dark;

            // .custom-input--active .custom-input__input
            #{$b}--active & {
                padding-top: 21px;
            }

            // .custom-input--error .custom-input__input
            #{$b}--error & {
                color: $color-warning;
            }
        }

        // .custom-input__placeholder
        &__placeholder{
            position: absolute;
            top: 50%;
            left: 23px;
            transform: translateY(-50%);
            font-size: 18px;
            font-weight: 500;
            color: $color-secondary;
            transition: $transition-mod;
            
            // .custom-input--active .custom-input__placeholder
            #{$b}--active & {
                top: 21px;
                font-size: 13px;
                font-weight: 400;
                color: $color-dark;
            }

            // .custom-input--error .custom-input__placeholder
            #{$b}--error & {
                color: $color-warning;
            }
        }
    }
</style>