<template>
 <div id="radarTeam">

 </div>
</template>

<script>
  import {Radar} from "@antv/g2plot";

  export default {
    name: "RadarTeam",
    props:{
      teamRadar:{
        type:Array
      }
    },
    data(){
      return {
        chart:""
      }
    },
    watch:{
      teamRadar(newValue){
         this.chart.changeData(newValue)
      }
    },
    mounted() {
      const data = this.teamRadar;
      //实例化图表对象
      this.chart = new Radar(document.getElementById('radarTeam'), {
        data,
        forceFit: true,
        // width:300,                  //雷达图宽度
        // height:300,                 //雷达图高度
        area:{
          style: {
            fill: "#fff566",
            lineWidth: 2,
            // opacity: 1,
            fillOpacity: 0.5,
            // strokeOpacity: 1,
          }
        },
        line:{
          size: 1,
          style:{
            opacity: 0.7,
            lineJoin: 'round',
            lineCap: 'round',
            stroke:"#fff566"
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
          //坐标轴刻度，极值和间隔
          tickInterval: 25,
          min: 0,
          max: 100,
          gridType: 'line',
          grid: {
            line: {
              type: 'line',
            },
          },
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
            visible:false
          },
          label: {
            visible: true,
            offset: 20,
            style: {
              fontSize: 16,
              fontWeight: "bold"
            }
          },
        },
        // 信息提示框
        tooltip: {
          visible: true,
          offset: 30,
          domStyles: {
            //整个tooltip信息框
            'g2-tooltip': {
              width: "100px",
              height: "70px",
              fontSize: "18px",
              fontWeight: "bold"
            },
            //tooltip信息框的标题
            'g2-tooltip-title': {
              position: 'absolute',
              fontSize: "16px",
              // backgroundColor:"red"
            },
            //tooltip信息框的列表
            'g2-tooltip-list': {
              position: 'absolute',
              top: "30px",
              left:"20px",
              // backgroundColor:"blue",
            },
            //tooltip信息框的标记
            'g2-tooltip-marker': {
              position: 'absolute',
              top:"14px",
              left:"-15px",
              width: "10px",
              height: "10px",
              backgroundColor:"#f1c40f"
            },
            'g2-tooltip-name': {
              fontSize: '15px'
            },
            'g2-tooltip-value': {
              position: 'absolute',
              fontSize: '16px',
              top:"13px",
              left:"38px",
              // backgroundColor:"yellow",
              color:"#f1c40f"
            },
          }
        }
      });
      this.chart.render();
    }
  }
</script>

<style scoped>
  #radarTeam {
    position:absolute;
    width: 350px;
    height: 300px;
    top:20px;
    left:54px;
    /*background-color: red;*/
  }
</style>
