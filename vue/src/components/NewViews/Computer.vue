
<template>
  <!--轮播图-->
  <div class="carousel" @mouseover="stopTimer" @mouseleave="startTimer">
    <div class="carousel-container" :style="{ transform: 'translateX(' + translateValue + 'px)' }">
      <div v-for="(item, index) in carouselItems" :key="index" class="carousel-item">
        <a :href="item.link" target="_blank">
          <img :src="item.imageSrc" :alt="item.title">
        </a>
      </div>
    </div>
    <div class="carousel-navigation">
      <button @click="moveLeft">&lt;</button>
      <div class="carousel-dots">
        <span v-for="(item, index) in carouselItems" :key="index" :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"></span>
      </div>
      <button @click="moveRight">&gt;</button>
    </div>
  </div>

  <!--新品发布-->
  <div class="new-container">
    <div class="new-content">
      <div class="circle">
        <p>NEW</p>
      </div>
      <div class="text">
        <p>新品发布</p>
      </div>
    </div>
  </div>

  <!--新品发布下的三张图片-->
  <div class="image-container">
    <div class="horizontal-images">
      <img src="https://p2.lefile.cn/fes/cms/2024/01/22/syoyls24jgu21mt6az2zqc03ie7xbn487696.jpg"
        style="transition: transform 0.3s ease;" @mouseover="zoomIn" @mouseleave="zoomOut">
      <div class="vertical-images">
        <img src="https://p4.lefile.cn/fes/cms/2024/01/22/n8va2woj75791edaqzlvs574gsnu84873223.jpg"
          style="transition: transform 0.3s ease;" @mouseover="zoomIn" @mouseleave="zoomOut">
        <img src="https://p2.lefile.cn/fes/cms/2024/01/22/mxdywrcke9tqxq7gcv4zqqg0w9sw0z400659.jpg"
          style="margin-top: 20px;transition: transform 0.3s ease;" @mouseover="zoomIn" @mouseleave="zoomOut">
      </div>
    </div>
  </div>

  <!--笔记本-->
  <div class="new-container">
    <div class="new-content">
      <svg t="1710295719293" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4120" id="mx_n_1710295719293" width="50" height="50"><path d="M128 208v552c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8V208c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32z m64 460V248c0-4.4 3.6-8 8-8h624c4.4 0 8 3.6 8 8v420c0 2.2-1.8 4-4 4H196c-2.2 0-4-1.8-4-4zM1024 808v24c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32v-24c0-4.4 3.6-8 8-8h432c4.4 0 8 3.6 8 8s3.6 8 8 8h112c4.4 0 8-3.6 8-8s3.6-8 8-8h432c4.4 0 8 3.6 8 8z" p-id="4121" fill="#83beff"></path></svg>
      <div class="text">
        <p>ThinkPad</p>
      </div>
    </div>
  </div>
  <!--笔记本下面四个卡片-->
  <div class="card-container">
    <div class="card">
      <img src="https://p1.lefile.cn/product/adminweb/2023/05/18/rOKlq9BgsIdrRoYBclUcXb4v0-5459.jpg"
        style="width: 200px;">
      <p style="font-size: 15px;display: flex;justify-content: center;">ThinkPad E14 2023 英特尔酷睿i5 经典商务本 0ECD</p>
      <div style="display: flex;">
        <div class="button1-style">
          <p style="font-size: 1px;width: 100px;margin-left: -17px;margin-top: -8px;color: #f26e6e;">外观定制
          </p>
        </div>
        <div class="button2-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">6期</p>
        </div>
        <div class="button3-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">以旧换新</p>
        </div>
      </div>

      <div style="color: #f26e6e;margin-top: 10px;margin-left: -5px;">
        ¥5299
      </div>
    </div>
    <div class="card">
      <img src="https://p2.lefile.cn/product/adminweb/2023/12/13/kuGhCsSVNQGy9cze2P2YHQ9NL-9213.jpg"
        style="width: 200px;">
      <p style="font-size: 15px;display: flex;justify-content: center;">ThinkPad X1 Carbon AI 2024 英特尔酷睿Ultra7 互联本00CD</p>
      <div style="display: flex;">
        <div class="button1-style">
          <p style="font-size: 1px;width: 100px;margin-left: -17px;margin-top: -8px;color: #f26e6e;">外观定制
          </p>
        </div>
        <div class="button2-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">12期</p>
        </div>
        <div class="button3-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">以旧换新</p>
        </div>
      </div>

      <div style="color: #f26e6e;margin-top: 10px;margin-left: -5px;">
        ¥14999
      </div>
    </div>
    <div class="card">
      <img src="https://p3.lefile.cn/product/adminweb/2023/05/12/UcohZUfsLuv7IMRWEurhVE26G-6492.jpg"
        style="width: 200px;">
      <p style="font-size: 15px;display: flex;justify-content: center;">ThinkPad X13 2023 英特尔Evo平台认证酷睿i5 商旅本</p>
      <div style="display: flex;">
        <div class="button1-style">
          <p style="font-size: 1px;width: 100px;margin-left: -17px;margin-top: -8px;color: #f26e6e;">外观定制
          </p>
        </div>
        <div class="button2-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">12期</p>
        </div>
        <div class="button3-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">以旧换新</p>
        </div>
      </div>

      <div style="color: #f26e6e;margin-top: 10px;margin-left: -5px;">
        ¥7736
      </div>
    </div>
    <div class="card">
      <img src="https://p2.lefile.cn/product/adminweb/2023/05/12/c2Uw409BaoL6g2CRchgQPSrlG-1961.jpg"
        style="width: 200px;">
      <p style="font-size: 15px;display: flex;justify-content: center;">ThinkPad T14p 2023 英特尔酷睿i7 高性能工程师本02CD</p>
      <div style="display: flex;">
        <div class="button1-style">
          <p style="font-size: 1px;width: 100px;margin-left: -17px;margin-top: -8px;color: #f26e6e;">外观定制
          </p>
        </div>
        <div class="button2-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">12期</p>
        </div>
        <div class="button3-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">以旧换新</p>
        </div>
      </div>

      <div style="color: #f26e6e;margin-top: 10px;margin-left: -5px;">
        ¥8299
      </div>
    </div>
  </div>
