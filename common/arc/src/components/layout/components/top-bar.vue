<!--
 * @Author: Rikka
 * @Date: 2022-11-17 19:23:22
 * @LastEditTime: 2022-12-05 21:27:48
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\common\arc\src\components\layout\components\top-bar.vue
-->
<template>
  <div class="topbar-container">
    <div>
      <latte-svg
        class="fill-slate-800 cursor-pointer"
        width="24px"
        height="24px"
        namespace="iron"
        :name="menuStore.collapse ? 'indent' : 'outdent'"
        @click="menuStore.toggle_menu"
      />
    </div>
    <div>
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
import { useMenuStore } from "../../../store";
const menuStore = useMenuStore();
</script>
<style lang="less" scoped>
.topbar-container {
  @apply flex flex-row justify-between items-center bg-gray-50 p-1;
  border-bottom: solid 1px #4b5563;
}
.avatar {
  @apply h-10 w-10 rounded-full cursor-pointer;

  background-image: url("../../../assets/avatar.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
