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
    height: 70px;
    background-color: #c8d6e5;
    border-radius: 6px;
  }
  .national-img {
    position: absolute;
    left: 5px;
    top: 10px;
    width: 80px;
    height: 50px;
  }
  span {
    position: absolute;
    left:90px;
    top:15px;
    font-size: 22px;
  }
  .active {
    background-color: rgba(255,204,204,1);
  }
</style>
