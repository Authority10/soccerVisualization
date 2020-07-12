<template>
  <div id="app">

    <router-view/>
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
  }
}
</script>

<style>

</style>
