<template>
    <div id="container"></div>
</template>

<script>
  import { Radar } from '@antv/g2plot';
  export default {
    name: "Radar",
    mounted() {
      const data = [
        {
          item: 'goals',
          user: 'France',
          score: 70,
        },
        {
          item: 'Development',
          user: 'France',
          score: 60,
        },
        {
          item: 'Marketing',
          user: 'France',
          score: 60,
        },
        {
          item: 'Users',
          user: 'France',
          score: 40,
        },
        {
          item: 'Test',
          user: 'France',
          score: 60,
        },
        {
          item: 'Language',
          user: 'France',
          score: 70,
        },
        {
          item: 'Technology',
          user: 'France',
          score: 50,
        },
        {
          item: 'Support',
          user: 'France',
          score: 30,
        },
        {
          item: 'Sales',
          user: 'France',
          score: 60,
        },
        {
          item: 'UX',
          user: 'France',
          score: 50,
        },


        {
          item: 'goals',
          user: 'Average',
          score: 30,
        },
        {
          item: 'Development',
          user: 'Average',
          score: 70,
        },
        {
          item: 'Marketing',
          user: 'Average',
          score: 50,
        },
        {
          item: 'Users',
          user: 'Average',
          score: 50,
        },
        {
          item: 'Test',
          user: 'Average',
          score: 70,
        },
        {
          item: 'Language',
          user: 'Average',
          score: 50,
        },
        {
          item: 'Technology',
          user: 'Average',
          score: 40,
        },
        {
          item: 'Support',
          user: 'Average',
          score: 40,
        },
        {
          item: 'Sales',
          user: 'Average',
          score: 40,
        },
        {
          item: 'UX',
          user: 'Average',
          score: 60,
        },
      ];
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
