<template>
<div class="players">
    <basic-public>
    </basic-public>

    <players-info
      :players="teams"
    >
    </players-info>

</div>

</template>

<script>
  import PlayersList from "./childComps/PlayersList";
  import PlayersInfo from "./childComps/PlayersInfo";
  import BasicPublic from "../../components/content/basicPublic/BasicPublic";
  // import {findPerson} from "../../network/players";
  export default {
    name: "Players",
    data(){
      return{
        teams:{}
      }
    },
    components: {
      PlayersInfo,
      PlayersList,
      BasicPublic
    },
    created(){
      this.$bus.$on("sendTeams",(teams)=>{
        console.log(teams)
        this.teams = teams
      })
    },
    // created() {
    //   this.findTeam(2463)
    //   this.findTeam(this.$route.params.teamID)
    // },
    // beforeRouteEnter(to,from,next){
    //   next(vm => {
    //     // console.log(to);
    //     // console.log(vm);
    //     vm.findTeam(to.params.teamID)
    //   })
    // },
    // activated(){
    //   this.findTeam(this.$route.params.teamID)
    // },
    methods:{
      /**
       * 网络请求的方法
       */
      // findPerson(personId){
      //   findPerson(personId).then(res=>{
      //     console.log(res);
      //     //利用封装好的类来接受球队里的球员信息
      //     // var abc = res[0]
      //     // this.getPlayers = new Players(abc)
      //   })
      // },
    },

  }
</script>

<style scoped>

 .players {
   position: relative;
   width: 1920px;
   height: 1080px;
 }
 .players::-webkit-scrollbar {
   display: none;
 }
</style>
