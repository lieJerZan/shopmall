<template>
  <div class="goods-list">
    <goods-list-item v-for="(item,index) in goods" :key="index" :item="item" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  components: {
    GoodsListItem,
  },
  name: "GoodsList",
  data() {
    return {};
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 5px;
}
</style>
