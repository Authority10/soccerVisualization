<template>
  <div class="player-data">
    <div class="box-title">
      <div class="data-status">
        <img src="../../../../../assets/image/players/playerData.png" alt="">
        <span class="status-comparison">比赛表现对比</span>
      </div>
    </div>
    <div class="home-player">
      <div class="home-title">
            主队球员
       </div>
      <div class="home-rate-text">
            评分
      </div>
      <div class="home-text">
        <span>综合</span>
        <span>进攻</span>
        <span>防守</span>
        <span>技巧</span>
        <span>组织</span>
      </div>
      <div class="rate-ui">
          <div v-for="(value,index) in homeRate">
            <el-rate
              v-model="homeRate[index]"
              disabled
              :colors="['#6894b4','#6894b4','#6894b4']"
              void-color='#F7BA2A'
            >
            </el-rate>
          </div>
      </div>
      <div class="home-rate">
             {{homePlayer}}
       </div>
    </div>
    <div class="radar">
      <div class="radar-title">
      </div>
      <div class="radar-img">
        <RadarStable>
        </RadarStable>
      </div>
    </div>
    <div class="away-player">
      <div class="away-title">
           客队球员
      </div>
      <div class="away-rate-text">
            评分
      </div>
      <div class="away-text">
        <span>综合</span>
        <span>进攻</span>
        <span>防守</span>
        <span>技巧</span>
        <span>组织</span>
      </div>
      <div class="rate-ui">
        <div v-for="(value,index) in awayRate" >
          <el-rate
            v-model="awayRate[index]"
            disabled
            :colors="['#6d9d52','#6d9d52','#6d9d52']"
            void-color='#F7BA2A'
            >
          </el-rate>
        </div>
      </div>
      <div class="away-rate">
        {{awayPlayers}}
      </div>
    </div>
    <div class="group-chart">
      <div class="chart-title">
          数据对比
      </div>
      <div>
        <Chart>
        </Chart>
      </div>
    </div>
  </div>
</template>

<script>
  import RadarStable from "../../../g2plot/RadarStable";
  import Chart from "../../../g2/Chart"

  export default {
    name: "PlayerData",
    props:{
       players:{
         type:Object,
         default(){
           return {

           }
         }
       },
    },
    data(){
      return {
        what:{},
        values:[2.32,4.55,3.26,3.69,4.11],
        // homePosition:"forward",
        // awayPosition:"forward",
        // homeIndex:0,
        // awayIndex:0,
      }
    },
    watch:{

    },
    computed:{
      home(){
        return this.players['homeTeam'][this.$store.state.homeCurrPosition][this.$store.state.homeCurrIndex]
      },
      away(){
        return this.players['awayTeam'][this.$store.state.awayCurrPosition][this.$store.state.awayCurrIndex]
      },
      homePlayer(){
        return this.players['homeTeam'][this.$store.state.homeCurrPosition][this.$store.state.homeCurrIndex]['all_rate']
      },
      awayPlayers(){
        return this.players['awayTeam'][this.$store.state.awayCurrPosition][this.$store.state.awayCurrIndex]['all_rate']
      },
      homeRate(){
        let rateArray = [];
        let currPlayer =  this.players['homeTeam'][this.$store.state.homeCurrPosition][this.$store.state.homeCurrIndex]
        rateArray.push(parseFloat(currPlayer['all_rate']));
        rateArray.push(parseFloat(currPlayer['attacking_rate']));
        rateArray.push(parseFloat(currPlayer['defending_rate']));
        rateArray.push(parseFloat(currPlayer['skill_rate']));
        rateArray.push(parseFloat(currPlayer['orgnizing_rate']));
        for (var i=0;i<rateArray.length;i++)
        {
          rateArray[i] = parseFloat((rateArray[i] /2).toFixed(2))
        }
        return rateArray
      },
      awayRate(){
        let rateArray = [];
        let currPlayer = this.players['awayTeam'][this.$store.state.awayCurrPosition][this.$store.state.awayCurrIndex]
        rateArray.push(parseFloat(currPlayer['all_rate']));
        rateArray.push(parseFloat(currPlayer['attacking_rate']));
        rateArray.push(parseFloat(currPlayer['defending_rate']));
        rateArray.push(parseFloat(currPlayer['skill_rate']));
        rateArray.push(parseFloat(currPlayer['orgnizing_rate']));
        for (var i=0;i<rateArray.length;i++)
        {
          rateArray[i] = parseFloat((rateArray[i] /2).toFixed(2))
        }
        return rateArray
      },
    },
    created() {
      // this.$store.state.homeCurrPosition = this.homePosition;
      // this.$store.state.homeCurrIndex = this.homeIndex;
      // this.$bus.$on("sendHome",(currPlayer)=>{
      //   this.homeIndex = currPlayer.currentIndex;
      //   this.homePosition = currPlayer.position;
      // });
      // this.$bus.$on("sendAway",(currPlayer)=>{
      //   this.awayIndex = currPlayer.currentIndex;
      //   this.awayPosition = currPlayer.position;
      // })
      // this.what = this.$store.state.teams
      // this.$bus.$on("sendHome",(currPlayer)=>{
      //   this.homeIndex = currPlayer.currentIndex
      //   this.homePosition = currPlayer.position
      // })
      // this.$bus.$on("sendAway",(currPlayer)=>{
      //   this.awayIndex = currPlayer.currentIndex
      //   this.awayPosition = currPlayer.position
      // })
    },
    updated() {
      // this.$store.state.homeCurrPosition = this.homePosition;
      // this.$store.state.homeCurrIndex = this.homeIndex;
      // this.what = this.$store.state.teams
    },
    components:{
      RadarStable,
      Chart
    }
  }
