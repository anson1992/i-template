/*
 * @Author: changjun anson1992@163.com
 * @Date: 2023-03-21 20:50:43
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-13 11:32:02
 * @FilePath: /i-template/babel.config.js
 * @Description: babel 配置
 */
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    // ？？
    '@babel/plugin-proposal-nullish-coalescing-operator',
    // 可选链
    '@babel/plugin-proposal-optional-chaining'
  ]
}
