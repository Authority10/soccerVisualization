<template>
  <div class="player-info">
    <table class="info-table">
      <tbody>
      <tr >
        <td style="height:168px" colspan="3">
          <img :src="players.imgNumber.img.countryImg" alt="" class="info-img">
        </td>
        <td style="height:168px" colspan="7">{{players.shortName}}</td>
      </tr>
      <tr>
        <td colspan="5">club</td>
        <td colspan="5">strong foot</td>
      </tr>
      <tr>
        <td colspan="5">birthDate</td>
        <td colspan="5">Age</td>
      </tr>
      <tr>
        <td colspan="5">passport</td>
        <td colspan="5">birthArea</td>
      </tr>
      <tr>
        <td colspan="5">Height</td>
        <td colspan="5">Weight</td>
      </tr>
      </tbody>
    </table>
<!--    <div class="name-item">-->
<!--      <img :src="players.imgNumber.img.countryImg" alt="">-->
<!--      <span class="name">{{players.shortName}}</span>-->
<!--      <span class="club-text">{{players.currentTeam}}</span>-->
<!--    </div>-->
<!--    <div class="detail-info">-->
<!--        <div class="age-item">-->
<!--          <span class="age">Age</span>-->
<!--          <span class="age-text">{{getAge}}</span>-->
<!--          <span class="birth-text">{{players.birthDate}}</span>-->
<!--        </div>-->
<!--        <div class="passport-item">-->
<!--          <span class="country">Passport Area</span>-->
<!--          <img  class="country-img" :src="players.imgNumber.img.countryLogo" alt="">-->
<!--          <span class="country-text">{{players.currentNationalTeam}}</span>-->
<!--        </div>-->
<!--        <div class="birth-area-item">-->
<!--          <span class="birth-area">Birth Area</span>-->
<!--          <img  class="country-img" :src="players.imgNumber.img.birthImg" alt="">-->
<!--          <span class="birth-area-text">-->
<!--            {{players.birthArea.name}}-->
<!--          </span>-->
<!--        </div>-->
<!--        <div class="strong-foot-item">-->
<!--          <span class="strong-foot">Strong Foot</span>-->
<!--          <img v-if="isRight" src="@/assets/foot/right-foot.png" alt="">-->
<!--          <img v-else src="@/assets/foot/left-foot.png" alt="">-->
<!--          <span class="strong-foot-text">{{players.foot}}</span>-->
<!--        </div>-->
<!--        <div class="height-item">-->
<!--          <span class="height">Height</span>-->
<!--          <span class="height-text">{{players.height}}</span>-->
<!--          <span class="cm">cm</span>-->
<!--        </div>-->
<!--        <div class="weight-item" >-->
<!--          <span class="weight">Weight</span>-->
<!--          <span class="weight-text">{{players.weight}}</span>-->
<!--          <span class="kg">kg</span>-->
<!--        </div>-->
<!--    </div>-->
  </div>
</template>

<script>
  export default {
    name: "PlayerInfo",
    props:{
      players:{
        type:Object,
        default(){
          return{}
        }
      },
    },
    data(){
      return{

      }
    },
    computed:{
        getAge(){
          //拿到出生的年份，用2020去减
          return  2020-this.players.birthDate.substr(0,4)
        },
        isRight(){
          return this.players.foot==="right"
        }
    },
    methods:{
    }
  }
</script>

<style scoped>
  .player-info {
    position: absolute;
    top:60px;
    left:50px;
    width: 500px;
    height: 730px;
    background-color:#495F78;
  }
  .name-item {
    position: absolute;
    top: 10px;
    left: 20px;
    width: 120px;
  }

  .name-item img {
     width:65px;
     height: 90px;
     margin: 0 auto;
  }

  .name-item,.passport-item,.age-item,
  .height-item,.strong-foot-item,
  .birth-area-item,.weight-item {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .country-img {
    width: 30px;
    height: 20px;
    margin: 2px auto;
  }
  .strong-foot-item img {
    width: 25px;
    margin: 0 auto;
  }

  .detail-info {
    position: absolute;
    top: 10px;
    left: 130px;
    width:450px;
    height: 150px;
    display: flex;
    justify-content:space-between;
    flex-wrap: wrap;
    align-items:flex-start;
  }
  .detail-info div {
    width: 140px;
  }

  .age,.country,.birth-area,.strong-foot,.height,.weight {
    font-size: 15px;
  }

  .age-text,.height-text,.weight-text {
    font-size: 21px;
  }


  .info-table {
    position: absolute;
    top: 70px;
    left: 25px;
    width: 450px;
    height: 630px;
    table-layout: fixed;
    border-collapse: collapse;
    border: 1px solid #7f8fa6
  }
  .info-img {
    width: 132px;
    height: 210px;
  }
  .info-table td {
    border: 1px solid #7f8fa6;
    /*width: 250px;*/
    /*text-align:center;*/
  }


</style>
