<!--
 * @Author: Rikka
 * @Date: 2022-11-11 15:20:20
 * @LastEditTime: 2022-11-15 17:11:41
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\common\arc\src\components\layout\layout.vue
-->
<template>
  <div class="flex flex-row self-stretch">
    <layout-menu />
    <div class="bg-red-200 flex flex-1 flex-col h-screen">
      <div class="w-full bg-green-200 pl-4 py-2">
        <el-tag size="large" closable @click="handleClick">123</el-tag>
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
import { nextTick, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import LayoutMenu from "./components/menu.vue";
import { useCacheStore } from "../../store";

const views = ref([]);
const $router = useRouter();

const cacheStore = useCacheStore();

const cacheList = cacheStore.cacheList;

function handleClick() {
  cacheStore.getCache<any>("[nightclub]Test").handleClick();
}

function _setCahce() {
  nextTick(() => {
    // @ts-ignore
    if (views.value.name) {
      // @ts-ignore
      cacheStore.setCache(views.value.name, views.value);
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
