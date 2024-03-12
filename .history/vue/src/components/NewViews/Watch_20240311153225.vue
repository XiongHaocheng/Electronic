<template>
  <div class="app-container">
    <!-- 走马灯 -->
    <div>
      <el-carousel indicator-position="outside" height="400px">
        <el-carousel-item>
          <div style="width: 100%; height: 400px;"><img src="../../../picture/电脑走马灯1.png"
              style="width: 100%; height: 100%;"></div>
        </el-carousel-item>
        <el-carousel-item>
          <div style="width: 100%; height: 400px"><img src="../../../picture/电脑走马灯2.png"
              style="width: 100%; height: 100%;"></div>
        </el-carousel-item>
        <el-carousel-item>
          <div style="width: 100%; height: 400px;"><img src="../../../picture/电脑走马灯3.png"
              style="width: 100%; height: 100%;"></div>
        </el-carousel-item>
        <el-carousel-item>
          <div style="width: 100%; height: 400px;"><img src="../../../picture/电脑走马灯4.png"
              style="width: 100%; height: 100%;"></div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div style="margin: 0 150px;">
      <!-- 第一排 -->
      <div class="card-container">

        <div :class="{ 'dark': isDark }" class="card">
          <div :body-style="{ padding: '0px' }" shadow="always"
            style="display: flex; flex-direction: column; align-items: center;margin-top: -20px;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202401/gbom/6942103109607/428_428_B6CFED0EE70C4A06CA27D1F68C1BA19Emp.png"
              style="width: 250px;">
            <p style="font-size: 20px; font-weight: bold;margin-top: -5px;">HUAWEI Mate 60 RS 非凡大师</p>
            <div style="font-size: 20px;">¥ 11999 起 ></div>
          </div>
        </div>


        <div class="card">
          <div style="display: flex; flex-direction: column; align-items: center;margin-top: -20px;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202401/gbom/6942103109591/428_428_650AA2D1F4312445D02527C6CC0FD74Fmp.png"
              style="width: 250px;">
            <p style="font-size: 20px; font-weight: bold;margin-top: -5px;">HUAWEI Mate 60 Pro+</p>
            <div style="font-size: 20px;">¥ 9999 起 ></div>
          </div>
        </div>

        <div class="stacked-cards-container">
          <div :class="{ 'dark': isDark }" class="stacked-cards">
            <div :body-style="{ padding: '0px' }" shadow="always"
              style=" display: flex;align-items: center;height: 100%">
              <div class="text-container">
                <p style="font-size: 20px; font-weight: bold;margin: 5px;width: 150px;">Mate 60 Pro</p>
                <p style="font-size: 20px;margin: 20px 5px;">¥ 6499 起 ></p>
              </div>
              <div class="image-container">
                <img
                  src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202309/gbom/6942103109515/428_428_B85A84324EC75D29F3EDB5ADACA768FBmp.png"
                  style="margin-top: 20px;;width: 200px;">
              </div>
            </div>

          </div>
          <div class="stacked-cards">

            <div style=" display: flex;align-items: center;height: 100%">
              <div class="text-container">
                <p style="font-size: 20px; font-weight: bold;margin: 5px;width: 150px;">Mate 60</p>
                <p style="font-size: 20px;margin: 20px 5px">¥ 5499 起 ></p>
              </div>
              <div class="image-container">
                <img
                  src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202309/gbom/6942103107719/428_428_B60CE4EFDDD3AEBD2801A5E218B1EFFEmp.png"
                  style="margin-top: 20px;;width: 200px;">
              </div>
            </div>

          </div>
        </div>

      </div>

      <!-- 第二排 -->
      <div style="text-align: center;">
        <p style="font-size: 24px; font-weight: bold;">更多手表系列推荐</p>
        <div style="display: flex">

          <div :class="{ 'dark': isDark }" class="recommend-card">

            <div :body-style="{ padding: '0px' }" shadow="always" style="display: flex;align-items: center;">
              <div>
                <img
                  src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202311/gbom/6941487293926/428_428_D50DE377227CAD2517913DFD62A62E8Emp.png"
                  style="width: 150px;">
              </div>

              <div style="text-align: left;margin-left: 20px;">
                <p style="font-size: 15px; width: 180px;">【华为官方翻新】nova 10系列</p>
                <p style="font-size: 12px;;">前置6000万摄像头</p>
                <div style="display: flex;">
                  <div class="button1">
                    <p style="font-size: 1px;width: 200px;margin-left: -9px;margin-top: -8px;color: #f26e6e;">限时直降100元
                    </p>
                  </div>
                  <div class="button2">
                    <p style="font-size: 1px;width: 200px;margin-left: -9px;margin-top: -8px;">赠积分</p>
                  </div>
                </div>
                <div style="display: flex;align-items: center;margin-top: 20px;">
                  <div class="price">
                    ¥2199
                  </div>
                  <div class="discounted-price">
                    <del style="font-size: 5px;">¥2299</del>
                  </div>
                  <button class="buy-now-button" @click="buyNow">立即购买</button>
                </div>

              </div>


            </div>


          </div>

          <div :class="{ 'dark': isDark }" class="recommend-card">

            <div :body-style="{ padding: '0px' }" shadow="always" style="display: flex;align-items: center;">
              <div>
                <img
                  src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202311/gbom/6941487297207/428_428_4C5D0472FF8A88EE423F3D82A066A42Dmp.png"
                  style="width: 150px;">
              </div>

              <div style="text-align: left;margin-left: 20px;">
                <p style="font-size: 15px; width: 180px;">【华为官方翻新】HUAWEI P50 Pocket </p>
                <p style="font-size: 12px;;">精巧宝盒折叠设计</p>
                <div style="display: flex;">
                  <div class="button1">
                    <p style="font-size: 1px;width: 200px;margin-left: -9px;margin-top: -8px;color: #f26e6e;">限时直降100元
                    </p>
                  </div>
                  <div class="button2">
                    <p style="font-size: 1px;width: 200px;margin-left: -9px;margin-top: -8px;">赠积分</p>
                  </div>
                </div>
                <div style="display: flex;align-items: center;margin-top: 20px;">
                  <div class="price">
                    ¥2199
                  </div>
                  <div class="discounted-price">
                    <del style="font-size: 5px;">¥2299</del>
                  </div>
                  <button class="buy-now-button" @click="buyNow">立即购买</button>
                </div>

              </div>


            </div>


          </div>

        </div>

      </div>

      <div style="text-align: center;">
        <p style="font-size: 24px; font-weight: bold;">新款上市</p>
        <div style="display: flex;">
          <div class="recommend-card">卡片1</div>
          <div class="recommend-card">卡片2</div>
          <div class="recommend-card">卡片2</div>
        </div>
      </div>

      <div style="text-align: center;">
        <p style="font-size: 24px; font-weight: bold;">爆款推荐</p>

        <div style="display: flex; justify-content: space-between;margin-bottom: 50px;">
          <div class="hot-card" style="width: 20%;">卡片1</div>
          <div class="hot-card" style="width: 20%;">卡片2</div>
          <div class="hot-card" style="width: 20%;">卡片3</div>
          <div class="hot-card" style="width: 20%;">卡片4</div>
          <div class="hot-card" style="width: 20%;">卡片5</div>
        </div>

        <div style="display: flex; justify-content: space-between;margin-bottom: 50px;">
          <div class="hot-card" style="width: 20%;">卡片6</div>
          <div class="hot-card" style="width: 20%;">卡片7</div>
          <div class="hot-card" style="width: 20%;">卡片8</div>
          <div class="hot-card" style="width: 20%;">卡片9</div>
          <div class="hot-card" style="width: 20%;">卡片10</div>
        </div>

        <div style="display: flex; justify-content: space-between;margin-bottom: 50px;">
          <div class="hot-card" style="width: 20%;">卡片11</div>
          <div class="hot-card" style="width: 20%;">卡片12</div>
          <div class="hot-card" style="width: 20%;">卡片13</div>
          <div class="hot-card" style="width: 20%;">卡片14</div>
          <div class="hot-card" style="width: 20%;">卡片15</div>
        </div>

        <div style="display: flex; justify-content: space-between;margin-bottom: 50px;">
          <div class="hot-card" style="width: 20%;">卡片16</div>
          <div class="hot-card" style="width: 20%;">卡片17</div>
          <div class="hot-card" style="width: 20%;">卡片18</div>
          <div class="hot-card" style="width: 20%;">卡片19</div>
          <div class="hot-card" style="width: 20%;">卡片20</div>
        </div>
      </div>


    </div>

  </div>
