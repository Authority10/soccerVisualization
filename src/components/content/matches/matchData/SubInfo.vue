<template>
  <div class="sub-info">
    <div  v-for="(singleSub,index) in newSub"  class="single-sub">
      <div>
        <el-tooltip class="item" effect="dark" :content="singleSub.subTime" placement="top-start">
        <span>{{singleSub.subInPlayer}}</span>
        </el-tooltip>
      </div>
      <div>
        <span>{{singleSub.subOutPlayer}}</span>
      </div>
      <div class="up-down">
        <img src="../../../../assets/image/sub/sub.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SubInfo",
    props:{
      subInfo:{
        type:Array
      }
    },
    computed:{
      newSub(){
        return this.subInfo.map((item) => {
         return {
           "subInPlayer": item.subInPlayer,
           "subOutPlayer": item.subOutPlayer,
           "subTime": "替换时间:" + item.subTime.toString() + "'"
         }
       })
      }
    }
  }
</script>

<style scoped>
  .sub-info {
    position: absolute;
    top: 10px;
    left: 2px;
    width: 110px;
    height: 280px;
    font-size: 16px;
    color:white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /*background-color: red;*/
  }
  .single-sub {
    position: relative;
    width: 110px;
    height: 50px;
    /*background-color: blue;*/
  }
  .up-down {
    position: absolute;
    top: 5px;
    right: 0;
    /*width: 40px;*/
    /*height: 42px;*/
    /*background-color: orange;*/
  }
  .up-down img {
    width: 35px;
    height: 35px;
  }
</style>
