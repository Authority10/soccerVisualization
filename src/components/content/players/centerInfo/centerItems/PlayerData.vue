<template>
  <div class="player-data">
    <div class="box-title">
      <div class="data-status">
        <img src="../../../../../assets/image/players/playerData.png" alt="">
        <span class="status-comparison">指标对比</span>
      </div>
    </div>
    <span class="first-current-match">
      本场评分
    </span>
    <span class="first-player-rate">
      95.5分
    </span>
    <span class="second-current-match">
      本场评分
    </span>
    <span class="second-player-rate">
      98.5分
    </span>
    <RadarStable>

    </RadarStable>

<!--    <div class="chart">-->
      <Chart>

      </Chart>
<!--    </div>-->

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
  import Chart from "../../../g2/Chart";
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
      RadarStable,
      Chart
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
  img {
    width: 30px;
  }
  .status-comparison {
    color: #69c0ff;
    font-size: 24px;
  }
  .first-current-match {
    position: absolute;
    top: 130px;
    left: 60px;
    font-size: 30px;
    color: white;
  }
  .first-player-rate {
    position: absolute;
    top: 200px;
    left: 60px;
    font-size: 30px;
    color: white;
  }
  .second-current-match {
    position: absolute;
    top: 130px;
    left: 700px;
    font-size: 30px;
    color: white;
  }
  .second-player-rate {
    position: absolute;
    top: 200px;
    left: 700px;
    font-size: 30px;
    color: white;
  }
  .chart {
    position: absolute;
    /*background-color: red;*/
    width: 900px;
    height: 350px;
  }
  .heat-map {
    width: 815px;
    height: 374px;
    border-radius: 15px;
    background-color: #525252;
    margin: 0 auto;
  }
</style>
