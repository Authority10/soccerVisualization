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
        technical:[]
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
            this.technical = res.data.split(",")
            console.log(this.technical)        
          }).catch(err=>{
            console.log(err)
          });
          // var  aa = {
          //    b:this.currentIndex,
          //    c:this.message
          // }
          var  tchnical = {
             goal:10,
             assist:3,
             pass:20,
             accuratePass:100,
             keyPass:20,
             smartPass:10,
             shot:10,
             shotOnTarget:9,
             fouls:20,
             yellowCard:1,
             redCard:2
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
