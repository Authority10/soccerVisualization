<template>
  <div class="player-data">
    <div class="box-title">
      <div class="data-status">
        <img src="../../../../../assets/image/players/playerData.png" alt="">
        <span>指标对比</span>
      </div>
    </div>

    <RadarStable>

    </RadarStable>
<!--    <div class="technical-box">-->
<!--      <technical-table :technical="technical"></technical-table>-->
<!--    </div>-->

<!--    <div class="heat-map">-->
<!--      <heat-map-->
<!--        v-if="eventPosition!==[]"-->
<!--        :event-position="eventPosition"-->
<!--      >-->
<!--      </heat-map>-->
<!--    </div>-->
  </div>
</template>

<script>
  import technicalTable from "../../../table/TechnicalTable";
  import heatMap from "../../../g2plot/HeatMap";
  import RadarStable from "../../../g2plot/RadarStable";
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
      heatMap,
      RadarStable
    }
  }
</script>

<style scoped>
  .player-data {
    position: absolute;
    top:60px;
    left:450px;
    width: 900px;
    height: 750px;
    border-radius: 15px;
    overflow: hidden;
    background-color:#4f4f4f;
  }
  .box-title {
    position: relative;
    width: 900px;
    height: 62px;
    background-color: #4b4b4b;
  }
  .data-status {
    position: absolute;
    left: 20px;
    width: 140px;
    height: 62px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span {
    color: #69c0ff;
    font-size: 24px;
  }
  img {
    width: 30px;
  }
  .heat-map {
    width: 815px;
    height: 374px;
    border-radius: 15px;
    background-color: #525252;
    margin: 0 auto;
  }
</style>
