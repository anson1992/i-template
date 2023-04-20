<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2023-03-21 20:50:43
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-13 20:06:52
 * @FilePath: /i-template/src/App.vue
 * @Description: 主体框架
-->
<template>
  <keep-alive>
    <el-config-provider :button="globalConfig.button" :message="globalConfig.message" :locale="globalConfig.locale">
      <router-view></router-view>
    </el-config-provider>
  </keep-alive>
</template>
<script setup lang="ts">
import zh from 'element-plus/es/locale/lang/zh-cn'
const globalConfig = {
  button: {
    autoInsertSpace: true
  },
  message: {
    max: 3
  },
  locale: zh
}
</script>
<style lang="scss">
@import './src/styles/common/global.scss';
@import './src/styles/element/index.scss';
</style>
