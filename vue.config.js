module.exports ={
  //手动关闭EsLint
  lintOnSave: false,
  configureWebpack:{
    resolve:{
      alias:{
        "assets":"@/assets",
        "common":"@/common",
        "components":"@/components",
        "network":"@/network",
        "views":"@/views",
      }
    }
  }
};
