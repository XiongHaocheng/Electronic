<script setup lang="ts">
import { isDark } from "../../composables/dark";


</script>
<template>
  <el-row>
    <el-col :span="24">
   <div :class="{ 'dark': isDark }">
  
  <div class="Pshow">
    <el-row>
      <el-col :span="24">
        <el-carousel :interval="4000" type="card" height="500px">
     
      <el-carousel-item style="height: 500px">
        <div class="picture"><img src="../../../picture/屏幕截图 2024-02-28 163434.png"></div>
        
      </el-carousel-item>
      <el-carousel-item style="height: 500px">
        <div class="picture"><img src="../../../picture/屏幕截图 2024-02-28 164510.png"></div>
        
      </el-carousel-item>
      <el-carousel-item style="height: 500px">
        <div class="picture"><img src="../../../picture/屏幕截图 2024-02-28 164741.png"></div>
        
      </el-carousel-item>
    </el-carousel>
  </el-col>
  </el-row>
  <el-row>
    <div class="P-box1">



      <div :class="{ 'dark': isDark }">
  <el-card :body-style="{ padding: '0px' }" class="Pbox-card" shadow="always">
    <el-row>
    <el-col :span="6" style="margin: 10px;">
      <div><img src="../../../picture/pms_1708570856.03118739.png"></div>
      <p>应该是购买键</p>
    </el-col>
    <el-col :span="7" :offset="2" >
      参数介绍等等
    </el-col>
    <el-col :span="7">
      参数介绍等等
    </el-col>
  </el-row>
       
      </el-card>
      </div>




</div>
  </el-row>

</div>
   </div>
  </el-col>
  </el-row>

   <el-row>
    <el-col :span="10" :offset="2" style="margin-top: 50px;margin-bottom: 50px;">
      <div class="Picture2"><img src="../../../picture/pms_1708570847.01997341.png"></div>
    </el-col>
    <el-col :span="12">
      购买按钮和一些介绍
    </el-col>
  </el-row>
  </template>
  
  <style scoped>
 .picture img {
        max-width:100%; 
        max-height: 100%; 
       object-fit: cover;
    }

.Picture2 img{
  max-width:400px; 
  max-height: 400px; 
  object-fit: cover;
}
.Pbox-card img{
  max-width: 250px;
  max-height: 250px;
  object-fit: cover;
}
.dark .Pbox-card{
  background-color: rgb(52, 50, 50);
}
.Pbox-card{
  background-color: rgb(233, 233, 233);
}
.Pshow{
  height: 840px;
  width: 100vw;
  background-color: rgb(222, 222, 222);
}
.dark .Pshow{
  background-color: rgba(76, 13, 1, 0.337);
}
.Pbox-card {
  width: 96vw;
  height: 320px;
}
.P-box1{
  margin-left: 2%; margin-right: 2%;margin-top: 10px;

}
  </style>
  