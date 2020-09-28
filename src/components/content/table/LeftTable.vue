<template>
  <div class="players-detail">
    <div class="players-name" @click="showDrawer">
      <img :src="players.playerImg" alt="" class="avatar-img">
      <span class="name-title">Name</span>
      <span class="first-name">{{players.personName}}</span>
      <span class="last-name">{{players.personNameEn}}</span>
    </div>
    <div class="detail-info">
      <div class="club box" @click="boxClick">
        <div class="title">
          俱乐部
        </div>
        <div class="content">
          <div>
            <img :src="players.clubImg" alt="" class="club-img">
          </div>
          <div>
            {{players.teamName}}
          </div>
        </div>
      </div>
      <div class="foot box" @click="boxClick">
        <div class="title">
          球场位置
        </div>
        <div class="content">
          <div>
            {{players.personPosition}}
          </div>
        </div>
      </div>
      <div class="birth-date box" @click="boxClick">
        <div class="title">
          出生日期
        </div>
        <div class="content">
          <div>
            {{players.birth}}
          </div>
        </div>
      </div>
      <div class="age box" @click="boxClick">
        <div class="title">
          年龄
        </div>
        <div class="content">
          <div>
            {{parseInt(players.age)}}
          </div>
        </div>
      </div>
      <div class="passport-area box" @click="boxClick">
        <div class="title">
          国籍信息
        </div>
        <div class="content">
          <div>
            <img :src="players.countryImg" alt="" class="flag-img">
          </div>
          <div>
            {{players.countryName}}
          </div>
        </div>
      </div>
      <div class="birth-area box" @click="boxClick">
        <div class="title">
          出生国家
        </div>
        <div class="content">
          <div>
            <img :src="players.countryImg" alt="" class="flag-img">
          </div>
          <div>
            {{players.countryName}}
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
    name: "RightTable",
    data(){
      return{

      }
    },
    props:{
      players:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    computed:{
      // getAge(){
      //   //拿到出生的年份，用2020去减
      //   return  2020-this.players.birthDate.substr(0,4)
      // },
      // isRight(){
      //   return this.players.foot==="right"
      // },
      // isCountryImg(){
      //   return this.players.imgNumber.img.countryImg==="nan"
      // }
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
      },
      showDrawer(){
        this.$emit("showDrawer")
      }
    },
    components:{

    }
  }
</script>

<style scoped>
  .players-detail {
    position: absolute;
    width: 500px;
    height: 868px;
    /*background-color: red;*/
  }
  .players-name {
    position: absolute;
    top: 23px;
    left: 25px;
    width: 451px;
    height: 182px;
    border-radius: 12px;
    background-color: #585858;
    overflow: hidden;
  }
  .name-title {
    display: block;
    margin-right: 130px;
    width: 320px;
    height: 40px;
    color: white;
    font-size: 25px;
    line-height: 40px;
    text-align: center;
    background-color: #555555;
  }
  .first-name {
    display: block;
    margin-right: 130px;
    margin-top: 15px;
    width: 320px;
    height: 40px;
    color: white;
    font-size: 30px;
    line-height: 40px;
    text-align: center;
  }
  .last-name {
    display: block;
    margin-right: 130px;
    margin-top: 15px;
    width: 320px;
    height: 40px;
    color: white;
    font-size: 30px;
    line-height: 40px;
    text-align: center;
  }
  .detail-info {
    position: absolute;
    top: 224px;
    left: 25px;
    width: 451px;
    height: 652px;
    /*margin: 13px auto;*/
    /*background-color: blue;*/
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .box {
    width: 220px;
    height: 116px;
    border-radius: 15px;
    border: 1px solid #555555;
    background-color: #555555;
    overflow: hidden;
  }
  .club,.foot,.passport-area,.birth-area {
    width: 220px;
    height: 160px;
  }

  .club .content,.foot .content,.passport-area .content,.birth-area .content{
    display: flex;
    /*background-color: red;*/
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: white;
    height: 120px;
    /*font-weight: bold;*/
    font-size: 22px;
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
    height: 76px;
    /*font-weight: bold;*/
    font-size: 22px;
  }
  .club-img {
    width: 50px;
  }
  .foot-img {
    width: 50px;
  }
  .flag-img {
    width: 50px;
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
    right: 0;
    width: 130px;
    height: 180px;
    /*width: 30px;*/
    /*height:30px;*/
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
