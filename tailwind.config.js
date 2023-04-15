/*
 * @Author: changjun anson1992@163.com
 * @Date: 2023-04-12 21:51:53
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-04-15 11:37:07
 * @FilePath: /i-template/tailwind.config.js
 * @Description:
 */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  important: true,
  content: [],
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia
    },
    extend: {},
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled']
    }
  },
  plugins: [],
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}']
}
