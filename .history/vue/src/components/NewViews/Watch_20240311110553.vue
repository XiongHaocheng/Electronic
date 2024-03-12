<template>
  <div class="app-container"> 

 <div>
  <el-carousel indicator-position="outside"  height="400px" >
    <el-carousel-item >
     <div style="width: 100%; height: 400px;"><img src="../../../picture/电脑走马灯1.png" style="width: 100%; height: 100%;"></div>
    </el-carousel-item>
    <el-carousel-item >
      <div style="width: 100%; height: 400px"><img src="../../../picture/电脑走马灯2.png" style="width: 100%; height: 100%;"></div>
    </el-carousel-item>
    <el-carousel-item >
      <div style="width: 100%; height: 400px;"><img src="../../../picture/电脑走马灯3.png" style="width: 100%; height: 100%;"></div>
    </el-carousel-item>
    <el-carousel-item >
      <div style="width: 100%; height: 400px;"><img src="../../../picture/电脑走马灯4.png" style="width: 100%; height: 100%;"></div>
    </el-carousel-item>
  </el-carousel>
</div>

<div style="margin: 0 100px;">
  <div class="card-container">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="stacked-cards-container">
      <div class="stacked-cards">Card 3</div>
      <div class="stacked-cards">Card 4</div>
    </div>
  </div>
</div>


</div>
</template>

<script>

</script>

<style>
.app-container {
  background-color: #eeeded; /* 设置背景颜色为灰色 */
}
.card-container {
  display: flex;
}

.card {
  margin-right: 25px;
  width: 34%; /* 设置卡片的宽度 */
  height: 300px; /* 设置卡片的高度 */
  padding: 20px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  background-color: #f9f9f9;
}

.stacked-cards-container {
  display: flex;
  flex-direction: column;
  width: 23%;
}

.stacked-cards {
  width: 100%;
  height: 144px; /* 设置卡片的高度为一半 */
  padding: 20px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  background-color: #f9f9f9;
  margin-bottom: 10px; /* 添加一些间距 */
}

</style>