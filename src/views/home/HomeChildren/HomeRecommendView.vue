<template>
  <div class="homerecommendview">
    <div id="recommends" v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt=""> 
      </a>
      <div class="title">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'HomeRecommendView',
  props : {
    recommends : {
      type : Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
.homerecommendview{
  display: flex;
  box-shadow: 0 6px 0 rgb(209, 209, 209);
}
#recommends{
  text-align: center;
  flex: 1;
  margin: 3px 7px;
}
#recommends img{
  width: 80px;
  margin-bottom: 5px;
}
.title{
  color: pink;
  font-size: 12px;
  font-weight: 500;
}
</style>
