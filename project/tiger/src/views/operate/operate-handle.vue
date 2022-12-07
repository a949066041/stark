<!--
 * @Author: Rikka
 * @Date: 2022-12-05 12:57:57
 * @LastEditTime: 2022-12-06 16:38:13
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\tiger\src\views\operate\operate-handle.vue
-->
<template>
  <div class="stark-container p-4">
    <a-button @click="handleSetRandom()">Random {{ change_count }}</a-button>
  </div>
</template>
<script lang="ts">
export default {
  name: "[tiger]OperateHandle"
};
</script>
<script lang="ts" setup>
import { useCacheStore } from "@stark/common-arc";
import { ref } from "vue";
import OperateData from "./operate-data.vue";

const store = useCacheStore();
const change_count = ref(0);
function handleSetRandom() {
  const OperateDataView = store.getCache<typeof OperateData>("[tiger]OperateData");
  if (OperateDataView) {
    OperateDataView.handleChangeData();
    change_count.value = OperateDataView.change_conut;
  }
}

defineExpose({
  name: "[tiger]OperateHandle"
});
</script>
<style lang="scss" scoped></style>
