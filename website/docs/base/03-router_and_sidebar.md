# 路由和侧边栏

路由和侧边栏是组织起一个后台应用的关键骨架。

本项目侧边栏和路由是绑定在一起的，所以你根据 @stark/common-ark/router 下面配置对应的路由，侧边栏就能动态的生成了。大大减轻了手动重复编辑侧边栏的工作量。当然这样就需要在配置路由的时候遵循一些约定的规则。

## 配置项

```typescript
interface IEnhanceRouter extends _RouteRecordBase {
  name: string; // 元素名称
  parent_name?: string; // 父元素名称 没有则不存在在侧边栏中
  is_router: true; // 是否是路由:是
  sort?: number; // 菜单排序
  component: any; // 组件
}

interface EnhanceMenu {
  name: string; // 元素名称
  parent_name: string; // 父元素名称 强制填写
  is_router: false; // 是否是路由: 否
  sort?: number; // 菜单排序
  meta: {
    title: string; // 菜单标题
    permission: string[]; // 权限
  };
}
```

示例：

```typescript
import { EnhanceRouter } from "@stark/common-arc";

const router_list: EnhanceRouter[] = [
  {
    is_router: true,
    parent_name: "root",
    name: "[nightclub]Dashboard",
    component: () => import("../views/dashboard/dashboard.vue"),
    path: "nightclub/dashboard",
    meta: {
      title: "Dashboard",
      permission: []
    }
  },
  {
    is_router: true,
    parent_name: "root",
    name: "[nightclub]Icon",
    component: () => import("../views/icon.vue"),
    path: "nightclub/icon",
    meta: {
      title: "Icon",
      permission: []
    }
  }
];

export { router_list };
```
