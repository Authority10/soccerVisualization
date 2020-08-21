<template>
  <Radar :radar-data="radar" status="Attack"></Radar>
</template>

<script>
  import Radar from "../../players/g2plot/Radar";
  export default {
    name: "CountryAttack",
    props:{
      radar:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    data(){
      return{

      }
    },
    components:{
      Radar
    }
  }
</script>

<style scoped>

</style>
