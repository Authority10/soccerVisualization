<template>
  <div class="comparison-table ">
    <div class="title">
      <div v-for="(title,index) in quotaTitle">
         {{quotaTitle[index]}}
      </div>
    </div>
    <div class="single-match">

    </div>
  </div>
</template>

<script>
  export default {
    name: "ComparisonTable",
    props:{
      quotaTitle:{
        type:Array,
        default(){
          return []
        }
      }
      // playersMatches:{
      //   type:Array,
      //   default(){
      //     return[]
      //   }
      // }
    },
    computed:{
    },
    methods:{
    }

  }
</script>

<style scoped>
  .comparison-table {
    position: absolute;
    width: 1709px;
    height: 206px;
    font-size: 20px;
    top:  195px;
    left: 26px;
    border-radius: 12px;
    background-color: #525252;
  }
  .title {
    margin: 10px auto;
    width: 1350px;
    height: 50px;
    background-color:red;
    text-align: center;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .title div {
    background-color: blue;
    width: 150px;
    /*background-color: red;*/
  }
  .single-match {
    margin: 20px 60px;
    width: 1470px;
    height: 50px;
    color: white;
    background-color:#575757;
    border-radius: 12px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
