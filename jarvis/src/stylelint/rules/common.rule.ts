/*
 * @Author: Rikka
 * @Date: 2022-12-26 18:33:21
 * @LastEditTime: 2022-12-26 21:17:49
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\jarvis\src\stylelint\rules\common.rule.ts
 */
import { ConfigRules } from "stylelint";

export const stylelint_common_rule: ConfigRules = {
  "no-invalid-double-slash-comments": null,
  "no-empty-source": null,
  "string-quotes": "double",
  "declaration-block-semicolon-newline-after": null,
  "selector-class-pattern": null,
  "selector-pseudo-element-no-unknown": [
    true,
    {
      ignorePseudoElements: ["v-deep"]
    }
  ],
  "selector-pseudo-class-no-unknown": [
    true,
    {
      ignorePseudoClasses: ["deep", "global"]
    }
  ],
  "color-named": null,
  "max-nesting-depth": 6,
  "selector-max-compound-selectors": 6,
  "declaration-property-value-disallowed-list": null,
  "selector-no-qualifying-type": [true, { ignore: ["attribute", "class", "id"] }],
  "selector-max-id": null,
  "no-eol-whitespace": null,
  "at-rule-no-unknown": [
    true,
    {
      ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen", "include", "mixin", "for", "each"]
    }
  ],
  "declaration-block-trailing-semicolon": null,
  "no-descending-specificity": null
};
