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
        this.$emit("infoClick",this.personId);
          // axios({
          //   //url:"http://localhost:3001/test",
          //   url:"http://backend2.bsufootballvs.fun/test",
          //   method:"post",
          //   data:{
          //      playerID:parseInt(this.currentIndex)
          //   }
          // }).then((res)=>{
          //   console.log(res.data);
          //   console.log(typeof res.data);
          //   this.message =res.data;
          //   this.technicalData = res.data.split(",")
          //    this.technical.goal = this.technicalData[0]
          //     this.technical.assist = this.technicalData[1]
          //      this.technical.pass = this.technicalData[2]
          //       this.technical.accuratePass = this.technicalData[3]
          //        this.technical.keyPass= this.technicalData[4]
          //         this.technical. smartPass= this.technicalData[5]
          //          this.technical.shot= this.technicalData[6]
          //           this.technical.shotOnTarget = this.technicalData[7]
          //            this.technical.fouls= this.technicalData[8]
          //             this.technical.yellowCard = this.technicalData[9]
          //              this.technical.redCard= this.technicalData[10]

            // console.log(this.technicalData)
          // }).catch(err=>{
          //   console.log(err)
          // });
          // this.$emit("infoClick",index);
          // this.$bus.$emit("sendTechnical",this.technical)
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
