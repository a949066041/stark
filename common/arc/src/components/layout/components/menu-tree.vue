<!--
 * @Author: Rikka
 * @Date: 2022-11-11 17:29:28
 * @LastEditTime: 2022-11-12 19:10:03
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\common\arc\src\components\layout\components\menu-tree.vue
-->
<template>
  <template v-for="_menu in menu">
    <el-sub-menu v-if="_menu.children.length > 0" :index="_menu.name">
      <template #title>
        <span>{{ _menu.meta?.title }}</span>
      </template>
      <menu-tree :menu="_menu.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="_menu.name" @click="handleClickMenu(_menu)">
      <template #title>
        <span>{{ _menu.meta?.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>
<script lang="ts">
export default {
  name: "MenuTree"
};
</script>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { IMenu } from "../../../store";

interface Props {
  menu: IMenu[];
}

const props = defineProps<Props>();
const $router = useRouter();
function handleClickMenu(menu: IMenu) {
  if (menu.path) {
    $router.push("/view/" + menu.path);
  }
}
</script>
