<template>
  <div class="tar-bar-item" @click="itemClick">
    <div :style="isActiveColor" v-if="isActive"></div>
    <div class="item-box" v-else></div>
    <slot name="item-img" class="item-img"></slot>
    <div class="item-text">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String,
      color:String
    },
    data(){
      return{
      }
    },
    computed:{
      isActive(){
        //indexOf 检索字符串在被检索对象中首次出现的字符位置
        return this.$route.path.indexOf(this.path) !== -1
      },
      //动态决定样式，判断是否是活跃路由赋予对应的颜色
      //6px 57px 转化成rem
      isActiveColor(){
        return this.isActive ?
          {backgroundColor:this.color,width:0.03125+"rem",height:0.29688+"rem",display:"inline-block"}
          :{}
      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
   .tar-bar-item {
     position: relative;
     margin-bottom: 5px;
   }
   .item-box {
     display: inline-block;
     width: 8px;
     height:57px;
   }
   .item-text {
    margin-left: 40px;
    margin-top: 5px;
    font-size: 20px;
    font-weight: bold;
   }
</style>
