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
    width: 80px;
    height:800px;
    justify-content: center;
    background-color:rgba(237,234,234,0.2);
    flex-direction:column;
    position:fixed;
    top: 0;
    left: 0;
    border: 1px solid #E8E8E8;
  }
</style>
