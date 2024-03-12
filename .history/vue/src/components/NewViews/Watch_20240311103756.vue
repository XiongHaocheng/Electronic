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
    <div class="horizontal-cards">
      <!-- 横排的卡片 -->
      <div class="card">Card 1</div>
      <div class="card">Card 2</div>
    </div>
    <div class="vertical-cards">
      <!-- 竖排的卡片 -->
      <div class="card">Card 3</div>
      <div class="card">Card 4</div>
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

.horizontal-cards {
  display: flex;
  flex-direction: row; /* 设置为横向排列 */
}

.vertical-cards {
  display: flex;
  flex-direction: column; /* 设置为纵向排列 */
}

.card {
  width: 100px; /* 设置卡片宽度 */
  height: 100px; /* 设置卡片高度 */
  margin-right: 20px; /* 设置卡片之间的间距 */
  background-color: #ccc; /* 设置卡片背景颜色 */
}
.container {
  margin: 0 20px; /* 在左右两侧留出 20px 的空白区域 */
}
</style>