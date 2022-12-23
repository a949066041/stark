<!--
 * @Author: Rikka
 * @Date: 2022-12-01 20:05:58
 * @LastEditTime: 2022-12-23 20:17:35
 * @LastEditors: Rikka
 * @Description: 
 * @FilePath: \stark\project\heartbreaker\src\views\ag-grid.vue
-->
<template>
  <div class="stark-container p-4">
    <description>
      <h2>Ag Grid</h2>
      <p>大数据量表格方案，使用 ag-grid-community 和 ag-grid-vue3</p>
      <a-button type="link">
        <a href="https://www.ag-grid.com/vue-data-grid/getting-started/">
          https://www.ag-grid.com/vue-data-grid/getting-started/
        </a>
      </a-button>
    </description>
    <a-button class="my-4" @click="deselectRows">deselect rows</a-button>
    <ag-grid-vue
      class="ag-theme-material"
      style="height: 500px"
      :column-defs="columnDefs.value"
      :row-data="rowData"
      :default-col-def="defaultColDef"
      row-selection="multiple"
      animate-rows="true"
      @cell-clicked="cellWasClicked"
      @grid-ready="onGridReady"
    >
    </ag-grid-vue>
  </div>
</template>
<script lang="ts">
export default {
  name: "[heartbreaker]AgGrid"
};
</script>
<script lang="ts" setup>
import { GridReadyEvent, GridApi, CellClickedEvent } from "ag-grid-community";
import { AgGridVue } from "ag-grid-vue3"; // the AG Grid Vue Component
import { reactive, onMounted, ref } from "vue";
import { Description } from "@stark/common-silver";

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-material.min.css"; // Optional theme CSS

const gridApi = ref<GridApi | null>(); // Optional - for accessing Grid's API

// Obtain API from grid's onGridReady event
const onGridReady = (params: GridReadyEvent) => {
  gridApi.value = params.api;
};

const rowData = reactive<Array<unknown>>([]); // Set rowData to Array of Objects, one Object per Row

// Each Column Definition results in one Column.
const columnDefs = reactive({
  value: [{ field: "make" }, { field: "model" }, { field: "price" }]
});

// DefaultColDef sets props common to all Columns
// eslint-disable-next-line unicorn/prevent-abbreviations
const defaultColDef = {
  sortable: true,
  filter: true,
  flex: 1
};

// Example load data from sever
onMounted(() => {
  fetch("https://www.ag-grid.com/example-assets/row-data.json")
    .then((result) => result.json())
    .then((remoteRowData) => rowData.push(...remoteRowData));
});
const cellWasClicked = (event: CellClickedEvent) => {
  // Example of consuming Grid Event
  console.log("cell was clicked", event);
};
const deselectRows = () => {
  if (gridApi.value) {
    gridApi.value.deselectAll();
  }
};
defineExpose({
  name: "[heartbreaker]AgGrid"
});
</script>
<style lang="less" scoped></style>
