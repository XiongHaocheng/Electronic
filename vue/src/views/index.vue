<script lang="ts" setup>
import BaseHeader from "../components/layouts/BaseHeader.vue";
import MainInterface from "../components/MainInterface.vue";
import { ref } from 'vue'
import BaseBottom from "~/components/layouts/BaseBottom.vue";
const index = ref("1");

// Function to update index, this function will be called when the custom event is emitted
const updateIndex = (newIndex:string) => {
  index.value = newIndex;
}
</script>

<template>
  <el-backtop :right="50" :bottom="70" />
  <el-config-provider namespace="ep">
    <BaseHeader @update:index="updateIndex" />
      <div w="full" py="4">
        <MainInterface :index="index" />
      </div>
    <br>
  <BaseBottom />
  </el-config-provider>

</template>

<style>
</style>