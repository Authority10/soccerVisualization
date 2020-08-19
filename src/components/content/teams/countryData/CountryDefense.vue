<template>
  <Radar :radar-data="radar"></Radar>
</template>

<script>
  import Radar from "../../players/g2plot/Radar";
  export default {
    name: "CountryDefense",
    props:{
      radar:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    components:{
      Radar
    }
  }
</script>

<style scoped>

</style>
