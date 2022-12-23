<!--
 * @Author: Rikka
 * @Date: 2022-11-22 22:04:00
 * @LastEditTime: 2022-12-23 18:04:30
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\nightclub\src\views\dashboard\components\data-line-chart.vue
-->
<template>
  <div class="w-full h-96 px-8">
    <div class="h-full w-full bg-white rounded-md" ref="chart" />
  </div>
</template>
<script lang="ts">
export default {
  name: "[nightclub]DataLineChart"
};
</script>
<script lang="ts" setup>
import * as echarts from "echarts/core";
import { TitleComponent, ToolboxComponent, TooltipComponent, GridComponent, LegendComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { nextTick, onMounted, ref } from "vue";
echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition
]);
const chart = ref<HTMLDivElement>();
let myChart: echarts.ECharts;
onMounted(() =>
  nextTick(() => {
    if (chart.value) {
      myChart = echarts.init(chart.value, "macarons");
      handleSetOption();
    }
  })
);

function handleSetOption() {
  if (myChart) {
    myChart.setOption({
      tooltip: {
        trigger: "axis"
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "Email",
          type: "line",
          smooth: true,
          showSymbol: false,
          stack: "Total",
          lineStyle: {
            color: "#F4516C"
          },
          data: Array(7)
            .fill("")
            .map(() => Math.round(Math.random() * (150 - 100)) + 100)
        },
        {
          name: "Union Ads",
          type: "line",
          smooth: true,
          showSymbol: false,
          stack: "Total",
          lineStyle: { color: "#36A3F7" },
          data: Array(7)
            .fill("")
            .map(() => Math.round(Math.random() * (300 - 20)) + 20)
        }
      ]
    });
  }
}

defineExpose({
  name: "[nightclub]DataLineChart",
  handleSetOption
});
</script>

<style lang="less" scoped></style>
