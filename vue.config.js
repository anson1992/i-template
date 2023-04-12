/*
 * @Author: changjun anson1992@163.com
 * @Date: 2023-03-21 20:50:43
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-11 19:31:02
 * @FilePath: /i-template/vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@use "./src/styles/element/index.scss" as *;` // `@import "./src/styles/element/index.scss";`,
      }
    }
  }
})
