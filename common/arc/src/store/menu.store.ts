/*
 * @Author: Rikka
 * @Date: 2022-11-11 16:35:07
 * @LastEditTime: 2022-11-17 22:21:28
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\common\arc\src\store\menu.store.ts
 */
import { defineStore, _GettersTree } from "pinia";
import { RouteMeta, RouteRecordRaw } from "vue-router";
import { EnhanceRouter, IEnhanceRouter } from "..";

interface MenuStoreState {
  _menu: EnhanceRouter[];
  _collapse: boolean;
}

interface MenuStoreGetter extends _GettersTree<MenuStoreState> {
  menu: (state: MenuStoreState) => IMenu[];
  router: (state: MenuStoreState) => RouteRecordRaw[];
  collapse: (state: MenuStoreState) => boolean;
}

interface MenuStoreAction {
  set_menu: (menu: EnhanceRouter[]) => void;
  toggle_menu: () => void;
}

export interface IMenu {
  name: string;
  parent_name?: string;
  is_router: boolean;
  meta?: RouteMeta | { title: string; permission: string[] };
  children: IMenu[];
  path?: string;
}

export const useMenuStore = defineStore<
  "arc_menu",
  MenuStoreState,
  MenuStoreGetter,
  MenuStoreAction
>("arc_menu", {
  state: () => ({
    _menu: [],
    _collapse: false
  }),
  getters: {
    menu: (state) => cycleMenu(state._menu, "root"),
    router: (state) => getRouter(state._menu),
    collapse: (state) => state._collapse
  },
  actions: {
    set_menu(menu: EnhanceRouter[]) {
      this._menu = menu;
    },
    toggle_menu() {
      this._collapse = !this.collapse;
    }
  }
});

function getRouter(menu: EnhanceRouter[]): Array<RouteRecordRaw> {
  const routers: IEnhanceRouter[] = menu.filter(
    (item) => item.is_router
  ) as IEnhanceRouter[];
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
        meta: { ...item.meta },
        is_router: item.is_router,
        children: child_menu,
        path: item.is_router ? item.path : undefined
      };

      return _menu;
    });

  return menus;
}
