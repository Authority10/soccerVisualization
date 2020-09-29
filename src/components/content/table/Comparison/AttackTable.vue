<template>
  <div class="attack-table ">
    <div class="title">
      <div v-for="(title,index) in quotaTitle">
        {{quotaTitle[index]}}
      </div>
    </div>

    <div class="home-player">
      <div>
        {{homeAttack['name']}}
      </div>
      <div>
        {{homeAttack['breakThrows']}}
      </div>
      <div>
        {{homeAttack['catchBall']}}
      </div>
      <div>
        {{homeAttack['center']}}
      </div>
      <div>
        {{homeAttack['foulsConceded']}}
      </div>
      <div>
        {{homeAttack['keyPass']}}
      </div>
      <div>
        {{homeAttack['offsides']}}
      </div>
    </div>

    <div class="away-player">
      <div>
        {{awayAttack['name']}}
      </div>
      <div>
        {{awayAttack['breakThrows']}}
      </div>
      <div>
        {{awayAttack['catchBall']}}
      </div>
      <div>
        {{awayAttack['center']}}
      </div>
      <div>
        {{awayAttack['foulsConceded']}}
      </div>
      <div>
        {{awayAttack['keyPass']}}
      </div>
      <div>
        {{awayAttack['offsides']}}
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "attackTable",
    props:{
      quotaTitle:{
        type:Array,
        default(){
          return []
        }
      },
      homeAttack:{
        type:Object,
        default(){
          return[]
        }
      },
      awayAttack:{
        type:Object,
        default(){
          return[]
        }
      },
    },
  }
</script>

<style scoped>
  .attack-table {
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
