<template>

  <div class="tab-control">
    <div v-for="(item,index) in titles"
         class="tab-control-item"
         :class="{active:index===currentIndex}"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>

</template>

<script>
  export default {
    name: "TabControl",
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
    position: absolute;
    width: 324px;
    top: 100px;
    display: flex;
    text-align: center;
    font-size: 20px;
    line-height: 40px;
    height: 40px;
    background-color: white;
  }
  .tab-control-item{
    flex: 1;
  }

  .tab-control-item span{
    color: #848282;
    padding:5px ;
  }
  .active span{
    color:#F7BA52;
    border-bottom: 5px solid #F7BA52;
  }
  /*子组件在被下半区调用的时候需要绑定这个类来控制top*/
  .tab-control-bottom {
    top:510px
  }
  /*子组件在被countryData调用的时候需要绑定这个类来控制tabControl*/
  .tab-control-sub {
    position: fixed;
    width: 600px;
    top: 306px;
    left: 135px;
    display: flex;
    text-align: center;
    font-size: 14px;
    line-height: 40px;
    height: 40px;
    background-color:red;
  }
</style>
