<template>
 <teams-center>
   <country-info
     slot="country-info"
     :activeCountry="activeCountry"
   ></country-info>

   <country-data
     slot="country-data" :active-players="activeCountry.players"
   ></country-data>
 </teams-center>
</template>

<script>
  import TeamsCenter from "../../../components/content/teams/centerInfo/TeamsCenter";
  import CountryInfo from "../../../components/content/teams/centerInfo/centerItems/CountryInfo"
  import CountryData from "../../../components/content/teams/centerInfo/centerItems/CountryData";
  export default {
    name: "TeamsInfo",
    props:{
      teamInfo:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    data(){
      return{
        activeCountry:{}
      }
    },
    components: {
      CountryData,
      TeamsCenter,
      CountryInfo
    },
    beforeCreate() {
      this.$bus.$on("sendCountry",(countryItems)=>{
        console.log(countryItems);
        this.activeCountry = countryItems
      });
    },
  }
</script>

<style scoped>

</style>
