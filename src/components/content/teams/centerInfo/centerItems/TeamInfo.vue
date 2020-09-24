<template>
  <div class="country-info">
    <div class="box-title">
        <div class="country-status">
          <img src="../../../../../assets/image/teams/teamInfo.png" alt="" class="">
          <span>球队信息</span>
        </div>
    </div>
    <team-table
    color="#FFF566"
    :titles="['国家','主教练','成立时间','平均年龄','参赛次数','主要荣誉']"
    :content="['俄罗斯','克洛普','1996-10-04','24','20','冠军']">
    </team-table>
<!--    <div class="img-name">-->
<!--      <img :src="activeCountry.img" alt="">-->
<!--      <span class="country-name">{{activeCountry.countryName}}</span>-->
<!--    </div>-->
<!--    <country-table></country-table>-->
  </div>
</template>

<script>
  import TeamTable from "../../../table/TeamTable";
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
      TeamTable
    },
    methods:{
    }
  }
</script>

<style scoped>
  .country-info {
    position: absolute;
    top:23px;
    left:20px;
    width: 468px;
    height: 470px;
    border-radius: 12px;
    overflow: hidden;
    background-color:#4f4f4f;
  }
  .box-title {
    width: 468px;
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
</style>
