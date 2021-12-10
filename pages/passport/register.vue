<template>
  <div>
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
            <label><span>手机号码</span><span>*</span><input
              v-model="phoneNum"
              placeholder="请输入手机号码"
              @focus="phoneEnter = false"
              @blur="phoneblurfns"
            ></label>
            <div>
              <p
                v-if="!phoneOk && !phoneError"
                :class="{
                  start: phoneEnter,
                  enter: !phoneEnter
                }"
              >
                手机号码可用于登陆、激活账号、密码找回
              </p>
              <p v-else-if="phoneError" class="stop">
                你输入的手机号码不正确
              </p>
              <p v-else-if="phoneOk" class="ok">
                填写正确
              </p>
            </div>
          </div>
          <div class="short">
            <!-- https://www.ydidc.com/?m=api&c=captcha&rnd=0.04199048006553  验证码图片-->
            <!-- https://www.ydidc.com/register/sendMobileCode.html?mobile=17613783718&captcha=bcyw&_=1638328377342
                返回验证结果-->
            <label><span>短信验证码</span><span>*</span><input
              v-model="shortMessage"
              placeholder="请输入短信验证码"
              @focus="shortMessageEnter = false"
              @blur="shortblurfns"
            ></label>
            <div>
              <p
                v-if="shortMessageState == 0"
                :class="{
                  start: shortMessageEnter,
                  enter: !shortMessageEnter
                }"
              >
                请输入收到的6位验证码
              </p>
              <p v-else-if="shortMessageState == 1" class="stop">
                验证码格式错误
              </p>
              <p v-else-if="shortMessageState == 2" class="ok">
                验证码格式正确
              </p>
            </div>
            <section @click="sendMessages">
              发送短信验证
            </section>
          </div>
          <div>
            <label><span>设置密码</span><span>*</span><input
              v-model="setpswd"
              placeholder="请输入密码"
              type="password"
              @focus="setpswdEnter = false"
              @blur="setpswdblurfns"
            ></label>
            <div>
              <p
                v-if="setpswdState == 0"
                :class="{
                  start: setpswdEnter,
                  enter: !setpswdEnter
                }"
              >
                密码由8-20个英文字母、数字和特殊符号组成
              </p>
              <p v-else-if="setpswdState == 1" class="stop">
                密码格式填写错误
              </p>
              <p v-else-if="setpswdState == 2" class="ok">
                密码格式填写正确
              </p>
            </div>
          </div>
          <div>
            <label><span>确认密码</span><span>*</span><input
              v-model="confirmpswd"
              placeholder="请再次填写密码"
              type="password"
              @focus="confirmpswdEnter = false"
              @blur="confirmpswdblurfns"
            ></label>
            <div>
              <p
                v-if="confirmpswdState == 0"
                :class="{
                  start: confirmpswdEnter,
                  enter: !confirmpswdEnter
                }"
              >
                请再次输入密码
              </p>
              <p
                v-else-if="confirmpswdState == 1 || confirmpswdState == 3"
                class="stop"
              >
                {{
                  confirmpswdState == 1
                    ? '两次输入的密码不一致'
                    : '请再次输入密码'
                }}
              </p>
              <p v-else-if="confirmpswdState == 2" class="ok">
                填写正确
              </p>
            </div>
          </div>
          <div>
            <label><span>QQ</span><span>*</span><input
              v-model="qqCode"
              placeholder="请填写您的QQ号码"
              @focus="qqCodeEnter = false"
              @blur="qqCodeblurfns"
            ></label>
            <div>
              <p
                v-if="qqCodeState == 0"
                :class="{
                  start: qqCodeEnter,
                  enter: !qqCodeEnter
                }"
              >
                请填写QQ号码
              </p>
              <p v-else-if="qqCodeState == 1" class="stop">
                QQ格式填写错误
              </p>
              <p v-else-if="qqCodeState == 2" class="ok">
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
          <div :class="{ isRead: isRead.length > 0 }">
            注册账号
          </div>
        </div>
      </div>
    </div>
    <transition name="slide-fade">
      <div v-show="isphone" class="isphone">
        <div>
          <div />
          <div>
            <img
              src="https://www.ydidc.com/template/Home/Zkeys/PC/Static/lib/plugin/jQuery/dialog/skins/icons/alert.gif"
              alt=""
            >
            <span>请先填写您的手机号码</span>
          </div>
        </div>
      </div>
    </transition>
    <transition name="slide-fade">
      <div v-show="isVerify" class="isVerify">
        <div>
          <div />
          <div>
            <span>请输入验证码</span>
            <span @click="isVerify = false">×</span>
          </div>
          <div>
            <span>验证码：</span>
            <input v-model="VerifyCode" type="text">
            <img
              :src="`https://www.ydidc.com/?m=api&c=captcha&rnd=0.${stoc}`"
              alt=""
              @click="stochastic"
            >
          </div>
          <div>
            <span @click="sendVerify">确认发送</span><span @click="isVerify = false">取消</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 手机号码验证
      phoneNum: '',
      phoneEnter: true,
      phoneStop: false,
      phoneOk: false,
      phoneError: false,
      //   短信验证码
      shortMessage: '',
      shortMessageEnter: true,
      shortMessageState: 0,
      //   设置密码
      setpswd: '',
      setpswdEnter: true,
      setpswdState: 0,
      //   确认密码
      confirmpswd: '',
      confirmpswdEnter: true,
      confirmpswdState: 0,
      //   QQ
      qqCode: '',
      qqCodeEnter: true,
      qqCodeState: 0,
      //   是否同意协议
      isRead: [],
      //   手机号错误的提示
      isphone: false,
      //  是否显示验证码弹窗
      isVerify: false,
      stoc: '',
      VerifyCode: ''
    }
  },
  watch: {
    isVerify () {
      if (this.isVerify) {
        this.stochastic()
      }
    }
  },
  created () {
    this.stochastic()
  },
  methods: {
    // 随机生成17位数字
    stochastic () {
      this.stoc = Math.floor(
        (Math.random() + Math.floor(Math.random() * 9 + 1)) * Math.pow(10, 17)
      )
    },
    // 验证码发送
    sendVerify () {
      // https://www.ydidc.com/register/sendMobileCode.html?mobile=17613783718&captcha=ckm7&_=1638415044398
      const url = `https://www.ydidc.com/register/sendMobileCode.html?mobile=${
        this.phoneNum
      }&captcha=${this.VerifyCode}&_=${new Date().getTime()}`
      console.log(url)
      window.location.assign(url)
    },
    // 手机号码失去焦点
    phoneblurfns () {
      // console.log(this.phoneNum,'------');
      // this.phonefocus = false;
      if (this.phoneNum[0] === '1' && this.phoneNum.length === 11) {
        if (this.isPhone(this.phoneNum * 1)) {
          this.phoneError = false
          this.phoneOk = true
        } else {
          this.phoneOk = false
          this.phoneError = true
        }
      } else {
        this.phoneOk = false
        this.phoneError = true
      }
    },
    isPhone (phone) {
      const myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
      if (!myreg.test(phone)) {
        return false
      } else {
        return true
      }
    },
    // 短信验证码失去焦点
    shortblurfns () {
      if (this.shortMessage.length === 6) {
        this.shortMessageState = 2
      } else {
        this.shortMessageState = 1
      }
    },
    // 设置密码失去焦点
    setpswdblurfns () {
      if (this.setpswd.length >= 8 && this.setpswd.length <= 20) {
        this.setpswdState = 2
      } else {
        this.setpswdState = 1
      }
    },
    // 确认密码失去焦点
    confirmpswdblurfns () {
      if (this.setpswd === this.confirmpswd && this.confirmpswd.length > 0) {
        this.confirmpswdState = 2
      } else {
        if (this.confirmpswd.length > 0) {
          this.confirmpswdState = 1
        } else {
          this.confirmpswdState = 3
        }
      }
    },
    // QQ号码失去焦点
    qqCodeblurfns () {
      if (this.qqCode.length >= 5) {
        this.qqCodeState = 2
      } else {
        if (this.qqCode.length > 0) {
          this.qqCodeState = 1
        } else {
          this.qqCodeState = 0
        }
      }
    },

    sendMessages () {
      if (!this.phoneOk) {
        this.isphone = true
        setTimeout(() => {
          this.isphone = false
        }, 1000)
      } else {
        this.isVerify = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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

              //   padding-left: 15px;
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
          > section {
            position: absolute;
            top: 3px;
            right: 2px;
            width: 108px;
            height: 35px;
            text-align: center;
            line-height: 35px;
            color: rgb(255, 255, 255);
            border-radius: 4px;
            background-color: rgb(5 159 255);
          }
        }
        > div:nth-child(6) {
          > input[type='checkbox'] {
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
        }
        .isRead {
          background-color: #059fff !important;
        }
      }
    }
  }
  .isphone,
  .isVerify {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.445);
  }
  .isphone {
    > div {
      width: 300px;
      height: 100px;
      background-color: #fff;
      > div:nth-child(1) {
        width: 100%;
        height: 3px;
        background-color: rgb(40, 90, 255);
      }
      > div:nth-child(2) {
        width: 100%;
        height: 97px;
        display: flex;
        align-items: center;
        > img {
          margin: 0 15px 0 50px;
        }
      }
    }
  }
  .isVerify {
    > div {
      width: 420px;
      height: 240px;
      background-color: #fff;
      > div:nth-child(1) {
        width: 100%;
        height: 4px;
        background-color: rgb(0, 136, 255);
      }
      > div:nth-child(2) {
        margin: 0 auto;
        width: 340px;
        height: 50px;
        color: rgb(76, 90, 95);
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgb(238, 238, 238);
        > span {
          display: inline-block;
        }
        > span:nth-child(1) {
          font-weight: 400;
          font-size: 20px;
        }
        > span:nth-child(2) {
          font-size: 45px;
          line-height: 50px;
          color: rgb(87, 87, 87);
        }
      }
      > div:nth-child(3) {
        margin: 40px auto;
        width: 280px;
        height: 38px;
        > input {
          width: 120px;
          height: 32px;
          border: rgb(143, 143, 143) 1px solid;
        }
        > input:focus {
          outline: 0;
        }
        > img {
          width: 90px;
        }
      }
      > div:nth-child(4) {
        width: 380px;
        margin: 0 auto;
        text-align: center;
        > span {
          display: inline-block;
          padding: 0 25px;
          color: rgb(255, 255, 255);
          border-radius: 3px;
          font-size: 16px;
          line-height: 35px;
        }
        > span:nth-child(1) {
          background-color: rgb(0, 136, 255);
        }
        > span:nth-child(2) {
          background-color: rgb(172, 172, 172);
          margin-left: 25px;
        }
      }
    }
  }
}
</style>
