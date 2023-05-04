/*
 * @Author: changjun anson1992@163.com
 * @Date: 2023-04-13 16:36:30
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-05-04 17:28:08
 * @FilePath: /i-template/src/router/system-routes.ts
 * @Description: 系统路由
 */
const routes = [
  {
    name: 'layout',
    path: '/',
    component: () => import('@/layouts/index.vue'),
    redirect: '/preview',
    children: [
      {
        path: '/preview',
        name: 'index',
        component: import('@/views/preview/index.vue')
      }
    ]
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    name: 'big-screen',
    path: '/big-screen',
    component: () => import('@/views/big-screen/index.vue')
  }
]

export default routes
