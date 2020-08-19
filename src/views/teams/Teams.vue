<template>
  <div>
    <teams-list :team-list="teams"></teams-list>
    <teams-info :team-info="teams"></teams-info>
  </div>
</template>

<script>
  import TeamsList from "./childComps/TeamsList";
  import TeamsInfo from "./childComps/TeamsInfo";
  import {showAllTeam,Top,Bottom} from "../../network/teams";

  export default {
    name: "teams",
    components: {
      TeamsList,
      TeamsInfo
    },
    data(){
      return{
        teams:{
          GroupTop:{},
          GroupBottom:{}
        }
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
          // console.log(res.slice(0,4));
          // console.log(res.slice(4,8));
          //按照上下半区切割数组，放入提前定义好的类
          // 数组对象转化成纯对象
          this.teams.GroupTop=new Top(res.slice(0,4));
          this.teams.GroupBottom=new Bottom(res.slice(4,8));
          console.log(this.teams)
        }).catch((err)=>{
          console.log(err)
        })
      }
    },

  }
</script>

<style scoped>

</style>
