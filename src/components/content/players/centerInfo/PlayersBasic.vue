<template>

    <div class="center-info">
      <span class="info-span">球员资料</span>

      <slot name="player-person-info"></slot>

      <div class="hr-line"></div>

      <span class="data-span">技术统计</span>

      <slot name="player-person-data"></slot>
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
     width: 1478px;
     height: 835px;
     top:  107px;
     left: 115px;
     background-color:#1E2E45;
     border: 1px solid #dcdde1;
   }
  .info-span {
    position: absolute;
    top:17px;
    left: 80px;
    color:#FDFDFD;
    font-size: 28px;
    border-bottom: 6px solid #F7BA52;
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
