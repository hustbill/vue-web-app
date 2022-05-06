<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabbar",
};
</script>

<style>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.3);
  z-index: 9;
}
</style>
