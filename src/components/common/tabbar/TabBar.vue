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
    display: flex;
    width: 116px;
    height:943px;
    justify-content: center;
    background-color:#4b4b4b;
    flex-direction:column;
    position:fixed;
    top: 0;
    left: 0;
    /*border-right: 9px solid red;*/
  }
</style>
