<template>
   <div class="single-item">
       <div class="player-img">
         <img :src="playerImg" alt="" class="item-img">
       </div>

       <span class="item-name">{{personName}}</span>
       <span class="item-number">{{personNum}}号</span>

<!--       <span class="item-country">国籍:</span>-->
       <div  class="country-content">
           <img  class="country-img" :src="countryImg" alt="" >
           <div class="country-text">中国</div>
       </div>

<!--       <span class="item-club">球队:</span>-->
       <div class="club-content">
           <img  class="club-img" :src="clubImg" alt="" >
           <div class="club-text">{{teamName}}</div>
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
      playerImg(){
        return this.players.playerImg
      },
      personName(){
        return this.players.personName
      },
      personNum(){
        return this.players.personNum
      },
      countryImg(){
        return this.players.countryImg
      },
      clubImg(){
        return this.players.clubImg
      },
      teamName(){
        return this.players.teamName
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
