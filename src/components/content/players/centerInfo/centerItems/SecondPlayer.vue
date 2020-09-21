<template>
  <div class="player-info">
    <div class="box-title">
      <div class="player-status">
        <img src="../../../../../assets/image/players/playerInfo.png" alt="">
        <span>球员资料</span>
      </div>
    </div>
    <player-table
      @showDrawer="secondDrawer"
     :players="players"
    >
    </player-table>
  </div>
</template>

<script>
  import PlayerTable from "../../../table/PlayerTable";
  export default {
    name: "SecondPlayer",
    props:{
      players:{
        type:Object,
        default(){
          return{}
        }
      },
    },
    components:{
      PlayerTable
    },
    methods:{
      secondDrawer(){
        this.$emit("secondDrawer")
      }
    }
  }
</script>

<style scoped>
  .player-info {
    position: absolute;
    top:20px;
    left:1285px;
    width: 500px;
    height: 800px;
    border-radius: 15px;
    overflow: hidden;
    background-color:#4f4f4f;
  }
  .box-title {
    position: relative;
    width: 500px;
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
    font-size: 24px;
  }
</style>
