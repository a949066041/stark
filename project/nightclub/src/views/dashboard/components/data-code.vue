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
        <a-progress class="mb-1" :percentage="70" />
        <p class="text-sm">TypeScript</p>
        <a-progress class="mb-1" :percentage="40" />
        <p class="text-sm">SCSS</p>
        <a-progress class="mb-1" :percentage="20" />
        <p class="text-sm">ESLint</p>
        <a-progress class="mb-1" :percentage="100" status="success" />
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
<style lang="scss" scoped>
.avatar {
  @apply w-20 h-20 rounded-full bg-red-200 absolute -top-10 left-3;
  background: {
    image: url("@stark/common-arc/src/assets/avatar.png");
    repeat: center;
    size: contain;
  }
}
.card-image {
  background: {
    image: url("@stark/common-copper/assets/image.webp");
    repeat: center;
    size: cover;
    position: center;
  }
}
</style>
