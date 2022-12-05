<!--
 * @Author: Rikka
 * @Date: 2022-11-11 17:29:28
 * @LastEditTime: 2022-12-05 13:43:57
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\common\arc\src\components\layout\components\menu-tree.vue
-->
<template>
  <template v-for="_menu in menu">
    <el-sub-menu v-if="_menu.children.length > 0" :index="_menu.name">
      <template #title>
        <latte-svg
          v-if="_menu.meta && _menu.meta.menu_icon"
          class="menu-icon"
          width="16px"
          height="16px"
          :namespace="_menu.meta.menu_icon[0]"
          :name="_menu.meta.menu_icon[1]"
        />
        <span class="sub_title">{{ _menu.meta?.title }}</span>
      </template>
      <menu-tree :menu="_menu.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="_menu.name" @click="handleClickMenu(_menu)">
      <latte-svg
        v-if="_menu.meta && _menu.meta.menu_icon"
        class="menu-icon"
        width="16px"
        height="16px"
        :namespace="_menu.meta.menu_icon[0]"
        :name="_menu.meta.menu_icon[1]"
      />
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
<style lang="scss" scoped>
.menu-icon {
  @apply fill-slate-800 mr-2;
}
.el-sub-menu.is-active {
  color: red;
  & > .el-sub-menu__title {
    .menu-icon {
      @apply fill-blue-500;
    }
    .sub_title {
      @apply text-blue-500;
    }
  }
}
.el-menu-item.is-active {
  .menu-icon {
    @apply fill-blue-500;
  }
  .sub_title {
    @apply text-blue-500;
  }
}
</style>
