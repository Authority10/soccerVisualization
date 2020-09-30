<template>
  <div>
    <div>
      <img src="../../assets/image/welcome/back.png" alt="" class="back" @click="toHome">
    </div>
    <div class="welcome">
      <div class="login">
        <img
          src="../../assets/image/welcome/login.png"
          alt=""
          class="welcome-img"
          @click="login">
      </div>
      <div class="register">
        <img
          src="../../assets/image/welcome/register.jpg"
          alt=""
          class="welcome-img"
          @click="register">
      </div>
    </div>
    <div class="logo">
      <img src="../../assets/image/welcome/bsu.jpg" alt="" class="bsu-img">
    </div>
  </div>

</template>

<script>
  export default {
    name: "Welcome",
    // beforeCreate () {
    // 利用钩子函数获取body，修改背景颜色
    //   document.querySelector('body').setAttribute('style', 'background-color:#FFFFFF')
    // },
    methods:{
      toHome(){
        this.$router.push("/home")
      },
      login(){
        this.$router.push('/login')
      },
      register(){
        this.$router.push('/register')
      }
    }
  }
</script>

<style scoped>
 .welcome {
   position: absolute;
   top: 200px;
   left: 460px;
 }
 .back {
   position: absolute;
   top: 10px;
   left: 10px;
   width: 36px;
   height: 36px;
 }
 .login {
   display: inline-block;
   width: 500px;
   height: 375px;
   border:10px;
   border-radius: 36px 0 0 36px;
   overflow: hidden;
 }
 .register {
   display: inline-block;
   width: 500px;
   height: 375px;
   border:10px;
   border-radius: 0 36px 36px 0;
   overflow: hidden;
 }
  .welcome-img {
    width: 500px;
    height: 375px;
  }
  .logo {
    position: absolute;
    bottom: 50px;
    left: 806px;
  }
  .bsu-img {
    width: 308px;
    height: 106px;
    opacity: 0.62;
  }
</style>
