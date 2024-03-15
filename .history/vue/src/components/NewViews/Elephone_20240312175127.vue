<template>
  <div>
    <!-- 走马灯 -->
    <div class="app-container">
      <el-carousel indicator-position="outside" height="400px">
        <el-carousel-item>
          <div style="width: 100%; height: 400px;"><img
              src="https://res.vmallres.com/uomcdn/CN/cms/2023-12/c785fd4ff46b4ca3b256a319287ac73e.jpg"
              style="width: 100%; height: 100%;"></div>
        </el-carousel-item>
        <el-carousel-item>
          <div style="width: 100%; height: 400px"><img
              src="https://res.vmallres.com/uomcdn/CN/cms/2023-12/84df6834cc114b96a4fe4f1e31046080.png"
              style="width: 100%; height: 100%;"></div>
        </el-carousel-item>
        <el-carousel-item>
          <div style="width: 100%; height: 400px;"><img
              src="https://res.vmallres.com/uomcdn/CN/cms/2023-12/9d6c74ac282a4dd489fe2074044da384.jpg"
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

      <!-- 更多手机系列推荐 -->
      <div style="text-align: center;">
        <p style="font-size: 24px; font-weight: bold;">更多手机系列推荐</p>
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
                  <button class="buy-now-button" @click="buyNow(6)">立即购买</button>
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
                    <p style="font-size: 1px;width: 200px;margin-left: -13px;margin-top: -8px;color: #f26e6e;">限时直降1200元
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
                  src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202311/gbom/6942103111341/428_428_551C8E5330103CEEB5F40BF9FBEB17FAmp.png"
                  style="width: 150px;">
              </div>

              <div style="text-align: left;margin-left: 20px;">
                <p style="font-size: 15px; width: 180px;">华为畅享 70</p>
                <p style="font-size: 12px;;">畅享X键一键直达</p>
                <div style="display: flex;">
                  <div class="button1">
                    <p style="font-size: 1px;width: 200px;margin-left: -9px;margin-top: -8px;color: #f26e6e;">限时直降50元
                    </p>
                  </div>
                  <div class="button2">
                    <p style="font-size: 1px;width: 200px;margin-left: -9px;margin-top: -8px;">赠积分</p>
                  </div>
                </div>
                <div style="display: flex;align-items: center;margin-top: 20px;">
                  <div class="price">
                    ¥1349
                  </div>
                  <div class="discounted-price">
                    <del style="font-size: 5px;">¥1399</del>
                  </div>
                  <button class="buy-now-button" @click="buyNow">立即购买</button>
                </div>
              </div>


            </div>


          </div>
          <div :class="{ 'dark': isDark }" class="recommend-card">

            <div :body-style="{ padding: '0px' }" shadow="always" style="display: flex;align-items: center;">
              <div>
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1698307639.33126162.png"
                  style="width: 150px;">
              </div>

              <div style="text-align: left;margin-left: 20px;">
                <p style="font-size: 15px; width: 180px;">小米14 </p>
                <p style="font-size: 12px;;">徕卡光学镜头 光影猎人900</p>
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
                    ¥4699
                  </div>
                  <div class="discounted-price">
                    <del style="font-size: 5px;">¥4599</del>
                  </div>
                  <button class="buy-now-button" @click="buyNow">立即购买</button>
                </div>

              </div>


            </div>


          </div>
          <div :class="{ 'dark': isDark }" class="recommend-card">

            <div :body-style="{ padding: '0px' }" shadow="always" style="display: flex;align-items: center;">
              <div>
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1666797629.2232934.png"
                  style="width: 150px;">
              </div>

              <div style="text-align: left;margin-left: 20px;">
                <p style="font-size: 15px; width: 180px;">小米（MI）Redmi Note12</p>
                <p style="font-size: 12px;;">120Hz OLED屏幕</p>
                <div style="display: flex;">
                  <div class="button1">
                    <p style="font-size: 1px;width: 200px;margin-left: -9px;margin-top: -8px;color: #f26e6e;">限时直降50元
                    </p>
                  </div>
                  <div class="button2">
                    <p style="font-size: 1px;width: 200px;margin-left: -9px;margin-top: -8px;">赠积分</p>
                  </div>
                </div>
                <div style="display: flex;align-items: center;margin-top: 20px;">
                  <div class="price">
                    ¥949
                  </div>
                  <div class="discounted-price">
                    <del style="font-size: 5px;">¥999</del>
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
          <div :body-style="{ padding: '0px' }" shadow="always" class="hot-card" style="width: 20%;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202312/gbom/6942103112126/428_428_078ECD163635A99A081F34ED8DF4B7E7mp.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">HUAWEI nova 12 Pro</p>
              <p style="font-size: 12px;opacity: 0.6;">前置6000万人像追焦双摄</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降200元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">3期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥4399
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥4599</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always" class="hot-card" style="width: 20%;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202401/gbom/6942103111044/428_428_911559932C785AB0F474B8728D50F02Cmp.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">华为畅享 70 Pro </p>
              <p style="font-size: 12px;opacity: 0.6;">1亿像素超清影像</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降50元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">3期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥1449
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥1499</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always" class="hot-card" style="width: 20%;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202312/gbom/6942103114014/428_428_DACD4B8DD7D6127ED11DD9CC871597A7mp.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">HUAWEI nova 12</p>
              <p style="font-size: 12px;opacity: 0.6;">100W智能快充Turbo</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降100元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">3期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥3399
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥3499</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always" class="hot-card" style="width: 20%;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202312/gbom/6942103114670/428_428_C2617EA437BD279D14CA8177889EB971mp.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">HUAWEI nova 12 活力版</p>
              <p style="font-size: 12px;opacity: 0.6;">前置6000万超广角拍照</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降100元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">3期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥2499
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥2599</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always" class="hot-card" style="width: 20%;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202312/gbom/6942103115936/428_428_07AD2F649CFF4C53E60306E78D83D042mp.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">HUAWEI nova 12 Ultra</p>
              <p style="font-size: 12px;opacity: 0.6;">鸿蒙智慧通信，物理可变光圈</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降200元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">3期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥4699
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥4899</del>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--爆款推荐第二排-->
        <div :class="{ 'dark': isDark }" style="display: flex; justify-content: space-between;margin-bottom: 50px;">
          <div :body-style="{ padding: '0px' }" shadow="always" class="hot-card" style="width: 20%;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202309/gbom/6942103107252/428_428_4204E42834E5E67AB0F1214F21D1570Emp.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">HUAWEI Mate X5 </p>
              <p style="font-size: 12px;opacity: 0.6;">超轻薄四曲折叠</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降300元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">12期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥12699
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥12999</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always" class="hot-card" style="width: 20%;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202310/gbom/6942103111440/428_428_788463DCA4470012606425D655B59B5Cmp.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">HUAWEI nova 11 SE </p>
              <p style="font-size: 12px;opacity: 0.6;">3200万高清自拍</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降100元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">3期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥1899
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥1999</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always" class="hot-card" style="width: 20%;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202304/gbom/6941487294473/428_428_258DD144A6D4E1AE4C0D27DF6C6976BFmp.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">华为畅享 60X</p>
              <p style="font-size: 12px;opacity: 0.6;">7000mAh超长续航</p>
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
                  ¥1499
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥1799</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always" class="hot-card" style="width: 20%;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202311/gbom/6941487297665/group/428_428_0ABA704DE8B6A53D8AFBF98197B51E56.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">HUAWEI Mate Xs 2 典藏 </p>
              <p style="font-size: 12px;opacity: 0.6;">超轻薄|超平整|超可靠</p>
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
                  ¥9499
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥9999</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always" class="hot-card" style="width: 20%;">
            <img
              src="https://res2.vmallres.com/pimages/uomcdn/CN/pms/202401/gbom/6942103102127/428_428_BB0AB47F29E07E55A93FCDB471F962C9mp.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">HUAWEI Mate 50 Pro</p>
              <p style="font-size: 12px;opacity: 0.6;">曲屏旗舰，超光变XMAGE影像</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降100元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">3期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥4899
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥4999</del>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--爆款推荐第三排-->
        <div :class="{ 'dark': isDark }" style="display: flex; justify-content: space-between;margin-bottom: 50px;">
          <div :body-style="{ padding: '0px' }" shadow="always" class="hot-card" style="width: 20%;">
            <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1708570856.03118739.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">Xiaomi 14 Ultra</p>
              <p style="font-size: 12px;opacity: 0.6;">徕卡光学 Summilux 镜头</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降100元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">24期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥6899
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥6999</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always" class="hot-card" style="width: 20%;">
            <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1706151618.32587718.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">Redmi Note 13 Pro</p>
              <p style="font-size: 12px;opacity: 0.6;">新 2 亿像素 更快更清晰</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降100元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">6期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥1499
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥1599</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always" class="hot-card" style="width: 20%;">
            <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1679982565.11927388.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">Redmi Note 12 Turbo</p>
              <p style="font-size: 12px;opacity: 0.6;">第二代骁龙7+｜OLED 柔性直屏</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降450元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">3期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥1999
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥2499</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always" class="hot-card" style="width: 20%;">
            <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1695212141.05094436.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">Redmi Note 13 5G</p>
              <p style="font-size: 12px;opacity: 0.6;">超细四窄边 OLED 柔性直屏</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降200元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">3期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥1299
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥1499</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always" class="hot-card" style="width: 20%;">
            <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1691494291.5749486.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">Redmi 12 5G</p>
              <p style="font-size: 12px;opacity: 0.6;">5G 骁龙芯，大屏大电量</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降50元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">3期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥949
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥999</del>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--爆款推荐第四排-->
        <div :class="{ 'dark': isDark }" style="display: flex; justify-content: space-between;margin-bottom: 50px;">
          <div :body-style="{ padding: '0px' }" shadow="always" class="hot-card" style="width: 20%;">
            <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1672037284.35878773.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">Redmi K60</p>
              <p style="font-size: 12px;opacity: 0.6;">狠快狠强，狠旗舰！</p>
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
                  ¥2099
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥2599</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always" class="hot-card" style="width: 20%;">
            <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1695211669.21787750.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">Redmi Note 13 Pro+</p>
              <p style="font-size: 12px;opacity: 0.6;">新 2 亿像素｜金刚曲屏</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降200元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">6期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥2199
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥1999</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always" class="hot-card" style="width: 20%;">
            <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1670745532.95578305.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">Xiaomi 13</p>
              <p style="font-size: 12px;opacity: 0.6;">第二代骁龙8｜徕卡专业光学镜头</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降100元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">24期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥3599
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥3699</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always" class="hot-card" style="width: 20%;">
            <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1698307414.09753172.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">Xiaomi 14 Pro</p>
              <p style="font-size: 12px;opacity: 0.6;">徕卡Summilux可变光圈镜头</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降100元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">24期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥4899
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥4999</del>
                </div>
              </div>
            </div>
          </div>
          <div :body-style="{ padding: '0px' }" shadow="always" class="hot-card" style="width: 20%;">
            <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1660117297.72185183.png"
              style="width: 150px;">
            <div style="text-align:center;">
              <p style="font-size: 15px; width: 180px;">Redmi K50 至尊版</p>
              <p style="font-size: 12px;opacity: 0.6;">骁龙8+「狂暴调校」</p>
              <div style="display: flex;">
                <div class="button4">
                  <p style="font-size: 1px;width: 100px;margin-left: -20px;margin-top: -8px;color: #f26e6e;">限时直降100元
                  </p>
                </div>
                <div class="button3">
                  <p style="font-size: 1px;width: 100px;margin-left: -30px;margin-top: -8px;">3期0分期利息</p>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-top: 20px;">
                <div class="price">
                  ¥2799
                </div>
                <div class="discounted-price">
                  <del style="font-size: 5px;">¥2899</del>
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
export default {
  methods: {
    buyNow(value) {
      const currentTimestamp = new Date().getTime(); //当前时间戳
      const newList = {
        id: value,
        time: currentTimestamp
      };
      console.log(newList)
      localStorage.setItem('params',(newList))
      this.r
    },
  },
};
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

.dark .hot-card {
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