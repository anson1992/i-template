<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2023-05-04 17:26:32
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-05-04 20:55:50
 * @FilePath: /i-template/src/views/big-screen/index.vue
 * @Description: 数字新基建场景创新平台
-->
<template>
  <scale-box :width="1333" :height="771" bgc="#1E1E1E" :delay="100">
    <div class="big-screen-index">
      <div class="_header">
        <span class="title">数字新基建场景创新平台</span>
      </div>
      <div class="_content">
        <div class="item wuye">
          <div class="title">
            <span>物业管理平台</span>
          </div>
        </div>
        <div class="item oa">
          <div class="title">
            <span>园区OA系统</span>
          </div>
        </div>
        <div class="item szlspt">
          <div class="title">
            <span>数字孪生平台</span>
          </div>
        </div>
        <div class="item djpt">
          <div class="title">
            <span>党建平台</span>
          </div>
        </div>
        <div class="item iot">
          <div class="title">
            <span>IOT管理平台</span>
          </div>
        </div>
        <div class="item zcgl">
          <div class="title">
            <span>资产管理平台</span>
          </div>
          <div class="bg">
            <img src="../../assets/image155.png" />
            <img src="../../assets/image150.png" />
          </div>
        </div>
        <div class="item zsy">
          <div class="title">
            <span>招商赢</span>
          </div>
          <div class="title-2-box">
            <div class="title-2">
              <span>招商驾驶舱</span>
            </div>
            <div class="title-2">
              <span>产业招商大脑</span>
            </div>
          </div>
        </div>
        <div class="item lky">
          <div class="title">
            <span>链客云</span>
          </div>
          <div class="title-2-box">
            <div class="title-2">
              <span>微信应用</span>
            </div>
            <div class="title-2">
              <span>平台</span>
            </div>
          </div>
        </div>
      </div>
      <div class="_footer">
        <img src="../../assets/底部装饰.png" />
      </div>
    </div>
  </scale-box>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ScaleBox from 'vue3-scale-box'
export default defineComponent({
  name: 'BigScreenIndex',
  components: {
    ScaleBox
  },
  setup() {
    return {}
  }
})
</script>
<style lang="scss" scoped>
.big-screen-index {
  background-image: url('../../assets/g2cuxcaqth_1639471252925_chjbxaz2n.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: relative;
  ._header {
    position: fixed;
    left: 0;
    top: 0;
    background-image: url('../../assets/image154.png');
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 50px;
    padding: 4px 28px;
    box-sizing: border-box;
    .title {
      font-family: 'YouSheBiaoTiHei';
      font-size: 34px;
      color: #fff;
      font-weight: 400;
    }
  }
  ._content {
    .item {
      position: absolute;
      .title {
        background-image: url('../../assets/image151.png');
        font-family: 'YouSheBiaoTiHei';
        font-size: 24px;
        color: #fff;
        font-weight: 400;
        text-align: center;
        width: 222px;
        height: 36px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        &::before {
          content: url('../../assets/矩形备份-22.png');
          display: inline-block;
          width: 12px;
          height: 12px;
          position: absolute;
          left: 18px;
          top: 0;
        }
        &::after {
          content: url('../../assets/矩形备份-23.png');
          display: inline-block;
          width: 12px;
          height: 12px;
          position: absolute;
          right: 14px;
          top: 0;
        }
      }
      &.wuye {
        left: 346px;
        top: 112px;
      }
      &.oa {
        left: 83px;
        top: 265px;
      }
      &.szlspt {
        right: 255px;
        top: 110px;
      }
      &.djpt {
        background-image: url('../../assets/image153.png');
        right: 18px;
        top: 264px;
        .title {
          &::before {
            content: url('../../assets/矩形备份-24.png');
            display: inline-block;
            width: 12px;
            height: 12px;
            position: absolute;
            left: 18px;
            top: 0;
          }
          &::after {
            content: url('../../assets/矩形备份-25.png');
            display: inline-block;
            width: 12px;
            height: 12px;
            position: absolute;
            right: 14px;
            top: 0;
          }
        }
      }
      &.iot {
        right: 206px;
        top: 371px;
      }
      &.zcgl {
        left: 525px;
        top: 483px;
        position: absolute;
        .bg {
          img {
            position: absolute;
            &:first-child {
              width: 103px;
              height: 141px;
              left: 80px;
              top: 30px;
            }
            &:last-child {
              width: 270px;
              height: 227px;
              left: 0px;
              top: 20px;
            }
          }
        }
      }
      &.zsy {
        top: 150px;
        left: 604px;
        .title {
          background: none;
          font-size: 32px;
          &::before {
            content: '';
          }
          &::after {
            content: '';
          }
        }
        .title-2-box {
          margin-top: 4px;
          .title-2 {
            background-image: url('../../assets/image152.png');
            font-family: 'YouSheBiaoTiHei';
            font-size: 20px;
            color: #13e9ff;
            font-weight: 400;
            text-align: center;
            width: 212px;
            height: 26px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            &:last-child {
              margin-top: 4px;
            }
            &::before {
              content: url('../../assets/矩形备份-22.png');
              display: inline-block;
              width: 12px;
              height: 12px;
              position: absolute;
              left: 18px;
              top: 0;
            }
            &::after {
              content: url('../../assets/矩形备份-23.png');
              display: inline-block;
              width: 12px;
              height: 12px;
              position: absolute;
              right: 14px;
              top: 0;
            }
          }
        }
      }
      &.lky {
        top: 325px;
        left: 285px;
        .title {
          background: none;
          font-size: 32px;
          &::before {
            content: '';
          }
          &::after {
            content: '';
          }
        }
        .title-2-box {
          margin-top: 4px;
          .title-2 {
            background-image: url('../../assets/image152.png');
            font-family: 'YouSheBiaoTiHei';
            font-size: 20px;
            color: #13e9ff;
            font-weight: 400;
            text-align: center;
            width: 212px;
            height: 26px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            &:last-child {
              margin-top: 4px;
            }
            &::before {
              content: url('../../assets/矩形备份-22.png');
              display: inline-block;
              width: 12px;
              height: 12px;
              position: absolute;
              left: 18px;
              top: 0;
            }
            &::after {
              content: url('../../assets/矩形备份-23.png');
              display: inline-block;
              width: 12px;
              height: 12px;
              position: absolute;
              right: 14px;
              top: 0;
            }
          }
        }
      }
    }
  }
  ._footer {
    position: fixed;
    left: 0;
    bottom: -3px;
    img {
      width: 100%;
      height: 26px;
    }
  }
}
</style>
