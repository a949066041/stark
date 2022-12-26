/*
 * @Author: Rikka
 * @Date: 2022-12-23 18:27:52
 * @LastEditTime: 2022-12-26 21:14:31
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\jarvis\src\eslint\rules\typescript.rule.ts
 */
import { Linter } from "eslint";

export const typescript_rule: Linter.RulesRecord = {
  "prettier/prettier": "error",
  "no-unused-vars": "off",
  "@typescript-eslint/no-unused-vars": [
    "warn", // or "error"
    {
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_",
      caughtErrorsIgnorePattern: "^_"
    }
  ],
  "unicorn/filename-case": "off",
  "unicorn/prevent-abbreviations": "off",
  "unicorn/prefer-node-protocol": "off",
  "unicorn/prefer-module": "off",
  "unicorn/no-null": "off",
  "unicorn/import-style": [
    "error",
    {
      styles: {
        path: {
          named: true
        }
      }
    }
  ],
  "simple-import-sort/imports": "error",
  "simple-import-sort/exports": "error",
  "import/first": "off",
  "import/newline-after-import": "error",
  "import/no-duplicates": "error",
  "sort-annotation/sort-keys": "error",
  "sort-annotation/sort": "error"
};
