<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2023-03-21 20:58:42
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-21 21:47:26
 * @FilePath: /i-template/src/views/index/index.vue
 * @Description: 首页
-->
<template>
  <div class="preview-page">
    <el-calendar v-model="value" />
  </div>
</template>
<script lang="ts" setup name="Preview">
import { ref } from 'vue'
const value = ref(new Date())
</script>
<style lang="scss">
img {
  width: 426px;
  height: 139px;
  object-fit: contain;
}
</style>
