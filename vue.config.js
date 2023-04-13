/*
 * @Author: changjun anson1992@163.com
 * @Date: 2023-03-21 20:50:43
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-13 19:12:59
 * @FilePath: /i-template/vue.config.js
 * @Description: 工程配置
 */
const { defineConfig } = require('@vue/cli-service')
const { resolve } = require('path')
const IS_DEV = ['development'].includes(process.env.NODE_ENV)
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    // 移除 preload 插件
    config.plugins.delete('preload')
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    // 优化二次启动速度
    config.cache({
      // 将缓存类型设置为文件系统,默认是memory
      type: 'filesystem',
      buildDependencies: {
        // 更改配置文件时，重新缓存
        config: [__filename]
      }
    })
    // https://webpack.js.org/configuration/optimization/#optimizationruntimechunk
    config.optimization.runtimeChunk('single')

    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(IS_DEV, config => config.devtool('cheap-source-map'))
    config.plugin('html').tap(args => {
      args[0].title = 'Link 链客云数字营销平台'
      return args
    })
    // 忽略解析markdown文件
    config.module.noParse(/\.md$/)
    config.module.rule('svg').exclude.add(resolve('src/assets/svg/icons')).end()

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/svg/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'svg-icon-[name]'
      })
  },
  css: {
    sourceMap: false,
    loaderOptions: {
      scss: {
        additionalData: `
        @import "./src/styles/common/variables.scss";
        `
      }
    }
  }
})
