/*
 * @Author: Rikka
 * @Date: 2022-12-26 18:35:52
 * @LastEditTime: 2022-12-26 19:18:11
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\jarvis\src\stylelint\less.stylelint.ts
 */
import { ConfigOverride } from "stylelint";

import { stylelint_common_rule } from "./rules/common.rule";

export const less_stylelint_override: ConfigOverride = {
  files: ["*.less", "**/*.less", "*.css", "**/*.css"],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
    "stylelint-config-prettier",
    "stylelint-config-recommended-less",
    "stylelint-prettier/recommended"
  ],
  plugins: ["stylelint-less"],
  customSyntax: "postcss-less",
  rules: { ...stylelint_common_rule }
};
