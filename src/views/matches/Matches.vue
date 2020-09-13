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
  export default {
    name: "matches",
    components:{
      BasicPublic,
      MatchesInfo,
      MatchesList
    }
  }
</script>

<style scoped>
  .matches {
    position: relative;
  }
</style>
