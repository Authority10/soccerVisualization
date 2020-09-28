<template>
  <div class="match-pass">
    <div>
      <img :src="homePass" alt="" class="pass">
    </div>

    <div>
      <img :src="awayPass" alt="" class="pass">
    </div>
  </div>
</template>

<script>
  export default {
    name: "MatchPass",
    props:{
      homePass:{
        type:String
      },
      awayPass:{
        type:String
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
   display: flex;
   justify-content: space-around;
   align-items: center;
   border-radius: 12px;
   background-color: #555555;
 }
 .pass {
   width:380px;
   height: 240px;
 }
</style>
