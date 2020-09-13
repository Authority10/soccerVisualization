<template>
  <Right-list>
    <div class="list-name" slot="content-name">比赛列表</div>
  </Right-list>
</template>

<script>
  import RightList from "../../../components/content/rightList/RightList";
  export default {
    name: "MatchesList",
    components:{
      RightList
    }
  }
</script>

<style scoped>
  .list-name {
    position: absolute;
    width: 137px;
    height: 52px;
    left: 25px;
    top:  32px;
    color:#ff7875;
    background-color:#4b4b4b;
    font-size: 28px;
    text-align: center;
    line-height: 52px;
    font-weight: bold;
  }
</style>
