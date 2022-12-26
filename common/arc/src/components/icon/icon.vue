<template>
  <latte-svg :class="className" :width="width" :height="height" :namespace="namespace" :name="name" />
</template>
<script lang="ts">
export default {
  name: "[arc]ArcIcon"
};
</script>
<script lang="ts" setup>
const props = defineProps({
  name: { type: String, required: true },
  namespace: { type: String, required: true },
  width: { type: String, required: true },
  height: { type: String, required: true },
  className: { type: String, required: true }
});
defineExpose({
  name: "[arc]Icon",
  props
});
</script>
<style lang="less" scoped></style>
