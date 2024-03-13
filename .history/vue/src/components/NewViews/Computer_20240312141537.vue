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
        <span v-for="(item, index) in carouselItems" :key="index" :class="{ active: index === currentIndex }" @click="goToSlide(index)"></span>
      </div>
      <button @click="moveRight">&gt;</button>
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
          imageSrc: '//p1.lefile.cn/fes/cms/2024/01/22/a9a7s7t4e0ds8xa3s7eqn7fqqqg0l1254815.jpg',
        },
        {
          title: 'Title 5',
          imageSrc: '//p1.lefile.cn/fes/cms/2024/01/22/a9a7s7t4e0ds8xa3s7eqn7fqqqg0l1254815.jpg',
        },
        {
          title: 'Title 6',
          imageSrc: '//p1.lefile.cn/fes/cms/2024/01/22/a9a7s7t4e0ds8xa3s7eqn7fqqqg0l1254815.jpg',
        },
      ],
      timer: null
    };
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    moveLeft() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.translateValue += this.slideWidth();
      }
    },
    moveRight() {
      if (this.currentIndex < this.carouselItems.length - 1) {
        this.currentIndex++;
        this.translateValue -= this.slideWidth();
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
.carousel {
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
</style>
