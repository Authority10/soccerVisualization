<template>
  <center-info>
    <center-top-item
      v-if="players[currentPosition]!==undefined"
      slot="player-person-info"
      :players="players[currentPosition][playerIndex]"
      @click.native="aaa">
    </center-top-item>
  </center-info>
</template>

<script>
  import CenterInfo from "../../../components/content/centerInfo/CenterInfo";
  import CenterTopItem from "../../../components/content/centerInfo/centerItems/CenterTopItem";
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
        playerIndex:""
      }
    },
    watch:{
      players(newVal, oldVal) {
        this.currentPosition = Object.keys(newVal)[0];
        this.playerIndex= Object.keys(newVal["ForWard"])[0];
      }
    },
    components:{
      CenterInfo,
      CenterTopItem
    },
    beforeCreate() {
      this.$bus.$on("sendIndex",(currActivePlayer)=>{
        this.currentPosition = currActivePlayer.currentPosition;
        this.playerIndex = currActivePlayer.playerIndex;
        console.log(this.currentPosition);
        console.log(this.playerIndex);
      })
    },
    methods:{
      aaa(){
        console.log(this.$parent.currentPosition)
      }
    }
  }
</script>

<style scoped>

</style>
