<template>
   <div class="single-item">
       <img src="@/assets/players/messi.jpg" alt="" class="item-img">

       <span class="item-name">{{players.shortName}}</span>
       <span class="item-number">{{players.number}}号</span>

       <span class="item-country">国籍:</span>
       <div  class="country-content">
         <div>
           <img  class="country-img" :src="players.countryImg" alt="" >
           <span class="country-text">{{players.currentNationalTeam}}</span>
         </div>
       </div>

       <span class="item-club">球队:</span>
       <div class="club-content">
         <div>
           <img  class="club-img" src="@/assets/club/Manchester.png" alt="" >
           <span class="club-text">{{players.currentTeam}}</span>
         </div>
       </div>
   </div>
</template>

<script>
  export default {
    name: "singleItem",
    data(){
      return{
      }
    },
    props:{
      players:{
        type:Object,
        default(){
          return{}
        }
      },
    },
    methods:{

    }
  }
</script>

<style scoped>
    .single-item {
       position: relative;
       margin-top: 5px;
       margin-left: 10px;
       width: 220px;
       height: 100px;
       background-color: rgba(255,204,204,0.4);
       border-radius: 6px;
    }
    .item-img {
      position: absolute;
      left:5px;
      top: 5px;
      width: 40px;
    }
    .item-name {
      position: absolute;
      left:52px;
      top:10px;
      font-size: 18px;
    }
    .item-number {
      position: absolute;
      top: 8px;
      left: 200px;
    }
    .item-country {
      position: absolute;
      left: 5px;
      top:45px;
    }
    .country-content {
      position: absolute;
      display: flex;
      justify-content: center;
      width: 175px;
      left: 46px;
      top:47px;
    }
    .country-content div {
      display: inline;
    }
    .country-img {
      width: 20px;
    }
    .country-text {
      font-size: 16px;
    }
    .item-club {
      position: absolute;
      left:5px;
      top:70px;
    }
    .club-content {
      position: absolute;
      display: flex;
      justify-content: center;
      width: 175px;
      left: 46px;
      top:74px;
    }
    .club-content div {
      display: flex;
      align-items: center;
    }
    .club-img {
      width: 20px;
    }
    .club-text {
      font-size: 16px;
    }
    .active {
      background-color: rgba(255,204,204,1);
    }
</style>
