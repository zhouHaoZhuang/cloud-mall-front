<template>
  <div class="register-container">
    <!-- 黑色头部 -->
    <div class="black" />
    <!-- 白色背景部分 -->
    <div class="White">
      <div class="register">
        <div>
          <img
            src="https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/register/img/icon-reg-phone.png"
            alt=""
          >
          <span>账号密码注册</span>
          <span>已经拥有账号？</span>
          <a href="/login-pc">账号登录</a>
        </div>
        <div>
          <div>
            <label>
              <span>手机号码</span>
              <span>*</span>
              <input
                v-model="form.phone"
                placeholder="请输入手机号码"
                @focus="
                  phoneEnter = true
                  phoneStatus = 0
                "
                @blur="phoneblurfns"
              ></label>
            <div>
              <p
                v-if="phoneStatus === 0"
                :class="{
                  start: !phoneEnter,
                  enter: phoneEnter
                }"
              >
                手机号码可用于登陆、激活账号、密码找回
              </p>
              <p v-else-if="phoneStatus === 1" class="stop">
                你输入的手机号码不正确
              </p>
              <p v-else-if="phoneStatus === 2" class="ok">
                填写正确
              </p>
            </div>
          </div>
          <div class="short">
            <label>
              <span>短信验证码</span>
              <span>*</span>
              <input
                v-model="form.code"
                placeholder="请输入短信验证码"
                @focus="
                  codeEnter = true
                  codeStatus = 0
                "
                @blur="shortblurfns"
              >
            </label>
            <div>
              <p
                v-if="codeStatus === 0"
                :class="{
                  start: !codeEnter,
                  enter: codeEnter
                }"
              >
                请输入收到的6位验证码
              </p>
              <p v-else-if="codeStatus === 1" class="stop">
                验证码格式错误
              </p>
              <p v-else-if="codeStatus === 2" class="ok">
                验证码格式正确
              </p>
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
          <div>
            <label>
              <span>设置密码</span>
              <span>*</span>
              <input
                v-model="form.password"
                placeholder="请输入密码"
                type="password"
                maxlength="20"
                @focus="
                  pwdEnter = true
                  pwdStatus = 0
                "
                @blur="setpswdblurfns"
              >
            </label>
            <div>
              <p
                v-if="pwdStatus === 0"
                :class="{
                  start: !pwdEnter,
                  enter: pwdEnter
                }"
              >
                密码由8-20个英文字母、数字和特殊符号组成
              </p>
              <p v-else-if="pwdStatus === 1" class="stop">
                密码格式填写错误
              </p>
              <p v-else-if="pwdStatus === 2" class="ok">
                密码格式填写正确
              </p>
            </div>
          </div>
          <div>
            <label>
              <span>确认密码</span>
              <span>*</span>
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
            </label>
            <div>
              <p
                v-if="confirmPwdStatus === 0"
                :class="{
                  start: !confirmPwdEnter,
                  enter: confirmPwdEnter
                }"
              >
                请再次输入密码
              </p>
              <p v-else-if="confirmPwdStatus === 1" class="stop">
                两次输入的密码不一致
              </p>
              <p v-else-if="confirmPwdStatus === 2" class="ok">
                填写正确
              </p>
            </div>
          </div>
          <div>
            <label>
              <span>QQ</span>
              <span>*</span>
              <input
                v-model="form.qq"
                placeholder="请填写您的QQ号码"
                @focus="
                  qqEnter = true
                  qqStatus = 0
                "
                @blur="qqCodeblurfns"
              >
            </label>
            <div>
              <p
                v-if="qqStatus === 0"
                :class="{
                  start: !qqEnter,
                  enter: qqEnter
                }"
              >
                请填写QQ号码
              </p>
              <p v-else-if="qqStatus === 1" class="stop">
                QQ格式填写错误
              </p>
              <p v-else-if="qqStatus === 2" class="ok">
                QQ格式填写正确
              </p>
            </div>
          </div>
          <div>
            <input v-model="isRead" type="checkbox" value="blue">
            <span>
              我已阅读并同意<a
                href="/pc/passport/agreement"
              >《浙江云盾网站服务协议》</a></span>
          </div>
          <div :class="{ isRead: isRead.length > 0 }" @click="handleRegister">
            注册账号
          </div>
        </div>
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
      //   QQ
      qqEnter: false,
      qqStatus: 0,
      // 手机号正则
      phoneReg:
        /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/,
      pwdReg: /(?=.*[0-9])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,20}/,
      form: {
        phone: '',
        code: '',
        password: '',
        confrimPassword: '',
        qq: ''
      },
      // 获取验证码loading
      codeLoading: false,
      // 定时器id
      time: null,
      timeCount: 60,
      codeTxt: '发送短信验证',
      //   是否同意协议
      isRead: []
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
      if (this.form.code.length === 6) {
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
      if (this.form.password === this.form.confrimPassword) {
        this.confirmPwdStatus = 2
      } else {
        this.confirmPwdStatus = 1
      }
    },
    // QQ号码失去焦点
    qqCodeblurfns () {
      if (this.form.qq.length >= 5) {
        this.qqStatus = 2
      } else {
        this.qqStatus = 1
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
      this.$api.user.register(this.form).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.register-container {
  background: #fff;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
div {
  position: relative;
  .black {
    background: #000;
    height: 80px;
  }
  .White {
    height: 790px;
    background: #fff;
    > .register {
      width: 760px;
      height: 668px;
      margin: 60px auto 0;
      padding: 35px 60px 10px;
      background-color: #fff;
      box-shadow: 0 2px 16px rgb(0 0 0 / 12%);
      > div:nth-child(1) {
        border-bottom: 2px solid #eee;
        padding-bottom: 20px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        > img {
          width: 32px;
          margin-right: 5px;
        }
        > span:nth-child(2) {
          font-size: 24px;
          font-weight: 400;
          color: #059fff;
        }
        > span:nth-child(3) {
          margin-left: 275px;
          font-size: 14px;
          color: #666;
          margin-right: 10px;
        }
        > a {
          color: #059fff;
          display: inline-block;
          width: 76px;
          height: 24px;
          line-height: 24px;
          text-align: center;
          border: #059fff 1px solid;
        }
      }
      > div:nth-child(2) {
        > div {
          width: 400px;
          margin: 0 auto;

          > label {
            display: block;
            width: 400px;
            height: 40px;
            line-height: 40px;
            text-align: right;
            border: rgb(204, 204, 204) 1px solid;
            padding: 0;

            > span:nth-child(1) {
              display: inline-block;
              width: 80px;
              text-align: left;
            }
            > input {
              border: 0;
              width: 278px;
              height: 33px;
              padding-left: 20px;
            }
            > input:focus {
              outline: 0;
              color: #000;
            }
            > span:nth-child(2) {
              display: inline-block;
              border-right: #72828d 1px solid;
              padding-right: 5px;
              height: 30px;
              line-height: 30px;
              color: red;
            }
          }
          > div {
            margin: 10px 0;
            > p {
              margin: 0;
              font-size: 10px;
            }
            .start::before {
              content: '';
              background: url(https://www.ydidc.com/template/Home/Zkeys/PC/Static/lib/plugin/jQuery/formValidator/themes/default/images/onShow.gif)
                no-repeat;
              padding-left: 25px;
              line-height: 22px;
              height: 22px;
              width: 22px;
              color: rgb(153 153 153);
              background-position: 0 -3px;
            }
            .enter::before {
              content: '';
              background: url(../../static/img/register/enter.png) no-repeat;
              padding-left: 25px;
              line-height: 22px;
              height: 22px;
              width: 22px;
              color: rgb(0, 0, 0);
              background-position: 0 -2px;
              background-size: 20px;
            }
            .enter {
              color: #000000;
            }
            .stop::before {
              content: '';
              background: url(https://www.ydidc.com/template/Home/Zkeys/PC/Static/lib/plugin/jQuery/formValidator/themes/default/images/onError.gif)
                no-repeat;
              padding-left: 25px;
              line-height: 22px;
              height: 22px;
              width: 22px;
              color: rgb(0, 0, 0);
              background-position: 0 -2px;
              background-size: 20px;
            }
            .ok::before {
              content: '';
              background: url(https://www.ydidc.com/template/Home/Zkeys/PC/Static/lib/plugin/jQuery/formValidator/themes/default/images/onCorrect.gif)
                no-repeat;
              padding-left: 25px;
              line-height: 22px;
              height: 22px;
              width: 22px;
              color: rgb(0, 0, 0);
              background-position: 0 -2px;
              background-size: 20px;
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
        > div:nth-child(6) {
          cursor: pointer;
          > input[type='checkbox'] {
            cursor: pointer;
            -webkit-appearance: none;
            width: 16px;
            height: 16px;
            border: 1px solid #ccc;
          }
          > input[type='checkbox']:checked {
            background: url(https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/register/images/sign-sprite.png)
              no-repeat;
            background-position: -61px -1px;
          }
        }
        > div:nth-child(7) {
          background-color: rgb(204 204 204);
          color: rgb(255, 255, 255);
          width: 400px;
          height: 40px;
          text-align: center;
          line-height: 40px;
          font-size: 18px;
          font-weight: 400;
          cursor: pointer;
        }
        .isRead {
          background-color: #059fff !important;
        }
      }
    }
  }
}
</style>
