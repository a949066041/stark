<!--
 * @Author: Rikka
 * @Date: 2022-11-22 22:36:41
 * @LastEditTime: 2022-12-23 22:22:06
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\nightclub\src\views\dashboard\components\data-raddar-chart.vue
-->
<template>
  <div class="w-full h-full" ref="radder_chart" />
</template>
<script lang="ts" setup>
import { RadarChart } from "echarts/charts";
import { LegendComponent, TitleComponent } from "echarts/components";
import * as echarts from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { nextTick, onMounted, ref } from "vue";

echarts.use([TitleComponent, LegendComponent, RadarChart, CanvasRenderer]);

const radder_chart = ref<HTMLDivElement>();
let myChart: echarts.ECharts;
onMounted(() =>
  nextTick(() => {
    if (radder_chart.value) {
      myChart = echarts.init(radder_chart.value, "macarons");
      setOption();
    }
  })
);

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
      radar: {
        radius: "66%",
        center: ["50%", "42%"],
        splitNumber: 8,
        splitArea: {
          areaStyle: {
            color: "rgba(127,95,132,.3)",
            opacity: 1,
            shadowBlur: 45,
            shadowColor: "rgba(0,0,0,.5)",
            shadowOffsetX: 0,
            shadowOffsetY: 15
          }
        },
        indicator: [
          { name: "Sales", max: 10_000 },
          { name: "Administration", max: 20_000 },
          { name: "Information Technology", max: 20_000 },
          { name: "Customer Support", max: 20_000 },
          { name: "Development", max: 20_000 },
          { name: "Marketing", max: 20_000 }
        ]
      },
      legend: {
        left: "center",
        bottom: "10",
        data: ["Allocated Budget", "Expected Spending", "Actual Spending"]
      },
      series: [
        {
          type: "radar",
          symbolSize: 0,
          areaStyle: {
            normal: {
              shadowBlur: 13,
              shadowColor: "rgba(0,0,0,.2)",
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 1
            }
          },
          data: [
            {
              value: [5000, 7000, 12_000, 11_000, 15_000, 14_000],
              name: "Allocated Budget"
            },
            {
              value: [4000, 9000, 15_000, 15_000, 13_000, 11_000],
              name: "Expected Spending"
            },
            {
              value: [5500, 11_000, 12_000, 15_000, 12_000, 12_000],
              name: "Actual Spending"
            }
          ],
          animationDuration: 3000
        }
      ]
    });
  }
}

defineExpose({
  name: "[nightclub]DataRadderChart"
});
</script>
<script lang="ts">
export default {
  name: "[nightclub]DataRadderChart"
};
</script>
<style lang="less" scoped></style>
