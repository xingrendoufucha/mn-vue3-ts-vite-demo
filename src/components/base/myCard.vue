<script setup lang="ts">
</script>

<template>
    <div class="my-custom-card">
        <slot />
    </div>
</template>

<style lang="less">
.my-custom-card {
    padding: 15px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.2);
}
</style>