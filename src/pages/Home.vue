<template>
  <div class="home">
    <div class="swipe swiper-container">
      <mt-swipe :auto="4000">
        <mt-swipe-item
          v-for="img in carouselImgs"
          :key="img.id"><img :src="img.url" alt=""></mt-swipe-item>
      </mt-swipe>
      <!-- <div class="swiper-wrapper">
          <div 
            class="swiper-slide"
            v-for="img in carouselImgs"
            :key="img.id"><img :src="img.url" alt=""></div>
      </div>
      <div class="swiper-pagination"></div> -->
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'
export default {
  name: 'Home',
  data() {
    return {
      carouselImgs: []
    }
  },
  created() {
    this.$http.getSwiper().then(res => {
      // this.carouselImgs = res.data.filter(curr => (curr.id < 355))
      this.carouselImgs = res.filter(curr => (curr.id < 360))
      // this.$nextTick(this.initSwiper)
      // this.initSwiper()
    })
  },
  mounted() {
    // console.log(this)
    // this.initSwiper()
  },
  methods: {
    initSwiper() {
      new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        autoplay: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .swipe {
    width: 100%;
    padding-top: percentage( 183 / 375 );
    height: 0;
    background: #ccc;
    position: relative;
    .mint-swipe,.swiper-wrapper {
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  
</style>
