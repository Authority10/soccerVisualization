<template>
  <div class="player-info">
    <div class="box-title">
      <div class="player-status">
        <img src="../../../../../assets/image/players/playerInfo.png" alt="">
        <span>球员资料</span>
      </div>
      <div class="team-name">
        <span>广州恒大</span>
      </div>
    </div>

    <player-table
      @showDrawer="firstDrawer"
      :players="players"
    >
    </player-table>

  </div>
</template>

<script>
  import playerTable from "../../../table/PlayerTable";
  import PlayersList from "../../../../../views/players/childComps/PlayersList";
  export default {
    name: "PlayerInfo",
    props:{
      players:{
        type:Object,
        default(){
          return{}
        }
      },
    },
    components:{
      playerTable,
      PlayersList
    },
    data(){
      return{

      }
    },
    computed:{
        // getAge(){
        //   //拿到出生的年份，用2020去减
        //   return  2020-this.players.birthDate.substr(0,4)
        // },
        // isRight(){
        //   return this.players.foot==="right"
        // }
    },
    methods:{
      firstDrawer(){
        this.$emit("firstDrawer")
      }
    }
  }
</script>

<style scoped>
  .player-info {
    position: absolute;
    top:25px;
    left:20px;
    width: 500px;
    height: 930px;
    border-radius: 12px;
    overflow: hidden;
    background-color:#4f4f4f;
  }
  /*第二个对比球员的个人数据*/
  .second-player {
    left:1400px;
  }
  .box-title {
    position: relative;
    width: 500px;
    height: 62px;
    /*display: flex;*/
    /*justify-content: space-around;*/
    background-color: #4b4b4b;
  }
  .player-status {
    position: absolute;
    left: 20px;
    width: 140px;
    height: 62px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /*background-color: red;*/
  }
  .team-name {
    position: absolute;
    right: 10px;
    width: 140px;
    height: 62px;
    text-align: center;
    line-height: 62px;
    /*background-color: red;*/
  }
  img {
    width: 30px;
  }
  span {
    color: #69c0ff;
    font-size: 24px;
  }
</style>
