<!--
 * @Author: Rikka
 * @Date: 2022-11-29 22:16:04
 * @LastEditTime: 2022-11-29 22:23:25
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\common\silver\src\components\description\description.vue
-->
<template>
  <div class="description-container">
    <slot />
  </div>
</template>
<script lang="ts">
export default {
  name: "[silver]Description"
};
</script>
<script lang="ts" setup>
defineExpose({
  name: "[silver]Description"
});
</script>
<style lang="scss" scoped>
.description-container {
  border: {
    left: solid 4px;
  }
  @apply text-gray-500 border-blue-500 pl-2 mb-4;
}
</style>
