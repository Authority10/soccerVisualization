<template>

  <div class="tab-control">
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
      }
    },
    data(){
      return{
        currentIndex : 0
      }
    },
    methods:{
      itemClick(index){
        // console.log(index);
        this.currentIndex = index;
        this.$emit("tabClick",index)
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    position: fixed;
    width: 650px;
    top: 306px;
    left: 117px;
    display: flex;
    text-align: center;
    font-size: 14px;
    line-height: 40px;
    height: 40px;
    /*background-color:black;*/
  }
  .tab-control-item{
    flex: 1;
  }

  .tab-control-item span{
    color:black;
    /*font-weight: bold;*/
    font-size: 20px;
    padding:5px ;
    /*border: 3px solid black;*/
    /*border-radius: 5px;*/
  }
  .active span {
    color:#2980b9;
    border-bottom: 3px solid #2980b9;
    /*border-radius: 5px;*/
  }
</style>
