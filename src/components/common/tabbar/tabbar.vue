<template>
<div id="tabbar">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'tabbar'
}
</script>

<style>
/* @import "../../assets/css/base.css"; */
#tabbar{
  display: flex;
  height: 49px;
  background-color: rgb(245, 245, 245);
  box-shadow: 0 -2px 3px rgba(0, 0, 0, .08);

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 14px;
}
</style>