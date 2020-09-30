<template>
  <div class="rounds-table">

    <div class="title">
        <div class="rounds">联赛轮次</div>
        <div class="battle">对阵双方</div>
        <div class="label">
          <div>对阵比分</div>
          <div>进球</div>
          <div>助攻</div>
          <div>射门</div>
          <div>传球/准确率</div>
          <div>红/黄牌</div>
          <div>犯规</div>
          <div>控球率</div>
        </div>
    </div>

    <div class="thirty-matches">
      <div v-for="(singleMatch,index) in teamMatch"
           :key="index"
           class="single-player"
           @click="boxClick">

        <div class="rounds-data">{{index+1}}</div>
        <div class="battle-data">
          {{singleMatch.homeTeam.slice(0,4)}}VS{{singleMatch.awayTeam.slice(0,4)}}
        </div>

        <div class="label">
          <div>{{singleMatch.score}}</div>
          <div>{{singleMatch.goals}}</div>
          <div>{{singleMatch.assists}}</div>
          <div>{{singleMatch.shots}}</div>
          <div>
            {{singleMatch.passes}}/{{passAcurracy[index]}}
          </div>
          <div>
            {{singleMatch.redCard}}/{{singleMatch.yellowCard}}
          </div>
          <div>{{singleMatch.fouls}}</div>
<!--          <div>{{parseFloat(singleMatch.ballPossession.toFixed(2))}}</div>-->
          <div>{{ballPossession[index]}}</div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RoundsTable",
    props:{
      teamMatch:{
        type:Array,
        default(){
          return []
        }
      },
      fixed:false
    },
    data(){
      return{
      }
    },
    computed:{
      passAcurracy(){
        return this.teamMatch.map((item) => {
           return item.passAcurracy = Math.round(item.passAcurracy*1000) / 10 + "%"
         })
      },
      ballPossession(){
        return this.teamMatch.map((item) => {
          return item.ballPossession = Math.round(item.ballPossession*1000) / 10 + "%"
        })
      },
    },
    methods:{
      boxClick(){
        var box = document.querySelectorAll(".single-player")
        for (var i = 0;i<box.length;i++){
          //for循环内找不到this指向?
          box[i].onclick = function(){
            for (var j = 0;j<box.length;j++){
              box[j].style.border = "1px solid #575757"
            }
            //函数内可以找到this指向，指向函数调用者
            this.style.border = "1px solid #FFF566"
          };
        }
      }
    }
  }
</script>

<style scoped>
  .rounds-table {
    position:absolute ;
    background-color: #525252;
    border-radius: 15px;
    top:171px;
    left:31px;
    width: 1371px;
    height:1900px;
    overflow: hidden;
    color: white;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .title {
    position: absolute;
    top: 5px;
    width: 1350px;
    height: 50px;
    /*background-color:blue;*/
    text-align: center;
  }
  .rounds {
    position: absolute;
    left: 10px;
    width: 100px;
    height: 50px;
    line-height: 50px;
    /*background-color: red;*/
  }
  .battle {
    position: absolute;
    left: 225px;
    width: 100px;
    height: 50px;
    line-height: 50px;
    /*background-color: red;*/
  }
  .label {
    position: absolute;
    left: 400px;
    width: 940px;
    height: 50px;
    line-height: 50px;
    display: flex;
    /*background-color: greenyellow;*/
    justify-content: space-between;
  }
  .label div {
    width: 110px;
    /*background-color: red;*/
  }


  .rounds-data {
    position: absolute;
    left: 10px;
    width: 100px;
    height: 50px;
    line-height: 50px;
    /*background-color: red;*/
  }
  .battle-data {
    text-align: center;
    position: absolute;
    left: 140px;
    width: 260px;
    height: 50px;
    line-height: 50px;
    /*background-color: red;*/
  }

  .thirty-matches {
    position: absolute;
    top: 60px;
    width: 1350px;
    height: 1800px;

    /*display: flex;*/
    /*flex-direction: column;*/
    /*justify-content: space-around;*/
    /*background-color: red;*/
  }
  .single-player {
    width: 1350px;
    height: 50px;
    background-color:#575757;
    margin-top: 10px;
    border-radius: 15px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }


  .foot-img {
    /*margin-top: 0;*/
    width: 30px;
    height: 30px;
  }
  /*table{*/
  /*  border-collapse: collapse;*/
  /*}*/
  /*.head {*/
  /*  color: #5a5a5a;*/
  /*}*/
  /*.head td {*/
  /*  !*background-color: #F7BA52;*!*/
  /*  font-size: 16px;*/
  /*  !*padding: 0;*!*/
  /*  border-top: none;*/
  /*}*/
  /*td{*/
  /*  border-bottom: 1px solid #7f8fa6;*/
  /*  padding: 15px 20px;*/
  /*  text-align: center;*/
  /*  font-size: 18px;*/
  /*  color: #EAEAEA;*/
  /*  height: 20px;*/
  /*}*/
  /*img {*/
  /*  width: 30px;*/
  /*  height: 42px;*/
  /*}*/
</style>
