<template>
  <div class="players-matches">
    <span>出场记录</span>
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
 .players-matches {
   position: fixed;
   width: 1478px;
   height: 835px;
   top:  107px;
   left: 115px;
   background-color:#1E2E45;
   border: 1px solid #dcdde1;
 }
  span {
    position: absolute;
    top:17px;
    left: 80px;
    color:#FDFDFD;
    font-size: 28px;
    border-bottom: 6px solid #F7BA52;
  }
</style>
