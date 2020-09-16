<template>
  <div class="matches-info">
    <div class="box-title">
      <div class="matches-status">
        <img src="../../../../../assets/image/matches/matchInfo.png" alt="" class="">
        <span>比赛信息</span>
      </div>
    </div>
    <team-table
    color="#FF7875"
    :titles="['比赛轮次','比赛时间','比赛城市','比赛场馆']"
    :content="['小组赛第1轮','2018-6-14','Rostov-on-Don','Rostov Arena']">
    </team-table>
  </div>
</template>

<script>
  import TeamTable from "../../../table/TeamTable";
  export default {
    name: "MatchesInfo",
    components:{
      TeamTable
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
