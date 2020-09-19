<template>
  <div class="appearance-table">
    <div class="title">
      <div class="match">Match</div>
      <div class="basic">
        <div>Minutes</div>
        <div>Goals</div>
        <div>XG</div>
        <div>Assists</div>
      </div>
      <div class="high-level">
        <div>Actions/Success</div>
        <div>Shot/On Target</div>
        <div>Pass/Accurate</div>
        <div>Duels/Won</div>
      </div>

    </div>
    <div
      v-for="(matches,index) in playersMatches"
      :key="index"
      class="single-match">
        <div>{{matches.MatchLabel.replace(/,/g, "")}}</div>
        <div>{{matches.Time}}</div>
        <div>{{matches.Goal}}</div>
        <div>0</div>
        <div>{{matches.Assist}}</div>
        <div>{{matches.TotalAcction}}/{{matches.TotalAccuracy}} {{parseInt((matches.TotalPercentage)*100)}}%</div>
        <div>{{matches.Shot}}/{{matches.ShotSdivaight}} {{parseInt((matches.ShotPercentage)*100)}}%</div>
        <div>{{matches.Pass}}/{{matches.PassAccuracy}} {{parseInt((matches.PassPercentage)*100)}}%</div>
        <div>{{matches.Duel}}/{{matches.DuelWin}} {{parseInt((matches.DuelPercentage)*100)}}%</div>
    </div>
<!--    <table>-->
<!--      <tbody>-->
<!--      <tr class="head">-->
<!--        <td>Match</td>-->
<!--        <td>Minutes played</td>-->
<!--        <td>Goals</td>-->
<!--        <td>XG</td>-->
<!--        <td>Assists</td>-->
<!--        <td>Total actions/success</td>-->
<!--        <td>Shot/on target</td>-->
<!--        <td>Pass/accurate</td>-->
<!--        <td>Duels/won</td>-->
<!--      </tr>-->
<!--      <tr-->
<!--        v-for="(matches,index) in playersMatches"-->
<!--        :key="index"-->
<!--      >-->
<!--          <td>{{matches.MatchLabel.replace(/,/g, "")}}</td>-->
<!--          <td>{{matches.Time}}</td>-->
<!--          <td>{{matches.Goal}}</td>-->
<!--          <td>0</td>-->
<!--          <td>{{matches.Assist}}</td>-->
<!--          <td>{{matches.TotalAcction}}/{{matches.TotalAccuracy}} {{parseInt((matches.TotalPercentage)*100)}}%</td>-->
<!--          <td>{{matches.Shot}}/{{matches.ShotStraight}} {{parseInt((matches.ShotPercentage)*100)}}%</td>-->
<!--          <td>{{matches.Pass}}/{{matches.PassAccuracy}} {{parseInt((matches.PassPercentage)*100)}}%</td>-->
<!--          <td>{{matches.Duel}}/{{matches.DuelWin}} {{parseInt((matches.DuelPercentage)*100)}}%</td>-->
<!--      </tr>-->
<!--      </tbody>-->
<!--    </table>-->
  </div>
</template>

<script>
  export default {
    name: "AppearTable",
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
  .appearance-table {
    position: absolute;
    width: 1705px;
    height: 700px;
    font-size: 20px;
    top:100px;
    left: 25px;
    border-radius: 15px;
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
  .basic {
    background-color: blue;
    width: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .high-level {
    background-color: orange;
    width: 750px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .title div {
    /*width: 140px;*/
    /*background-color: red;*/
  }
  .match {
    width: 200px;
    background-color: red;
    /*text-align: left;*/
  }
  .single-match {
    margin: 20px 25px;
    width: 1350px;
    height: 50px;
    color: white;
    background-color:#575757;
    border-radius: 15px;
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
