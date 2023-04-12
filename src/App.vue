<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2023-03-21 20:50:43
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-12 15:17:18
 * @FilePath: /i-template/src/App.vue
 * @Description: 主体框架
-->
<template>
  <el-config-provider
    :size="globalConfig.size"
    :button="globalConfig.button"
    :message="globalConfig.message"
    :locale="globalConfig.locale"
  >
    <router-view />
  </el-config-provider>
</template>
<script setup lang="ts">
import zh from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
const globalConfig = {
  size: 'small',
  button: {
    autoInsertSpace: true
  },
  message: {
    max: 3
  },
  locale: en
}
</script>
<style lang="scss"></style>
