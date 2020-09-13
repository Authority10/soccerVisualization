<template>
  <div class="single-country">
      <img :src="singleItems.img" alt="" class="national-img">
      <div class="countryName">
        {{singleItems.countryName}}
        <img v-if="isActive" src="../../../../assets/image/teams/yes.png" alt="" class="little-img">
        <img v-else src="../../../../assets/image/teams/no.png" alt=""  class="little-img">
      </div>
  </div>
</template>

<script>
  export default {
    name: "singleCountry",
    props:{
      singleItems:{
        type:Object,
        default(){
          return{}
        }
      },
      currentCountry:{
        type:String,
        default() {
          return "";
        }
      }
    },
    data(){
      return{
      }
    },
    computed:{
      isActive(){
        return this.currentCountry===this.singleItems.countryName
      }
    }
  }
</script>

<style scoped>
  .single-country {
    position: relative;
    margin: 10px auto;
    width: 280px;
    height: 80px;
    background-color:#565656;
    border-radius: 12px;
    border: 1px solid #565656;
    overflow: hidden;
  }
  .national-img {
    position: absolute;
    width: 110px;
    height: 80px;
  }
  .countryName {
    position: absolute;
    left: 110px;
    width: 170px;
    height: 80px;
    text-align: center;
    /*行高等于父元素高度可以居中*/
    line-height: 80px;
    font-size: 27px;
    color:#FDFDFD;
    /*background-color: red;*/
  }
  .little-img {
    position: absolute;
    right: 10px;
    top: 5px;
    width: 20px;
  }
  /*span {*/
  /*  !*text-align: center;*!*/
  /*  !*行高等于父元素高度可以居中*!*/
  /*  line-height: 80px;*/
  /*  font-size: 27px;*/
  /*  color:#FDFDFD*/
  /*}*/
  .active {
    border: 1px solid #FFF566;
  }
</style>
