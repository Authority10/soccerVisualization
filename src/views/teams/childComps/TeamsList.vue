<template>
  <right-list>
    <div class="list-name" slot="content-name">球队列表</div>

    <tab-control
      slot="tab-control"
      :titles="['A组','B组','C组','D组']"
      @tabClick="tabClick"
      color="#fff566"
    ></tab-control>

    <group-items
      v-if="teamList['GroupTop']!==undefined"
      slot="content-items"
      :group-items="teamList['GroupTop'][currentGroupTop]">
    </group-items>

    <tab-control
      class="tab-control-bottom"
      slot="tab-control-sub"
      :titles="['E组','F组','G组','H组']"
      @tabClick="groupClick"
      color="#fff566"
    ></tab-control>

    <group-items
      v-if="teamList['GroupBottom']!==undefined"
      class="group-bottom"
      slot="content-items-sub"
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
</style>
