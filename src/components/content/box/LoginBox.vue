<template>
  <div class="login-box">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item  prop="name">
          <div class="my-input">
            <el-input
              v-model="ruleForm.name"
              placeholder="请输入账号"
              clearable>
              <template slot="prepend"><i class="el-icon-user" style="font-size:25px;"></i></template>
            </el-input>
          </div>
        </el-form-item>
        <el-form-item  prop="pass">
          <div class="my-input">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              placeholder="请输入密码"
              autocomplete="off"
              show-password>
              <template slot="prepend"><i class="el-icon-key" style="font-size:25px"></i></template>
            </el-input>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
          >登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="toHome"
          >返回</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
  import Register from "./RegisterBox";
  export default {
    name: "Login",
    components:{
      Register
    },
    data(){
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      return{
        ruleForm:{
          name:"",
          pass: '',
          checkPass: '',
        },
        rules:{
          name: [
            { require:true, message: '请输入账号', trigger: 'blur' },
            { min: 0, max: 11, message: '长度在 0 到 11 个字符', trigger: 'blur' }
          ],
          pass: [
            {require:true,validator: validatePass, trigger: 'blur' }
          ]
        }
      }
    },
    methods:{
      handleClick(tab, event) {
        console.log(tab, event);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
              message: '恭喜你，登录成功',
              type: 'success'
            });
            this.$router.push('/teams')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      toHome(){
        this.$router.push("/home")
      }
    }
  }
</script>

<style scoped>
  .login-box {
    position: absolute;
    width: 400px;
    height: 200px;
    /*background-color: red;*/
    top: 300px;
    left: 1400px;
  }
  /*修改element-ui默认样式*/
  /*在需要修改的ui组件外层包裹div，设置类名之后，
  使用'类名+/deep/+ui组件名称'来   修改样式*/
  .el-button--primary {
    width: 315px;
    background-color: #91D5FF;
    font-weight: bold;
  }
  .el-input /deep/ {
    width: 315px;
  }
  .my-input /deep/ .el-input__inner {
    border: 0.00521rem solid #91D5FF;
  }
  .my-input /deep/ .el-input-group__prepend {
    background-color: white;
    color:#91D5FF;
    border-color:#91D5FF;
  }
  .my-input /deep/ .el-input__inner::placeholder {
    color: #91D5FF;
  }
</style>
