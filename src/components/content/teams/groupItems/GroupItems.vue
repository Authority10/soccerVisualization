<template>
  <div class="group-items">
        <single-country
          v-for="(countryItems) in groupItems"
          :key="countryItems.key"
          :single-items="countryItems"
          :currentCountry="currentCountry"
          :class="{active:currentCountry===countryItems.countryName}"
          @click.native="countryClick(countryItems)"
          >
        </single-country>
  </div>
</template>

<script>
  import singleCountry from "./SingleCountry";
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
        currentCountry:"Russia"
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
      countryClick(countryItems){
        // console.log(window.screen.width);
        // console.log(window.screen.height);
        this.currentCountry = countryItems.countryName;
        this.$bus.$emit("sendCountry",countryItems);
      },
    },
    created(){
      this.currentIndex = Object.keys(this.groupItems)[0];
    }
  }
</script>

<style scoped>
 .group-items {
   position: absolute;
   top:140px;
   left: 12px;
   /*background-color: red;*/
   width: 300px;
   height: 650px;
 }
  .group-bottom {
    top:550px
  }
</style>
