/*
 * @Author: changjun anson1992@163.com
 * @Date: 2023-03-21 20:50:43
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-27 14:23:37
 * @FilePath: /i-template/vue.config.js
 * @Description: 工程配置
 */
const { defineConfig } = require('@vue/cli-service')
const TerserPlugin = require('terser-webpack-plugin')
const WebpackBundleanAlyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin // 分析build的工具
const WebpackBar = require('webpackbar')
const IS_DEV = ['development'].includes(process.env.NODE_ENV)
const IS_ANALYZER = process.env.use_analyzer
const IS_PROD = ['production'].includes(process.env.VUE_APP_GLOBAL_ENV)
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: IS_DEV,
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

    // config
    //   .when(IS_DEV, config => config.devtool('cheap-source-map'))
    config.plugin('html').tap(args => {
      args[0].title = 'Link 链客云数字营销平台'
      return args
    })
    // 忽略解析markdown文件
    config.module.noParse(/\.md$/)
    if (IS_PROD) {
      // 打包GZIP压缩
      config.plugin('CompressionPlugin').use('compression-webpack-plugin', [
        {
          filename: '[path][base].gz',
          algorithm: 'gzip',
          test: /\.js$|\.css$|\.html$/,
          threshold: 10240, // 只处理比这个值大的资源。按字节计算
          minRatio: 0.8 // 只有压缩率比这个值小的资源才会被处理
        }
      ])
    }
    if (IS_PROD) {
      // 合并文件
      config.optimization.splitChunks({
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(s?css|less|sass)$/,
            chunks: 'all',
            priority: 10
          },
          common: {
            name: 'chunk-common',
            chunks: 'all',
            minChunks: 2, // 拆分前必须共享模块的最小 chunks 数。
            maxInitialRequests: 5, // 打包后的入口文件加载时，还能同时加载js文件的数量（包括入口文件）
            minSize: 0, // 生成 chunk 的最小体积
            priority: 1, // 优化将优先考虑具有更高 priority（优先级）的缓存组
            reuseExistingChunk: true // 如果当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用，而不是生成新的模块
          },
          vendors: {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            priority: 2,
            reuseExistingChunk: true
          }
        }
      })
    }
  },
  configureWebpack: config => {
    if (IS_PROD) {
      // 打包剔除日志 console.log
      const TerserPluginIndex = config.optimization.minimizer.findIndex(n => n.__pluginName === 'terser')
      config.optimization.minimizer[TerserPluginIndex] = new TerserPlugin({
        terserOptions: {
          warnings: false,
          format: {
            comments: false
          },
          compress: {
            drop_debugger: true, // 注释console
            drop_console: true,
            pure_funcs: ['console.log'] // 移除console
          }
        },
        extractComments: false, // 是否将注释提取到一个单独的文件中
        parallel: true // 是否并⾏打包
      })
      // 打包进度
      config.plugins.push(new WebpackBar({ name: 'PC', color: '#07c160' }))
    }
    if (IS_ANALYZER) {
      // 打包分析
      config.plugins.push(new WebpackBundleanAlyzer({ analyzerPort: 9601 }))
    }
  },
  css: {
    sourceMap: false,
    loaderOptions: {
      scss: {
        additionalData: `
        @import "./src/styles/element/index.scss";
        @import "./src/styles/common/variables.scss";
        @import "./src/styles/common/mixin.scss";
        `
      }
    }
  },
  devServer: {
    host: 'localhost',
    port: 8081,
    proxy: {
      '/serverApi': {
        target: 'https://t-meta-marketing-server.jsszkd.com',
        changeOrigin: true,
        pathRewrite: {
          '^/serverApi': '/'
        }
      }
    }
  }
})
