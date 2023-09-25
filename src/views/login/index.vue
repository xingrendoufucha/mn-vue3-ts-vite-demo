<script setup lang="ts">
    import { reactive, ref, onMounted, onUnmounted } from 'vue'
    import { useRouter } from 'vue-router';
    import { login } from '@/http/login'
    import { setStorageItem } from '@/utils'
    import type { FormInstance } from 'element-plus'

    import { initCanvas } from "@/utils/hackerBackgroundWall"
    const loginFormRef = ref<FormInstance>()
    const router = useRouter()
    const loginForm = reactive({
        name: '',
        pwd: ''
    })
    const rules = reactive({
      name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
      pwd: [{ required: true, message: "请输入密码", trigger: "blur" }]
    })
    const loading = ref(false);

    const onSubmit = (formEl: FormInstance | undefined) => {
        if(!formEl) return
        formEl.validate(async (valid, fields) => {
          if (valid) {
            loading.value = true
            try {
                let token = await login(loginForm)
                token && setStorageItem('xToken', token)
                router.push('/home')
            } finally {
              loading.value = false;
            }
          } else {
            console.log('error submit!', fields)
          }
        })
    }
    const onReset = (formEl: FormInstance | undefined) => {
        formEl?.resetFields()
    }
    let requestAnimation:number | null = null
    onMounted(() => {
      initCanvas(requestAnimation)
    }) 
    window.addEventListener('resize', () => {
      initCanvas(requestAnimation)
    })
    

    
    onUnmounted(()=> {
      requestAnimation && cancelAnimationFrame(requestAnimation)
    })
    
</script>

<template>
    <div class="login-bg">
      <canvas id="login-canvas" style="background-color: #000;"></canvas>
      <my-card class="my-login-card">
          <el-form ref="loginFormRef" :rules="rules" :model="loginForm" label-width="120px">
              <el-form-item label="账号" prop="name">
                <el-input v-model="loginForm.name" />
              </el-form-item>
              <el-form-item label="密码" prop="pwd">
                <el-input v-model="loginForm.pwd" />
              </el-form-item>
              <el-form-item>
                <el-button type="info" @click="onReset(loginFormRef)">重置</el-button>
                <el-button type="primary" :loading="loading" @click="onSubmit(loginFormRef)">登录</el-button>
              </el-form-item>
          </el-form>
      </my-card>
    </div>
</template>

<style scoped >
.login-bg {
  position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    #login-canvas {
      position: absolute;
      z-index: 1;
    }
    .title {
        font-size: 28px;
        color: #fff;
        font-weight: bold;
    }
    .my-login-card {
      position: relative;
      width: 700px;
      height: 400px;
      box-sizing: border-box;
      z-index: 2;
      /* display: flex; */

    }
}
</style>