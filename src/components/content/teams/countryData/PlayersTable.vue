<template>
  <div class="players-table">
    <table>
      <tbody>
      <tr class="head">
        <td></td>
        <td>Number</td>
        <td>Name</td>
        <td>Position</td>
        <td>Age</td>
        <td>Foot</td>
        <td>Height</td>
        <td>Matches</td>
        <td>Total minutes</td>
        <td>Average minutes</td>
<!--        <td>Goal</td>-->
<!--        <td>Assists</td>-->
        <td>Cards</td>
        <td>Sub in/out</td>
      </tr>
      <tr
       v-for="(players,index) in playersTable.Back"
       :key="index"
     >
       <td>
         <img :src="players.playerImg" alt="">
       </td>
       <td>{{parseInt(players.countryNumber)}}</td>
       <td>{{players.Name.replace(/\s*/g,"")}}</td>
       <td>Back</td>
       <td>{{players.Age}}</td>
       <td>
         <img v-if="true" src="@/assets/foot/right-foot.png" alt="">
         <img v-else src="@/assets/foot/left-foot.png" alt="">
       </td>
       <td>{{players.Height}}</td>
       <td>{{players.Match}}</td>
       <td>{{players.Time}}</td>
       <td>{{parseInt(players.AverageMinutes)}}</td>
<!--       <td>{{players.goals}}</td>-->
<!--       <td>{{players.assists}}</td>-->
       <td>{{players.Cards}}</td>
       <td>{{players.Sub}}</td>
     </tr>
      <tr
        v-for="(players,index) in playersTable.Center"
        :key="index"
      >
        <td>
          <img :src="players.playerImg" alt="">
        </td>
        <td>{{parseInt(players.countryNumber)}}</td>
        <td>{{players.Name.replace(/\s*/g,"")}}</td>
        <td>Center</td>
        <td>{{players.Age}}</td>
        <td>
          <img v-if="true" src="@/assets/foot/right-foot.png" alt="">
          <img v-else src="@/assets/foot/left-foot.png" alt="">
        </td>
        <td>{{players.Height}}</td>
        <td>{{players.Match}}</td>
        <td>{{players.Time}}</td>
        <td>{{parseInt(players.AverageMinutes)}}</td>
        <!--       <td>{{players.goals}}</td>-->
        <!--       <td>{{players.assists}}</td>-->
        <td>{{players.Cards}}</td>
        <td>{{players.Sub}}</td>
      </tr>
      <tr
        v-for="(players,index) in playersTable.ForWard"
        :key="index"
      >
        <td>
          <img :src="players.playerImg" alt="">
        </td>
        <td>{{parseInt(players.countryNumber)}}</td>
        <td>{{players.Name.replace(/\s*/g,"")}}</td>
        <td>ForWard</td>
        <td>{{players.Age}}</td>
        <td>
          <img v-if="true" src="@/assets/foot/right-foot.png" alt="">
          <img v-else src="@/assets/foot/left-foot.png" alt="">
        </td>
        <td>{{players.Height}}</td>
        <td>{{players.Match}}</td>
        <td>{{players.Time}}</td>
        <td>{{parseInt(players.AverageMinutes)}}</td>
        <!--       <td>{{players.goals}}</td>-->
        <!--       <td>{{players.assists}}</td>-->
        <td>{{players.Cards}}</td>
        <td>{{players.Sub}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "PlayersTable",
    props:{
      playersTable:{
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
    computed:{
       isRight(){
        return this.players.foot === "right"
       }
    }
  }
</script>

<style scoped>
  .players-table {
    position:absolute ;
    left:20px;
    top:45px;
    width: 620px;
    height:600px;
    overflow: scroll;
  }
  table{
    border-collapse: collapse;
  }
  .head {
    color: #5a5a5a;
  }
  .head td {
    font-size: 16px;
    /*padding: 0;*/
    border-top: none;
  }
  td{
    border-bottom: 3px solid #7f8fa6;
    /*padding-right: 3px;*/
    text-align: center;
    font-size: 16px;
    height: 20px;
  }

  img {
    width: 13px;
  }
</style>
