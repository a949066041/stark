<!--
 * @Author: Rikka
 * @Date: 2022-11-22 21:05:58
 * @LastEditTime: 2022-11-22 22:07:23
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
      <div class="text-gray-500 font-bold">{{ title }}</div>
      <div class="font-extrabold">{{ count_str }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";

interface Props {
  color: string;
  name: string;
  title: string;
  count: number;
}

const props = defineProps<Props>();
const count_str = computed(() => props.count.toLocaleString());
defineExpose({
  name: "[nightclub]DataCard",
  color: props.color
});
</script>
<script lang="ts">
export default {
  name: "[nightclub]DataCard"
};
</script>
<style lang="scss" scoped>
.card-container {
  @apply w-1/5 h-full bg-white flex flex-row cursor-pointer justify-between items-center p-2 rounded-md;
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
