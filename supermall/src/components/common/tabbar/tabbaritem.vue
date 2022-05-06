<template>
  <div class="tab-bar-item" @click="btnClick">
    <!-- <img src="../../assets/img/tabbar/fl1.svg" alt="" />
    <div>首页</div> -->
    <!-- 所有的item都展示同一个图片，同一个文字 -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="isActiveStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "tabbaritem",
  props: {
    path: String,
    isActiveColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      // isActive: true,
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    isActiveStyle() {
      return this.isActive ? { color: this.isActiveColor } : {};
    },
  },
  methods: {
    btnClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.tab-bar-item img {
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
/* .active {
  color: red;
} */
</style>
