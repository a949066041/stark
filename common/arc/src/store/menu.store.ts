/*
 * @Author: Rikka
 * @Date: 2022-11-11 16:35:07
 * @LastEditTime: 2022-12-07 17:10:20
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\common\arc\src\store\menu.store.ts
 */
import { defineStore, _GettersTree } from "pinia";
import { computed, ref } from "vue";
import { RouteMeta, RouteRecordRaw } from "vue-router";
import { EnhanceRouter, IEnhanceRouter } from "..";

interface MenuStoreState {
  _menu: EnhanceRouter[];
  _collapse: boolean;
}

export interface IMenu {
  name: string;
  parent_name?: string;
  is_router: boolean;
  meta?: IMenuType;
  children: IMenu[];
  path?: string;
}

type IMenuType = { title: string; permission: string[]; menu_icon: [string, string] } & RouteMeta;

export const useMenuStore = defineStore("arc_menu", () => {
  const _menu = ref<EnhanceRouter[]>([]);
  const collapse = ref(false);

  const menu = computed(() => cycleMenu(_menu.value, "root"));
  const router = computed(() => getRouter(_menu.value));

  function toggle_menu() {
    collapse.value = !collapse.value;
  }

  function set_menu(menus: EnhanceRouter[]) {
    _menu.value = menus;
  }

  return {
    menu,
    router,
    collapse,
    toggle_menu,
    set_menu
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

function cycleMenu(menu: EnhanceRouter[], find_name: string): IMenu[] {
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
