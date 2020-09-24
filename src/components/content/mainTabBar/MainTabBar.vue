<template>
  <tab-bar>
<!--    动态传入color-->
    <div class="nav-item-box">
      <tab-bar-item path="/matches" color="#ff7875">
        <img slot="item-img" src="../../../assets/image/nav/miracle.svg" alt="">
      </tab-bar-item>

      <tab-bar-item path="/teams"   color="#fff566">
        <img slot="item-img" src="../../../assets/image/nav/team.svg" alt="">
      </tab-bar-item>

      <tab-bar-item path="/players" color="#69c0ff">
        <img slot="item-img" src="../../../assets/image/nav/player.svg" alt="">
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
    /*background-color: red;*/
  }
  img {
    position: absolute;
    left: 25px;
    width: 64px;
    height: 64px;
  }
</style>
