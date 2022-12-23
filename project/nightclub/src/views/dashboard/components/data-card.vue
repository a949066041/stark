<!--
 * @Author: Rikka
 * @Date: 2022-11-22 21:05:58
 * @LastEditTime: 2022-12-23 19:56:28
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\nightclub\src\views\dashboard\components\data-card.vue
-->
<template>
  <div class="card-container">
    <div class="card-icon">
      <latte-svg width="48px" height="48px" namespace="alipay" :name="name" />
    </div>
    <div class="pr-4 text-lg">
      <div class="font-bold text-gray-500">{{ title }}</div>
      <div class="font-extrabold">{{ count_string }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";

interface Properties {
  color: string;
  name: string;
  title: string;
  count: number;
}

const properties = defineProps<Properties>();
const count_string = computed(() => properties.count.toLocaleString());
defineExpose({
  name: "[nightclub]DataCard",
  color: properties.color
});
</script>
<script lang="ts">
export default {
  name: "[nightclub]DataCard"
};
</script>
<style lang="less" scoped>
.card-container {
  @apply h-full bg-white flex flex-row cursor-pointer justify-between items-center p-2 rounded-md dark:bg-zinc-900;
  width: 24%;
  &:hover {
    .card-icon {
      fill: white;
      background-color: v-bind(color);
    }
  }
  .card-icon {
    @apply h-16 p-2 w-16 rounded-md;

    fill: v-bind(color);
  }
}
</style>
