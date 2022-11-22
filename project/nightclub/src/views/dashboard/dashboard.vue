<!--
 * @Author: Rikka
 * @Date: 2022-11-22 20:49:10
 * @LastEditTime: 2022-11-22 21:45:23
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\nightclub\src\views\dashboard\dashboard.vue
-->
<template>
  <div class="stark-container bg-gray-100">
    <div class="h-40 py-4 flex flex-row justify-around">
      <data-card
        title="Express"
        :count="102400"
        color="#40C9C6"
        name="express"
      />
      <data-card
        title="New Visits"
        :count="81212"
        color="#36A3F7"
        name="pepole"
      />
      <data-card title="Picture" :count="9280" color="#F4516C" name="picture" />
      <data-card title="Shop" :count="13600" color="#34BFA3" name="shop" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import DataCard from "./components/data-card.vue";
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
