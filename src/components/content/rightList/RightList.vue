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
    /*overflow: scroll;*/
    right: 0;
    top: 0;
    width: 324px;
    height: 1082px;
    background-color: #F2F2F2;
    border-left:1px solid rgba(187, 187, 187, 0.5);
  }

</style>
