import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import ElementPlus from 'element-plus'
import './components/base'
import './style/index.less'
import './style/borderColorful.less'
import 'element-plus/dist/index.css'
import './mock'
import{ createPinia } from 'pinia'

import componentRegister from './components/base'
console.log(import.meta)
console.log(import.meta.env)
createApp(App).use(ElementPlus).use(router).use(createPinia()).use(componentRegister).mount('#app')


