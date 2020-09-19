<template>
  <div class="block">
    <el-cascader
      v-model="value"
      placeholder="请选择球员"
      :options="options"
      :props="{ expandTrigger: 'hover' }"
      clearable
      filterable
      @change="handleChange">
      <template slot-scope="{ node, data }">
        <span>{{ data.label }}</span>
        <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
      </template>
    </el-cascader>
  </div>
</template>

<script>
  export default {
    name: "Cascader",
    data() {
      return {
        value: [],
        options: [
        {
          value: 'GoalKeeper',
          label: '守门员',
          children:[
          {
            value:'nuoyier',
            label:'诺伊尔'
          },
          {
            value:'kuertuwa',
            label:'库尔图瓦'
          },
          {
            value:'luoli',
            label:'洛里'
          }]
        },
        {
          value: 'Defender',
          label: '后卫',
          children:[
          {
            value:'lamosi',
            label:'拉莫斯'
          },
          {
            value:'wumudidi',
            label:'乌姆蒂蒂'
          },
          {
            value:'xierwa',
            label:'席尔瓦'
          },
          {
            value:'jimuxi',
            label:'基米希'
          }
          ]
        },
        {
          value: 'Center',
          label: '中场',
          children:[
            {
              value:'modeliqi',
              label:'莫德里奇'
            },
            {
              value:'lajidiqi',
              label:'拉基蒂奇'
            },
            {
              value:'diyage',
              label:'蒂亚戈'
            },
            {
              value:'debulaonei',
              label:'德布劳内'
            }
          ]
        },
        {
          value: 'ForWard',
          label: '前锋',
          children:[
            {
              value:'meixi',
              label:'10 梅西'
            },
            {
              value:'cluo',
              label:'7 C罗'
            },
            {
              value:'neimaer',
              label:'11 内马尔'
            },
            {
              value:'yibu',
              label:'9 伊布拉希莫维奇'
            }
          ]
        }
        ]
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
    top: 10px;
    left: 205px;
    width: 200px;
  }
  .second-block {
    position: absolute;
    top: 10px;
    left: 1580px;
    width: 200px;
  }
  .block /deep/ .el-input__inner {
    background-color: #4b4b4b;
    color: white;
  }
</style>
