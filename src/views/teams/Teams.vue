<template>
  <div>
    <teams-list :team-list="teams"></teams-list>
    <teams-info :team-info="teams"></teams-info>
  </div>
</template>

<script>
  import TeamsList from "./childComps/TeamsList";
  import TeamsInfo from "./childComps/TeamsInfo";
  import {showAllTeam} from "../../network/teams";

  export default {
    name: "teams",
    components: {
      TeamsList,
      TeamsInfo
    },
    data(){
      return{
        teams:{}
      }
    },
    created(){
      this.showAllTeam()
    },
    methods:{
      showAllTeam(){
        showAllTeam()
          .then((res)=>{
          console.log(res);
          this.teams = res[0]
        }).catch((err)=>{
          console.log(err)
        })
      }
    },

  }
</script>

<style scoped>

</style>
