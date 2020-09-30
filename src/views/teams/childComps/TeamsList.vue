<template>
  <div class="content-box">
    <div class="list-name">球队积分榜</div>
    <div class="scroll-box">
      <group-items
      :teamList="teamList">
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
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{

      }
    },
    created() {

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
    height: 1080px;
    background-color: #4b4b4b;
  }
  .list-name {
    position: absolute;
    width: 180px;
    height: 52px;
    left: 34px;
    top:  32px;
    color:#FFF566;
    /*background-color:red;*/
    font-size: 28px;
    text-align: center;
    line-height: 52px;
    font-weight: bold;
  }
  .scroll-box {
    position: absolute;
    top: 100px;
    width: 324px;
    height: 980px;
    /*background-color: blue;*/
    overflow: scroll;
    scrollbar-width: none;
  }
  .scroll-box::-webkit-scrollbar {
    display: none;
  }

</style>
