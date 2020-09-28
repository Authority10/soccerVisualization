<template>
  <div class="match-skill">
    <div class="home">
      <div class="team-title">
        <img :src="homeSkill.Img" alt="" class="logo">
      </div>
      <div class="rate">
        {{homeSkill.skill_rate.toFixed(2)}}
      </div>
      <div class="name">
        {{homeSkill.name}}
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
        <img :src="awaySkill.Img" alt="" class="logo">
      </div>
      <div class="rate">
        {{awaySkill.skill_rate.toFixed(2)}}
      </div>
      <div class="name">
        {{awaySkill.name}}
      </div>
    </div>
    <div class="butter">

    </div>
  </div>
</template>

<script>
  import RadarMatch from "../../g2plot/RadarMatch";
  export default {
    name: "matchSkill",
    props:{
      homeSkill:{
        type:Object
      },
      awaySkill:{
        type:Object
      }
    },
    computed:{
      radarData(){
        let radarData =[];
        let labels = ["接球",'突破','被抢断'];
        //遍历进攻雷达的所有数据，利用map四舍五入
        let homeScore = (Object.values(this.homeSkill.skillRadar)).map((v)=>{
          return parseInt(v)
        });
        let awayScore = (Object.values(this.awaySkill.skillRadar)).map((v)=>{
          return parseInt(v)
        });

        let home = this.homeSkill.name.slice(0,4);
        let away = this.awaySkill.name.slice(0,4);

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


        // let possession = {};
        // let assists = {};
        // let center = {};
        // let goals = {};
        // let insideShot = {};
        // let keyPass = {};
        // let outsideShot = {};
        // let passAccuracy = {};
        // let passes = {};
        // let shots = {};
        // let shotsOnTarget = {};
        // possession.item = "控球率";
        // possession.score = this.homeAttack.attackingRadar.PossessionZscores;
        // possession.user = "主队";
        // radarData.push(possession);
        //
        // goals.item = "进球";
        // goals.score = this.homeAttack.attackingRadar.goalsZscores;
        // goals.user = "主队";
        // radarData.push(goals);
        //
        // assists.item = "助攻";
        // assists.score = this.homeAttack.attackingRadar.assistsZscores;
        // assists.user = "主队";
        // radarData.push(assists);
        //
        // center.item = "传中";
        // center.score = this.homeAttack.attackingRadar.centerZscores;
        // center.user = "主队";
        // radarData.push(center);
        //
        // passes.item = "传球";
        // passes.score = this.homeAttack.attackingRadar.passesZscores;
        // passes.user = "主队";
        // radarData.push(passes);
        //
        //
        // passAccuracy.item = "传球准确率";
        // passAccuracy.score = this.homeAttack.attackingRadar.passesAccuracyZscores;
        // passAccuracy.user = "主队";
        // radarData.push(passAccuracy);
        //
        // keyPass.item = "关键传球";
        // keyPass.score = this.homeAttack.attackingRadar.keyPassZscores;
        // keyPass.user = "主队";
        // radarData.push(keyPass);
        //
        //
        // shots.item = "射门";
        // shots.score = this.homeAttack.attackingRadar.shotsZscores;
        // shots.user = "主队";
        // radarData.push(shots);
        //
        // shotsOnTarget.item = "射正";
        // shotsOnTarget.score = this.homeAttack.attackingRadar.shotsOnTargetZscores;
        // shotsOnTarget.user = "主队";
        // radarData.push(shotsOnTarget);
        //
        //
        // insideShot.item = "禁区内射门";
        // insideShot.score = this.homeAttack.attackingRadar.insideBoxShotsZscores;
        // insideShot.user = "主队";
        // radarData.push(insideShot);
        //
        //
        // outsideShot.item = "禁区外射门";
        // outsideShot.score = this.homeAttack.attackingRadar.outsideBoxShotsZscores;
        // outsideShot.user = "主队";
        // radarData.push(outsideShot);






        return radarData

      }
    },
    components:{
      RadarMatch
    }
  }
</script>

<style scoped>
  .match-skill {
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

