<template>
  <div class="content-box">
    <div class="list-name" slot="content-name">
      比赛列表
    </div>
    <div class="scroll-box" @scroll="scrollEvent">
      <tab-control
        class="match-tab-first"
        :titles="['A组','B组','C组','D组']"
        @tabClick="tabClick"
        color="#FF7875"
      >
      </tab-control>

      <battle-items
        ref="battleItems"
        :battleItems="battleItems">
      </battle-items>

      <tab-control
        ref="secondTab"
        :secondFixed="secondFixed"
        class="match-tab-second"
        :titles="['E组','F组','G组','H组']"
        @tabClick="groupClick"
        color="#FF7875"
      >
      </tab-control>

      <battle-items
        class="match-group-second"
        :battleItems="battleItems">
      </battle-items>

      <tab-control
        ref="thirdTab"
        class="match-tab-third"
        :titles="['1/8','1/4','半决赛','决赛']"
        @tabClick="groupClick"
        color="#FF7875"
      >
      </tab-control>

      <battle-items
        class="match-group-third"
        :battleItems="knockout">
      </battle-items>
    </div>
  </div>
</template>

<script>
  import TabControl from "../../../components/common/tabControl/TabControl";
  import BattleItems from "../../../components/content/matches/battleItems/BattleItems";
  export default {
    name: "MatchesList",
    components:{
      TabControl,
      BattleItems
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
        // this.thirdFixed = this.scrollTop > this.thirdTop;
      }
    },
    mounted() {
      console.log(this.$refs.battleItems.$el.clientHeight)
      // console.log(this.$refs.secondTab.$el.offsetTop);
      // console.log(this.$refs.thirdTab.$el.offsetTop);
      //滚动条极限距离=secondTab距离顶部的高度-firstTab的高度
      this.secondTop = this.$refs.battleItems.$el.clientHeight
      // this.thirdTop = this.$refs.thirdTab.$el.offsetTop-40
      // console.log(this.tabControlSubTop)
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
    top: 100px;
    width: 335px;
    height: 835px;
    /*background-color: blue;*/
  }
</style>
