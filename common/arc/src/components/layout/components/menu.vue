<!--
 * @Author: Rikka
 * @Date: 2022-11-11 17:17:18
 * @LastEditTime: 2022-12-18 12:47:41
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\common\arc\src\components\layout\components\menu.vue
-->
<template>
  <a-menu class="a-menu" mode="inline" :inline-collapsed="globStore.collapse">
    <menu-tree v-for="item of storeMenu" :key="item.name" :config="item" />
  </a-menu>
</template>
<script lang="ts" setup>
import { Ref, ref, watch } from "vue";
import { cycleMenu, IMenu, useGlobStore, useMenuStore, usePermissionStore } from "../../../store";
import MenuTree from "./menu-tree";
const globStore = useGlobStore();
const menuStore = useMenuStore();
const permissionStore = usePermissionStore();
const permission_list = permissionStore.permission_list;
const storeMenu: Ref<IMenu[]> = ref([]);

function handleSetMenu() {
  const _storeMenu = menuStore._menu.data.filter((menu) => {
    const meta = menu.meta;
    if (!meta) {
      return true;
    }
    const permission = meta.permission as string[];
    if (permission.includes("stark")) {
      return true;
    }
    return permission.some((p) => permission_list.data.includes(p));
  });
  storeMenu.value = cycleMenu(_storeMenu, "root");
}
handleSetMenu();
watch(permission_list, () => {
  handleSetMenu();
});
</script>
<style lang="less" scoped>
.ant-menu-inline:not(.ant-menu-inline-collapsed) {
  width: 200px;
  height: 100vh;
}
</style>
