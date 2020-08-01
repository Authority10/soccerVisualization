<template>
  <div class="content-box">
    <slot name="content-name"></slot>
    <slot name="tab-control"></slot>
    <slot name="content-items"></slot>
    <slot name="tab-control-sub"></slot>
    <slot name="content-items-sub"></slot>
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
    width: 230px;
    height: 1200px;
    background-color: #fbfbfb;
    border-left: 2px solid #a9c9e2;
  }

</style>
