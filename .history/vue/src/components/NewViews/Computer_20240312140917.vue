<template>
  <div class="carousel">
    <div class="carousel-container" :style="{ transform: 'translateX(' + translateValue + 'px)' }">
      <div v-for="(item, index) in carouselItems" :key="index" class="carousel-item">
        <a :href="item.link" target="_blank">
          <img :src="item.imageSrc" :alt="item.title">
        </a>
        <div class="dot-selector">
          <span v-for="(dot, dotIndex) in dotSelectors" :key="dotIndex" :class="{ selected: dotIndex === currentIndex }" @click="goToSlide(dotIndex)"></span>
        </div>
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
          imageSrc: '//p2.lefile.cn/fes/cms/2024/01/22/8ju2pqm6wus3r35kfsjo6qqz6oss8k551307.jpg',
          link: 'https://activity.lenovo.com.cn/xiaofei/zjz/hdy.html'
        },
        {
          title: 'Title 2',
          imageSrc: '//p1.lefile.cn/fes/cms/2024/01/22/a9a7s7t4e0ds8xa3s7eqn7fqqqg0l1254815.jpg',
          link: 'https://activity.lenovo.com.cn/smb/thinkbook.html?pmf_group=in-push&pmf_medium=gwhuodongye&pmf_source=Z00027712T000'
        },
        // Add other items similarly
      ]
    };
  },
  computed: {
    dotSelectors() {
      return Array.from({ length: this.carouselItems.length }, (_, index) => index);
    }
  },
  methods: {
    goToSlide(index) {
      this.currentIndex = index;
      this.translateValue = -index * this.slideWidth();
    },
    slideWidth() {
      return document.querySelector('.carousel-item').offsetWidth;
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
  position: relative;
}

.carousel-item img {
  max-width: 100%;
}

.dot-selector {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.dot-selector span {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}

.dot-selector span.selected {
  background-color: #555;
}
</style>
