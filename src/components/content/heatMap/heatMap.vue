<template>
  <div id="abc"></div>
</template>

<script>
  import { DensityHeatmap } from '@antv/g2plot';
  export default {
    name: "heatMap",
    mounted() {
      const data = [
        {"y": 96, "x": 37, "tmp": 110},
        {"y": 98, "x": 34, "tmp": 110},
        {"y": 89, "x": 65, "tmp": 110},
        {"y": 96, "x": 79, "tmp": 110},
        {"y": 97, "x": 62, "tmp": 110},
        {"y": 91, "x": 69, "tmp": 110},
        {"y": 93, "x": 81, "tmp": 110},
        {"y": 86, "x": 77, "tmp": 110},
        {"y": 76, "x": 78, "tmp": 110},
        {"y": 97, "x": 66, "tmp": 110},
        {"y": 98, "x": 86, "tmp": 110},
        {"y": 85, "x": 88, "tmp": 110},
        {"y": 82, "x": 33, "tmp": 50},
        {"y": 81, "x": 32, "tmp": 110},
        {"y": 89, "x": 56, "tmp": 110}
      ];
      const heatMapPlot = new DensityHeatmap(document.getElementById('abc'), {
        data,
        width:336,
        // width:614,
        height:217,
        // height:450,
        xField: 'x',
        yField: 'y',
        colorField: 'tmp',
        color: ['#295599', '#3e94c0', '#78c6d0', '#b4d9e4', '#fffef0', '#f9cdac', '#ec7d92', '#bc448c'],
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
        radius: 4,
        pixelRatio:3,
        intensity: 2,
        background: {
          visible: true,
          type: 'image',
          src: 'https://outin-6a24895c919711eab60900163e1c8dba.oss-cn-shanghai.aliyuncs.com/image/default/1E50334EC6CE43DABBA1AA5544C59FD3-6-2.png',
          // value: '#262626'
        },
      });
      heatMapPlot.render();
    },
  }
</script>

<style scoped>
  #abc{
    /*margin-top: 100px;*/
    margin-left: 300px;
  }
</style>
