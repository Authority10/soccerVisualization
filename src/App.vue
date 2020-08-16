<template>
  <div id="app">

    <keep-alive>
      <router-view/>
    </keep-alive>

    <img src="../src/assets/logo/logo.jpg" alt="" class="logo">

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
    width: 110px;
    top:2px;
    left: 3px;
    z-index: 999;
  }
</style>
