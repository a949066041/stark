<!--
 * @Author: Rikka
 * @Date: 2022-11-11 15:20:20
 * @LastEditTime: 2022-11-12 19:09:15
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\common\arc\src\components\layout\layout.vue
-->
<template>
  <div class="flex flex-row self-stretch">
    <layout-menu />
    <div class="bg-red-200 flex flex-1 h-screen">
      <div>
        <router-view />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import LayoutMenu from "./components/menu.vue";
</script>
<style lang="scss"></style>
