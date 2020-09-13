<template>
   <div class="single-item">
       <div class="player-img">
         <img :src="countryImg" alt="" class="item-img">
       </div>

       <span class="item-name">{{shortName}}</span>
       <span class="item-number">{{parseInt(countryNumber)}}号</span>

<!--       <span class="item-country">国籍:</span>-->
       <div  class="country-content">
           <img  class="country-img" :src="countryLogo" alt="" >
           <div class="country-text">{{currentNationalTeam}}</div>
       </div>

<!--       <span class="item-club">球队:</span>-->
       <div class="club-content">
           <img  class="club-img" :src="clubLogo" alt="" >
           <div class="club-text">{{currentTeam}}</div>
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
       margin-bottom: 10px;
       /*margin-left: 2px;*/
       width: 290px;
       height: 100px;
       background-color:#565656;
       border-radius: 10px;
       border: 2px solid #565656;
       overflow:hidden;
    }
    .player-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 75px;
      height: 80px;
      /*border-radius: 10px;*/
    }
    .item-img {
      /*position: absolute;*/
      /*left:3px;*/
      /*top: 5px;*/
      /*border:2px solid #ddd;*/
      /*border-radius: 10px;*/
      /*box-shadow:rgba(0,0,0,0.15) 0 0 8px;*/
      /*width:  60px;*/
      /*height: 75px;*/
      width:  80px;
      height: 100px;

    }
    .item-name {
      position: absolute;
      left:100px;
      top:8px;
      font-size: 22px;
    }
    .item-number {
      position: absolute;
      top: 10px;
      right: 5px;
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
      /*background-color: red;*/
      justify-content: space-between;
      align-items: center;
      width: 100px;
      left: 100px;
      top:  45px;
    }
    .country-content div {
      display: inline;
    }
    .country-img {
      height: 16px;
    }
    .country-text {
      line-height: 16px;
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
      justify-content: flex-start;
      /*background-color: red;*/
      align-items: center;
      width: 175px;
      left: 100px;
      top:  70px;
    }
    .club-content div {
      display: flex;
      align-items: center;
    }
    .club-img {
      height: 24px;
    }
    .club-text {

      font-size: 16px;
    }
    .active {
      /*background-color: white;*/
      /*color:#F7BA52;*/
      /*font-weight: bold;*/
      border-color:#69c0ff;
    }
</style>
