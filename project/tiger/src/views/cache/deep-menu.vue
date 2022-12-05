<!--
 * @Author: Rikka
 * @Date: 2022-12-05 11:00:04
 * @LastEditTime: 2022-12-05 11:17:16
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\tiger\src\views\deep-menu.vue
-->
<template>
  <div class="stark-container p-4">
    <el-input v-model="input" placeholder="深层缓存测试" />
  </div>
</template>
<script lang="ts">
export default {
  name: "[tiger]DeepMenu"
};
</script>
<script lang="ts" setup>
import { ref } from "vue";

const input = ref("");
defineExpose({
  name: "[tiger]DeepMenu"
});
</script>
<style lang="scss" scoped></style>
