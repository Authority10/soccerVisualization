<template>
  <div class="new-button">
    <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
      点我打开
    </el-button>

    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :direction="direction"
    >
    </el-drawer>

  </div>
</template>

<script>
  export default {
    name: "Drawer",
    data() {
      return {
        drawer: false,
        direction: 'rtl',
      };
    },
    methods: {
      // handleClose(done) {
      //   this.$confirm('确认关闭？')
      //     .then(_ => {
      //       done();
      //     })
      //     .catch(_ => {});
      // }
    }
  }
</script>

<style scoped>
  .new-button {
   position: absolute;
   top: 10px;
   left:500px;
  }
</style>
