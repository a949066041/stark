<!--
 * @Author: Rikka
 * @Date: 2022-11-11 17:17:18
 * @LastEditTime: 2022-12-09 17:02:39
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\common\arc\src\components\layout\components\menu.vue
-->
<template>
  <a-menu class="a-menu" mode="inline" :inline-collapsed="menuStore.collapse">
    <menu-tree v-for="item of menuStore.menu" :key="item.name" :config="item" />
  </a-menu>
</template>
<script lang="ts" setup>
import { useMenuStore } from "../../../store";
import MenuTree from "./menu-tree";
const menuStore = useMenuStore();
</script>
<style lang="less" scoped>
.ant-menu-inline:not(.ant-menu-inline-collapsed) {
  width: 200px;
  height: 100vh;
}
</style>
