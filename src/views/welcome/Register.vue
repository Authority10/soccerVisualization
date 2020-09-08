<template>
  <div class="register">
    <img src="../../assets/image/welcome/register.jpg" alt="" class="register-img">
    <img
      src="../../assets/image/welcome/bsu.jpg"
      alt=""
      class="bsu-img">
    <div class="logo">
      <img
        src="../../assets/image/welcome/loginSub.png"
        alt=""
        class="logo-img">
    </div>
    <p class="text">足球数据系统</p>
    <register-box></register-box>
  </div>
</template>

<script>
  import RegisterBox from "../../components/content/box/RegisterBox";
  export default {
    name: "Register",
    components:{
      RegisterBox
    }
  }
</script>

<style scoped>
  .register {
    position: relative;
  }
 .register-img {
   position: absolute;
   right: 0;
   width: 1400px;
   height: 920px;
 }
  .bsu-img {
    position: absolute;
    left:95px;
    top:800px;
    width: 308px;
    height: 106px;
    opacity: 0.62;
  }
  .logo {
    position: absolute;
    left: 80px;
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
    left: 160px;
    top: 108px;
    color: #B1C2E6;
    font-size: 48px;
  }
</style>
