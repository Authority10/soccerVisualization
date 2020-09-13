<template>
  <div class="country-info">
    <div class="box-title">
        <div class="country-status">
          <img src="../../../../../assets/image/teams/teamInfo.png" alt="" class="">
          <span>球队信息</span>
        </div>
    </div>
    <country-table></country-table>
<!--    <div class="img-name">-->
<!--      <img :src="activeCountry.img" alt="">-->
<!--      <span class="country-name">{{activeCountry.countryName}}</span>-->
<!--    </div>-->
<!--    <country-table></country-table>-->
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
    top:20px;
    left:20px;
    width: 1433px;
    height: 219px;
    border-radius: 15px;
    overflow: hidden;
    background-color:#4f4f4f;
  }
  .box-title {
    width: 1433px;
    height: 64px;
    background-color:#4b4b4b;
  }
  .country-status {
    position: absolute;
    left: 20px;
    width: 140px;
    height: 62px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span {
    color: #FFF566;
    font-size: 22px;
  }
  img {
    width: 30px;
  }
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
  /*img {*/
  /*  width: 170px;*/
  /*  margin: 0 auto;*/
  /*}*/
</style>
