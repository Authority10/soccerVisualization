<template>
  <div class="matches">
    <basic-public></basic-public>
  </div>
</template>

<script>
  import BasicPublic from "../../components/content/basicPublic/BasicPublic";
  export default {
    name: "matches",
    components:{
      BasicPublic
    }
  }
</script>

<style scoped>
  .matches {
    position: relative;
  }
</style>
