/*
 * @Author: Rikka
 * @Date: 2022-11-29 22:24:16
 * @LastEditTime: 2022-12-18 12:41:33
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\jarvis\src\tailwind.config.ts
 */

const project_list = ["nightclub", "heartbreaker", "cassanova", "tiger", "midas"].map(
  (project) => `../${project}/src/**/*.{vue,ts}`
);

const content = [
  "./src/**/*.{vue,ts}",
  "../../common/arc/src/**/*.{html,vue,ts,tsx,scss,less}",
  "../../common/silver/src/**/*.{html,vue,ts,tsx,scss,less}"
];

const base_dark_config = {
  darkMode: "class",
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"]
    }
  }
};

const child_tailwind_config = {
  ...base_dark_config,
  content,
  theme: {
    extend: {}
  },
  plugins: []
};
const shell_tailwind_config = {
  ...base_dark_config,
  content: [...content, ...project_list],
  theme: {
    extend: {}
  },
  plugins: []
};

export { child_tailwind_config, shell_tailwind_config };
