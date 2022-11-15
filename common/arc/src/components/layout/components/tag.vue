<!--
 * @Author: Rikka
 * @Date: 2022-11-15 21:02:40
 * @LastEditTime: 2022-11-15 21:25:13
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\common\arc\src\components\layout\components\tag.vue
-->
<template>
  <div class="w-full pl-4 flex flex-row items-center h-12">
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
<script lang="scss"></script>
