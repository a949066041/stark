/*
 * @Author: Rikka
 * @Date: 2022-12-05 10:37:34
 * @LastEditTime: 2022-12-05 13:45:19
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\project\tiger\src\router\index.ts
 */
import { EnhanceRouter } from "@stark/common-arc";

const router_list: EnhanceRouter[] = [
  {
    is_router: false,
    parent_name: "root",
    name: "[tiger]Project",
    meta: {
      title: "Feature",
      permission: [],
      menu_icon: ["iron", "feature"]
    }
  },
  {
    is_router: false,
    parent_name: "[tiger]Project",
    name: "[tiger]CacheMenu",
    meta: {
      title: "缓存测试",
      permission: []
    }
  },
  {
    is_router: true,
    parent_name: "[tiger]CacheMenu",
    name: "[tiger]CacheTest",
    component: () => import("../views/cache/cache-test.vue"),
    path: "cache-test",
    meta: {
      title: "缓存测试1",
      permission: []
    }
  },
  {
    is_router: false,
    parent_name: "[tiger]CacheMenu",
    name: "[tiger]CacheMenuDeep",
    meta: {
      title: "二级菜单",
      permission: []
    }
  },
  {
    is_router: true,
    parent_name: "[tiger]CacheMenuDeep",
    name: "[tiger]DeepMenu",
    path: "deep-menu",
    component: () => import("../views/cache/deep-menu.vue"),
    meta: {
      title: "深层缓存",
      permission: []
    }
  },
  {
    is_router: false,
    parent_name: "[tiger]Project",
    name: "[tiger]OperateMenu",
    meta: {
      title: "跨页操作",
      permission: []
    }
  },
  {
    is_router: true,
    parent_name: "[tiger]OperateMenu",
    name: "[tiger]OperateData",
    path: "operate-data",
    component: () => import("../views/operate/operate-data.vue"),
    meta: {
      title: "数据页",
      permission: []
    }
  },
  {
    is_router: true,
    parent_name: "[tiger]OperateMenu",
    name: "[tiger]OperateHandle",
    path: "1operate-handler",
    component: () => import("../views/operate/operate-handle.vue"),
    meta: {
      title: "操作页",
      permission: []
    }
  }
];

export { router_list };
