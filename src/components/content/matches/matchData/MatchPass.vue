<template>
  <div class="match-pass">

    <div class="home">
      <img :src="homePass.Img" alt="" class="home-pass">
      <div class="home-team">
        <div>
          <img :src="homePass.Logo" alt="">
        </div>
        <div>
          {{home}}
        </div>
      </div>
    </div>


    <div class="away">
      <div class="away-team">
        <div>
          <img :src="awayPass.Logo" alt="">
        </div>
        <div>
          {{away}}
        </div>
      </div>

      <img :src="awayPass.Img" alt="" class="away-pass">
    </div>
  </div>
</template>

<script>
  export default {
    name: "MatchPass",
    props:{
      homePass:{
        type:Object
      },
      awayPass:{
        type:Object
      },
    },
    computed:{
      home(){
        return this.homePass.name.slice(0,4)
      },
      away(){
        return this.awayPass.name.slice(0,4)
      }
    }
  }
</script>

<style scoped>
 .match-pass {
   position: absolute;
   top: 171px;
   left: 31px;
   width: 1371px;
   height: 364px;
   /*display: flex;*/
   /*justify-content: space-between;*/
   /*align-items: center;*/
   border-radius: 12px;
   background-color: #555555;
 }
 img {
   width: 80px;
   height: 80px;
 }
 .home-pass {
   width:537px;
   height:347px;
 }
 .away-pass {
   width:537px;
   height:347px;
 }
 .home {
   position: absolute;
   top: 10px;
   left: 10px;
   width: 637px;
   height:347px;
   font-size: 24px;
   color: white;
   background-color: blue;
 }
 .away {
   position: absolute;
   top: 10px;
   right: 10px;
   width: 637px;
   height:347px;
   font-size: 24px;
   color: white;
   background-color: blue;
 }
  .home-team {
    position: absolute;
    top: 0;
    left: 537px;
    width: 120px;
    height: 347px;
    border-radius: 0 12px 12px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #5c5c5c;
  }
  .away-team {
    position: absolute;
    top: 0;
    right: 537px;
    width: 120px;
    height: 347px;
    border-radius: 12px 0  0 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #5c5c5c;
  }
  .away-pass {
    position: absolute;
    right: 0;
  }
</style>
