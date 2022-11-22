<!--
 * @Author: Rikka
 * @Date: 2022-11-22 22:30:44
 * @LastEditTime: 2022-11-22 22:51:05
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\nightclub\src\views\dashboard\components\data-three-chart.vue
-->
<template>
  <div class="w-full h-80 my-4 px-8 flex flex-row justify-between">
    <div class="single">
      <data-raddar-chart />
    </div>
    <div class="single">
      <data-pie-chart />
    </div>
    <div class="single">
      <data-bar-chart />
    </div>
  </div>
</template>
<script lang="ts" setup>
import DataRaddarChart from "./data-raddar-chart.vue";
import DataPieChart from "./data-pie-chart.vue";
import DataBarChart from "./data-bar-chart.vue";
defineExpose({
  name: "[nightclub]DataThreeChart"
});
</script>
<script lang="ts">
export default {
  name: "[nightclub]DataThreeChart"
};
</script>
<style lang="scss" scoped>
.single {
  @apply h-full bg-white rounded-md;
  width: 30%;
}
</style>
