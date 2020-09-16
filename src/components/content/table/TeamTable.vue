<template>
  <div class="country-table">
<!--    同时传入titles和content-->
<!--    使用v-for遍历titles同时拿到index-->
    <div class="country box" @click="boxClick"
     v-for="(items,index) in titles"
    >
      <div class="title">
        {{items}}
      </div>
<!--    在content中使用index索引号遍历-->
      <div class="content">
        <div>
         {{content[index]}}
        </div>
      </div>
    </div>
<!--    <div class="coach box" @click="boxClick">-->
<!--      <div class="title">-->
<!--        主教练-->
<!--      </div>-->
<!--      <div class="content">-->
<!--        <div>-->
<!--          克洛普-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="birth-date box" @click="boxClick">-->
<!--      <div class="title">-->
<!--        成立时间-->
<!--      </div>-->
<!--      <div class="content">-->
<!--        <div>-->
<!--         1996-10-04-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="age box" @click="boxClick">-->
<!--      <div class="title">-->
<!--        年龄-->
<!--      </div>-->
<!--      <div class="content">-->
<!--          27.8-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="times box" @click="boxClick">-->
<!--      <div class="title">-->
<!--        参赛次数-->
<!--      </div>-->
<!--      <div class="content">-->
<!--        <div>-->
<!--         20-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="glory box" @click="boxClick">-->
<!--      <div class="title">-->
<!--        主要荣誉-->
<!--      </div>-->
<!--      <div class="content">-->
<!--        <div>-->
<!--         冠军-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
  export default {
    name: "TeamTable",
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
  .country-table {
    position: absolute;
    width: 1433px;
    height:155px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #4f4f4f;
  }
  .box {
    width: 200px;
    height: 116px;
    border-radius: 15px;
    color:white;
    border: 1px solid #525252;
    overflow: hidden;
  }
  .title {
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    background-color: #525252;
  }
  .content {
    /*display: flex;*/
    /*flex-direction: column;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    height: 76px;
    line-height:76px;
    text-align: center;
    background-color:#555555;
    /*line-height: 100px;*/
    /*text-align: center;*/
    /*font-weight: bold;*/
    font-size: 24px;
  }
</style>
