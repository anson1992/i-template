<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2023-04-10 20:59:30
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-20 10:04:54
 * @FilePath: /i-template/CHANGELOG.md
 * @Description: 工程修订日志
-->
# CHANGELOG

## 2023.04.17
- 配置文件修改应用浏览器地址栏名称
- 引入【compression-webpack-plugin】插件，实现工程build的GZIP压缩打包
- vue.config.js实现build文件的合并处理
- 引入【webpackbar】插件，实现打包进度监控
- 引入【webpack-bundle-analyzer】插件实现打包分析
- ☆☆☆☆☆实现本地打包文件发布至服务器

## 2023.04.17
- 全局环境变量

## 2023.04.15
- 封装了Axios请求，重点解决重复请求的拦截

## 2023.04.13
- 页面框架搭建
- 也算是引入了svg公共组件
- 引入平台的基础字体文件
- 引入公共样式

## 2023.04.12
- 引入持久化方案 pinia
- 引入国际化方案 i18n

## 2023.04.10
*项目脚手架正常运行*
- 剔除冗余文件；
- 引入eslint、prettier代码格式化库；主要增加了。eslintrc.js、prettierrc.js文件；
- 引入插件包版本锁定配置文件，防止因插件版本问题导致工程运行；
- 引入前端组件库：ElementPlus
