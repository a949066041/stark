/*
 * @Author: Rikka
 * @Date: 2022-11-11 13:58:05
 * @LastEditTime: 2022-11-22 20:56:41
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\sneaky\tailwind.config.js
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,ts}",
    "../nightclub/src/**/*.{vue,ts}",
    "../../common/arc/src/**/*.{html,vue,ts,tsx,scss}"
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
