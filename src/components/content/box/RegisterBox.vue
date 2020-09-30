<template>
  <div class="register-box">
    <el-form :model="ruleForm"  :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item prop="name">
        <div class="my-input">
          <el-input
            v-model="ruleForm.name"
            placeholder="请设置账号"
            clearable>
            <template slot="prepend"><i class="el-icon-user" style="font-size:25px;"></i></template>
          </el-input>
        </div>
      </el-form-item>
      <el-form-item prop="pass">
        <div class="my-input">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            placeholder="请设置密码"
            autocomplete="off"
            show-password>
            <template slot="prepend"><i class="el-icon-key" style="font-size:25px"></i></template>
          </el-input>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">
          注册
        </el-button>
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
  export default {
    name: "Register",
    data() {
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
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          name:"",
          pass: '',
          checkPass: '',
        },
        rules: {
          name: [
            { message: '请输入账号', trigger: 'blur' },
            { min: 0, max: 11, message: '长度在 0 到 11 个字符', trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            {required: true, validator: validatePass2, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
              message: '恭喜你，注册成功',
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
 .register-box {
   position: absolute;
   top: 270px;
   left: 20px;
 }
 .el-button--primary {
   width: 315px;
   background-color: #e66767;
   border-color: #e66767;
   font-weight: bold;
 }
 .my-input /deep/ .el-input__inner {
   border: 0.00521rem solid #ff4757;
 }
 .my-input /deep/ .el-input-group__prepend {
   background-color: white;
   color:#ff4757;
   border-color:#ff4757;
 }
 .my-input /deep/ .el-input__inner::placeholder {
   color: #ff4757;
 }

</style>
