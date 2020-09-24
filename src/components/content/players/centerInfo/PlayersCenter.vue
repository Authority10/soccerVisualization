<template>
    <div class="center-info">
      <el-drawer
        :visible.sync="leftShow"
        :direction="leftDrawer"
        :modal="true"
        size='408px'
        :withHeader="false"
      >
        <players-list
        :players="homeTeam">
        </players-list>
      </el-drawer>

      <el-drawer
        :visible.sync="rightShow"
        :direction="rightDrawer"
        :modal="true"
        size='408px'
        :withHeader="false"
      >
        <players-list
          :players="awayTeam">
        </players-list>
      </el-drawer>
<!--      <first-player-->
<!--        @firstDrawer="firstDrawer"-->
<!--        :players="players[currentPosition][playerIndex]"-->
<!--      >-->
<!--      </first-player>-->

<!--      <player-data-->
<!--        :technical="technical"-->
<!--        :event-position="sendEventsPosition">-->
<!--      </player-data>-->

<!--      <second-player-->
<!--        @secondDrawer="secondDrawer"-->
<!--        :players="players[currentPosition][playerIndex]"-->
<!--      >-->
<!--      </second-player>-->
      <first-player
        @firstDrawer="firstDrawer"
      >
      </first-player>

      <player-data
        >
      </player-data>

      <second-player
      @secondDrawer="secondDrawer"
      >
      </second-player>

      <players-comparison>
      </players-comparison>

      <heat-area>
      </heat-area>
    </div>
</template>

<script>
  import 'element-ui/lib/theme-chalk/index.css'
  import PlayersList from "../../../../views/players/childComps/PlayersList";
  import FirstPlayer from "./centerItems/FirstPlayer";
  import PlayerData from "./centerItems/PlayerData";
  import SecondPlayer from "./centerItems/SecondPlayer";
  import PlayersComparison from "./centerItems/PlayersComparison";
  import HeatArea from "./centerItems/HeatArea";

  export default {
    name: "PlayersCenter",
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
        leftShow: false,
        rightShow: false,
        leftDrawer: 'ltr',
        rightDrawer:'rtl',
        currentPosition:"ForWard",
        playerIndex:"3682",
        technical:{},
      }
    },
    components:{
      PlayersList,
      SecondPlayer,
      FirstPlayer,
      PlayerData,
      PlayersComparison,
      HeatArea
    },
    computed:{
      homeTeam(){
        return Object.values(this.players)[0]
      },
      awayTeam(){
        return Object.values(this.players)[1]
      },
      // sendEventsPosition(){
      //   if(this.players[this.currentPosition][this.playerIndex]["events"]===undefined){
      //     return []
      //   }else {
      //     return this.players[this.currentPosition][this.playerIndex]["events"]["Pass"]["positions"]
      //   }
      // }
    },
    beforeCreate() {
      // this.$bus.$on("sendIndex",(currActivePlayer)=>{
      //   this.currentPosition = currActivePlayer.currentPosition;
      //   this.playerIndex = currActivePlayer.playerIndex;
      // });
      // this.$bus.$on("sendTechnical",(technical)=>{
      //   this.technical = technical;
      // })
    },
    methods:{
      firstDrawer(){
        this.leftShow = true
      },
      secondDrawer(){
        this.rightShow = true
      }
    }
  }

</script>

<style scoped>
   .center-info {
     position: absolute;
     width: 1808px;
     height: 983px;
     top:  97px;
     left: 112px;
     background-color:#404040;
     /*background-color:red;*/
     overflow: scroll;
     overflow-x:hidden;
   }
   .center-info::-webkit-scrollbar {
     display: none;
   }
</style>
