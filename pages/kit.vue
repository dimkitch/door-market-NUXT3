<template>
    <main class="kit-page">
        <div class="container">
            <h1 class="kit-page__title">Style Guide</h1>
            <div class="kit-page__content">
                <TestInput></TestInput>
                <div class="kit-page__item">
                    <div class="colors">
                        <h2 class="colors__title">Цвета</h2>
                        <div class="colors__content">
                            <div class="colors__item">
                                <div class="colors__prewiew" style="background-color: #A9845C;"></div>
                                <div class="colors__description">#A9845C</div>
                            </div>
                            <div class="colors__item">
                                <div class="colors__prewiew" style="background-color: #B14101;"></div>
                                <div class="colors__description">#A9845C</div>
                            </div>
                            <div class="colors__item">
                                <div class="colors__prewiew" style="background-color: #FFD6A8;"></div>
                                <div class="colors__description">#A9845C</div>
                            </div>
                            <div class="colors__item">
                                <div class="colors__prewiew" style="background-color: #3B3937;"></div>
                                <div class="colors__description">#3B3937</div>
                            </div>
                            <div class="colors__item">
                                <div class="colors__prewiew" style="background-color: #B1B0AF;"></div>
                                <div class="colors__description">#B1B0AF</div>
                            </div>
                            <div class="colors__item">
                                <div class="colors__prewiew" style="background-color: #DADADA;"></div>
                                <div class="colors__description">#DADADA</div>
                            </div>
                            <div class="colors__item">
                                <div class="colors__prewiew" style="background-color: #FFFFFF;"></div>
                                <div class="colors__description">#FFFFFF</div>
                            </div>
                            <div class="colors__item">
                                <div class="colors__prewiew" style="background-color: #F3F0EE;"></div>
                                <div class="colors__description">#F3F0EE</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="kit-page__item">
                    <div class="typography">
                        <h2 class="typography__title">Типографика</h2>
                        <div class="typography__content">
                            <div class="typography__item">
                                <div class="typography__item-description">h1</div>
                                <h1 class="title-xxl">Hayes Valley Studio</h1>
                            </div>
                            <div class="typography__item">
                                <div class="typography__item-description">h2</div>
                                <h2 class="title-xl">Hayes Valley Studio</h2>
                            </div> 
                            <div class="typography__item">
                                <div class="typography__item-description">h3</div>
                                <h3 class="title-lg">Hayes Valley Studio</h3>
                            </div>
                             <div class="typography__item">
                                <div class="typography__item-description">h4</div>
                                <h4 class="title-ll">Hayes Valley Studio</h4>
                            </div> 
                            <div class="typography__item">
                                <div class="typography__item-description">h5</div>
                                <h5 class="title-sm">Hayes Valley Studio</h5>
                            </div> 
                            <div class="typography__item">
                                <div class="typography__item-description">h6</div>
                                <h6 class="title-md">Hayes Valley Studio</h6>
                            </div>
                            <div class="typography__item">
                                <div class="typography__item-description">body L</div>
                                <h6 class="text-xl">Hayes Valley Studio</h6>
                            </div>
                            <div class="typography__item">
                                <div class="typography__item-description">body L bold</div>
                                <h6 class="text-xl">Hayes Valley Studio</h6>
                            </div>
                            <div class="typography__item">
                                <div class="typography__item-description">body M</div>
                                <h6 class="text-lg">Hayes Valley Studio</h6>
                            </div>
                            <div class="typography__item">
                                <div class="typography__item-description">body M bold</div>
                                <h6 class="text-lg">Hayes Valley Studio</h6>
                            </div>
                            <div class="typography__item">
                                <div class="typography__item-description">body S</div>
                                <h6 class="text-md">Hayes Valley Studio</h6>
                            </div> 
                            <div class="typography__item">
                                <div class="typography__item-description">body XS</div>
                                <h6 class="text-sm">Hayes Valley Studio</h6>
                            </div>
                            <div class="typography__item">
                                <div class="typography__item-description">body XS bold</div>
                                <h6 class="text-sm">Hayes Valley Studio</h6>
                            </div>
                            <div class="typography__item">
                                <div class="typography__item-description">button</div>
                                <h6 class="text-ll">Hayes Valley Studio</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="kit-page__item">
                    <div class="buttons">
                        <h2 class="buttons__title">Кнопки</h2>
                        <div class="buttons__inner">
                            <div class="buttons__item">
                                <CustomButton size="sm" theme="warning-deep">Купить</CustomButton>
                            </div>
                            <div class="buttons__item">
                                <CustomButton size="md" theme="warning-deep">подробнее</CustomButton>
                            </div>
                            <div class="buttons__item">
                                <CustomButton size="sm" theme="transparent">Купить</CustomButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="kit-page__item">
                    <div class="inputs">
                        <h2 class="inputs__title">Формы</h2>
                        <div class="inputs__inner">
                            <div class="inputs__iten">
                                <CustomInput>Имя*</CustomInput>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="kit-page__item">
                    <CustomDropDown>Выберите категорию</CustomDropDown>
                </div>
                <div class="kit-page__item">
                    <Counter></Counter>
                </div>
                <div class="kit-page__item">
                    <PriceRange v-model="range" />
                </div>
                <div class="kit-page__item">
                    <Accordion>
                        <template v-slot:title>
                            Тип дверей
                        </template>
                        <template v-slot:body>
                            <ul>
                                <CustomCheckbox v-model="form.policyCheckbox">Межкомнатные</CustomCheckbox>
                                <CustomCheckbox v-model="form.policyCheckbox">Скрытые</CustomCheckbox>
                                <CustomCheckbox v-model="form.policyCheckbox">Скандинавский</CustomCheckbox>
                                <CustomCheckbox v-model="form.policyCheckbox">Винтаж</CustomCheckbox>
                                <CustomCheckbox v-model="form.policyCheckbox">Современный</CustomCheckbox>
                                <CustomCheckbox v-model="form.policyCheckbox">Межкомнатные</CustomCheckbox>
                                <CustomCheckbox v-model="form.policyCheckbox">Скрытые</CustomCheckbox>
                            </ul>
                        </template>
                    </Accordion>
                    <CustomCheckbox v-model="form.policyCheckbox">Межкомнатные</CustomCheckbox>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
