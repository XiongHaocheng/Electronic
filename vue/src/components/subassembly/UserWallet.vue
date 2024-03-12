<script setup lang="ts">
import { isDark } from "../../composables/dark";


</script>
<template>
   
    
        
        <div style="max-width: 1200px;">
        <el-row :gutter="50">
            <el-col :span="6">
                <el-card shadow="always" style="height: 200px;border: none;"><el-empty description="NoData" :image-size="80" /></el-card>
            </el-col>
            <el-col :span="12">
              <el-row>
                <el-col :span="4"><div class="name">周何熊</div></el-col>
                <el-col :span="10"><div style="margin-top: 10px;"><el-icon size="20" color="blue"><Male /></el-icon></div></el-col>
              </el-row>
              <div  style="margin-top: 10px;">
                <el-row :gutter="30">
                  <el-col :span="1">
                    <el-icon size="25"><LocationInformation /></el-icon>
                  </el-col>
                  <el-col :span="20">
                    <div style="font-size: 20px; /* 设置字体大小 */font-weight: 300; /* 设置字体粗细 */">
                      四川省/成都市/双流区/四川大学</div>
                  </el-col>
                </el-row>
               </div>
               <div style="margin-top: 20px;">
                个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍个人介绍
               </div>
            </el-col>
        </el-row>
        </div>

  </template>
 
 
<style>
.WalletCard{
  background-color: aliceblue;
}
.dark .WalletCard{
  background-color: rgb(41, 41, 41);
}
.name{
  font-family: '宋体', sans-serif; /* 设置字体，替换 'YourFont' 为实际字体 */
  font-size: 30px; /* 设置字体大小 */
  font-weight: 700; /* 设置字体粗细 */
}
</style>
  