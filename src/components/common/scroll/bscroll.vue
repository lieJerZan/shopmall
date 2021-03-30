<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="content">
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "bscroll",
  data() {
    return {
      scroll: null,
    };
  },
  // 传递过来，进行更改Probetype
  props : {
    probeType : {
      type : Number,
      default : 0
    },
    pullUpLoad : {
      type : Boolean,
      default : false
    }
  },
  mounted() {
    // 创建滑动
    this.scroll = new BScroll(this.$refs.wrapper, {
      pullUpLoad: this.pullUpLoad,
      click: true,
      // 不一定需要时时开启
      probeType: this.probeType,
    });
    // 获取位置信息
    this.scroll.on('scroll', (position) =>{
      this.$emit('scroll', position)
    });
    // 上拉加载
    this.scroll.on('pullingUp',()=>{
      // console.log(12121);
      // 发出去这个上拉加载事件，去首页监听
      this.$emit('pullingup')
    })

  },
  methods: {
    // 返回顶部是的实现
    scrollTo(x, y, time) {
      this.scroll.scrollTo(x, y, time);
    },
    // finishiPullUp(){
    //   this.scroll.finishPullUp()
    // }
  },
};
</script>

<style scoped>
.scroll-wrapper {
  height: 95vh;
  /* overflow: hidden; */
}
</style>
