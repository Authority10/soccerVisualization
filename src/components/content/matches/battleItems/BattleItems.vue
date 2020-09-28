<template>
  <div class="match-items">
    <single-battle
      v-for="(item,index) in battleItems"
      :single-battle="item"
      :key="index"
      :class="{active:currentIndex===index}"
      @click.native="battleClick(index)">
    </single-battle>
  </div>
</template>

<script>
  import SingleBattle from "./SingleBattle";
  export default {
    name: "BattleItems",
    props:{
      battleItems:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return {
        currentIndex:0
      }
    },
    components:{
      SingleBattle
    },
    methods:{
      battleClick(index){
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
  .match-items {
    position: absolute;
    left: 31px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /*background-color:red;*/
    width: 260px;
    height: 930px;
  }
</style>
