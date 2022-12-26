<!--
 * @Author: Rikka
 * @Date: 2022-12-01 23:51:25
 * @LastEditTime: 2022-12-23 22:22:54
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\heartbreaker\src\views\v-calendar\components\datepicker.vue
-->
<template>
  <div class="section text-center">
    <description>
      <h2 class="h2">Date Picker</h2>
      <h4>Single Dates</h4>
    </description>
    <div class="flex flex-col items-center mb-6">
      <date-picker v-model="date" />
    </div>
    <h4>Date Ranges</h4>
    <div class="flex flex-col items-center mb-6">
      <date-picker v-model="range" is-range />
    </div>
    <h4>Time Selection &amp; Timezones</h4>
    <div class="flex flex-col items-center mb-6">
      <date-picker mode="dateTime" v-model="range2" is-range />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "[heartbreaker]Datepicker"
};
</script>
<script lang="ts" setup>
import { Description } from "@stark/common-silver";
import { DatePicker } from "v-calendar";

const date = new Date();
const month = date.getMonth();
const year = date.getFullYear();

const range = {
  start: new Date(year, month, 6),
  end: new Date(year, month, 23)
};
const range2 = {
  start: new Date(year, month, 6),
  end: new Date(year, month, 23)
};

defineExpose({
  name: "[heartbreaker]Datepicker"
});
</script>
<style lang="less" scoped></style>
