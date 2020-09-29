<template>
  <div class="skill-table ">
    <div class="title">
      <div v-for="(title,index) in quotaTitle">
        {{quotaTitle[index]}}
      </div>
    </div>
    <div class="home-player">
      <div>
        {{homePass['name']}}
      </div>
      <div>
        {{homeBack}}
      </div>
      <div>
        {{homeDiagonal}}
      </div>
      <div>
        {{homeLateral}}
      </div>
      <div>
        {{homeThrough}}
      </div>
      <div>
        {{homePass['passLong']}}
      </div>
      <div>
        {{homePass['passShorts']}}
      </div>
      <div>
        {{homeLongAcc}}
      </div>
      <div>
        {{homeShortAcc}}
      </div>
    </div>
    <div class="away-player">
      <div>
        {{awayPass['name']}}
      </div>
      <div>
        {{awayBack}}
      </div>
      <div>
        {{awayDiagonal}}
      </div>
      <div>
        {{awayLateral}}
      </div>
      <div>
        {{awayThrough}}
      </div>
      <div>
        {{awayPass['passLong']}}
      </div>
      <div>
        {{awayPass['passShorts']}}
      </div>
      <div>
        {{awayLongAcc}}
      </div>
      <div>
        {{awayShortAcc}}
      </div>
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
    computed:{
      homeBack(){
        return Math.round(this.homePass["PassBackRate"] * 1000) / 10 + "%"
      },
      awayBack(){
        return Math.round(this.awayPass["PassBackRate"] * 1000) / 10 + "%"
      },
      homeDiagonal(){
        return Math.round(this.homePass["PassDiagonalRate"] * 1000) / 10 + "%"
      },
      awayDiagonal(){
        return Math.round(this.awayPass["PassDiagonalRate"] * 1000) / 10 + "%"
      },
      homeLateral(){
        return Math.round(this.homePass["PassLateralRate"] * 1000) / 10 + "%"
      },
      awayLateral(){
        return Math.round(this.awayPass["PassLateralRate"] * 1000) / 10 + "%"
      },
      homeThrough(){
        return Math.round(this.homePass["PassThroughRate"] * 1000) / 10 + "%"
      },
      awayThrough(){
        return Math.round(this.awayPass["PassThroughRate"] * 1000) / 10 + "%"
      },
      homeLongAcc(){
        return Math.round(this.homePass["passesLongAcc"] * 1000) / 10 + "%"
      },
      awayLongAcc(){
        return Math.round(this.awayPass["passesLongAcc"] * 1000) / 10 + "%"
      },
      homeShortAcc(){
        return Math.round(this.homePass["passesShortsAcc"] * 1000) / 10 + "%"
      },
      awayShortAcc(){
        return Math.round(this.awayPass["passesShortsAcc"] * 1000) / 10 + "%"
      },
    }
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
    /*background-color:red;*/
    text-align: center;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .title div {
    text-align: center;
    /*background-color: blue;*/
    width: 140px;
    /*background-color: red;*/
  }
  .home-player {
    position: absolute;
    top: 70px;
    left: 120px;
    width: 1470px;
    height: 50px;
    color: white;
    background-color:#5e5e5e;
    border-radius: 12px;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .home-player div {
    line-height: 50px;
    text-align: center;
    /*background-color: blue;*/
    width: 140px;
    height: 50px;
    /*background-color: red;*/
  }
  .away-player {
    position: absolute;
    top: 130px;
    left: 120px;
    width: 1470px;
    height: 50px;
    color: white;
    background-color:#5e5e5e;
    border-radius: 12px;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .away-player div {
    line-height: 50px;
    text-align: center;
    /*background-color: blue;*/
    width: 140px;
    height: 50px;
  }
</style>
