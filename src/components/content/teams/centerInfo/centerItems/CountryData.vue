<template>
  <div class="country-data">
   <span>球队阵容</span>
  </div>
</template>

<script>
  export default {
    name: "CountryData",
  }
</script>

<style scoped>
  .country-data {
    position: relative;
    top:20px;
    left:20px;
    width: 650px;
    height: 400px;
    background-color:rgba(85,239,195,0.3);
    border-radius: 10px;
  }
  span {
    position: absolute;
    font-weight: bold;
    font-size: 22px;
    top:30px;
    left:20px;
  }
</style>
