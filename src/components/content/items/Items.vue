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
        message:""
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
          console.log(res.data)
  this.message =res.data
        }).catch(err=>{
          console.log(err)
        })
        // var  aa = {
        //    b:this.currentIndex,
        //    c:this.message
        // }
      this.$emit("infoClick",index)
      // this.$emit("infoClick",aa)
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
