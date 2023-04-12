<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2023-03-21 20:58:42
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-12 16:30:48
 * @FilePath: /i-template/src/views/index/index.vue
 * @Description: 首页
-->
<template>
  <div>
    <el-button type="primary" @click="handleUploadFile">{{ $t('buttons.login') }}</el-button>
    <el-button type="primary" @click="handleWriteFile">写入</el-button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import dayjs from 'dayjs'
export default defineComponent({
  name: 'IndexView',
  setup() {
    // 测试前端文件上传
    const handleUploadFile = async () => {
      const fileHandle = await window.showOpenFilePicker({
        multiple: false, // 是否支持多文件
        types: [
          {
            description: 'Images',
            accept: {
              'image/*': ['.png', '.gif', '.jpeg', '.jpg', '.webp']
            }
          }
        ]
      })
      console.log('fileHandle:', fileHandle)
    }
    const testData = [
      {
        UUID: '939393202624767276',
        NAME: '自动串焊机',
        PATH: 'https://project-resouse.obs.cn-east-3.myhuaweicloud.com/中节能/自动串焊机.png',
        IS_DELETE: 0,
        MODEL_CLASS_UUID: '505946883588493339'
      },
      {
        UUID: '172044555493387457',
        NAME: '综合办公楼',
        PATH: 'https://project-resouse.obs.cn-east-3.myhuaweicloud.com/中节能/综合办公楼.png',
        IS_DELETE: 0,
        MODEL_CLASS_UUID: '505946883588493339'
      },
      {
        UUID: '060900836287194166',
        NAME: 'M3车间',
        PATH: 'https://project-resouse.obs.cn-east-3.myhuaweicloud.com/中节能/M3车间.png',
        IS_DELETE: 0,
        MODEL_CLASS_UUID: '505946883588493339'
      }
    ]

    // 测试写入文件
    const handleWriteFile = async () => {
      // 首先创建目录：方便数据存储和读取
      const directoryHandle = await window.showDirectoryPicker()
      await directoryHandle.getDirectoryHandle(`scene-model-data_${dayjs().format('MM-DD-YYYY')}`, {
        create: true
      })

      const fileHandle = await window.showSaveFilePicker({
        types: [
          {
            description: 'Json Files',
            accept: {
              'text/*': ['.json']
            }
          }
        ]
      })
      // 创建一个可写流
      const writable = await fileHandle.createWritable()
      await writable.write(JSON.stringify(testData))
      // 关闭流
      await writable.close()
    }
    return {
      handleUploadFile,
      handleWriteFile
    }
  }
})
</script>
<style lang="scss" scoped>
.page {
}
</style>
