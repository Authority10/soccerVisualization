<template>
  <div class="technical-index">
    <table>
      <tbody>
        <tr>
          <td>01</td>
          <td>进球</td>
          <td>{{technical.goal}}</td>
        </tr>
        <tr>
          <td>02</td>
          <td>助攻</td>
          <td>{{technical.assist}}</td>
        </tr>
        <tr>
          <td>03</td>
          <td>传球</td>
          <td>{{technical.accuratePass}}</td>
        </tr>
        <tr>
          <td>04</td>
          <td>精准传球</td>
          <td>{{technical.keyPass}}</td>
        </tr>
        <tr>
          <td>05</td>
          <td>威胁传球</td>
          <td>{{technical.keyPass}}</td>
        </tr>
      </tbody>
    </table>
    <table>
      <tbody>
      <tr>
        <td>06</td>
        <td>直塞</td>
        <td>{{technical.smartPass}}</td>
      </tr>
      <tr>
        <td>07</td>
        <td>射门</td>
        <td>{{technical.shot}}</td>
      </tr>
      <tr>
        <td>08</td>
        <td>射正</td>
        <td>{{technical.shotOnTarget}}</td>
      </tr>
      <tr>
        <td>09</td>
        <td>黄牌</td>
        <td>{{technical.yellowCard}}</td>
      </tr>
      <tr>
        <td>10</td>
        <td>红牌</td>
        <td>{{technical.redCard}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "technicalTable",
    props:{
      technical:{
        type:Object,
        default(){
          return{}
        }
      }
    }
  }
</script>

<style scoped>
  .technical-index {
    position:absolute ;
    left:20px;
    top:70px;
    width: 300px;
    display: flex;
    justify-content: space-between;
  }
  table{
    /*外边框设置*/
    /*border-top: 3px solid black;*/
    /*边框合并*/
    border-collapse: collapse;
    /*居中显示*/
    /*margin: 100px auto;*/
  }
  td{
    border-top: 3px solid #7f8fa6;
    border-bottom: 3px solid #7f8fa6;
    padding: 5px;
    text-align: center;
  }
  td:nth-of-type(1){
    background-color: #f7f1e3;
  }
  td:nth-of-type(2){
    width: 80px;
    height: 10px;
  }
</style>
