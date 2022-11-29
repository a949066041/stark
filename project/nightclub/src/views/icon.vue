<!--
 * @Author: Rikka
 * @Date: 2022-11-22 21:00:20
 * @LastEditTime: 2022-11-29 20:51:05
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\nightclub\src\views\icon.vue
-->
<template>
  <div class="stark-container p-4">
    <el-tabs v-model="nowTabs">
      <el-tab-pane lazy v-for="tab in tabList" :label="tab.label" :name="tab.workspace" :key="tab.workspace">
        <div class="flex flex-row flex-wrap" v-if="nowTabs === tab.workspace">
          <div v-for="icon in tab.icon" class="icon-item">
            <latte-svg
              :namespace="tab.workspace"
              :name="icon.iconName"
              width="32px"
              height="32px"
              class="fill-gray-700"
            />
            <div class="px-2 w-full">
              <div class="text-ellipsis overflow-hidden text-center">
                <span class="text-xs">
                  {{ icon.iconName }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import { all_icon } from "@stark/common-iron";
const iron_icon = all_icon.filter(({ namespace }) => namespace === "iron");
const alipay_icon = all_icon.filter(({ namespace }) => namespace === "alipay");
const warning_icon = all_icon.filter(({ namespace }) => namespace === "warning");
const nowTabs = "iron";
const tabList = [
  {
    icon: iron_icon,
    workspace: "iron",
    label: "Iron"
  },
  {
    icon: alipay_icon,
    workspace: "alipay",
    label: "Alipay"
  },
  {
    icon: warning_icon,
    workspace: "warning",
    label: "Warning"
  }
];
defineExpose({
  name: "[nightclub]Icon"
});
</script>
<script lang="ts">
export default {
  name: "[nightclub]Icon"
};
</script>
<style lang="scss" scoped>
.icon-item {
  @apply w-28 h-20 outline outline-1 outline-gray-300 flex flex-col justify-center items-center cursor-pointer;
  margin: 1px;
  &:hover {
    @apply bg-gray-100;
  }
}
</style>
