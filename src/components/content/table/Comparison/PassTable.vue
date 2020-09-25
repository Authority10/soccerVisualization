<template>
  <div class="skill-table ">
    <div class="title">
      <div v-for="(title,index) in quotaTitle">
        {{quotaTitle[index]}}
      </div>
    </div>
    <div class="home-player">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="away-player">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SkillTable",
    props:{
      quotaTitle:{
        type:Array,
        default(){
          return []
        }
      },
      homePass:{
        type:Object,
        default(){
          return[]
        }
      },
      awayPass:{
        type:Object,
        default(){
          return[]
        }
      },
    },
  }
</script>

<style scoped>
  .skill-table {
    position: absolute;
    width: 1709px;
    height: 206px;
    font-size: 20px;
    top:  195px;
    left: 26px;
    border-radius: 12px;
    background-color: #525252;
  }
  .title {
    margin: 10px auto;
    width: 1470px;
    height: 50px;
    background-color:red;
    text-align: center;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .title div {
    text-align: center;
    background-color: blue;
    width: 120px;
    /*background-color: red;*/
  }
  .home-player {
    position: absolute;
    top: 70px;
    left: 120px;
    width: 1470px;
    height: 50px;
    color: white;
    background-color:red;
    border-radius: 12px;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .home-player div {
    width:120px;
    height: 40px;
    background-color: yellow;
  }
  .away-player {
    position: absolute;
    top: 130px;
    left: 120px;
    width: 1470px;
    height: 50px;
    color: white;
    background-color:red;
    border-radius: 12px;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .away-player div {
    width:120px;
    height: 40px;
    background-color: yellow;
  }
</style>
