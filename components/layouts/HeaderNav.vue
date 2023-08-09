<template>
    <nav class="header-nav">
        <ul class="header-nav__list">
            <li class="header-nav__item">Доставка</li>
            <li class="header-nav__item">Статьи</li>
            <li class="header-nav__item">О нас</li>
            <li class="header-nav__item">Контакты</li>
        </ul>
    </nav>
</template>
<script setup lang="ts">

</script>
<style lang="scss">
$b: '.header-nav';
#{$b} {
    @include tablet-sm {
        height: 100vh;
        width: 50%;
        background-color: $color-dark;
        text-align: center;
        overflow-y: auto;
    }

    @include mobile {
        width: 100%;
    }
    // .header-nav__list
    &__list {
        display: flex;
        color: $color-white;

        @include tablet-sm {
            flex-direction: column;
            padding-top: 60px;
        }
    }
    // .header-nav__item
    &__item {
        cursor: pointer;
        transition: $transition-mod;
        
        &:hover {
            color: $color-warning-light;
        }

        &:not(:last-child) {
            margin-right: 36px;

            @include tablet-sm {
                margin-right: unset;
            }
        }

        @include tablet-sm {
            padding: 18px 0;
        }
    }
}
</style>