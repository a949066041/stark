/*
 * @Author: Rikka
 * @Date: 2022-12-26 18:29:27
 * @LastEditTime: 2022-12-26 18:56:33
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\jarvis\src\stylelint\index.ts
 */
import { Config } from "stylelint";

import { less_stylelint_override } from "./less.stylelint";
import { vue_stylelint_override } from "./vue.stylelint";

const stylelint_config: Config = {
  plugins: "stylelint-less",
  defaultSeverity: "warning",
  rules: {},
  overrides: [vue_stylelint_override, less_stylelint_override]
};

export { stylelint_config };
