<!--
 * @Author: Rikka
 * @Date: 2022-11-17 19:23:22
 * @LastEditTime: 2022-12-26 19:22:38
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\common\arc\src\components\layout\components\top-bar.vue
-->
<template>
  <header class="topbar-container">
    <div>
      <latte-svg
        class="cursor-pointer fill-slate-800"
        width="24px"
        height="24px"
        namespace="iron"
        :name="globStore.collapse ? 'indent' : 'outdent'"
        @click="globStore.toggleCollapse"
      />
    </div>
    <div class="flex items-center">
      <!-- <a-button class="mr-2" size="small" @click="globStore.toggleTheme">{{
        globStore.theme === "dark" ? "light" : "dark"
      }}</a-button> -->
      <!-- <a-button class="mr-2" size="small" @click="globStore.toggleLang">{{ LANGS[globStore.lang] }}</a-button> -->
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
  </header>
</template>
<script lang="ts" setup>
import { useGlobStore } from "../../../store";

const globStore = useGlobStore();
</script>
<style lang="less" scoped>
.topbar-container {
  @apply flex flex-row justify-between items-center p-1;

  border-bottom: solid 1px #98a8bd;
}

.avatar {
  @apply h-10 w-10 rounded-full cursor-pointer;

  background-image: url("../../../assets/avatar.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
