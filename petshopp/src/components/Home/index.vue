<template>
  <div class="home">
    <!-- 头部 -->
    <div class="homeHeader">
      <el-input v-model="input" placeholder="搜索商品" class="headerInput"></el-input>
    </div>

    <!-- 轮播图-->
    <Banner></Banner>
    <!--商品列表  -->
    <nav class="homeNav">
      <li v-for="(item,index) in list " :key="index">
        <img :src="item.pic" alt />
        <span>{{item.title}}</span>
      </li>
    </nav>
    <!-- 文字描述 -->
    <div class="homeDec"></div>
  </div>
</template>
<script>
import Banner from "../Banner";
export default {
  components: {
    Banner
  },
  data() {
    return {
      input: "",
      list: [
        {
          pic:
            "https://img.yzcdn.cn/upload_files/2019/11/19/Fv9fNI7PWQnq4loEkwrqlxWTXDh6.jpg!large.jpg",
          title: "狗狗主粮"
        },
        {
          pic:
            "https://img.yzcdn.cn/upload_files/2019/10/09/FstDmtGk5bpU4mWd_BG8k1P5ehy3.jpg!large.jpg",
          title: "猫咪主粮"
        },
        {
          pic:
            "https://img.yzcdn.cn/upload_files/2019/11/19/FvHHm55OJalcBLrj08TrfN0Q0XVk.jpg!large.jpg",
          title: "营养保健"
        },
        {
          pic:
            "https://img.yzcdn.cn/upload_files/2019/11/22/Fo7z6mAPKtgwjo6DWyQEFUr7cqAZ.png!large.png",
          title: "日常用品"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
@import "../../styles/index.less";
.home {
  .w(375);
  .homeHeader {
    height: 50px;
    background-color: @red;
    display: flex;
    justify-content: center;
    align-items: center;
    .headerInput {
      .w(340);
      border-radius: 15px;
      display: block;
      outline: none;
    }
  }
  .homeNav {
    .w(375);
    .h(126);
    // background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      .w(93);
      .h(126);
    text-align: center;
      img {
        .h(93);
      }
      span {
        font-size: @fs-m;
      }
    }
  }
}
</style>    