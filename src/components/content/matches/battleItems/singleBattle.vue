<template>
  <div class="single-battle">
    <div class="home">
      {{singleBattle.home.name}}
      <img :src="singleBattle.home.img" alt="" class="team-img">
    </div>
    <div class="battle">
      <div class="battle-box"></div>
      <img src="../../../../assets/image/matches/battle.svg" alt="" class="battle-img">
    </div>
    <div class="away">
      {{singleBattle.away.name}}
      <img :src="singleBattle.away.img" alt="" class="team-img">
    </div>
  </div>
</template>

<script>
  export default {
    name: "singleBattle",
    props:{
      singleBattle:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .single-battle {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 10px;
    width: 280px;
    height: 80px;
    background-color:#565656;
    border-radius: 12px;
    border: 1px solid #565656;
    overflow: hidden;
    font-size: 18px;
    color: white;
    text-align: center;
  }
  .battle {
    width: 80px;
    height: 80px;
    background-color:#747474;
  }
  .battle-box {
   width: 80px;
   height: 27px;
   background-color:#565656;
  }
  .battle-img{
    width: 30px;
    margin:20px auto;
  }
  .home {
    /*width: 100px;*/
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /*background-color: red;*/
  }
  .away {
    /*width: 100px;*/
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /*background-color: red;*/
  }
  .team-img {
    width: 100px;
    height: 53px;
  }
</style>
