<template>
    <div class="services-card">
        <div class="services-card__inner">
            <div class="services-card__header">
                <div class="services-card__preview">
                    <img class="services-card__img" :src="`${services.image}`">
                </div>
            </div>
            <div class="services-card__body">
                <h2 class="services-card__title title-lg fw-700">{{ services.title }}</h2>
                <div class="services-card__description">
                  {{ services.description }}
                </div>
            </div>
            <div class="services-card__footer">
                <a class="services-card__link text-ll fw-700 tt link" href="#">{{ services.linkText }}</a>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    interface IServices {
        title: string;
        description: string;
        image: string;
        linkText: string;
        id: number;
    }

    interface IProps {
        services: IServices;
    }

    const props =  withDefaults(defineProps<IProps>(),{
        services: () => ({
            title: 'TITLE',
            description: 'DESCRIPTION',
            image: 'https://dveri-milano.ru/upload/iblock/a44/a442e9388ae850acd25536fbff034eae.jpg',
            linkText: 'заказать двери',
            id: 0,
        }),
    })
</script>
<style lang="scss">
$b:".services-card";

    #{$b} {
        // .services-card__inner
        &__inner {
            border-bottom: 1px solid $color-secondary-deep; 
        }
        // .services-card__header
        &__header {
            margin-bottom: 40px;
        }
        // .services-card__preview
        &__preview {
            aspect-ratio: 620 / 320;
        }
        // .services-card__img
        &__img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
        // .services-card__body
        &__body {
            margin-bottom: 24px;
        }
        // .services-card__title
        &__title {
            margin-bottom: 19px;
        }
        // .services-card__footer
        &__footer {
        }
        // .services-card__link
        &__link {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 19px;
            color: $color-warning;
        }
    }
</style>