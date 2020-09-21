<template>

    <players-center
    :players="players">

<!--      <player-info-->
<!--        v-if="players[currentPosition]!==undefined"-->
<!--        slot="player-person-info"-->
<!--        :players="players[currentPosition][playerIndex]"-->
<!--      >-->
<!--      </player-info>-->

<!--      <player-data-->
<!--        v-if="players[currentPosition]!==undefined"-->
<!--        slot="player-person-data"-->
<!--        :technical="technical"-->
<!--        :event-position="sendEventsPosition">-->
<!--      </player-data>-->

<!--      <player-info-->
<!--        v-if="players[currentPosition]!==undefined"-->
<!--        slot="second-player-person-info"-->
<!--        class="second-player"-->
<!--        :players="players[currentPosition][playerIndex]"-->
<!--      >-->
<!--      </player-info>-->

<!--      <players-appearance-->
<!--      slot="player-person-appearance"-->
<!--      :players-matches="players[currentPosition][playerIndex]['MatchTable']">-->
<!--      </players-appearance>-->

    </players-center>

</template>

<script>
  import PlayersCenter from "../../../components/content/players/centerInfo/PlayersCenter";
  // import PlayerInfo from "../../../components/content/players/centerInfo/centerItems/PlayerInfo";
  // import PlayerData from "../../../components/content/players/centerInfo/centerItems/PlayerData";
  // import PlayersAppearance from "../../../components/content/players/centerInfo/centerItems/PlayersAppearance";
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
      PlayersCenter
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

    }
  }
</script>

<style scoped>

</style>
