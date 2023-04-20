/*
 * @Author: changjun anson1992@163.com
 * @Date: 2023-03-21 17:33:23
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-17 21:48:24
 * @FilePath: /i-template/.prettierrc.js
 * @Description: 格式化配置
 */
module.exports = {
  singleQuote: true, // 使用单引号,默认false(在jsx中配置无效, 默认都是双引号)，现在配置使用双引号
  semi: false, // 末尾添加分号,默认true，现在配置不加分号
  tabWidth: 2, // tab缩进大小,默认为2
  trailingComma: 'none', // 对象最后一项默认格式化会加逗号
  useTabs: false, // 使用tab缩进，默认false
  endOfLine: 'auto', // 结尾是 \n \r \n\r auto
  jsxBracketSameLine: false, // 在jsx中把'>' 是否单独放一行
  jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
  arrowParens: 'avoid', // 箭头函数参数括号 默认avoid 可选 avoid(能省略括号的时候就省略)| always(总是有括号)
  bracketSpacing: true, // 对象中的空格 默认true{ foo: bar } false:{foo: bar}
  printWidth: 200 // 一行多长，超过的会换行
}
