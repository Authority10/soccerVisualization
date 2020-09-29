<template>
  <div class="home">
    <img src="../../assets/image/home/company.png" alt="" class="home-img" @click="welcome">
  </div>
</template>

<script>
  export default {
    name: "Home",
    methods:{
      welcome(){
        this.$router.push('/welcome')
      }
    }
  }
</script>

<style scoped>
 .home-img {
   width: 1920px;
   height: 1075px;
 }

 .home-img::-webkit-scrollbar {
   display: none;
 }

</style>
