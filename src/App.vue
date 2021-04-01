<template>
  <div id="app">
    <!-- 缓存中，除了detail会重新加载，其他的不会 -->
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tabbar></main-tabbar>
  </div>
</template>
<script>
import MainTabbar from "./components/content/MainTabbar";
export default {
  name: "App",
  components: {
    MainTabbar,
  },
};
</script>

<style >
@import "assets/css/base.css";
</style>


