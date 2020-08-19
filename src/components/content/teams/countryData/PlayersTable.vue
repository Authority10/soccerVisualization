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
        <td>Cards</td>
        <td>Sub in/out</td>
      </tr>
      <tr
       v-for="(players,index) in playersTable.Back"
       :key="index"
      >
       <td>
         <img :src="players.imgNumber.img.countryImg" alt="">
       </td>
       <td>{{parseInt(players.imgNumber.number.countryNumber)}}</td>
       <td>{{players.Name.replace(/\s*/g,"")}}</td>
       <td>Back</td>
       <td>{{players.Age}}</td>
       <td>
         <img v-if="players.foot==='right'" src="@/assets/foot/right-foot.png" alt="">
         <img v-else src="@/assets/foot/left-foot.png" alt="">
       </td>
       <td>{{players.Height}}</td>
       <td>{{players.Match}}</td>
       <td>{{players.Time}}</td>
       <td>{{parseInt(players.AverageMinutes)}}</td>
       <td>{{players.Cards}}</td>
       <td>{{players.Sub}}</td>
     </tr>
      <tr
        v-for="(players,index) in playersTable.Center"
        :key="index"
      >
        <td>
          <img :src="players.imgNumber.img.countryImg" alt="">
        </td>
        <td>{{parseInt(players.imgNumber.number.countryNumber)}}</td>
        <td>{{players.Name.replace(/\s*/g,"")}}</td>
        <td>Center</td>
        <td>{{players.Age}}</td>
        <td>
          <img v-if="players.foot==='right'" src="@/assets/foot/right-foot.png" alt="">
          <img v-else src="@/assets/foot/left-foot.png" alt="">
        </td>
        <td>{{players.Height}}</td>
        <td>{{players.Match}}</td>
        <td>{{players.Time}}</td>
        <td>{{parseInt(players.AverageMinutes)}}</td>
        <td>{{players.Cards}}</td>
        <td>{{players.Sub}}</td>
      </tr>
      <tr
        v-for="(players,index) in playersTable.ForWard"
        :key="index"
      >
        <td>
          <img :src="players.imgNumber.img.countryImg" alt="">
        </td>
        <td>{{parseInt(players.imgNumber.number.countryNumber)}}</td>
        <td>{{players.Name.replace(/\s*/g,"")}}</td>
        <td>ForWard</td>
        <td>{{players.Age}}</td>
        <td>
          <img v-if="players.foot==='right'" src="@/assets/foot/right-foot.png" alt="">
          <img v-else src="@/assets/foot/left-foot.png" alt="">
        </td>
        <td>{{players.Height}}</td>
        <td>{{players.Match}}</td>
        <td>{{players.Time}}</td>
        <td>{{parseInt(players.AverageMinutes)}}</td>
        <td>{{players.Cards}}</td>
        <td>{{players.Sub}}</td>
      </tr>
      <tr
        v-for="(players,index) in playersTable.GoalKeeper"
        :key="index"
      >
        <td>
          <img :src="players.imgNumber.img.countryImg" alt="">
        </td>
        <td>{{parseInt(players.imgNumber.number.countryNumber)}}</td>
        <td>{{players.Name.replace(/\s*/g,"")}}</td>
        <td>GoalKeeper</td>
        <td>{{players.Age}}</td>
        <td>
          <img v-if="players.foot==='right'" src="@/assets/foot/right-foot.png" alt="">
          <img v-else src="@/assets/foot/left-foot.png" alt="">
        </td>
        <td>{{players.Height}}</td>
        <td>{{players.Match}}</td>
        <td>{{players.Time}}</td>
        <td>{{parseInt(players.AverageMinutes)}}</td>
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
       // backFoot(){
       //  return this.players.foot === "right"
       // },
      countryImg(){
        // return this.players.imgNumber.img.countryImg
      }
    }
  }
</script>

<style scoped>
  .players-table {
    position:absolute ;
    /*background-color: blue;*/
    left:0;
    top:60px;
    width: 1200px;
    height:600px;
    /*overflow: scroll;*/
  }
  table{
    border-collapse: collapse;
  }
  .head {
    color: #5a5a5a;
  }
  .head td {
    /*background-color: #F7BA52;*/
    font-size: 16px;
    /*padding: 0;*/
    border-top: none;
  }
  td{
    border-bottom: 1px solid #7f8fa6;
    padding: 15px 20px;
    text-align: center;
    font-size: 18px;
    color: #EAEAEA;
    height: 20px;
  }
  img {
    width: 30px;
    height: 42px;
  }
</style>
