<!--
 * @Author: Rikka
 * @Date: 2022-11-15 21:02:40
 * @LastEditTime: 2022-11-17 23:09:00
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\common\arc\src\components\layout\components\tag.vue
-->
<template>
  <div class="tag-container">
    <a-tag
      class="cursor-pointer mr-1 select-none"
      :color="tag.link === $route.fullPath ? '#2db7f5' : ''"
      closable
      v-for="tag in tagList"
      :key="tag.name"
      @click="handleTagClick(tag.link)"
    >
      {{ tag.title }}
    </a-tag>
  </div>
</template>
<script lang="ts" setup>
import { useCacheStore } from "../../../store";
import { useRouter } from "vue-router";

const cacheStore = useCacheStore();

const $router = useRouter();
const tagList = cacheStore._tags;

function handleTagClick(path: string) {
  $router.push(path);
}
</script>
<style lang="less" scoped>
.tag-container {
  @apply w-full pl-4 flex flex-row items-center h-12;
  border-bottom: solid 1px var(--el-menu-border-color);
}
</style>
