<template>
  <div id="app">
    <main-tabbar />
    <router-view />    
  </div>
</template>

<script>
import MainTabbar from "components/content/mainTabBar/maintabbar.vue";
export default {
  name: "App",
  components: {
    MainTabbar,
  },
};
</script>

<style>
/* @import url(./assets/css/base.css); */
</style>
