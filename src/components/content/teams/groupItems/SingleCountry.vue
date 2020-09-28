<template>
  <div class="single-team" @click="changeTeam">
     <div class="title">
       {{singleItems.teamName}}
     </div>
     <div class="team-logo">
       <img :src="singleItems.teamLogo" alt="" class="logo">
     </div>
     <div class="score">
       <div class="rank">
         {{singleItems.rank}}
       </div>
       <div class="results">
         {{singleItems.results}}
       </div>
     </div>
  </div>
</template>

<script>
  import {findTeam} from "../../../../network/teams";
  import {findSquad} from "../../../../network/squad";

  export default {
    name: "singleCountry",
    props:{
      singleItems:{
        type:Object,
        default(){
          return{}
        }
      },
    },
    data(){
      return{
      }
    },
    methods:{
      //对于teams界面右侧的球队列表，点击之后根据teamId寻找单个球队信息
      findTeam(teamId){
        findTeam(teamId).then((res)=>{
          console.log(res[0]);
          this.$bus.$emit("singleTeam",res[0])
        }).catch((err)=>{
          console.log(err)
        })
      },
      //对于teams界面右侧的球队列表，点击之后根据teamId寻找所有符合teamId的球员
      //也就是寻找单个球队的球队大名单球员
      findSquad(teamId){
        findSquad(teamId).then((res)=>{
          console.log(res);
          this.$bus.$emit("TeamSquad",res)
        }).catch((err)=>{
          console.log(err)
        })
      },

      changeTeam(){
        this.findTeam(this.singleItems.teamId);
        this.findSquad(this.singleItems.teamId);
      }
    },
    computed:{
      isActive(){
        return this.currentCountry===this.singleItems.countryName
      }
    }
  }
</script>

<style scoped>
  .single-team {
    position: relative;
    margin: 10px auto;
    width: 260px;
    height: 126px;
    background-color:#606060;
    border-radius: 12px;
    border: 1px solid #606060;
    overflow: hidden;
  }
  .title {
    text-align: center;
    width: 260px;
    height: 36px;
    line-height: 36px;
    font-size: 24px;
    background-color:#565656;
  }
  .team-logo {
    position: absolute;
    left: 0;
    top: 36px;
    width: 90px;
    height: 90px;
    /*background-color: blue;*/
  }
  .logo {
    width: 90px;
    height: 90px;
  }
  .score {
    position: absolute;
    top: 36px;
    left: 90px;
    width: 170px;
    height: 90px;
  }
  .score div {
    text-align: center;
    width: 170px;
    font-size: 24px;
    line-height: 45px;
    height: 45px;
  }
  .rank {
    /*background-color: red;*/
  }
  .results {
    /*background-color: blue;*/
  }
  .active {
    border: 1px solid #FFF566;
  }
</style>
