<template>
  <div class="defend-table ">
    <div class="title">
      <div v-for="(title,index) in quotaTitle">
        {{quotaTitle[index]}}
      </div>
    </div>
    <div class="home-player">
      <div>
        {{homeDefense['name']}}
      </div>
      <div>
        {{homeDefense['blockPasses']}}
      </div>
      <div>
        {{homeDefense['blockShots']}}
      </div>
      <div>
        {{homeDefense['clearances']}}
      </div>
      <div>
        {{homeDefense['interceptions']}}
      </div>
      <div>
        {{homeDefense['tackles']}}
      </div>
      <div>
        {{homeDefense['saves']}}
      </div>
      <div>
        {{homeDefense['yellowCard']}}
      </div>
      <div>
        {{homeDefense['redCard']}}
      </div>
    </div>
    <div class="away-player">
      <div>
        {{awayDefense['name']}}
      </div>
      <div>
        {{awayDefense['blockPasses']}}
      </div>
      <div>
        {{awayDefense['blockShots']}}
      </div>
      <div>
        {{awayDefense['clearances']}}
      </div>
      <div>
        {{awayDefense['interceptions']}}
      </div>
      <div>
        {{awayDefense['tackles']}}
      </div>
      <div>
        {{awayDefense['saves']}}
      </div>
      <div>
        {{awayDefense['yellowCard']}}
      </div>
      <div>
        {{awayDefense['redCard']}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DefendTable",
    props:{
      quotaTitle:{
        type:Array,
        default(){
          return []
        }
      },
      homeDefense:{
        type:Object,
        default(){
          return[]
        }
      },
      awayDefense:{
        type:Object,
        default(){
          return[]
        }
      },
    },
  }
</script>

<style scoped>
  .defend-table {
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
