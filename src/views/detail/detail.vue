<template>
  <div id="detail">
    <detail-navbar
      class="denavbar"
      @clicktitle="turnpage"
    ></detail-navbar>
    <!-- <bscroll class="content"> -->
    <detailswipper :topImage="topImage"></detailswipper>
    <detail-base-info :dgoods="dgoods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
    <detail-param-info :paramInfo="paramInfo" ref="param"></detail-param-info>
    <detail-comment-info
      :commentInfo="commentInfo"
      ref="comment"
    ></detail-comment-info>
    <goods-list :goods="sellgoods" ref="list" class="list"></goods-list>
    <detail-bottomn-bar @addToShop="addToShop"> </detail-bottomn-bar>
    <!-- </bscroll> -->
  </div>
</template>

<script>
import detailNavbar from "./detail/childcomps/detailNavbar.vue";
import Detailswipper from "./detail/childcomps/detailswipper.vue";

import {
  Getdetail,
  Goods,
  GoodsParam,
  Shop,
  Detailsell,
} from "../../network/getdetail";
import DetailBaseInfo from "./detail/childcomps/DetailBaseInfo.vue";
import DetailShopInfo from "./detail/childcomps/DetailShopInfo.vue";
import DetailGoodsInfo from "./detail/childcomps/DetailGoodsInfo.vue";
import DetailParamInfo from "./detail/childcomps/DetailParamInfo.vue";
import GoodsList from "../../components/content/goods/GoodsList";
import DetailCommentInfo from "./detail/childcomps/DetailCommentInfo.vue";
import DetailBottomnBar from "./detail/childcomps/DetailBottomnBar";
// import bscroll from "../../components/common/scroll/bscroll.vue";
export default {
  components: {
    detailNavbar,
    Detailswipper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    GoodsList,
    DetailCommentInfo,
    DetailBottomnBar,
    // bscroll,
  },
  name: "Detail",
  data() {
    return {
      iid: null,
      topImage: [],
      dgoods: {},
      GoodsParam: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      sellgoods: [],
      commentInfo: {},
      turnpagetype: [],
    };
  },
  methods: {
    turnpage(index) {
      // console.log(index);
      switch (index) {
        case 0:
          window.scrollTo(0, 0);
          break;
        case 1:
          window.scrollTo(0, this.turnpagetype[1]);
          break;
        case 2:
          window.scrollTo(0, this.turnpagetype[2]);
          break;
        case 3:
          window.scrollTo(0, this.turnpagetype[3]);
          break;
      }
    },
    addToShop() {
      // 获得购物车中的一些展现信息
      const product = {}
      product.image = this.topImage[0]
      product.title = this.dgoods.title
      product.desc = this.dgoods.desc
      product.price = this.dgoods.lowPrice
      // 获取iid，这个是商品的唯一标识很重要
      product.iid = this.iid
      // console.log(product);
      // 把数据传输过去
      this.$store.dispatch('addShop', product).then(res => {
        this.$toast.show(res, 2000)
      })
    },

  },
  created() {
    this.iid = this.$route.params.iid;
    // console.log(this.$route.params);
    // console.log(this.iid);
    // 请求每个iid里面的数据
    Getdetail(this.iid).then((res) => {
      // console.log(res.result.itemInfo.topImages);
      // 获取轮播图的图片
      const data = res.result;
      this.topImage = data.itemInfo.topImages;
      // 获取整合基础数据
      this.dgoods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // console.log(this.goods);
      //获取商家信息数据
      this.shop = new Shop(data.shopInfo);

      // 保存商品的详情数据
      this.detailInfo = data.detailInfo;

      // 获取商品的详细参数
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
    });
    Detailsell().then((res) => {
      this.sellgoods = res.data.list;
    });

    
  },
  updated() {
    // this.$nextTick(() => {
      this.turnpagetype = [];
      this.turnpagetype.push(0);
      this.turnpagetype.push(this.$refs.param.$el.offsetTop);
      this.turnpagetype.push(this.$refs.comment.$el.offsetTop);
      this.turnpagetype.push(this.$refs.list.$el.offsetTop);
      // console.log(this.turnpagetype);
    // });
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 19;
  background-color: #fff;
}
.denavbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 155;
}
.list{
  margin-bottom: 55px;
}
</style>
