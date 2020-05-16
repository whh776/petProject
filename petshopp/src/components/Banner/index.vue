<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in list" :key="item">
        <img :src="item" alt />
      </div>
    </div>
  </div>
</template>
<script>
import swiper from "swiper";
export default {
  methods: {
    initBanner() {
       new swiper(".swiper-container", {
        loop: true // 循环模式选项
      });
    }
  },
  data() {
    return {
      list: []
    };
  },
  mounted() {
    setTimeout(() => {
      this.list = [
        "http://img1.imgtn.bdimg.com/it/u=3561323867,2193520080&fm=26&gp=0.jpg",
        "http://img5.imgtn.bdimg.com/it/u=1496909054,2434737735&fm=26&gp=0.jpg",
        "http://img11.360buyimg.com/cms/jfs/t1921/150/1381110072/241483/401229c7/56556615N93413fe2.jpg",
        "http://img3.imgtn.bdimg.com/it/u=1450773599,654714826&fm=26&gp=0.jpg",
        "http://img2.imgtn.bdimg.com/it/u=1584091840,3470761730&fm=26&gp=0.jpg"
      ];
      this.$nextTick(() => {
        this.initBanner();
      });
    }, 10);
  }
};
</script>
<style lang="less" scoped>
@import "../../styles/index.less";
@import "~swiper/css/swiper.min.css";
.swiper-container {
  .w(375);
  .h(150);
  background: green;
  img {
    .w(375);
    .h(150);
  }
}
</style>