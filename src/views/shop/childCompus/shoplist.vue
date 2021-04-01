<template>
  <div class="shop">
    <shop-list-item v-for="(item, index) in $store.state.shoplist" :item="item" :key="index"></shop-list-item>
    <!-- <div v-for="(item, index) in $store.state.shoplist" :item="item" :key="index">{{item}}</div> -->
  </div>
</template>

<script>
import shopListItem from "./shopListItem.vue";
export default {
  components: {
    shopListItem,
  },
  name: "shoplist",
  data() {
    return {
    };
  },
};
</script>

<style scoped>
</style>
