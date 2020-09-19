<template>
  <div>
    <div class="players-name">
      <img v-if="isCountryImg" src="../../../assets/image/players/avatar_img.jpg" alt="" class="avatar-img">
      <img v-else :src="players.imgNumber.img.countryImg" alt="" class="avatar-img">
      <span class="name-title">Name</span>
      <span class="first-name">{{players.firstName}}</span>
      <span class="last-name">{{players.lastName}}</span>
    </div>
    <div class="detail-info">
        <div class="club box" @click="boxClick">
           <div class="title">
              俱乐部
           </div>
           <div class="content">
             <div>
               <img :src="players.imgNumber.img.clubLogo" alt="" class="club-img">
             </div>
             <div>
               {{players.currentTeam}}
             </div>
           </div>
        </div>
        <div class="foot box" @click="boxClick">
          <div class="title">
            惯用脚
          </div>
          <div class="content">
            <div>
              <img v-if="isRight" src="../../../assets/image/foot/right-foot.png" alt="ddd" class="foot-img">
              <img v-else src="../../../assets/image/foot/left-foot.png" alt="" class="foot-img">
            </div>
            <div>
              {{players.foot}}
            </div>
          </div>
        </div>
        <div class="birth-date box" @click="boxClick">
          <div class="title">
            出生日期
          </div>
          <div class="content">
            <div>
              {{players.birthDate}}
            </div>
          </div>
        </div>
        <div class="age box" @click="boxClick">
          <div class="title">
            年龄
          </div>
          <div class="content">
            <div>
              {{getAge}}
            </div>
          </div>
        </div>
        <div class="passport-area box" @click="boxClick">
          <div class="title">
            国籍信息
          </div>
          <div class="content">
            <div>
              <img :src="players.imgNumber.img.countryLogo" alt="" class="flag-img">
            </div>
            <div>
              {{players.currentNationalTeam}}
            </div>
          </div>
        </div>
        <div class="birth-area box" @click="boxClick">
          <div class="title">
            出生国家
          </div>
          <div class="content">
            <div>
              <img :src="players.imgNumber.img.birthImg" alt="" class="flag-img">
            </div>
            <div>
              {{players.birthArea.name}}
            </div>
          </div>
        </div>
        <div class="height box" @click="boxClick">
          <div class="title">
            身高
          </div>
          <div class="content">
            <div>
              {{players.height}}CM
            </div>
          </div>
        </div>
        <div class="weight box" @click="boxClick">
          <div class="title">
            体重
          </div>
          <div class="content">
            <div>
              {{players.weight}}KG
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PlayerTable",
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
    },
    methods:{
      boxClick(){
        var box = document.querySelectorAll(".box")
        for (var i = 0;i<box.length;i++){
          //for循环内找不到this指向?
          box[i].onclick = function(){
            for (var j = 0;j<box.length;j++){
              box[j].style.border = "1px solid #555555"
            }
            //函数内可以找到this指向，指向函数调用者
            this.style.border = "1px solid #69c0ff"
          };
        }
      }
    }
  }
</script>

<style scoped>
  .players-name {
    position: relative;
    /*top: 20px;*/
    width: 300px;
    height: 180px;
    margin: 10px auto;
    border-radius: 15px;
    background-color: #585858;
    overflow: hidden;
  }
  .name-title {
    display: block;
    margin-left: 130px;
    width: 170px;
    height: 40px;
    color: white;
    font-size: 25px;
    line-height: 40px;
    text-align: center;
    background-color: #555555;
  }
  .first-name {
    display: block;
    margin-left: 130px;
    margin-top: 15px;
    width: 170px;
    height: 40px;
    color: white;
    font-size: 30px;
    line-height: 40px;
    text-align: center;
  }
  .last-name {
    display: block;
    margin-left: 130px;
    margin-top: 15px;
    width: 170px;
    height: 40px;
    color: white;
    font-size: 30px;
    line-height: 40px;
    text-align: center;
  }
  .detail-info {
    width: 300px;
    height: 460px;
    margin: 13px auto;
    /*background-color: red;*/
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .box {
    width: 140px;
    height: 100px;
    border-radius: 15px;
    border: 2px solid #555555;
    background-color: #555555;
    overflow: hidden;
  }
  .title {
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: white;
    font-size: 18px;
    background-color: #525252;
  }
  .content {
    display: flex;
    /*background-color: red;*/
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    height: 60px;
    /*font-weight: bold;*/
    font-size: 20px;
  }
  .club-img {
    width: 30px;
  }
  .foot-img {
    width: 30px;
  }
  .flag-img {
    width: 30px;
  }
  /*.info-table {*/
  /*  position: absolute;*/
  /*  top: 70px;*/
  /*  left: 45px;*/
  /*  width: 450px;*/
  /*  !*height: 630px;*!*/
  /*  table-layout: fixed;*/
  /*  border-collapse: collapse;*/
  /*  border: 1px solid #7f8fa6*/
  /*}*/
  /*.info-table td {*/
  /*  position: relative;*/
  /*  border: 1px solid #7f8fa6;*/
  /*  text-align:center;*/
  /*}*/
  .avatar-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 130px;
    height: 180px;
    /*width: 100px;*/
    /*height: 138px;*/
  }
  /*.name-title {*/
  /*  position: absolute;*/
  /*  top:0;*/
  /*  width: 313px;*/
  /*  height: 40px;*/
  /*  line-height: 40px;*/
  /*  text-align: center;*/
  /*  font-size: 20px;*/
  /*  color:#FDFDFD;*/
  /*  background-color: #1E2E45;*/
  /*}*/
  /*.name-content {*/
  /*  position: absolute;*/
  /*  display: flex;*/
  /*  flex-direction: column;*/
  /*  align-items: center;*/
  /*  justify-content: space-around;*/
  /*  width: 313px;*/
  /*  top: 40px;*/
  /*  height: 132px;*/
  /*  !*background-color: red;*!*/
  /*}*/
  /*.concrete-name {*/
  /*  color: #FDFDFD;*/
  /*  font-size: 35px;*/
  /*}*/
  /*.item-title{*/
  /*  position: absolute;*/
  /*  top:0;*/
  /*  width: 222px;*/
  /*  height: 40px;*/
  /*  line-height: 40px;*/
  /*  text-align: center;*/
  /*  font-size: 20px;*/
  /*  color:#FDFDFD;*/
  /*  background-color: #1E2E45;*/
  /*}*/
  /*.item-content {*/
  /*  position: absolute;*/
  /*  top: 40px;*/
  /*  width: 222px;*/
  /*  height: 60px;*/
  /*}*/
  /*span:not(.img-span) {*/
  /*  color: #FDFDFD;*/
  /*  margin-left:auto;*/
  /*  font-size: 28px;*/
  /*  line-height: 80px;*/
  /*}*/
  /*.flex-div {*/
  /*  width: 222px;*/
  /*  height: 90px;*/
  /*  display: flex;*/
  /*  flex-direction: column;*/
  /*  justify-content: center;*/
  /*  align-items: center;*/
  /*}*/
  /*.flex-div span {*/
  /*  font-size: 20px;*/
  /*  color: #FDFDFD;*/
  /*}*/
  /*.club-img {*/
  /*  width: 50px;*/
  /*}*/
  /*.foot-img {*/
  /*  width: 50px;*/
  /*}*/
  /*.flag-img {*/
  /*  width: 60px;*/
  /*}*/

</style>
