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
      :titles="['总进球','总丢球','射手王','助攻王','场均传球','场均控球']"
      :content="seasonInfo">
    </team-table>
  </div>
</template>

<script>
  import TeamTable from "../../../table/TeamTable";
  export default {
    name: "TeamSeason",
    props:{
      activeTeam:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    components:{
      TeamTable
    },
    computed:{
      seasonInfo(){
        let seasonInfo = []
        seasonInfo.push(parseInt(this.activeTeam['goals']))
        seasonInfo.push(parseInt(this.activeTeam['loseGoals']))
        seasonInfo.push(this.activeTeam['mostGoalsPlayer'])
        seasonInfo.push(this.activeTeam['mostAssistsPlayer'])
        seasonInfo.push(this.activeTeam['avePasses'])
        seasonInfo.push(this.activeTeam['ballPossession'])
        return seasonInfo
      }
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
