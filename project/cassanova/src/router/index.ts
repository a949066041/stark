/*
 * @Author: Rikka
 * @Date: 2022-11-29 20:54:41
 * @LastEditTime: 2022-12-04 11:46:05
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\cassanova\src\router\index.ts
 */
import { EnhanceRouter } from "@stark/common-arc";

const router_list: EnhanceRouter[] = [
  {
    is_router: false,
    parent_name: "root",
    name: "[cassanova]Project",
    meta: {
      title: "Form",
      permission: [],
      menu_icon: ["iron", "form"]
    }
  },
  {
    is_router: true,
    parent_name: "[cassanova]Project",
    name: "[cassanova]custom-form",
    path: "custom-form",
    component: () => import("../views/custom-form.vue"),
    meta: {
      title: "Custom Form",
      permission: [],
      menu_icon: ["iron", "form"]
    }
  }
];

export { router_list };
