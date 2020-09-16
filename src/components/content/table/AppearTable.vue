<template>
  <div class="matches-table">
    <table>
      <tbody>
      <tr class="head">
        <td>Match</td>
        <td>Minutes played</td>
        <td>Goals</td>
        <td>XG</td>
        <td>Assists</td>
        <td>Total actions/success</td>
        <td>Shot/on target</td>
        <td>Pass/accurate</td>
        <td>Duels/won</td>
      </tr>
      <tr
        v-for="(matches,index) in playersMatches"
        :key="index"
      >
          <td>{{matches.MatchLabel.replace(/,/g, "")}}</td>
          <td>{{matches.Time}}</td>
          <td>{{matches.Goal}}</td>
          <td>0</td>
          <td>{{matches.Assist}}</td>
          <td>{{matches.TotalAcction}}/{{matches.TotalAccuracy}} {{parseInt((matches.TotalPercentage)*100)}}%</td>
          <td>{{matches.Shot}}/{{matches.ShotStraight}} {{parseInt((matches.ShotPercentage)*100)}}%</td>
          <td>{{matches.Pass}}/{{matches.PassAccuracy}} {{parseInt((matches.PassPercentage)*100)}}%</td>
          <td>{{matches.Duel}}/{{matches.DuelWin}} {{parseInt((matches.DuelPercentage)*100)}}%</td>
      </tr>
      </tbody>
    </table>
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
  .matches-table {
    position: absolute;
    top:80px;
    left: 80px;
    background-color: #495F78;
  }
  table{
    border-collapse: collapse;
  }
  /*.head {*/
  /*  color: #455567;*/
  /*}*/
  .head td {
    background-color: #455567;
    font-size: 16px;
    color: #BBBBBB;
    font-weight: bold;
    /*padding: 0;*/
    border-top: none;
  }
  td{
    border-bottom: 1px solid #7f8fa6;
    padding: 15px 20px;
    text-align: center;
    font-size: 18px;
    color: black;
    /*font-weight: bold;*/
    height: 20px;
    background-color: #CACCD1;
  }
</style>
