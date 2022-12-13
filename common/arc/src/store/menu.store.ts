/*
 * @Author: Rikka
 * @Date: 2022-11-11 16:35:07
 * @LastEditTime: 2022-12-13 21:46:41
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\common\arc\src\store\menu.store.ts
 */
import { defineStore, _GettersTree } from "pinia";
import { computed, reactive, ref } from "vue";
import { RouteMeta, RouteRecordRaw } from "vue-router";
import { EnhanceRouter, IEnhanceRouter } from "..";

export interface IMenu {
  name: string;
  parent_name?: string;
  is_router: boolean;
  meta?: IMenuType;
  hidden?: boolean;
  children: IMenu[];
  path?: string;
}

type IMenuType = { title: string; permission: string[]; menu_icon: [string, string] } & RouteMeta;

export const useMenuStore = defineStore("arc_menu", () => {
  const _menu = reactive<{ data: EnhanceRouter[] }>({ data: [] });
  const collapse = ref(false);

  const menu = reactive<{ data: IMenu[] }>({ data: [] });
  const router = computed(() => getRouter(_menu.data));

  function toggle_menu() {
    collapse.value = !collapse.value;
  }

  function set_menu(menus: EnhanceRouter[]) {
    _menu.data = menus;
    menu.data = cycleMenu(_menu.data, "root");
  }

  return {
    menu,
    router,
    collapse,
    toggle_menu,
    set_menu,
    _menu
  };
});

function getRouter(menu: EnhanceRouter[]): Array<RouteRecordRaw> {
  const routers: IEnhanceRouter[] = menu.filter((item) => item.is_router) as IEnhanceRouter[];
  return routers.map((item) => {
    return {
      path: item.path,
      name: item.name,
      component: item.component,
      meta: item.meta
    };
  });
}

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
