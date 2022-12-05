<!--
 * @Author: Rikka
 * @Date: 2022-11-23 14:23:51
 * @LastEditTime: 2022-11-23 15:14:50
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\nightclub\src\views\dashboard\components\data-code.vue
-->
<template>
  <a-card shadow="never" class="box-card" :body-style="{ padding: '0px' }">
    <div class="w-full h-40 card-image"></div>
    <div class="relative">
      <div class="avatar"></div>
      <div class="h-10 pl-20 text-center">
        <p class="text-lg font-bold leading-10 text-teal-500">stark-workspace</p>
      </div>
      <div class="p-4">
        <p class="text-sm">Vue</p>
        <a-progress class="mb-1" :percent="70" status="active" />
        <p class="text-sm">TypeScript</p>
        <a-progress class="mb-1" :percent="40" status="active" />
        <p class="text-sm">SCSS</p>
        <a-progress class="mb-1" :percent="20" status="active" />
        <p class="text-sm">ESLint</p>
        <a-progress class="mb-1" :percent="100" status="active" />
      </div>
    </div>
  </a-card>
</template>
<script lang="ts">
export default {
  name: "[nightclub]DataCode"
};
</script>
<script lang="ts" setup>
defineExpose({
  name: "[nightclub]DataCode"
});
</script>
<style lang="less" scoped>
.avatar {
  @apply w-20 h-20 rounded-full bg-red-200 absolute -top-10 left-3;
  background-image: url("@stark/common-arc/src/assets/avatar.png");
  background-size: contain;
}
.card-image {
  background-image: url("@stark/common-copper/assets/image.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
