/*
 * @Author: Rikka
 * @Date: 2022-11-29 20:54:41
 * @LastEditTime: 2022-12-05 22:55:00
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
  },
  {
    is_router: true,
    parent_name: "[cassanova]Project",
    name: "[cassanova]json-schema",
    path: "json-schema",
    component: () => import("../views/json-schema.vue"),
    meta: {
      title: "JSON Schema",
      permission: [],
      menu_icon: ["iron", "json"]
    }
  }
];

export { router_list };
