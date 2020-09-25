<template>
    <div class="items">
        <single-item v-for="(players,index) in playerItems"
                     :key="players.key"
                     :players="players"
                     :class="{active:currentIndex===index}"
                     @click.native="playerClick(players,index)"
                     >
        </single-item>
    </div>
</template>

<script>
  import SingleItem from "./SingleItem";
  import axios from "axios"
  export default {
    name: "items",
    props:{
      playerItems:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    data(){
      return{
        currentIndex:0,
        personId:0
        // message:"",
        // technicalData:[],
        // technical:{
        //   goal:"",
        //   assist:"",
        //   pass:"",
        //   accuratePass:"",
        //   keyPass:"",
        //   smartPass:"",
        //   shot:"",
        //   shotOnTarget:"",
        //   fouls:"",
        //   yellowCard:"",
        //   redCard:""
        // }
      }
    },
    watch: {
        // playerItems(newVal, oldVal) {
        //   this.currentIndex = Object.keys(newVal)[0];
        // }
    },

    methods:{
      playerClick(players,index){
        this.currentIndex = index
        this.personId = players.personId
        var data = {}
        data.currentIndex = index
        data.personId = players.personId
        this.$emit("infoClick",data);
        }
      },
    components: {
      SingleItem
    },
  }
</script>

<style scoped>
   .items {
      overflow: auto;
      position: absolute;
      top:45px;
      left:12px;
      width: 324px;
      height: 850px;
     /*background-color: red;*/
   }

</style>
