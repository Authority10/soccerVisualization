<template>
  <div class="team-season">
    <div class="box-title">
      <div class="season-status">
        <img src="../../../../../assets/image/teams/teamInfo.png" alt="" class="">
        <span>赛季表现</span>
      </div>
    </div>
    <team-table
      color="#FFF566"
      :titles="['国家','主教练','成立时间','平均年龄','参赛次数','主要荣誉']"
      :content="['俄罗斯','克洛普','1996-10-04','24','20','冠军']">
    </team-table>
  </div>
</template>

<script>
  import TeamTable from "../../../table/TeamTable";
  export default {
    name: "TeamSeason",
    components:{
      TeamTable
    }
  }
</script>

<style scoped>
  .team-season {
    position: absolute;
    top:23px;
    left:978px;
    width: 468px;
    height: 470px;
    border-radius: 12px;
    overflow: hidden;
    background-color:#4f4f4f;
  }
  .box-title {
    width: 468px;
    height: 64px;
    background-color:#4b4b4b;
  }
  .season-status {
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
