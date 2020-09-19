<template>
  <Radar :radar-data="radar" status="Attack"></Radar>
</template>

<script>
  import Radar from "../../g2plot/Radar";
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
