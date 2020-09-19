<template>
  <div>
<!--    <players-basic v-if="currentPage===1">-->
    <players-center>
      <player-info
        v-if="players[currentPosition]!==undefined"
        slot="player-person-info"
        :players="players[currentPosition][playerIndex]"
      >
      </player-info>

      <player-data
        v-if="players[currentPosition]!==undefined"
        slot="player-person-data"
        :technical="technical"
        :event-position="sendEventsPosition">
      </player-data>

      <player-info
        v-if="players[currentPosition]!==undefined"
        slot="second-player-person-info"
        class="second-player"
        :players="players[currentPosition][playerIndex]"
      >
      </player-info>

      <players-appearance
      slot="player-person-appearance"
      :players-matches="players[currentPosition][playerIndex]['MatchTable']">
      </players-appearance>
    </players-center>
<!--    <players-matches v-if="currentPage===2" :players-matches="players[currentPosition][playerIndex]['MatchTable']"></players-matches>-->
<!--    <img class="left-arrow" src="../../../assets/image/common/left-arrow.png" alt=""  @click="lastPage">-->
<!--    <img class="right-arrow" src="../../../assets/image/common/right-arrow.png" alt="" @click="nextPage">-->
  </div>
</template>

<script>
  import PlayersCenter from "../../../components/content/players/centerInfo/PlayersCenter";
  import PlayerInfo from "../../../components/content/players/centerInfo/centerItems/PlayerInfo";
  import PlayerData from "../../../components/content/players/centerInfo/centerItems/PlayerData";
  import PlayersAppearance from "../../../components/content/players/centerInfo/centerItems/PlayersAppearance";
  export default {
    name: "PlayersInfo",
    props:{
      players:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    data(){
      return{
        currentPosition:"",
        playerIndex:"",
        technical:{},
        // currentPage:1,
      }
    },
    computed:{
      sendEventsPosition(){
        if(this.players[this.currentPosition][this.playerIndex]["events"]===undefined){
          return []
        }else {
          return this.players[this.currentPosition][this.playerIndex]["events"]["Pass"]["positions"]
        }
      }
    },
    watch:{
      players(newVal,oldVal) {
        this.currentPosition = Object.keys(newVal)[0];
        this.playerIndex= Object.keys(newVal["ForWard"])[0];
      }
    },
    components:{
      PlayerData,
      PlayersCenter,
      PlayerInfo,
      PlayersAppearance
    },
    beforeCreate() {
      this.$bus.$on("sendIndex",(currActivePlayer)=>{
        this.currentPosition = currActivePlayer.currentPosition;
        this.playerIndex = currActivePlayer.playerIndex;
      });
      this.$bus.$on("sendTechnical",(technical)=>{
        this.technical = technical;
      })
    },
    methods:{
      lastPage(){
        this.currentPage--
      },
      nextPage(){
        this.currentPage++
      }
    }
  }
</script>

<style scoped>
  .left-arrow {
    position: fixed;
    top: 450px;
    left: 130px;
    width: 64px;
  }
  .right-arrow {
    position: fixed;
    top: 450px;
    right: 340px;
    width: 64px;
  }

</style>
