<template>
  <div class="group-items">
        <single-country
          v-for="(countryItems) in groupItems"
          :key="countryItems.key"
          :single-items="countryItems"
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
        currentCountry:""
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
  .group-bottom {
    top:450px
  }


</style>
