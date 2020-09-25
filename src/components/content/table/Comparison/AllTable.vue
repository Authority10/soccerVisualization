<template>
  <div class="all-table ">
    <div class="title">
      <div v-for="(title,index) in quotaTitle">
        {{quotaTitle[index]}}
      </div>
    </div>

    <div class="home-player">
        <div>
          {{homeAll['name']}}
        </div>
        <div>
          {{homeAll['assists']}}
        </div>
        <div>
          {{homeAll['ballPossession']}}
        </div>
        <div>
          {{homeAll['fouls']}}
        </div>
        <div>
          {{homeAll['goals']}}
        </div>
        <div>
          {{homeAccuracy}}
        </div>
        <div>
          {{homeAll['passes']}}
        </div>
        <div>
          {{homeAll['shots']}}
        </div>
        <div>
          {{homeAll['shotsOnTarget']}}
        </div>
    </div>
    <div class="away-player">
      <div>
        {{awayAll['name']}}
      </div>
      <div>
        {{awayAll['assists']}}
      </div>
      <div>
        {{awayAll['ballPossession']}}
      </div>
      <div>
        {{awayAll['fouls']}}
      </div>
      <div>
        {{awayAll['goals']}}
      </div>
      <div>
        {{awayAccuracy}}
      </div>
      <div>
        {{awayAll['passes']}}
      </div>
      <div>
        {{awayAll['shots']}}
      </div>
      <div>
        {{awayAll['shotsOnTarget']}}
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "AllTable",
    props:{
      quotaTitle:{
        type:Array,
        default(){
          return []
        }
      },
      homeAll:{
        type:Object,
        default(){
          return {}
        }
      },
      awayAll:{
        type:Object,
        default(){
          return {}
        }
      },
    },
    computed:{
      //传球成功率四舍五入
      homeAccuracy(){
        return Math.round(this.homeAll["passAcurracy"] * 100) / 100
      },
      awayAccuracy(){
        return Math.round(this.awayAll["passAcurracy"] * 100) / 100
      }
    }
  }
</script>

<style scoped>
  .all-table {
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
    line-height: 50px;
    text-align: center;
    /*background-color: blue;*/
    width: 120px;
    height: 50px;
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
    width: 120px;
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
    width: 120px;
    height: 50px;
  }
</style>
