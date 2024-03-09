<template>
    <div
      v-loading="loading"
      element-loading-text="Loading..."
      :element-loading-spinner="svg"
      element-loading-svg-view-box="-10, -10, 50, 50"
      element-loading-background="rgba(122, 122, 122, 0.8)"
      style="width: 100%; height: 100%; position: fixed; top: 0; left: 0; display: flex; justify-content: center; align-items: center;"
    >
    <template>
</template>


</div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  const loading = ref(true)
  const svg = `
          <path class="path" d="
            M 30 15
            L 28 17
            M 25.61 25.61
            A 15 15, 0, 0, 1, 15 30
            A 15 15, 0, 1, 1, 27.99 7.5
            L 15 15
          " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
        `
  </script>
  <style>
  .example-showcase .el-loading-mask {
    z-index: 9;
  }
  </style>
  