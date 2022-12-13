<!--
 * @Author: Rikka
 * @Date: 2022-12-09 09:54:43
 * @LastEditTime: 2022-12-13 21:30:47
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\tiger\src\views\permission\permission-tree.vue
-->
<template>
  <div class="stark-container p-4">
    <a-tree
      v-model:expandedKeys="expandedKeys"
      :selectable="false"
      v-model:checkedKeys="checkedKeys"
      checkable
      :tree-data="treeData"
    >
      <template #title="{ title, key }">
        <span v-if="key === '0-0-1-0'" style="color: #1890ff">{{ title }}</span>
        <template v-else>{{ title }}</template>
      </template>
    </a-tree>
    <div>
      <a-button @click="handleSetPermission()">save</a-button>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "[tiger]PermissionTree"
};
</script>
<script lang="ts" setup>
import { usePermissionStore } from "@stark/common-arc";
import type { TreeProps } from "ant-design-vue";
import { ref, watch } from "vue";
const treeData: TreeProps["treeData"] = [
  {
    title: "Dashboard",
    key: "dashboard"
  },
  {
    title: "Icon",
    key: "icon"
  },
  {
    title: "Component",
    key: "component",
    children: [
      {
        title: "WangEditor",
        key: "component-wangeditor"
      },
      {
        title: "Milkdown",
        key: "component-milkdown"
      },
      {
        title: "AgGrid",
        key: "component-aggrid"
      },
      {
        title: "V-Calendar",
        key: "component-v_calendar"
      },
      {
        title: "Notification",
        key: "component-notification"
      }
    ]
  },
  {
    title: "Form",
    key: "form",
    children: [
      { title: "Custom Form", key: "form-custom_form" },
      { title: "JSON Schema", key: "form-json_schema" }
    ]
  },
  {
    title: "Feature",
    key: "feature",
    children: [
      {
        title: "缓存测试",
        key: "feature-cache",
        children: [
          {
            title: "缓存测试1",
            key: "feature-cache-cache_test"
          },
          {
            title: "二级菜单",
            key: "feature-cache-second",
            children: [
              {
                title: "深层缓存",
                key: "feature-cache-second-deep_menu"
              }
            ]
          }
        ]
      },
      {
        title: "跨页操作",
        key: "feature-operate",
        children: [
          { title: "数据页", key: "feature-operate-data" },
          { title: "操作页", key: "feature-operate-handle" }
        ]
      },
      { title: "权限", key: "feature-permission", children: [{ title: "权限树", key: "feature-permission-tree" }] }
    ]
  }
];
const permissionStore = usePermissionStore();
const expandedKeys = ref<string[]>([]);
const checkedKeys = ref<string[]>(permissionStore.permission_list.data);
watch(checkedKeys, () => {
  console.log("checkedKeys", checkedKeys);
});

function handleSetPermission() {
  permissionStore.setList(checkedKeys.value);
}
defineExpose({
  name: "[tiger]PermissionTree"
});
</script>
<style lang="less" scoped></style>
