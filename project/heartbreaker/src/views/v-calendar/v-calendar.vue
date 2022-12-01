<!--
 * @Author: Rikka
 * @Date: 2022-12-01 21:28:22
 * @LastEditTime: 2022-12-01 22:04:29
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\heartbreaker\src\views\v-calendar\v-calendar.vue
-->
<template>
  <div class="stark-container p-4">
    <simple-calendar />
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
defineExpose({
  name: "[heartbreaker]VCalendar"
});
</script>
<style lang="scss" scoped></style>
