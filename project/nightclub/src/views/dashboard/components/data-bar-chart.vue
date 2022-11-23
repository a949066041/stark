<!--
 * @Author: Rikka
 * @Date: 2022-11-22 22:47:43
 * @LastEditTime: 2022-11-23 13:59:57
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\nightclub\src\views\dashboard\components\data-bar-chart.vue
-->
<template>
  <div class="w-full h-full" ref="bar_chart"></div>
</template>
<script lang="ts" setup>
import * as echarts from "echarts/core";
import "echarts/theme/macarons";

import {
  TooltipComponent,
  GridComponent,
  LegendComponent
} from "echarts/components";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { nextTick, onMounted, ref } from "vue";

echarts.use([
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  CanvasRenderer
]);

const bar_chart = ref<HTMLDivElement>();
let myChart: echarts.ECharts;

onMounted(() =>
  nextTick(() => {
    if (bar_chart.value) {
      myChart = echarts.init(bar_chart.value, "macarons");
      setOption();
    }
  })
);
const animationDuration = 3000;
function setOption() {
  if (myChart) {
    myChart.setOption({
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        top: 10,
        left: "2%",
        right: "2%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          axisTick: {
            show: false
          }
        }
      ],
      series: [
        {
          name: "pageA",
          type: "bar",
          stack: "vistors",
          barWidth: "60%",
          data: [79, 52, 200, 334, 390, 330, 220],
          animationDuration
        },
        {
          name: "pageB",
          type: "bar",
          stack: "vistors",
          barWidth: "60%",
          data: [80, 52, 200, 334, 390, 330, 220],
          animationDuration
        },
        {
          name: "pageC",
          type: "bar",
          stack: "vistors",
          barWidth: "60%",
          data: [30, 52, 200, 334, 390, 330, 220],
          animationDuration
        }
      ]
    });
  }
}
defineExpose({
  name: "[nightclub]DataBarChart"
});
</script>
<script lang="ts">
export default {
  name: "[nightclub]DataBarChart"
};
</script>
<style lang="scss" scoped></style>
