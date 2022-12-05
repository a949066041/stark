/*
 * @Author: Rikka
 * @Date: 2022-11-26 13:06:30
 * @LastEditTime: 2022-12-04 11:47:47
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\heartbreaker\babel.config.js
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      {
        libraryName: "@formily/antdv-x3",
        libraryDirectory: "esm",
        style: true
      }
    ]
  ]
};
