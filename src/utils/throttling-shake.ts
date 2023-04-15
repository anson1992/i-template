/*
 * @Author: changjun anson1992@163.com
 * @Date: 2023-04-14 20:47:27
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-14 21:37:42
 * @FilePath: /i-template/src/utils/throttling-antiShake.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  debounce: function (fn: any, delay: number) {
    let timer: any = null
    return function (this: any) {
      const self = this,
        params = arguments
      timer && clearTimeout(timer)
      timer = setTimeout(function () {
        fn.apply(self, params)
      }, delay)
    }
  },
  throttle: function (fn: any, mustDelay: number) {
    let start = 0
    return function (this: any) {
      const now = new Date().getTime()
      const self = this
      if (now > start + mustDelay) {
        fn.apply(self, arguments)
        start = now
      }
    }
  }
}
