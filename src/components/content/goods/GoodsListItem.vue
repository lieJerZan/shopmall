<template>
  <div class="goodslistitem" @click="clicklink">
    <img :src="item.show.img" alt="" @load="imgload"/>
    <div class="goods-info">
      <p>{{ item.title }}</p>
      <span class="price">￥{{ item.price }}</span>
      <span class="collect">热度{{ item.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgload(){
      this.$bus.$emit('imgload')
    },
    clicklink(){
      console.log(11);
    }
  },
};
</script>

<style scoped>
.goodslistitem {
  width: 48%;
  padding-bottom: 40px;
  position: relative;
}
.goodslistitem img {
  width: 100%;
    border-radius: 5px;
}
 .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
