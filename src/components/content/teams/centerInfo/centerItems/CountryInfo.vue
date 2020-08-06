<template>
  <div class="country-info">
    <div class="img-name">
      <img src="@/assets/footass/310.jpg" alt="">
      <span>{{activeCountry.countryName}}</span>
    </div>

    <div class="coach">
      <span>主教练</span>
      <span>达利奇特</span>
    </div>

    <div class="age">
      <span>平均年龄</span>
      <span>29.7</span>
    </div>

    <div class="foundation-date">
      <span>成立时间</span>
      <span>1930/7/31</span>
    </div>

    <div class="times">
      <span>参赛次数</span>
      <span>17</span>
    </div>

    <div class="glory">
      <span>球队荣誉</span>
      <span>1940冠军</span>
    </div>

  </div>
</template>

<script>
  export default {
    name: "CountryInfo",
    props:{
      activeCountry:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    data(){
      return{

      }
    },

    methods:{
    }
  }
</script>

<style scoped>
  .country-info {
    position: relative;
    top:10px;
    left:20px;
    width: 650px;
    height: 170px;
    background-color:rgba(85,239,195,0.3);
    border-radius: 10px;
  }
  .coach,.age,.foundation-date,.times,.glory {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .img-name {
    position: absolute;
    display: flex;
    flex-direction: column;
    text-align: center;
    top:10px;
    left:30px
  }
  .img-name span {
    text-align: center;
  }

  img {
    width: 100px;
    margin: 0 auto;
  }
  .coach {
    position: absolute;
    top:10px;
    left:200px
  }
  .age {
    position: absolute;
    top:10px;
    left:350px
  }
  .foundation-date {
    position: absolute;
    top:60px;
    left:200px
  }
  .times {
    position: absolute;
    top:60px;
    left:350px;
  }
  .glory {
    position: absolute;
    top:10px;
    left:500px
  }
   span:nth-child(2){
     font-size: 20px;
     font-weight: bold;
   }
</style>
