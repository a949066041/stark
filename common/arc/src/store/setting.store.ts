/*
 * @Author: Rikka
 * @Date: 2022-11-15 20:53:44
 * @LastEditTime: 2022-11-15 21:01:40
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\common\arc\src\store\setting.store.ts
 */
import { defineStore, _GettersTree } from "pinia";
interface SettingStoreState {
  _menu_collapse: boolean;
}
interface SettingStoreGetter extends _GettersTree<SettingStoreState> {
  menu_collapse: (state: SettingStoreState) => boolean;
}
interface SettingStoreAction {
  toggle_menu(): void;
}
export const useSettingStore = defineStore<
  "arc_setting",
  SettingStoreState,
  SettingStoreGetter,
  SettingStoreAction
>("arc_setting", {
  state: () => ({
    _menu_collapse: true
  }),
  getters: {
    menu_collapse: (state) => state._menu_collapse
  },
  actions: {
    toggle_menu() {
      this._menu_collapse = !this._menu_collapse;
    }
  }
});
