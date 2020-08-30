<template>
  <div class="top-title">
     <div class="logo-text">
       <span class="school">北京体育大学</span>
       <span class="soccer">足球大数据系统</span>
     </div>
     <div class="search">
       <div>
         <el-input
           v-model="input"
           placeholder="请输入球员/国家"
           size="large"></el-input>
       </div>
       <div>
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
    width:350px;
    height: 100px;
    left: 1000px;
    display: flex;
    justify-content: space-around;
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
