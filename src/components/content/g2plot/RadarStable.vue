<template>
  <div id="radarContainer"></div>
</template>

<script>
  import { Radar } from '@antv/g2plot';
  export default {
    name: "RadarStable",
    mounted() {
      const data = [
        {
          item: '进攻',
          score: 70,
          user:"广州恒大"
        },
        {
          item: '防守',
          score: 60,
          user:"广州恒大"
        },
        {
          item: '组织',
          score: 60,
          user:"广州恒大"
        },
        {
          item: '技巧',
          score: 40,
          user:"广州恒大"
        },
        {
          item: '定位球',
          score: 60,
          user:"广州恒大"
        },
        {
          item: '进攻',
          score: 10,
          user:"北京国安"
        },
        {
          item: '防守',
          score: 20,
          user:"北京国安"
        },
        {
          item: '组织',
          score: 90,
          user:"北京国安"
        },
        {
          item: '技巧',
          score: 50,
          user:"北京国安"
        },
        {
          item: '定位球',
          score: 30,
          user:"北京国安"
        },
      ];
      //实例化图表对象
      const radarPlot = new Radar(document.getElementById('radarContainer'), {
        data,
        forceFit:true,
        // width:300,                  //雷达图宽度
        // height:300,                 //雷达图高度
        // 表格标题
        title:{
          visible: true,            //是否显示左上角标题
          alignTo: 'center',          //标题位置
          text:'个人指标雷达图',         //标题名字
          style:{
            fontSize: 30,             //标题文字大小
            fontWeight:"bold",
            fill: '#BBBBBB',          //标题文字颜色
            opacity:1,
            lineWidth:20
          }
        },
        angleField: 'item',
        radiusField: 'score',
        seriesField: 'user',
        // 表格底部图例
        legend: {
          visible: true,
          position: 'bottom',
          text:{
            style:{
              fontSize:30,
              fill:"#5b8ff9",
            }
          },
          marker:{
            style:{
              r:15,
            }
          }
        },
        // 径向轴配置
        radiusAxis: {
          //坐标轴刻度，极值和间隔
          tickInterval:25,
          min:0,
          max:100,
          gridType: 'line',
          gridAlternateColor: 'rgba(0, 0, 0, 0.04)',
          label:{
            visible:true,
            // precision:2,
            offset:5,
            style:{
              fontSize:20,
              fontWeight:"bold"
            }
          },
        },
        // 角度轴配置
        angleAxis:{
          label: {
            visible: true,
            offset:25,
            // offsetX:10,
            // offsetY:10,
            style:{
              fontSize:30,
              fontWeight:"bold"
            }
          },
        },
        // 信息提示框
        tooltip:{
          visible: true,
          offset:30,
          // fields:['item','score','user'],
          // formatter:()=>{
          //   return {name:'a',value:1 }
          // },
          domStyles:{
            //整个tooltip信息框
            'g2-tooltip':{
              width:"250px",
              height:"150px",
              fontSize:"25px",
              fontWeight:"bold"
            },
            //tooltip信息框的标题
            'g2-tooltip-title':{
              position: 'relative',
              top:"5px"
            },
            //tooltip信息框的列表
            'g2-tooltip-list':{
              position: 'relative',
              top:"15px"
            },
            //tooltip信息框的标记
            'g2-tooltip-marker':{
              position:'relative',
              // top:'15px',
              width: "25px",
              height: "25px",
            },
            'g2-tooltip-name':{
              position:'relative',
              // top:'15px',
              fontSize:'32px'
              // color:"red"
            },
            'g2-tooltip-value':{
              position:'relative',
              top:'5px',
              left:'-20px',
              fontSize:'29px',
              color:"#F7BA52"
            },
          }
        }
      });
      this.chart = radarPlot;
      this.chart.render();
    }
  }
</script>

<style scoped>
  #radarContainer {
    position:absolute;
    width: 300px;
    height: 300px;
    top:20px;
    left:300px;
    /*background-color: red;*/
  }
</style>
