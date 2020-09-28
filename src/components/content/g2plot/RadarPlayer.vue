<template>
  <div id="radarPlayer"></div>
</template>

<script>
  import {Radar} from '@antv/g2plot';

  export default {
    name: "RadarPlayer",
    props:{
      radarData:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        chart:"",
      }
    },
    watch:{
      radarData(newVal){
        console.log(newVal);
        //获取新数据之后重新渲染图表
        // this.chart.changeData(newVal.map((v)=>{
        //   return {'item':v.item, 'score':+v.score,'user':v.user}
        // }))
        this.chart.changeData(newVal)
      },
    },
    mounted() {
      const data = this.radarData;
      //实例化图表对象
      this.chart = new Radar(document.getElementById('radarPlayer'), {
        data,
        forceFit: true,
        color:["#6894b4",'#6d9d52'],
        // color:(user)=>{
        //   if(user==="高拉特"){
        //     return "red"
        //   }
        //   return  "yellow"
        // },
        // area:{
        //   visible: true,
        //   style: {
        //     fill: "#404040",
        //     stroke:"#404040",
        //     lineWidth: 2,
        //     // opacity: 1,
        //     fillOpacity: 0.7,
        //   }
        // },
        area: {

        },
        line:{
          size: 2,
          style:{
            opacity: 1,
            lineJoin: 'round',
            lineCap: 'round',
          }
        },
        // 表格标题
        title: {
          visible: false,            //是否显示左上角标题
          alignTo: 'center',          //标题位置
          text: '个人指标雷达图',         //标题名字
          style: {
            fontSize: 30,             //标题文字大小
            fontWeight: "bold",
            fill: '#BBBBBB',          //标题文字颜色
            opacity: 1,
            lineWidth: 20
          }
        },
        angleField: 'item',
        radiusField: 'score',
        seriesField: 'user',
        // 表格底部图例
        legend: {
          visible: false,
          position: 'bottom',
          text: {
            style: {
              fontSize: 12,
              fill: "#5b8ff9",
            }
          },
          marker: {
            style: {
              r: 15,
            }
          }
        },
        // 径向轴配置
        radiusAxis: {
          line:{
            visible:false
          },
          grid: {
            line: {
              type: 'line',
            },
          },
          //坐标轴刻度，极值和间隔
          tickInterval: 2,
          min: 0,
          max: 10,
          gridType: 'arc',
          gridAlternateColor: 'rgba(0, 0, 0, 0.04)',
          label: {
            visible: false,
            // precision:2,
            offset: 5,
            style: {
              fontSize: 20,
              fontWeight: "bold"
            }
          },
        },
        // 角度轴配置
        angleAxis: {
          line:{
            visible:true,
          },
          grid:{
            visible:true,
          },
          label: {
            visible: true,
            // offset: 10,
            // offsetX:10,
            // offsetY:10,
            style: {
              fontSize: 14,
              fontWeight: "bold"
            }
          },
        },
        // 信息提示框
        tooltip: {
          visible: true,
          offset: -5,
          // domStyles: {
          //   //整个tooltip信息框
          //   'g2-tooltip': {
          //     width: "100px",
          //     height: "70px",
          //     fontSize: "18px",
          //     fontWeight: "bold"
          //   },
          //   //tooltip信息框的标题
          //   'g2-tooltip-title': {
          //     position: 'absolute',
          //     fontSize: "16px",
          //     // backgroundColor:"red"
          //   },
          //   //tooltip信息框的列表
          //   'g2-tooltip-list': {
          //     position: 'absolute',
          //     top: "30px",
          //     left:"20px",
          //     // backgroundColor:"blue",
          //   },
          //   //tooltip信息框的标记
          //   'g2-tooltip-marker': {
          //     position: 'absolute',
          //     top:"14px",
          //     left:"-15px",
          //     width: "10px",
          //     height: "10px",
          //     backgroundColor:"#f1c40f"
          //   },
          //   // 'g2-tooltip-name': {
          //   //   position: 'absolute',
          //   //   top:'30px',
          //   //   fontSize: '18px'
          //   // },
          //   'g2-tooltip-value': {
          //     position: 'absolute',
          //     fontSize: '18px',
          //     top:"13px",
          //     left:"30px",
          //     // backgroundColor:"yellow",
          //     color:"#f1c40f"
          //   },
          // }
        }
      });
      this.chart.render();
    }
  }
</script>

<style scoped>
  #radarPlayer {
    width: 303px;
    height: 292px;
  }
</style>
