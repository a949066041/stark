/*
 * @Author: Rikka
 * @Date: 2022-12-23 16:34:46
 * @LastEditTime: 2022-12-23 19:07:46
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\jarvis\src\eslint\vue.eslint.ts
 */

import { Linter } from "eslint";
import { typescript_rule, vue_rule } from "./rules";
const files: string[] = [];
files.push(
  ...["sneaky", "cassanova", "heartbreaker", "midas", "nightclub", "tiger"].map(
    (project) => `project/${project}/src/**/*.vue`
  ),
  ...["arc", "silver"].map((common) => `common/${common}/src/**/*.vue`)
);
const vue_override: Linter.ConfigOverride = {
  files,

  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    vueFeatures: {
      filter: true,
      interpolationAsNonHTML: false
    },
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["@typescript-eslint", "prettier", "unicorn"],
  extends: [
    "plugin:vue/vue3-strongly-recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:unicorn/recommended"
  ],
  rules: {
    ...vue_rule,
    ...typescript_rule
  }
};

export { vue_override };
