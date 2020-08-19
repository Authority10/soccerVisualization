<template>
  <div class="top-title">
     <div class="logo-text">
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
     position: fixed;
     top:0;
     left:116px ;
     width: 1478px;
     height: 100px;
     background-color: #1E2E45;
  }
  .logo-text {
    position: absolute;
    top:25px;
    left: 40px;
  }
  .search {
    position: absolute;
    width:300px;
    top: 25px;
    left: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .school {
    color:#EAEAEA;
    font-weight: bold;
    font-size: 36px;
  }
  .soccer {
    color:#F7BA52;
    font-weight: bold;
    font-size: 30px;
  }
</style>
