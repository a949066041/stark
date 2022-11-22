<!--
 * @Author: Rikka
 * @Date: 2022-11-22 22:42:34
 * @LastEditTime: 2022-11-22 22:44:23
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\nightclub\src\views\dashboard\components\data-pie-chart.vue
-->
<template>
  <div class="w-full h-full" ref="pie_chart"></div>
</template>
<script lang="ts" setup>
import * as echarts from "echarts/core";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import { PieChart } from "echarts/charts";
import { LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { nextTick, onMounted, ref } from "vue";

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout
]);
const pie_chart = ref<HTMLDivElement>();
let myChart: echarts.ECharts;

onMounted(() =>
  nextTick(() => {
    if (pie_chart.value) {
      myChart = echarts.init(pie_chart.value);
      setOption();
    }
  })
);

function setOption() {
  if (myChart) {
    myChart.setOption({
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        left: "center",
        bottom: "10",
        data: ["Industries", "Technology", "Forex", "Gold", "Forecasts"]
      },
      series: [
        {
          name: "WEEKLY WRITE ARTICLES",
          type: "pie",
          roseType: "radius",
          radius: [15, 95],
          center: ["50%", "38%"],
          data: [
            { value: 320, name: "Industries" },
            { value: 240, name: "Technology" },
            { value: 149, name: "Forex" },
            { value: 100, name: "Gold" },
            { value: 59, name: "Forecasts" }
          ],
          animationEasing: "cubicInOut",
          animationDuration: 2600
        }
      ]
    });
  }
}
defineExpose({
  name: "[nightclub]DataPieChart"
});
</script>
<script lang="ts">
export default {
  name: "[nightclub]DataPieChart"
};
</script>
<style lang="scss" scoped></style>
