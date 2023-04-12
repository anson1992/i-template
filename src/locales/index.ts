/*
 * @Author: changjun anson1992@163.com
 * @Date: 2023-04-12 15:59:53
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-12 16:39:33
 * @FilePath: /i-template/src/locales/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createI18n } from 'vue-i18n'
import zhCn from './languages/zh-cn'
import en from './languages/en'

import { getLocalStorage } from '@/utils/storage'
console.log('locale:', getLocalStorage('locale'))

// 创建I18n
const i18n = createI18n({
  legacy: false,
  globalInjection: true, // 全局模式，可直接使用$t
  locale: getLocalStorage('locale') || 'zhCn', // 本地语言
  messages: {
    zhCn,
    en
  }
})

export default i18n