</template>

<script>



// 引入组件库的少量全局样式变量
import 'tdesign-vue/es/style/index.css';
</script>

<style>
.card-container {
  display: flex;
}

.card {
  margin-right: 25px;
  width: 34%;
  /* 设置卡片的宽度 */
  height: 350px;
  /* 设置卡片的高度 */
  padding: 20px;
  border: 1px solid #f9f9f9;
  box-sizing: border-box;
  background-color: #f9f9f9;
  transition: background-color 0.3s;
  /* 添加过渡效果 */
  cursor: pointer;
  /* 将光标设置为可点击 */
}

.dark .card {
  background-color: rgb(52, 50, 50);
  border: 1px solid rgb(52, 50, 50);
}

.Pshow {
  height: 840px;
  width: 100vw;
  background-color: rgb(222, 222, 222);
}

.dark .Pshow {
  background-color: rgba(76, 13, 1, 0.337);
}

.card:hover {
  box-shadow: 0 0 10px 3px #ccc;
  /* 悬停时添加浅灰色阴影 */
}

.stacked-cards-container {
  display: flex;
  flex-direction: column;
  width: 30%;
}

.stacked-cards {
  width: 100%;
  height: 170px;
  /* 设置卡片的高度为一半 */
  padding: 20px;
  border: 1px solid #f9f9f9;
  box-sizing: border-box;
  background-color: #f9f9f9;
  margin-bottom: 10px;
  /* 添加一些间距 */
  transition: background-color 0.3s;
  /* 添加过渡效果 */
  cursor: pointer;
  /* 将光标设置为可点击 */
}

