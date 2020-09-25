<template>
  <div id="app">

    <keep-alive>
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      teams:{},
      screenWidth: 0,     // 屏幕宽
      screeHeight: 0,    // 屏幕高
    }
  },
  mounted(){
    // const that = this;
    // window.onresize = () => {
    //   return (() => {
    //     window.screenWidth = document.body.clientWidth
    //     that.screenWidth = window.screenWidth
    //     console.log(that.screenWidth)
    //   })()
    // };

    this.$bus.$on("sendTeams",(teams)=>{
      console.log(teams);
      this.$store.commit("sendPlayers",teams)
    });
  }
}
</script>

<style>

</style>
