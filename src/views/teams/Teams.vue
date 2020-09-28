<template>
  <div class="teams">
    <basic-public></basic-public>
    <teams-list :team-list="teamList"></teams-list>
    <teams-info ></teams-info>
  </div>
</template>

<script>
  import TeamsList from "./childComps/TeamsList";
  import TeamsInfo from "./childComps/TeamsInfo";
  import BasicPublic from "../../components/content/basicPublic/BasicPublic";
  import {showAllTeam} from "../../network/teamlist";

  export default {
    name: "teams",
    components: {
      TeamsList,
      TeamsInfo,
      BasicPublic
    },
    data(){
      return{
        teamList:[],
        defaultTeam:{}
      }
    },
    created(){
      this.showAllTeam()
    },
    methods:{
      //获取右侧球队积分榜
      showAllTeam(){
        showAllTeam()
          .then((res)=>{
          console.log(res);
          this.teamList = res;
          delete this.teamList._id;
        }).catch((err)=>{
          console.log(err)
        })
      }
    },
  }
</script>

<style scoped>
 .teams {
   position: relative;
 }
</style>
