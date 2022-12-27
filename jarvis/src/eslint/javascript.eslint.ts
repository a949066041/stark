/*
 * @Author: Rikka
 * @Date: 2022-12-23 17:53:22
 * @LastEditTime: 2022-12-23 18:34:13
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\jarvis\src\eslint\javascript.eslint.ts
 */
import { Linter } from "eslint";

const javascript_override: Linter.ConfigOverride = {
  files: ["*.js"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  extends: ["prettier"]
};

export { javascript_override };
