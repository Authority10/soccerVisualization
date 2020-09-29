<template>
  <div class="squad-table">

    <div class="title">
        <div>姓名</div>
        <div>号码</div>
        <div>位置</div>
        <div>国籍</div>
        <div>身高</div>
        <div>体重</div>
        <div>上场时间</div>
        <div>进球</div>
        <div>助攻</div>
        <div>红/黄牌</div>
    </div>

    <div class="thirty-matches">
      <div v-for="(singlePlayer,index) in squad"
           :key="index"
           class="single-player"
           @click="boxClick">
        <div>{{singlePlayer.personName}}</div>
        <div>{{singlePlayer.personNum}}</div>
        <div>{{singlePlayer.personPosition}}</div>
        <div>{{singlePlayer.countryName}}</div>
        <div>{{singlePlayer.height}}</div>
        <div>{{singlePlayer.weight}}</div>
        <div>{{parseInt(singlePlayer.minutesPlayed)}}</div>
        <div>{{parseInt(singlePlayer.goals)}}</div>
        <div>{{parseInt(singlePlayer.assists)}}</div>
        <div>{{parseInt(singlePlayer.yellowCard)}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SquadTable",
    props:{
      squad:{
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
  .squad-table {
    position:absolute ;
    background-color: #525252;
    border-radius: 15px;
    top:171px;
    left:31px;
    width: 1371px;
    height:1800px;
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
    display: flex;
    justify-content: space-around;
    /*background-color:orange;*/
    text-align: center;
  }
  .title div {
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    /*background-color: blue;*/
  }
  .label {
    position: absolute;
    left: 440px;
    width: 900px;
    height: 50px;
    line-height: 50px;
    display: flex;
    /*background-color: greenyellow;*/
    justify-content: space-between;
  }
  /*.label div {*/
  /*  width: 80px;*/
  /*  !*background-color: red;*!*/
  /*}*/


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
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /*background-color: red;*/
  }
  .single-player {
    width: 1350px;
    height: 50px;
    background-color:#575757;
    border-radius: 15px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .single-player div {
    width: 130px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    /*background-color: brown;*/
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
