<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2023-04-23 18:42:22
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-26 21:05:06
 * @FilePath: /i-template/src/views/login/components/left.vue
 * @Description: 左侧信息&Logo
-->
<template>
  <div class="i-left">
    <div class="main-box">
      <p class="title-1">Sign in to</p>
      <p class="title-2">Lorem Ipsum is simply</p>
      <p class="title-3">If you don’t have an account register</p>
      <p class="title-3">You can <span>Register here !</span></p>
    </div>
    <div class="img-box">
      <img src="../../../assets/Saly-14@2x.png" alt="" />
    </div>
  </div>
</template>
<script lang="ts" setup name="ILeft"></script>
<style lang="scss" scoped>
.i-left {
  position: relative;
  display: flex;
  @include full-screen-px;
  @include flex-center;
  height: 100vh;
  flex-direction: column;
  max-width: 520px;
  .main-box {
    width: 100%;
    box-sizing: border-box;
    .title-1 {
      font-size: 50px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .title-2 {
      font-size: 34px;
      font-weight: 500;
      margin-bottom: 56px;
    }
    .title-3 {
      font-size: 16px;
      font-weight: 400;
      line-height: 32px;
      &:last-child {
        padding-bottom: 40px;
      }
      span {
        color: rgba(77, 71, 195, 1);
        font-weight: 600;
      }
    }
  }
  .img-box {
    position: absolute;
    right: 0;
    bottom: -80px;
    img {
      width: 312px;
      height: 556px;
    }
    @include responsive($n-width) {
      bottom: -40px;
      img {
        width: 240px;
        height: 428px;
      }
    }
    @include responsive($m-width) {
      bottom: -40px;
      img {
        width: 240px;
        height: 428px;
      }
    }
    @include responsive($s-width) {
      bottom: -40px;
      img {
        width: 200px;
        height: 357px;
      }
    }
  }
}
</style>
