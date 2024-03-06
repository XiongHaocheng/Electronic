<script setup lang="ts">
import { isDark } from "../../composables/dark";


</script>
<template>
   
    
        
        <div style="max-width: 1200px;">
        <el-row>
            <el-col :span="6">
                <el-card shadow="always" style="height: 200px;border: none;"><el-empty description="NoData" :image-size="80" /></el-card>
            </el-col>
            <el-col :span="18">
                <div :class="{ 'dark': isDark }" style="margin-top: 10px;">
                <el-card shadow="never" style="height: 180px;border: none;" class="WalletCard">
                    
                  <template #header>
                    <div style="height: 15px;">
                      <span>我的钱包</span>
                    </div>
                  </template>
                  <el-row :gutter="20">

    <el-col :span="5" :offset="1">
      <div class="Wallent-num">
     2
      </div>
      <br>
      <div style="margin-top: -20px;margin-right: -8px;">优惠卷</div>

    </el-col>
    <el-col :span="5">
      <div class="Wallent-num">
     2
      </div>
      <br>
      <div style="margin-top: -20px;margin-right: -8px;">优惠卷</div>

    </el-col>
    <el-col :span="5">
      <div class="Wallent-num">
     2
      </div>
      <br>
      <div style="margin-top: -20px;margin-right: -8px;">优惠卷</div>

    </el-col>
    <el-col :span="5">
      <div class="Wallent-num">
     2
      </div>
      <br>
      <div style="margin-top: -20px;margin-right: -8px;">优惠卷</div>

    </el-col>
    <el-col :span="3">
      <div class="Wallent-num">
     2
      </div>
      <br>
      <div style="margin-top: -20px;margin-right: -8px;">优惠卷</div>

    </el-col>
  </el-row>
                
                </el-card>
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
.Wallent-num{
  font-family: 'YourFont', sans-serif; /* 设置字体，替换 'YourFont' 为实际字体 */
  font-size: 30px; /* 设置字体大小 */
  font-weight: bold; /* 设置字体粗细 */
}
</style>
  