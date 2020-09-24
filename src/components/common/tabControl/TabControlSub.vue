<template>
    <div class="tab-control" :class="{fixed:fixed}">
      <div v-for="(item,index) in titles"
           class="tab-control-item"
           :style="index===currentIndex?personal:unPersonal"
           @click="itemClick(index)">
        <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
  export default {
    name: "TabControlSub",
    props:{
      titles:{
        type:Array,
        default(){
          return[]
        }
      },
      fixed:Boolean,
      color:String
    },
    data(){
      return{
        currentIndex:0,
        personal:{
          "color":this.color,
          "border":"1px solid "+this.color,
          "background-color":"#828282",
          "opacity":1
        },
        unPersonal:{
          "color":this.color,
          "border":"1px solid #5a5a5a",
          "opacity":1
        },
      }
    },
    methods:{
      itemClick(index){
        // console.log(index);
        this.currentIndex = index;
        this.$emit("tabClick",index)
      },
    },
  }
</script>

<style scoped>
  .tab-control{
    position: absolute;
    width: 1371px;
    height: 80px;
    top: 80px;
    left: 31px;
    font-size: 20px;
    border-radius: 12px;
    background-color:#555555;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /*background-color: #1E2E45;*/
  }
  /*在player界面的球员对比的导航条需要使用更大的宽度*/
  .player-use {
    width: 1709px;
    left: 26px;
  }
  .tab-control-item{
    border-radius: 15px;
    text-align: center;
    line-height: 50px;
    background-color:#5a5a5a;
    width: 150px;
    height: 50px;
    border: 1px solid #5a5a5a;
    /*flex: 1;*/
  }
  .tab-control-item span{
    font-size: 25px;
    /*font-weight: bold;*/
    padding:5px ;
  }
  /*.active {*/
  /*  border: 1px solid #FFF566;*/
  /*}*/
  /*.active span {*/
  /*  color:#F7BA52;*/
  /*  border: 6px solid #F7BA52;*/
  /*}*/

  .fixed {
    position: fixed;
    top: 100px;
    left: 163px;
    /*background-color: black;*/
    /*固定定位之后会覆盖掉playersTable导致吸顶效果之后无法点击*/
    /*增大层级实现遮盖效果即可点击*/
    z-index: 999;
    /*background-color: red;*/
  }
</style>
