<!--
 * @Author: Rikka
 * @Date: 2022-11-11 15:20:20
 * @LastEditTime: 2022-12-23 22:23:53
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\common\arc\src\components\layout\layout.vue
-->
<template>
  <div class="flex flex-row self-stretch">
    <layout-menu />
    <div class="flex flex-1 flex-col h-screen overflow-x-hidden">
      <layout-top-bar />
      <layout-tag />
      <div class="flex-1 overflow-x-auto">
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
import { storeToRefs } from "pinia";
import { nextTick, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useCacheStore } from "../../store";
import LayoutMenu from "./components/menu.vue";
import LayoutTag from "./components/tag.vue";
import LayoutTopBar from "./components/top-bar.vue";

const views = ref<{ name: string }>();
const $router = useRouter();
const $route = useRoute();

const cacheStore = useCacheStore();
const _cacheStore = storeToRefs(cacheStore);

const cacheList = _cacheStore.cacheList;

function _setCahce() {
  nextTick(() => {
    const viewName = views.value;
    if (viewName && viewName.name) {
      cacheStore.setCache(viewName.name, views.value, $route);
    }
  });
}

onMounted(() => {
  _setCahce();

  $router.afterEach((_guard) => {
    _setCahce();
  });
});
</script>
<style lang="less" scoped></style>
