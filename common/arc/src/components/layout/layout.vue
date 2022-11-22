<!--
 * @Author: Rikka
 * @Date: 2022-11-11 15:20:20
 * @LastEditTime: 2022-11-22 20:57:50
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\common\arc\src\components\layout\layout.vue
-->
<template>
  <div class="flex flex-row self-stretch">
    <layout-menu />
    <div class="flex flex-1 flex-col h-screen">
      <layout-top-bar />
      <layout-tag />
      <div class="flex-1">
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
import LayoutTag from "./components/tag.vue";
import LayoutTopBar from "./components/top-bar.vue";
import { useCacheStore } from "../../store";

const views = ref([]);
const $router = useRouter();
const $route = useRoute();

const cacheStore = useCacheStore();

const cacheList = reactive(cacheStore.cacheList);

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
<style lang="scss" scoped></style>
