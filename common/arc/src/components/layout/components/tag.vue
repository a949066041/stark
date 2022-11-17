<!--
 * @Author: Rikka
 * @Date: 2022-11-15 21:02:40
 * @LastEditTime: 2022-11-17 22:43:29
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\common\arc\src\components\layout\components\tag.vue
-->
<template>
  <div class="tag-container">
    <el-tag
      class="cursor-pointer mr-1 select-none"
      size="large"
      :effect="tag.link === $route.fullPath ? 'dark' : 'plain'"
      closable
      v-for="tag in tagList"
      :key="tag.name"
      @click="handleTagClick(tag.link)"
    >
      {{ tag.title }}
    </el-tag>
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
<style lang="scss">
.tag-container {
  @apply w-full pl-4 flex flex-row items-center h-12;
  border-bottom: solid 1px var(--el-menu-border-color);
}
</style>
