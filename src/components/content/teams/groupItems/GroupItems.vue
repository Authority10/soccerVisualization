<template>
  <div class="group-items">
        <single-country
          v-for="(teamItem,index) in teamList"
          :key="index"
          :single-items="teamItem"
          @click.native="countryClick(teamItem)"
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
        type:Object,
        default(){
          return{}
        }
      }
    },
    data(){
      return{
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
      countryClick(teamItem){
        console.log(teamItem)
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
