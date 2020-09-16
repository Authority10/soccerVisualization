<template>
  <div class="country-data">
    <div class="box-title">
      <div class="data-status">
        <img src="../../../../../assets/image/teams/teamData.png" alt="" class="">
        <span>球队统计</span>
      </div>
    </div>
    <tab-control-sub
    ref="tab"
    :titles="['球队阵容','球队进攻','球队防守','球队其他','球队其他']"
    :fixed="fixed"
    @tabClick="tabClick"
    color="#FFF566">
    </tab-control-sub>

    <squad-table
      :playersTable="activeCountry.playerTable"
      ref="playersTable"
      v-if="playersTable">
    </squad-table>
<!--      <country-attack  v-if="CountryAttack"  :radar="activeCountry.Radar.attack"></country-attack>-->
<!--      <country-defense v-if="CountryDefense" :radar="activeCountry.Radar.defense"></country-defense>-->
  </div>
</template>

<script>
  import TabControlSub from "../../../../common/tabControl/TabControlSub";
  import SquadTable from "../../countryData/SquadTable";
  import CountryAttack from "../../countryData/CountryAttack";
  import CountryDefense from "../../countryData/CountryDefense";
  export default {
    name: "CountryData",
    props:{
      activeCountry:{
        type:Object,
        default(){
          return {}
        }
      },
      fixed:false
    },
    data(){
      return{
        playersTable: true,
        CountryAttack:false,
        CountryDefense:false,
      }
    },
    components:{
      TabControlSub,
      SquadTable,
      CountryAttack,
      CountryDefense
    },
    methods:{
      tabClick(index){
        switch (index) {
          case 0:
            this.playersTable = true;
            this.CountryAttack = false;
            this.CountryDefense = false;
            break;
          case 1:
            this.playersTable = false;
            this.CountryAttack = true;
            this.CountryDefense = false;
            break;
          case 2:
            this.playersTable = false;
            this.CountryAttack = false;
            this.CountryDefense = true;
            break;
          case 3:
            this.currentPosition = "GoalKeeper";
            break
        }
      },
    },
    mounted() {
      console.log(this.$refs.tab.$el.offsetTop)
      // console.log(this.$refs.tab)
      // console.log(this.$refs.playersTable)
    }
  }
</script>

<style scoped>
  .country-data {
    position: absolute;
    /*overflow: scroll;*/
    top:260px;
    left:20px;
    width: 1433px;
    height: 2100px;
    border-radius: 15px;
    overflow: hidden;
    background-color:#4f4f4f;
  }
  .box-title {
    width: 1433px;
    height: 62px;
    background-color:#4b4b4b;
  }
  .data-status {
    position: absolute;
    left: 20px;
    width: 140px;
    height: 62px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span {
    color: #FFF566;
    font-size: 22px;
  }
  img {
    width: 30px;
  }
  /*.FixedTab {*/
  /*  position: fixed;*/
  /*  background-color: red;*/
  /*  top: 500px;*/
  /*  left: 4px;*/
  /*}*/
</style>
