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
    @select="handleSelect"
  >
    <el-menu-item index="1">新品发布</el-menu-item>
    <el-sub-menu index="2">
      <template #title>购买</template>
      <el-menu-item index="2-1">电脑</el-menu-item>
      <el-menu-item index="2-2">手机</el-menu-item>
      <el-menu-item index="2-3">智能穿戴</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>外设</template>
        <el-menu-item index="2-4-1">鼠标</el-menu-item>
        <el-menu-item index="2-4-2">键盘</el-menu-item>
        <el-menu-item index="2-4-3">显示器</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" >Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
    <el-menu-item h="full" @click="toggleDark()">
      <button
        class="border-none w-full bg-transparent cursor-pointer"
        style="height: var(--ep-menu-item-height)"
      >
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>
  </el-menu>
</template>