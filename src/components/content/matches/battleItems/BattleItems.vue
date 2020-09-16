<template>
  <div class="match-items">
    <single-battle
    v-for="(item,index) in battleItems"
    :single-battle="item"
    :key="index"></single-battle>
  </div>
</template>

<script>
  import singleBattle from "./singleBattle";
  export default {
    name: "BattleItems",
    props:{
      battleItems:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      singleBattle
    }
  }
</script>

<style scoped>
  .match-items {
    position: absolute;
    top:40px;
    left: 12px;
    /*background-color:red;*/
    width: 280px;
    height: 560px;
  }
  .match-group-second {
    top:640px;
  }
  .match-group-third {
    top: 1245px;
    height: 400px;
  }
</style>
