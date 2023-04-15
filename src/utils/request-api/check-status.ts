/*
 * @Author: changjun anson1992@163.com
 * @Date: 2022-05-07 23:54:19
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-14 21:36:59
 * @FilePath: /KD-KDPLUS-OPEN/src/utils/axios-http/check-status.ts
 * @Description: 异常处理
 */
/**
 * 接口响应编码逻辑处理
 * @param status
 * @param message
 */
import { ElNotification } from 'element-plus'
import util from '../throttling-shake'

const _error = (message: string) => {
  return util.throttle(() => {
    ElNotification.error({
      title: '错误',
      message: message
    })
  }, 1500)
}

export function checkStatus(status: number, msg?: string): void {
  switch (status) {
    case 400:
      _error(msg || '网络请求超时！')
      break
    case 401:
      _error('用户没有权限（令牌、用户名、密码错误）!')
      // 拼接返回链接
      // const backUrl = `${process.env.VUE_APP_INVITE_USER_DOMAIN}${router.currentRoute.value.fullPath}`
      // 清理缓存数据，未登录跳转至登录页面，并携带当前页面的路径
      break
    case 403:
      _error('用户得到授权，但是访问是被禁止的!')
      break
    case 404:
      _error('网络请求错误,未找到该资源!')
      break
    case 500:
      _error(msg || '服务器错误,请联系管理员!')
      break
    case 501:
      _error('网络未实现!')
      break
    case 502:
      _error('网络错误!')
      break
    case 503:
      _error('服务不可用，服务器暂时过载或维护!')
      break
    case 504:
      _error('网络超时!')
      break
    case 505:
      _error('http版本不支持该请求!')
      break
    default:
      _error(msg || '网络请求超时！')
  }
}
