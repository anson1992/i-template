<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2023-03-21 20:58:42
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-18 19:22:58
 * @FilePath: /i-template/src/views/index/index.vue
 * @Description: 首页
-->
<template>
  <div class="preview-page">
    <el-button @click="handleRequest">请求</el-button>
    <el-button type="primary" @click="handleRequest2">重复请求</el-button>
    <img src="https://36.134.83.184:9443/evo-apigw/evo-oss/image/local_dtqlwzay_001/alarm_1/2023-04-18/d64fc533002d2b1cd395aa4717ddbede13000000_1681816692_1752417.jpg" />
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
<style lang="scss">
img {
  width: 426px;
  height: 139px;
  object-fit: contain;
}
</style>
