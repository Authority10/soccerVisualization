<template>
    <div class="tab-control" :class="{fixed:fixed}">
      <div v-for="(item,index) in titles"
           class="tab-control-item "
           :class="{active:index===currentIndex}"
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
      fixed:false
    },
    data(){
      return{
        currentIndex:0,
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
    width: 1200px;
    height: 50px;
    top: 0;
    left: 0;
    display: flex;
    text-align: center;
    font-size: 14px;
    line-height: 40px;
    background-color: #495F78;
    /*background-color: #1E2E45;*/
  }
  .tab-control-item{
    flex: 1;
  }
  .tab-control-item span{
    color:#EAEAEA;
    font-size: 25px;
    font-weight: bold;
    padding:5px ;
  }
  .active span {
    color:#F7BA52;
    border-bottom: 6px solid #F7BA52;
  }
  .fixed {
    position: fixed;
    top: 107px;
    left: 255px;
    /*固定定位之后会覆盖掉playersTable导致吸顶效果之后无法点击*/
    /*增大层级实现遮盖效果即可点击*/
    z-index: 999;
    /*background-color: red;*/
  }
</style>
