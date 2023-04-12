/*
 * @Author: changjun anson1992@163.com
 * @Date: 2023-03-21 20:50:43
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-10 20:45:29
 * @FilePath: /i-template/src/router/index.ts
 * @Description: 路由文件
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import IndexView from '../views/index/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
