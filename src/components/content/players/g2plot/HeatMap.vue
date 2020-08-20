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
        newData:[]
      }
    },
    watch: {
      eventPosition(newVal, oldVal) {
        this.newData = newVal;
        this.chart.changeData(this.newData)
      }
    },
    mounted() {
      const data = this.eventPosition;
      const heatMapPlot = new DensityHeatmap(document.getElementById('abc'), {
        data,
        forceFit:true,
        // width:336,
        //width:605,
        // height:217,
        //height:390,
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
          src: 'https://outin-6a24895c919711eab60900163e1c8dba.oss-cn-shanghai.aliyuncs.com/image/default/77892CC700494FF98856C1FD0F8D2DDF-6-2.jpg',
          // value: '#262626'
        },
      });
      this.chart = heatMapPlot;
      this.chart.render();
    },
  }
</script>

<style scoped>
  #abc{
    width:756px;
    height:488px;
    position: absolute;
    top: 0;
    left: -30px;
  }
</style>
