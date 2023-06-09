/*
 * @Author: changjun anson1992@163.com
 * @Date: 2023-03-21 20:50:43
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-12 16:22:47
 * @FilePath: /i-template/src/main.ts
 * @Description: 工程入口配置
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import { setupStore } from './store'
import i18n from './locales'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(ElementPlus)
app.use(setupStore).use(router).use(i18n).mount('#app')
