<template>
  <div class="center-info" @scroll="scrollEvent">
    <Match-info>
    </Match-info>

    <Match-data
    ref="matchData"
    :fixed="fixed">
    </Match-data>

  </div>
</template>

<script>
  import MatchInfo from "./centerItems/MatchInfo";
  import MatchData from "./centerItems/MatchData";
  export default {
    name: "MatchesCenter",
    data(){
      return{
        scrollTop:0,
        fixed:false,
        tabControlSubTop:0
      }
    },
    components:{
      MatchInfo,
      MatchData
    },
    methods:{
      scrollEvent(event){
        this.scrollTop = event.srcElement.scrollTop; // 滚动条偏移量
        console.log(this.scrollTop);
        //根据偏移量决定是否固定（三元运算符）
        this.fixed = this.scrollTop > this.tabControlSubTop;
      }
    },
    mounted() {
      var matchDataTop = this.$refs.matchData.$el.offsetTop
      var tabData = this.$refs.matchData.$refs.tab.$el.offsetTop
      //滚动条极限距离=countryData距离顶部的高度+tabControlSub距离父组件的高度
      this.tabControlSubTop = matchDataTop + tabData
      console.log(this.tabControlSubTop)
    }
  }
</script>

<style scoped>
  .center-info {
    position: absolute;
    width: 1484px;
    height: 983px;
    top:  97px;
    left: 112px;
    overflow: scroll;
    background-color: #404040;
    scrollbar-width: none;
  }

  .center-info::-webkit-scrollbar {
    display: none;
  }
</style>
