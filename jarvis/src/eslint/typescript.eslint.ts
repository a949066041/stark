/*
 * @Author: Rikka
 * @Date: 2022-12-23 18:35:55
 * @LastEditTime: 2022-12-23 18:54:41
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\jarvis\src\eslint\typescript.eslint.ts
 */
import { Linter } from "eslint";
import { typescript_rule } from "./rules";
const files: string[] = [];
files.push(
  ...["sneaky", "cassanova", "heartbreaker", "midas", "nightclub", "tiger"].map(
    (project) => `project/${project}/src/**/*.ts`
  ),
  ...["arc", "silver", "iron"].map((common) => `common/${common}/src/**/*.ts`),
  "jarvis/src/**/*.ts",
  "friday/src/**/*.ts"
);
export const typescript_override: Linter.ConfigOverride = {
  files,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest"
  },
  plugins: ["@typescript-eslint", "unicorn", "prettier"],
  extends: ["plugin:@typescript-eslint/recommended", "prettier"],
  rules: {
    ...typescript_rule
  }
};
