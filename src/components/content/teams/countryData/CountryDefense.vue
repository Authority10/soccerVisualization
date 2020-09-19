<template>
  <Radar :radar-data="radar" status="Defense"></Radar>
</template>

<script>
  import Radar from "../../g2plot/Radar";
  export default {
    name: "CountryDefense",
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
