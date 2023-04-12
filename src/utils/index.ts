/*
 * @Author: changjun anson1992@163.com
 * @Date: 2023-04-12 16:33:56
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-12 16:34:19
 * @FilePath: /i-template/src/utils/index.ts
 * @Description: 工具类
 */
export function parse(value: any) {
  let re = ''
  try {
    re = JSON.parse(value)
  } catch (err) {
    return value
  }
  return re
}
