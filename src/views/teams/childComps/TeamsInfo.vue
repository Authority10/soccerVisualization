<template>
 <teams-center>
 </teams-center>
</template>

<script>
  import TeamsCenter from "../../../components/content/teams/centerInfo/TeamsCenter";
  import CountryInfo from "../../../components/content/teams/centerInfo/centerItems/TeamInfo"
  import CountryData from "../../../components/content/teams/centerInfo/centerItems/TeamData";
  export default {
    name: "TeamsInfo",
    data(){
      return{
      }
    },
    watch:{

    },
    components: {
      CountryData,
      TeamsCenter,
      CountryInfo
    },
    // beforeCreate() {
    //   this.$bus.$on("sendCountry",(countryItems)=>{
    //     console.log(countryItems);
    //     this.activeCountry = countryItems
    //   });
    // },
  }
</script>

<style scoped>

</style>
