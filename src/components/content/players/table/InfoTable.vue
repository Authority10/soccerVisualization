<template>
  <table class="info-table">
    <tbody>
    <tr>
      <td  colspan="3">
          <img v-if="isCountryImg" src="@/assets/players/avatar_img.jpg" alt="" class="avatar-img">
          <img v-else :src="players.imgNumber.img.countryImg" alt="" class="avatar-img">

      </td>
      <td style="height:0.65rem" colspan="7">
        <div class="name-title">Name</div>
        <div class="name-content">
          <div class="concrete-name">{{players.firstName}}</div>
          <div class="concrete-name">{{players.lastName}}</div>
        </div>
      </td>
    </tr>
    <tr>
      <td style="height:0.65rem" colspan="5">
        <div class="item-title">Club</div>
        <div class="item-content flex-div">
          <img :src="players.imgNumber.img.clubLogo" alt="" class="club-img">
          <span class="img-span">{{players.currentTeam}}</span>
        </div>
      </td>
      <td style="height:0.65rem" colspan="5">
        <div class="item-title">Strong Foot</div>
        <div class="item-content flex-div">
          <img v-if="isRight" src="@/assets/foot/right-foot.png" alt="ddd" class="foot-img">
          <img v-else src="@/assets/foot/left-foot.png" alt="" class="foot-img">
          <span class="img-span">{{players.foot}}</span>
        </div>
      </td>
    </tr>
    <tr>
      <td style="height:0.65rem" colspan="5">
        <div class="item-title">BirthDate</div>
        <div class="item-content">
          <span>{{players.birthDate}}</span>
        </div>
      </td>
      <td style="height:0.65rem" colspan="5">
        <div class="item-title">Age</div>
        <div class="item-content">
          <span>{{getAge}}</span>
        </div>
      </td>
    </tr>
    <tr>
      <td style="height:0.65rem" colspan="5">
        <div class="item-title">Passport Area</div>
        <div class="item-content flex-div">
          <img :src="players.imgNumber.img.countryLogo" alt="" class="flag-img">
          <span class="img-span">{{players.currentNationalTeam}}</span>
        </div>
      </td>
      <td style="height:0.65rem" colspan="5">
        <div class="item-title">Birth Area</div>
        <div class="item-content flex-div">
          <img :src="players.imgNumber.img.birthImg" alt="" class="flag-img">
          <span class="img-span">{{players.birthArea.name}}</span>
        </div>
      </td>
    </tr>
    <tr>
      <td style="height:0.65rem" colspan="5">
        <div class="item-title">Height</div>
        <div class="item-content">
          <span>{{players.height}}cm</span>
        </div>
      </td>
      <td style="height:0.65rem" colspan="5">
        <div class="item-title">Weight</div>
        <div class="item-content">
          <span>{{players.weight}}kg</span>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: "InfoTable",
    props:{
      players:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    computed:{
      getAge(){
        //拿到出生的年份，用2020去减
        return  2020-this.players.birthDate.substr(0,4)
      },
      isRight(){
        return this.players.foot==="right"
      },
      isCountryImg(){
        return this.players.imgNumber.img.countryImg==="nan"
      }
    }
  }
</script>

<style scoped>
  .info-table {
    position: absolute;
    top: 30px;
    left: 25px;
    width: 450px;
    /*height: 630px;*/
    table-layout: fixed;
    border-collapse: collapse;
    border: 1px solid #7f8fa6
  }
  .info-table td {
    position: relative;
    border: 1px solid #7f8fa6;
    text-align:center;
  }
  .avatar-img {
    width: 132px;
    height: 168px;
  }
  .name-title {
    position: absolute;
    top:0;
    width: 313px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    color:#FDFDFD;
    background-color: #1E2E45;
  }
  .name-content {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 313px;
    top: 40px;
    height: 132px;
    /*background-color: red;*/
  }
  .concrete-name {
    color: #FDFDFD;
    font-size: 35px;
  }
  .item-title{
    position: absolute;
    top:0;
    width: 222px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    color:#FDFDFD;
    background-color: #1E2E45;
  }
  .item-content {
    position: absolute;
    top: 40px;
    width: 222px;
    height: 60px;
  }
  span:not(.img-span) {
    color: #FDFDFD;
    margin-left:auto;
    font-size: 28px;
    line-height: 80px;
  }
  .flex-div {
    width: 222px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .flex-div span {
    font-size: 20px;
    color: #FDFDFD;
  }
  .club-img {
    width: 50px;
  }
  .foot-img {
    width: 50px;
  }
  .flag-img {
    width: 60px;
  }

</style>
