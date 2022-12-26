import { Linter } from "eslint";

export const vue_rule: Linter.RulesRecord = {
  "vue/max-attributes-per-line": [
    "error",
    {
      singleline: {
        max: 6
      },
      multiline: {
        max: 1
      }
    }
  ],
  "vue/component-definition-name-casing": "off",
  "vue/singleline-html-element-content-newline": "off",
  "vue/multi-word-component-names": "off",
  "vue/html-self-closing": "off"
};
