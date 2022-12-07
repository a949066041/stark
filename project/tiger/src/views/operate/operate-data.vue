<!--
 * @Author: Rikka
 * @Date: 2022-12-05 12:56:25
 * @LastEditTime: 2022-12-06 16:38:18
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\tiger\src\views\operate\operate-data.vue
-->
<template>
  <div class="stark-container p-4">
    <a-input v-model="text_data" />
    <p>变更次数: {{ change_conut }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const text_data = ref("");
const change_conut = ref(0);

function handleChangeData() {
  text_data.value = Math.random().toString(32);
  change_conut.value++;
}

defineExpose({
  name: "[tiger]OperateData",
  text_data,
  handleChangeData,
  change_conut
});
</script>
<script lang="ts">
export default {
  name: "[tiger]OperateData"
};
</script>
<style lang="scss" scoped></style>
