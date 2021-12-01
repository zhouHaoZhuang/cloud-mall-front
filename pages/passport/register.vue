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
            <!-- https://www.ydidc.com/register/sendMobileCode.html?mobile=17613783718&captcha=bcyw&_=1638328377342
                 https://www.ydidc.com/register/sendMobileCode.html?mobile=17613783718&captcha=pcv7&_=1638343565212-->
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
            <section>发送短信验证</section>
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
            <span> 我已阅读并同意<a href="">《浙江云盾网站服务协议》</a></span>
          </div>
          <div :class="{ isRead: isRead.length > 0 }">
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
      isRead: []
    }
  },
  methods: {
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
      if (this.setpswd === this.confirmpswd) {
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
    }
  },
}
</script>

<style lang="scss" scoped>
div {
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
              background: url(../../Static/img/register/enter.png) no-repeat;
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
            top: 2.5px;
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
          background-color: #059fff!important;
        }
      }
    }
  }
}
</style>
