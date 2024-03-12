<template>
  <div class="card-container">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="stacked-cards">
      <div class="card">Card 3</div>
      <div class="card">Card 4</div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: flex; /* 使用 Flexbox 布局 */
  flex-wrap: wrap; /* 让卡片在容器宽度不够时自动换行 */
  justify-content: space-between; /* 在父容器中平均分配子元素的空间 */
  width: 100%; /* 设置宽度为 100%，占据整个可用空间 */
}

.card {
  width: 23%; /* 设置卡片的宽度 */
  height: 200px; /* 设置卡片的初始高度 */
  padding: 20px;
  border: 1px solid #ccc;
  box-sizing: border-box; /* 盒子模型设置为 border-box，包括边框和内边距在内的总宽度为设置的宽度 */
  background-color: #f9f9f9;
  margin-bottom: 10px; /* 添加一些间距 */
}

.stacked-cards {
  display: flex; /* 使用 Flexbox 布局 */
  flex-direction: column; /* 竖直方向排列 */
  width: 23%; /* 设置卡片的宽度 */
}

@media (max-width: 768px) {
  .card {
    width: 100%; /* 当屏幕较窄时，卡片宽度设为100% */
  }

  .stacked-cards {
    width: 100%; /* 当屏幕较窄时，堆叠的卡片宽度设为100% */
  }
}
</style>
