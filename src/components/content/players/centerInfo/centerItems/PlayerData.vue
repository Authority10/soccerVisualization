<template>
  <div class="player-data">
    <div class="box-title">
      <div class="data-status">
        <img src="../../../../../assets/image/players/playerData.png" alt="">
        <span class="status-comparison">比赛表现对比</span>
      </div>
    </div>

    <div class="rate">
      <div class="home-player">
         <div class="home-title">
              本场比赛评分
         </div>
      </div>
      <div class="radar">
        <div class="radar-title">

        </div>
      </div>
      <div class="away-player">
        <div class="away-title">
             本场比赛评分
        </div>
      </div>
    </div>


<!--    <span class="first-current-match">-->
<!--      本场评分-->
<!--    </span>-->
<!--    <span class="first-player-rate">-->
<!--      95.5分-->
<!--    </span>-->
<!--    <span class="second-current-match">-->
<!--      本场评分-->
<!--    </span>-->
<!--    <span class="second-player-rate">-->
<!--      98.5分-->
<!--    </span>-->
<!--    <RadarStable>-->

<!--    </RadarStable>-->

<!--    <div class="chart">-->
<!--      <Chart>-->

<!--      </Chart>-->

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
    top:20px;
    left:525px;
    width: 750px;
    height: 800px;
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
    left: 305px;
    width: 190px;
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
  .rate {
    position: relative;
    top: 22px;
    left: 42px;
    width: 666px;
    height: 324px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
    background-color:#555555;
  }
  .home-player {
    /*position: absolute;*/
    /*top: 12px;*/
    /*left: 22px;*/
    width: 140px;
    height: 300px;
    border-radius: 15px;
    background-color:#686868;
    overflow:hidden;
  }
  .home-title {
    position: relative;
    width: 140px;
    height: 32px;
    font-size: 14px;
    color: white;
    text-align: center;
    line-height: 32px;
    background-color: #4b4b4b;
  }
  .away-player {
    width: 140px;
    height: 300px;
    border-radius: 15px;
    background-color:#686868;
    overflow:hidden;
  }
  .away-title {
    position: relative;
    width: 140px;
    height: 32px;
    font-size: 14px;
    color: white;
    text-align: center;
    line-height: 32px;
    /*display: flex;*/
    /*justify-content: space-around;*/
    background-color: #4b4b4b;
  }
  .radar {
    width: 300px;
    height: 300px;
    border-radius: 15px;
    overflow: hidden;
    background-color: #696969;
  }
  .radar-title {
    width: 300px;
    height: 32px;
    background-color: #4b4b4b;
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
