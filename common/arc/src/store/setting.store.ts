/*
 * @Author: Rikka
 * @Date: 2022-11-15 20:53:44
 * @LastEditTime: 2022-12-07 17:11:51
 * @LastEditors: Rikka
 * @Description:
 * @FilePath: \stark\common\arc\src\store\setting.store.ts
 */
import { defineStore, _GettersTree } from "pinia";
import { computed, ref } from "vue";
interface SettingStoreState {
  _menu_collapse: boolean;
}

export const useSettingStore = defineStore("arc_setting", () => {
  const _menu_collapse = ref(true);
  const menu_collapse = computed((state) => state._menu_collapse);
  function toggle_menu() {
    _menu_collapse.value = !_menu_collapse.value;
  }

  return { _menu_collapse, menu_collapse, toggle_menu };
});
