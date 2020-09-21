<template>
  <div class="tab-control" :class="{secondFixed:secondFixed}">
    <div v-for="(item,index) in titles"
         class="tab-control-item"
         @click="itemClick(index)">
      <span :style="index===currentIndex?personal:unPersonal">{{item}}</span>
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
      },
      secondFixed:Boolean,
      color:String
    },
    data(){
      return{
        currentIndex : 0,
        //动态传入颜色
        personal:{
          "color":this.color,
          "borderBottom":"4px solid "+this.color,
          "opacity":1
        },
        unPersonal:{
          "color":this.color,
          "opacity":0.5
        },
      }
    },
    computed:{

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
    top: 0;
    display: flex;
    text-align: center;
    font-size: 20px;
    line-height: 40px;
    height: 40px;
    background-color:#4b4b4b;
  }
  .tab-control-item{
    flex: 1;
  }

  /*.tab-control-item span{*/
  /*  !*color: #FF7875;*!*/
  /*  padding:5px ;*/
  /*  !*设置透明度*!*/
  /*  opacity: 0.5;*/
  /*}*/
  /*.active span{*/
  /*  color:#FF7875;*/
  /*  border-bottom: 5px solid #FF7875;*/
  /*  !*设置透明度*!*/
  /*  opacity: 1;*/
  /*}*/

  /*子组件在被team界面右侧下半区调用的时候需要绑定这个类来控制top*/
  .team-tab-bottom {
    top:420px
  }
  .match-tab-first {
    position: fixed;
    top:100px;
    z-index:999
  }
  /*子组件在被match界面右侧下半区调用的时候需要绑定这个类来控制top*/
  .match-tab-second {
    top: 600px;
    /*background-color: red;*/
  }
  .match-tab-third {
    top: 1200px;
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
  .secondFixed {
    position: fixed;
    top:140px;
    z-index: 999;
  }
</style>
