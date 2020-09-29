<template>
  <div class="show-team">
    <div class="center-info" @scroll="scrollEvent">
      <team-info
       :active-team="singleTeam">
      </team-info>

      <team-radar
       :team-radar="teamRadar">
      </team-radar>

      <team-season
        :active-team="singleTeam">
      </team-season>

      <team-data
        :teamMatch="teamMatches"
        ref="teamData"
        :fixed="fixed">
      </team-data>
    </div>
<!--    <img src="@/assets/image/common/enter.png" alt="" @click="enterTeam">-->
  </div>
</template>

<script>
  import TeamData from "./centerItems/TeamData";
  import TeamInfo from "./centerItems/TeamInfo";
  import TeamRadar from "./centerItems/TeamRadar";
  import TeamSeason from "./centerItems/TeamSeason";
  export default {
    name: "TeamsCenter",
    data(){
      return{
        singleTeam:{"_id":"5f6e984bdb50443bac5793c5","teamId":1000,"TEAM_NAME_EN":"广州恒大淘宝","Coach":"斯科拉里","FoundDate":"1993","TopLeagueCount":"10","City":"广州","CourtName":"广州天河体育场","Unnamed: 7":"nan","clubImg":"https://bsufootball.oss-cn-beijing.aliyuncs.com/%E4%B8%AD%E8%B6%85/logo/GuangzhouTaobao.png","mostGoalsPlayer":"高拉特","mostGoalsPlayerCount":"20","mostAssistsPlayer":"高拉特","mostAssistsPlayerCount":"9","Unnamed: 0":"7166.0","goals":"66.0","assists":"47.0","shots":"432.0","shotsOnTarget":"173.0","passes":"12674.0","avePasses":"422.47","passAcurracy":"0.78","fouls":"491.0","yellowCard":"72.0","redCard":"3.0","ballPossession":"0.54","loseGoals":"42.0","attacking_rate":"58.1","orgnizing_rate":"58.1","defending_rate":"55.4","skill_rate":"55.6","all_rate":"61.7","teamMatches":[{"homeTeam":"广州恒大淘宝","awayTeam":"北京中赫国安","score":"2—1","Unnamed: 0":12,"goals":2,"assists":1,"shots":14,"shotsOnTarget":3,"passes":370,"passAcurracy":0.7405405409999999,"fouls":27,"yellowCard":6,"redCard":1,"ballPossession":0.603,"loseGoals":1},{"homeTeam":"山东鲁能泰山","awayTeam":"广州恒大淘宝","score":"2—1","Unnamed: 0":22,"goals":1,"assists":0,"shots":10,"shotsOnTarget":6,"passes":500,"passAcurracy":0.816,"fouls":11,"yellowCard":2,"redCard":0,"ballPossession":0.563,"loseGoals":2},{"homeTeam":"广州恒大淘宝","awayTeam":"上海上港","score":"3—2","Unnamed: 0":36,"goals":3,"assists":2,"shots":15,"shotsOnTarget":5,"passes":264,"passAcurracy":0.617424242,"fouls":19,"yellowCard":3,"redCard":0,"ballPossession":0.484,"loseGoals":2},{"homeTeam":"广州恒大淘宝","awayTeam":"广州富力","score":"2—2","Unnamed: 0":56,"goals":2,"assists":2,"shots":11,"shotsOnTarget":6,"passes":389,"passAcurracy":0.7429305909999999,"fouls":19,"yellowCard":4,"redCard":0,"ballPossession":0.508,"loseGoals":2},{"homeTeam":"天津亿利","awayTeam":"广州恒大淘宝","score":"0—3","Unnamed: 0":78,"goals":3,"assists":1,"shots":13,"shotsOnTarget":5,"passes":488,"passAcurracy":0.772540984,"fouls":16,"yellowCard":3,"redCard":0,"ballPossession":0.5479999999999999,"loseGoals":0},{"homeTeam":"广州恒大淘宝","awayTeam":"辽宁沈阳开新","score":"2—1","Unnamed: 0":82,"goals":2,"assists":1,"shots":26,"shotsOnTarget":7,"passes":436,"passAcurracy":0.7912844040000001,"fouls":15,"yellowCard":4,"redCard":1,"ballPossession":0.613,"loseGoals":1},{"homeTeam":"河南建业","awayTeam":"广州恒大淘宝","score":"2—4","Unnamed: 0":108,"goals":4,"assists":1,"shots":12,"shotsOnTarget":6,"passes":470,"passAcurracy":0.776595745,"fouls":17,"yellowCard":2,"redCard":0,"ballPossession":0.531,"loseGoals":2},{"homeTeam":"广州恒大淘宝","awayTeam":"上海绿地申花","score":"2—2","Unnamed: 0":120,"goals":2,"assists":2,"shots":22,"shotsOnTarget":7,"passes":397,"passAcurracy":0.793450882,"fouls":18,"yellowCard":4,"redCard":0,"ballPossession":0.563,"loseGoals":2},{"homeTeam":"长春亚泰","awayTeam":"广州恒大淘宝","score":"0—1","Unnamed: 0":138,"goals":1,"assists":1,"shots":12,"shotsOnTarget":1,"passes":487,"passAcurracy":0.7351129359999999,"fouls":19,"yellowCard":2,"redCard":0,"ballPossession":0.5529999999999999,"loseGoals":0},{"homeTeam":"广州恒大淘宝","awayTeam":"江苏苏宁易购","score":"2—1","Unnamed: 0":146,"goals":2,"assists":2,"shots":14,"shotsOnTarget":3,"passes":424,"passAcurracy":0.818396226,"fouls":16,"yellowCard":3,"redCard":1,"ballPossession":0.535,"loseGoals":1},{"homeTeam":"广州恒大淘宝","awayTeam":"重庆当代力帆","score":"2—0","Unnamed: 0":170,"goals":2,"assists":2,"shots":10,"shotsOnTarget":7,"passes":530,"passAcurracy":0.813207547,"fouls":16,"yellowCard":0,"redCard":0,"ballPossession":0.575,"loseGoals":0},{"homeTeam":"延边富德","awayTeam":"广州恒大淘宝","score":"1—3","Unnamed: 0":182,"goals":3,"assists":2,"shots":17,"shotsOnTarget":4,"passes":542,"passAcurracy":0.78597786,"fouls":14,"yellowCard":5,"redCard":0,"ballPossession":0.556,"loseGoals":1},{"homeTeam":"贵州恒丰智诚","awayTeam":"广州恒大淘宝","score":"0—2","Unnamed: 0":192,"goals":2,"assists":2,"shots":5,"shotsOnTarget":3,"passes":305,"passAcurracy":0.770491803,"fouls":18,"yellowCard":3,"redCard":0,"ballPossession":0.462,"loseGoals":0},{"homeTeam":"广州恒大淘宝","awayTeam":"河北华夏幸福","score":"2—0","Unnamed: 0":214,"goals":2,"assists":1,"shots":10,"shotsOnTarget":7,"passes":333,"passAcurracy":0.807807808,"fouls":17,"yellowCard":3,"redCard":0,"ballPossession":0.47,"loseGoals":0},{"homeTeam":"天津权健","awayTeam":"广州恒大淘宝","score":"4—3","Unnamed: 0":236,"goals":3,"assists":2,"shots":18,"shotsOnTarget":7,"passes":406,"passAcurracy":0.7857142859999999,"fouls":20,"yellowCard":2,"redCard":0,"ballPossession":0.603,"loseGoals":4},{"homeTeam":"北京中赫国安","awayTeam":"广州恒大淘宝","score":"2—0","Unnamed: 0":244,"goals":0,"assists":0,"shots":10,"shotsOnTarget":2,"passes":354,"passAcurracy":0.683615819,"fouls":18,"yellowCard":0,"redCard":0,"ballPossession":0.518,"loseGoals":2},{"homeTeam":"广州恒大淘宝","awayTeam":"山东鲁能泰山","score":"2—1","Unnamed: 0":260,"goals":2,"assists":2,"shots":14,"shotsOnTarget":6,"passes":385,"passAcurracy":0.768831169,"fouls":9,"yellowCard":1,"redCard":0,"ballPossession":0.517,"loseGoals":1},{"homeTeam":"上海上港","awayTeam":"广州恒大淘宝","score":"2—2","Unnamed: 0":278,"goals":2,"assists":2,"shots":14,"shotsOnTarget":5,"passes":435,"passAcurracy":0.816091954,"fouls":14,"yellowCard":2,"redCard":0,"ballPossession":0.583,"loseGoals":2},{"homeTeam":"广州富力","awayTeam":"广州恒大淘宝","score":"4—2","Unnamed: 0":296,"goals":2,"assists":2,"shots":14,"shotsOnTarget":4,"passes":323,"passAcurracy":0.755417957,"fouls":19,"yellowCard":3,"redCard":0,"ballPossession":0.503,"loseGoals":4},{"homeTeam":"广州恒大淘宝","awayTeam":"天津亿利","score":"3—0","Unnamed: 0":306,"goals":3,"assists":2,"shots":13,"shotsOnTarget":7,"passes":482,"passAcurracy":0.831950207,"fouls":19,"yellowCard":3,"redCard":0,"ballPossession":0.616,"loseGoals":0},{"homeTeam":"辽宁沈阳开新","awayTeam":"广州恒大淘宝","score":"0—3","Unnamed: 0":330,"goals":3,"assists":1,"shots":24,"shotsOnTarget":16,"passes":596,"passAcurracy":0.880872483,"fouls":15,"yellowCard":1,"redCard":0,"ballPossession":0.657,"loseGoals":0},{"homeTeam":"广州恒大淘宝","awayTeam":"河南建业","score":"2—1","Unnamed: 0":350,"goals":2,"assists":2,"shots":19,"shotsOnTarget":5,"passes":473,"passAcurracy":0.818181818,"fouls":11,"yellowCard":2,"redCard":0,"ballPossession":0.5760000000000001,"loseGoals":1},{"homeTeam":"上海绿地申花","awayTeam":"广州恒大淘宝","score":"0—3","Unnamed: 0":354,"goals":3,"assists":2,"shots":17,"shotsOnTarget":9,"passes":407,"passAcurracy":0.818181818,"fouls":26,"yellowCard":5,"redCard":0,"ballPossession":0.496,"loseGoals":0},{"homeTeam":"广州恒大淘宝","awayTeam":"长春亚泰","score":"3—1","Unnamed: 0":370,"goals":3,"assists":2,"shots":15,"shotsOnTarget":6,"passes":412,"passAcurracy":0.82038835,"fouls":14,"yellowCard":1,"redCard":0,"ballPossession":0.495,"loseGoals":1},{"homeTeam":"江苏苏宁易购","awayTeam":"广州恒大淘宝","score":"2—2","Unnamed: 0":396,"goals":2,"assists":2,"shots":12,"shotsOnTarget":6,"passes":423,"passAcurracy":0.791962175,"fouls":17,"yellowCard":3,"redCard":0,"ballPossession":0.5489999999999999,"loseGoals":2},{"homeTeam":"重庆当代力帆","awayTeam":"广州恒大淘宝","score":"2—2","Unnamed: 0":402,"goals":2,"assists":2,"shots":17,"shotsOnTarget":3,"passes":413,"passAcurracy":0.779661017,"fouls":16,"yellowCard":3,"redCard":0,"ballPossession":0.56,"loseGoals":2},{"homeTeam":"广州恒大淘宝","awayTeam":"延边富德","score":"3—3","Unnamed: 0":424,"goals":3,"assists":2,"shots":19,"shotsOnTarget":10,"passes":491,"passAcurracy":0.83503055,"fouls":9,"yellowCard":0,"redCard":0,"ballPossession":0.59,"loseGoals":3},{"homeTeam":"广州恒大淘宝","awayTeam":"贵州恒丰智诚","score":"4—1","Unnamed: 0":442,"goals":4,"assists":3,"shots":10,"shotsOnTarget":6,"passes":300,"passAcurracy":0.676666667,"fouls":16,"yellowCard":0,"redCard":0,"ballPossession":0.429,"loseGoals":1},{"homeTeam":"河北华夏幸福","awayTeam":"广州恒大淘宝","score":"3—0","Unnamed: 0":456,"goals":0,"assists":0,"shots":9,"shotsOnTarget":3,"passes":438,"passAcurracy":0.7260273970000001,"fouls":12,"yellowCard":0,"redCard":0,"ballPossession":0.525,"loseGoals":3},{"homeTeam":"广州恒大淘宝","awayTeam":"天津权健","score":"1—2","Unnamed: 0":466,"goals":1,"assists":1,"shots":16,"shotsOnTarget":8,"passes":401,"passAcurracy":0.788029925,"fouls":14,"yellowCard":2,"redCard":0,"ballPossession":0.556,"loseGoals":2}]},
        //data数据访问props
        // activeCountry:{},
        fixed:false,
        scrollTop:0,
        tabControlSubTop:0  //不同浏览器中tab导航条距离视口的高度
      }
    },
    computed:{
      teamRadar(){
        let labels = ['综合','进攻','防守','组织','技巧'];
        let homeTeam = this.singleTeam['TEAM_NAME_EN'].slice(0,4);
        let scoreArray = [];

        scoreArray.push(this.singleTeam['all_rate']*1);
        scoreArray.push(this.singleTeam['attacking_rate']*1);
        scoreArray.push(this.singleTeam['defending_rate']*1);
        scoreArray.push(this.singleTeam['orgnizing_rate']*1);
        scoreArray.push(this.singleTeam['skill_rate']*1);

        let teamRadar = [];
        for(let index = 0; index < labels.length;index++) {
          let obj = {};
          obj.item = labels[index];
          obj.score = scoreArray[index];
          obj.user = homeTeam;
          teamRadar.push(obj)
        }

        // let teamAll = {};
        // let teamAttack = {};
        // let teamDefense = {};
        // let teamPass = {};
        // let teamSkill = {};
        //
        // teamAll.item = "综合";
        // teamAll.score = this.singleTeam['all_rate']*1;
        // teamAll.user = this.singleTeam['TEAM_NAME_EN'];
        // teamRadar.push(teamAll);
        //
        // teamAttack.item = "进攻";
        // teamAttack.score = this.singleTeam['attacking_rate']*1;
        // teamAttack.user = this.singleTeam['TEAM_NAME_EN'];
        // teamRadar.push(teamAttack);
        //
        // teamDefense.item = "防守";
        // teamDefense.score = this.singleTeam['defending_rate']*1;
        // teamDefense.user = this.singleTeam['TEAM_NAME_EN'];
        // teamRadar.push(teamDefense);
        //
        // teamPass.item = "组织";
        // teamPass.score = this.singleTeam['orgnizing_rate']*1;
        // teamPass.user = this.singleTeam['TEAM_NAME_EN'];
        // teamRadar.push(teamPass);
        //
        // teamSkill.item = "技巧";
        // teamSkill.score = this.singleTeam['skill_rate']*1;
        // teamSkill.user = this.singleTeam['TEAM_NAME_EN'];
        // teamRadar.push(teamSkill);

        return teamRadar
      },
      teamMatches(){
        return this.singleTeam.teamMatches
      }
    },
    //利用watch监听props变化
    watch:{
      // currCountry(newVal){
      //   this.activeCountry = newVal
      // }
    },
    methods:{
      // enterTeam(){
      //   //根据activeCountry.teamID拿到球队ID，进行路由跳转
      //   this.$router.push("/players" + this.activeCountry.teamID)
      // },

      //监听滚动事件
      //210其实不能写死，必须动态获取该组件的距离上方的偏移量
      scrollEvent(event){
        this.scrollTop = event.srcElement.scrollTop; // 滚动条偏移量
        console.log(this.scrollTop);
        //根据偏移量决定是否固定（三元运算符）
        this.fixed = this.scrollTop > this.tabControlSubTop;
      }
    },
    components:{
      TeamData,
      TeamInfo,
      TeamRadar,
      TeamSeason
    },
    //路由跳转之后，将固定定位取消
    // 否则重新进入路由之后会出现滚动条在顶部但出现吸顶效果的bug
    deactivated(){
      this.fixed = false
    },
    mounted() {
      //teamData距离父元素的高度
      var teamDataTop = this.$refs.teamData.$el.offsetTop
      //tab距离父元素（tab的父元素就是teamData）的高度
      var tabTop = this.$refs.teamData.$refs.tab.$el.offsetTop
      //滚动条极限距离=teamData距离顶部的高度+tabControlSub距离父组件的高度
      this.tabControlSubTop = teamDataTop + tabTop
      console.log(this.tabControlSubTop)

      //订阅vux中mutation事件
      this.$store.subscribe((mutation, state) => {
        this.singleTeam = state.singleTeam
      })

    }
  }
</script>
<style scoped>
  .show-team {
    position: relative;
  }
  .center-info {
    position: absolute;
    width: 1484px;
    height: 983px;
    top:  97px;
    left: 112px;
    background-color:#404040;
    overflow: scroll;
  }
  .center-info::-webkit-scrollbar {
    display: none;
  }
  img {
    position: absolute;
    width: 56px;
    right: 360px;
    top: 880px;
    z-index: 999;
  }
</style>
