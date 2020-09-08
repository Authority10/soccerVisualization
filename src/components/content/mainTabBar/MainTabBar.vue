<template>
  <tab-bar>
<!--    动态传入color-->
      <tab-bar-item path="/players" color="#537091">
           <img slot="item-img" src="../../../assets/image/nav/playerSub.svg" alt="">
           <span slot="item-text" class="players-text">球员</span>
      </tab-bar-item>

      <tab-bar-item path="/teams"   color="#F7BA52">
          <img slot="item-img" src="../../../assets/image/nav/team.svg" alt="">
          <span slot="item-text" class="teams-text">球队</span>
      </tab-bar-item>

      <tab-bar-item path="/matches" color="#D57666">
          <img slot="item-img" src="../../../assets/image/nav/matchesSub.svg" alt="">
          <span slot="item-text" class="matches-text">比赛</span>
      </tab-bar-item>

  </tab-bar>
</template>

<script>
  import TabBarItem from "../../common/tabbar/TabBarItem";
  import TabBar from "../../common/tabbar/TabBar";
export default {
  name: 'MainTabBar',
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
  img {
    position: absolute;
    left: 25px;
    width: 68px;
    height: 68px;
  }
  .players-text {
    color:#537091;
  }
  .teams-text {
    color:#F7BA52;
  }
  .matches-text {
    color:#D57666;
  }
</style>
