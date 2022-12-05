/*
 * @Author: Rikka
 * @Date: 2022-11-12 12:20:07
 * @LastEditTime: 2022-12-04 11:48:02
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\sneaky\babel.config.js
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
