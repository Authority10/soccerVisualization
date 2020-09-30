<template>
  <div class="heat-area">
    <div class="box-title">
      <div class="heat-status">
        <img src="../../../../../assets/image/players/playerData.png" alt="" >
        <span class="status-heat">活动区域</span>
      </div>
    </div>

    <div class="heat-left">
      <heat-left
        :heat-left="heatLeft">
      </heat-left>
    </div>

    <div class="heat-right">
      <heat-right
        :heat-right="heatRight">
      </heat-right>
    </div>
    <div class="arrow-left">
      <img src="../../../../../assets/image/heatArrow/right.png" alt="" class="first-arrow">
    </div>
    <div class="arrow-right">
      <img src="../../../../../assets/image/heatArrow/right.png" alt="" class="second-arrow">
    </div>

  </div>
</template>

<script>
  import HeatLeft from "../../../g2plot/heatMap/HeatLeft";
  import HeatRight from "../../../g2plot/heatMap/HeatRight";
  export default {
    name: "HeatArea",
    props:{
      heatLeft:{
        type:Array
      },
      heatRight:{
        type:Array
      },
    },
    components:{
      HeatLeft,
      HeatRight
    },
    computed:{
    }
  }
</script>

<style scoped>
 .heat-area {
   position: absolute;
   width: 1758px;
   height: 700px;
   top:  1430px;
   left: 20px;
   background-color:#4f4f4f;
   overflow: hidden;
   border-radius: 15px;
 }
  .box-title {
    position: relative;
    width: 1770px;
    height: 62px;
    background-color: #4b4b4b;
  }
  .heat-status {
    position: absolute;
    left: 20px;
    width: 140px;
    height: 62px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
 img {
   width: 30px;
 }
 .status-heat {
   color: #69c0ff;
   font-size: 24px;
 }
 .heat-left {
   position: absolute;
   top: 100px;
   left: 50px;
   width:777px;
   height:500px;
   /*background-color: red;*/
 }
 .heat-right {
   position: absolute;
   top: 100px;
   left: 900px;
   width:777px;
   height:500px;
   /*background-color: blue;*/
 }
 .arrow-left {
   position: absolute;
   top: 580px;
   left: 80px;
   width: 300px;
   height: 100px;
   /*background-color: red;*/
 }
 .first-arrow {
   width: 150px;
   height: 50px;
 }
  .arrow-right {
    position: absolute;
    top: 580px;
    right: 110px;
    width: 300px;
    height: 100px;
    /*background-color: red;*/
  }
 .second-arrow {
   position: absolute;
   right: 0;
   width: 150px;
   height: 50px;
   transform:rotate(180deg);
 }

</style>
