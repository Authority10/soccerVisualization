<template>
  <div class="group-items">
    <single-country
      v-for="(countryItems,index) in groupItems"
      :key="countryItems.key"
      :single-items="countryItems"
      :class="{active:currentIndex===index}"
      @click.native="countryClick(index)"
      >
    </single-country>
  </div>
</template>

<script>
  import singleCountry from "./singleCountry";
  export default {
    name: "groupItems",
    props:{
      groupItems:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    data(){
      return{
        currentIndex:""
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
        this.currentIndex = index
      }
    },
    created() {
      this.currentIndex = Object.keys(this.groupItems)[0];
    }
  }
</script>

<style scoped>
 .group-items {
   /*display: flex;*/
   overflow: scroll;
   /*flex-direction: column;*/
   /*align-items: center;*/
   /*justify-content: flex-start;*/
   position: absolute;
   top:110px;
   width: 240px;
   height: 650px;
 }


</style>
