<template>
  <div class="navtop">
    <nav-bar>
      <template v-slot:left>
        <div class="back" @click="clickback">
          <img src="../../../../assets/img/common/back.svg" alt="">
          </div>
      </template>
      <template v-slot:center>
        <div class="content">
          <div v-for="(item, index) in title" 
          :key="index"
          :class="{active : currentype == index}"
          @click="clicktitle(index)">
            {{ item }}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../../components/common/tabbar/navbar/NavBar.vue";
export default {
  name: "detailNavbar",
  data() {
    return {
      title: ["商品", "详情", "评论", "推荐"],
      currentype : 0
    };
  },
  props : {
    // turnpagetype : {
    //   type : Array,
    //   default(){
    //     return []
    //   }
    // }
  },
  // mounted() {
  //   console.log(document.getElementsByClassName('navtop')[0].scrollTop);
  // },
  components: {
    NavBar,
  },
  methods: {
    clicktitle(index){
      this.currentype = index
      this.$emit('clicktitle', index)
    },
    clickback(){
      this.$router.push('/home')
    }
  },
};
</script>

<style scoped>
.back{
  text-align: center;
}
.back img{ 
  vertical-align: middle;
}
.content {
  display: flex;
}
.content div {
  flex: 1;
  font-size: 13px;
  text-align: center;
}
.active{
  color: deeppink;
}
</style>
