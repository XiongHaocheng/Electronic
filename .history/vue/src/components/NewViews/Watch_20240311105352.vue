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

<div style="margin: 0 50px;">
<div class="card-container">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
    <div class="card">Card 4</div>
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
  display: flex; /* 使用 Flexbox 布局 */
  justify-content: space-between; /* 在父容器中平均分配子元素的空间 */
  width: 100%; /* 设置宽度为 100%，占据整个可用空间 */
}

.card {
  width: 23%; /* 设置卡片的宽度 */
  height: 200px;
  padding: 20px;
  border: 1px solid #ccc;
  box-sizing: border-box; /* 盒子模型设置为 border-box，包括边框和内边距在内的总宽度为设置的宽度 */
  background-color: #f9f9f9;
}
</style>