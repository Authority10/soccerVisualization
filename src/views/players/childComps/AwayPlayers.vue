<template>
  <div class="content-box">
    <div class="list-name" slot="content-name">球员列表</div>
    <div class="scroll-box">
      <tab-control
        :titles="['前锋','中场','后卫','门将']"
        @tabClick="tabClick"
        color="#69c0ff"
      >
      </tab-control>
      <items
        :playerItems="showPlayers"
        @infoClick="infoClick">
      </items>
    </div>
  </div>
</template>

<script>

  import RightList from "../../../components/content/rightList/RightList";
  import TabControl from "../../../components/common/tabControl/TabControl";
  import Items from "../../../components/content/players/items/Items";
  import {findPerson} from "../../../network/players"
  export default {
    name: "AwayPlayers",
    props:{
      players:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    data(){
      return{
        currentPosition:"forward",
        // currIndex:"",
        personId:0,
        currentIndex:0
      }
    },

    computed:{
      showPlayers(){
        return this.players[this.currentPosition]
      }
    },
    components: {
      Items,
      TabControl,
      RightList,
    },
    methods:{
      /**
       * 网络请求的方法
       */
      /**
       * 事件监听的方法
       */
      tabClick(index){
        switch (index) {
          case 0:
            this.currentPosition = "forward";
            break;
          case 1:
            this.currentPosition = "midfielder";
            break;
          case 2:
            this.currentPosition = "defender";
            break;
          case 3:
            this.currentPosition = "goalkeeper";
            break
        }
      },
      findPerson(personId){
        findPerson(personId).then(res=>{
          console.log(res[0]);
          this.$bus.$emit("awayPlayers",res[0])
          var currPlayer = {}
          currPlayer.position = this.currentPosition
          currPlayer.currentIndex = this.currentIndex
          // this.$bus.$emit("sendAway",currPlayer)
          this.$store.commit("changeAwayPosition",currPlayer)
        })
      },
      infoClick(data){
        this.personId = data.personId;
        this.currentIndex = data.currentIndex;
        console.log(data);
        this.findPerson(this.personId)
      }
    }
  }
</script>

<style scoped>
  .content-box {
    /*position: absolute;*/
    /*overflow: auto;*/
    /*top: 0;*/
    /*left: 0;*/
    width: 340px;
    height: 1080px;
    background-color: #4b4b4b;
  }
  .list-name {
    position: absolute;
    width: 137px;
    height: 52px;
    left: 25px;
    top:  32px;
    color:#69c0ff;
    background-color:#4b4b4b;
    font-size: 28px;
    text-align: center;
    line-height: 52px;
    font-weight: bold;
  }
  .scroll-box {
    position: absolute;
    top: 100px;
    width: 380px;
    height: 890px;
    /*background-color: blue;*/
  }
</style>
