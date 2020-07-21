<template>
  <right-list>
    <span slot="content-name">球员列表</span>

    <tab-control
      slot="tab-control"
      :titles="['FW','MF','DF','GK']"
      @tabClick="tabClick"
    ></tab-control>

    <items
      slot="content-items"
      :playerItems="this.showPlayers"
      @infoClick="infoClick">
    </items>

  </right-list>
</template>

<script>

  import RightList from "../../../components/content/rightList/RightList";
  import TabControl from "../../../components/common/tabControl/TabControl";
  import Items from "../../../components/content/items/Items";

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
        // currMessage:""
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
          // message:this.currMessage
        };
        console.log(currActivePlayer)
        this.$bus.$emit("sendIndex",currActivePlayer)
      }
    }
  }
</script>

<style scoped>
  span {
    position: absolute;
    left: 25px;
    top:  32px;
    color:#5a5a5a;
    font-size: 24px;
    font-weight: bold;
  }

</style>
