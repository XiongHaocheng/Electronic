<template>

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
  
  <el-row :gutter="5">
    <div class="ep-row">
    <el-col :span="6">
      <el-card :body-style="{ padding: '0px' }" shadow="hover">
       <img
         src="https://p4.lefile.cn/product/adminweb/2024/02/21/9Ef6jV4rnzEWlBRJHn4fPlWZ4-1144.jpg"
         class="computer"
       />
       <div style="padding: 14px">
         <p>联想(Lenovo)拯救者Y9000P 2024 16英寸电竞游戏本笔记本电脑</p>
         <p>第14代智能英特尔®酷睿™ i9-14900HX/Windows 11 家庭中文版/16英寸/32G（16X2）/1T SSD/RTX™ 4060 8G独显/碳晶灰</p>
         <p>专业超竞屏       2560x1600分辨率        240Hz高刷新率 100%DCI-P3色域(典型值) 500尼特高亮度(典型值) </p>
         <p>GeForce RTX 40系列笔记本电脑GPU,本地AI算力至高可达686 TOPS*。搭载专用的AI Tensor Core,可为游戏、创作、 日常工作等领域的AI提供强大性能和革新功能。</p>
         <p>借助AI驱动的DLSS 3技术，在游戏和创意应用中实现性能飞跃，并在全景光线追踪的加持下，缔造栩栩如生的虚拟世界。</p>
         <p>经RTX和AI加速的热门]创意应用，带来更稳定体验的NVIDIA Studio驱动，以及Studio 全套专用工具，为您的创意加速。</p>
         <div class="bottom">
           <el-button text class="button" @click="addToCart(1)">加入购物车</el-button>
           <el-button text class="button">¥ {{ price[0] }}</el-button>
           <el-button  text class="button" @click="purchase(['马良铅笔'])">购买</el-button>
         </div>
       </div>
     </el-card>
    </el-col>

    <el-col :span="6">
      <el-row>
         <el-col :span="24">
          <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://p1.lefile.cn/product/adminweb/2024/02/19/QykugVicXO9d8m9wQapnNGbTE-7763.jpg"
            class="computer"
          />
          <div style="padding: 14px"  class="text-container">
            <p>联想(Lenovo)小新14 2024款 14英寸轻薄笔记本电脑 霜雪银</p>
            <div class="bottom">
                <el-button text class="button" @click="addToCart(2)">加入购物车</el-button>
                <el-button text class="button">¥ {{ price[1] }}</el-button>
                <el-button text class="button" @click="Purchase(['水桶'])">购买</el-button>
            </div>
          </div>
        </el-card>        
        </el-col>
      </el-row>

      <el-row :gutter="5">
  <!-- 第二行 -->
  <el-col>
    <!-- 第二行的内容放在这里 -->
  </el-col>
</el-row>

<el-row>
         <el-col :span="24">
          <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://static.asus.com.cn/store/album/images/R1D4SIQKJPQNBZ/09235256534851.jpg"
            class="computer"
          />
          <div style="padding: 14px"  class="text-container">
            <p>ROG枪神8 超竞版 14代酷睿i9 16英寸 电竞游戏本笔记本电脑  (i9-14900HX 16G 1T RTX4080 MiniLED)</p>
            <div class="bottom">
                <el-button text class="button" @click="addToCart(3)">加入购物车</el-button>
                <el-button text class="button">¥ {{ price[2] }}</el-button>
              <el-button text class="button">购买</el-button>
            </div>
          </div>
        </el-card>
        </el-col>
      </el-row>
    </el-col>

    <el-col :span="6">
      <el-row>
         <el-col :span="24">
          <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://p3.lefile.cn/product/adminweb/2024/02/19/LlRjWOujfuVMHa8lKsUOCKBTT-7902.jpg"
            class="computer"
          />
          <div style="padding: 14px"  class="text-container">
            <p>联想(Lenovo)小新15 2024款15.3英寸轻薄笔记本电脑 霜雪银</p>
            <div class="bottom">
                <el-button text class="button" @click="addToCart(4)">加入购物车</el-button>
                <el-button text class="button">¥ {{ price[3] }}</el-button>
              <el-button text class="button">购买</el-button>
            </div>
          </div>
        </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="5">
  <!-- 第二行 -->
  <el-col>
    <!-- 第二行的内容放在这里 -->
  </el-col>
</el-row>

      <el-row>
         <el-col :span="24">
          <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://static.asus.com.cn/store/album/images/YQ4QD5LDSPQHY9/17375955985510.jpg"
            class="computer"
          />
          <div style="padding: 14px"  class="text-container">
            <p>ROG魔霸7 Plus 超能版 17.3英寸 16核新锐龙 电竞游戏本笔记本电脑  (R9 7945HX 液金导热 16G 1T RTX4080 )</p>
            <div class="bottom">
                <el-button text class="button" @click="addToCart(5)">加入购物车</el-button>
                <el-button text class="button">¥ {{ price[4] }}</el-button>
              <el-button text class="button">购买</el-button>
            </div>
          </div>
        </el-card>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="6">
      <el-row>
         <el-col :span="24">
          <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://p1.lefile.cn/product/adminweb/2024/02/19/CjMVCZRjep9kr7lFUqwbgTecJ-9529.jpg"
            class="computer"
          />
          <div style="padding: 14px"  class="text-container">
           <p>联想(Lenovo)小新16 2024款AI高能轻薄笔记本电脑 霜雪银</p>
            <div class="bottom">
                <el-button text class="button" @click="addToCart(6)">加入购物车</el-button>
                <el-button text class="button">¥ {{ price[5] }}</el-button>
              <el-button text class="button">购买</el-button>
            </div>
          </div>
        </el-card>        
        </el-col>
      </el-row>

      <el-row :gutter="5">
  <!-- 第二行 -->
  <el-col>
    <!-- 第二行的内容放在这里 -->
  </el-col>
