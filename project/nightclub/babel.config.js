/*
 * @Author: Rikka
 * @Date: 2022-11-12 13:06:51
 * @LastEditTime: 2022-12-04 11:47:56
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\nightclub\babel.config.js
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
