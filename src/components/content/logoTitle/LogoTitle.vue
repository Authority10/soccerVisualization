<template>
  <div class="top-title">
     <div class="logo-text">
       <span class="school">足球大数据系统</span>
       <span class="soccer">北京体育大学</span>
     </div>
     <div class="search">
       <div class="my-input">
         <el-input
           v-model="input"
           placeholder="请输入球员/球队/国家"
           size="large"></el-input>
       </div>
       <div class="my-button">
         <el-button type="primary">搜索</el-button>
       </div>
     </div>
  </div>
</template>

<script>
  export default {
    name: "LogoTitle",
    data(){
      return{
        input:""
      }
    }
  }
</script>

<style scoped>
  .top-title {
     position: fixed;
     top:0;
     left:112px;
     width: 1820px;
     height: 100px;
     background-color: #404040;
  }
  .logo-text {
    position: absolute;
    width: 420px;
    display: flex;
    justify-content: space-between;
    top:25px;
    left: 40px;
  }
  .search {
    position: absolute;
    width:480px;
    height: 100px;
    left: 1000px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .my-input /deep/ .el-input__inner{
    border-color: #4a4a4a;
    border-radius: 15px;
    width: 320px;
    background-color: #4a4a4a;
  }
  .my-button /deep/ .el-button--primary:hover {
    background: #4a4a4a;
    border-color: #4a4a4a;
    color: #FFF;
  }
  .my-button /deep/ .el-button{
    /*border-color: #4a4a4a;*/
    border-color: rgba(74,74,74,0.7);
    /*background-color: #4a4a4a;*/
    background-color: rgba(74,74,74,0.7);
    color: gray;
  }
  .school {
    color:#40A9FF;
    font-weight: bold;
    font-size: 30px;
  }
  .soccer {
    color:#FF7875;
    font-weight: bold;
    font-size: 30px;
  }
</style>
