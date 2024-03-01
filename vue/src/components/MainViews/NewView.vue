<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import  Phone  from "./Phone.vue";
const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
<template>
    <div>
  
            
            
         
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">

        <el-tab-pane label="手机" name="first" >
      <template v-slot:default>
        <div style="width: 100vw;margin-top: 0;">
         
        <Phone />
      </div>
      </template>
    </el-tab-pane>

      <el-tab-pane label="电脑" name="second">
        <template v-slot:default>
          <Computer />
      </template>
      </el-tab-pane>

      <el-tab-pane label="外设" name="third">
        <template v-slot:default>
        外设
      </template>
      </el-tab-pane>

      <el-tab-pane label="穿戴" name="fourth">
        <template v-slot:default>
        手表
      </template>
      </el-tab-pane>

      </el-tabs>
          
    </div>
  </template>

<style>
.demo-tabs {
  display: grid;
  place-items: center; /* 水平和垂直居中 */
  height: 100%;
  margin-top: -10px;
}
/* 调整内容与标签不在同一行的样式 */
</style>
  