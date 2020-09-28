<template>
  <div class="heat-area">
    <div class="box-title">
      <div class="heat-status">
        <img src="../../../../../assets/image/players/playerData.png" alt="" >
        <span class="status-heat">活动区域</span>
      </div>

<!--      <HeatMap-->
<!--      :eventPosition="heat">-->
<!--      </HeatMap>-->
    </div>
    <div style="text-align: center">
      <img src="../../../../../assets/image/heat/heat.png" alt="" class="heat">
    </div>

  </div>
</template>

<script>
  import HeatMap from "../../../g2plot/HeatMap";
  export default {
    name: "HeatArea",
    props:{
      heatData:{
        type:Array
      }
    },
    components:{
      HeatMap
    },
    computed:{
      heat(){
        let arr = []
        for (let item of Object.keys(this.heatData[0])){
          arr.push(this.heatData[0][item])
        }
        return arr
      }
    }
  }
</script>

<style scoped>
 .heat-area {
   position: absolute;
   width: 1758px;
   height: 542px;
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
  .heat {
    width: 600px;
    height: 400px;
  }
</style>
