<template>
<div>
  <players-list :players="players"></players-list>
  <players-info
    :players="players"
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
        // teamID:null,
        realID:null,
        players:{},
      }
    },
    components: {
      PlayersInfo,
      PlayersList,
    },
    created() {
      if(this.$route.params.teamID===undefined){
        this.realID = this.$store.state.teamID;
      }else {
        this.realID = this.$route.params.teamID;
        this.$store.commit("changeTeamID",this.realID);
      }

    },
    activated() {
      // console.log(this.$store.state.teamID);
      // console.log(this.$route);
      // this.teamID = this.$route.params.teamID;
      // console.log(this.teamID);
      this.findTeam(this.realID)
      // this.realID = this.teamID || 4418;
      // console.log(this.realID);
      // 通过球队ID获取球队信息
      // this.findTeam(this.realID)

    },
    methods:{
      /**
       * 网络请求的方法
       */
      findTeam(teamID){
        findTeam(teamID).then(res=>{
          console.log(res);
          //利用封装好的类来接受球队里的球员信息
          this.players = new Players(res[0])
        })
      },
    }
  }
</script>

<style scoped>

</style>
