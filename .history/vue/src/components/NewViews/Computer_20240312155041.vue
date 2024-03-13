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
      <div class="text">
        <p style="font-size: 20px;display: flex;justify-content: center;">First Line of Text</p>
        <p style="font-size: 10px;display: flex;justify-content: center;">Second Line of Text</p>
      </div>

      <div style="display: flex;">
                <div class="button1-style">
                  <p style="font-size: 1px;width: 100px;margin-left: -17px;margin-top: -8px;color: #f26e6e;">外观定制
                  </p>
                </div>
                <div class="button2-style">
                  <p style="font-size: 1px;width: 100px;margin-left: -15px;margin-top: -8px;">12期</p>
                </div>
              </div>

      <div class="price">Price: $XX.XX</div>
    </div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
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
  /* Adjust according to your layout */
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
  border: 2px solid black;
  /* optional: add border */
  opacity: 0.8;
  /* Set opacity for text */
  box-sizing: border-box;
  /* optional: include border in width and height */
}

.circle p {
  font-size: 5px;
  color: black;
  opacity: 0.8;
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
.button1-style{
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
.button2-style{
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
</style>
