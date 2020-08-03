<template>
  <div class="country-info">
   {{activeCountry.countryName}}
  </div>
</template>

<script>
  export default {
    name: "CountryInfo",
    props:{
      activeCountry:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    data(){
      return{

      }
    },

    methods:{
    }
  }
</script>

<style scoped>
  .country-info {
    position: relative;
    top:10px;
    left:20px;
    width: 650px;
    height: 170px;
    background-color:rgba(85,239,195,0.3);
    border-radius: 10px;
  }

</style>
