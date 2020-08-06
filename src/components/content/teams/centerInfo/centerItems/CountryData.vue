<template>
  <div class="country-data">
   <span>球队阵容</span>
   <players-table :playersTable="activePlayers"></players-table>
  </div>
</template>

<script>
  import PlayersTable from "../../playersTable/PlayersTable";
  export default {
    name: "CountryData",
    props:{
      activePlayers:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    components:{
      PlayersTable
    }
  }
</script>

<style scoped>
  .country-data {
    position: relative;
    overflow: scroll;
    top:20px;
    left:20px;
    width: 650px;
    height: 400px;
    background-color:rgba(85,239,195,0.3);
    border-radius: 10px;
  }
  span {
    position: absolute;
    font-weight: bold;
    font-size: 22px;
    top:10px;
    left:20px;
  }
</style>
