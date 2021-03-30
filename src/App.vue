<template>
  <div id="app">
    <keep-alive>
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
    // TabBar,
    // TabbarItem
    MainTabbar,
  },
};
</script>

<style >
@import "assets/css/base.css";
</style>


