<template>
  <div id="abc"></div>
</template>

<script>
  import { DensityHeatmap } from '@antv/g2plot';
  export default {
    name: "heatMap",
    props:{
      eventPosition:{
        type:Array,
        default() {
          return []
        }
      }
    },
    data(){
      return{
        chart:"",
      }
    },
    watch: {
      eventPosition(newVal) {
        this.chart.changeData(newVal)
      }
    },
    mounted() {
      const data = this.eventPosition;
      const heatMapPlot = new DensityHeatmap(document.getElementById('abc'), {
        data,
        //表格自适应画布的大小，高度宽度失效
        forceFit:true,
        // width:815,
        // height:390,
        // renderer:"svg",
        // width:336,
        // width:775,
        // height:217,
        // height:500,
        xField: 'X',
        yField: 'Y',
        colorField: 'Count',
        color: ['#F51D27', '#FA541C', '#FF8C12', '#FFC838', '#FAFFA8', '#80FF73', '#12CCCC', '#1890FF'],
        meta: {
          x: {
            alias: '球场横坐标',
          },
          y: {
            alias: '球场纵坐标',
          },
        },
        xAxis: {
          visible: false,
          // title:{
          //   visible:true,
          //   text:"球场横坐标"
          // },
          tickLine:{
            visible:false
          },
          min: 0,
          tickCount: 5,
          max: 100,

        },
        yAxis: {
          visible: false,
          // title:{
          //   visible:true,
          //   text:"球场纵坐标"
          // },
          tickLine:{
            visible:false
          },
          min: 0,
          tickCount: 5,
          max: 100,
        },
        // title:{
        //   visible: true,
        //   alignTo: 'left',
        //   text:'球员球场事件热力图',
        //   style:{
        //     fontSize: 15,
        //     fill: 'black',
        //   }
        // },
        // description:{
        //   visible: true,
        //   alignTo: 'left',
        //   text:'坐标(x,y)为相对百分比',
        //   style:{
        //     fontSize: 12,
        //     fill: 'grey',
        //   }
        // },
        legend: {
          visible: false,
          position: 'bottom-center',
          flipPage: true
        },
        tooltip:{
          visible: true,
          offset: 10,
          showCrosshairs: true,
          crosshairs: {
            type: 'xy'
          },
          fields:["x","y"]
        },
        radius: 45,
        pixelRatio:3,
        intensity: 2,
        background:{
          visible: true,
          type: 'image',
          src: '/footgroud.png',
        },
      });
      this.chart = heatMapPlot;
      this.chart.render();
      // window.addEventListener("resize",function () {
      //     setTimeout(function () {
      //       heatMapPlot.repaint()
      //     },5000)
      // })
    },
  }
</script>

<style scoped>
  #abc{
    width:1300px;
    height:500px;
    position: absolute;
    /*background-color: red;*/
    top: 61px;
    left: 200px;
  }
</style>
