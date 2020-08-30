<template>
  <div>
    <img src="../../../assets/logo/soccerLogo.png" alt="" class="logo">
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
  .logo {
    position: fixed;
    width: 105px;
    top:2px;
    left: 3px;
    z-index: 999;
  }
  .hr-line {
    position: fixed;
    left: 116px;
    top: 100px;
    width: 1478px;
    height: 8px;
    background-color:#8395a7;
  }
</style>
