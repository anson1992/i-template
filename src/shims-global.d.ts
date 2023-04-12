/*
 * @Author: changjun anson1992@163.com
 * @Date: 2023-04-11 19:36:23
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-12 11:25:44
 * @FilePath: /i-template/src/shims-global.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export {}
declare global {
  interface ImportMeta {
    env: Record<string, unknown>
  }
  interface Window {
    showOpenFilePicker: any
    showSaveFilePicker: any
    showDirectoryPicker: any
  }
}
