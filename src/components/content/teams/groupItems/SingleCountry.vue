<template>
  <div class="single-country">
      <img :src="singleItems.img" alt="" class="national-img">
      <span>{{singleItems.countryName}}</span>
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
      }
    }
  }
</script>

<style scoped>
  .single-country {
    position: relative;
    margin-top: 10px;
    margin-left: 20px;
    width: 270px;
    height: 80px;
    background-color: #F7BA52;
    border-radius: 6px;
  }
  .national-img {
    position: absolute;
    left: 5px;
    top: 10px;
    width: 96px;
    height: 60px;
  }
  span {
    position: absolute;
    left:110px;
    /*行高等于父元素高度可以居中*/
    line-height: 80px;
    font-size: 27px;
    color:#FDFDFD
  }
  .active {
    background-color: #1E2E45;
  }
</style>
