<template>
  <div class="show-team">
    <div class="center-info" @scroll="scrollEvent">
      <team-info
        :activeCountry="activeCountry">
      </team-info>

      <team-radar>
      </team-radar>

      <team-season>
      </team-season>

      <team-data
        ref="teamData"
        :activeCountry="activeCountry"
        :fixed="fixed">
      </team-data>
    </div>
    <img src="@/assets/image/common/enter.png" alt="" @click="enterTeam">
  </div>
</template>

<script>
  import TeamData from "./centerItems/TeamData";
  import TeamInfo from "./centerItems/TeamInfo";
  import TeamRadar from "./centerItems/TeamRadar";
  import TeamSeason from "./centerItems/TeamSeason";
  export default {
    name: "TeamsCenter",
    props:{
      currCountry:{
        type:Object,
        default(){
          return{}
        }
      },
    },
    data(){
      return{
        //data数据访问props
        activeCountry:{},
        fixed:false,
        scrollTop:0,
        tabControlSubTop:0  //不同浏览器中tab导航条距离视口的高度
      }
    },
    //利用watch监听props变化
    watch:{
      currCountry(newVal){
        this.activeCountry = newVal
      }
    },
    methods:{
      enterTeam(){
        //根据activeCountry.teamID拿到球队ID，进行路由跳转
        this.$router.push("/players" + this.activeCountry.teamID)
      },
      //监听滚动事件
      //210其实不能写死，必须动态获取该组件的距离上方的偏移量
      scrollEvent(event){
        this.scrollTop = event.srcElement.scrollTop; // 滚动条偏移量
        console.log(this.scrollTop);
        //根据偏移量决定是否固定（三元运算符）
        this.fixed = this.scrollTop > this.tabControlSubTop;
      }
    },
    components:{
      TeamData,
      TeamInfo,
      TeamRadar,
      TeamSeason
    },
    //路由跳转之后，将固定定位取消
    // 否则重新进入路由之后会出现滚动条在顶部但出现吸顶效果的bug
    deactivated(){
      this.fixed = false
    },
    beforeCreate(){
      this.$bus.$on("sendCountry",(countryItems)=>{
        console.log(countryItems);
        this.activeCountry = countryItems
      });
    },
    mounted() {
      //teamData距离父元素的高度
      var teamDataTop = this.$refs.teamData.$el.offsetTop
      //tab距离父元素（tab的父元素就是teamData）的高度
      var tabTop = this.$refs.teamData.$refs.tab.$el.offsetTop
      //滚动条极限距离=teamData距离顶部的高度+tabControlSub距离父组件的高度
      this.tabControlSubTop = teamDataTop + tabTop
      console.log(this.tabControlSubTop)
    }
  }
</script>
<style scoped>
  .show-team {
    position: relative;
  }
  .center-info {
    position: absolute;
    width: 1484px;
    height: 983px;
    top:  97px;
    left: 112px;
    background-color:#404040;
    overflow: scroll;
  }
  .center-info::-webkit-scrollbar {
    display: none;
  }
  img {
    position: absolute;
    width: 56px;
    right: 360px;
    top: 880px;
    z-index: 999;
  }
</style>
