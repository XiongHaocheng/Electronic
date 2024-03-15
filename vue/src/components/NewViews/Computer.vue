
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
  </div>
  <!--台式下面四个卡片-->
  <div class="card-container">
    <div class="card">
      <img src="https://p2.lefile.cn/product/adminweb/2024/02/19/jenkRBbQ2nsoj4UhYKhOMawL0-9793.jpg"
        style="width: 200px;">
      <p style="font-size: 15px;display: flex;justify-content: center;">小新27 一体机R7-7735HS 27英寸 一体台式机</p>
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
        ¥4199
      </div>
    </div>
    <div class="card">
      <img src="https://p3.lefile.cn/product/adminweb/2024/01/16/azOd7uxjd9Mrt3A0hpl8dSjpJ-6748.jpg"
        style="width: 200px;">
      <p style="font-size: 15px;display: flex;justify-content: center;">小新Pro 27 英特尔酷睿i5一体电脑27英寸</p>
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
        ¥5199
      </div>
    </div>
    <div class="card">
      <img src="https://p2.lefile.cn/product/adminweb/2023/10/21/m2DhzT35vLYEV1lyXfD2KmwCr-9482.jpg"
        style="width: 200px;">
      <p style="font-size: 15px;display: flex;justify-content: center;">拯救者 刃7000K 14代英特尔酷睿i7 分体台式机</p>
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
        ¥9799
      </div>
    </div>
    <div class="card">
      <img src="https://p2.lefile.cn/product/adminweb/2024/02/21/LQaup277mkxuf4GIJPqEcYTtG-4659.jpg"
        style="width: 200px;">
      <p style="font-size: 15px;display: flex;justify-content: center;">联想GeekPro 14代英特尔酷睿i5 分体式台式机</p>
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
        ¥6099
      </div>
    </div>
  </div>
  <!--显示器-->
  <div class="new-container">
    <div class="new-content">
      <svg t="1710295824325" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4537" width="50" height="50"><path d="M853.333333 682.666667h42.666667v85.333333H128v-85.333333h42.666667V256h682.666666v426.666667zM256 341.333333v298.666667h512V341.333333H256z" fill="#83beff" p-id="4538"></path></svg>
      <div class="text">
        <p>笔记本</p>
      </div>
    </div>
  </div>
  <!--显示器下面四个卡片-->
  <div class="card-container">
    <div class="card">
      <img src="https://p3.lefile.cn/product/adminweb/2024/02/21/M8CWVz2gVDem92ZtQIs8hFs2r-1881.jpg"
        style="width: 200px;">
      <p style="font-size: 15px;display: flex;justify-content: center;">联想(Lenovo)拯救者Y9000X 2024 16英寸电竞游戏本笔记本电脑</p>
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
        ¥13999
      </div>
    </div>
    <div class="card">
      <img src="https://p3.lefile.cn/product/adminweb/2024/02/21/ecmrmXGOasAVsvvZHsCwPAxDc-8015.jpg"
        style="width: 200px;">
      <p style="font-size: 15px;display: flex;justify-content: center;">联想(Lenovo)拯救者Y9000P2024至尊版16英寸电竞游戏本笔记本电脑</p>
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
        ¥23999
      </div>
    </div>
    <div class="card">
      <img src="https://p3.lefile.cn/product/adminweb/2024/02/21/jDjSCxAushyBpRHl0L5x3pYaS-6983.jpg"
        style="width: 200px;">
      <p style="font-size: 15px;display: flex;justify-content: center;">联想(Lenovo)拯救者Y9000K 2024 16英寸电竞游戏本笔记本电脑</p>
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
        ¥29999
      </div>
    </div>
    <div class="card">
      <img src="https://p4.lefile.cn/product/adminweb/2024/01/08/nxEfrUHrS2M4vqclsAwCaARDm-4932.jpg"
        style="width: 200px;">
      <p style="font-size: 15px;display: flex;justify-content: center;">联想拯救者Y7000P 2024 16英寸电竞游戏本笔记本电脑 月蚀灰</p>
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
        ¥9599
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      translateValue: 0,
      currentIndex: 0,
      carouselItems: [
        {
          title: 'Title 1',
          imageSrc: 'https://p2.lefile.cn/fes/cms/2024/01/09/1ta3wgp1mt3mtfvcx77mwiazj030a9415823.jpg',
        },
        {
          title: 'Title 2',
          imageSrc: '//p1.lefile.cn/fes/cms/2024/01/22/a9a7s7t4e0ds8xa3s7eqn7fqqqg0l1254815.jpg',
        },
        {
          title: 'Title 3',
          imageSrc: 'https://p4.lefile.cn/fes/cms/2024/01/08/o1rub18pw5i2si0trojdtxhsokvepm814633.jpg',
        },
        {
          title: 'Title 4',
          imageSrc: 'https://p3.lefile.cn/fes/cms/2024/01/22/qstrb4go34m9i3vb9ntt2qnmdd6kc6174518.jpg',
        },
        {
          title: 'Title 5',
          imageSrc: 'https://p4.lefile.cn/fes/cms/2023/11/20/b3elas7nb9u3repo4bnuanwmnxcjpl343804.jpg',
        },
        {
          title: 'Title 6',
          imageSrc: 'https://p2.lefile.cn/fes/cms/2023/12/13/gasxk62npob665crc0j79ibx82d09h942041.jpg',
        },
      ],
      timer: null
    };
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    zoomIn(event) {
      event.target.style.transform = 'scale(1.02)';
    },
    zoomOut(event) {
      event.target.style.transform = 'scale(1)';
    },
    moveLeft() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.translateValue += this.slideWidth();
      } else {
        this.currentIndex = this.carouselItems.length - 1;
        this.translateValue = -this.currentIndex * this.slideWidth();
      }
    },
    moveRight() {
      if (this.currentIndex < this.carouselItems.length - 1) {
        this.currentIndex++;
        this.translateValue -= this.slideWidth();
      } else {
        this.currentIndex = 0;
        this.translateValue = 0;
      }
    },
    slideWidth() {
      return document.querySelector('.carousel-item').offsetWidth;
    },
    goToSlide(index) {
      this.currentIndex = index;
      this.translateValue = -index * this.slideWidth();
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.moveRight();
      }, 3000);
    },
    stopTimer() {
      clearInterval(this.timer);
    }
  }
};
</script>

