<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2023-04-23 18:42:04
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-26 17:55:19
 * @FilePath: /i-template/src/views/login/index.vue
 * @Description: 登录
-->
<template>
  <div class="login-index">
    <div class="top-logo">Your Logo</div>
    <el-row :gutter="20">
      <el-col :md="12" :sm="8" class="hidden-sm-and-down">
        <i-left></i-left>
      </el-col>
      <el-col :md="12" :sm="16" class="right-login-form">
        <i-form></i-form>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup name="LoginIndex">
import iLeft from './components/left.vue'
import iForm from './components/form.vue'
</script>
<style lang="scss" scoped>
@import './indes.scss';
</style>
