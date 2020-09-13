<template>
  <tab-bar>
<!--    动态传入color-->
    <div class="nav-item-box">
      <tab-bar-item path="/players" color="#69c0ff">
        <img slot="item-img" src="../../../assets/image/nav/player.svg" alt="">
        <!--           <span slot="item-text" class="players-text">球员</span>-->
      </tab-bar-item>

      <tab-bar-item path="/teams"   color="#fff566">
        <img slot="item-img" src="../../../assets/image/nav/team.svg" alt="">
        <!--          <span slot="item-text" class="teams-text">球队</span>-->
      </tab-bar-item>

      <tab-bar-item path="/matches" color="#ff7875">
        <img slot="item-img" src="../../../assets/image/nav/miracle.svg" alt="">
        <!--          <span slot="item-text" class="matches-text">比赛</span>-->
      </tab-bar-item>
    </div>


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
  .nav-item-box {
    width: 112px;
    height:300px;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
  }
  img {
    position: absolute;
    left: 25px;
    width: 64px;
    height: 64px;
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
