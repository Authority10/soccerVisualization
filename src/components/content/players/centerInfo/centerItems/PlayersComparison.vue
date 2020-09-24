<template>
  <div class="players-appearance">
    <div class="box-title">
      <div class="appearance-status">
        <img src="../../../../../assets/image/players/playerData.png" alt="">
        <span>统计信息</span>
      </div>
    </div>
    <tab-control-sub
      class="player-use"
      ref="tab"
      :titles="['进攻数据','防守数据','组织数据','传球数据']"
      :fixed="fixed"
      @tabClick="tabClick"
      color="#69c0ff">
    </tab-control-sub>

    <comparison-table :players-matches="playersMatches">
    </comparison-table>

  </div>
</template>

<script>
  import ComparisonTable from "../../../table/ComparisonTable";
  import TabControlSub from "../../../../common/tabControl/TabControlSub";
  export default {
    name: "PlayersComparison",
    props:{
      playersMatches:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    data(){
      return {
        fixed:false
      }
    },
    components:{
      ComparisonTable,
      TabControlSub
    },
    methods:{
      tabClick(index){
        switch (index) {
          case 0:
            console.log(0)
            break;
          case 1:
            console.log(1)
            break;
          case 2:
            console.log(2)
            break;
          case 3:
            console.log(3)
            break
        }
      },
    }
  }
</script>

<style scoped>
 .players-appearance {
   position: absolute;
   width: 1758px;
   height: 425px;
   top:  975px;
   left: 20px;
   background-color:#4f4f4f;
   overflow: hidden;
   border-radius: 12px;
 }
 .box-title {
   position: relative;
   width: 1770px;
   height: 62px;
   background-color: #4b4b4b;
 }
 .appearance-status {
   position: absolute;
   left: 20px;
   width: 140px;
   height: 62px;
   display: flex;
   justify-content: space-between;
   align-items: center;
 }
 span {
   color: #69c0ff;
   font-size: 24px;
 }
 img {
   width: 30px;
 }
</style>
