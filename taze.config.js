/*
 * @Author: Rikka
 * @Date: 2022-12-29 20:33:28
 * @LastEditTime: 2022-12-29 20:35:04
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\taze.config.js
 */
import { defineConfig } from "taze";
export default defineConfig({
  // ignore packages from bumping
  exclude: ["react", "@mdx-js/react", "react-dom"],
  // fetch latest package info from registry without cache
  force: true
});
