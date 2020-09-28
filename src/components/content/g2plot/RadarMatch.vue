<template>
  <div id="radarMatch"></div>
</template>

<script>
  import {Radar} from "@antv/g2plot";

  export default {
    name: "RadarMatch",
    props:{
      radarData:{
        type: Array
      }
    },
    data(){
      return {
        chart:''
      }
    },
    watch:{
      radarData(newValue){
        this.chart.changeData(newValue)
      }
    },
    mounted() {
      const data = this.radarData;
      this.chart = new Radar(document.getElementById('radarMatch'), {
        data,
        forceFit: true,
        padding:"auto",
        angleField: 'item',
        radiusField: 'score',
        seriesField: 'user',
        radiusAxis: {
          visible:true,
          min:0,
          max:100,
          tickInterval:20,
          label:{
            visible:false,
            autoHide:true
          },
          title:{
            offset:10
          },
          grid: {
            line: {
              type: 'line',
            },
          },
        },
        angleAxis:{
          visible:true,
          label:{
            visible: true,
            offset:8,
            style:{
              fill:"#ff7875"
            },
            autoRotate: true,
            autoHide: true
          },

        },
        line: {
          visible: true,
        },
        point: {
          visible: false,
          shape: 'circle',
          size:2
        },
        legend: {
          visible: true,
          position: 'bottom-center',
          offsetY:9,
          text:{
            style:{
              fill:"white"
            }
          }
        },
        label:{
          visible:false
        }
      });
      this.chart.render();
    }
  }
</script>

<style scoped>
   #radarMatch {
     /*position: absolute;*/
     /*top: -15px;*/
     width: 303px;
     height: 278px;
     /*background-color: red;*/
   }
</style>
