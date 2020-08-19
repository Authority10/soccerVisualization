<template>
    <div id="container"></div>
</template>

<script>
  import { Radar } from '@antv/g2plot';
  export default {
    name: "Radar",
    props:{
      radarData:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    mounted() {
      const data = this.radarData;
      const radarPlot = new Radar(document.getElementById('container'), {
        data,
        width:300,
        height:300,
        title:{
          visible: true,
          alignTo: 'left',
          text:'球队进攻指标平均值',
          style:{
            fontSize: 15,
            fill: 'black',
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
          gridType: 'line',
          gridAlternateColor: 'rgba(0, 0, 0, 0.04)',
        },
      });
      radarPlot.render();
    }
  }
</script>

<style scoped>
   #container {
     position:absolute;
     top:40px;
     left:10px ;
   }
</style>
