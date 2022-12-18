<!--
 * @Author: Rikka
 * @Date: 2022-11-11 15:20:20
 * @LastEditTime: 2022-12-18 12:46:01
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
import { nextTick, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import LayoutMenu from "./components/menu.vue";
import LayoutTag from "./components/tag.vue";
import LayoutTopBar from "./components/top-bar.vue";
import { useCacheStore } from "../../store";
import { storeToRefs } from "pinia";

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

  $router.afterEach((guard) => {
    _setCahce();
  });
});
</script>
<style lang="less" scoped></style>
