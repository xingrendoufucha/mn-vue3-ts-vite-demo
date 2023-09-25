<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <!-- <router-view v-slot="{ Component }">
    <keep-alive v-if="route.meta.alive">
      <component :is="Component" />
    </keep-alive>
    <component v-else :is="Component" />
  </router-view> -->
  <router-view />
</template>

<style scoped lang="less">

</style>
