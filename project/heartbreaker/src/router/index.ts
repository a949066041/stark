/*
 * @Author: Rikka
 * @Date: 2022-11-12 13:25:33
 * @LastEditTime: 2022-11-29 22:45:45
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\heartbreaker\src\router\index.ts
 */
import { EnhanceRouter } from "@stark/common-arc";

const router_list: EnhanceRouter[] = [
  {
    is_router: false,
    parent_name: "root",
    name: "[heartbreaker]Components",
    meta: {
      title: "Component",
      permission: [],
      menu_icon: ["iron", "component"]
    }
  },
  {
    is_router: true,
    parent_name: "[heartbreaker]Components",
    name: "[heartbreaker]WangEditor",
    path: "wang-editor",
    component: () => import("../views/wangEditor.vue"),
    meta: {
      title: "WangEditor",
      permission: []
    }
  },
  {
    is_router: true,
    parent_name: "[heartbreaker]Components",
    name: "[heartbreaker]Milkdown",
    path: "milkdown",
    component: () => import("../views/milkdown.vue"),
    meta: {
      title: "Milkdown",
      permission: []
    }
  },
  {
    is_router: false,
    parent_name: "[heartbreaker]Components",
    name: "[heartbreaker]AgGrid",
    meta: {
      title: "AgGrid",
      permission: []
    }
  }
];

export { router_list };