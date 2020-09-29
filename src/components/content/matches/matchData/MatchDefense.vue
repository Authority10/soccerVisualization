<template>
  <div class="match-defense">
    <div class="home">
      <div class="team-title">
        <img :src="homeDefense.Img" alt="" class="logo">
      </div>
      <div class="rate">
        {{homeDefense.defending_rate.toFixed(2)}}
      </div>
      <div class="name">
        {{homeDefense.name}}
      </div>
    </div>
    <div class="radar">
      <div class="radar-title"></div>

      <div class="radar-img">
        <radar-match
          :radar-data="radarData">
        </radar-match>
      </div>

    </div>

    <div class="away">
      <div class="team-title">
        <img :src="awayDefense.Img" alt="" class="logo">
      </div>
      <div class="rate">
        {{awayDefense.defending_rate.toFixed(2)}}
      </div>
      <div class="name">
        {{awayDefense.name}}
      </div>
    </div>
    <div class="butter">
      <butter-defense
        :behavior0="homeDefense.defendingButter"
        :behavior1="awayDefense.defendingButter"
        :size="18">
      </butter-defense>
    </div>
  </div>
</template>

<script>
  import RadarMatch from "../../g2plot/radar/RadarMatch";
  import ButterDefense from "../../g2plot/butter/ButterDefense";
  export default {
    name: "MatchDefense",
    props:{
      homeDefense:{
        type:Object
      },
      awayDefense:{
        type:Object
      }
    },
    components:{
      RadarMatch,
      ButterDefense
    },
    computed:{
      radarData(){
        let radarData =[];
        let labels = ["拦截",'解围','抢断','犯规','封堵射门','封堵传球','黄牌','红牌'];
        //遍历进攻雷达的所有数据，利用map四舍五入
        let homeScore = (Object.values(this.homeDefense.defendingRadar)).map((v)=>{
          return parseInt(v)
        });
        let awayScore = (Object.values(this.awayDefense.defendingRadar)).map((v)=>{
          return parseInt(v)
        });

        let home = this.homeDefense.name.slice(0,4);
        let away = this.awayDefense.name.slice(0,4);

        //将labels和score数据循环写入对象，推进数组
        for(let index = 0; index < labels.length;index++) {
          let obj = {};
          obj.item = labels[index];
          obj.score = homeScore[index];
          obj.user = home;
          radarData.push(obj)
        }

        for(let index = 0; index < labels.length;index++) {
          let obj = {};
          obj.item = labels[index];
          obj.score = awayScore[index];
          obj.user = away;
          radarData.push(obj)
        }
        return radarData
      }
    }
  }
</script>

<style scoped>
  .match-defense {
    position: absolute;
    top: 171px;
    left: 31px;
    width: 1371px;
    height: 364px;
    border-radius: 12px;
    background-color: #555555;
  }
  .home {
    position: absolute;
    top: 32px;
    left: 52px;
    border-radius: 12px;
    width: 140px;
    height:318px;
    overflow: hidden;
    background-color: #6a6a6a;
  }
  .team-title {
    text-align: center;
    line-height: 100px;
    font-size: 20px;
    width: 140px;
    height: 100px;
    background-color: #616161;
  }
  .logo {
    margin-top: 10px;
    width: 80px;
    height: 80px;
  }
  .home .rate {
    position: absolute;
    top: 130px;
    left: 10px;
    width:120px;
    border-radius: 12px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    font-size: 30px;
    color: white;
    background-color: #63a8db;
  }
  .name {
    position: absolute;
    left:10px;
    top: 250px;
    width:120px;
    line-height: 60px;
    height: 60px;
    color: white;
    font-size: 28px;
    text-align: center;
    /*background-color: red;*/
  }
  .radar {
    position: absolute;
    left: 212px;
    top: 32px;
    width: 303px;
    height: 318px;
    border-radius: 12px;
    overflow: hidden;
    background-color: #6a6a6a;
  }
  .radar-title {
    background-color: #616161;
    width: 303px;
    height: 40px;
  }
  .radar-img {
    position: relative;
    /*background-color: blue;*/
    width: 303px;
    height: 278px;
  }
  .away {
    position: absolute;
    top: 32px;
    left: 535px;
    border-radius: 12px;
    width: 140px;
    height:318px;
    overflow: hidden;
    background-color: #6a6a6a;
  }
  .away .rate {
    position: absolute;
    top: 130px;
    left: 10px;
    width:120px;
    border-radius: 12px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    font-size: 30px;
    color: white;
    background-color: #6e9e53;
  }
  .butter {
    position: absolute;
    top: 32px;
    left: 690px;
    width: 666px;
    height: 318px;
    border-radius: 12px;
    background-color: #6a6a6a;
  }
</style>
