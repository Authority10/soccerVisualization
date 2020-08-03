<template>
  <div class="center-info">
    <slot name="country-info"></slot>
    <slot name="country-data"></slot>
    <img src="@/assets/common/enter.png" alt="" @click="enterTeam">
  </div>
</template>

<script>
  export default {
    name: "CenterInfo",
    data(){
      return{
        activeCountry:{}
      }
    },
    methods:{
      enterTeam(){
        // console.log(this.activeCountry.teamID)
        this.$router.push("/players" + this.activeCountry.teamID)
      }
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
  .center-info {
    position: fixed;
    width: 690px;
    height: 640px;
    top:  110px;
    left: 90px;
    background-color:#74b9ff;
    border: 1px solid #dcdde1;
    border-radius: 10px;
  }
  img {
    position: fixed;
    width: 56px;
    right:260px;
    bottom:26px;
  }
</style>
