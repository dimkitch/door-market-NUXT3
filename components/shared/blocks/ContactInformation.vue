<template>
    <div class="contact-information">
        <div class="contact-information__inner">
            <a class="contact-information__link title-ll link">8 (800) 550-81-79</a>
            <span class="contact-information__item">м. Полежаевская</span>
            <span class="contact-information__item">123154, г. Москва, пр-т. Маршала Жукова, д. 52, "Мебельный Центр"</span>
            <span class="contact-information__item">support@sofiadoors.com</span>
        </div>
    </div>
</template>
<style lang="scss">
.contact-information {
    max-width: 245px;
    // .contact-information__inner
    &__inner {
        display: flex;
        flex-direction: column;
    }
    // .contact-information__link
    &__link {
        margin-bottom: 38px;
        color: $color-white;

        &:hover {
            color: $color-warning-light;
        }
    }
    // .contact-information__item
    &__item {
        &:not(:last-child) {
            margin-bottom: 16px;
        }
    }
}
</style>