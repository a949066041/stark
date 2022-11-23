<!--
 * @Author: Rikka
 * @Date: 2022-11-22 21:00:20
 * @LastEditTime: 2022-11-23 17:29:57
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\nightclub\src\views\icon.vue
-->
<template>
  <div class="stark-container p-4">
    <el-tabs v-model="nowTabs">
      <el-tab-pane label="Alipay" name="alipay" lazy>
        <div class="flex flex-row flex-wrap" v-if="nowTabs === 'alipay'">
          <div v-for="icon in alipay_icon" class="icon-item">
            <latte-svg
              namespace="alipay"
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
      <el-tab-pane label="Warning" name="warning" lazy>
        <div class="flex flex-row flex-wrap" v-if="nowTabs === 'warning'">
          <div v-for="icon in warning_icon" class="icon-item">
            <latte-svg
              namespace="warning"
              :name="icon.iconName"
              width="32px"
              height="32px"
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
const alipay_icon = all_icon.filter(({ namespace }) => namespace === "alipay");
const warning_icon = all_icon.filter(
  ({ namespace }) => namespace === "warning"
);
const nowTabs = "alipay";
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
