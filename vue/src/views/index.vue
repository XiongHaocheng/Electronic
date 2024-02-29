<script lang="ts" setup>
import BaseHeader from "../components/layouts/BaseHeader.vue";
import HelloWorld from "../components/MainInterface.vue";
import { ref } from 'vue'

const index = ref("1");

// Function to update index, this function will be called when the custom event is emitted
const updateIndex = (newIndex:string) => {
  index.value = newIndex;
}
</script>

<template>
  <el-backtop :right="50" :bottom="50" />
  <el-config-provider namespace="ep">
    <BaseHeader @update:index="updateIndex" />
    <div class="flex main-container">
      <div w="full" py="4">
        <HelloWorld :index="index" />
      </div>
    </div>
  </el-config-provider>
</template>

<style>
.main-container {
  height: calc(100vh - var(--ep-menu-item-height) - 3px);
}
</style>