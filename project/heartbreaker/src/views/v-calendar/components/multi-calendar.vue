<!--
 * @Author: Rikka
 * @Date: 2022-12-01 23:36:35
 * @LastEditTime: 2022-12-01 23:43:06
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\heartbreaker\src\views\v-calendar\components\multi-calendar.vue
-->
<template>
  <div class="section text-center">
    <description>
      <h2 class="text-4xl">Multi-Paned Calendars</h2>
      <h3 class="text-3xl">Responsive multi-row and column layouts</h3>
    </description>
    <div class="flex justify-center">
      <calendar :rows="2" :columns="2" />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "[heartbreaker]MultiCalendar"
};
</script>
<script lang="ts" setup>
import { Calendar } from "v-calendar";
import { Description } from "@stark/common-silver";

defineExpose({
  name: "[heartbreaker]MultiCalendar"
});
</script>
<style lang="scss" scoped></style>
