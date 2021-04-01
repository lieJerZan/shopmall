<template>
<div class="toast" v-show='isShow'>
  <div>{{message}}</div>
</div>
</template>

<script>
export default {
  name:'Toast',
  data() {
    return {
      message : '',
      isShow : false
    }
  },
  methods: {
    show(message, delay=2000){
      this.message = message
      this.isShow = true
      setTimeout(() => {
        this.isShow = false
      },delay)
    }
  },
}
</script>

<style scoped>
.toast{
  padding: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 999;
  transform: translate(-50%, -50%);
  border-radius: 3px;

  color: #fff;
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
