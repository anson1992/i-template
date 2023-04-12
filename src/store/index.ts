/*
 * @Author: changjun anson1992@163.com
 * @Date: 2023-03-21 20:50:43
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-12 16:12:40
 * @FilePath: /i-template/src/store/index.ts
 * @Description: 数据持久化
 */
import type { App } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
const store = createPinia()
// 持久化缓存
store.use(piniaPluginPersist)

export const setupStore = (app: App<Element>) => {
  app.use(store)
}

export { store }
