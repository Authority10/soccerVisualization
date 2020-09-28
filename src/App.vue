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
    //接受matches中单场比赛的两只队伍信息
    this.$bus.$on("twoTeams",(teams)=>{
      console.log(teams);
      this.$store.commit("sendPlayers",teams)
    });
    //接受teams中单个球队信息
    this.$bus.$on("singleTeam",(singleTeam)=>{
      console.log(singleTeam);
      this.$store.commit("sendTeam",singleTeam)
    });
    //接受单个球队的阵容
    this.$bus.$on("TeamSquad",(TeamSquad)=>{
      console.log(TeamSquad);
      this.$store.commit("sendSquad",TeamSquad)
    });
  }
}
</script>

<style>

</style>
