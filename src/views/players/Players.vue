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
        players:{},
      }
    },
    components: {
      PlayersInfo,
      PlayersList,
    },
    created() {
      //通过球队ID获取球队信息
      this.findTeam(4418)
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
