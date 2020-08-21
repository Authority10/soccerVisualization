<template>
  <div class="center-info" @scroll="scrollEvent">
    <!--    <slot name="country-info"></slot>-->
    <!--    <slot name="country-data"></slot>-->
    <country-info :activeCountry="activeCountry"></country-info>
    <country-data
      :activeCountry="activeCountry"
      :fixed="fixed"></country-data>
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
        activeCountry:{},
        fixed:false,
        scrollTop:0
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
        this.scrollTop=event.srcElement.scrollTop; // 滚动条偏移量
        // console.log(this.scrollTop);
        //根据偏移量决定是否固定（三元运算符）
        this.fixed = this.scrollTop > 210;
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
    beforeCreate() {
      this.$bus.$on("sendCountry",(countryItems)=>{
        console.log(countryItems);
        this.activeCountry = countryItems
      });
    },
  }
</script>
<style scoped>
  .center-info {
    position: fixed;
    overflow: scroll;
    width: 1478px;
    height: 835px;
    top:  107px;
    left: 115px;
    background-color: #1E2E45;
    /*background-color: red;*/
    border: 1px solid #dcdde1;
  }
  img {
    position: fixed;
    width: 56px;
    right: 350px;
    bottom: 30px;
  }
</style>
