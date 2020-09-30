<template>
  <div class="login">
    <img
      src="../../assets/image/welcome/loginMove.gif"
      alt=""
      class="login-img">
<!--    <img-->
<!--      src="../../assets/image/welcome/bsu.jpg"-->
<!--      alt=""-->
<!--      class="bsu-img">-->
    <div class="logo">
      <img
        src="../../assets/image/welcome/loginSub.png"
        alt=""
        class="logo-img">
    </div>
    <p class="text">足球数据系统</p>
    <login-box></login-box>


  </div>
</template>

<script>
  import LoginBox from "../../components/content/box/LoginBox";
  export default {
    name: "Login",
    components:{
      LoginBox
    }
  }
</script>

<style scoped>
  .login {
    position: relative;
    width: 1920px;
    height: 1080px;
    background-color: #5a5a5a;
    scrollbar-width: none;
  }
  /*.login {*/
  /*  scrollbar-width: none;*/
  /*}*/
  .login-img {
    width: 1400px;
    height: 1080px;
    /*width: 800px;*/
    /*height: 600px;*/
  }
  .bsu-img {
    position: absolute;
    top:800px;
    right:95px;
    width: 308px;
    height: 106px;
    opacity: 0.62;
  }
  .logo {
    position: absolute;
    left: 1480px;
    top: 160px;
    width: 60px;
    height: 60px;
    border-radius: 20px;
    overflow: hidden;
  }
  .logo-img {
    width: 60px;
    height: 60px;
  }
  .text {
    position: absolute;
    left: 1560px;
    top: 108px;
    color: #F9BFBB;
    font-size: 48px;
  }
  .login-box {
    position: absolute;
    left: 1560px;
    top: 230px;
  }
</style>
