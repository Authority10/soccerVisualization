<template>
  <div class="technical-index">
    <div>
      <div class="score" @click="scoreClick">
        <div class="number">
          <span>01</span>
        </div>
        <div class="name">
          <span>进球</span>
        </div>
        <div class="data">
          <span>{{technical.goal}}</span>
        </div>
      </div>
      <div class="score" @click="scoreClick">
        <div class="number">
          <span>02</span>
        </div>
        <div class="name">
          <span>助攻</span>
        </div>
        <div class="data">
          <span>{{technical.assist}}</span>
        </div>
      </div>
      <div class="score" @click="scoreClick">
        <div class="number">
          <span>03</span>
        </div>
        <div class="name">
          <span>传球</span>
        </div>
        <div class="data">
          <span>{{technical.pass}}</span>
        </div>
      </div >
      <div class="score" @click="scoreClick">
        <div class="number">
          <span>04</span>
        </div>
        <div class="name">
          <span>精准传球</span>
        </div>
        <div class="data">
          <span>{{technical.accuratePass}}</span>
        </div>
      </div>
      <div class="score" @click="scoreClick">
        <div class="number">
          <span>05</span>
        </div>
        <div class="name">
          <span>威胁传球</span>
        </div>
        <div class="data">
          <span>{{technical.keyPass}}</span>
        </div>
      </div>
    </div>
    <div>
      <div class="score" @click="scoreClick">
        <div class="number">
          <span>06</span>
        </div>
        <div class="name">
          <span>直塞</span>
        </div>
        <div class="data">
          <span>{{technical.smartPass}}</span>
        </div>
      </div>
      <div class="score" @click="scoreClick">
        <div class="number">
          <span>07</span>
        </div>
        <div class="name">
          <span>射门</span>
        </div>
        <div class="data">
          <span>{{technical.shot}}</span>
        </div>
      </div>
      <div class="score" @click="scoreClick">
        <div class="number">
          <span>08</span>
        </div>
        <div class="name">
          <span>射正</span>
        </div>
        <div class="data">
          <span>{{technical.shotOnTarget}}</span>
        </div>
      </div>
      <div class="score" @click="scoreClick">
        <div class="number">
          <span>09</span>
        </div>
        <div class="name">
          <span>黄牌</span>
        </div>
        <div class="data">
          <span>{{technical.yellowCard}}</span>
        </div>
      </div>
      <div class="score" @click="scoreClick">
        <div class="number">
          <span>10</span>
        </div>
        <div class="name">
          <span>红牌</span>
        </div>
        <div class="data">
          <span>{{technical.redCard}}</span>
        </div>
      </div>
    </div>

<!--    <table>-->
<!--      <tbody>-->
<!--        <tr>-->
<!--          <td>01</td>-->
<!--          <td>进球</td>-->
<!--          <td>{{technical.goal}}</td>-->
<!--        </tr>-->
<!--        <tr>-->
<!--          <td>02</td>-->
<!--          <td>助攻</td>-->
<!--          <td>{{technical.assist}}</td>-->
<!--        </tr>-->
<!--        <tr>-->
<!--          <td>03</td>-->
<!--          <td>传球</td>-->
<!--          <td>{{technical.accuratePass}}</td>-->
<!--        </tr>-->
<!--        <tr>-->
<!--          <td>04</td>-->
<!--          <td>精准传球</td>-->
<!--          <td>{{technical.keyPass}}</td>-->
<!--        </tr>-->
<!--        <tr>-->
<!--          <td>05</td>-->
<!--          <td>威胁传球</td>-->
<!--          <td>{{technical.keyPass}}</td>-->
<!--        </tr>-->
<!--      </tbody>-->
<!--    </table>-->
<!--    <table>-->
<!--      <tbody>-->
<!--      <tr>-->
<!--        <td>06</td>-->
<!--        <td>直塞</td>-->
<!--        <td>{{technical.smartPass}}</td>-->
<!--      </tr>-->
<!--      <tr>-->
<!--        <td>07</td>-->
<!--        <td>射门</td>-->
<!--        <td>{{technical.shot}}</td>-->
<!--      </tr>-->
<!--      <tr>-->
<!--        <td>08</td>-->
<!--        <td>射正</td>-->
<!--        <td>{{technical.shotOnTarget}}</td>-->
<!--      </tr>-->
<!--      <tr>-->
<!--        <td>09</td>-->
<!--        <td>黄牌</td>-->
<!--        <td>{{technical.yellowCard}}</td>-->
<!--      </tr>-->
<!--      <tr>-->
<!--        <td>10</td>-->
<!--        <td>红牌</td>-->
<!--        <td>{{technical.redCard}}</td>-->
<!--      </tr>-->
<!--      </tbody>-->
<!--    </table>-->
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
    },
    methods:{
      scoreClick(){
        var score = document.querySelectorAll(".score")
        console.log(score)
        for (var i = 0;i<score.length;i++){
          //for循环内找不到this指向?
          score[i].onclick = function(){
            for (var j = 0;j<score.length;j++){
              score[j].style.border = "1px solid #575757"
            }
            //函数内可以找到this指向，指向函数调用者
            this.style.border = "1px solid #69c0ff"
          };
        }
      }
    },
  }
</script>

<style scoped>
  .technical-index {
    /*position:absolute;*/
    /*left:20px;*/
    /*top:60px;*/
    margin: 24px auto;
    width: 815px;
    height: 426px;
    display:flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;

    background-color: #525252;
  }
  .score {
    margin:10px auto;
    width: 300px;
    height: 60px;
    border-radius: 15px;
    border: 2px solid #575757;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color:#676767;
  }
  .number {
    width: 50px;
    text-align: center;
    /*background-color: red;*/
  }
  .name {
    width: 80px;
    text-align: center;
    /*background-color: blue;*/
  }
  .data {
    width: 50px;
    text-align: center;
    /*background-color: yellow;*/
  }
  span {
    color: white;
    font-size: 20px;
  }
  /*table{*/
  /*  !*外边框设置*!*/
  /*  !*border-top: 3px solid black;*!*/
  /*  !*边框合并*!*/
  /*  border-collapse: collapse;*/
  /*  !*background-color: red;*!*/
  /*  !*居中显示*!*/
  /*  !*margin: 100px auto;*!*/
  /*}*/
  /*td{*/
  /*  border-top: 3px solid #BBBBBB;*/
  /*  border-bottom: 3px solid #BBBBBB;*/
  /*  padding: 10px;*/
  /*  text-align: center;*/
  /*}*/
  /*td:nth-of-type(1){*/
  /*  width: 100px;*/
  /*  font-weight: bold;*/
  /*  background-color: #CACCD1;*/
  /*}*/
  /*td:nth-of-type(2){*/
  /*  background-color: #455567;*/
  /*  color: #BBBBBB;*/
  /*  width: 80px;*/
  /*  height: 30px;*/
  /*}*/
  /*td:nth-of-type(3){*/
  /*  background-color: white;*/
  /*  width: 80px;*/
  /*  height: 30px;*/
  /*}*/
</style>
