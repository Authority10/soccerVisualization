<template>
  <div class="player-data">
    <span>技术统计</span>

    <technical-table></technical-table>

    <heat-map></heat-map>

  </div>
</template>

<script>
  import technicalTable from "../../technicalTable/technicalTable";
  import heatMap from "../../heatMap/heatMap";
  export default {
    name: "PlayerData",
    components:{
      technicalTable,
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
  span {
    position: absolute;
    font-weight: bold;
    font-size: 22px;
    top:30px;
    left:20px;
  }
</style>
