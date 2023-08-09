<template>
    <div class="product-card">
        <div class="product-card__inner">
            <div class="product-card__header">
                <div class="product-card__name text-xl fw-500">{{ productCard.name }}</div>
                <div class="product-card__price text-xl fw-700">{{ productCard.price }} <span>₽</span></div>
            </div>
            <div class="product-card__body">
                <div class="product-card__preview">
                    <img class="product-card__img"  :src="`${productCard.image}`" :alt="`${productCard.alt}`">
                </div>
            </div>
            <div class="product-card__footer">
                <CustomButton class="product-card__price" size="sm" theme="transparent">Купить</CustomButton>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    interface ICard {
        name: string;
        price: number;
        image: string;
        alt: string;
        id: number;
    }

    interface IProps {
        productCard: ICard;
    }

    const props =  withDefaults(defineProps<IProps>(),{
        productCard: () => ({
            name: "EMPTY",
            price: 0,
            image: "EMPTY",
            alt: "ALT",
            id: 0,
        }),
    })
</script>
<style lang="scss">
    $b:".product-card";

    #{$b} {
        // .product-card__inner
        &__inner {
            padding: 20px;
            border: 1px solid $color-secondary-deep;
            cursor: pointer;
            
            &:hover {
                border-color: $color-secondary;
            }
        }
        // .product-card__name
        &__name {
            margin-bottom: 7px;
        }
        // .product-card__header
        &__header {
            margin-bottom: 23px;
        }
        // .product-card__body
        &__body {
            margin-bottom: 33px;
        }
        // .product-card__preview
        &__preview {
            aspect-ratio: 240 / 240;
            // padding: 0 60px;

            @include tablet-sm {
                // padding: 0 35px;
            }
        }
        // .product-card__img
        &__img {
            width: 100%;
            height: 100%;
        }
    }
</style>