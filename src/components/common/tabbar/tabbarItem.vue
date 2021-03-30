<template>
  <div class="tabbar-nav" @click="itemclick" >
    <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
    <div>首页</div> -->
    <!-- 为了动态绑定，需要使用插槽 -->
    <!-- 一般都需要div包裹比较好，不建议直接用slot进行绑定等属性 -->
    <div v-if="!isactive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{active : isactive}"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
  name: "tabbarItem",
  data() {
    return {
      // isactive : false
    }
  },
  props : {
    path : String
  },
  computed : {
    isactive() {
      return this.$route.path == this.path
    }
  },
  methods: {
    itemclick(){
      // console.log(12121);
      this.$router.push(this.path)
    }
  },
};
</script>

<style >
.tabbar-nav {
  flex: 1;
  text-align: center;
  margin-top: 3px;
}
.tabbar-nav img {
  vertical-align: bottom;
  width: 24px;
}
.active{
  color: red;
}
</style>