.dark .stacked-cards {
  background-color: rgb(52, 50, 50);
  border: 1px solid rgb(52, 50, 50);
}

.stacked-cards:hover {
  box-shadow: 0 0 10px 3px #ccc;
  /* 悬停时添加浅灰色阴影 */
}

.recommend-card {
  margin-right: 25px;
  width: 33.3%;
  /* 设置卡片的宽度 */
  height: 200px;
  /* 设置卡片的高度 */
  padding: 20px;
  border: 1px solid #f9f9f9;
  box-sizing: border-box;
  background-color: #f9f9f9;
  transition: background-color 0.3s;
  /* 添加过渡效果 */
  cursor: pointer;
  /* 将光标设置为可点击 */
}

.recommend-card:hover {
  box-shadow: 0 0 10px 3px #ccc;
  /* 悬停时添加浅灰色阴影 */
}

.dark .recommend-card {
  background-color: rgb(52, 50, 50);
  border: 1px solid rgb(52, 50, 50);
}

.hot-card {
  margin-right: 25px;
  width: 33.3%;
  /* 设置卡片的宽度 */
  height: 300px;
  /* 设置卡片的高度 */
  padding: 20px;
  border: 1px solid #f9f9f9;
  box-sizing: border-box;
  background-color: #f9f9f9;
}

.box {
  width: 100px;
  height: 50px;
  border: 2px solid red;
  margin-right: 20px;
  padding: 5px;
  color: red;
  opacity: 0.8;
  text-align: center;
  line-height: 40px;
  /* 文字垂直居中 */
}


.button1 {
  border: 2px solid #f26e6e;
  /* 设置浅红色边框 */
  background-color: transparent;
  padding: 10px 20px;
  margin-right: 10px;
  width: 60px;
  /* 设置按钮宽度 */
  height: 0px;
  /* 设置按钮高度 */
  color: black;
  border-radius: 5px;
  /* 添加弧度 */
}

.button2 {
  border: 2px solid #a3a0a0;
  background-color: transparent;
  padding: 10px 20px;
  margin-right: 10px;
  width: 20px;
  /* 设置按钮宽度 */
  height: 0px;
  /* 设置按钮高度 */

  border-radius: 5px;
  /* 添加弧度 */
}

.price {
  margin-right: 10px;
}

.discounted-price del {
  color: #999;
  /* 删除线的颜色 */
}

.buy-now-button {
  width: 80px;
  /* 修改按钮宽度 */
  padding: 5px 10px;
  /* 调整按钮内边距 */
  text-decoration: none;
  /* 移除链接默认下划线 */
  border: 1px solid;
  border-radius: 20px;
  /* 添加圆角 */
  margin-left: 20px;
  transition: background-color 0.3s;
  /* 添加过渡效果 */
  cursor: pointer;
  /* 将光标设置为可点击 */
}
</style>