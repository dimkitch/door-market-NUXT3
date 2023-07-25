<template>
    <div>
        <CustomInput v-model="form.name">Имя*</CustomInput>
        <CustomInput v-model="form.age">Возраст*</CustomInput>
        <CustomButton theme="warning-deep" @click="onSubmit">Отправить</CustomButton>
    </div>
</template>
<script setup lang="ts">
    import { reactive } from 'vue'

    const form = reactive({
        name:'',
        age:'',
    })
    function onSubmit(){
        console.log(form);
    }
</script>