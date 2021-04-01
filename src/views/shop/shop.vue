<template>
<div>
  <!-- 导航 -->
  <nav-bar class="nav-bar">
    <template v-slot:center>
      <h3>购物车({{showShoplistCount}})</h3>
    </template>
  </nav-bar>
  <!-- 列表 -->
  <shoplist>

  </shoplist>

  <!-- 底部栏 -->
  <shop-bottom-bar></shop-bottom-bar>
</div>
</template>

<script>
import NavBar from '../../components/common/tabbar/navbar/NavBar.vue'
import ShopBottomBar from './childCompus/shopBottomBar.vue'
import Shoplist from './childCompus/shoplist.vue'

export default {
  name: 'shop',
  components : {
    NavBar,
    Shoplist,
    ShopBottomBar,
  },
  computed : {
    showShoplistCount(){
      return this.$store.state.shoplist.length
    }
  }
}
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    text-align: center;
  }
</style>