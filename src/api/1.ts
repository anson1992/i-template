/*
 * @Author: changjun anson1992@163.com
 * @Date: 2023-04-14 21:17:26
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-15 10:45:13
 * @FilePath: /i-template/src/api/1.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '../utils/request-api'
import { RequestTypeEnum } from '../utils/request-api/http-enum'
export const getInfoConfig = () => {
  return request.request(
    {
      method: RequestTypeEnum.GET,
      url: 'http://jsonplaceholder.typicode.com/photos'
    },
    {
      isShowServerErrorMessage: false,
      isShowErrorMessage: false
    }
  )
}