<style scoped>
.new-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
}

.new-content {
  display: flex;
  align-items: center;
}

.circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  border: 2px solid rgb(149, 149, 149);
  /* optional: add border */
  opacity: 0.8;
  /* Set opacity for text */
  box-sizing: border-box;
  /* optional: include border in width and height */
}

.circle p {
  font-size: 5px;
  color: rgb(149, 149, 149);
  opacity: 1.5;
  /* Set opacity for text */
}

.text {
  margin-left: 10px;
  /* Adjust spacing between circle and text */
}

.text p {
  color: rgb(94, 89, 89);
  font-size: 32px;
  font-weight: bold;
}

.carousel {
  height: 80vh;
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-container {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  flex: 0 0 auto;
}

.carousel-item img {
  max-width: 100%;
}

.carousel-navigation {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.carousel-navigation button {
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 1.2em;
}

.carousel-dots {
  margin-top: 600px;
  display: flex;
  align-items: center;
}

.carousel-dots span {
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}

.carousel-dots span.active {
  background-color: #555;
}

.image-container {
  margin-top: 20px;
  /* Adjust spacing between text and images */
  display: flex;
  justify-content: center;
  align-items: center;
}

.horizontal-images {
  display: flex;
}

.vertical-images {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
}

.card-container {
  display: flex;
  justify-content: space-between;
  /* This will evenly distribute the cards */
  padding: 0px;
  /* Adjust spacing as needed */
  margin: 0 200px;
}

.card {
  width: 350px;
  /* Adjust the width of each card */
  height: 380px;
  /* Adjust the height of each card */
  background-color: #ffffff;
  /* Background color of the card */
}

.button1-style {
  border: 2px solid #f26e6e;
  /* 设置浅红色边框 */
  background-color: transparent;
  padding: 10px 20px;
  margin-left: -12px;
  width: 15px;
  /* 设置按钮宽度 */
  height: 0px;
  /* 设置按钮高度 */
  color: black;
  border-radius: 5px;
  /* 添加弧度 */
}

.button2-style {
  border: 2px solid #a3a0a0;
  background-color: transparent;
  padding: 10px 20px;
  margin-left: 10px;
  width: 0px;
  /* 设置按钮宽度 */
  height: 0px;
  /* 设置按钮高度 */
  border-radius: 5px;
  /* 添加弧度 */
}

.button3-style {
  border: 2px solid #a3a0a0;
  background-color: transparent;
  padding: 10px 20px;
  margin-left: 10px;
  width: 20px;
  /* 设置按钮宽度 */
  height: 0px;
  /* 设置按钮高度 */
  border-radius: 5px;
  /* 添加弧度 */
}

</style>
