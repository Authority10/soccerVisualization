<template>
  <div class="content-box">
<!--    <slot name="content-name"></slot>-->
<!--    <slot name="tab-control-first"></slot>-->
<!--    <slot name="content-items-first"></slot>-->
<!--    <slot name="tab-control-second"></slot>-->
<!--    <slot name="content-items-second"></slot>-->
<!--    <slot name="tab-control-third"></slot>-->
<!--    <slot name="content-items-third"></slot>-->
  </div>
</template>

<script>
  import TabControl from "../../common/tabControl/TabControl";
  export default {
    name: "rightList",
    components: {
      TabControl
    },
    methods:{

    }
  }
</script>

<style scoped>

  .content-box {
    position: fixed;
    /*overflow: auto;*/
    right: 0;
    top: 0;
    width: 324px;
    height: 943px;
    background-color: #4b4b4b;
    /*background-color: red;*/
    /*border-left:1px solid rgba(187, 187, 187, 0.5);*/
  }

</style>
