<template>
  <div class="content-box">
    <div class="list-name" slot="content-name">球员列表</div>
    <div class="scroll-box">
      <tab-control
        :titles="['FW','MF','DF','GK']"
        @tabClick="tabClick"
        color="#69c0ff"
      >
      </tab-control>
      <items
        :playerItems="this.showPlayers"
        @infoClick="infoClick">
      </items>
    </div>
  </div>
</template>

<script>

  import RightList from "../../../components/content/rightList/RightList";
  import TabControl from "../../../components/common/tabControl/TabControl";
  import Items from "../../../components/content/players/items/Items";

  export default {
    name: "PlayersList",
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
        currentPosition:"ForWard",
        currIndex:"",
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
            this.currentPosition = "ForWard";
            break;
          case 1:
            this.currentPosition = "Center";
            break;
          case 2:
            this.currentPosition = "Back";
            break;
          case 3:
            this.currentPosition = "GoalKeeper";
            break
        }
      },
      infoClick(index){
        this.currIndex = index;
        // this.currMessage=aa.c
        //兄弟组件的传值，提前封装成对象
        var currActivePlayer = {
          currentPosition : this.currentPosition,
          playerIndex : this.currIndex,
        };
        console.log(currActivePlayer);
        this.$bus.$emit("sendIndex",currActivePlayer)
      }
    }
  }
</script>

<style scoped>
  .content-box {
    position: fixed;
    /*overflow: auto;*/
    right: 0;
    top: 0;
    width: 324px;
    height: 943px;
    background-color: #4b4b4b;
    /*background-color: red;*/
    /*border-left:1px solid rgba(187, 187, 187, 0.5);*/
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
    width: 324px;
    height: 835px;
    /*background-color: blue;*/
  }
</style>
