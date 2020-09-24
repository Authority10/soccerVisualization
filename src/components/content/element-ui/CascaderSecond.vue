<template>
    <div class="block">
      <el-cascader
        v-model="value"
        placeholder="请选择比赛轮次"
        :options="matchesList"
        :props="{ expandTrigger: 'hover' }"
        popper-class="second-cascader"
        clearable
        filterable
        @change="handleChange">
      </el-cascader>
    </div>
</template>
<script>
  import {findRounds} from "../../../network/rounds";
  export default {
    name: "CascaderSecond",
    props:{
      matchesList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data() {
      return {
        value: [],
      };
    },
    methods: {
      /**
       * 网络请求的方法
       */
      findRounds(roundId){
        findRounds(roundId).then(res=>{
          console.log(res[0]);
          this.$emit("sendRound",res[0])
        })
      },
      handleChange(value){
        this.findRounds(value[0])
      }
    }
  }
</script>

<style scoped>
  .block {
    position: absolute;
    top: 102px;
    width: 324px;
  }
  .block /deep/ .el-cascader {
    width: 100%;
  }
  .block /deep/ .el-input__inner {
    background-color: #4b4b4b;
    color: white;
    text-align:center;
  }
  .block /deep/ .el-cascader .el-input .el-input__inner:focus {
    border-color: #ff7875;
  }
  .block /deep/ .el-cascader .el-input.is-focus .el-input__inner{
    border-color: #ff7875;
  }
  .el-cascader-node__label {
    color: red;
  }
</style>
