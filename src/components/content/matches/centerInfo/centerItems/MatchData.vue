<template>
  <div class="matches-data">
    <div class="box-title">
      <div class="data-status">
        <img src="../../../../../assets/image/matches/matchData.png" alt="" class="">
        <span>比赛统计</span>
      </div>
    </div>
    <tab-control-sub
      ref="tab"
      :titles="['首发阵容','球队进攻','球队防守','球队组织','球队技术','球队传球']"
      :fixed="fixed"
      @tabClick="tabClick"
      color="#ff7875">
    </tab-control-sub>
  </div>
</template>

<script>
  import TabControlSub from "../../../../common/tabControl/TabControlSub";
  export default {
    name: "MatchesData",
    props:{
      fixed:false
    },
    data(){
      return{

      }
    },
    components:{
      TabControlSub,
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
    }
  }
</script>

<style scoped>
  .matches-data {
    position: absolute;
    /*overflow: scroll;*/
    top:403px;
    left:23px;
    width: 1433px;
    height: 558px;
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
    color: #ff7875;
    font-size: 22px;
  }
  img {
    width: 30px;
  }
</style>
