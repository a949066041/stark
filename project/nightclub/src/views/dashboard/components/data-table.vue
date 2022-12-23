<!--
 * @Author: Rikka
 * @Date: 2022-11-23 14:07:42
 * @LastEditTime: 2022-12-23 18:04:22
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\nightclub\src\views\dashboard\components\data-table.vue
-->
<template>
  <div class="w-1/2 pr-4">
    <a-table
      :data-source="list"
      :columns="[
        { dataIndex: 'order', title: 'Order' },
        { dataIndex: 'price', title: 'Price' },
        { dataIndex: 'status', title: 'Status' }
      ]"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'Status'">
          <a-tag :type="record.status === 'pending' ? 'danger' : 'success'">
            {{ record.status }}
          </a-tag>
        </template>
      </template>
    </a-table>
  </div>
</template>
<script lang="ts">
const list = Array(8)
  .fill("")
  .map(() => ({
    order: Math.random().toString(32),
    price: "￥" + (Math.random() * 1000).toFixed(2).toLocaleString(),
    status: Math.random() > 0.5 ? "pending" : "success"
  }));

export default {
  name: "[nightclub]DataTable"
};
</script>
<script lang="ts" setup>
defineExpose({
  name: "[nightclub]DataTable"
});
</script>
<style lang="less" scoped></style>
