<template>
  <div class="container">
    <div id="butterfly">
      <div class='swing' id="butterfly-left">
      </div>

      <div id='butterfly-label' class='butterfly-label'>
        <div class='butterfly-label-item'>
          <div class='butterfly-sublabel butterfly-sublabel-l'>l</div>
          <div class='butterfly-sublabel butterfly-sublabel-c'>c</div>
          <div class='butterfly-sublabel butterfly-sublabel-r'>r</div>
        </div>
      </div>

      <div class='swing' id="butterfly-right">
      </div>
    </div>
  </div>
</template>

<script>
  import { Chart } from '@antv/g2';
  const X_AXIS = [ "interceptions", "clearances", "tackles", "fouls", "blocksShots", "blocksPasses", "yellowCard", "redCard"];
  const LABEL_NAME = {
    "interceptions": "拦&nbsp;&nbsp;&nbsp;&nbsp;截",
    "clearances": "解&nbsp;&nbsp;&nbsp;&nbsp;围攻",
    "tackles": "抢&nbsp;&nbsp;&nbsp;&nbsp;断",
    "fouls": "犯&nbsp;&nbsp;&nbsp;&nbsp;规矩",
    "blocksShots": "封堵射门",
    "blocksPasses": "封堵传球",
    "yellowCard":"黄&nbsp;&nbsp;&nbsp;&nbsp;牌",
    "redCard":"红&nbsp;&nbsp;&nbsp;&nbsp;牌",
  };
  const X_SCALE = { "interceptions": 30, "clearances": 45, "tackles": 31, "fouls": 33, "blocksShots": 13, "blocksPasses": 22, "yellowCard": 6, "redCard": 2};

  function changeData(chart, behavior)
  {
    const data = [];
    for(let i=0; i<X_AXIS.length; i++) {
      const attr = X_AXIS[i];
      let value = +behavior[attr] || 0;
      data.push({'x':attr, 'y': value/X_SCALE[attr]});
    }
    chart.changeData(data);
    chart.render();
  }

  export default {
    name: 'ButterDefense',
    props: {
      behavior0: { type: Object, require: true, },
      behavior1: { type: Object, require: true, },
      size: { type:Number, default: 45 },

    },
    data() {
      return {
        chart0:null,
        chart1:null,
      };
    },
    watch:{
      behavior0(){
        this.updateData();
      },
      behavior1(){
        this.updateData();
      },
    },
    methods: {
      updateData() {

        const { behavior0, behavior1 } = this;
        const el =this.$el.getElementsByClassName("butterfly-label")[0]
        el.innerHTML = '';


        for(let i=0; i<X_AXIS.length; i++) {
          const attr = X_AXIS[i];
          let value0 = +behavior0[attr] || 0;
          let value1 = +behavior1[attr] || 0;
          switch(attr) {
            case 'passesAccuracy':
              value0 = (Math.round(value0*1000)/10) + '%';
              value1 = (Math.round(value1*1000)/10) + '%';
              break;
            case 'Possession':
              value0 = (Math.round(value0*10)/10);
              value1 = (Math.round(value1*10)/10);
              break;
          }
          this.createALabel(LABEL_NAME[attr], value0,  value1);
        }
        changeData(this.chart0, behavior0);
        changeData(this.chart1, behavior1);
      },
      createLabelText(text, bg) {
        const el = document.createElement('div');
        el.style.alignSelf='center';
        el.style.textAlign = 'center';
        el.style.width = '45px';
        el.style.height = this.size + 'px';
        el.style.lineHeight = this.size + 'px';
        el.style.color='white';
        el.style.fontFamily = 'Arial';
        el.style.background=bg;
        el.innerHTML=text;
        return el;
      },
      createALabel(label, ld, rd) {
        const item = document.createElement('div');
        item.style.width='100%';
        item.style.height= 100/X_AXIS.length + '%';
        item.style.display='flex';
        const l = this.createLabelText(ld, '#608bab');
        const c = this.createLabelText(label, '#474747');
        c.style.width = '120px';
        const r = this.createLabelText(rd, '#65944b');
        item.appendChild(l);
        item.appendChild(c);
        item.appendChild(r);
        const el = document.getElementById('butterfly-label');
        el.appendChild(item);
      }
    },
    mounted() {
      const chartLeft = factoryChart('butterfly-left', this.size, '#6cc1ff');
      chartLeft.coordinate().transpose().reflect('x').reflect('y');
      chartLeft.render();
      this.chart0 = chartLeft;

      const chartRight = factoryChart('butterfly-right', this.size, '#76d241');
      chartRight.coordinate().transpose().reflect('y');
      chartRight.render();
      this.chart1 = chartRight;

      this.updateData();
    },

  }

  function factoryChart(id, size, color) {
    const chart = new Chart({
      container: id,
      autoFit: true,
      width: (document.getElementById('butterfly').scrollWidth-210)/2,
      padding: [0, 0, 0, 0],
    });
    chart.data([]);
    chart.tooltip(false);
    chart.axis('y', false);
    chart.legend('false')
    chart.interval().position('x*y').size(size).color(color);
    chart.scale({'y': {min:0, max:1}});
    // chart.interaction('element-highlight');
    return chart;
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container { width:100%; height:100%; background:#6a6a6a; }
  #butterfly { width:90%; height:90%; position:relative; display:flex; margin:15px 60px }
  .swing { flex-grow:0; }
  .butterfly-label { width:210px;height:100%;}
  .butterfly-sublabel { align-self:center; text-align: center; width:50px; height:45px;}
  .butterfly-sublabel-l { background:rgba(255,0,0,0.3); }
  .butterfly-sublabel-c { background:rgba(0,0,0,0.3); }
  .butterfly-sublabel-r { background:rgba(0,255,0,0.3); }

</style>
