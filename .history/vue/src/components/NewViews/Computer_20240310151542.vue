<template>
  <div>
    <el-carousel indicator-position="outside" height="400px">
      <el-carousel-item v-for="(item, index) in carouselItems" :key="index">
        <div style="width: 100%; height: 400px;"><img :src="item.image" style="width: 100%; height: 100%;"></div>
      </el-carousel-item>
    </el-carousel>

    <el-row :gutter="5">
      <el-col v-for="(product, index) in products" :key="index" :span="6">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <img :src="product.image" class="computer" />
          <div style="padding: 14px">
            <p>{{ product.name }}</p>
            <p>{{ product.description }}</p>
            <div class="bottom">
              <el-button text class="button" @click="addToCart(product)">加入购物车</el-button>
              <el-button text class="button">{{ '¥ ' + product.price }}</el-button>
              <el-button text class="button">购买</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Carousel图片数据
const carouselItems = ref([
  { image: "../../../picture/电脑走马灯1.png" },
  { image: "../../../picture/电脑走马灯2.png" },
  { image: "../../../picture/电脑走马灯3.png" },
  { image: "../../../picture/电脑走马灯4.png" }
]);

// 产品数据
const products = ref([
  {
    name: "联想(Lenovo)拯救者Y9000P 2024 16英寸电竞游戏本笔记本电脑",
    description: "第14代智能英特尔®酷睿™ i9-14900HX/Windows 11 家庭中文版/16英寸/32G（16X2）/1T SSD/RTX™ 4060 8G独显/碳晶灰",
    price: 10399,
    image: "https://p4.lefile.cn/product/adminweb/2024/02/21/9Ef6jV4rnzEWlBRJHn4fPlWZ4-1144.jpg"
  },
  {
    name: "联想(Lenovo)拯救者Y9000P 2024 16英寸电竞游戏本笔记本电脑",
    description: "第14代智能英特尔®酷睿™ i9-14900HX/Windows 11 家庭中文版/16英寸/32G（16X2）/1T SSD/RTX™ 4060 8G独显/碳晶灰",
    price: 10399,
    image: "https://p4.lefile.cn/product/adminweb/2024/02/21/9Ef6jV4rnzEWlBRJHn4fPlWZ4-1144.jpg"
  },
  {
    name: "联想(Lenovo)拯救者Y9000P 2024 16英寸电竞游戏本笔记本电脑",
    description: "第14代智能英特尔®酷睿™ i9-14900HX/Windows 11 家庭中文版/16英寸/32G（16X2）/1T SSD/RTX™ 4060 8G独显/碳晶灰",
    price: 10399,
    image: "https://p4.lefile.cn/product/adminweb/2024/02/21/9Ef6jV4rnzEWlBRJHn4fPlWZ4-1144.jpg"
  },
  {
    name: "联想(Lenovo)拯救者Y9000P 2024 16英寸电竞游戏本笔记本电脑",
    description: "第14代智能英特尔®酷睿™ i9-14900HX/Windows 11 家庭中文版/16英寸/32G（16X2）/1T SSD/RTX™ 4060 8G独显/碳晶灰",
    price: 10399,
    image: "https://p4.lefile.cn/product/adminweb/2024/02/21/9Ef6jV4rnzEWlBRJHn4fPlWZ4-1144.jpg"
  },
  {
    name: "联想(Lenovo)拯救者Y9000P 2024 16英寸电竞游戏本笔记本电脑",
    description: "第14代智能英特尔®酷睿™ i9-14900HX/Windows 11 家庭中文版/16英寸/32G（16X2）/1T SSD/RTX™ 4060 8G独显/碳晶灰",
    price: 10399,
    image: "https://p4.lefile.cn/product/adminweb/2024/02/21/9Ef6jV4rnzEWlBRJHn4fPlWZ4-1144.jpg"
  },
  {
    name: "联想(Lenovo)拯救者Y9000P 2024 16英寸电竞游戏本笔记本电脑",
    description: "第14代智能英特尔®酷睿™ i9-14900HX/Windows 11 家庭中文版/16英寸/32G（16X2）/1T SSD/RTX™ 4060 8G独显/碳晶灰",
    price: 10399,
    image: "https://p4.lefile.cn/product/adminweb/2024/02/21/9Ef6jV4rnzEWlBRJHn4fPlWZ4-1144.jpg"
  },
  {
    name: "联想(Lenovo)拯救者Y9000P 2024 16英寸电竞游戏本笔记本电脑",
    description: "第14代智能英特尔®酷睿™ i9-14900HX/Windows 11 家庭中文版/16英寸/32G（16X2）/1T SSD/RTX™ 4060 8G独显/碳晶灰",
    price: 10399,
    image: "https://p4.lefile.cn/product/adminweb/2024/02/21/9Ef6jV4rnzEWlBRJHn4fPlWZ4-1144.jpg"
  },
  // 其他产品...
]);

// 添加到购物车
const addToCart = (product) => {
  console.log('Adding to cart:', product);
};
</script>

<style scoped>
.ep-row{
  margin-left: 15px; 
  margin-right: 15px;
}

.el-row {
  margin-bottom: 200px;
}

.el-row:last-child {
  margin-bottom: 10;
}

.el-col {
  border-radius: 4px;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.computer {
  width: 100%;
  display: block;
}

/* 调整卡片样式 */
.el-card {
  height: 380px; /* 控制卡片高度 */
  overflow: hidden; /* 隐藏溢出内容 */
}

.text-container {
  height: 160px; /* 控制文本容器高度 */
  overflow: hidden; /* 隐藏溢出内容 */
}

.el-card__body {
  padding: 0 !important; /* 移除卡片内部默认内边距 */
}

/* 调整按钮样式 */
.el-button {
  padding: 6px 12px !important; /* 调整按钮内边距 */
}
</style>
