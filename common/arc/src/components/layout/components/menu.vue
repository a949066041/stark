<!--
 * @Author: Rikka
 * @Date: 2022-11-11 17:17:18
 * @LastEditTime: 2023-01-02 23:48:27
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\common\arc\src\components\layout\components\menu.vue
-->
<template>
  <a-menu class="a-menu" v-model:selectedKeys="selectedKeys" mode="inline" :inline-collapsed="globStore.collapse">
    <a-menu-item-group v-for="group in menu_group" :key="group">
      <template #title>{{ group }}</template>
      <menu-tree v-for="item of menuStore.menuList[group]" :key="item.name" :config="item" />
    </a-menu-item-group>
  </a-menu>
</template>
<script lang="ts" setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

import { useGlobStore, useMenuStore } from "../../../store";
import MenuTree from "./menu-tree";

const globStore = useGlobStore();
const menuStore = useMenuStore();
const route = useRoute();

const menu_group = Object.keys(menuStore.menuList);

const selectedKeys = ref<string[]>([]);
watch(
  route,
  () => {
    const path = route.path;
    selectedKeys.value = [path.replace("/view/", "")];
  },
  { immediate: true }
);
</script>
<style lang="less" scoped>
.ant-menu-inline:not(.ant-menu-inline-collapsed) {
  width: 200px;
  height: 100vh;
}
</style>
