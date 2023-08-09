<template>
    <div class="copyright">
        <div class="copyright__inner">
            <NuxtLink :to="{name:'index'}" class="copyright__link">
                <LogoIcon class="copyright__logo link color-white"/>
            </NuxtLink>
            <span class="copyright__item">
                Фабрика G&G. 2022
            </span>
            <span class="copyright__item">
                © Все права защищены
            </span>
        </div>
    </div>
</template>
<style lang="scss">
.copyright {

    // .copyright__inner
    &__inner {
        display: flex;
        flex-direction: column;
    }

    // .copyright__link
    &__link {
        margin-bottom: 21px;
    }

    // .copyright__item
    &__item {
        &:not(:last-child) {
            margin-bottom: 6px;
        }
    }
}
</style>