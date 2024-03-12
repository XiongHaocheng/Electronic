<template>

<div>
  <el-carousel :interval="4000" arrow="always">
      <el-carousel-item v-for="(item, index) in carouselItems" :key="index">
        <img class="carousel-image" :src="item.image" alt="Carousel Image">
      </el-carousel-item>
    </el-carousel>
</div>

  <div class="product-page">
    <div class="product-grid">
      <el-row :gutter="20">
        <el-col v-for="(product, index) in products" :key="index" :span="6">
          <el-card class="product-card">
            <div class="product-image">
              <img :src="product.image" alt="Product Image">
            </div>
            <div class="product-info">
              <p class="product-name">{{ truncate(product.name, 20) }}</p>
              <p class="product-description">{{ truncate(product.description, 50) }}</p>
              <div class="product-actions">
                <span class="product-price">¥ {{ product.price }}</span>
                <el-button size="small" type="primary">加入购物车</el-button>
                <el-button size="small">购买</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const carouselItems = ref([
  { image: "https://example.com/carousel/image1.jpg" },
  { image: "https://example.com/carousel/image2.jpg" },
  { image: "https://example.com/carousel/image3.jpg" }
]);

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
  {
    name: "联想(Lenovo)拯救者Y9000P 2024 16英寸电竞游戏本笔记本电脑",
    description: "第14代智能英特尔®酷睿™ i9-14900HX/Windows 11 家庭中文版/16英寸/32G（16X2）/1T SSD/RTX™ 4060 8G独显/碳晶灰",
    price: 10399,
    image: "https://p4.lefile.cn/product/adminweb/2024/02/21/9Ef6jV4rnzEWlBRJHn4fPlWZ4-1144.jpg"
  },
  // Add more products as needed
]);

// Function to truncate long text
const truncate = (text, length) => {
  if (text.length > length) {
    return text.substring(0, length) + '...';
  } else {
    return text;
  }
};
</script>

<style scoped>

.product-page {
  padding: 0 200px; /* 设置左右内边距 */
}

.carousel-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.product-grid {
  margin-top: 20px;
}

.product-card {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #f0f0f0;
}

.product-info {
  padding: 10px;
}

.product-name {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
}

.product-description {
  font-size: 12px;
  color: #666;
  margin-bottom: 10px;
}

.product-actions {
  display: flex;
  justify-content: space-between;
}
.shopping-cart-button {
  margin-left: 20px;
}
.product-price {
  color: red;
  font-weight: bold;
}
</style>
