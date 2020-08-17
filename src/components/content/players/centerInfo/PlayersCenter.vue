<template>

    <div class="center-info">
      <slot name="player-person-info"></slot>
      <slot name="player-person-data"></slot>
    </div>


</template>

<script>
  export default {
    name: "CenterInfo"
  }
</script>

<style scoped>
   .center-info {
     position: fixed;
     width: 1478px;
     height: 835px;
     top:  108px;
     left: 115px;
     background-color:#1E2E45;
     border: 1px solid #dcdde1;
     /*border-radius: 10px;*/
   }
</style>
