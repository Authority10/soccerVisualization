<template>
    <div class="items">
        <single-item v-for="(players,index) in playerItems"
                     :key="players.key"
                     :players="players"
                     :class="{active:currentIndex===index}"
                     @click.native="playerClick(index)"
                     >
        </single-item>
    </div>
</template>

<script>
  import SingleItem from "./SingleItem";
  import axios from "axios"
  export default {
    name: "items",
    data(){
      return{
        currentIndex:"",
        message:"",
        technicalData:[]
      }
    },
    watch: {
        playerItems(newVal, oldVal) {
          this.currentIndex = Object.keys(newVal)[0];
        }
    },
    // computed:{
    //   defaultIndex(){
    //     return Object.keys(this.playerItems)[0]
    //   }
    // },
    props:{
      playerItems:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    methods:{
      playerClick(index){
        this.currentIndex = index;
          axios({
            url:"http://localhost:3001/test",
            method:"post",
            data:{
               playerID:parseInt(this.currentIndex)
            }
          }).then((res)=>{
            console.log(res.data);
            console.log(typeof res.data)
            this.message =res.data
            this.technicalData = res.data.split(",")
            console.log(this.technicalData)        
          }).catch(err=>{
            console.log(err)
          });
          var  tchnical = {
             goal:this.technicalData[0],
             assist:this.technicalData[1],
             pass:this.technicalData[2],
             accuratePass:this.technicalData[3],
             keyPass:this.technicalData[4],
             smartPass:this.technicalData[5],
             shot:this.technicalData[6],
             shotOnTarget:this.technicalData[7],
             fouls:this.technicalData[8],
             yellowCard:this.technicalData[9],
             redCard:this.technicalData[10]
          }
          this.$emit("infoClick",index)
          this.$bus.$emit("sendTechnical",tchnical)
      }
    },
    components: {
      SingleItem
    },
  }
</script>

<style scoped>
   .items {
      /*display: flex;*/
      overflow: scroll;
      /*flex-direction: column;*/
      /*align-items: center;*/
      /*justify-content: flex-start;*/
      position: absolute;
      top:110px;
      width: 240px;
      height: 650px;
   }

</style>
