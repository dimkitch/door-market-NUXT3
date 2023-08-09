<template>
    <div class="layout-wrapper">
        <slot />
    </div>
</template>
<style lang="scss">
.layout-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-x: hidden;
}
</style>