<template>
  <header class="custom-header" ref="header" :style="`--headerHeight:${getHeaderHeight}`">
    <div class="container">
      <div class="custom-header__inner">
        <NuxtLink :to="{name: 'index'}">
          <LogoIcon class="custom-header__logo link"/>
        </NuxtLink>
        <HeaderNav class="custom-header__header-nav" :class="{'custom-header__header-nav--is-active': isActive}"></HeaderNav>
        <PhoneIcon class="custom-header__icon"/>
        <div class="custom-header__connection">
          <a class="custom-header__item color-warning-light">support@sofiadoors.com</a>
          <a class="custom-header__item color-warning-light">8 (800) 550-81-79</a>
          <CustomButton class="custom-header__btn" size="xs" theme="warning-deep">Каталог</CustomButton>
        </div>
        <div class="custom-header__burger">
          <div 
            class="custom-header__burger-inner" 
            :class="{ 'custom-header__burger-inner--is-active': isActive }" 
            @click="toggleMenu"
          >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { ref, onMounted, nextTick, computed, onBeforeMount } from 'vue'

  const isActive = ref(false)
  const header = ref()
  const headerHeight = ref(0)

  function toggleMenu() {
    isActive.value = !isActive.value

    document.body.style.overflow = isActive.value ? "hidden" : "auto";
    
  }

  function saveHeaderHeight() {
    const { height } = header.value.getBoundingClientRect()

    headerHeight.value = Math.floor(height)
  }

  const getHeaderHeight = computed(() => {
    return `${headerHeight.value}px`
  })

  onMounted(async() => {
    await nextTick()

    saveHeaderHeight()
    document.addEventListener('resize', saveHeaderHeight)
  })
  
  onBeforeMount(() => {
    document.removeEventListener('resize', saveHeaderHeight)
  })

</script>
<style lang="scss">
$b: '.custom-header';

#{$b} {
  background-color: $color-dark;

  // .custom-header__inner 
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;

    @include tablet {
      padding: 20px 0;
    }
  }

  // .custom-header__logo
  &__logo {
    color: $color-white ;
    transition: $transition-mod;
    
    &:hover {
      color: $color-warning-light;
    }

    @include tablet-sm {
      order: 0;
    }
  }
  // .custom-header__icon
  &__icon {
    display: none;
    width: 24px;
    height: 24px;
    color: $color-white;
    cursor: pointer;
    &:hover {
      color: $color-warning-light;
    }

    @include desktop-sm {
      display: block;
    }

    @include tablet-sm {
      order: 2;
    }
  }
  // .custom-header__item
  &__item {
    margin-right: 66px;

    @include desktop-sm {
      display: none;
    }
  }
  // .custom-header__btn
  &__btn {

    @include tablet-sm {
      order: 1;
    }
  }
  // .custom-header__burger
  &__burger {
    display: none;
    @include tablet-sm {
      display: block;
      order: 3;
    }
  }
  // .custom-header__burger-inner
  &__burger-inner {
    height: 10px;
    width: 24px;
    position: relative;
    cursor: pointer;
    transition: $transition-mod;
    color: $color-white;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 2px;
      background-color: $color-white;
      transition: $transition-mod;
    }

    &--is-active {
      &::before {
        transform: rotate(45deg) translateY(5px);;
      }
      &::after {
        transform: rotate(-45deg) translateY(-5px);;
      }
    }

    &:hover {
      &::before,
      &::after {
        background-color: $color-warning-light;
      }
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 2px;
      background-color: $color-white;
      transition: $transition-mod;
    }
  }
  // .custom-header__header-nav
  &__header-nav {

    @include tablet-sm {
      position: fixed;
      left: 0;
      top: var(--headerHeight);
      transform: translateX(-100vh);
      transition: $transition-mod;
    }

    // .custom-header__header-nav--is-active
    &--is-active {
      transform: translateX(0);
    }
    
  }
}
</style>