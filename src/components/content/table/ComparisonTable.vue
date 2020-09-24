<template>
  <div class="comparison-table ">
    <div class="title">
        <div>Name</div>
        <div>Minutes</div>
        <div>Goals</div>
        <div>Assists</div>
        <div>Actions/Success</div>
        <div>Shot/On Target</div>
        <div>Pass/Accurate</div>
    </div>
    <div
      v-for="(matches,index) in playersMatches"
      :key="index"
      class="single-match">
        <div>{{matches.MatchLabel.replace(/,/g, "")}}</div>
        <div>{{matches.Time}}</div>
        <div>{{matches.Goal}}</div>
        <div>{{matches.Assist}}</div>
        <div>{{matches.TotalAcction}}/{{matches.TotalAccuracy}} {{parseInt((matches.TotalPercentage)*100)}}%</div>
        <div>{{matches.Shot}}/{{matches.ShotSdivaight}} {{parseInt((matches.ShotPercentage)*100)}}%</div>
        <div>{{matches.Pass}}/{{matches.PassAccuracy}} {{parseInt((matches.PassPercentage)*100)}}%</div>
        <div>{{matches.Duel}}/{{matches.DuelWin}} {{parseInt((matches.DuelPercentage)*100)}}%</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ComparisonTable",
    props:{
      playersMatches:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    computed:{
    },
    methods:{
    }

  }
</script>

<style scoped>
  .comparison-table {
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
    width: 1350px;
    height: 50px;
    /*background-color:red;*/
    text-align: center;
    color: white;
    display: flex;
    /*justify-content: flex-start;*/
    align-items: center;
  }
  /*.basic {*/
  /*  background-color: blue;*/
  /*  width: 400px;*/
  /*  display: flex;*/
  /*  justify-content: space-around;*/
  /*  align-items: center;*/
  /*}*/
  /*.high-level {*/
  /*  background-color: orange;*/
  /*  width: 750px;*/
  /*  display: flex;*/
  /*  justify-content: space-around;*/
  /*  align-items: center;*/
  /*}*/
  .title div {
    width: 160px;
    background-color: red;
  }
  /*.match {*/
  /*  width: 200px;*/
  /*  background-color: red;*/
  /*  !*text-align: left;*!*/
  /*}*/
  .single-match {
    margin: 20px 25px;
    width: 1350px;
    height: 50px;
    color: white;
    background-color:#575757;
    border-radius: 12px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  /*table{*/
  /*  border-collapse: collapse;*/
  /*}*/
  /*!*.head {*!*/
  /*!*  color: #455567;*!*/
  /*!*}*!*/
  /*.head td {*/
  /*  background-color: #455567;*/
  /*  font-size: 16px;*/
  /*  color: #BBBBBB;*/
  /*  font-weight: bold;*/
  /*  !*padding: 0;*!*/
  /*  border-top: none;*/
  /*}*/
  /*td{*/
  /*  border-bottom: 1px solid #7f8fa6;*/
  /*  padding: 15px 20px;*/
  /*  text-align: center;*/
  /*  font-size: 18px;*/
  /*  color: black;*/
  /*  !*font-weight: bold;*!*/
  /*  height: 20px;*/
  /*  background-color: #CACCD1;*/
  /*}*/
</style>
