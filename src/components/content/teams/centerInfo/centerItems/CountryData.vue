<template>
  <div class="country-data">
      <tab-control-sub
      ref="tab"
      :titles="['球队阵容','球队进攻','球队防守','球队其他','球队其他']"
      :fixed="fixed"
      @tabClick="tabClick">
      </tab-control-sub>
      <players-table
        :playersTable="activeCountry.playerTable"
        ref="playersTable"
        v-if="playersTable">
      </players-table>
      <country-attack  v-if="CountryAttack"  :radar="activeCountry.Radar.attack"></country-attack>
      <country-defense v-if="CountryDefense" :radar="activeCountry.Radar.defense"></country-defense>
  </div>
</template>

<script>
  import TabControlSub from "../../../../common/tabControl/TabControlSub";
  import PlayersTable from "../../countryData/PlayersTable";
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
      PlayersTable,
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
    top:270px;
    left:140px;
    width: 1200px;
    height: 500px;
    /*background-color:red;*/
  }
  span {
    position: absolute;
    font-weight: bold;
    font-size: 22px;
    top:10px;
    left:20px;
  }
  .FixedTab {
    position: fixed;
    background-color: red;
    top: 500px;
    left: 4px;
  }
</style>
