<template>
    <div class="center-info">
      <slot name="player-person-info"></slot>
      <slot name="player-person-data"></slot>
      <slot name="player-person-appearance"></slot>
    </div>
</template>

<script>
  export default {
    name: "PlayersCenter"
  }
</script>

<style scoped>
   .center-info {
     position: fixed;
     width: 1484px;
     height: 842px;
     top:  101px;
     left: 112px;
     background-color:#404040;
     overflow: auto;
     /*border: 1px solid #dcdde1;*/
   }
  .info-span {
    position: absolute;
    top:17px;
    left: 80px;
    color:#FF7875;
    font-size: 28px;
    /*border-bottom: 6px solid #F7BA52;*/
  }
  .hr-line {
    position:absolute;
    top: 0;
    left: 640px;
    width: 1px;
    height: 835px;
    background-color: #8395a7;
  }
  .data-span {
    position: absolute;
    top:17px;
    left: 720px;
    color:#FDFDFD;
    font-size: 28px;
    border-bottom: 6px solid #F7BA52;
  }
</style>
