<script setup lang="ts">
import { isDark } from "d:/Code/Electronic/vue/src/composables/dark";
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
    <el-col :span="10" :offset="2" style="margin-top: 50px;margin-bottom:-30px;height: 500px;">
      <div class="Picture2"><img src="../../../picture/pms_1708570847.01997341.png"></div>
    </el-col>
    <el-col :span="12">
      购买按钮和一些介绍
    </el-col>
  </el-row>
  <el-row>
<div class="P-box1" style="margin-top: -10px;margin-bottom: 10px;"> 
<div :class="{ 'dark': isDark }"> 
    <el-col :span="24">
      <el-card :body-style="{ padding: '0px' }" class="Pbox-card" shadow="always">

      <el-row>
    <el-col :span="16">
      介绍
    </el-col>
    <el-col :span="4">
      <div class="Picture3"><img src="../../../picture/428_428_1A74BDFD458465D67C4BEB51DE38CEE3.png"></div>
    </el-col>
    <el-col :span="4">
    </el-col>
  </el-row>
      </el-card>
<el-row :gutter="20">
  <el-col :span="12" style="margin-top: 10px;">
    <el-card :body-style="{ padding: '0px' }" :class="{'dark-hover': isDark}" class="Pbox-card1" shadow="hover">
      <div class="Picture3"><img src="../../../picture/428_428_1A74BDFD458465D67C4BEB51DE38CEE3.png"></div>
    </el-card>
  </el-col>
  <el-col :span="12" style="margin-top: 10px;">
    <el-card :body-style="{ padding: '0px' }" :class="{'dark-hover': isDark}" class="Pbox-card1" shadow="hover">
    <div class="Picture3"><img src="../../../picture/428_428_1A74BDFD458465D67C4BEB51DE38CEE3.png"></div>
    </el-card>
  </el-col>
</el-row>
<el-row>
  <el-col :span="4" :offset="10">
  <div class="Logo-text">
<p class="title">COMPUTERS</p>
<p class="tip">Newly Launched Flagship Device</p>
</div>
</el-col>
</el-row>
<el-row :gutter="20" style="margin-top: 80px;">
  <el-col :span="2"></el-col>
  <el-col :span="5">
    <el-card :body-style="{ padding: '0px' }" :class="{'dark-hover': isDark}" class="Pbox-card2" shadow="hover" >
    <div class="Picture3"><img src="../../../picture/428_428_1A74BDFD458465D67C4BEB51DE38CEE3.png"></div>
    <div>
      <p>
        购买按钮等等
      </p>
    </div>
    </el-card>
  </el-col>
  <el-col :span="5">
    <el-card :body-style="{ padding: '0px' }" :class="{'dark-hover': isDark}" class="Pbox-card2" shadow="hover" >
    <div class="Picture3"><img src="../../../picture/428_428_1A74BDFD458465D67C4BEB51DE38CEE3.png"></div>
    <div>
      <p>
        购买按钮等等
      </p>
    </div>
    </el-card>
</el-col>
<el-col :span="5">
  <el-card :body-style="{ padding: '0px' }" :class="{'dark-hover': isDark}" class="Pbox-card2" shadow="hover">
    <div class="Picture3"><img src="../../../picture/428_428_1A74BDFD458465D67C4BEB51DE38CEE3.png"></div>
    <div>
      <p>
        购买按钮等等
      </p>
    </div>
    </el-card>
</el-col>
<el-col :span="5">
  <el-card :body-style="{ padding: '0px' }" :class="{'dark-hover': isDark}" class="Pbox-card2" shadow="hover" >
    <div class="Picture3"><img src="../../../picture/428_428_1A74BDFD458465D67C4BEB51DE38CEE3.png"></div>
    <div>
      <p>
        购买按钮等等
      </p>
    </div>
    </el-card>
</el-col>
  <el-col :span="2"></el-col>
