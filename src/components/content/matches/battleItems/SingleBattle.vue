<template>
  <div class="single-battle" @click="changeMatch">
    <div class="teams-names">
      <div class="home-name">
        <span>{{singleBattle.HomeTeam}}</span>
      </div>
      <div class="away-name">
        <span>{{singleBattle.AwayTeam}}</span>
      </div>
    </div>
    <div class="home-img">
      <img :src="singleBattle.homeTeamImg" alt="">
    </div>
    <div class="date">
      {{singleBattle.Date}}
    </div>
    <div class="score">
      {{singleBattle.Score_label}}
    </div>
    <div class="away-img">
      <img :src="singleBattle.awayTeamImg" alt="">
    </div>
  </div>
</template>

<script>
  import {findMatches} from "../../../../network/matches"
  export default {
    name: "singleBattle",
    props:{
      singleBattle:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
    },
    methods:{
      findMatches(matchId){
        findMatches(matchId).then(res=>{
          console.log(res[0])
          this.$bus.$emit("sendTeams",res[0]["teams"])
        })
      },
      changeMatch(){
        // console.log(this.singleBattle.matchId)
        this.findMatches(this.singleBattle.matchId)
      }
    }
  }
</script>

<style scoped>
  .single-battle {
    position: relative;
    width: 260px;
    height: 90px;
    background-color:#606060;
    border-radius: 12px;
    border: 1px solid #4b4b4b;
    overflow: hidden;
    color: white;
    text-align: center;
  }
  .teams-names {
    display: flex;
    justify-content: space-between;
    width:260px;
    height:30px;
    background-color: #565656;
  }
  .home-name {
    position: relative;
    font-size: 16px;
    width: 120px;
    height: 30px;
    /*background-color: blue;*/
  }
  .home-name span {
    position: absolute;
    top: 5px;
    left: 0;
    /*background-color: orange;*/
  }
  .away-name {
    position: relative;
    font-size: 16px;
    width: 120px;
    height: 30px;
    /*background-color: blue;*/
  }
  .away-name span {
    position: absolute;
    top: 5px;
    right: 0;
    /*background-color: orange;*/
  }
  .home-img {
    position:absolute;
    top: 30px;
    left: 0;
    width: 60px;
    height: 60px;
    /*background-color: yellow;*/
  }
  .home-img img {
    width: 60px;
    height: 60px;
  }
  .date {
    position: absolute;
    top: 30px;
    left: 60px;
    width: 140px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    font-size: 16px;
    color: white;
    /*background-color: red;*/
  }
  .score {
    position: absolute;
    top: 55px;
    left: 60px;
    width: 140px;
    height: 35px;
    font-size: 20px;
    line-height: 35px;
    text-align: center;
    color: white;
    /*background-color: yellow;*/
  }
  .away-img {
    position: absolute;
    right: 0;
    top: 30px;
    width: 60px;
    height: 60px;
    /*background-color: yellow;*/
  }
  .away-img img {
    width:  60px;
    height: 60px;
  }
  .active {
    /*background-color: white;*/
    /*color:#F7BA52;*/
    /*font-weight: bold;*/
    border-color:#ff7875;
  }
</style>
