<template>
    <div class="center-info">
      <div class="first-team">
        广州恒大
      </div>
      <div class="second-team">
        北京国安
      </div>

      <Cascader
        :playersList="playersList"
      >
      </Cascader>

      <Cascader
        class="second-block"
        :playersList="playersList">
      </Cascader>

      <slot name="player-person-info">
      </slot>
      <slot name="player-person-data">
      </slot>
      <slot name="second-player-person-info">
      </slot>
      <slot name="player-person-appearance">
      </slot>

    </div>
</template>

<script>
  import Cascader from "../../element-ui/Cascader";
  export default {
    name: "PlayersCenter",
    data(){
      return{
        playersList: [
          {
            value: 'GoalKeeper',
            label: '守门员',
            children:[
              {
                value:'nuoyier',
                label:'诺伊尔'
              },
              {
                value:'kuertuwa',
                label:'库尔图瓦'
              },
              {
                value:'luoli',
                label:'洛里'
              }]
          },
          {
            value: 'Defender',
            label: '后卫',
            children:[
              {
                value:'lamosi',
                label:'拉莫斯'
              },
              {
                value:'wumudidi',
                label:'乌姆蒂蒂'
              },
              {
                value:'xierwa',
                label:'席尔瓦'
              },
              {
                value:'jimuxi',
                label:'基米希'
              }
            ]
          },
          {
            value: 'Center',
            label: '中场',
            children:[
              {
                value:'modeliqi',
                label:'莫德里奇'
              },
              {
                value:'lajidiqi',
                label:'拉基蒂奇'
              },
              {
                value:'diyage',
                label:'蒂亚戈'
              },
              {
                value:'debulaonei',
                label:'德布劳内'
              }
            ]
          },
          {
            value: 'ForWard',
            label: '前锋',
            children:[
              {
                value:'meixi',
                label:'10 梅西'
              },
              {
                value:'cluo',
                label:'7 C罗'
              },
              {
                value:'neimaer',
                label:'11 内马尔'
              },
              {
                value:'yibu',
                label:'9 伊布拉希莫维奇'
              }
            ]
          }
        ]
      }
    },
    components:{
      Cascader
    }
  }
</script>

<style scoped>
   .center-info {
     position: fixed;
     width: 1820px;
     height: 842px;
     top:  101px;
     left: 112px;
     background-color:#404040;
     overflow: scroll;
     overflow-x:hidden ;
     /*border: 1px solid #dcdde1;*/
   }
   .first-team {
     position: absolute;
     top: 13px;
     left: 25px;
     width: 150px;
     background-color:#4b4b4b;
     color: white;
     text-align: center;
     font-size: 27px;
   }
   .second-team {
     position: absolute;
     top: 13px;
     left: 1400px;
     width: 150px;
     background-color:#4b4b4b;
     text-align: center;
     color: white;
     font-size: 27px;
   }
  .info-span {
    position: absolute;
    top:17px;
    left: 80px;
    color:#FF7875;
    font-size: 28px;
    /*border-bottom: 6px solid #F7BA52;*/
  }
  .hr-line {
    position:absolute;
    top: 0;
    left: 640px;
    width: 1px;
    height: 835px;
    background-color: #8395a7;
  }
  .data-span {
    position: absolute;
    top:17px;
    left: 720px;
    color:#FDFDFD;
    font-size: 28px;
    border-bottom: 6px solid #F7BA52;
  }
</style>
