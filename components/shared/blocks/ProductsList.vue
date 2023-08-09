<template>
    <div class="product-list">
        <div class="product-list__inner">
            <ProductCard 
                class="product-list__card" 
                v-for="(card, index) in productListData" 
                :key="`product-card-${index}`"
                :productCard="card"
            />
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
    $b:".product-list";
    #{$b} {
        // .product-list__inner
        &__inner {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;

            @include tablet {
                grid-template-columns: 1fr 1fr;
            }
            
            @include tablet-sm {
                display: block;
            }
        }
        // .product-list__card
        &__card {
            &:not(:last-child) {
                margin-bottom: 40px;
            }
        }
    }
</style>