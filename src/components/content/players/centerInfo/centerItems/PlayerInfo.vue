<template>
  <div class="player-info">
    <div class="box-title">
      <div class="player-status">
        <img src="../../../../../assets/image/players/playerInfo.png" alt="">
        <span>球员资料</span>
      </div>
    </div>
    <InfoTable :players="players"></InfoTable>
  </div>
</template>

<script>
  import InfoTable from "../../table/InfoTable";
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
      InfoTable
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
    }
  }
</script>

<style scoped>
  .player-info {
    position: absolute;
    top:20px;
    left:25px;
    width: 548px;
    height: 929px;
    border-radius: 15px;
    overflow: hidden;
    background-color:#4f4f4f;
  }
  .box-title {
    position: relative;
    width: 548px;
    height: 62px;
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
  }
  img {
    width: 30px;
  }
  span {
    color: #69c0ff;
    font-size: 22px;
  }
</style>
