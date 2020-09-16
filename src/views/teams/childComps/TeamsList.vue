<template>
  <div class="content-box">
    <div class="list-name" slot="content-name">球队列表</div>
    <div class="scroll-box">
      <tab-control
        slot="tab-control-first"
        :titles="['A组','B组','C组','D组']"
        @tabClick="tabClick"
        color="#fff566"
      >
      </tab-control>
      <group-items
        v-if="teamList['GroupTop']!==undefined"
        slot="content-items-first"
        :group-items="teamList['GroupTop'][currentGroupTop]">
      </group-items>
      <tab-control
        class="team-tab-bottom"
        slot="tab-control-second"
        :titles="['E组','F组','G组','H组']"
        @tabClick="groupClick"
        color="#fff566"
      >
      </tab-control>
      <group-items
        v-if="teamList['GroupBottom']!==undefined"
        class="group-bottom"
        slot="content-items-second"
        :group-items="teamList['GroupBottom'][currentGroupBottom]">
      </group-items>
    </div>
  </div>
</template>


<script>
  import RightList from "../../../components/content/rightList/RightList";
  import TabControl from "../../../components/common/tabControl/TabControl";
  import Items from "../../../components/content/players/items/Items";
  import groupItems from "../../../components/content/teams/groupItems/GroupItems";
  export default {
    name: "TeamsList",
    props:{
      teamList:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    data(){
      return{
        currentGroupTop:"GroupA",
        currentGroupBottom:"GroupE"
      }
    },
    computed:{
    },
    components: {
      RightList,
      TabControl,
      Items,
      groupItems
    },
    methods:{
      tabClick(index){
        switch (index) {
          case 0:
            this.currentGroupTop = "GroupA";
            break;
          case 1:
            this.currentGroupTop = "GroupB";
            break;
          case 2:
            this.currentGroupTop = "GroupC";
            break;
          case 3:
            this.currentGroupTop = "GroupD";
            break
        }
      },
      groupClick(index){
        switch (index) {
          case 0:
            this.currentGroupBottom = "GroupE";
            break;
          case 1:
            this.currentGroupBottom = "GroupF";
            break;
          case 2:
            this.currentGroupBottom = "GroupG";
            break;
          case 3:
            this.currentGroupBottom = "GroupH";
            break
        }
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
    color:#FFF566;
    background-color:#4b4b4b;
    font-size: 28px;
    text-align: center;
    line-height: 52px;
    font-weight: bold;
  }
  .group-bottom {
    top:500px;
  }
  .scroll-box {
    position: absolute;
    top: 100px;
    width: 324px;
    height: 835px;
    /*background-color: blue;*/
  }
</style>
