<template>
  <div class="teams">
    <basic-public></basic-public>
    <teams-list :team-list="teamList"></teams-list>
    <teams-info :team-info="defaultTeam"></teams-info>
  </div>
</template>

<script>
  import TeamsList from "./childComps/TeamsList";
  import TeamsInfo from "./childComps/TeamsInfo";
  import BasicPublic from "../../components/content/basicPublic/BasicPublic";
  import {showAllTeam} from "../../network/teams";

  export default {
    name: "teams",
    components: {
      TeamsList,
      TeamsInfo,
      BasicPublic
    },
    data(){
      return{
        teamList:{},
        defaultTeam:{}
      }
    },
    created(){
      this.showAllTeam()
    },
    methods:{
      showAllTeam(){
        showAllTeam()
          .then((res)=>{
          console.log(res[0]);
          this.teamList = res[0]
          delete this.teamList._id
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