<!--平板电脑-->
  <div class="new-container">
    <div class="new-content">
      <svg t="1710295886650" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5652" width="50" height="50"><path d="M902.144 190.464q43.008 1.024 64.512 24.064t21.504 60.928l0 41.984q0 36.864-0.512 88.576t-0.512 111.616-0.512 112.128-0.512 90.112l0 45.056q0 32.768-18.944 54.784t-46.592 22.016l-784.384 0q-32.768-1.024-57.344-24.064t-24.576-59.904l0-481.28q0-16.384 5.632-31.744t16.384-27.648 26.112-19.968 35.84-7.68l44.032 0 88.064 0 116.736 0 133.12 0 131.072 0q65.536 0 118.272 0.512t88.576 0.512l44.032 0zM857.088 286.72l-694.272 0 1.024 452.608 692.224-1.024zM924.672 477.184q-15.36 0-26.624 10.752t-11.264 26.112 11.264 26.112 26.624 10.752 26.624-10.752 11.264-26.112-11.264-26.112-26.624-10.752z" p-id="5653" fill="#83beff"></path></svg>
      <div class="text">
        <p>平板电脑</p>
      </div>
    </div>
  </div>
  <!--平板电脑下面四个卡片-->
  <div class="card-container">
    <div class="card">
      <img src="https://p3.lefile.cn/product/adminweb/2023/07/21/IwktB9H1j1rE8Jy4jqDYTAjwT-9830.jpg"
        style="width: 200px;">
      <p style="font-size: 15px;display: flex;justify-content: center;">联想拯救者Y700 2023 8.8英寸游戏平板电脑 钛晶灰</p>
      <div style="display: flex;">
        <div class="button1-style">
          <p style="font-size: 1px;width: 100px;margin-left: -17px;margin-top: -8px;color: #f26e6e;">外观定制
          </p>
        </div>
        <div class="button2-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">12期</p>
        </div>
        <div class="button3-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">以旧换新</p>
        </div>
      </div>

      <div style="color: #f26e6e;margin-top: 10px;margin-left: -5px;">
        ¥2399
      </div>
    </div>
    <div class="card">
      <img src="https://p4.lefile.cn/product/adminweb/2022/10/23/vqFVbgBByHMmcf0nzLaa329dE-7239.jpg"
        style="width: 200px;">
      <p style="font-size: 15px;display: flex;justify-content: center;">联想平板小新Pad Plus 2023 11.5英寸  影音娱乐办公学习平板电脑</p>
      <div style="display: flex;">
        <div class="button1-style">
          <p style="font-size: 1px;width: 100px;margin-left: -17px;margin-top: -8px;color: #f26e6e;">外观定制
          </p>
        </div>
        <div class="button2-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">12期</p>
        </div>
        <div class="button3-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">以旧换新</p>
        </div>
      </div>

      <div style="color: #f26e6e;margin-top: 10px;margin-left: -5px;">
        ¥1699
      </div>
    </div>
    <div class="card">
      <img src="https://p4.lefile.cn/product/adminweb/2023/10/22/5ZHB5PVs31Z0KdyX6h9TOOesn-4858.jpg"
        style="width: 200px;">
      <p style="font-size: 15px;display: flex;justify-content: center;">联想平板小新Pad 2024 11英寸 学习办公娱乐影音平板电脑</p>
      <div style="display: flex;">
        <div class="button1-style">
          <p style="font-size: 1px;width: 100px;margin-left: -17px;margin-top: -8px;color: #f26e6e;">外观定制
          </p>
        </div>
        <div class="button2-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">12期</p>
        </div>
        <div class="button3-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">以旧换新</p>
        </div>
      </div>

      <div style="color: #f26e6e;margin-top: 10px;margin-left: -5px;">
        ¥4399
      </div>
    </div>
    <div class="card">
      <img src="https://p4.lefile.cn/product/adminweb/2022/08/17/BOYjHN9qfL8hsbskjq5M8CzXm-8733.jpg"
        style="width: 200px;">
      <p style="font-size: 15px;display: flex;justify-content: center;">联想平板小新Pad Pro 2022 11.2英寸 平板电脑</p>
      <div style="display: flex;">
        <div class="button1-style">
          <p style="font-size: 1px;width: 100px;margin-left: -17px;margin-top: -8px;color: #f26e6e;">外观定制
          </p>
        </div>
        <div class="button2-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">12期</p>
        </div>
        <div class="button3-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">以旧换新</p>
        </div>
      </div>

      <div style="color: #f26e6e;margin-top: 10px;margin-left: -5px;">
        ¥1999
      </div>
    </div>
  </div>
  <!--台式-->
  <div class="new-container">
    <div class="new-content">
      <svg t="1710295956602" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6787" width="50" height="50"><path d="M897.62011719 712.33072917V249.58658854H126.37988281v462.74414063h281.18133545v25.70800781H304.72918701v25.70800781h412.93487549v-25.70800781H614.83203126v-25.70800781h282.78808593zM152.08789062 275.29459636h719.82421875v411.328125H152.08789062V275.29459636z" p-id="6788" fill="#83beff"></path></svg>
      <div class="text">
        <p>台式机</p>
      </div>
    </div>
  <!--轮播图-->
  <div class="carousel" @mouseover="stopTimer" @mouseleave="startTimer">
    <div class="carousel-container" :style="{ transform: 'translateX(' + translateValue + 'px)' }">
      <div v-for="(item, index) in carouselItems" :key="index" class="carousel-item">
        <a :href="item.link" target="_blank">
          <img :src="item.imageSrc" :alt="item.title">
        </a>
      </div>
    </div>
    <div class="carousel-navigation">
      <button @click="moveLeft">&lt;</button>
      <div class="carousel-dots">
        <span v-for="(item, index) in carouselItems" :key="index" :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"></span>
      </div>
      <button @click="moveRight">&gt;</button>
    </div>
  </div>

  <!--新品发布-->
  <div class="new-container">
    <div class="new-content">
      <div class="circle">
        <p>NEW</p>
      </div>
      <div class="text">
        <p>新品发布</p>
      </div>
    </div>
  </div>

  <!--新品发布下的三张图片-->
  <div class="image-container">
    <div class="horizontal-images">
      <img src="https://p2.lefile.cn/fes/cms/2024/01/22/syoyls24jgu21mt6az2zqc03ie7xbn487696.jpg"
        style="transition: transform 0.3s ease;" @mouseover="zoomIn" @mouseleave="zoomOut">
      <div class="vertical-images">
        <img src="https://p4.lefile.cn/fes/cms/2024/01/22/n8va2woj75791edaqzlvs574gsnu84873223.jpg"
          style="transition: transform 0.3s ease;" @mouseover="zoomIn" @mouseleave="zoomOut">
        <img src="https://p2.lefile.cn/fes/cms/2024/01/22/mxdywrcke9tqxq7gcv4zqqg0w9sw0z400659.jpg"
          style="margin-top: 20px;transition: transform 0.3s ease;" @mouseover="zoomIn" @mouseleave="zoomOut">
      </div>
    </div>
  </div>

  <!--笔记本-->
  <div class="new-container">
    <div class="new-content">
      <img src="../../../picture/笔记本.png" style="width: 40px;height: 40px;">
      <div class="text">
        <p>笔记本</p>
      </div>
    </div>
  </div>
  <!--笔记本下面四个卡片-->
  <div class="card-container">
    <div class="card">
      <img src="https://p4.lefile.cn/product/adminweb/2023/10/22/5ZHB5PVs31Z0KdyX6h9TOOesn-4858.jpg"
        style="width: 200px;">
      <p style="font-size: 15px;display: flex;justify-content: center;">联想平板小新Pad 2024 11英寸 学习办公娱乐影音平板电脑</p>
      <div style="display: flex;">
        <div class="button1-style">
          <p style="font-size: 1px;width: 100px;margin-left: -17px;margin-top: -8px;color: #f26e6e;">外观定制
          </p>
        </div>
        <div class="button2-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">12期</p>
        </div>
        <div class="button3-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">以旧换新</p>
        </div>
      </div>

      <div style="color: #f26e6e;margin-top: 10px;margin-left: -5px;">
        ¥4399
      </div>
    </div>
    <div class="card">
      <img src="https://p4.lefile.cn/product/adminweb/2023/10/22/5ZHB5PVs31Z0KdyX6h9TOOesn-4858.jpg"
        style="width: 200px;">
      <p style="font-size: 15px;display: flex;justify-content: center;">联想平板小新Pad 2024 11英寸 学习办公娱乐影音平板电脑</p>
      <div style="display: flex;">
        <div class="button1-style">
          <p style="font-size: 1px;width: 100px;margin-left: -17px;margin-top: -8px;color: #f26e6e;">外观定制
          </p>
        </div>
        <div class="button2-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">12期</p>
        </div>
        <div class="button3-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">以旧换新</p>
        </div>
      </div>

      <div style="color: #f26e6e;margin-top: 10px;margin-left: -5px;">
        ¥4399
      </div>
    </div>
    <div class="card">
      <img src="https://p4.lefile.cn/product/adminweb/2023/10/22/5ZHB5PVs31Z0KdyX6h9TOOesn-4858.jpg"
        style="width: 200px;">
      <p style="font-size: 15px;display: flex;justify-content: center;">联想平板小新Pad 2024 11英寸 学习办公娱乐影音平板电脑</p>
      <div style="display: flex;">
        <div class="button1-style">
          <p style="font-size: 1px;width: 100px;margin-left: -17px;margin-top: -8px;color: #f26e6e;">外观定制
          </p>
        </div>
        <div class="button2-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">12期</p>
        </div>
        <div class="button3-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">以旧换新</p>
        </div>
      </div>

      <div style="color: #f26e6e;margin-top: 10px;margin-left: -5px;">
        ¥4399
      </div>
    </div>
    <div class="card">
      <img src="https://p4.lefile.cn/product/adminweb/2023/10/22/5ZHB5PVs31Z0KdyX6h9TOOesn-4858.jpg"
        style="width: 200px;">
      <p style="font-size: 15px;display: flex;justify-content: center;">联想平板小新Pad 2024 11英寸 学习办公娱乐影音平板电脑</p>
      <div style="display: flex;">
        <div class="button1-style">
          <p style="font-size: 1px;width: 100px;margin-left: -17px;margin-top: -8px;color: #f26e6e;">外观定制
          </p>
        </div>
        <div class="button2-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">12期</p>
        </div>
        <div class="button3-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">以旧换新</p>
        </div>
      </div>

      <div style="color: #f26e6e;margin-top: 10px;margin-left: -5px;">
        ¥4399
      </div>
    </div>
  </div>
