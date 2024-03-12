<template>

<el-carousel indicator-position="outside"  height="400px" >
    <el-carousel-item >
     <div style="width: 100%; height: 400px;"><img src="https://ecmb.bdimg.com/tam-ogel/2037726849_-1217546125_4000_1214.jpg?x-bce-process=image/format,f_auto,/quality,q_80" style="width: 100%; height: 100%;"></div>
    </el-carousel-item>
    <el-carousel-item >
      <div style="width: 100%; height: 400px"><img src="https://ecmb.bdimg.com/tam-ogel/-119839109_2091458748_4000_1214.jpg?x-bce-process=image/format,f_auto,/quality,q_80" style="width: 100%; height: 100%;"></div>
    </el-carousel-item>
    <el-carousel-item >
      <div style="width: 100%; height: 400px;"><img src="../../../picture/电脑走马灯3.png" style="width: 100%; height: 100%;"></div>
    </el-carousel-item>
    <el-carousel-item >
      <div style="width: 100%; height: 400px;"><img src="../../../picture/电脑走马灯4.png" style="width: 100%; height: 100%;"></div>
    </el-carousel-item>
  </el-carousel>

  <div class="container">
    <div class="card-container">
    <div class="square-cards">
      <!-- 前两个正方形卡片 -->
      <div class="card square-card">Card 1</div>
      <div class="card square-card">Card 2</div>
    </div>
    <div class="rectangle-cards">
      <!-- 后两个长方形卡片 -->
      <div class="card rectangle-card">Card 3</div>
      <div class="card rectangle-card">Card 4</div>
    </div>
  </div>

  </div>

</template>

<script>

</script>

<style>
.card-container {
  display: flex;
}

.square-cards {
  display: flex;
  flex-direction: row;
}

.rectangle-cards {
  display: flex;
  flex-direction: column;
}

.card {
  margin-right: 20px;
  background-color: #ccc;
}

.square-card {
  width: 100px; /* 正方形卡片宽度 */
  height: 100px; /* 正方形卡片高度 */
}

.rectangle-card {
  width: 100px; /* 长方形卡片宽度 */
  height: 200px; /* 长方形卡片高度 */
}
</style>