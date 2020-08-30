<template>
  <div class="country-info">
    <div class="img-name">
      <img :src="activeCountry.img" alt="">
      <span class="country-name">{{activeCountry.countryName}}</span>
    </div>
    <country-table></country-table>
  </div>
</template>

<script>
  import countryTable from "../../../players/table/CountryTable";
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
    components:{
      countryTable
    },
    methods:{
    }
  }
</script>

<style scoped>
  .country-info {
    position: relative;
    top:40px;
    left:139px;
    width: 1210px;
    height: 200px;
    background-color:#495F78;
  }
  /*.coach,.age,.foundation-date,.times,.glory {*/
  /*  display: flex;*/
  /*  flex-direction: column;*/
  /*  text-align: center;*/
  /*}*/

  .img-name {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    width: 200px;
    height: 180px;
    top:10px;
    left:30px
  }
   .country-name {
    text-align: center;
    font-size: 28px;
    color: white;
    font-weight: bold;
  }
  img {
    width: 170px;
    margin: 0 auto;
  }


  /*.coach {*/
  /*  position: absolute;*/
  /*  top:10px;*/
  /*  left:200px*/
  /*}*/
  /*.age {*/
  /*  position: absolute;*/
  /*  top:10px;*/
  /*  left:350px*/
  /*}*/
  /*.foundation-date {*/
  /*  position: absolute;*/
  /*  top:60px;*/
  /*  left:200px*/
  /*}*/
  /*.times {*/
  /*  position: absolute;*/
  /*  top:60px;*/
  /*  left:350px;*/
  /*}*/
  /*.glory {*/
  /*  position: absolute;*/
  /*  top:10px;*/
  /*  left:500px*/
  /*}*/
   /*span:nth-child(2){*/
   /*  font-size: 20px;*/
   /*  font-weight: bold;*/
   /*}*/
</style>
