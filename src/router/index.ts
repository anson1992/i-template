/*
 * @Author: changjun anson1992@163.com
 * @Date: 2023-03-21 20:50:43
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-21 21:49:49
 * @FilePath: /i-template/src/router/index.ts
 * @Description: 路由文件
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import systemRoutes from './system-routes'

NProgress.configure({
  easing: 'ease',
  speed: 500,
  trickleSpeed: 200,
  showSpinner: false
})
const routes: Array<RouteRecordRaw> = [...systemRoutes]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async () => {
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
