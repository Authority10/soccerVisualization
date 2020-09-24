<template>
  <div class="matches">
    <basic-public></basic-public>
    <Matches-info></Matches-info>
    <Matches-list></Matches-list>
  </div>
</template>

<script>
  import BasicPublic from "../../components/content/basicPublic/BasicPublic";
  import MatchesInfo from "./childComps/MatchesInfo";
  import MatchesList from "./childComps/MatchesList";
  // import {findMatches} from "../../network/matches";
  export default {
    name: "matches",
    components:{
      BasicPublic,
      MatchesInfo,
      MatchesList
    },
    created() {
      // this.findMatches(2)
    },
    methods:{
      /**
       * 网络请求的方法
       */
      // findMatches(roundId){
      //   findMatches(roundId).then(res=>{
      //     console.log(res);
      //   })
      // },
    },
  }
</script>

<style scoped>
  .matches {
    position: relative;
  }
</style>