<!--平板电脑-->
  <div class="new-container">
    <div class="new-content">
      <img src="../../../picture/笔记本.png" style="width: 40px;height: 40px;">
      <div class="text">
        <p>笔记本</p>
      </div>
    </div>
  </div>
  <!--平板电脑下面四个卡片-->
  <div class="card-container">
    <div class="card">
      <img src="https://p4.lefile.cn/product/adminweb/2023/10/22/5ZHB5PVs31Z0KdyX6h9TOOesn-4858.jpg"
        style="width: 200px;">
      <p style="font-size: 15px;display: flex;justify-content: center;">联想平板小新Pad 2024 11英寸 学习办公娱乐影音平板电脑</p>
      <div style="display: flex;">
        <div class="button1-style">
          <p style="font-size: 1px;width: 100px;margin-left: -17px;margin-top: -8px;color: #f26e6e;">外观定制
          </p>
        </div>
        <div class="button2-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">12期</p>
        </div>
        <div class="button3-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">以旧换新</p>
        </div>
      </div>

      <div style="color: #f26e6e;margin-top: 10px;margin-left: -5px;">
        ¥4399
      </div>
    </div>
    <div class="card">
      <img src="https://p4.lefile.cn/product/adminweb/2023/10/22/5ZHB5PVs31Z0KdyX6h9TOOesn-4858.jpg"
        style="width: 200px;">
      <p style="font-size: 15px;display: flex;justify-content: center;">联想平板小新Pad 2024 11英寸 学习办公娱乐影音平板电脑</p>
      <div style="display: flex;">
        <div class="button1-style">
          <p style="font-size: 1px;width: 100px;margin-left: -17px;margin-top: -8px;color: #f26e6e;">外观定制
          </p>
        </div>
        <div class="button2-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">12期</p>
        </div>
        <div class="button3-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">以旧换新</p>
        </div>
      </div>

      <div style="color: #f26e6e;margin-top: 10px;margin-left: -5px;">
        ¥4399
      </div>
    </div>
    <div class="card">
      <img src="https://p4.lefile.cn/product/adminweb/2023/10/22/5ZHB5PVs31Z0KdyX6h9TOOesn-4858.jpg"
        style="width: 200px;">
      <p style="font-size: 15px;display: flex;justify-content: center;">联想平板小新Pad 2024 11英寸 学习办公娱乐影音平板电脑</p>
      <div style="display: flex;">
        <div class="button1-style">
          <p style="font-size: 1px;width: 100px;margin-left: -17px;margin-top: -8px;color: #f26e6e;">外观定制
          </p>
        </div>
        <div class="button2-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">12期</p>
        </div>
        <div class="button3-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">以旧换新</p>
        </div>
      </div>

      <div style="color: #f26e6e;margin-top: 10px;margin-left: -5px;">
        ¥4399
      </div>
    </div>
    <div class="card">
      <img src="https://p4.lefile.cn/product/adminweb/2023/10/22/5ZHB5PVs31Z0KdyX6h9TOOesn-4858.jpg"
        style="width: 200px;">
      <p style="font-size: 15px;display: flex;justify-content: center;">联想平板小新Pad 2024 11英寸 学习办公娱乐影音平板电脑</p>
      <div style="display: flex;">
        <div class="button1-style">
          <p style="font-size: 1px;width: 100px;margin-left: -17px;margin-top: -8px;color: #f26e6e;">外观定制
          </p>
        </div>
        <div class="button2-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">12期</p>
        </div>
        <div class="button3-style">
          <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">以旧换新</p>
        </div>
      </div>

      <div style="color: #f26e6e;margin-top: 10px;margin-left: -5px;">
        ¥4399
      </div>
    </div>
  </div>
  <!--台式-->
  <div class="new-container">
    <div class="new-content">
      <img src="../../../picture/笔记本.png" style="width: 40px;height: 40px;">
      <div class="text">
        <p>笔记本</p>
      </div>
    </div>
  </div>
  </el-row>

  <el-row :gutter="5">
  <!-- 第二行 -->
  <el-col style="height: 10px;">
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
                <el-button text class="button">加入购物车</el-button>
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
              <el-button text class="button">加入购物车</el-button>
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
              <el-button text class="button">加入购物车</el-button>
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
              <el-button text class="button">加入购物车</el-button> 
              <el-button text class="button">购买</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </div>
    </el-row>

  </template>
  
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
    padding: 0px  0px;
    min-height: auto;
  }
  
  .computer {
    width: 100%;
    display: block;
  }

  .custom-text {
        color: #ff0000;
        font-weight: bold;
        font-size: 16px;
  }

  </style>
  




