<template>
  <div class="match-squad">
     <div class="home">
       <div class="home-sub">
         <sub-info
         :sub-info="homeSquad.subInfo">
         </sub-info>
       </div>
       <div class="squad">
         <img :src="homeSquad.Img" alt="" class="formation">
       </div>
       <div  class="home-name">

           <div class="logo">
             <img :src="homeSquad.Logo" alt="" >
           </div>
           <div class="name">
             {{homeName}}
           </div>

       </div>

     </div>
     <div class="away">
       <div class="away-name">
         <div class="logo">
           <img :src="awaySquad.Logo" alt="">
         </div>
         <div class="name">
           {{awayName}}
         </div>
       </div>
       <div class="squad">
         <img :src="awaySquad.Img" alt="" class="formation">
       </div>
       <div class="away-sub">
         <sub-info
           :sub-info="awaySquad.subInfo">
         </sub-info>
       </div>
     </div>
  </div>
</template>

<script>
  import SubInfo from "./SubInfo";
  export default {
    name: "MatchSquad",
    props:{
      homeSquad:{
        type:Object
      },
      awaySquad:{
        type:Object
      }
    },
    computed:{
      homeName(){
        return this.homeSquad.name.slice(0,4)
      },
      awayName(){
        return this.awaySquad.name.slice(0,4)
      },
    },
    components:{
      SubInfo
    }
  }
</script>

<style scoped>
  .match-squad {
    position: absolute;
    top: 171px;
    left: 31px;
    width: 1371px;
    height: 364px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 12px;
    background-color: #555555;
  }
  img {
    width: 60px;
    height: 60px;
  }
  .squad {
    width:464px;
    height:300px;
  }
  .formation {
    width:464px;
    height:300px;
  }
  .home {
    width: 667px;
    height: 300px;
    border-radius: 12px;
    display: flex;
    overflow: hidden;
    background-color: #5c5c5c;
  }
  .away {
    width: 667px;
    height: 300px;
    border-radius: 12px;
    display: flex;
    overflow: hidden;
    background-color: #5c5c5c;
  }
  .home-sub {
    position: relative;
    width: 114px;
    height: 300px;
  }
  .away-sub {
    position: relative;
    width: 114px;
    height: 300px;
  }
  .home-name {
    position: relative;
    width: 89px;
    height: 300px;
    font-size: 26px;
    color: white;
    /*background-color: red;*/
  }
  .away-name {
    position: relative;
    width: 89px;
    height: 300px;
    font-size: 26px;
    color: white;
  }
  .logo {
    position: absolute;
    top: 70px;
    left: 15px;
  }
  .name {
    position: absolute;
    top: 150px;
    left: 18px;
  }

</style>
