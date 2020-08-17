<template>
  <div id="app">

    <keep-alive>
      <router-view/>
    </keep-alive>

    <img src="../src/assets/logo/soccerLogo.png" alt="" class="logo">
    <div class="hr-line"></div>
    <logo-title></logo-title>
    <main-tab-bar></main-tab-bar>

  </div>
</template>

<script>
  import MainTabBar  from "./components/content/mainTabBar/MainTabBar";
  import LogoTitle from "./components/content/logoTitle/LogoTitle";
export default {
  name: 'App',
  components: {
    MainTabBar,
    LogoTitle
  },
  created() {

  }
}
</script>

<style>
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
