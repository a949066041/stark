<!--
 * @Author: Rikka
 * @Date: 2022-11-11 17:17:18
 * @LastEditTime: 2022-12-29 21:52:13
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\common\arc\src\components\layout\components\menu.vue
-->
<template>
  <a-menu class="a-menu" v-model:selectedKeys="selectedKeys" mode="inline" :inline-collapsed="globStore.collapse">
    <a-menu-item-group key="g1">
      <template #title>Item 1</template>
      <menu-tree v-for="item of menuStore.menuList" :key="item.name" :config="item" />
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
