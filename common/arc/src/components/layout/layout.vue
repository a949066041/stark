<!--
 * @Author: Rikka
 * @Date: 2022-11-11 15:20:20
 * @LastEditTime: 2022-11-11 17:21:11
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\common\arc\src\components\layout\layout.vue
-->
<template>
  <div class="flex flex-row">
    <layout-menu />
  </div>
  <router-view />
</template>
<script lang="ts" setup>
import LayoutMenu from "./components/menu.vue";
</script>
<style lang="scss"></style>
