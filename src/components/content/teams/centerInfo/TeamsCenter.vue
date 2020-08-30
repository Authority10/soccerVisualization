<template>
  <div class="show-team">
    <div class="center-info" @scroll="scrollEvent">
      <country-info
        :activeCountry="activeCountry">
      </country-info>
      <country-data
        ref="countryData"
        :activeCountry="activeCountry"
        :fixed="fixed">
      </country-data>
    </div>
    <img src="@/assets/common/enter.png" alt="" @click="enterTeam">
  </div>
</template>

<script>
  import CountryData from "./centerItems/CountryData";
  import CountryInfo from "./centerItems/CountryInfo";
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
      CountryData,
      CountryInfo
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
      console.log(this.$refs.countryData.$el.offsetTop);
      this.tabControlSubTop = this.$refs.countryData.$el.offsetTop
    }
  }
</script>
<style scoped>
  .show-team {
    position: relative;
  }
  .center-info {
    position: fixed;
    overflow: auto;
    width: 1478px;
    height: 835px;
    top:  107px;
    left: 115px;
    background-color: #1E2E45;
    /*background-color: red;*/
    border: 1px solid #dcdde1;
  }
  img {
    position: absolute;
    width: 56px;
    right: 360px;
    top: 890px;
    z-index: 999;
  }
</style>
