<template>
  <div class="formwindow">
    <el-form  ref="ruleForm" label-position="left" label-width="80px" :model="userinfo" :rules="rules">
      <el-form-item label="用户:" prop="username">
        <el-input autofocus v-model="userinfo.username"></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input v-model="userinfo.password"></el-input>
      </el-form-item>
    </el-form>
    <div class="btns">
      <el-button @click="submitForm('ruleForm')" type="primary" style="width: calc(100% - 80px);">确定</el-button>
    </div>
  </div>
</template>



<script>
  import { wyAxiosPost } from '../utils/wyAxios/index.js'
  export default {
    name: 'Login',
    data(){
      return {
        userinfo:{
          username:"",
          password:""
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
          password: [
            {required: true,message: '请输入密码', trigger: 'change'}
          ]
        }
      }
    },
    methods: {
      submitForm(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            wyAxiosPost('/adminLogin',{...this.$data.userinfo},(res)=>{
              const token = res.data
              localStorage.setItem('token',token);
              this.$router.push({path:"/app/productManage"});
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    },
    mounted(){
      const that = this;
      document.onkeydown = function() {
        const key = window.event.keyCode;
        if(key === 13){
          that.submitForm('ruleForm');
        }
      }
    }
  }
</script>

<style scoped>

  .formwindow{
    width: 400px;
    height: auto;
    position: fixed;
    left: 50%;
    margin-left: -200px;
    top: 50%;
    margin-top: -100px;
  }
  .btns{
    text-align: right;
    
  }
</style>