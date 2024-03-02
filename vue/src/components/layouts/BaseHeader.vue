<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
import { toggleDark } from "~/composables"

const activeIndex = ref('1')
const emit = defineEmits(['update:index'])

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
  emit('update:index', key) // Emit the selected index to the parent
}
</script>

<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="1">新品发布</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" >Info</el-menu-item>
  
    <el-menu-item index="4">Orders</el-menu-item>
   
    <el-menu-item h="full" @click="toggleDark()" >
      <button
        class="border-none w-full bg-transparent cursor-pointer"
        style="height: var(--ep-menu-item-height)"
      >
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="5" >购物车</el-menu-item>
    <el-menu-item index="6" >user</el-menu-item>
    <el-menu-item index="7">about</el-menu-item>
    
  <el-menu-item index="8">
    <router-link to="/login" style="text-decoration: none; color: inherit;">exist</router-link>
  </el-menu-item>

  </el-menu>
</template>
<style>
.flex-grow {
  flex-grow: 1;
}
</style>