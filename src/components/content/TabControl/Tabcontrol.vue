<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      :class="{ active: index === currentflag }"
      @click="curclick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentflag: 0,
    };
  },
  methods: {
    curclick(index) {
      this.currentflag = index;
      this.$emit('tabclick', index)
    },
  },
};
</script>

<style scoped>
.tab-control {
  margin-top: 3px;
  box-shadow: 0 -3px 0 rgb(206, 206, 206);
  background-color: white;
  display: flex;
  text-align: center;
}
.tab-control div {
  flex: 1;
  height: 44px;
  line-height: 44px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 2px solid var(--color-high-text);
  padding: 5px;
}
</style>
