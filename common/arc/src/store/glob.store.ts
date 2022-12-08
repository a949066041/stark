import { defineStore } from "pinia";
import { ref, watch } from "vue";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

export enum LANGS {
  "zh" = "中文",
  "en" = "En"
}

export type Theme = "light" | "dark";

export const useGlobStore = defineStore("arc_glob", () => {
  const lang = ref<keyof typeof LANGS>("zh");
  const theme = ref<Theme>("light");

  watch(
    lang,
    (value) => {
      dayjs.locale(value);
    },
    { immediate: true }
  );

  watch(
    theme,
    (value) => {
      document.querySelector("html")!.classList[value === "dark" ? "add" : "remove"]("dark");
    },
    { immediate: true }
  );

  // TODO langs...
  function toggleLang() {
    lang.value = lang.value === "en" ? "zh" : "en";
  }

  function toggleTheme() {
    theme.value = theme.value === "dark" ? "light" : "dark";
  }

  return {
    lang,
    theme,
    toggleLang,
    toggleTheme
  };
});
