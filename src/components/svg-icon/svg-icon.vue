<!--
 * @Author: changjun anson1992@163.com
 * @Date: 2022-11-13 10:03:48
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-13 20:00:12
 * @FilePath: /lowcode-platform/src/components/svg-icon/svg-icon.vue
 * @Description: svg组件
-->
<template>
  <svg v-bind="$attrs" class="svg-icon" :style="getStyle" aria-hidden="true" :stroke="props.color">
    <use :xlink:href="symbolId" :fill="props.color" />
  </svg>
</template>

<script lang="ts" setup name="SvgIcon">
import { computed, type CSSProperties, defineProps } from 'vue'

const importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('@/assets/svg/icons', true, /\.svg$/))
} catch (error) {
  console.log(error)
}
const props = defineProps({
  prefix: {
    type: String,
    default: 'svg-icon'
  },
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#333'
  },
  size: {
    type: [Number, String],
    default: 14
  }
})
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
const getStyle = computed((): CSSProperties => {
  const { size } = props
  const s = `${size}`.replace('px', '').concat('px')
  return {
    width: s,
    height: s
  }
})
</script>

<style lang="scss">
.svg-icon {
  overflow: hidden;
  vertical-align: -0.15em;
  fill: currentColor;
}
</style>
