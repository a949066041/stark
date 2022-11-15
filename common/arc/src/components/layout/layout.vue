<!--
 * @Author: Rikka
 * @Date: 2022-11-11 15:20:20
 * @LastEditTime: 2022-11-15 17:47:18
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\common\arc\src\components\layout\layout.vue
-->
<template>
  <div class="flex flex-row self-stretch">
    <layout-menu />
    <div class="bg-red-200 flex flex-1 flex-col h-screen">
      <div class="w-full bg-green-200 pl-4 py-2">
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
      <div>
        <router-view v-slot="{ Component }">
          <keep-alive :include="cacheList">
            <component :is="Component" ref="views" />
          </keep-alive>
        </router-view>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { nextTick, onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import LayoutMenu from "./components/menu.vue";
import { useCacheStore } from "../../store";

const views = ref([]);
const $router = useRouter();
const $route = useRoute();

const cacheStore = useCacheStore();

const cacheList = reactive(cacheStore.cacheList);
const tagList = cacheStore._tags;

function handleTagClick(path: string) {
  $router.push(path);
}

function _setCahce() {
  nextTick(() => {
    // @ts-ignore
    const viewName: string = views.value.name;
    if (viewName) {
      cacheStore.setCache(viewName, views.value, $route);
    }
  });
}

onMounted(() => {
  _setCahce();

  $router.afterEach((guard) => {
    _setCahce();
  });
});
</script>
<style lang="scss"></style>
