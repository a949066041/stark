<!--
 * @Author: Rikka
 * @Date: 2022-11-15 21:02:40
 * @LastEditTime: 2022-12-08 11:20:10
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\common\arc\src\components\layout\components\tag.vue
-->
<template>
  <div class="tag-container">
    <div
      class="tag-block"
      :class="{ 'tag-block-active': tag.link === $route.fullPath }"
      v-for="tag in tagList"
      :key="tag.name"
      @click="handleTagClick(tag.link)"
    >
      <div>{{ tag.title }}</div>
      <latte-svg
        @click.stop="handleClose(tag)"
        class="close-icon"
        height="12px"
        width="12px"
        namespace="iron"
        name="close"
      ></latte-svg>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { TagItem, useCacheStore } from "../../../store";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

const cacheStore = useCacheStore();
const cacheStoreRef = storeToRefs(cacheStore);
const $router = useRouter();
const tagList = cacheStoreRef._tags;

function handleTagClick(path: string) {
  $router.push(path);
}

function handleClose(tag: TagItem) {
  console.log(tag);
  cacheStore.deleteCache(tag.name, $router);
}
</script>
<style lang="less" scoped>
.tag-container {
  @apply w-full pl-4 flex flex-row items-center h-12;
  border-bottom: solid 1px #98a8bd;
}
.tag-block {
  @apply cursor-pointer mr-1 select-none border border-solid border-gray-300 px-2 flex flex-row items-center rounded;

  &-active {
    @apply bg-blue-500 text-gray-50 border-blue-500;
    .close-icon {
      @apply fill-gray-50;
    }
  }
}
.close-icon {
  @apply cursor-pointer rounded-full ml-1 fill-gray-600;
  padding: 2px;
  &:hover {
    @apply bg-gray-100/50;
  }
}
</style>
