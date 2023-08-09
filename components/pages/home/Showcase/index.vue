<template>
    <div class="showcase">
        <div class="showcase__inner">
            <h1 class="showcase__title title-xxl fw-700">Витрина товаров</h1>
            <ProductsList class="showcase__products-list" :productListData="productListData" />
        </div>
    </div>
</template>
<script setup lang="ts">
    interface IProps {
        productListData: object;
    }
    const props =  withDefaults(defineProps<IProps>(),{
        productListData: () => (
          []
        ),
    })
</script>
<style lang="scss">
    $b:".showcase";
    #{$b} {
        // .showcase__title
        &__title {
            margin-bottom: 30px;
        }
    }
</style>