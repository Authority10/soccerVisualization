<template>
  <div class="player-data">
    <heat-map></heat-map>
  </div>
</template>

<script>
  import heatMap from "../../heatMap/heatMap";
  export default {
    name: "PlayerData",
    components:{
      heatMap
    }
  }
</script>

<style scoped>
  .player-data {
    position: relative;
    top:20px;
    left:20px;
    width: 650px;
    height: 300px;
    background-color:rgba(85,239,195,0.3);
    border-radius: 10px;
  }
</style>
