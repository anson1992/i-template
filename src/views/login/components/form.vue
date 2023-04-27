<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2023-04-23 18:42:27
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-26 20:36:16
 * @FilePath: /i-template/src/views/login/components/form.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="top-view">
    <i-left class="hidden-md-and-up"></i-left>
  </div>
  <div class="form-box">
    <div class="top-label hidden-sm-and-down">Sign in</div>
    <el-form :model="loginModel" label-position="top" size="large">
      <el-form-item label="UserName">
        <el-input v-model="loginModel.userName" placeholder="Enter email or user name"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="loginModel.password" :type="showPassword ? 'password' : 'text'" placeholder="Password">
          <template #append>
            <el-icon @click="handleViewPassword" size="20px" color="#A7A3FF">
              <View v-if="showPassword" />
              <Hide v-else />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item class="flex-end">
        <el-button text type="info" size="default">Forgor password?</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="large">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup name="IForm">
import { reactive, ref } from 'vue'
import { View, Hide } from '@element-plus/icons-vue'
import iLeft from './left.vue'
interface LoginFormByPwd {
  userName: string
  password: string
  code: string
}
const loginModel = reactive<LoginFormByPwd>({
  userName: '',
  password: '',
  code: ''
})

// 是否显示密码
const showPassword = ref<boolean>(false)
const handleViewPassword = () => {
  showPassword.value = !showPassword.value
}
</script>
<style lang="scss" scoped>
.top-view {
  width: 332px;
  .i-left {
    height: 100%;
    :deep(.main-box) {
      text-align: left;
      .title-1 {
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 10px;
      }
      .title-2 {
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 36px;
      }
      .title-3 {
        font-size: 14px;
        font-weight: 400;
        line-height: 32px;
        &:last-child {
          padding-bottom: 40px;
        }
      }
    }
    :deep(.img-box) {
      display: none;
    }
  }
}
.form-box {
  width: 368px;
  margin: 0 auto;
  @include responsive($s-width) {
    width: 322px;
  }
  .top-label {
    font-weight: 500;
    font-size: 40px;
    margin-bottom: 28px;
  }
  :deep(.el-input__wrapper) {
    background-color: #f0efff;
    box-shadow: none;
  }
  :deep(.el-input-group__append) {
    background-color: #f0efff;
    box-shadow: none;
  }
  :deep(.el-button--large) {
    flex: 1;
    --el-button-size: 52px !important;
    box-shadow: 0px 4px 48px 0px rgba(77, 71, 195, 0.4);
  }
  .flex-end {
    :deep(.el-form-item__content) {
      justify-content: flex-end;
    }
  }
}
</style>
