<template>
  <div>
    <el-row v-for="(product, index) in products" :key="index">
      <el-col :span="24">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="product.image" class="computer" />
          <div style="padding: 14px" class="text-container">
            <p>{{ product.name }}</p>
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

<script>
import axios from 'axios'; // 导入 Axios 库

export default {
  data() {
    return {
      products: [
        {
          name: "产品1",
          price: 100,
          image: "https://example.com/image1.jpg"
        },
        {
          name: "产品2",
          price: 200,
          image: "https://example.com/image2.jpg"
        },
        // 其他产品...
      ]
    };
  },
  methods: {
    addToCart(product) {
      // 发送 POST 请求到后端，可以使用 product 作为数据
      axios.post('/api/addToCart', product)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }
}
</script>
