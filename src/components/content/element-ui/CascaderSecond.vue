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
      handleChange(value) {
        console.log(value);
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
