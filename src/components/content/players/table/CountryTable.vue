<template>
  <div class="country-table">
    <table>
      <tbody>
      <tr>
        <td>主教练</td>
        <td>成立时间</td>
        <td>平均年龄</td>
        <td>参赛次数</td>
        <td>球队荣誉</td>
      </tr>
      <tr>
        <td>克洛普</td>
        <td>1920-9-1</td>
        <td>29</td>
        <td>15</td>
        <td>冠军</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "countryTable"
  }
</script>

<style scoped>
  .country-table {
    position: absolute;
    top: 10px;
    left: 250px;
  }
  table{
    /*外边框设置*/
    border: 1px solid #BBBBBB;
    /*边框合并*/
    border-collapse: collapse;
    /*background-color: red;*/
    /*居中显示*/
    /*margin: 100px auto;*/
  }
  td{
    border: 1px solid #BBBBBB;
    padding: 30px 55px;
    text-align: center;
  }
  tr:nth-of-type(1){
    background-color: #384A5E;
    color: #BBBBBB;
    font-weight: bold;
    font-size: 20px;
  }
  tr:nth-of-type(2){
    background-color: #EAEAEA;
    color:black;
    font-weight: bold;
    font-size: 20px;
  }
</style>
