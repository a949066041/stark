/*
 * @Author: Rikka
 * @Date: 2022-12-05 15:09:51
 * @LastEditTime: 2022-12-05 15:50:01
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\friday\src\build.ts
 */
import { findWorkspaceDir } from "@pnpm/find-workspace-dir";
import { readdirSync } from "fs";
import fsExtra from "fs-extra";
const { copySync } = fsExtra;
import { resolve } from "path";
import { cwd } from "process";

findWorkspaceDir(cwd()).then((root) => {
  console.log(root);
  if (root) {
    const projectDir = resolve(root, "project");
    const projectDirList = readdirSync(projectDir)
      .filter((project) => project !== "sneaky")
      .map((project) => [resolve(projectDir, project, "dist"), resolve(root, "dist/remote", project)]);
    projectDirList.some((distDir) => {
      copySync(distDir[0], distDir[1]);
    });
  }
});