const range = {
    min:0,
    max:270,
}
let form = reactive({
        policyCheckbox: false,
    });
</script>
<style lang="scss">
    .kit-page {
        // .kit-page__title
        &__title {
        }

        // .kit-page__content
        &__content {
        }

        // .kit-page__item
        &__item {
            margin-top: 10px;
            margin-bottom: 100px;
        }
    }
    .colors {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 70px;

        // .colors__content
        &__content{
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
        }
        
        // .colors__item
        &__item{
            margin-right: 10px;
            margin-bottom: 10px;
        }
        
        // .colors__prewiew
        &__prewiew{
            width: 120px;
            height: 120px;
            background-color: red;
            border-radius: 9px;
        }

        // .colors__description
        &__description{
            margin-top: 9px;  
            color: var(--131313, #131313);
            text-align: center;
            font-size: 11px;
            line-height: 130%;     
        }
    }
    .typography {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 70px;

        // .typography__content
        &__content{
            display: flex;
            flex-direction: column;
        }

        // .typography__item
        &__item {
            display:flex;
            align-items: center;
            
            &:not(:last-child){
                margin-bottom: 15px;
            }
        }

        // .typography__item-description
        &__item-description {
            min-width: 80px;
            margin-right: 42px;
            font-size: 13px;
            line-height: 130%; 
            text-align: end;
            color:#B1B0AF; 
        }
    }
    .buttons {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 70px;
        // .buttons__item
        &__item{
            &:not(:last-child){
                margin-right: 90px;
            }
        }
        // .buttons__inner
        &__inner{
            display: flex;
        }
    }
    .inputs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 70px;
    }
</style>
  