</script>

<style scoped>
  .player-data {
    position: absolute;
    top:25px;
    left:540px;
    width: 715px;
    height: 930px;
    border-radius: 12px;
    overflow: hidden;
    background-color:#4f4f4f;
  }
  .box-title {
    position: relative;
    width: 715px;
    height: 62px;
    display: flex;
    justify-content: center;
    background-color: #595959;
  }
  .data-status {
    width: 190px;
    height: 62px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /*background-color: red;*/
  }
  img {
    width: 30px;
  }
  .status-comparison {
    color: #69c0ff;
    font-size: 24px;
  }
  .home-player {
    position: absolute;
    top: 92px;
    left: 25px;
    width: 162px;
    height: 332px;
    border-radius: 12px;
    background-color:#686868;
    overflow:hidden;
  }
  .home-title {
    position: relative;
    width: 162px;
    height: 40px;
    font-size: 18px;
    color: white;
    text-align: center;
    line-height: 42px;
    background-color:#595959;
  }
  .away-player {
    position: absolute;
    top: 92px;
    left: 530px;
    width: 162px;
    height: 332px;
    border-radius: 12px;
    background-color:#686868;
    overflow:hidden;
  }
  .away-title {
    position: relative;
    width: 162px;
    height: 40px;
    font-size: 18px;
    color: white;
    text-align: center;
    line-height: 42px;
    background-color:#595959;
  }
  .radar {
    position: absolute;
    top: 92px;
    left: 207px;
    width: 303px;
    height: 332px;
    border-radius: 12px;
    overflow: hidden;
    background-color: #696969;
  }
  .radar-title {
    width: 303px;
    height: 40px;
    background-color:#595959;
  }
  .home-rate {
    position: absolute;
    bottom: 0;
    width: 162px;
    height: 80px;
    color: white;
    text-align: center;
    line-height: 80px;
    font-size: 34px;
    background-color: #6894b4;
   }
   .away-rate {
     position: absolute;
     bottom: 0;
     width: 162px;
     height: 80px;
     color: white;
     text-align: center;
     font-size: 34px;
     line-height: 80px;
     background-color: #6d9d52;
   }

   .home-rate-text {
     margin: 10px auto;
     font-size: 36px;
     text-align: center;
     color:#6894b4;
   }

   .away-rate-text {
     margin: 10px auto;
     font-size: 36px;
     text-align: center;
     color:#6d9d52;
     /*background-color: red;*/
   }

  .home-text {
    position: absolute;
    top: 115px;
    left: 15px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    width: 30px;
    height: 120px;
  }

  .home-text span {
    font-weight: bold;
    color:#6894b4;
    font-size: 12px;
  }

  .away-text {
    position: absolute;
    top: 115px;
    left: 15px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    width: 30px;
    height: 120px;
  }
  .away-text span {
    font-weight: bold;
    color:#6d9d52;
    font-size: 12px;
  }

  .rate-ui {
     position: absolute;
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     top: 115px;
     left: 50px;
     width: 106px;
     height: 128px;
     /*background-color: red;*/
  }
  .rate-ui /deep/  .el-rate__icon {
     font-size: 0.08rem;
     margin-right: 0.03rem;
  }

  .group-chart {
    position: absolute;
    top: 469px;
    left: 25px;
    width: 666px;
    height: 439px;
    overflow: hidden;
    border-radius: 12px;
    background-color:#555555;
  }
  .chart-title {
    position: relative;
    width: 666px;
    height: 42px;
    color: white;
    font-size: 14px;
    line-height: 42px;
    text-align: center;
    background-color:#595959;
  }
  .chart {
    position: absolute;
    /*background-color: red;*/
    width: 900px;
    height: 350px;
  }
  .heat-map {
    width: 815px;
    height: 374px;
    border-radius: 12px;
    background-color: #525252;
    margin: 0 auto;
  }
</style>
