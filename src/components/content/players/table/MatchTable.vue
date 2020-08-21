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
<!--      <tr-->
<!--        v-for="(players,index) in playersTable.Back"-->
<!--        :key="index"-->
<!--      >-->
      <tr>
        <td>Argentina - Croatia 2-4</td>
        <td>90</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>57/21 53%</td>
        <td>2/1 50%</td>
        <td>27/22 81%</td>
        <td>23/5 22%</td>
      </tr>
      <tr>
        <td>Argentina - Croatia 2-4</td>
        <td>90</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>57/21 53%</td>
        <td>2/1 50%</td>
        <td>27/22 81%</td>
        <td>23/5 22%</td>
      </tr>
      <tr>
        <td>Argentina - Croatia 2-4</td>
        <td>90</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>57/21 53%</td>
        <td>2/1 50%</td>
        <td>27/22 81%</td>
        <td>23/5 22%</td>
      </tr>
      <tr>
        <td>Argentina - Croatia 2-4</td>
        <td>90</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>57/21 53%</td>
        <td>2/1 50%</td>
        <td>27/22 81%</td>
        <td>23/5 22%</td>
      </tr>
      <tr>
        <td>Argentina - Croatia 2-4</td>
        <td>90</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>57/21 53%</td>
        <td>2/1 50%</td>
        <td>27/22 81%</td>
        <td>23/5 22%</td>
      </tr>
      <tr>
        <td>Argentina - Croatia 2-4</td>
        <td>90</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>57/21 53%</td>
        <td>2/1 50%</td>
        <td>27/22 81%</td>
        <td>23/5 22%</td>
      </tr>
      <tr>
        <td>Argentina - Croatia 2-4</td>
        <td>90</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>57/21 53%</td>
        <td>2/1 50%</td>
        <td>27/22 81%</td>
        <td>23/5 22%</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "MatchTable"
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
