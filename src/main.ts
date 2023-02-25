import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import 'virtual:svg-icons-register'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from '@/router'

createApp(App).use(router).use(createPinia()).use(ElementPlus).mount('#app')
