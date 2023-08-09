<template>
    <div class="categories">
        <div class="categories__inner">
            <ul class="categories__list">
                <li class="categories__item">Межкомнатные двери</li>
                <li class="categories__item">Мебель</li>
                <li class="categories__item">Стеновые панели «Буазери»</li>
                <li class="categories__item">Лестницы</li>
                <li class="categories__item">Мебельные фасады</li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss">
.categories {
    // .categories__inner
    &__inner {

    }
    // .categories__item
    &__item {
        &:not(:last-child) {
            margin-bottom: 16px;
        }
    }
}
</style>