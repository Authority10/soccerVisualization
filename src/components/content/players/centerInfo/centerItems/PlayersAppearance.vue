<template>
  <div class="players-appearance">
    <div class="box-title">
      <div class="appearance-status">
        <img src="../../../../../assets/image/players/playerData.png" alt="">
        <span>数据对比</span>
      </div>
    </div>
    <appear-table :players-matches="playersMatches"></appear-table>
  </div>
</template>

<script>
  import AppearTable from "../../../table/AppearTable";
  export default {
    name: "PlayersMatches",
    props:{
      playersMatches:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    components:{
      AppearTable
    }
  }
</script>

<style scoped>
 .players-appearance {
   position: absolute;
   width: 1755px;
   height: 835px;
   top:  820px;
   left: 25px;
   background-color:#4f4f4f;
   overflow: hidden;
   border-radius: 15px;

 }
 .box-title {
   position: relative;
   width: 1755px;
   height: 62px;
   background-color: #4b4b4b;
 }
 .appearance-status {
   position: absolute;
   left: 20px;
   width: 140px;
   height: 62px;
   display: flex;
   justify-content: space-between;
   align-items: center;
 }
 span {
   color: #69c0ff;
   font-size: 24px;
 }
 img {
   width: 30px;
 }
</style>
