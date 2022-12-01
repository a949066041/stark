<!--
 * @Author: Rikka
 * @Date: 2022-12-01 21:28:22
 * @LastEditTime: 2022-12-02 00:07:40
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\heartbreaker\src\views\v-calendar\v-calendar.vue
-->
<template>
  <div class="stark-container p-4">
    <simple-calendar />
    <multi-calendar />
    <dark-mode />
    <datepicker />
    <date-range />
    <custom-calendar />
  </div>
</template>
<script lang="ts">
export default {
  name: "[heartbreaker]VCalendar"
};
</script>
<script lang="ts" setup>
import "v-calendar/dist/style.css";
import SimpleCalendar from "./components/simple-calendar.vue";
import MultiCalendar from "./components/multi-calendar.vue";
import DarkMode from "./components/dark-mode.vue";
import Datepicker from "./components/datepicker.vue";
import DateRange from "./components/date-range.vue";
import CustomCalendar from "./components/custom-calendar.vue";
defineExpose({
  name: "[heartbreaker]VCalendar"
});
</script>
<style lang="scss" scoped></style>
