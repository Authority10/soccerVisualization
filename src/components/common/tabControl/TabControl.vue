<template>
  <div class="tab-control">
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
      color:String
    },
    data(){
      return{
        currentIndex : 0,
        //动态传入颜色
        personal:{
          "color":this.color,
          "borderBottom":"2px solid "+this.color,
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
    top: 100px;
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
