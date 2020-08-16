<template>
  <tab-bar>
<!--    动态传入color-->
      <tab-bar-item path="/players" color="#537091">
           <img slot="item-img" src="../../../assets/nav/playerSub.svg" alt="">
           <span slot="item-text">球员</span>
      </tab-bar-item>

      <tab-bar-item path="/teams"   color="#F7BA52">
          <img slot="item-img" src="../../../assets/nav/teamSub.svg" alt="">
          <span slot="item-text">球队</span>
      </tab-bar-item>

      <tab-bar-item path="/matches" color="#D57666">
          <img slot="item-img" src="../../../assets/nav/matchesSub.svg" alt="">
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
