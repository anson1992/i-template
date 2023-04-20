<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2023-04-13 15:20:01
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-20 11:09:34
 * @FilePath: /i-template/src/layouts/index.vue
 * @Description: 组件框架
-->
<template>
  <div class="page-layout">
    <el-container direction="vertical">
      <i-header></i-header>
      <el-main class="page-view">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script lang="ts" setup name="PageLayout">
import iHeader from './header/index.vue'
</script>
<style lang="scss" scoped>
.page-layout {
  width: 100%;
  height: 100%;
}
</style>
