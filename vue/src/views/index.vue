<script lang="ts" setup>
import BaseHeader from "../components/layouts/BaseHeader.vue";
import BaseSide from "../components/layouts/BaseSide.vue";
import HelloWorld from "../components/HelloWorld.vue";
import Logos from "../components/Logos.vue";
import { ref } from 'vue'

const index = ref("2");

// Function to update index, this function will be called when the custom event is emitted
const updateIndex = (newIndex:string) => {
  index.value = newIndex;
}
</script>

<template>
  <el-config-provider namespace="ep">
    <BaseHeader @update:index="updateIndex" />
    <div class="flex main-container">
      <BaseSide />
      <div w="full" py="4">
        <Logos my="4" />
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