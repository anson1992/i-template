/*
 * @Author: changjun anson1992@163.com
 * @Date: 2023-04-12 16:14:09
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-12 16:17:45
 * @FilePath: /i-template/src/store/modules/common.ts
 * @Description: 工程公共缓存数据
 */
import { defineStore } from 'pinia'

export interface CommonState {
  locale: string
}

export const useCommonStore = defineStore({
  id: 'common',
  state: (): CommonState => ({
    locale: 'zhCn'
  })
})
