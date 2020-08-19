<template>
  <div class="player-data">

    <div class="technical-box">
      <technical-table :technical="technical"></technical-table>
    </div>

    <heat-map
    v-if="eventPosition!==[]"
    :event-position="eventPosition"
    ></heat-map>

  </div>
</template>

<script>
  import technicalTable from "../../table/TechnicalTable";
  import heatMap from "../../g2plot/HeatMap";
  export default {
    name: "PlayerData",
    props:{
      technical:{
        type:Object,
        default(){
          return {}
        }
      },
      eventPosition:{
        type:Array,
        default() {
          return []
        }
      }
    },
    components:{
      technicalTable,
      heatMap
    }
  }
</script>

<style scoped>
  .player-data {
    position: absolute;
    top:60px;
    left:720px;
    width: 700px;
    height: 730px;
    /*background-color:rgba(85,239,195,0.3);*/
    background-color:#1E2E45;
  }
  span {
    position: absolute;
    font-weight: bold;
    font-size: 22px;
    top:30px;
    left:20px;
  }
  .technical-box {
    width: 697px;
    height: 300px;
    background-color: #495F78;
  }
</style>
