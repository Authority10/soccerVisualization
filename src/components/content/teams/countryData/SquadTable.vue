<template>
  <div class="players-table">
    <div class="title">
        <div class="nothing">Avatar</div>
        <div>Number</div>
        <div>Name</div>
        <div>Position</div>
        <div>Age</div>
        <div>Foot</div>
        <div>Height</div>
        <div>Matches</div>
        <div>T.minutes</div>
        <div>A.minutes</div>
        <div>Cards</div>
        <div>Sub in/out</div>
    </div>
    <div v-for="(players,index) in playersTable.Back"
         :key="index"
         class="single-player"
         @click="boxClick">
         <div>
           <img :src="players.imgNumber.img.countryImg" alt="" class="players-img">
         </div>
         <div>{{parseInt(players.imgNumber.number.countryNumber)}}</div>
         <div class="players-name">{{players.Name.replace(/\s*/g,"")}}</div>
         <div>Back</div>
         <div>{{players.Age}}</div>
         <div class="images">
           <img v-if="players.foot==='right'" src="../../../../assets/image/foot/right-foot.png" alt="" class="foot-img">
           <img v-else src="../../../../assets/image/foot/left-foot.png" alt="" class="foot-img">
         </div>
         <div>{{players.Height}}</div>
         <div>{{players.Match}}</div>
         <div>{{players.Time}}</div>
         <div>{{parseInt(players.AverageMinutes)}}</div>
         <div>{{players.Cards}}</div>
         <div>{{players.Sub}}</div>
    </div>
    <div v-for="(players,index) in playersTable.Center"
         :key="index"
         class="single-player"
         @click="boxClick">
          <div>
            <img :src="players.imgNumber.img.countryImg" alt="" class="players-img">
          </div>
          <div>{{parseInt(players.imgNumber.number.countryNumber)}}</div>
          <div class="players-name">{{players.Name.replace(/\s*/g,"")}}</div>
          <div>Center</div>
          <div>{{players.Age}}</div>
          <div>
            <img v-if="players.foot==='right'" src="../../../../assets/image/foot/right-foot.png" alt="" class="foot-img">
            <img v-else src="../../../../assets/image/foot/left-foot.png" alt="" class="foot-img">
          </div>
          <div>{{players.Height}}</div>
          <div>{{players.Match}}</div>
          <div>{{players.Time}}</div>
          <div>{{parseInt(players.AverageMinutes)}}</div>
          <div>{{players.Cards}}</div>
          <div>{{players.Sub}}</div>
    </div>
    <div v-for="(players,index) in playersTable.ForWard"
         :key="index"
         class="single-player"
         @click="boxClick">
      <div>
        <img :src="players.imgNumber.img.countryImg" alt="" class="players-img">
      </div>
      <div>{{parseInt(players.imgNumber.number.countryNumber)}}</div>
      <div class="players-name">{{players.Name.replace(/\s*/g,"")}}</div>
      <div>ForWard</div>
      <div>{{players.Age}}</div>
      <div>
        <img v-if="players.foot==='right'" src="../../../../assets/image/foot/right-foot.png" alt="" class="foot-img">
        <img v-else src="../../../../assets/image/foot/left-foot.png" alt="" class="foot-img">
      </div>
      <div>{{players.Height}}</div>
      <div>{{players.Match}}</div>
      <div>{{players.Time}}</div>
      <div>{{parseInt(players.AverageMinutes)}}</div>
      <div>{{players.Cards}}</div>
      <div>{{players.Sub}}</div>
    </div>
    <div v-for="(players,index) in playersTable.GoalKeeper"
         :key="index"
         class="single-player"
         @click="boxClick">
      <div>
        <img :src="players.imgNumber.img.countryImg" alt="" class="players-img">
      </div>
      <div>{{parseInt(players.imgNumber.number.countryNumber)}}</div>
      <div class="players-name">{{players.Name.replace(/\s*/g,"")}}</div>
      <div>GoalKeeper</div>
      <div>{{players.Age}}</div>
      <div>
        <img v-if="players.foot==='right'" src="../../../../assets/image/foot/right-foot.png" alt="" class="foot-img">
        <img v-else src="../../../../assets/image/foot/left-foot.png" alt="" class="foot-img">
      </div>
      <div>{{players.Height}}</div>
      <div>{{players.Match}}</div>
      <div>{{players.Time}}</div>
      <div>{{parseInt(players.AverageMinutes)}}</div>
      <div>{{players.Cards}}</div>
      <div>{{players.Sub}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SquadTable",
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
  .players-table {
    position:absolute ;
    background-color: #525252;
    border-radius: 15px;
    top:170px;
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
    width: 1350px;
    height: 50px;
    /*background-color:red;*/
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title div {
    width: 80px;
  }
  .nothing {
   visibility: hidden;
  }
  .players-name {
    text-align: left;
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
    width: 80px;
  }
  .players-img {
    width: 30px;
    height: 42px;
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
