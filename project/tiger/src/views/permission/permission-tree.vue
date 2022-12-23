<!--
 * @Author: Rikka
 * @Date: 2022-12-09 09:54:43
 * @LastEditTime: 2022-12-23 22:20:40
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\tiger\src\views\permission\permission-tree.vue
-->
<template>
  <div class="stark-container p-4">
    <a-tree
      v-model:expandedKeys="expandedKeys"
      :selectable="false"
      :show-icon="true"
      v-model:checkedKeys="checkedKeys"
      checkable
      :tree-data="treeData"
    >
      <template #icon="{ _icon }">
        <arc-icon
          v-if="_icon"
          class-name="fill-gray-800 mt-1"
          :namespace="_icon[0]"
          :name="_icon[1]"
          width="16px"
          height="16px"
        />
      </template>
      <template #title="{ title, key }">
        <span v-if="key === '0-0-1-0'" style="color: #1890ff">{{ title }}</span>
        <template v-else>
          {{ title }}
        </template>
      </template>
    </a-tree>
    <div>
      <a-button @click="handleSetPermission()"> save </a-button>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "[tiger]PermissionTree"
};
</script>

<script lang="ts" setup>
import { ArcIcon, usePermissionStore } from "@stark/common-arc";
import { ref } from "vue";

import { permission_tree } from "./data";

const treeData = permission_tree;
const permissionStore = usePermissionStore();
const expandedKeys = ref<string[]>([]);
const checkedKeys = ref<string[]>(permissionStore.permission_list.data);

function handleSetPermission() {
  permissionStore.setList(checkedKeys.value);
}
defineExpose({
  name: "[tiger]PermissionTree"
});
</script>
<style lang="less" scoped>
:deep(.ant-tree-icon__customize) {
  padding-top: 4px;
}
</style>
