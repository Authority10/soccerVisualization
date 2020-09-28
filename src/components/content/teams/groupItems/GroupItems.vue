<template>
  <div class="group-items">
        <single-country
          v-for="(teamItem,index) in teamList"
          :key="index"
          :single-items="teamItem"
          :class="{active:currIndex===index}"
          @click.native="countryClick(index)"
          >
        </single-country>
  </div>
</template>

<script>
  import singleCountry from "./SingleCountry";
  export default {
    name: "groupItems",
    props:{
      teamList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        currIndex:0
      }
    },
    watch:{
      // groupItems(newVal,oldVal){
      // this.currentIndex = Object.keys(newVal)[0];
      // }
    },
    components:{
      singleCountry
    },
    methods:{
      countryClick(index){
        this.currIndex = index ;
        console.log(this.currIndex)
      },
    },
    created(){
      // this.currentIndex = Object.keys(this.groupItems)[0];
    }
  }
</script>

<style scoped>
 .group-items {
   position: absolute;
   top:10px;
   left: 32px;
   /*background-color: red;*/
   width: 260px;
 }

</style>
