/*
 * @Author: Rikka
 * @Date: 2022-11-11 16:35:07
 * @LastEditTime: 2022-12-13 21:46:41
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\common\arc\src\store\menu.store.ts
 */
import { defineStore } from "pinia";
import { computed, ref, watch, watchEffect } from "vue";
import { RouteMeta, RouteRecordRaw } from "vue-router";
import { EnhanceRouter, router, usePermissionStore } from "..";

export interface IMenu {
  name: string;
  parent_name?: string;
  is_router: boolean;
  meta?: IMenuType;
  hidden?: boolean;
  children: IMenu[];
  path?: string;
}

type IMenuType = { title: string; permission: string[]; menu_icon: [string, string]; parent_name: string } & RouteMeta;

export function cycleMenu(menu: EnhanceRouter[], find_name: string): IMenu[] {
  const menus = menu
    .filter(({ parent_name }) => parent_name === find_name)
    .map((item) => {
      const child_menu = cycleMenu(menu, item.name);
      // @ts-ignore
      item["children"] = child_menu;
      const _menu: IMenu = {
        name: item.name,
        parent_name: item.parent_name,
        meta: item.meta ? (item.meta as IMenuType) : undefined,
        is_router: item.is_router,
        children: child_menu,
        path: item.is_router ? item.path : undefined
      };

      return _menu;
    });

  return menus;
}

export const useMenuStore = defineStore("arc_menu", () => {
  const menu = ref<Record<string, EnhanceRouter[]>>({});
  const permissionStore = usePermissionStore();
  const menuList = ref<IMenu[]>([]);
  watchEffect(registryRoute);

  function registryRoute() {
    const menuFlat = Object.values(menu.value).flat();
    const permission_list = permissionStore.permission_list;
    const registry = menuFlat.reduce(
      (base, item) => {
        if (!item.meta || (item.meta.permission as string[]).some((p) => permission_list.data.includes(p))) {
          base.reserveRoute.push(item);
          item.is_router && router.addRoute("View", item as any);
        } else {
          base.removeRoute.push(item.name);
          router.removeRoute(item.name);
        }
        return base;
      },
      { reserveRoute: [] as EnhanceRouter[], removeRoute: [] as string[] }
    );
    menuList.value = cycleMenu(registry.reserveRoute, "root");
  }

  function setMenu(key: string, menuList: EnhanceRouter[]) {
    menu.value[key] = menuList;
  }

  return {
    menuList,
    registryRoute,
    setMenu
  };
});
