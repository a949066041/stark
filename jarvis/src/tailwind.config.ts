/*
 * @Author: Rikka
 * @Date: 2022-11-29 22:24:16
 * @LastEditTime: 2022-12-05 21:04:22
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\jarvis\src\tailwind.config.ts
 */

const project_list = ["nightclub", "heartbreaker", "cassanova", "tiger"].map(
  (project) => `../${project}/src/**/*.{vue,ts}`
);

const content = [
  "./src/**/*.{vue,ts}",
  "../../common/arc/src/**/*.{html,vue,ts,tsx,scss,less}",
  "../../common/silver/src/**/*.{html,vue,ts,tsx,scss,less}"
];

const child_tailwind_config = {
  content,
  theme: {
    extend: {}
  },
  plugins: []
};
const shell_tailwind_config = {
  content: [...content, ...project_list],
  theme: {
    extend: {}
  },
  plugins: []
};

export { child_tailwind_config, shell_tailwind_config };
