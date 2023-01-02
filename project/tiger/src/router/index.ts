/*
 * @Author: Rikka
 * @Date: 2022-12-05 10:37:34
 * @LastEditTime: 2023-01-02 23:37:15
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
    path: "",
    meta: {
      title: "Feature",
      permission: ["feature"],
      menu_icon: ["iron", "feature"]
    },
    group: "BASE"
  },
  {
    is_router: false,
    parent_name: "[tiger]Project",
    name: "[tiger]CacheMenu",
    path: "",
    meta: {
      title: "缓存测试",
      permission: ["feature-cache"],
      menu_icon: ["iron", "cache"]
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
      permission: ["feature-cache-cache_test"]
    }
  },
  {
    is_router: false,
    parent_name: "[tiger]CacheMenu",
    name: "[tiger]CacheMenuDeep",
    path: "",
    meta: {
      title: "二级菜单",
      permission: ["feature-cache-second"]
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
      permission: ["feature-cache-second-deep_menu"]
    }
  },
  {
    is_router: false,
    parent_name: "[tiger]Project",
    name: "[tiger]OperateMenu",
    path: "",
    meta: {
      title: "跨页操作",
      permission: ["feature-operate"],
      menu_icon: ["iron", "operate"]
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
      permission: ["feature-operate-data"]
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
      permission: ["feature-operate-handle"]
    }
  },
  {
    is_router: false,
    parent_name: "[tiger]Project",
    name: "[tiger]Permission",
    path: "",
    meta: {
      title: "权限",
      permission: ["feature-permission"],
      menu_icon: ["iron", "permission"]
    }
  },
  {
    is_router: true,
    parent_name: "[tiger]Permission",
    name: "[tiger]PermissionTree",
    path: "permission-tree",
    component: () => import("../views/permission/permission-tree.vue"),
    meta: {
      title: "权限树",
      permission: ["feature-permission-tree"]
    }
  }
];

export { router_list };
