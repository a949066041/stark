/*
 * @Author: Rikka
 * @Date: 2022-12-01 22:43:04
 * @LastEditTime: 2022-12-01 22:43:29
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\heartbreaker\src\views\v-calendar\components\child.mixin.ts
 */
// @ts-nocheck
export const childMixin = {
  inject: ["sharedState"],
  computed: {
    masks() {
      return this.sharedState.masks;
    },
    theme() {
      return this.sharedState.theme;
    },
    locale() {
      return this.sharedState.locale;
    },
    dayPopoverId() {
      return this.sharedState.dayPopoverId;
    }
  },
  methods: {
    format(date, mask) {
      return this.locale.format(date, mask);
    },
    pageForDate(date) {
      return this.locale.getDateParts(this.locale.normalizeDate(date));
    }
  }
};
