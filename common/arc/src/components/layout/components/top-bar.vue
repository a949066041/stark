<!--
 * @Author: Rikka
 * @Date: 2022-11-17 19:23:22
 * @LastEditTime: 2022-12-06 20:24:01
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\common\arc\src\components\layout\components\top-bar.vue
-->
<template>
  <div class="topbar-container">
    <div>
      <latte-svg
        class="cursor-pointer fill-slate-800"
        width="24px"
        height="24px"
        namespace="iron"
        :name="menuStore.collapse ? 'indent' : 'outdent'"
        @click="menuStore.toggle_menu"
      />
    </div>
    <div class="flex items-center">
      <a-button class="mr-2" size="small" @click="globStore.toggleTheme">{{ globStore.theme }}</a-button>
      <a-button class="mr-2" size="small" @click="globStore.toggleLang">{{ LANGS[globStore.lang] }}</a-button>
      <a-dropdown>
        <div class="avatar" />
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a href="javascript:;">退出</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useMenuStore, useGlobStore, LANGS } from "../../../store";
const menuStore = useMenuStore();
const globStore = useGlobStore();
</script>
<style lang="less" scoped>
.topbar-container {
  @apply flex flex-row justify-between items-center bg-gray-50 p-1 dark:bg-black;
  border-bottom: solid 1px #98a8bd;
}
.avatar {
  @apply h-10 w-10 rounded-full cursor-pointer;

  background-image: url("../../../assets/avatar.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
