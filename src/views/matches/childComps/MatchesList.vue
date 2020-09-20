<template>
  <div class="content-box">
    <div class="list-name" slot="content-name">
      比赛列表
    </div>
    <cascader-second
    :matchesList="matchesList">

    </cascader-second>

    <div class="scroll-box" @scroll="scrollEvent">

<!--      <tab-control-->
<!--        class="match-tab-first"-->
<!--        :titles="['A组','B组','C组','D组']"-->
<!--        @tabClick="tabClick"-->
<!--        color="#FF7875"-->
<!--      >-->
<!--      </tab-control>-->

<!--      <battle-items-->
<!--        ref="battleItems"-->
<!--        :battleItems="battleItems">-->
<!--      </battle-items>-->

<!--      <tab-control-->
<!--        ref="secondTab"-->
<!--        :secondFixed="secondFixed"-->
<!--        class="match-tab-second"-->
<!--        :titles="['E组','F组','G组','H组']"-->
<!--        @tabClick="groupClick"-->
<!--        color="#FF7875"-->
<!--      >-->
<!--      </tab-control>-->

<!--      <battle-items-->
<!--        class="match-group-second"-->
<!--        :battleItems="battleItems">-->
<!--      </battle-items>-->

<!--      <tab-control-->
<!--        ref="thirdTab"-->
<!--        class="match-tab-third"-->
<!--        :titles="['1/8','1/4','半决赛','决赛']"-->
<!--        @tabClick="groupClick"-->
<!--        color="#FF7875"-->
<!--      >-->
<!--      </tab-control>-->

<!--      <battle-items-->
<!--        class="match-group-third"-->
<!--        :battleItems="knockout">-->
<!--      </battle-items>-->
    </div>
  </div>
</template>

<script>
  import TabControl from "../../../components/common/tabControl/TabControl";
  import BattleItems from "../../../components/content/matches/battleItems/BattleItems";
  import CascaderSecond from "../../../components/content/element-ui/CascaderSecond";
  export default {
    name: "MatchesList",
    components:{
      TabControl,
      BattleItems,
      CascaderSecond
    },
    data(){
      return{
        scrollTop:0,
        secondFixed:false,
        // thirdFixed:false,
        secondTop:0,
        // thirdTop:0,
        currentGroupTop:'GroupA',
        currentGroupBottom:"GroupE",
        battleItems:[
          {home:{name:'Russia',img:'https://bsufootball.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E7%89%87/countryLogo/Russia.jpg'},
           away:{name:'Saudi',img:'https://bsufootball.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E7%89%87/countryLogo/Saudi%20Arabia.jpg'}},
          {home:{name:'Egypt',img:'https://bsufootball.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E7%89%87/countryLogo/Egypt.jpg'},
            away:{name:'Uruguay',img:'https://bsufootball.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E7%89%87/countryLogo/Uruguay.jpg'}},
          {home:{name:'Egypt',img:'https://bsufootball.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E7%89%87/countryLogo/Egypt.jpg'},
            away:{name:'Uruguay',img:'https://bsufootball.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E7%89%87/countryLogo/Uruguay.jpg'}},
          {home:{name:'Egypt',img:'https://bsufootball.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E7%89%87/countryLogo/Egypt.jpg'},
            away:{name:'Uruguay',img:'https://bsufootball.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E7%89%87/countryLogo/Uruguay.jpg'}},
          {home:{name:'Egypt',img:'https://bsufootball.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E7%89%87/countryLogo/Egypt.jpg'},
            away:{name:'Uruguay',img:'https://bsufootball.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E7%89%87/countryLogo/Uruguay.jpg'}},
          {home:{name:'Egypt',img:'https://bsufootball.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E7%89%87/countryLogo/Egypt.jpg'},
            away:{name:'Uruguay',img:'https://bsufootball.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E7%89%87/countryLogo/Uruguay.jpg'}}
        ],
        knockout:[
          {home:{name:'Russia',img:'https://bsufootball.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E7%89%87/countryLogo/Russia.jpg'},
            away:{name:'Saudi',img:'https://bsufootball.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E7%89%87/countryLogo/Saudi%20Arabia.jpg'}},
          {home:{name:'Egypt',img:'https://bsufootball.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E7%89%87/countryLogo/Egypt.jpg'},
            away:{name:'Uruguay',img:'https://bsufootball.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E7%89%87/countryLogo/Uruguay.jpg'}},
          {home:{name:'Egypt',img:'https://bsufootball.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E7%89%87/countryLogo/Egypt.jpg'},
            away:{name:'Uruguay',img:'https://bsufootball.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E7%89%87/countryLogo/Uruguay.jpg'}},
          {home:{name:'Egypt',img:'https://bsufootball.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E7%89%87/countryLogo/Egypt.jpg'},
            away:{name:'Uruguay',img:'https://bsufootball.oss-cn-beijing.aliyuncs.com/%E5%9B%BE%E7%89%87/countryLogo/Uruguay.jpg'}},
        ],
        matchesList:[
          {
            value: 'first',
            label: '第1轮',
          },
          {
            value: 'second',
            label: '第2轮',
          },
          {
            value: 'third',
            label: '第3轮',
          },
          {
            value: 'fourth',
            label: '第4轮',
          },
          {
            value: 'fifth',
            label: '第5轮',
          },
          {
            value: 'sixth',
            label: '第6轮',
          },
          {
            value: 'seventh',
            label: '第7轮',
          },
          {
            value: 'eighth',
            label: '第9轮',
          },
          {
            value: 'ninth',
            label: '第9轮',
          },
          {
            value: 'tenth',
            label: '第10轮',
          },
          {
            value: 'eleventh',
            label: '第11轮',
          },
          {
            value: 'twelfth',
            label: '第12轮',
          },
          {
            value: 'thirteenth',
            label: '第13轮',
          },
          {
            value: 'fourteenth',
            label: '第14轮',
          },
          {
            value: 'fifteenth',
            label: '第15轮',
          },
          {
            value: 'sixteenth',
            label: '第16轮',
          },
          {
            value: 'seventeenth',
            label: '第17轮',
          },
          {
            value: 'eighteenth',
            label: '第18轮',
          },
          {
            value: 'nineteenth',
            label: '第19轮',
          },
          {
            value: 'twentieth',
            label: '第20轮',
          },
          {
            value: 'twenty-first',
            label: '第21轮',
          },
          {
            value: 'twenty-second',
            label: '第22轮',
          },
          {
            value: 'twenty-third',
            label: '第23轮',
          },
          {
            value: 'twenty-fourth',
            label: '第24轮',
          },
        ]
      }
    },
    methods:{
      //上半区不同组别切换
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
      //下半区不同组别切换
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
      },
      //3个组别切换器的吸顶效果
      scrollEvent(event){
        this.scrollTop = event.srcElement.scrollTop; // 滚动条偏移量
        console.log(this.scrollTop);
        //根据偏移量决定是否固定（三元运算符）
        this.secondFixed = this.scrollTop > this.secondTop;
      }
    },
    mounted() {
      console.log(this.$refs.battleItems.$el.clientHeight)
      //滚动条极限距离=secondTab距离顶部的高度-firstTab的高度
      this.secondTop = this.$refs.battleItems.$el.clientHeight
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
    /*height: 943px;*/
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
    color:#ff7875;
    background-color:#4b4b4b;
    font-size: 28px;
    text-align: center;
    line-height: 52px;
    font-weight: bold;
  }
  .scroll-box {
    position: absolute;
    overflow-y:scroll;
    overflow-x:hidden;
    top: 142px;
    width: 335px;
    height: 835px;
    /*background-color: blue;*/
  }
</style>
