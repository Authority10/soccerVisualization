<template>
  <div class="content-box">
    <slot name="content-name"></slot>
    <slot name="tab-control"></slot>
    <slot name="content-items"></slot>
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
    right: 0;
    top: 0;
    width: 240px;
    /*height: 1200px;*/
    background-color: #fbfbfb;
    border-left: 1px solid #dcdde1;
  }

</style>
