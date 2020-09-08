<template>
  <div>
    <div class="img-box">
      <img src="../../../assets/image/logo/soccerLogo.png" alt="" class="logo">
    </div>
    <div class="hr-line"></div>
    <logo-title></logo-title>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import LogoTitle from "../logoTitle/LogoTitle";
  import MainTabBar from "../mainTabBar/MainTabBar";
  export default {
    name: "BasicPublic",
    components:{
      LogoTitle,
      MainTabBar
    }
  }
</script>

<style scoped>
  .img-box {
    position: fixed;
    width: 60px;
    height: 60px;
    /*border: 5px solid red;*/
    border-radius: 10px;
    border-color: red;
    overflow: hidden;
    top:20px;
    left:28px;
    z-index: 999;
  }
  .logo {
    /*position: fixed;*/
    width: 60px;
    height: 60px;
    /*top:20px;*/
    /*left:33px;*/
    /*z-index: 999;*/
  }
  .hr-line {
    position: fixed;
    /*left: 116px;*/
    top: 100px;
    left: 0;
    /*width: 1478px;*/
    width: 1920px;
    height: 1px;
    background-color:gray;
    z-index: 999;
  }
</style>
