<template>
  <div class="country-data">
    <tab-control-sub
      :titles="['球队阵容','球队进攻','球队防守','球队其他','球队其他']"
      @tabClick="tabClick">
    </tab-control-sub>

    <players-table
      :playersTable="activePlayers"
      v-if="playersTable">
    </players-table>

    <country-attack  v-if="CountryAttack"></country-attack>
    <country-defense v-if="CountryDefense"></country-defense>
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
      activePlayers:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return{
        playersTable: true,
        CountryAttack:false,
        CountryDefense:false
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
      }
    }
  }
</script>

<style scoped>
  .country-data {
    position: relative;
    overflow: scroll;
    top:20px;
    left:20px;
    width: 650px;
    height: 400px;
    background-color:rgba(85,239,195,0.3);
    border-radius: 10px;
  }
  span {
    position: absolute;
    font-weight: bold;
    font-size: 22px;
    top:10px;
    left:20px;
  }
</style>
