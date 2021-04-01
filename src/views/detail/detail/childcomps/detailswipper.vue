<template>
    <swiper class="sswipper">
      <swiper-item v-for="(item, index) in topImage" :key="index">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from '../../../../components/common/swiper/index'

export default {
  name:'detailSwipper',
  props :{
    topImage : {
      type : Array,
      defualt(){
        return []
      }
    }
  },
  components : {
    SwiperItem,
    Swiper
  }
}
</script>

<style scoped>
.sswipper{
  margin-top: 44px;
  height: 300px;
  overflow: hidden;
}
</style>
