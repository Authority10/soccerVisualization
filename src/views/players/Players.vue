<template>
<div>
    <players-list
      :players="getPlayers"
    ></players-list>

    <players-info
      :players="getPlayers"
    ></players-info>
</div>

</template>

<script>
  import PlayersList from "./childComps/PlayersList";
  import PlayersInfo from "./childComps/PlayersInfo";
  import {findTeam, Players} from "../../network/players";

  export default {
    name: "Players",
    data(){
      return{
        getPlayers:{},
      }
    },
    components: {
      PlayersInfo,
      PlayersList,
    },
    created() {
      this.findTeam(4418)
      // this.findTeam(this.$route.params.teamID)
    },
    beforeRouteEnter(to,from,next){
      next(vm => {
        // console.log(to);
        // console.log(vm);
        vm.findTeam(to.params.teamID)
      })
    },
    activated(){
      this.findTeam(this.$route.params.teamID)
    },
    methods:{
      /**
       * 网络请求的方法
       */
      findTeam(teamID){
        findTeam(teamID).then(res=>{
          console.log(res);
          //利用封装好的类来接受球队里的球员信息
          var abc = res[0]
          this.getPlayers = new Players(abc)
        })
      },
    },

  }
</script>

<style scoped>

</style>
