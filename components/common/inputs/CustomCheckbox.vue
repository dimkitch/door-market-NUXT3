<template>
    <div class="custom-checkbox">
      <input
        type="checkbox"
        class="custom-checkbox__input"
        :id="key"
        :checked="modelValue"
        @change="onChange"
      >
      <label class="custom-checkbox__label" :for="key">
        <slot></slot>
      </label>
    </div>
  </template>
  
  <script setup lang="ts">
    import { onMounted} from 'vue'
    interface IProps {
        modelValue: boolean,
    }
    interface IEmits {
        (e: 'update:modelValue', value: any) : void
    }
    
    const props = withDefaults(defineProps<IProps>(), {
        modelValue:false,
    })

    const emit = defineEmits<IEmits>()
    // @ts-ignore
    const key: string = randomString();
     function onChange(e) {
        console.log('cheng');
        
        if (e && e.target && e.target instanceof HTMLInputElement) {
            emit('update:modelValue', e.target.checked);
        }
    }
    onMounted(() => {
        console.log(key);
        
    })
  </script>
  
  <style lang="scss">
  $b: '.custom-checkbox';
  
  #{$b} {
    display: flex;
    align-items: center;
    min-height: 20px;
  
    // .custom-checkbox__input
    &__input {
      display: none;
  
      &:checked {
        & ~ #{$b}__label {
          &::after {
            opacity: 1;
            transform: translate(0, -50%);
          }
        }
      }
    }
  
    // .custom-checkbox__label
    &__label {
      position: relative;
      padding-left: 40px;
      display: inline-block;
      transition: $transition-mod;
      cursor: pointer;
  
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        width: 20px;
        height: 20px;
        transform: translateY(-50%);
        border: 1px solid $color-secondary;
        transition: $transition-mod;
      }
  
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 20px;
        height: 20px;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M20 0H0V20H20V0Z' fill='%233B3937'/%3E%3Cpath d='M5 10.5L8.5 13.5L16 6.5' stroke='white' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        opacity: 0;
        transition: $transition-mod;
        z-index: 1;
      }
    }
  }
  
  </style>
  