<template>
  <teams-list :team-list="teams"></teams-list>
</template>

<script>
  import TeamsList from "./childComps/TeamsList";
  import {showAllTeam} from "../../network/teams";

  export default {
    name: "teams",
    components: {
      TeamsList
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
