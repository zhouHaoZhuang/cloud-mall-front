<template>
  <div class="register-container">
    <div class="top-title">
      找回密码
    </div>
    <div class="register">
      <div class="content">
        <div class="item">
          <div class="input-box">
            <Iconfont class="left-icon" type="icon-phone" />
            <input
              v-model="form.phone"
              maxlength="11"
              placeholder="请输入手机号码"
              @focus="
                phoneEnter = true
                phoneStatus = 0
              "
              @blur="phoneblurfns"
            >
          </div>
          <div class="info">
            <div v-if="phoneStatus === 0" class="info-item">
              <Iconfont class="info-icon" type="icon-info" />
              <span>手机号码可用于登陆、激活账号、密码找回</span>
            </div>
            <div v-else-if="phoneStatus === 1" class="info-item">
              <Iconfont class="info-icon" type="icon-err" />
              <span>你输入的手机号码不正确</span>
            </div>
            <div v-else-if="phoneStatus === 2" class="info-item">
              <Iconfont class="info-icon" type="icon-ok" />
              <span>填写正确</span>
            </div>
          </div>
        </div>
        <div class="item short">
          <div class="input-box">
            <Iconfont class="left-icon" type="icon-code" />
            <input
              v-model="form.code"
              placeholder="请输入短信验证码"
              maxlength="4"
              @focus="
                codeEnter = true
                codeStatus = 0
              "
              @blur="shortblurfns"
            >
          </div>
          <div class="info">
            <div v-if="codeStatus === 0" class="info-item">
              <Iconfont class="info-icon" type="icon-info" />
              <span>请输入收到的验证码</span>
            </div>
            <div v-else-if="codeStatus === 1" class="info-item">
              <Iconfont class="info-icon" type="icon-err" />
              <span>验证码格式错误</span>
            </div>
            <div v-else-if="codeStatus === 2" class="info-item">
              <Iconfont class="info-icon" type="icon-ok" />
              <span>验证码格式正确</span>
            </div>
          </div>
          <a-button
            class="section"
            :style="`background:${codeLoading ? '#ccc' : ''}`"
            type="primary"
            :disabled="codeLoading"
            @click="sendCode"
          >
            {{ codeTxt }}
          </a-button>
        </div>
        <div class="item">
          <div class="input-box">
            <Iconfont class="left-icon" type="icon-lock" />
            <input
              v-model="form.password"
              placeholder="请输入重置密码"
              type="password"
              maxlength="20"
              @focus="
                pwdEnter = true
                pwdStatus = 0
              "
              @blur="setpswdblurfns"
            >
          </div>
          <div class="info">
            <div v-if="pwdStatus === 0" class="info-item">
              <Iconfont class="info-icon" type="icon-info" />
              <span>密码由8-20个英文字母、数字和特殊符号组成</span>
            </div>
            <div v-else-if="pwdStatus === 1" class="info-item">
              <Iconfont class="info-icon" type="icon-err" />
              <span>密码格式填写错误</span>
            </div>
            <div v-else-if="pwdStatus === 2" class="info-item">
              <Iconfont class="info-icon" type="icon-ok" />
              <span>密码格式填写正确</span>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="input-box">
            <Iconfont class="left-icon" type="icon-lock" />
            <input
              v-model="form.confrimPassword"
              placeholder="请再次填写密码"
              type="password"
              maxlength="20"
              @focus="
                confirmPwdEnter = true
                confirmPwdStatus = 0
              "
              @blur="confirmpswdblurfns"
            >
          </div>
          <div class="info">
            <div v-if="confirmPwdStatus === 0" class="info-item">
              <Iconfont class="info-icon" type="icon-info" />
              <span>请再次输入密码</span>
            </div>
            <div v-else-if="confirmPwdStatus === 1" class="info-item">
              <Iconfont class="info-icon" type="icon-err" />
              <span>两次输入的密码不一致</span>
            </div>
            <div v-else-if="confirmPwdStatus === 2" class="info-item">
              <Iconfont class="info-icon" type="icon-ok" />
              <span>填写正确</span>
            </div>
          </div>
        </div>
        <a-button class="btn" type="primary" @click="handleRegister">
          确认修改
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 下方所有验证的status 0:默认 1:未通过验证 2:验证通过
      // 手机号码验证
      phoneEnter: false,
      phoneStatus: 0,
      //   短信验证码
      codeEnter: false,
      codeStatus: 0,
      //   设置密码
      pwdEnter: false,
      pwdStatus: 0,
      //   确认密码
      confirmPwdEnter: false,
      confirmPwdStatus: 0,
      // 手机号正则
      phoneReg:
        /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/,
      pwdReg: /(?=.*[0-9])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,20}/,
      form: {
        phone: '',
        code: '',
        password: '',
        confrimPassword: ''
      },
      // 获取验证码loading
      codeLoading: false,
      // 定时器id
      time: null,
      timeCount: 60,
      codeTxt: '发送短信验证',
      //   是否同意协议
      isRead: false
    }
  },
  methods: {
    // 手机号码失去焦点
    phoneblurfns () {
      if (this.form.phone === '') {
        this.phoneStatus = 1
        return
      }
      if (!this.phoneReg.test(this.form.phone)) {
        this.phoneStatus = 1
      } else {
        this.phoneStatus = 2
      }
    },
    // 短信验证码失去焦点
    shortblurfns () {
      if (this.form.code.length === 4) {
        this.codeStatus = 2
      } else {
        this.codeStatus = 1
      }
    },
    // 密码失去焦点
    setpswdblurfns () {
      if (this.pwdReg.test(this.form.password)) {
        this.pwdStatus = 2
      } else {
        this.pwdStatus = 1
      }
    },
    // 确认密码失去焦点
    confirmpswdblurfns () {
      if (!this.form.confrimPassword) {
        this.confirmPwdStatus = 0
        return
      }
      if (this.form.password === this.form.confrimPassword) {
        this.confirmPwdStatus = 2
      } else {
        this.confirmPwdStatus = 1
      }
    },
    // 发送验证码
    sendCode () {
      if (this.codeLoading) {
        return
      }
      if (this.form.phone === '') {
        this.$message.warning('请输入手机号')
        return
      }
      if (!this.phoneReg.test(this.form.phone)) {
        this.$message.warning('请输入格式正确的手机号')
        return
      }
      this.codeLoading = true
      this.$api.user.getCode({ receiver: this.form.phone }).then((res) => {
        console.log(res)
        this.sendCodeTime()
      })
    },
    // 验证码发送成功后开始倒计时
    sendCodeTime () {
      this.time = setInterval(() => {
        if (this.timeCount - 1 === -1) {
          clearInterval(this.time)
          this.codeTxt = '点击后再次发送'
          this.codeLoading = false
          this.timeCount = 60
          return
        }
        this.timeCount -= 1
        this.codeTxt = this.timeCount + '秒后重新发送'
      }, 1000)
    },
    // 注册
    handleRegister () {
      if (this.phoneStatus !== 2) {
        this.$message.warning('请输入手机号')
        return
      }
      if (this.codeStatus !== 2) {
        this.$message.warning('请输入验证码')
        return
      }
      if (this.pwdStatus !== 2) {
        this.$message.warning('请输入密码')
        return
      }
      if (!this.form.confrimPassword) {
        this.$message.warning('请输入二次确认密码')
        return
      }
      if (this.form.password !== this.form.confrimPassword) {
        this.$message.warning('两次输入的密码不一致')
        return
      }
      if (!this.isRead) {
        this.$message.warning('请勾选服务协议')
        return
      }
      this.$api.user.register(this.form).then((res) => {
        if (res.code === '000000') {
          this.$message.success('注册成功，请重新登录')
          this.$router.replace('/login-pc')
        } else {
          this.$message.warning(res.msg)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.register-container {
  width: 100%;
  height: 100vh;
  background: #f5f6fb url('../../static/img/register/bg.png') no-repeat center;
  background-size: cover;
  position: relative;
  padding-top: 80px;
  font-size: 14px;
  .top-title {
    color: #333;
    font-size: 30px;
    margin: 26px 0;
    text-align: center;
    font-weight: 500;
  }
  .register {
    width: 900px;
    height: 650px;
    margin: 0 auto;
    padding: 35px 60px 10px;
    background-color: #fff;
    box-shadow: 0 2px 16px rgb(0 0 0 / 12%);
    display: flex;
    flex-direction: column;
    align-items: center;
    .content {
      .item {
        .input-box {
          display: flex;
          align-items: center;
          width: 400px;
          height: 40px;
          border: rgb(204, 204, 204) 1px solid;
          .left-icon {
            font-size: 22px;
            margin-left: 15px;
          }
          input {
            border: 0;
            width: 278px;
            height: 33px;
            padding-left: 20px;
            color: #000;
          }
          input:focus {
            outline: 0;
          }
        }
        .info {
          margin: 10px 0;
          font-size: 14px;
          .info-item {
            display: flex;
            align-items: center;
            .info-icon {
              font-size: 16px;
              margin-right: 5px;
            }
          }
        }
        > input {
          position: relative;
          top: 3.5px;
        }
        > span {
          font-size: 10px;
          display: inline-block;
          margin-bottom: 30px;
        }
      }
      .short {
        position: relative;
        .section {
          cursor: pointer;
          position: absolute;
          top: 3px;
          right: 3px;
          min-width: 108px;
          height: 35px;
          text-align: center;
          line-height: 35px;
          color: #fff;
          border-radius: 4px;
        }
      }
      .check-box {
        display: flex;
        align-items: center;
        span {
          font-size: 14px;
          margin-left: 6px;
        }
      }
      .btn {
        color: #fff;
        width: 400px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 18px;
        margin: 30px 0 20px;
      }
      .go-login {
        margin-top: 30px;
        text-align: center;
        span {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
