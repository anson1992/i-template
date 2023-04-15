<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2023-03-21 20:58:42
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-15 11:43:33
 * @FilePath: /i-template/src/views/index/index.vue
 * @Description: 首页
-->
<template>
  <div class="preview-page">
    <el-button @click="handleRequest">请求</el-button>
    <el-button type="primary" @click="handleRequest2">重复请求</el-button>
  </div>
</template>
<script lang="ts" setup name="Preview">
import { getInfoConfig } from '@/api/1'
const handleRequest = () => {
  getInfoConfig()
    .then(res => {
      console.log('res:', res)
    })
    .catch(err => {
      console.error('err:', err)
    })
}
const handleRequest2 = () => {
  let time = 0
  let tempInterval: any = null
  tempInterval = setInterval(() => {
    time++
    if (time < 10) {
      handleRequest()
    } else {
      console.log('time:', time)
      clearInterval(tempInterval)
    }
  }, 100)
}
</script>
<style lang="scss" scoped></style>
