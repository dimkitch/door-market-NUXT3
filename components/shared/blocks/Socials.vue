<template>
    <div class="socials">
        <div class="socials__inner">
            <a class="socials__item color-white link" href="#">
                <VkIcon />
            </a>
            <a class="socials__item color-white link" href="#">
                <PIcon />
            </a>
            <a class="socials__item color-white link" href="#">
                <TelegramIcon />
            </a>
        </div>
    </div>
</template>
<style lang="scss">
.socials {
    // .socials__inner
    &__inner {
        min-width: 120px;
    }

    // .socials__item
    &__item {

        &:nth-child(n + 2) {
            margin-left: -6px;
        }
    }
}
</style>