<template>

  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>

</template>

<script>
  import BScroll from "better-scroll"
  export default {
    name: "Scroll",
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default: false
      }
    },
    data(){
      return{
        scroll:null
      }
    },
    mounted() {

      //不建议操作dom去获取绑定了wrapper类的元素，一旦出现名字重复就会出bug
      //推荐使用ref绑定元素来获取
      // ref如果绑定的是组件则通过this.$ref.refname获取的是组件对象
      // ref如果绑定的是元素则通过this.$ref.refname获取的是元素对象

      // 创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType:this.probeType,
        click:true,
        pullUpLoad:this.pullUpLoad
      });
      // 监听滚动事件
      // 最好还是做个判断，probeType传入为2或者3才调用监听滚动，提高性能
      if(this.probeType===2 || this.probeType===3){
        this.scroll.on("scroll",position=>{
          // console.log(position);
          //子组件发射事件，同时传递出position
          this.$emit("scroll",position)
        });
      }
      // if(this.pullUpLoad){
      //   // 监听上拉刷新事件
      //   this.scroll.on("pullingUp",()=>{
      //     this.$emit("pullingUp")
      //   });
      // }

      //打印创建的scroll对象
      // console.log(this.scroll);
    },
    methods:{
      //提前封装好scrollTo方法，设定事件参数，
      // home组件可以通过refs访问到自己从而调用这个方法
      // backToTop(x,y,time=300){
        //多写一个this.scroll为了确保在通过this.$refs调用scroll对象的方法的时候，scroll对象已经存在了
        //视频173的bug
        //有可能出现图片加载的速度过快的情况，
        // 导致home组件监听到bus事件之后进行回调的时候，
        // scrol对象还没有创建完毕，所以找不到refresh方法
        // bus事件是在home的created里面，而scroll封装好的refresh等方法是需要通过创建的scroll对象调用
        //而scroll对象又是在scroll组件的mounted里面，有一定的滞后性
        // this.scroll && this.scroll.scrollTo(x,y,time)
      // },
      //提前封装好finishPullUp方法，上拉刷新之后重置，允许再次刷新
      // home组件可以通过refs访问到自己从而调用这个方法
      // finishPullUp(){
      //   this.scroll &&this.scroll.finishPullUp()
      // },
      //提前封装好refresh方法，可以让scroll重新计算wrapper包裹的允许滑动的高度
      //视频第172讲
      // refresh(){
      //   console.log("refresh,重新包裹wrapper");
      //   this.scroll && this.scroll.refresh()
      // },
      // getScrollY(){
      //   return this.scroll ? this.scroll.y : 0
      // }
    }
  }
</script>

<style scoped>

</style>
