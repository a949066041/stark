<!--
 * @Author: Rikka
 * @Date: 2022-12-01 23:45:10
 * @LastEditTime: 2022-12-01 23:49:50
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\heartbreaker\src\views\v-calendar\components\dark-mode.vue
-->
<template>
  <div class="border-t border-b border-gray-900 -mx-4 my-10 shadow-inner" :style="bgStyle">
    <div class="section text-center p-4">
      <description>
        <h2 class="text-gray-200">Dark Mode</h2>
        <p class="text-lg font-medium text-gray-500 mb-6">Darken all the things</p>
      </description>

      <div class="flex flex-col items-center lg:flex-row lg:justify-around">
        <div class="mb-6">
          <calendar color="blue" :attributes="attributes" is-dark />
        </div>
        <div class="mb-6">
          <calendar color="red" :attributes="attributes" is-dark />
        </div>
      </div>
      <div class="flex flex-col items-center lg:flex-row lg:justify-around">
        <div class="mb-6">
          <calendar color="teal" :attributes="attributes" is-dark />
        </div>
        <div class="mb-6">
          <calendar color="purple" :attributes="attributes" is-dark />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "[heartbreaker]DarkMode"
};
</script>
<script lang="ts" setup>
import { Calendar } from "v-calendar";
import { Description } from "@stark/common-silver";

const date = new Date();
const month = date.getMonth();
const year = date.getFullYear();
const bgStyle = {
  backgroundImage: `linear-gradient(to bottom right,hsl(209, 18%, 30%),hsl(210, 24%, 16%))`
};

const attributes = [
  {
    highlight: true,
    dates: {
      start: new Date(year, month, 7),
      end: new Date(year, month, 20)
    }
  }
];

defineExpose({
  name: "[heartbreaker]DarkMode"
});
</script>
<style lang="scss" scoped></style>
