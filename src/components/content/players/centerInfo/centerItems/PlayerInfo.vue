<template>
  <div class="player-info">
    <InfoTable :players="players"></InfoTable>
  </div>
</template>

<script>
  import InfoTable from "../../table/InfoTable";
  export default {
    name: "PlayerInfo",
    props:{
      players:{
        type:Object,
        default(){
          return{}
        }
      },
    },
    components:{
      InfoTable
    },
    data(){
      return{

      }
    },
    computed:{
        // getAge(){
        //   //拿到出生的年份，用2020去减
        //   return  2020-this.players.birthDate.substr(0,4)
        // },
        // isRight(){
        //   return this.players.foot==="right"
        // }
    },
    methods:{
    }
  }
</script>

<style scoped>
  .player-info {
    position: absolute;
    top:60px;
    left:80px;
    width: 500px;
    height: 730px;
    background-color:#495F78;
  }
</style>
