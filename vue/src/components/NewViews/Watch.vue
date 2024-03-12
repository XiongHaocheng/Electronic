<template>


<el-carousel indicator-position="outside"  height="400px">
    <el-carousel-item>
        <div style="width: 100%; height: 400px;">
            <img src="../../../picture/手表1.png" style="width: 100%; height: 100%; ">
        </div>
    </el-carousel-item>
    <el-carousel-item>
        <div style="width: 100%; height: 400px;">
            <img src="../../../picture/手表2.png" style="width: 100%; height: 100%; ">
        </div>
    </el-carousel-item>
    <el-carousel-item>
        <div style="width: 100%; height: 400px;">
            <img src="../../../picture/手表3.png" style="width: 100%; height: 100%; ">
        </div>
    </el-carousel-item>
    <el-carousel-item>
        <div style="width: 100%; height: 400px;">
            <img src="https://res.vmallres.com/uomcdn/CN/cms/2024-01/19166e0c0b8b4ccdb96d32d49b374f7b.jpg" style="width: 100%; height: 100%; ">
        </div>
    </el-carousel-item>
</el-carousel>

<el-row :gutter="5">
  <!-- 第二行 -->
  <el-col>
    <!-- 第二行的内容放在这里 -->
  </el-col>
</el-row>

    <el-row :gutter="20">
     <el-col
     v-for="(o, index) in 1"
     :key="o"
     :span="24"
     :offset="index > 0 ? 1 : 0"
   >
     <el-card :body-style="{ padding: '0px' }" shadow="hover">
       <img
         src="https://res.vmallres.com/uomcdn/CN/cms/2024-02/be8e951f8f8548ac8dac7c900a3831a5.jpg"
         class="watch"
       />
     </el-card>
   </el-col>
    </el-row>


    <div class="border-container">
     <el-text class="mx-1 custom-text" type="primary" style="font-size: 30px;  padding: 40px;">NEW PATTERN</el-text>
    </div>




    
      <el-card :body-style="{ padding: '0px' }" class="Pbox-card" shadow="always">
    <el-row>
    <el-col :span="6" style="margin: 10px;">
      <div><img src="https://img13.360buyimg.com/n1/jfs/t1/163045/9/40760/71800/65b6456dF7b5eb436/7037db58245f8915.png.avif"></div>
          <div class="bottom">
            <el-button text class="button custom-texts"  style="color: #ff0000;">¥16999</el-button>
            <el-button-group class="ml-4 ">
            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="收藏"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="StarFilled" />
            </template>
            </el-popover>

            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="加入购物车"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="ShoppingCart" />
            </template>
            </el-popover>

            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="购买"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="Money" />
            </template>
            </el-popover>

          </el-button-group>
          </div>
    </el-col>
    
    <el-col :span="7" :offset="2" >
     <p>华为手表WATCH GT3 Pro   </p>
     <p>[健康管理]</p>
     <p>支持血氧自动检测、体温检测、智能心率监测。加入呼吸健康研究，主动筛查肺部感染风险</p>
     <p>[非凡材质]</p>
     <p>微晶陶瓷，蓝宝石玻璃透镜</p>
     <p>[女性生理周期管理]</p>
     <p>智能预测生理周期及易孕期</p>
    </el-col>
    <el-col :span="7">
     <p>[心电分析]</p>
     <p>心电分析提示软件，获得药监局二类医疗器械注册证</p>
     <p>[腕上微信，强劲续航]</p>
     <p>支持微信手表版，消息即看即回，最长续航7天</p>
     <p>[专业户外运动]</p>
     <p>100+运动模式，新增高尔夫球场模式和30米自由潜</p>
    </el-col>
    </el-row>
      </el-card>

      <el-row :gutter="5">
  <!-- 第二行 -->
  <el-col style="height: 5px;">
    <!-- 第二行的内容放在这里 -->
  </el-col>
