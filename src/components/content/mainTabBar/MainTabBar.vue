<template>
  <tab-bar>
<!--    动态传入color-->
      <tab-bar-item path="/players" color="rgba(18,149,219,0.4)">
           <img slot="item-img" src="../../../assets/nav/player.png" alt="">
           <span slot="item-text">球员</span>
      </tab-bar-item>

      <tab-bar-item path="/teams"   color="rgba(72,211,169,0.4)">
          <img slot="item-img" src="../../../assets/nav/team.png" alt="">
          <span slot="item-text">球队</span>
      </tab-bar-item>

      <tab-bar-item path="/matches" color="rgba(216,30,6,0.4)">
          <img slot="item-img" src="../../../assets/nav/match.png" alt="">
          <span slot="item-text">比赛</span>
      </tab-bar-item>

  </tab-bar>
</template>

<script>
  import TabBarItem from "../../common/tabbar/TabBarItem";
  import TabBar from "../../common/tabbar/TabBar";
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
