<template>
  <div class="matches-info">
    <div class="box-title">
      <div class="matches-status">
        <img src="../../../../../assets/image/matches/matchInfo.png" alt="" class="">
        <span>比赛信息</span>
      </div>
    </div>
    <match-table
    color="#FF7875"
    :titles="['联赛logo','联赛级别','球队数量','球员总数','外援总数','卫冕冠军','联赛时长','亚冠球队','升班马']"
    :content="['中超','中国国内足球顶级联赛','16','672','88','广州恒大','28年','广州恒大','天津权健']">
    </match-table>
  </div>
</template>

<script>
  import TeamTable from "../../../table/TeamTable";
  import MatchTable from "../../../table/MatchTable";
  export default {
    name: "MatchesInfo",
    components:{
      TeamTable,
      MatchTable
    }
  }
</script>

<style scoped>
  .matches-info {
    position: relative;
    top:20px;
    left:20px;
    width: 1433px;
    height: 219px;
    border-radius: 15px;
    overflow: hidden;
    background-color:#4f4f4f;
  }
  .box-title {
    width: 1433px;
    height: 64px;
    background-color:#4b4b4b;
  }
  .matches-status {
    position: absolute;
    left: 20px;
    width: 140px;
    height: 62px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span {
    color: #ff7875;
    font-size: 22px;
  }
  img {
    width: 30px;
  }
  /*.img-name {*/
  /*  position: absolute;*/
  /*  display: flex;*/
  /*  flex-direction: column;*/
  /*  justify-content: space-around;*/
  /*  text-align: center;*/
  /*  width: 200px;*/
  /*  height: 180px;*/
  /*  top:10px;*/
  /*  left:30px*/
  /*}*/
  /*.country-name {*/
  /*  text-align: center;*/
  /*  font-size: 28px;*/
  /*  color: white;*/
  /*  font-weight: bold;*/
  /*}*/

</style>