</el-row>


      <el-card :body-style="{ padding: '0px' }" class="Pbox-card" shadow="always">
    <el-row>
      <el-col :span="6" style="margin: 10px;">
      <div><img src="https://img11.360buyimg.com/n1/jfs/t1/210361/27/31672/97743/650f101bFd9e628bb/adce02d2e96a27e9.jpg.avif" style="max-width: 100%; max-height: 100%; "></div>
      <div class="bottom">
            <el-button text class="button custom-texts" style="color: #ff0000;">¥5999</el-button>
            <el-button-group class="ml-4 ">
            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="收藏"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="StarFilled" />
            </template>
            </el-popover>

            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="加入购物车"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="ShoppingCart" />
            </template>
            </el-popover>

            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="购买"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="Money" />
            </template>
            </el-popover>

          </el-button-group>
          </div>
    </el-col>
    <el-col :span="7" :offset="2" >
      <p>HUAWEI WATCH Ultimate 非凡大师 驰骋山地 </p>
      <p>[双向北斗卫星消息]</p>
      <p>无地面网络可发送和接收信息，旅行探险，与世界安心畅连</p>
      <p>[尖端科技，卓越科技]</p>
      <p>超坚固非晶锆合金表壳，纳米微晶陶瓷表圈，蓝宝石玻璃镜面</p>
      <p>[100m深潜科技]</p>
      <p>支持100米潜水5,专业Buhlmann潜水减压模型，多种潜水模式</p>
    </el-col>
    <el-col :span="7">
      <p>[户外探险，专业护航]</p>
      <p>五星双频定位，全新的户外探险功能，标记点返航</p>
      <p>[专业健康管理]</p>
      <p>ECG心电分析，血氧心率智能检测，多项权威健康研究</p>
      <p>[强劲续航，极速快充]</p>
      <p>60分钟极速充满，14天长续航</p>
      <p>[超凡材质，成就冒险之心]</p>
      <p>全球首款采用超坚固非晶锆合金打造的智能手表，强韧坚固，耐磨抗蚀，无惧严苛环境，甚至足以胜任航天级勘探任务12;采用先进的纳米成型技术，更加轻量舒适。</p>
    </el-col>
    </el-row>
      </el-card>



    <div class="border-container">
     <el-text class="mx-1 custom-text" type="primary" style="font-size: 30px;  padding: 20px;">EXPLOSIVE STYLE</el-text>
    </div>


      <el-row :gutter="5">
        <div class="ep-row">
    <el-col
     v-for="(o, index) in 1"
     :key="o"
     :span="8"
     :offset="index > 0 ? 1 : 0"
   >
   <el-card :body-style="{ padding: '0px' }" shadow="hover">
       <img
         src="../../../picture/手表5.png"
         class="watch"
       />
       <div style="padding: 14px; display: flex; flex-direction: column;">
         <span>HUAWEI WATCH GT 4 (46mm) 曜石黑 黑色氟橡胶表带</span>
         <div class="bottom" style="display: flex; justify-content: space-between; align-items: center;">
          <el-button text class="button custom-texts" style="color: #ff0000;">¥1438</el-button>
          <el-button-group class="ml-4 ">
            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="收藏"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="StarFilled" />
            </template>
            </el-popover>

            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="加入购物车"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="ShoppingCart" />
            </template>
            </el-popover>

            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="购买"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="Money" />
            </template>
            </el-popover>

          </el-button-group>
         </div>
       </div>
     </el-card>
   </el-col>
   <el-col
     v-for="(o, index) in 1"
     :key="o"
     :span="8"
     :offset="index > 0 ? 1 : 0"
   >
   <el-card :body-style="{ padding: '0px' }" shadow="hover">
       <img
         src="../../../picture/手表6.png"
         class="watch"
       />
       <div style="padding: 14px; display: flex; flex-direction: column;">
         <span>HUAWEI WATCH FIT 2 活力款 幻夜黑</span>
         <div class="bottom" style="display: flex; justify-content: space-between; align-items: center;">
          <el-button text class="button custom-texts" style="color: #ff0000;">¥599</el-button>
          <el-button-group class="ml-4 ">
            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="收藏"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="StarFilled" />
            </template>
            </el-popover>

            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="加入购物车"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="ShoppingCart" />
            </template>
            </el-popover>

            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="购买"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="Money" />
            </template>
            </el-popover>

          </el-button-group>
         </div>
       </div>
     </el-card>
   </el-col>
   <el-col
     v-for="(o, index) in 1"
     :key="o"
     :span="8"
     :offset="index > 0 ? 1 : 0"
   >
   <el-card :body-style="{ padding: '0px' }" shadow="hover">
       <img
         src="../../../picture/手表7.png"
         class="watch"
       />
       <div style="padding: 14px; display: flex; flex-direction: column;">
         <span>HUAWEI WATCH D 曜石黑 腕部心电血压记录仪</span>
         <div class="bottom" style="display: flex; justify-content: space-between; align-items: center;">
          <el-button text class="button custom-texts" style="color: #ff0000;">¥2288</el-button>
          <el-button-group class="ml-4 ">
            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="收藏"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="StarFilled" />
            </template>
            </el-popover>

            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="加入购物车"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="ShoppingCart" />
            </template>
            </el-popover>

            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="购买"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="Money" />
            </template>
            </el-popover>

          </el-button-group>
         </div>
       </div>
     </el-card>
   </el-col>
   </div>
   </el-row>

   <el-row :gutter="5">
  <!-- 第二行 -->
  <el-col style="height: 5px;">
    <!-- 第二行的内容放在这里 -->
  </el-col>
