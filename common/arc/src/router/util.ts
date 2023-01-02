/*
 * @Author: Rikka
 * @Date: 2022-11-11 15:36:21
 * @LastEditTime: 2023-01-02 23:35:32
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\common\arc\src\router\util.ts
 */
import { _RouteRecordBase } from "vue-router";

/**
 * 路由项
 *
 * @author rikka
 * @export
 * @interface IEnhanceRouter
 * @extends {_RouteRecordBase}
 */
export interface IEnhanceRouter extends _RouteRecordBase {
  name: string; // 元素名称
  parent_name?: string; // 父元素名称 没有则不存在在侧边栏中
  is_router: true; // 是否是路由:是
  sort?: number; // 菜单排序
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any; // 组件
  group?: string;
}

/**
 * 菜单项
 *
 * @author rikka
 * @export
 * @interface EnhanceMenu
 */
export interface EnhanceMenu extends _RouteRecordBase {
  name: string; // 元素名称
  parent_name: string; // 父元素名称 强制填写
  is_router: false; // 是否是路由: 否
  sort?: number; // 菜单排序
  meta: {
    title: string; // 菜单标题
    permission: string[]; // 权限
    menu_icon?: [string, string];
  };
  group?: string;
}

export type EnhanceRouter = IEnhanceRouter | EnhanceMenu;
