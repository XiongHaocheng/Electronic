<template>
  <div class="product-grid">
    <el-row :gutter="20">
      <el-col v-for="(product, index) in products" :key="index" :span="4">
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
</template>

<script setup>
import { ref } from 'vue';

const products = ref([
  // Product data
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
.product-grid {
  padding: 20px;
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

.product-price {
  color: red;
  font-weight: bold;
}
</style>
