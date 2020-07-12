<template>
  <div class="top-title">

        <img src="@/assets/logo/logo.jpg" alt="">
         <div>
           <span class="school">北京体育大学</span>
           <span class="soccer">足球大数据系统</span>
         </div>



    <div class="search">
      <van-search v-model="value"  placeholder="请输入球员/球队/国家"/>
      <van-button round type="info" color="#69c0ff" size="small">搜索</van-button>
    </div>

  </div>

</template>

<script>
  export default {
    name: "LogoTitle",
    data(){
      return{
        value:""
      }
    }
  }
</script>

<style scoped>
  .top-title {
     width: 700px;
     height: 100px;
     display: flex;
     justify-content: space-between;
     align-items: center;
  }
  /*.logo-text {*/
  /*  display: flex;*/
  /*  justify-content: space-between;*/
  /*  align-items: center;*/
  /*}*/
  .search {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  img {
    width: 90px;
  }
  .school {
    color:#ffa3a7;
    font-weight: bold;
  }
  .soccer {
    color:#9bd5ff;
    font-weight: bold;
  }
</style>
