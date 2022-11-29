/*
 * @Author: Rikka
 * @Date: 2022-11-29 20:54:41
 * @LastEditTime: 2022-11-29 22:12:00
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\cassanova\tailwind.config.js
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,ts}",
    "../../common/arc/src/**/*.{html,vue,ts,tsx,scss}",
    "../../common/silver/src/**/*.{html,vue,ts,tsx,scss}"
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
