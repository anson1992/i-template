/*
 * @Author: changjun anson1992@163.com
 * @Date: 2022-04-27 16:03:29
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2022-05-13 16:44:41
 * @FilePath: /KD-KDPLUS-OPEN/src/utils/axios-http/http-enum.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 请求结果返回码
 */
export enum ResultEnum {
  SUCCESS = 200,
  ERROR = -1,
  NO_AUTH = 401,
  NO_PACKAGE = 307,
  NO_PERMISSION = 403
}

/**
 * 请求方法
 */

export enum RequestTypeEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH'
}

export enum ContentTypeEnum {
  // JSON
  JSON = 'application/json;charset=UTF-8',
  // Text
  Text = 'text/plain;charset=UTF-8',
  // form-data 上传
  FORM_DATA = 'application/x-www-form-urlencoded',
  // form-data 一般配合qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8'
}
