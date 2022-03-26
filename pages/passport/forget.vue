<template>
  <div class="register-container">
    <div class="top-title">
      找回密码
    </div>
    <div class="register">
      <div class="content">
        <div class="item">
          <div class="input-box">
            <Iconfont class="left-icon" type="icon-zhanghao" />
            <a-input
              v-model="form.username"
              placeholder="请输入账号"
              @focus="
                usernameEnter = true
                usernameStatus = 0
              "
              @blur="usernameblurfns"
            />
          </div>
          <div class="info">
            <div v-if="usernameStatus === 0" class="info-item">
              <Iconfont class="info-icon" type="icon-info" />
              <span>账号可用于找回密码</span>
            </div>
            <div v-else-if="usernameStatus === 2" class="info-item">
              <Iconfont class="info-icon" type="icon-ok" />
              <span>填写正确</span>
            </div>
          </div>
          <div class="input-box">
            <Iconfont class="left-icon" type="icon-phone" />
            <a-input
              v-model="form.phone"
              v-number-evolution
              :max-length="11"
              placeholder="请输入手机号码"
              @focus="
                phoneEnter = true
                phoneStatus = 0
              "
              @blur="phoneblurfns"
            />
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
            <a-input
              v-model="form.code"
              v-number-evolution
              placeholder="请输入短信验证码"
              :max-length="6"
              @focus="
                codeEnter = true
                codeStatus = 0
              "
              @blur="shortblurfns"
            />
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
        <div v-show="showVerfication" class="item" style="position: relative">
          <div class="input-box">
            <Iconfont class="left-icon" type="icon-code" />
            <a-input
              ref="verificationCode"
              v-model="form.verificationCode"
              type="text"
              placeholder="请输入图片验证码"
              :max-length="4"
              @keyup="getCode"
            />
          </div>
          <div class="info">
            <div v-if="verificateStatus === 1" class="info-item">
              <Iconfont class="info-icon" type="icon-err" />
              <span>图片验证码不能为空</span>
            </div>
            <div v-else-if="verificateStatus === 2" class="info-item">
              <Iconfont class="info-icon" type="icon-err" />
              <span>图片验证码填写错误</span>
            </div>
            <div v-else-if="verificateStatus === 3" class="info-item">
              <Iconfont class="info-icon" type="icon-ok" />
              <span>图片验证码填写正确</span>
            </div>
          </div>
          <div class="code" title="点击切换验证码" @click="refreshCode()">
            <Identify :identify-code="identifyCode" />
          </div>
        </div>
        <div class="item">
          <div class="input-box">
            <Iconfont class="left-icon" type="icon-lock" />
            <a-input
              v-model="form.password"
              :type="!passwordType ? 'text' : 'password'"
              placeholder="请输入重置密码"
              :max-length="20"
              @focus="
                pwdEnter = true
                pwdStatus = 0
              "
              @blur="setpswdblurfns"
            />
            <a-icon
              v-if="passwordType"
              class="eye-icon"
              type="eye-invisible"
              @click="changePwdShow('pwd', false)"
            />
            <a-icon
              v-else
              class="eye-icon"
              type="eye"
              @click="changePwdShow('pwd', true)"
            />
          </div>
          <div class="info">
            <div v-if="pwdStatus === 0" class="info-item">
              <Iconfont class="info-icon" type="icon-info" />
              <span>{{ allConfig.pwd_min_length }}-{{
                allConfig.pwd_max_length
              }}个字符组成，区分大小写</span>
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
            <a-input
              v-model="form.confrimPassword"
              :type="!confirmPwdType ? 'text' : 'password'"
              placeholder="请再次填写密码"
              :max-length="20"
              @focus="
                confirmPwdEnter = true
                confirmPwdStatus = 0
              "
              @blur="confirmpswdblurfns"
            />
            <a-icon
              v-if="confirmPwdType"
              class="eye-icon"
              type="eye-invisible"
              @click="changePwdShow('confirm', false)"
            />
            <a-icon
              v-else
              class="eye-icon"
              type="eye"
              @click="changePwdShow('confirm', true)"
            />
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
        <a-button class="btn" type="primary" @click="handleUpdatePwd">
          确认修改
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CodeBtn from '@/components/CodeBtn/index'
import Identify from '@/components/Identify'
import { getRandomCode } from '@/utils/index'
export default {
  components: { CodeBtn, Identify },
  data () {
    return {
      // 下方所有验证的status 0:默认 1:未通过验证 2:验证通过
      // 账号
      usernameEnter: false,
      usernameStatus: 0,
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
      // 图片验证码
      verificateStatus: 0,
      // 手机号正则
      phoneReg:
        /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/,
      pwdReg: /(?=.*[0-9])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,20}/,
      form: {
        phone: '',
        username: '',
        code: '',
        password: '',
        confrimPassword: '',
        verificationCode: ''
      },
      // 获取验证码loading
      codeLoading: false,
      // 定时器id
      time: null,
      timeCount: 60,
      codeTxt: '发送短信验证',
      passwordType: true,
      confirmPwdType: true,
      identifyCode: '', // 要核对的验证码
      showVerfication: false // 是否进行图片验证码
    }
  },
  computed: {
    ...mapState({
      allConfig: state => state.user.allConfig
    })
  },
  mounted () {
    this.refreshCode()
  },
  methods: {
    usernameblurfns () {
      if (this.form.username === '') {
        this.usernameEnter = false
        this.usernameStatus = 0
      } else {
        this.usernameEnter = false
        this.usernameStatus = 2
      }
    },
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
      if (this.form.code.length === 6) {
        this.codeStatus = 2
      } else {
        this.codeStatus = 1
      }
    },
    // 密码失去焦点
    setpswdblurfns () {
      const length = this.form.password.length
      if (
        length >= this.allConfig.pwd_min_length * 1 &&
        length <= this.allConfig.pwd_max_length * 1
      ) {
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
    // 图片验证码校验
    getCode () {
      if (!this.$refs.verificationCode.value) {
        this.verificateStatus = 1
        return
      }
      if (this.$refs.verificationCode.value !== this.identifyCode) {
        this.verificateStatus = 2
      } else {
        this.verificateStatus = 3
        this.toSend()
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
      if(!this.form.verificationCode){
        this.$message.warning('请先正确输入图片验证码')
      }
      this.showVerfication = true
      if (this.verificateStatus !== 3) {
        console.log('到这里')
        return
      }
      this.toSend()
    },
    toSend () {
      this.codeLoading = true
      this.$api.user
        .getCode({ receiverAccount: this.form.phone, codeType: '3' })
        .then((res) => {
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
    // 切换是否展示明文密码
    changePwdShow (type, flag) {
      if (type === 'pwd') {
        this.passwordType = flag
      } else {
        this.confirmPwdType = flag
      }
    },
    // 修改密码
    handleUpdatePwd () {
      if (this.form.username === '') {
        this.$message.warning('请输入账号')
        return
      }
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
      this.form.username = this.form.phone
      this.$api.user.forgetPwd(this.form).then((res) => {
        if (res.code === '000000') {
          this.$message.success('修改成功，请重新登录')
          this.$router.replace('/login')
        } else {
          this.$message.warning(res.msg)
        }
      })
    },
    // 更新验证码
    refreshCode () {
      this.identifyCode = getRandomCode()
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
  .ant-input {
    border: none !important;
    height: 33px;
    padding-left: 20px;
    color: #000;
  }
  .ant-input:focus {
    border: none !important;
    box-shadow: none;
  }
  .eye-icon {
    color: #bfbfbf;
    font-size: 16px;
    margin-right: 20px;
    cursor: pointer;
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
            span {
              color: #bfbfbf;
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
        .code {
          position: absolute;
          right: 0;
          top: 1px;
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
