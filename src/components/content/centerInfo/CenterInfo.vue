<template>
<!--  <div>-->
    <div class="center-info">
      <slot name="player-person-info"></slot>
      <slot name="player-person-data"></slot>
    </div>
<!--    <div class="person-data">-->
<!--      dfadf-->
<!--    </div>-->
<!--  </div>-->

</template>

<script>
  export default {
    name: "CenterInfo"
  }
</script>

<style scoped>
   .center-info {
     position: fixed;
     width: 690px;
     height: 640px;
     top:  110px;
     left: 90px;
     background-color:#74b9ff;
     border: 1px solid #dcdde1;
     border-radius: 10px;
   }
</style>
