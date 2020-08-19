<template>
   <div class="single-item">
       <div class="player-img">
         <img :src="countryImg" alt="" class="item-img">
       </div>

       <span class="item-name">{{shortName}}</span>
       <span class="item-number">{{parseInt(countryNumber)}}号</span>

       <span class="item-country">国籍:</span>
       <div  class="country-content">
         <div>
           <img  class="country-img" :src="countryLogo" alt="" >
           <span class="country-text">{{currentNationalTeam}}</span>
         </div>
       </div>

       <span class="item-club">球队:</span>
       <div class="club-content">
         <div>
           <img  class="club-img" :src="clubLogo" alt="" >
           <span class="club-text">{{currentTeam}}</span>
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
    computed:{
      countryImg(){
        return this.players.imgNumber.img.countryImg
      },
      shortName(){
        return this.players.shortName
      },
      countryNumber(){
        return this.players.imgNumber.number.countryNumber
      },
      countryLogo(){
        return this.players.imgNumber.img.countryLogo
      },
      currentNationalTeam(){
        return this.players.currentNationalTeam
      },
      clubLogo(){
        return this.players.imgNumber.img.clubLogo
      },
      currentTeam(){
        return this.players.currentTeam
      }
    },
    methods:{

    }
  }
</script>

<style scoped>
    .single-item {
       position: relative;
       color:#FDFDFD;
       margin-top: 10px;
       margin-left: 5px;
       width: 270px;
       height: 120px;
       background-color: #1E2E45;
       border-radius: 10px;
    }
    .player-img {
      position: relative;
      width: 75px;
      height: 80px;
      border-radius: 10px;
    }
    .item-img {
      position: absolute;
      left:3px;
      top: 5px;
      border:2px solid #ddd;
      border-radius: 10px;
      box-shadow:rgba(0,0,0,0.15) 0 0 8px;
      width:  60px;
      height: 75px;

    }
    .item-name {
      position: absolute;
      left:75px;
      top:10px;
      font-size: 22px;
    }
    .item-number {
      position: absolute;
      top: 10px;
      left: 222px;
      font-size: 20px;
    }
    .item-country {
      position: absolute;
      left: 70px;
      top:60px;
    }
    .country-content {
      position: absolute;
      display: flex;
      justify-content: center;
      width: 175px;
      left: 80px;
      top:  65px;
    }
    .country-content div {
      display: inline;
    }
    .country-img {
      height: 12px;
    }
    .country-text {
      font-size: 16px;
    }
    .item-club {
      position: absolute;
      left:70px;
      top:90px;
    }
    .club-content {
      position: absolute;
      display: flex;
      justify-content: center;
      width: 175px;
      left: 90px;
      top:  90px;
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
      background-color: white;
      color:#F7BA52;
      font-weight: bold;
    }
</style>