</el-row>
<el-row :gutter="20" style="margin-top: 20px;">
  <el-col :span="2"></el-col>
  <el-col :span="5">
    <el-card :body-style="{ padding: '0px' }" :class="{'dark-hover': isDark}" class="Pbox-card2" shadow="hover" >
    <div class="Picture3"><img src="../../../picture/428_428_1A74BDFD458465D67C4BEB51DE38CEE3.png"></div>
    <div>
      <p>
        购买按钮等等
      </p>
    </div>
    </el-card>
  </el-col>
  <el-col :span="5">
    <el-card :body-style="{ padding: '0px' }" :class="{'dark-hover': isDark}" class="Pbox-card2" shadow="hover" >
    <div class="Picture3"><img src="../../../picture/428_428_1A74BDFD458465D67C4BEB51DE38CEE3.png"></div>
    <div>
      <p>
        购买按钮等等
      </p>
    </div>
    </el-card>
</el-col>
<el-col :span="5">
  <el-card :body-style="{ padding: '0px' }" :class="{'dark-hover': isDark}" class="Pbox-card2" shadow="hover" >
    <div class="Picture3"><img src="../../../picture/428_428_1A74BDFD458465D67C4BEB51DE38CEE3.png"></div>
    <div>
      <p>
        购买按钮等等
      </p>
    </div>
    </el-card>
</el-col>
<el-col :span="5">
  <el-card :body-style="{ padding: '0px' }" :class="{'dark-hover': isDark}" class="Pbox-card2" shadow="hover" >
    <div class="Picture3"><img src="../../../picture/428_428_1A74BDFD458465D67C4BEB51DE38CEE3.png"></div>
    <div>
      <p>
        购买按钮等等
      </p>
    </div>
    </el-card>
</el-col>
  <el-col :span="2"></el-col>
</el-row>   
    </el-col>
  </div>
</div>
  </el-row>

  </template>
  
  <style scoped>
 .picture img {
        max-width:100%; 
        max-height: 100%; 
       object-fit: cover;
    }

.Picture2 img{
  max-width:550px; 
  max-height: 550px; 
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
  width: 96vw;
  height: 320px;
  
}
.Pshow{
  height: 840px;
  width: 100vw;
  background-color: rgb(222, 222, 222);
}
.dark .Pshow{
  background-color: rgba(76, 13, 1, 0.337);
}

.P-box1{
  margin-left: 2%; margin-right: 2%;margin-top: 10px;

}
.Picture3 img{
  margin-top: 40px;
  max-width:300px; 
  max-height: 300px; 
  object-fit: cover;
}
.Pbox-card1{
  transition: box-shadow 0.3s ease-in-out;
}
.dark-hover.Pbox-card1:hover {
  box-shadow: 0 0 8px 2px rgba(205, 205, 205, 0.6);
}
.Pbox-card1:hover{
  box-shadow: 0 0 8px 2px rgba(151, 148, 148, 0.6);
}
.Logo-text{
  height: 400px;
  display: flex; /* 使用 Flexbox 布局 */
  justify-content: center; /* 在主轴上水平居中 */
  align-items: center; /* 在交叉轴上垂直居中 */
  flex-direction: column; /* 设置主轴方向为垂直方向 */
}
.Logo-text .title {
  font-family: 'YourFont', sans-serif; /* 设置字体，替换 'YourFont' 为实际字体 */
  font-size: 100px; /* 设置字体大小 */
  font-weight: bold; /* 设置字体粗细 */

}
.Logo-text .tip{
  margin-top: -100px;
  font-family: 'YourFont', sans-serif;
  font-size: 15px; /* 设置字体大小 */
}
.Pbox-card2{
  background-color: rgb(233, 233, 233);
  transition: box-shadow 0.3s ease-in-out;
}
.dark-hover.Pbox-card2:hover {
  box-shadow: 0 0 8px 2px rgba(205, 205, 205, 0.6);
}
.Pbox-card2:hover{
  box-shadow: 0 0 8px 2px rgba(151, 148, 148, 0.6);
}
.dark-hover.Pbox-card2{
  background-color: rgb(43, 43, 43);
}
  </style>
  