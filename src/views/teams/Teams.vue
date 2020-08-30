<template>
  <div class="teams">
    <basic-public></basic-public>
    <teams-list :team-list="teams"></teams-list>
    <teams-info :team-info="defaultTeam"></teams-info>
  </div>
</template>

<script>
  import TeamsList from "./childComps/TeamsList";
  import TeamsInfo from "./childComps/TeamsInfo";
  import BasicPublic from "../../components/content/basicPublic/BasicPublic";
  import {showAllTeam,Top,Bottom} from "../../network/teams";

  export default {
    name: "teams",
    components: {
      TeamsList,
      TeamsInfo,
      BasicPublic
    },
    data(){
      return{
        teams:{
          GroupTop:{},
          GroupBottom:{}
        },
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
          console.log(res);
          //按照上下半区切割数组，放入提前定义好的类
          // 数组对象转化成纯对象
          this.teams.GroupTop=new Top(res.slice(0,4));
          this.teams.GroupBottom=new Bottom(res.slice(4,8));
          this.defaultTeam = res[0].GroupA.Russia
          console.log(this.teams)
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
