<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
import { toggleDark } from "~/composables"
import Logos from '../Logos.vue'
import { isDark } from "../../composables/dark";
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
    <el-menu-item index="1">新品发布<el-icon><ShoppingBag /></el-icon></el-menu-item>
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
   
    <el-menu-item h="full" @click="toggleDark()" >
      <button
        class="border-none w-full bg-transparent cursor-pointer"
        style="height: var(--ep-menu-item-height)"
      >
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>

    <div class="flex-grow" />
    <el-menu-item index="5" >购物车<el-icon><ShoppingTrolley /></el-icon></el-menu-item>
    <el-menu-item index="6" >user<el-icon><User /></el-icon></el-menu-item>
    <el-menu-item index="7">about<el-icon><ElementPlus /></el-icon></el-menu-item>
    <el-link :underline="false" href="https://github.com/XiongHaocheng/Electronic">
    <el-menu-item index="8" style="height: 60px;">
    
      <div :class="{ 'dark-mode': isDark }" style="margin-top: -27px;">
      <svg t="1709455690745" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1861" width="30" height="30">
    <path d="M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667" fill="#231F20" p-id="1862"></path>
  </svg>
</div>
 
  </el-menu-item>
</el-link>
  <el-menu-item index="9">
    <router-link to="/login" style="text-decoration: none; color: inherit;">exist<el-icon><SwitchButton /></el-icon></router-link>
  </el-menu-item>

  </el-menu>
</template>
<style>
.flex-grow {
  flex-grow: 1;
}
/* 黑白反色滤镜 */
.dark-mode svg {
  filter: invert(100%);
}
</style>