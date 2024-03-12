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

      <!-- 更多手表系列推荐 -->
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
                    <p style="font-size: 1px;width: 200px;margin-left: -9px;margin-top: -8px;color: #f26e6e;">限时直降1200元
                    </p>
                  </div>
                  <div class="button2">
                    <p style="font-size: 1px;width: 200px;margin-left: -9px;margin-top: -8px;">赠积分</p>
                  </div>
                </div>
                <div style="display: flex;align-items: center;margin-top: 20px;">
                  <div class="price">
                    ¥6288
                  </div>
                  <div class="discounted-price">
                    <del style="font-size: 5px;">¥7488</del>
                  </div>
                  <button class="buy-now-button" @click="buyNow">立即购买</button>
                </div>

              </div>


            </div>


          </div>

        </div>

      </div>

      <!--新款上市-->
      <div style="text-align: center;">
        <p style="font-size: 24px; font-weight: bold;">新款上市</p>
        <div style="display: flex;">
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
        </div>
      </div>

      <!--爆款推荐-->
      <div style="text-align: center;">
        <p style="font-size: 24px; font-weight: bold;">爆款推荐</p>
      <!--爆款推荐第一排-->
        <div :class="{ 'dark': isDark }" style="display: flex; justify-content: space-between;margin-bottom: 50px;">
          <div :body-style="{ padding: '0px' }" shadow="always"  class="hot-card" style="width: 20%;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202309/gbom/6942103104978/428_428_A561860375C82F6E01E21DA040D64CE1mp.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">WATCH GT 4</p>
              <p style="font-size: 12px;opacity: 0.6;">科学运动减脂 | 专业运动指导</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降150元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">3期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥1438
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥1588</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always"  class="hot-card" style="width: 20%;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202309/gbom/6942103103650/428_428_16BB4592008F272F5CD34F46BA157EDFmp.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">ULTIMATE DESIGN</p>
              <p style="font-size: 12px;opacity: 0.6;">华为首款黄金智能腕表</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降1999元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">3期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥20000
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥21999</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always"  class="hot-card" style="width: 20%;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202305/gbom/6941487291175/428_428_7EFF0DD78A5BC23489E78045D9E14BE5mp.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">HUAWEI WATCH 4 Pro</p>
              <p style="font-size: 12px;opacity: 0.6;">高血糖风险评估研究</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降50元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">6期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥3349
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥3399</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always"  class="hot-card" style="width: 20%;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202402/gbom/6941487291571/428_428_5310A7AECD66DD038AE29D7E7CF60526mp.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">华为手环 8</p>
              <p style="font-size: 12px;opacity: 0.6;">8.99毫米轻薄设计</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降70元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">3期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥199
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥269</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always"  class="hot-card" style="width: 20%;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202402/gbom/6941487238125/428_428_57DE85530B72D47F96993578EE0131E8mp.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">HUAWEI WATCH D</p>
              <p style="font-size: 12px;opacity: 0.6;">体温检测 | 血氧监测 | 血压测量</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降700元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">6期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥2288
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥2988</del>
                </div>
              </div>
            </div>
          </div>
        </div>
      <!--爆款推荐第二排-->
        <div :class="{ 'dark': isDark }" style="display: flex; justify-content: space-between;margin-bottom: 50px;">
          <div :body-style="{ padding: '0px' }" shadow="always"  class="hot-card" style="width: 20%;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202402/gbom/6941487257164/428_428_275C3803B526DBD8FFBD289C1A13A2F1mp.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">WATCH FIT 2</p>
              <p style="font-size: 12px;opacity: 0.6;">血氧自动检测 | 高清焕彩全面屏</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降300元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">3期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥599
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥899</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always"  class="hot-card" style="width: 20%;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202210/gbom/6941487253791/428_428_B3C8288AD304FCC49E53A03C12A31329mp_tds.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">GT 3 Pro</p>
              <p style="font-size: 12px;opacity: 0.6;">无线快充 | 心电分析</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降700元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">6期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥3988
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥4688</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always"  class="hot-card" style="width: 20%;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202303/gbom/6941487288496/428_428_34F8E36EA881B383D0AA09729C0A4633mp.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">WATCH Ultimate</p>
              <p style="font-size: 12px;opacity: 0.6;">双向北斗卫星消息</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降600元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">3期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥5999
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥6599</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always"  class="hot-card" style="width: 20%;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202305/gbom/6941487291236/428_428_A059155490D256984702B0C7369DFC29mp.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;"> WATCH 4 </p>
              <p style="font-size: 12px;opacity: 0.6;">ECG心电分析 | 100+运动模式</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降50元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">6期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥2649
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥2699</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always"  class="hot-card" style="width: 20%;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202301/gbom/6941487273652/428_428_3701FD369D4B7734C667065D63531BFDmp_tds.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">WATCH Buds</p>
              <p style="font-size: 12px;opacity: 0.6;">AI降噪通话 | 血氧自动检测</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降500元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">3期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥2488
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥2988</del>
                </div>
              </div>
            </div>
          </div>
        </div>
      <!--爆款推荐第三排-->
        <div :class="{ 'dark': isDark }" style="display: flex; justify-content: space-between;margin-bottom: 50px;">
          <div :body-style="{ padding: '0px' }" shadow="always"  class="hot-card" style="width: 20%;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202310/gbom/6942103112195/428_428_767F17850C1E0D9B47131E4F449B6041mp.jpg"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">GT 4 & S-TAG 礼盒</p>
              <p style="font-size: 12px;opacity: 0.6;">HUAWEI WATCH GT 4 & S-TAG </p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降150元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">3期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥1638
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥1788</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always"  class="hot-card" style="width: 20%;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202401/gbom/6941487276912/428_428_42CEF4A20DEE33A90533D5089DA20745mp.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">MateBook 14s</p>
              <p style="font-size: 12px;opacity: 0.6;">闪变换壳 | 血氧自动检测</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降300元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">3期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥1188
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥1488</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always"  class="hot-card" style="width: 20%;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202402/gbom/6941487240241/428_428_69822802AA8F3C8D09BE41E5CBD9F6F3mp.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">WATCH GT Runner</p>
              <p style="font-size: 12px;opacity: 0.6;">马拉松跑道级精准定位 | 轻量化设计</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降300元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">3期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥6499
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥7099</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always"  class="hot-card" style="width: 20%;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202307/gbom/6942103106606/428_428_848391113A410132F1060FE8B1F026D0mp.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">MateBook 14s</p>
              <p style="font-size: 12px;opacity: 0.6;">32GB大内存 | 13代酷睿处理器</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降600元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">3期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥6499
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥7099</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always"  class="hot-card" style="width: 20%;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202307/gbom/6942103106606/428_428_848391113A410132F1060FE8B1F026D0mp.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">MateBook 14s</p>
              <p style="font-size: 12px;opacity: 0.6;">32GB大内存 | 13代酷睿处理器</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降600元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">3期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥6499
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥7099</del>
                </div>
              </div>
            </div>
          </div>
        </div>
      <!--爆款推荐第四排-->
        <div :class="{ 'dark': isDark }" style="display: flex; justify-content: space-between;margin-bottom: 50px;">
          <div :body-style="{ padding: '0px' }" shadow="always"  class="hot-card" style="width: 20%;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202307/gbom/6942103106606/428_428_848391113A410132F1060FE8B1F026D0mp.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">MateBook 14s</p>
              <p style="font-size: 12px;opacity: 0.6;">32GB大内存 | 13代酷睿处理器</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降600元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">3期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥6499
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥7099</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always"  class="hot-card" style="width: 20%;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202307/gbom/6942103106606/428_428_848391113A410132F1060FE8B1F026D0mp.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">MateBook 14s</p>
              <p style="font-size: 12px;opacity: 0.6;">32GB大内存 | 13代酷睿处理器</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降600元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">3期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥6499
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥7099</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always"  class="hot-card" style="width: 20%;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202307/gbom/6942103106606/428_428_848391113A410132F1060FE8B1F026D0mp.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">MateBook 14s</p>
              <p style="font-size: 12px;opacity: 0.6;">32GB大内存 | 13代酷睿处理器</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降600元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">3期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥6499
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥7099</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always"  class="hot-card" style="width: 20%;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202307/gbom/6942103106606/428_428_848391113A410132F1060FE8B1F026D0mp.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">MateBook 14s</p>
              <p style="font-size: 12px;opacity: 0.6;">32GB大内存 | 13代酷睿处理器</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降600元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">3期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥6499
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥7099</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always"  class="hot-card" style="width: 20%;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202307/gbom/6942103106606/428_428_848391113A410132F1060FE8B1F026D0mp.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">MateBook 14s</p>
              <p style="font-size: 12px;opacity: 0.6;">32GB大内存 | 13代酷睿处理器</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降600元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">3期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥6499
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥7099</del>
                </div>
              </div>
            </div>
          </div>
        </div>

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
  height: 330px;
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

.hot-card:hover {
  box-shadow: 0 0 10px 3px #ccc;
  /* 悬停时添加浅灰色阴影 */
}
.dark .hot-card{
  background-color: rgb(52, 50, 50);
  border: 1px solid rgb(52, 50, 50);
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

.button3 {
  border: 2px solid #a3a0a0;
  background-color: transparent;
  padding: 10px 20px;
  margin-left: 10px;
  width: 40px;
  /* 设置按钮宽度 */
  height: 0px;
  /* 设置按钮高度 */
  border-radius: 5px;
  /* 添加弧度 */
}

.button4 {
  border: 2px solid #f26e6e;
  /* 设置浅红色边框 */
  background-color: transparent;
  padding: 10px 20px;
  margin-left: -12px;
  width: 60px;
  /* 设置按钮宽度 */
  height: 0px;
  /* 设置按钮高度 */
  color: black;
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