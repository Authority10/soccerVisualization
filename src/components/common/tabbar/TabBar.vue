<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab-bar {
    position:fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 112px;
    height:1080px;
    flex-direction:column;
    justify-content: center;
    background-color:#4b4b4b;
  }
</style>
