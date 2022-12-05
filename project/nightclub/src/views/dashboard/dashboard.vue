<!--
 * @Author: Rikka
 * @Date: 2022-11-22 20:49:10
 * @LastEditTime: 2022-11-23 14:34:25
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\nightclub\src\views\dashboard\dashboard.vue
-->
<template>
  <div class="stark-container bg-gray-100">
    <div class="h-40 py-4 px-8 flex flex-row justify-between">
      <data-card @click="handleChangeLineChart()" title="Express" :count="102400" color="#40C9C6" name="express" />
      <data-card @click="handleChangeLineChart()" title="New Visits" :count="81212" color="#36A3F7" name="pepole" />
      <data-card @click="handleChangeLineChart()" title="Picture" :count="9280" color="#F4516C" name="picture" />
      <data-card @click="handleChangeLineChart()" title="Shop" :count="13600" color="#34BFA3" name="shop" />
    </div>
    <data-line-chart ref="line_chart" />
    <data-three-chart />
    <div class="flex flex-row px-8 mb-8">
      <data-table />
      <div class="w-1/2 flex flex-row">
        <data-code class="mr-4 flex-1" />
        <data-code class="flex-1" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import "echarts/theme/macarons";
import { ref } from "vue";
import DataCard from "./components/data-card.vue";
import DataLineChart from "./components/data-line-chart.vue";
import DataThreeChart from "./components/data-three-chart.vue";
import DataTable from "./components/data-table.vue";
import DataCode from "./components/data-code.vue";

const line_chart = ref<typeof DataLineChart>();

function handleChangeLineChart() {
  if (line_chart.value) {
    line_chart.value.handleSetOption();
  }
}

defineExpose({
  name: "[nightclub]Dashboard"
});
</script>
<script lang="ts">
export default {
  name: "[nightclub]Dashboard"
};
</script>

<style lang="scss" scoped></style>
