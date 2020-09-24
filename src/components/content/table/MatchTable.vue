<template>
  <div class="match-table">
    <!--    同时传入titles和content-->
    <!--    使用v-for遍历titles同时拿到index-->
<!--    <div class="country box" @click="boxClick"-->
<!--         v-for="(items,index) in titles"-->
<!--    >-->
<!--      <div class="title">-->
<!--        {{items}}-->
<!--      </div>-->
<!--      &lt;!&ndash;    在content中使用index索引号遍历&ndash;&gt;-->
<!--      <div class="content">-->
<!--        <div>-->
<!--          {{content[index]}}-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <div class="league-img">
      <div class="league-title">
        中国足球协会超级联赛
      </div>
      <div class="league-logo">
        <img src="../../../assets/image/logo/cls.png" alt="">
      </div>
    </div>

    <div class="six-box league-level">
      <div class="common-title">
        联赛级别
      </div>
      <div class="content">
        国内顶级联赛
      </div>
    </div>
    <div class="six-box teams-amount">
      <div class="common-title">
        球队数量
      </div>
      <div class="content">
        16
      </div>
    </div>
    <div class="six-box players-amount">
      <div class="common-title">
        球员总数
      </div>
      <div class="content">
        672
      </div>
    </div>
    <div class="six-box foreign-amount">
      <div class="common-title">
        外援总数
      </div>
      <div class="content">
        88
      </div>
    </div>
    <div class="six-box defending-champion">
      <div class="common-title">
        卫冕冠军
      </div>
      <div class="content">
        广州恒大
      </div>
    </div>
    <div class="six-box league-duration">
      <div class="common-title">
        联赛时长
      </div>
      <div class="content">
        28年
      </div>
    </div>

    <div class="afc-teams">
      <div class="uncommon-title">
        上届亚冠球队
      </div>
      <div class="uncommon-content">
        广州恒大 江苏苏宁 上海上港 山东鲁能
      </div>
    </div>
    <div class="new-promoter">
      <div class="uncommon-title">
        本赛季升班马
      </div>
      <div class="uncommon-content">
        天津权健 贵州恒丰
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: "MatchTable",
    props:{
      titles:{
        type:Array,
        default(){
          return[]
        }
      },
      content:{
        type:Array,
        default(){
          return[]
        }
      },
      color:String
    },
    methods:{
      boxClick(){
        // console.log(this)
        //提前this指向赋值给_self，指向组件实例
        var _self = this
        var box = document.querySelectorAll(".box")
        for (var i = 0;i<box.length;i++){
          //for循环内找不到this指向?
          box[i].onclick = function(){
            for (var j = 0;j<box.length;j++){
              box[j].style.border = "1px solid #4f4f4f"
              box[j].style.color = "white"
            }
            //函数内可以找到this指向，指向函数调用者
            //这里如果直接用this指向的是函数调用者，使用_self
            this.style.border = "1px solid " + _self.color
            this.style.color= _self.color
          };
        }
      }
    }
  }
</script>

<style scoped>
  .match-table {
    position: absolute;
    top: 64px;
    width: 1433px;
    height: 296px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items:center;
    background-color:#4f4f4f;
  }
  .league-img {
    position: absolute;
    top: 16px;
    left: 31px;
    width: 220px;
    height: 252px;
    overflow: hidden;
    background-color: #565656;
    border-radius: 12px;
  }
  .league-title {
    width: 220px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: white;
    font-size: 20px;
    background-color:#515151;
  }
  .common-title {
    width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: white;
    font-size: 20px;
    background-color:#515151;
  }
  .league-logo {
    position: absolute;
    top: 85px;
    width: 220px;
    height: 123px;
    background-color:white;
  }
  .league-logo img {
    width: 220px;
    height: 123px;
  }
  .six-box {
    position: absolute;
    width: 200px;
    height: 116px;
    overflow: hidden;
    background-color:#565656;
    border-radius: 12px;
  }
  .content {
    position: absolute;
    top:40px;
    width: 200px;
    height: 76px;
    text-align: center;
    color: white;
    font-size: 28px;
    line-height: 76px;
    /*background-color: blue;*/
  }
  .league-level {
    top: 16px;
    left: 261px;
  }
  .teams-amount {
    top: 16px;
    left: 472px;
  }
  .players-amount {
    top: 16px;
    left: 683px;
  }
  .foreign-amount {
    top: 152px;
    left: 261px;
  }
  .defending-champion {
    top: 152px;
    left: 472px;
  }
  .league-duration {
    top: 152px;
    left: 684px;
  }
  .afc-teams {
    position: absolute;
    top: 16px;
    left: 894px;
    width: 513px;
    height: 116px;
    overflow: hidden;
    background-color:#565656;
    border-radius: 12px;
  }
  .new-promoter {
    position: absolute;
    top: 152px;
    left: 894px;
    width: 513px;
    height: 116px;
    overflow: hidden;
    background-color: #565656;
    border-radius: 12px;
  }
  .uncommon-title {
    width: 513px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: white;
    font-size: 18px;
    background-color: #515151;
  }
  .uncommon-content {
    position: absolute;
    top:40px;
    width: 513px;
    height: 76px;
    text-align: center;
    color: white;
    font-size: 28px;
    line-height: 76px;
  }
</style>

