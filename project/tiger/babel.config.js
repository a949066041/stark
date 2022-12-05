/*
 * @Author: Rikka
 * @Date: 2022-12-05 20:23:50
 * @LastEditTime: 2022-12-05 22:01:41
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\tiger\babel.config.js
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
