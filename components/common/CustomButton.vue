<template>
  <component :is="tag" class="custom-button" :class="buttonClasses">
    <span class="custom-button__content">
      <slot />
    </span>
  </component>
</template>
  
<script lang="ts" setup>
  import { CustomButtonSizeSettings, CustomButtonThemeSettings } from '@/types/common/CustomButton'
  import { reactive, computed } from 'vue'
  
  interface IProps {
    tag?: string;
    disabled?: boolean;
    size?: CustomButtonSizeSettings;
    theme?: CustomButtonThemeSettings;
  }

  const props = withDefaults(defineProps<IProps>(), {
    tag: 'button',
    disabled: false,
    size: CustomButtonSizeSettings.MD,
    theme: CustomButtonThemeSettings.PRIMARY,
  })
  const buttonClasses = computed(() => {
    const prefix = 'custom-button--'
    const classes = []
    
    classes.push(`${prefix}${props.size}`)
    classes.push(`${prefix}${props.theme}`)
    return classes.join(' ')
  })
</script>
<style lang="scss">
$b: '.custom-button';

// .custom-button
#{$b} {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: $color-white;
  transition: $transition-mod;

  &:hover{
    background-color: $color-warning-muddy;
  }
  &:disabled{
    opacity: 50%;
  }
  // .custom-button--sm
  &--sm{
    padding: 20px 25px;
  }

  // .custom-button--md
  &--md{
      padding: 20px 70px;
  }

  // .custom-button--transparent
  &--transparent{
  font-weight: 700;
    padding: 20px 70px;
    color: $color-warning;
    
    &:hover{
        text-decoration: underline;  
        background-color: transparent;
    }
  }

  // .custom-button--warning-deep
  &--warning-deep{
    background-color: $color-warning-deep;
  }
}
</style>