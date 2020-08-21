<template>
    <div id="container"></div>
</template>

<script>
  import { Radar } from '@antv/g2plot';
  export default {
    name: "Radar",
    props:{
      radarData:{
        type:Array,
        default(){
          return []
        }
      },
      status:{
        type:String
      }
    },
    data(){
      return{
        chart:"",
        newData:[],
        newStatus:"",
      }
    },
    watch: {
      //watch的标准写法
      //immediate才能监听到status的改变
      status:{
        handler(newVal,oldValue){
          this.newStatus = newVal;
        },
      //进入页面就触发
        immediate: true
      },
      //watch的第二种写法
      //监听数据变化，一旦变化将新的radarData传给newData
      radarData(newVal){
        this.newData = newVal;
        console.log(this.newData);
        // console.log(this.chart);
      //获取新数据之后重新渲染图表
        this.chart.changeData(this.newData)
      },

    },
    mounted() {
      const data = this.radarData;
      //实例化图表对象
      const radarPlot = new Radar(document.getElementById('container'), {
        data,
        // forceFit:true,
        // width:300,                  //雷达图宽度
        // height:300,                 //雷达图高度
        title:{
          visible: true,            //是否显示左上角标题
          alignTo: 'left',          //标题位置
          text:this.status+" Radar",         //标题名字
          style:{
            fontSize: 17,           //标题文字大小
            fill: '#BBBBBB',          //标题文字颜色
            opacity:0.5,
            lineWidth:20
          }
        },
        angleField: 'item',
        radiusField: 'score',
        seriesField: 'user',
        legend: {
          visible: true,
          position: 'bottom',
        },
        radiusAxis: {
          //坐标轴刻度，极值和间隔
          tickInterval:25,
          min:0,
          max:100,
          gridType: 'line',
          gridAlternateColor: 'rgba(0, 0, 0, 0.04)',
        },
        angleAxis:{
        }
      });
      this.chart = radarPlot;
      this.chart.render();
    }
  }
</script>

<style scoped>
   #container {
     position:absolute;
     width: 500px;
     height: 500px;
     top:40px;
     left:10px ;
   }
</style>
