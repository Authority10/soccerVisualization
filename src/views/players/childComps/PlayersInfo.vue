<template>
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
  </players-center>
</template>

<script>
  import PlayersCenter from "../../../components/content/players/centerInfo/PlayersCenter";
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
        if(this.players[this.currentPosition][this.playerIndex]["events"]===undefined){
          return []
        }else {
          return this.players[this.currentPosition][this.playerIndex]["events"]["Pass"]["positions"]
        }
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
      PlayersCenter,
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
