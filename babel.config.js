/*
 * @Author: changjun anson1992@163.com
 * @Date: 2023-03-21 20:50:43
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-26 16:49:34
 * @FilePath: /i-template/babel.config.js
 * @Description: babel 配置
 */
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  env: {
    development: {
      plugins: ['dynamic-import-node']
    }
  },
  plugins: [
    // ？？
    '@babel/plugin-proposal-nullish-coalescing-operator',
    // 可选链
    '@babel/plugin-proposal-optional-chaining'
  ]
}
