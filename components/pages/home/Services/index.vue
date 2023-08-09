<template>
    <div class="services">
        <div class="services__inner">
            <ServicesCard 
                class="services__services-card" 
                v-for="(card, index) in servicesListData" 
                :services="card" 
                :key="`services-card-${index}`"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
    interface IProps {
        servicesListData: object;
    }

    const props =  withDefaults(defineProps<IProps>(),{
        servicesListData: () => (
          []
        ),
    })

</script>

<style lang="scss">
    $b:".services";

    #{$b} {
        // .services__inner
        &__inner {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;

            @include tablet-sm {
                display: block;
            }
        }

        // .services__services-card
        &__services-card {
            @include tablet-sm {
                margin-bottom: 40px;
            }
    }
    }
</style>