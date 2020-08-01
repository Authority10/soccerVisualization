<template>
  <center-info>
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
  </center-info>
</template>

<script>
  import CenterInfo from "../../../components/content/players/centerInfo/CenterInfo";
  import PlayerInfo from "../../../components/content/players/centerInfo/centerItems/PlayerInfo";
  import PlayerData from "../../../components/content/players/centerInfo/centerItems/PlayerData";
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
        technical:{}
      }
    },
    computed:{
      sendEventsPosition(){
        return this.players[this.currentPosition][this.playerIndex]["events"]["Pass"]["positions"]
      }
    },
    watch:{
      players(newVal, oldVal) {
        this.currentPosition = Object.keys(newVal)[0];
        this.playerIndex= Object.keys(newVal["ForWard"])[0];
      }
    },
    components:{
      PlayerData,
      CenterInfo,
      PlayerInfo
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
