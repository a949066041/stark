/*
 * @Author: Rikka
 * @Date: 2022-11-11 16:35:07
 * @LastEditTime: 2022-11-11 17:35:08
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\common\arc\src\store\menu.store.ts
 */
import { defineStore, _GettersTree } from "pinia";
import { RouteMeta } from "vue-router";
import { EnhanceRouter } from "..";

interface MenuStoreState {
  _menu: EnhanceRouter[];
}

interface MenuStoreGetter extends _GettersTree<MenuStoreState> {
  menu: (state: MenuStoreState) => IMenu[];
}

interface MenuStoreAction {
  set_menu: (menu: EnhanceRouter[]) => void;
}

export interface IMenu {
  name: string;
  parent_name?: string;
  is_router: boolean;
  meta?: RouteMeta | { title: string; permission: string[] };
  children: IMenu[];
}

export const useMenuStore = defineStore<
  "arc_menu",
  MenuStoreState,
  MenuStoreGetter,
  MenuStoreAction
>("arc_menu", {
  state: () => ({
    _menu: []
  }),
  getters: {
    menu: (state) => cycleMenu(state._menu, "root")
  },
  actions: {
    set_menu(menu: EnhanceRouter[]) {
      this._menu = menu;
    }
  }
});

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
        children: child_menu
      };

      return _menu;
    });

  return menus;
}
