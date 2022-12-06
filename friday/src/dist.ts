/*
 * @Author: Rikka
 * @Date: 2022-12-05 15:09:51
 * @LastEditTime: 2022-12-06 16:00:31
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\friday\src\dist.ts
 */
import { findWorkspaceDir } from "@pnpm/find-workspace-dir";
import { readdirSync, writeFileSync } from "fs";
import fsExtra from "fs-extra";
const { copySync, rmSync, existsSync } = fsExtra;
import { resolve } from "path";
import { cwd } from "process";

findWorkspaceDir(cwd()).then((root) => {
  if (root) {
    const distDir = resolve(root, "dist");
    if (existsSync(distDir)) {
      console.log("删除dist");
      rmSync(distDir, { recursive: true });
    }

    const projectDir = resolve(root, "project");
    const sneakyDir = resolve(projectDir, "sneaky", "dist");
    console.log("copy sneaky");
    copySync(sneakyDir, distDir);
    const projectDirList = readdirSync(projectDir)
      .filter((project) => project !== "sneaky")
      .map((project) => [resolve(projectDir, project, "dist"), resolve(root, "dist/remote", project)]);
    projectDirList.some((distDir) => {
      copySync(distDir[0], distDir[1]);
    });
    console.log("copy complete");
    writeFileSync(resolve(distDir, ".gitkeep"), "");
    const _redirects = `/login    /index.html   200
/view/*    /index.html   200`;
    writeFileSync(resolve(distDir, "_redirects"), _redirects);
  }
});
