/*
 * @Author: changjun anson1992@163.com
 * @Date: 2023-04-14 21:17:26
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-27 17:16:44
 * @FilePath: /i-template/src/api/1.ts
 * @Description: 登录&权限
 */
import request from '../utils/request-api'
import { RequestTypeEnum } from '../utils/request-api/http-enum'
import smCrypto from '../utils/sm-crypto'
export const doLogin = (userName: string, password: string) => {
  return request.request(
    {
      method: RequestTypeEnum.GET,
      url: 'serverApi/api/webapp/auth/b/doLogin',
      params: {
        account: userName,
        password: smCrypto.doSm2Encrypt(password)
      }
    },
    {
      isShowServerErrorMessage: false,
      isShowErrorMessage: true,
      ignorePendingRequest: true
    }
  )
}
