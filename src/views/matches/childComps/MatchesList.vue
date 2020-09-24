<template>
  <div class="content-box">
    <div class="list-name" slot="content-name">
      比赛列表
    </div>

    <cascader-second
    @sendRound="receiveRound"
    :matchesList="matchesList">
    </cascader-second>

    <div class="scroll-box">
      <battle-items
        :battleItems="roundInfo">
      </battle-items>
    </div>

  </div>
</template>

<script>
  import CascaderSecond from "../../../components/content/element-ui/CascaderSecond";
  import BattleItems from "../../../components/content/matches/battleItems/BattleItems";
  export default {
    name: "MatchesList",
    components:{
      CascaderSecond,
      BattleItems,
    },
    data(){
      return{
        roundInfo:{},
        matchesList:[
          {
            value: 1,
            label: '第1轮',
          },
          {
            value: 2,
            label: '第2轮',
          },
          {
            value: 3,
            label: '第3轮',
          },
          {
            value: 4,
            label: '第4轮',
          },
          {
            value: 5,
            label: '第5轮',
          },
          {
            value: 6,
            label: '第6轮',
          },
          {
            value: 7,
            label: '第7轮',
          },
          {
            value: 8,
            label: '第9轮',
          },
          {
            value: 9,
            label: '第9轮',
          },
          {
            value: 10,
            label: '第10轮',
          },
          {
            value: 11,
            label: '第11轮',
          },
          {
            value: 12,
            label: '第12轮',
          },
          {
            value: 13,
            label: '第13轮',
          },
          {
            value: 14,
            label: '第14轮',
          },
          {
            value: 15,
            label: '第15轮',
          },
          {
            value: 16,
            label: '第16轮',
          },
          {
            value: 17,
            label: '第17轮',
          },
          {
            value: 18,
            label: '第18轮',
          },
          {
            value: 19,
            label: '第19轮',
          },
          {
            value: 20,
            label: '第20轮',
          },
          {
            value: 21,
            label: '第21轮',
          },
          {
            value: 22,
            label: '第22轮',
          },
          {
            value: 23,
            label: '第23轮',
          },
          {
            value: 24,
            label: '第24轮',
          },
        ]
      }
    },
    methods:{
      receiveRound(roundInfo){
         delete roundInfo.roundId
         delete roundInfo._id
         this.roundInfo = roundInfo
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>
  .content-box {
    position: fixed;
    /*overflow: scroll;*/
    right: 0;
    top: 0;
    width: 324px;
    height: 1080px;
    background-color: #4b4b4b;
  }
  .list-name {
    position: absolute;
    width: 137px;
    height: 52px;
    left: 25px;
    top:  32px;
    color:#ff7875;
    background-color:#4b4b4b;
    font-size: 28px;
    text-align: center;
    line-height: 52px;
    font-weight: bold;
  }
  .scroll-box {
    position:absolute;
    top: 142px;
    width: 324px;
    height: 930px;
    overflow: scroll;
    /*background-color: orange;*/
  }
  .scroll-box::-webkit-scrollbar {
    display: none;
  }
</style>
