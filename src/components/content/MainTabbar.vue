<template>
  <Tab-bar>
      <!-- 使用插槽进行替换 -->
      <Tabbar-item path="/home">
        <!-- 一般都要全部图片一起渲染 -->
        <template  v-slot:item-icon>
          <img src="../../assets/img/tabbar/home.svg" alt="">
        </template>
        <template  v-slot:item-icon-active>
          <img src="../../assets/img/tabbar/home_active.svg" alt="">
        </template>
        <template  v-slot:item-text>
          <div>首页</div>
        </template>
      </Tabbar-item>
      <Tabbar-item path="/sort">
        <template  v-slot:item-icon>
          <img src="../../assets/img/tabbar/category.svg" alt="">
        </template>
        <template  v-slot:item-icon-active>
          <img src="../../assets/img/tabbar/category_active.svg" alt="">
        </template>
        <template  v-slot:item-text>
          <div>分类</div>
        </template>
      </Tabbar-item>
      <Tabbar-item path="/shop">
        <template  v-slot:item-icon>
          <img src="../../assets/img/tabbar/shopcart.svg" alt="">
        </template>
        <template  v-slot:item-icon-active>
          <img src="../../assets/img/tabbar/shopcart_active.svg" alt="">
        </template>
        <template  v-slot:item-text>
          <div>购物车</div>
        </template>
      </Tabbar-item>
      <Tabbar-item path="/profile">
        <template  v-slot:item-icon>
          <img src="../../assets/img/tabbar/profile.svg" alt="">
        </template>
        <template  v-slot:item-icon-active>
          <img src="../../assets/img/tabbar/profile_active.svg" alt="">
        </template>
        <template  v-slot:item-text>
          <div>我的</div>
        </template>
      </Tabbar-item>
    </Tab-bar>
</template>
<script>
import TabBar from '../common/tabbar/tabbar'
import TabbarItem from '../common/tabbar/tabbarItem'
export default {
  name: "MainTabbar",
  components : {
    TabBar,
    TabbarItem
  }
};
</script>

<style >
</style>
