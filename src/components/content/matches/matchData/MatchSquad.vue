<template>
  <div class="match-squad">

     <div>
       <img :src="homeImg" alt="">
     </div>

     <div>
       <img :src="awayImg" alt="">
     </div>

  </div>
</template>

<script>
  export default {
    name: "MatchSquad",
    props:{
      homeImg:{
        type:String
      },
      awayImg:{
        type:String
      }
    }
  }
</script>

<style scoped>
  .match-squad {
    position: absolute;
    top: 171px;
    left: 31px;
    width: 1371px;
    height: 372px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 12px;
    background-color: #555555;
  }
</style>
