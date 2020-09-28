<template>
  <div class="match-squad">

     <div>
       <img :src="homeImg" alt="" class="squad">
     </div>

     <div>
       <img :src="awayImg" alt="" class="squad">
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
    height: 364px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 12px;
    background-color: #555555;
  }
  .squad {
    width:380px;
    height: 240px;
  }
</style>
