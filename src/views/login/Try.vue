<template>
  <div class="loginAndRegister">
    <div class="login-box">
      <el-tabs v-model="activeName"  type="card" @tab-click="handleClick">
        <el-tab-pane label="登录" name="first">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册" name="second">
          <Register></Register>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import Register from "../../components/content/register/TryAgain";
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
        activeName:"second",
        ruleForm:{
          name:"",
          pass: '',
          checkPass: '',
        },
        rules:{
          name: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 0, max: 11, message: '长度在 0 到 11 个字符', trigger: 'blur' }
          ],
          pass: [
            {required: true, validator: validatePass, trigger: 'blur' }
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
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  .loginAndRegister {
    position: relative;
    width: 1910px;
    height: 900px;
    /*z-index: 9999;*/
    /*background-image: url('../../../src/assets/login/login.jpg')*/
  }
  .login-box {
    position: absolute;
    width: 500px;
    height: 300px;
    /*background-color: red;*/
    top: 300px;
    left: 700px;
  }
</style>
