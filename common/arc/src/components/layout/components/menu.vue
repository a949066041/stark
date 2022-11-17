<!--
 * @Author: Rikka
 * @Date: 2022-11-11 17:17:18
 * @LastEditTime: 2022-11-17 22:24:19
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\common\arc\src\components\layout\components\menu.vue
-->
<template>
  <el-menu class="el-menu-vertical" :collapse="collapse">
    <menu-tree :menu="menu_list" />
  </el-menu>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useMenuStore } from "../../../store";
import MenuTree from "./menu-tree.vue";
const store = storeToRefs(useMenuStore());
const collapse = store.collapse;
const menu_list = store.menu;
</script>
<style lang="scss">
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  height: 100vh;
}
</style>
