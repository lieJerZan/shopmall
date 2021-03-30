<template>
  <div class="bobycontent">
    <nav-bar class="home-bar">
      <template v-slot:center>
        <div>商城</div>
      </template>
    </nav-bar>
    <tabcontrol
      :titles="titles"
      @tabclick="tabclick"
      :class="{ fixed: fixedtype, fixedcontrol : !fixedtype}"
    ></tabcontrol>
    <!-- 实现返回顶部，需要获得scroll -->
    <bscroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="scrollposition"
      :pull-up-load="true"
      @pullingup="pullingUpLoad"
    >
      <!-- 轮播图 -->
      <home-swiper :banner="banner"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <feature></feature>
      <!-- 商品上拉浏览 -->
      <tabcontrol :titles="titles" @tabclick="tabclick"></tabcontrol>
      <goods-list :goods="showgoodstype"></goods-list>
    </bscroll>
    <back-top @click.native="topclick" v-show="status"></back-top>
  </div>
</template>

<script>
import NavBar from "../../components/common/tabbar/navbar/NavBar";
import HomeSwiper from "./HomeChildren/HomeSwiper";
import HomeRecommendView from "./HomeChildren/HomeRecommendView";
import Feature from "./HomeChildren/Feature.vue";
import Tabcontrol from "../../components/content/TabControl/Tabcontrol.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";
import BackTop from "../../components/content/backTop/backTop.vue";

import Bscroll from "../../components/common/scroll/bscroll.vue";

import { GetHomeMultidata, GetHomeGoods } from "../../network/home";
export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    Feature,
    Tabcontrol,
    GoodsList,
    Bscroll,
    BackTop,
  },
  data() {
    return {
      banner: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      // 进行分页请求的创建
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      // 进行pop，new等的切换
      currentType: "pop",
      // 控制返回顶部的隐藏和出现
      status: false,
      fixedtype: true,
    };
  },
  created() {
    // 请求首页数据
    this.GetHomeMultidata();
    // 请求列表数据
    this.GetHomeGoods("pop");
    this.GetHomeGoods("new");
    this.GetHomeGoods("sell");
  },
  mounted() {
    // 监听每个图片的加载
    // const refresh = this.debounce(this.$refs.scroll.scroll.refresh, 200);
    this.$bus.$on("imgload", () => {
      // console.log(1111);
      // refresh()
      this.$refs.scroll.scroll.refresh();
    });
  },
  computed: {
    showgoodstype() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    tabclick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    // 网络请求方面的

    GetHomeMultidata() {
      GetHomeMultidata().then((res) => {
        // console.log(res.data.recommend.list);
        // 进行一个保存
        // this.result = res;
        this.banner = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    GetHomeGoods(type) {
      // 动态使用page
      const page = this.goods[type].page + 1;
      GetHomeGoods(type, page).then((res) => {
        // 将后面页码的数据进行一个个push进去
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
    // 返回顶部的操作
    topclick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    // 监听发生的位置变化
    scrollposition(position) {
      // console.log(position);
      this.status = -position.y > 700;
      this.fixedtype = -position.y < 557;
      // console.log(this.fiexdtype);
    },
    // 监听上拉加载动作
    pullingUpLoad() {
      this.GetHomeGoods(this.currentType);
      // 终止一次上拉加载
      this.$refs.scroll.scroll.finishPullUp();
    },
  },
};
</script>

<style>
.home-bar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9;
  text-align: center;
  font-weight: 700;
  color: white;
  background-color: var(--color-tint);
  box-shadow: 0 2px 3px rgba(175, 175, 175, 0.3);
}
.content {
  z-index: 1;
  /* margin: 44px 0; */
  /* height: 500px; */
  /* overflow: hidden; */
}
.bobycontent .fixed {
  display: none;
}
.bobycontent .fixedcontrol {
  position: absolute;
  z-index: 88;
  top: 44px;
  right: 0;
  left: 0;
}
</style>
