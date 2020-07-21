<template>
  <center-info>
    <player-info
      v-if="players[currentPosition]!==undefined"
      slot="player-person-info"
      :players="players[currentPosition][playerIndex]"
      @click.native="aaa">
    </player-info>
    <player-data
      slot="player-person-data"
      :technical="technical">

    </player-data>

  </center-info>
</template>

<script>
  import CenterInfo from "../../../components/content/centerInfo/CenterInfo";
  import PlayerInfo from "../../../components/content/centerInfo/centerItems/PlayerInfo";
  import PlayerData from "../../../components/content/centerInfo/centerItems/PlayerData";
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
        console.log(this.currentPosition);
        console.log(this.playerIndex);
      })
      this.$bus.$on("sendTechnical",(technical)=>{
        this.technical = technical
        console.log(this.technical)
      })
    },
    methods:{

    }
  }
</script>

<style scoped>

</style>
