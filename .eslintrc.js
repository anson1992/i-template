/*
 * @Author: changjun anson1992@163.com
 * @Date: 2023-03-21 20:50:43
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-10 20:53:41
 * @FilePath: /i-template/.eslintrc.js
 * @Description: eslint语法配置
 */
module.exports = {
  root: true,
  env: {
    // 环境 针对那些环境的语法
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended', // 继承 eslint 默认配置
    'plugin:vue/vue3-essential', // 适配vue3
    'plugin:@typescript-eslint/recommended', // 适配ts
    'plugin:prettier/recommended'
  ],
  overrides: [],
  // 可以解析.vue 文件
  parser: 'vue-eslint-parser', // esprima babel-eslint @typescript-eslint/parser
  // 指定选项器并配置选项
  parserOptions: {
    parser: '@typescript-eslint/parser', // 解析ts文件的
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-tabs': 'off',
    indent: 'off',
    'space-before-function-paren': 'off',
    camelcase: 'off',
    'no-mixed-spaces-and-tabs': 'off',
    // 'prettier/prettier': 0,
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-this-alias': 'off'
  }
}
