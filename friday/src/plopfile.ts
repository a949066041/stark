/*
 * @Author: Rikka
 * @Date: 2022-11-29 18:05:40
 * @LastEditTime: 2022-12-23 20:59:18
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\friday\src\plopfile.ts
 */

import { NodePlopAPI } from "plop";
import { findWorkspaceDir } from "@pnpm/find-workspace-dir";
import { resolve } from "path";

export default async function (plop: NodePlopAPI) {
  const workspaceDirectory: string = (await findWorkspaceDir(process.cwd())) as string;
  if (!workspaceDirectory) {
    throw new Error("no workspace");
  }
  const ws_path = (r_path: string) => resolve(workspaceDirectory, r_path);
  const common_action = (path_name: string, template_name: string) => {
    return {
      type: "add",
      path: ws_path(`project/{{name}}/${path_name}`),
      templateFile: `template/${template_name}`
    };
  };
  plop.setGenerator("basic", {
    description: "this is a skeleton plopfile",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "project name"
      },
      {
        type: "input",
        name: "port",
        message: "project port"
      }
    ],
    actions: [
      common_action("package.json", "projects/children/package.hbs"),
      common_action(".gitignore", "projects/children/.gitignore.hbs"),
      common_action(".browserslistrc", "projects/children/.browserslistrc.hbs"),
      common_action("babel.config.js", "projects/children/babel.config.hbs"),
      common_action("postcss.config.js", "projects/children/postcss.config.hbs"),
      common_action("tailwind.config.js", "projects/children/tailwind.config.hbs"),
      common_action("vue.config.js", "projects/children/vue.config.hbs"),
      common_action("tsconfig.json", "projects/children/tsconfig.hbs"),
      common_action("src/main.ts", "projects/children/src/main.hbs"),
      common_action("src/remote.ts", "projects/children/src/remote.hbs"),
      common_action("src/shims-vue.d.ts", "projects/children/src/shims-vue.d.hbs"),
      common_action("src/router/index.ts", "projects/children/src/router/index.hbs"),
      {
        type: "add",
        path: ws_path(`jarvis/src/config/{{name}}.config.ts`),
        templateFile: `template/jarvis/project.config.hbs`
      },
      {
        type: "append",
        path: ws_path("jarvis/src/index.ts"),
        template: `export * from "./config/{{name}}.config";`
      }
    ]
  });
}
