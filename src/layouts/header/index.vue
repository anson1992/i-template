<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2023-04-13 15:10:06
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-13 22:06:35
 * @FilePath: /i-template/src/components/header/index.vue
 * @Description: header
-->
<template>
  <el-header class="header" height="56px">
    <div class="logo">
      <img src="../../assets/logo.png" />
      <p class="title">Link 链客云</p>
    </div>
    <div class="nav">
      <div class="nav-item">
        <el-button>
          <template #icon>
            <el-icon size="16"><DataAnalysis /></el-icon>
          </template>
          <span class="font-normal">待办</span>
        </el-button>
      </div>
      <div class="nav-item">
        <el-button>
          <template #icon>
            <el-icon size="16"><Orange /></el-icon>
          </template>
          <span class="font-normal">仓库</span>
        </el-button>
      </div>
      <div class="nav-item theme">
        <el-icon size="16"><Moon /></el-icon>
      </div>
      <div class="nav-item note">
        <el-icon size="16"><Connection /></el-icon>
      </div>
      <el-dropdown trigger="click" placement="bottom-start">
        <div class="dropdown-link dropdown-item">
          <img src="../../assets/000m.jpg" />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <el-icon><Setting /></el-icon>
              <p class="dropdown-title">个人中心</p>
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon><Setting /></el-icon>
              <p class="dropdown-title">平台设置</p>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <el-icon><Warning /></el-icon>
              <p class="dropdown-title">清除缓存</p>
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon><Close /></el-icon>
              <p class="dropdown-title">退出登录</p>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>
<script lang="ts" setup name="Header">
import {
  Setting,
  Warning,
  Close,
  Connection,
  Moon,
  DataAnalysis,
  Orange
} from '@element-plus/icons-vue'
</script>
<style lang="scss" scoped>
.header {
  @apply flex align-middle flex-wrap justify-center items-center;
  align-items: center;
  border-bottom: 1px solid var(--self-border-color);
  box-shadow: inset 0 calc(1) 0 0 var(--self-border-color);
  color: var(--self-body-color);
  padding: 0 12px;
  box-sizing: border-box;
  background-color: #fff;
  .logo {
    display: flex;
    @apply items-center;
    img {
      height: 32px;
      border-radius: 6px;
    }
    .title {
      @apply font-medium;
      font-size: 1rem;
      margin-left: 8px;
    }
  }
  .nav {
    @apply flex  flex-1 justify-end;
    .nav-item {
      @apply flex justify-end items-center;
      margin-right: 12px;
    }
    .dropdown-item {
      &.dropdown-link {
        --user-icon-width: 32px;
        width: var(--user-icon-width);
        height: var(--user-icon-width);
        img {
          width: var(--user-icon-width);
          height: var(--user-icon-width);
          border-radius: 4px;
        }
      }
    }
  }
}
.dropdown-title {
  min-width: 110px;
}
</style>