</el-row>

      <el-row>
         <el-col :span="24">
          <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://static.asus.com.cn/store/album/images/RUHR395SI6ZCHJ/17191955554997.jpg"
            class="computer"
          />
          <div style="padding: 14px"  class="text-container">
           <p>ROG幻16 Air酷睿Ultra 9 16英寸设计师游戏笔记本电脑  (U9-185H 32G 1T RTX4060 2.5K 240Hz OLED)铂月白</p>
            <div class="bottom">
                <el-button text class="button" @click="addToCart(7)">加入购物车</el-button>
                <el-button text class="button">¥ {{ price[6] }}</el-button>
              <el-button text class="button">购买</el-button>
            </div>
          </div>
        </el-card>
        </el-col>
      </el-row>
    </el-col>
  </div>
  </el-row>

  <el-row :gutter="5">
  <!-- 第二行 -->
  <el-col>
    <!-- 第二行的内容放在这里 -->
  </el-col>
</el-row>

    <el-row :gutter="20" >
        <div class = "ep-row">
      <el-col 
        v-for="(o, index) in 1"
        :key="o"
        :span="6"
        :offset="index > 0 ? 1 : 0"
      >
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://static.asus.com.cn/store/album/images/Z8RM5QBVO3IGOW/17302110057505.jpg"
            class="computer"
          />
          <div style="padding: 14px"  class="text-container">
            <p>华硕灵耀14 2024 全新酷睿标压Ultra7 2.8K 120Hz OLED屏高颜值AI超轻薄商务办公笔记本电脑  冰川银</p>
            <div class="bottom">
                <el-button text class="button" @click="addToCart(8)">加入购物车</el-button>
                <el-button text class="button">¥ {{ price[7] }}</el-button>
              <el-button text class="button">购买</el-button>
            </div>
          </div>
        </el-card>
      </el-col>

      <el-col 
        v-for="(o, index) in 1"
        :key="o"
        :span="6"
        :offset="index > 0 ? 1 : 0"
      >
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://static.asus.com.cn/store/album/images/CYHBBYWV446CXQ/00100710299531.jpg"
            class="computer"
          />
          <div style="padding: 14px">
            <p>华硕a豆14 Air 高性能AI超轻薄本 商务办公学生笔记本电脑  (全新R7-8845H 32G 1T 2.8K 120Hz OLED 预装正版Office) 青</p>
            <div class="bottom">
              <el-button text class="button" @click="addToCart(9)">加入购物车</el-button>
              <el-button text class="button">¥ {{ price[8] }}</el-button>
              <el-button text class="button">购买</el-button>
            </div>
          </div>
        </el-card>
      </el-col>


      <el-col 
        v-for="(o, index) in 1"
        :key="o"
        :span="6"
        :offset="index > 0 ? 1 : 0"
      >
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://static.asus.com.cn/store/album/images/ZT1458HQ3P3MU0/03334557100494.jpg"
            class="computer"
          />
          <div style="padding: 14px">
            <p>无畏Pro15 2024 AI超轻薄15.6英寸商务办公笔记本电脑  (酷睿Ultra5-125H 32G 1T 2.8K OLED 预装正版Office)EVO蓝</p>
            <div class="bottom">
              <el-button text class="button" @click="addToCart(10)">加入购物车</el-button>
              <el-button text class="button">¥ {{ price[9] }}</el-button>
              <el-button text class="button">购买</el-button>
            </div>
          </div>
        </el-card>
      </el-col>

      <el-col 
        v-for="(o, index) in 1"
        :key="o"
        :span="6"
        :offset="index > 0 ? 1 : 0"
      >
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://static.asus.com.cn/store/album/images/DI25S85P554TIF/09303710051574.png"
            class="computer"
          />
          <div style="padding: 14px">
           <p>天选5 Pro 24核酷睿i9 16英寸电竞游戏本 笔记本电脑  (i9-13980HX 16G 1T RTX4060 2.5K高亮高刷)灰</p>
            <div class="bottom">
              <el-button text class="button" @click="addToCart(11)">加入购物车</el-button> 
              <el-button text class="button">¥ {{ price[10] }}</el-button>
              <el-button text class="button">购买</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </div>
    </el-row>
  </template>

<script lang="ts" setup>
import axios from 'axios';
import { ref } from 'vue';
const price = [50, 50, 50,50,50,50,50,50,50,50,50]
  const addToCart = (value: any) => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // 添加前导零
    const day = ('0' + currentDate.getDate()).slice(-2); // 添加前导零
    // 格式为 "xxxx-xx-xx" 的当前日期
    const formattedDate = `${year}-${month}-${day}`;
    const data = {
    id: value, 
    time: formattedDate
    };
    console.log(data)
    // 向后台传递的值
    axios.post('http://localhost:9090/cart/add', data)
 .then(response =>{
  console.log(response.data)
 })
  };
  const Purchase = (value:any) =>{

  }
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


  </style>
  




