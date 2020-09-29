<template>
  <div class="country-radar">
    <div class="box-title">
      <div class="radar-status">
        <img src="../../../../../assets/image/teams/teamInfo.png" alt="" class="">
        <span>球队雷达</span>
      </div>
    </div>
    <radar-team
    :team-radar="teamRadar">
    </radar-team>
  </div>
</template>

<script>
  import RadarTeam from "../../../g2plot/radar/RadarTeam";
  export default {
    name: "TeamRadar",
    props:{
      teamRadar:{
        type:Array
      }
    },
    components:{
      RadarTeam
    }
  }
</script>

<style scoped>
  .country-radar {
    position: absolute;
    top:23px;
    left:511px;
    width: 447px;
    height: 470px;
    border-radius: 12px;
    overflow: hidden;
    background-color:#4f4f4f;
  }
  .box-title {
    width: 447px;
    height: 64px;
    background-color:#4b4b4b;
  }
  .radar-status {
    position: absolute;
    left: 20px;
    width: 140px;
    height: 62px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span {
    color: #FFF566;
    font-size: 22px;
  }
  img {
    width: 30px;
  }
</style>
