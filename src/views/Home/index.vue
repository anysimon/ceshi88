<template>
  <el-form class="home">
    <el-card class="box-card">
      <div class="clearfix">
        <img src="../../assets/img/logo_index.png" />
      </div>
      <el-form ref="formObj" style="margin-top: 20px" :model="loginForm" :rules="loginRules">
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input style="width: 280px" v-model="loginForm.code" placeholder="验证码"></el-input>
          <el-button style="float: right">发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="checked">
          <el-checkbox v-model="loginForm.checked">
            我已阅读并同意
            <a href="#" style="color: #3296fa">用户协议</a>
            和
            <a href="#" style="color: #3296fa">隐私条款</a>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%" @click="submitForm">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <div ref="div">123</div>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '',
        code: '',
        checked: true
      },
      // 校验规则对象
      loginRules: {
        mobile: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号' }
        ],
        code: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '请输入正确的验证码' }
        ],
        checked: [
          {
            validator: function (rule, value, callback) {
            // rule 当前的规则， value 代表当前checked的值
              if (value) {
                callback()
              } else {
                callback(new Error('请勾选同意信息'))
              }
            }
          }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.formObj.validate(function (isOk) {
        if (isOk) {

        } else {
          // this.$message.error('用户名或验证码错误，请核对')
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  background: url("../../assets/img/login_bg.jpg");
  background-size: cover;
  height: 100vh;
}
.clearfix {
  text-align: center;
  img {
    height: 40px;
  }
}

.box-card {
  width: 460px;
  height: 350px;
  // text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  box-sizing: border-box;
}
</style>
