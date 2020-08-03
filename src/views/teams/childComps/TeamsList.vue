<template>
  <right-list>

    <span slot="content-name">球队列表</span>

    <tab-control
      slot="tab-control"
      :titles="['A组','B组','C组','D组']"
      @tabClick="tabClick"
    ></tab-control>

    <group-items
    v-if="teamList['GroupTop']!==undefined"
    slot="content-items"
    :group-items="teamList['GroupTop'][currentGroupTop]">
    </group-items>

    <tab-control
      style="top:400px"
      slot="tab-control-sub"
      :titles="['E组','F组','G组','H组']"
      @tabClick="groupClick"
    ></tab-control>

    <group-items
      v-if="teamList['GroupBottom']!==undefined"
      style="top:450px"
      slot="content-items"
      :group-items="teamList['GroupBottom'][currentGroupBottom]">
    </group-items>

  </right-list>
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
      // showGroupTop(){
      //   return this.groupItems["GroupTop"][this.currentGroupTop]
      // },
      // showGroupBottom(){
      //   return this.groupItems["GroupBottom"][this.currentGroupBottom]
      // },
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
  span {
    position: absolute;
    left: 25px;
    top:  32px;
    color:#5a5a5a;
    font-size: 24px;
    font-weight: bold;
  }
</style>