</el-row>

   <el-row :gutter="5">
    <div class="ep-row">
    <el-col
     v-for="(o, index) in 1"
     :key="o"
     :span="8"
     :offset="index > 0 ? 1 : 0"
   >
   <el-card :body-style="{ padding: '0px' }" shadow="hover">
       <img
         src="../../../picture/手表8.png"
         class="watch"
       />
       <div style="padding: 14px; display: flex; flex-direction: column;">
         <span>Xiaomi Watch S3</span>
         <div class="bottom" style="display: flex; justify-content: space-between; align-items: center;">
          <el-button text class="button custom-texts" style="color: #ff0000;">¥799</el-button>
          <el-button-group class="ml-4 ">
            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="收藏"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="StarFilled" />
            </template>
            </el-popover>

            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="加入购物车"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="ShoppingCart" />
            </template>
            </el-popover>

            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="购买"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="Money" />
            </template>
            </el-popover>

          </el-button-group>
         </div>
       </div>
     </el-card>
   </el-col>
   <el-col
     v-for="(o, index) in 1"
     :key="o"
     :span="8"
     :offset="index > 0 ? 1 : 0"
   >
   <el-card :body-style="{ padding: '0px' }" shadow="hover">
       <img
         src="../../../picture/手表9.png"
         class="watch"
       />
       <div style="padding: 14px; display: flex; flex-direction: column;">
         <span>小米手环8 Pro 原神定制版</span>
         <div class="bottom" style="display: flex; justify-content: space-between; align-items: center;">\
          <el-button text class="button custom-texts" style="color: #ff0000;">¥549</el-button>
          <el-button-group class="ml-4 ">
            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="收藏"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="StarFilled" />
            </template>
            </el-popover>

            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="加入购物车"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="ShoppingCart" />
            </template>
            </el-popover>

            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="购买"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="Money" />
            </template>
            </el-popover>

          </el-button-group>
         </div>
       </div>
     </el-card>
   </el-col>
   <el-col
     v-for="(o, index) in 1"
     :key="o"
     :span="8"
     :offset="index > 0 ? 1 : 0"
   >
   <el-card :body-style="{ padding: '0px' }" shadow="hover">
       <img
         src="../../../picture/手表10.png"
         class="watch"
       />
       <div style="padding: 14px; display: flex; flex-direction: column;">
         <span>小米腕部心电血压记录仪</span>
         <div class="bottom" style="display: flex; justify-content: space-between; align-items: center;">
          <el-button text class="button custom-texts" style="color: #ff0000;">¥1999</el-button>
          <el-button-group class="ml-4 ">
            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="收藏"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="StarFilled" />
            </template>
            </el-popover>

            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="加入购物车"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="ShoppingCart" />
            </template>
            </el-popover>

            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="购买"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="Money" />
            </template>
            </el-popover>

          </el-button-group>
         </div>
       </div>
     </el-card>
   </el-col>
   </div>
   </el-row>
   
   <div class="border-container">
     <el-text class="mx-1 custom-text" type="primary" style="font-size: 30px;  padding: 70px;">HOT SALE</el-text>
   </div>

   <el-row :gutter="5">
    <div class="ep-row">
    <el-col
     v-for="(o, index) in 1"
     :key="o"
     :span="8"
     :offset="index > 0 ? 1 : 0"
   >
   <el-card :body-style="{ padding: '0px' }" shadow="hover">
       <img
         src="https://img14.360buyimg.com/n1/s450x450_jfs/t1/44313/9/23588/35696/6530e53aF71d5691d/795aff8c002138d1.jpg.avif"
         class="watch"
       />
       <div style="padding: 14px">
         <p>苹果 Watch Series 8</p>
         <p>GPS+蜂窝款45毫米星光色铝金属表壳星光色运动型表带</p>
         <div class="bottom" style="display: flex; justify-content: space-between; align-items: center;">
          <el-button text class="button custom-texts" style="color: #ff0000;">¥3149</el-button>
          <el-button-group class="ml-4 ">
            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="收藏"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="StarFilled" />
            </template>
            </el-popover>

            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="加入购物车"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="ShoppingCart" />
            </template>
            </el-popover>

            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="购买"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="Money" />
            </template>
            </el-popover>

          </el-button-group>
         </div>
       </div>
     </el-card>
   </el-col>
   <el-col
     v-for="(o, index) in 1"
     :key="o"
     :span="8"
     :offset="index > 0 ? 1 : 0"
   >
   <el-card :body-style="{ padding: '0px' }" shadow="hover">
       <img
         src="https://img11.360buyimg.com/n1/s450x450_jfs/t1/106800/30/44433/27003/6500da41F3fe2d6fb/742378431a00d556.jpg.avif"
         class="watch"
       />
       <div style="padding: 14px">
        <p>Apple/苹果 Watch Series 9</p>
         <p>GPS款41毫米星光色铝金属表壳 星光色运动型表带</p>
         <div class="bottom" style="display: flex; justify-content: space-between; align-items: center;">
          <el-button text class="button custom-texts" style="color: #ff0000;">¥2999</el-button>
          <el-button-group class="ml-4 ">
            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="收藏"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="StarFilled" />
            </template>
            </el-popover>

            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="加入购物车"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="ShoppingCart" />
            </template>
            </el-popover>

            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="购买"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="Money" />
            </template>
            </el-popover>

          </el-button-group>
         </div>
       </div>
     </el-card>
   </el-col>
   <el-col
     v-for="(o, index) in 1"
     :key="o"
     :span="8"
     :offset="index > 0 ? 1 : 0"
   >
   <el-card :body-style="{ padding: '0px' }" shadow="hover">
       <img
         src="https://img14.360buyimg.com/n1/s450x450_jfs/t1/185626/24/40673/70946/652e45beF43ecb712/887f13a11ab76d15.jpg.avif"
         class="watch"
       />
       <div style="padding: 14px">
        <p>Apple/苹果 Watch Ultra</p>
         <p>GPS + 蜂窝款 49毫米 钛金属表壳午夜色海洋表带</p>
         <div class="bottom" style="display: flex; justify-content: space-between; align-items: center;">
          <el-button text class="button custom-texts" style="color: #ff0000;">¥4999</el-button>
          <el-button-group class="ml-4 ">
            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="收藏"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="StarFilled" />
            </template>
            </el-popover>

            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="加入购物车"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="ShoppingCart" />
            </template>
            </el-popover>

            <el-popover
                placement="top"
                :width="20"
                trigger="hover"
                content="购买"
            >
            <template #reference>
              <el-button type="default" size="small" :icon="Money" />
            </template>
            </el-popover>

          </el-button-group>
         </div>
       </div>
     </el-card>
   </el-col>
   </div>
   </el-row>
 
  </template>

<script setup lang="ts">

import { ref } from 'vue'

const visible = ref(false)

import {
  ShoppingCart,
  Money,
  StarFilled,
} from '@element-plus/icons-vue'
</script>
  
  <style>
  .ep-row{
    margin-left: 15px; 
    margin-right: 15px;
  }
  
  .el-row {
    margin-bottom: 20px;
  }
  .el-row:last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
  
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .Pbox-card img{
  max-width: 250px;
  max-height: 250px;
  object-fit: cover;
}

.custom-text {
  text-align: center;
  /* 在这里添加你的自定义样式 */
  font-size: 30px;
  color: #7b0f0f;
  /* 等等 */
}

.border-container {
  border: 2px solid rgb(132, 32, 32);
  border-radius: 20px;
  padding: 1px; /* 调整文本与边框的间距 */
  font-size: 16px;
  margin: 10px 550px;
}

.watch {
 width: 100%;
 display: block;
}

.custom-texts{
        
        font-weight: bold;
        font-size: 16px;
  }
  </style>
  