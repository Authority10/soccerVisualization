<template>
  <div class="players-appearance">
    <div class="box-title">
      <div class="appearance-status">
        <img src="../../../../../assets/image/players/playerData.png" alt="">
        <span>统计信息</span>
      </div>
    </div>
    <tab-control-sub
      class="player-use"
      ref="tab"
      :titles="['综合数据','进攻数据','防守数据','传球数据']"
      :fixed="fixed"
      @tabClick="tabClick"
      color="#69c0ff">
    </tab-control-sub>
    <all-table
      v-if="currPage===0"
      :home-all="homeAll"
      :away-all="awayAll"
      :quota-title="['','助攻','控球时间','犯规','进球','传球准确率','传球','射门','射正']">
    </all-table>
    <attack-table
      v-if="currPage===1"
      :home-attack="homeAttack"
      :away-attack="awayAttack"
      :quota-title="['','传中','接球','传中','被犯规','关键传球','越位']">
    </attack-table>
    <defend-table
      v-if="currPage===2"
      :home-defense="homeDefense"
      :away-defense="awayDefense"
      :quota-title="['','封堵传球','封堵射门','解围','拦截','抢断','扑救','黄牌','红牌',]">
    </defend-table>
    <pass-table
      v-if="currPage===3"
      :home-pass="homePass"
      :away-pass="awayPass"
      :quota-title="['','向后传球占比','斜向传球占比','横向传球占比','直传占比','长传','短传','长传成功率','短传成功率',]">
    </pass-table>
  </div>
</template>

<script>
  import TabControlSub from "../../../../common/tabControl/TabControlSub";

  import AllTable from "../../../table/Comparison/AllTable";
  import AttackTable from "../../../table/Comparison/AttackTable";
  import DefendTable from "../../../table/Comparison/DefendTable";
  import PassTable from "../../../table/Comparison/PassTable";
  export default {
    name: "PlayersComparison",
    props:{
      players:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    data(){
      return {
        fixed:false,
        currPage:0
      }
    },
    computed:{
      //4项指标的处理，额外还需要往对象中添加球员名字
      homeAll(){
        let homeAll = this.players['homeTeam'][this.$store.state.homeCurrPosition][this.$store.state.homeCurrIndex]["All"];
        homeAll.name = this.players['homeTeam'][this.$store.state.homeCurrPosition][this.$store.state.homeCurrIndex]["personName"];
        console.log(homeAll)
        return homeAll
      },
      awayAll(){
        let awayAll = this.players['awayTeam'][this.$store.state.awayCurrPosition][this.$store.state.awayCurrIndex]["All"];
        awayAll.name = this.players['awayTeam'][this.$store.state.awayCurrPosition][this.$store.state.awayCurrIndex]["personName"];
        return awayAll
      },
      homeAttack(){
        let homeAttack = this.players['homeTeam'][this.$store.state.homeCurrPosition][this.$store.state.homeCurrIndex]["Attack"];
        homeAttack.name = this.players['homeTeam'][this.$store.state.homeCurrPosition][this.$store.state.homeCurrIndex]["personName"];
        return homeAttack
      },
      awayAttack(){
        let awayAttack = this.players['awayTeam'][this.$store.state.awayCurrPosition][this.$store.state.awayCurrIndex]["Attack"];
        awayAttack.name = this.players['awayTeam'][this.$store.state.awayCurrPosition][this.$store.state.awayCurrIndex]["personName"];
        return awayAttack
      },
      homeDefense(){
        let homeDefense = this.players['homeTeam'][this.$store.state.homeCurrPosition][this.$store.state.homeCurrIndex]["Denfense"];
        homeDefense.name = this.players['homeTeam'][this.$store.state.homeCurrPosition][this.$store.state.homeCurrIndex]["personName"];
        return homeDefense
      },
      awayDefense(){
        let awayDefense = this.players['awayTeam'][this.$store.state.awayCurrPosition][this.$store.state.awayCurrIndex]["Denfense"];
        awayDefense.name = this.players['awayTeam'][this.$store.state.awayCurrPosition][this.$store.state.awayCurrIndex]["personName"];
        return awayDefense
      },
      homePass(){
        let homePass = this.players['homeTeam'][this.$store.state.homeCurrPosition][this.$store.state.homeCurrIndex]["Pass"];
        homePass.name = this.players['homeTeam'][this.$store.state.homeCurrPosition][this.$store.state.homeCurrIndex]["personName"];
        return homePass
      },
      awayPass(){
        let awayPass = this.players['awayTeam'][this.$store.state.awayCurrPosition][this.$store.state.awayCurrIndex]["Pass"];
        awayPass.name = this.players['awayTeam'][this.$store.state.awayCurrPosition][this.$store.state.awayCurrIndex]["personName"];
        return awayPass
      },
    },
    components:{
      TabControlSub,
      AllTable,
      AttackTable,
      DefendTable,
      PassTable
    },
    methods:{
      tabClick(index){
        switch (index) {
          case 0:
            this.currPage = 0
            break;
          case 1:
            this.currPage = 1
            break;
          case 2:
            this.currPage = 2
            break;
          case 3:
            this.currPage = 3
            break
        }
      },
    }
  }
</script>

<style scoped>
 .players-appearance {
   position: absolute;
   width: 1758px;
   height: 425px;
   top:  975px;
   left: 20px;
   background-color:#4f4f4f;
   overflow: hidden;
   border-radius: 12px;
 }
 .box-title {
   position: relative;
   width: 1770px;
   height: 62px;
   background-color: #4b4b4b;
 }
 .appearance-status {
   position: absolute;
   left: 20px;
   width: 140px;
   height: 62px;
   display: flex;
   justify-content: space-between;
   align-items: center;
 }
 span {
   color: #69c0ff;
   font-size: 24px;
 }
 img {
   width: 30px;
 }
</style>
