/*
 * @Author: Rikka
 * @Date: 2022-11-29 20:54:41
 * @LastEditTime: 2022-12-04 11:33:59
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\cassanova\babel.config.js
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      {
        libraryName: "@formily/element-plus",
        libraryDirectory: "esm",
        style: true
      }
    ]
  ]
};
