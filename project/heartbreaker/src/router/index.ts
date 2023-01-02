/*
 * @Author: Rikka
 * @Date: 2022-11-12 13:25:33
 * @LastEditTime: 2023-01-02 23:36:49
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
    path: "",
    meta: {
      title: "Component",
      permission: ["component"],
      menu_icon: ["iron", "component"]
    },
    group: "BASE"
  },
  {
    is_router: true,
    parent_name: "[heartbreaker]Components",
    name: "[heartbreaker]WangEditor",
    path: "wang-editor",
    component: () => import("../views/wangEditor.vue"),
    meta: {
      title: "WangEditor",
      permission: ["component-wangeditor"],
      menu_icon: ["iron", "editor"]
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
      permission: ["component-milkdown"],
      menu_icon: ["iron", "milk"]
    }
  },
  {
    is_router: true,
    parent_name: "[heartbreaker]Components",
    name: "[heartbreaker]AgGrid",
    path: "ag-grid",
    component: () => import("../views/ag-grid.vue"),
    meta: {
      title: "AgGrid",
      permission: ["component-aggrid"],
      menu_icon: ["iron", "grid"]
    }
  },
  {
    is_router: true,
    parent_name: "[heartbreaker]Components",
    name: "[heartbreaker]VCalendar",
    path: "v-calendar",
    component: () => import("../views/v-calendar/v-calendar.vue"),
    meta: {
      title: "V Calendar",
      permission: ["component-v_calendar"],
      menu_icon: ["iron", "calendar"]
    }
  },
  {
    is_router: true,
    parent_name: "[heartbreaker]Components",
    name: "[heartbreaker]Notification",
    path: "notification",
    component: () => import("../views/notification.vue"),
    meta: {
      title: "Notification",
      permission: ["component-notification"],
      menu_icon: ["iron", "notification"]
    }
  }
];

export { router_list };
