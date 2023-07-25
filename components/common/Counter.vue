<template>
    <div class="counter">
        <div class="counter__inner">
            <div class="counter__item" @click="decrease">
                <MinusIcon class="counter__btn" />
            </div>
            <div class="counter__item">
                <div class="counter__result">{{ count }}</div>
            </div>
            <div class="counter__item" @click="addition">
                <PlusIcon class="counter__btn" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'

    const count = ref(0)

    function addition(){
        count.value++
    }
    function decrease(){
        if(count.value <= 0) {
            return
        } else{
            count.value--
        }
    }
</script>
<style lang="scss">
$b:".counter";

#{$b} {
    width: 160px;
    height: 60px;

    // .counter__inner
    &__inner {
        display: grid;
        grid-template-columns: repeat(3, 33%);
        align-items: center;
        height: 100%;
        border: 1px solid $color-secondary-deep;
    }

    // .counter__item
    &__item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        cursor: pointer;
        transition: $transition-mod;

        &:hover #{$b}__btn {
            color: $color-warning;
        }
    }

    // .counter__btn
    &__btn {
        transition: $transition-mod;
    }

    // .counter__result
    &__result {
        font-size: 25px;
        font-weight: 700;
        font-family: PermianSerifTypeface;
    }
}
</style>