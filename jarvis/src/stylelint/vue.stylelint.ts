/*
 * @Author: Rikka
 * @Date: 2022-12-26 18:32:37
 * @LastEditTime: 2022-12-26 19:33:52
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\jarvis\src\stylelint\vue.stylelint.ts
 */
import { ConfigOverride } from "stylelint";

import { stylelint_common_rule } from "./rules/common.rule";

export const vue_stylelint_override: ConfigOverride = {
  files: ["*.vue", "**/*.vue"],
  rules: { ...stylelint_common_rule },
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
    "stylelint-config-prettier",
    "stylelint-prettier/recommended",
    "stylelint-config-recommended-vue",
    "stylelint-config-recommended-less"
  ],
  customSyntax: "postcss-html"
};
