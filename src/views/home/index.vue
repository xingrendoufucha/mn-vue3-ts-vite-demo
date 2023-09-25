
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { vColorfulborderDirective } from '@/directives/cloorfulBorder.ts'
const router = useRouter()
const handleClick = () => {
    router.push({
        path: '/product',
        query: {
            id: 10
        }
    })
}
</script>


<template>
    <h1 class="text-stroke">这是home页</h1>
    <div class="btn my-colorful-border-treaming" v-colorfulborder-directive="{beginColr: '#e92322'}" title="这是一段很长很长的标题" :data-content="'这是一段很长很长的标题'"></div>
    <div class="my-colorful-border-123">
        <div class="container">
            123456
        </div>
    </div>
    <!-- <el-button type="pr imary" @click="handleClick">点击跳转</el-button> -->
</template>

<style lang="less" scoped>
.btn {
    width: 200px;
    height: 200px;
    margin-left: 50px;
    &::before {
        font-size: 24px;
        // line-height: 100%;
    }
}
.container {
    position: absolute;
    inset: 12px;
    z-index: 1;
    color: #fff;
    font-size: 24px;
    padding: 10px;
}
</style>