<!--
 * @Author: Rikka
 * @Date: 2022-12-05 10:55:11
 * @LastEditTime: 2022-12-05 10:59:01
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\tiger\src\views\cache-test.vue
-->

<template>
  <div class="stark-container p-4">
    <el-input v-model="input" placeholder="缓存测试" />
  </div>
</template>
<script lang="ts">
export default {
  name: "[tiger]CacheTset"
};
</script>
<script lang="ts" setup>
import { ref } from "vue";

const input = ref("");
defineExpose({
  name: "[tiger]CacheTset"
});
</script>
<style lang="scss" scoped></style>
