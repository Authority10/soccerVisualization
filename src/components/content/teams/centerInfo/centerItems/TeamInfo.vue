<template>
  <div class="country-info">
    <div class="box-title">
        <div class="country-status">
          <img src="../../../../../assets/image/teams/teamInfo.png" alt="" class="">
          <span>球队信息</span>
        </div>
    </div>
    <team-table
    color="#FFF566"
    :titles="['球队名称','主教练','球场名称','所在城市','成立时间','参赛次数']"
    :content="teamInfo">
    </team-table>
  </div>
</template>

<script>
  import TeamTable from "../../../table/TeamTable";
  export default {
    name: "CountryInfo",
    props:{
      activeTeam:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    data(){
      return{

      }
    },
    computed:{
      teamInfo(){
        let teamInfo = []
        teamInfo.push(this.activeTeam['TEAM_NAME_EN'])
        teamInfo.push(this.activeTeam['Coach'])
        teamInfo.push(this.activeTeam['CourtName'])
        teamInfo.push(this.activeTeam['City'])
        teamInfo.push(this.activeTeam['FoundDate'])
        teamInfo.push(this.activeTeam['TopLeagueCount'])
        return teamInfo
      }
    },
    components:{
      TeamTable
    },
    methods:{
    }
  }
</script>

<style scoped>
  .country-info {
    position: absolute;
    top:23px;
    left:20px;
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
  .country-status {
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
  .img-name {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    width: 200px;
    height: 180px;
    top:10px;
    left:30px
  }
   .country-name {
    text-align: center;
    font-size: 28px;
    color: white;
    font-weight: bold;
  }
</style>
