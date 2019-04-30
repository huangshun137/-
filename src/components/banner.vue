<template>
  <div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()">
    <div class="slideshow">
      <transition-group tag="ul" name="image">
        <li v-for="(img, index) in imgArray" v-show="index===mark" :key="img">
          <a href="/#/index">
            <img :src='img'>
          </a>
        </li>
      </transition-group>
    </div>
    <div class="bar">
      <span v-for="(item, index) in imgArray" :class="{ 'active':index===mark }"
      @click="change(index)" :key="index"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slider',
  data () {
    return {
      imgArray: [
        '../../static/images/banner1.png',
        '../../static/images/banner2.png',
        '../../static/images/banner3.png'
      ],
      timer: null, // 定时器
      mark: 0 // 比对图片索引的变量
    }
  },
  created () {
    this.play()
  },
  methods: {
    autoPlay () {
      this.mark++
      if (this.mark === 3) {
        this.mark = 0
      }
    },
    play () {
      this.timer = setInterval(this.autoPlay, 2500)
    },
    change (i) {
      this.mark = i
    },
    stop () {
      clearInterval(this.timer)
    },
    move () {
      this.timer = setInterval(this.autoPlay, 2500)
    }
  }
}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .slide {
    max-width: 1920px;
    height: 450px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }
  .slideshow {
    max-width: 1920px;
    height: 450px;
  }
  li {
    position: absolute;
  }
  img {
    width: 100%;
    height: 450px;
  }
  .bar {
    position: absolute;
    width: 100%;
    bottom: 10px;
    margin: 0 auto;
    z-index: 10;
    text-align: center;
  }
  .bar span {
    width: 60px;
    height: 5px;
    border: 1px solid;
    background: white;
    display: inline-block;
    margin-right: 50px;
  }
  .active {
    background: #83b91f !important;
  }
  .image-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
  .image-leave-active {
    transform: translateX(-100%);
    transition: all 1.5s ease;
  }
  .image-enter {
    transform: translateX(100%);
  }
  .image-leave {
    transform: translateX(0);
  }
</style>
