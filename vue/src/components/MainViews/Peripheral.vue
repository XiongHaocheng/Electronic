<template>
     <el-row>
    <el-col :span="3"></el-col>
    <el-col :span="18">
        <div style="background-color: black;">
  <el-carousel
    height="500px"
    direction="vertical"
    motion-blur
    :autoplay="false"
  >
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</div>
    </el-col>
    <el-col :span="3"></el-col>
  </el-row>
  <div class="Logo-text">
<p class="title">精选产品</p>
<p class="tip">去买最炫酷的外设</p>
</div>
<el-row><el-col :span="2"></el-col><div class="introduce">专业游戏耳机</div></el-row>
<br>
<el-row>
  <el-col :span="2"></el-col>
    <el-col :span="8">
    <el-card style="height: 10px;width: 100px;background-color: rgba(150, 10, 10);margin-top: -10px;"></el-card><br>
    <el-card style="max-width: 430px; height: 250px;">图片1</el-card>
    <br>
    <el-card style="max-width: 430px; height: 450px; margin-top: 30px;">图片2</el-card>
    </el-col>
    <el-col :span="12"> 
          <el-card style="height: 700px;">图片3</el-card>
    </el-col>
  <el-col :span="2"></el-col>
</el-row>
<div class="Logo-text">
<p class="title">产品展示</p>
<p class="tip">去选最适合的装备</p>
</div>
<el-row>
    <el-col :span="3"></el-col>
    <el-col :span="18">
        <div style="background-color: black;">
  <el-carousel
    height="500px"
    motion-blur
    :autoplay="false"
  >
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</div>
    </el-col>
    <el-col :span="3"></el-col>
  </el-row>
  <div style="height: 80px;"></div>
  <el-row>
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <div class="card-container">
        <!-- 大卡片 -->
        <el-card class="big-card">
          <div>大卡片的内容...</div>
        </el-card>
        <!-- 小卡片 -->
        <el-card class="small-card">
          <div>小卡片的内容...</div>
        </el-card>
      </div>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
 
  </template>
  
  <style scoped>
.Logo-text{
  height: 200px;
  display: flex; /* 使用 Flexbox 布局 */
  justify-content: center; /* 在主轴上水平居中 */
  align-items: center; /* 在交叉轴上垂直居中 */
  flex-direction: column; /* 设置主轴方向为垂直方向 */
}
.Logo-text .title {
  font-family: 'YourFont', sans-serif; /* 设置字体，替换 'YourFont' 为实际字体 */
  font-size: 50px; /* 设置字体大小 */
  font-weight: 400; /* 设置字体粗细 */

}
.Logo-text .tip{
  margin-top: -40px;
  font-family: 'YourFont', sans-serif;
  font-size: 20px; /* 设置字体大小 */
}
.introduce{
  font-family: 'YourFont', sans-serif;
  font-size: 30px; /* 设置字体大小 */
  font-weight:700; /* 设置字体粗细 */
}
.card-container {
  margin-left: 50px;
  position: relative;
  width: fit-content;
  height: 780px;
}
.big-card {
  width: 900px;
  height: 600px;
}
.small-card {
  width: 550px;
  height: 400px;
  position: absolute;
  top: 350px;
  right: -300px; /* 小卡片相对大卡片右上角的位置调整 */
  z-index: 10; /* 确保小卡片在大卡片上方 */
}
  </style>
  