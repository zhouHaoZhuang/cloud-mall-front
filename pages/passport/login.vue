<template>
  <!-- <div>登录-pc端</div> -->
  <div class="login-container">
    <div class="titleTop">
      <div class="titleInfo container">
        <div>
          <h2>数十万用户的信赖之选</h2>
          <ul>
            <li>节点遍布国内主要区域</li>
            <li>全动态BGP网络</li>
            <li>至强硬件打造强悍性能体验</li>
            <li>技术服务7×24全天响应</li>
          </ul>
        </div>
        <div class="login-box">
          <!-- <h4 class="title">
            登录
          </h4> -->
          <div class="content">
            <a-tabs
              v-model="loginType"
              default-active-key="pass"
              @change="callback"
            >
              <a-tab-pane key="pass" tab="账号密码登录">
                <a-form-model
                  ref="ruleForm"
                  :model="form"
                  :rules="rules"
                  :label-col="labelCol"
                  :wrapper-col="wrapperCol"
                >
                  <a-form-model-item prop="username">
                    <a-input
                      v-model="form.username"
                      type="text"
                      placeholder="请输入手机号"
                    />
                    <!-- v-number-evolution -->
                  </a-form-model-item>
                  <a-form-model-item prop="password">
                    <a-input
                      v-model="form.password"
                      type="password"
                      placeholder="请输入登录密码"
                    />
                  </a-form-model-item>
                  <a-form-model-item prop="verificationCode">
                    <a-input
                      v-model="form.verificationCode"
                      type="text"
                      style="width: 240px"
                      placeholder="请输入图片验证码"
                      :max-length="4"
                      @pressEnter="handleLoginBefore"
                    />
                    <div
                      class="code"
                      title="点击切换验证码"
                      @click="refreshCode()"
                    >
                      <Identify
                        v-if="loginType == 'pass'"
                        :identify-code="identifyCode"
                      />
                    </div>
                  </a-form-model-item>
                </a-form-model>
              </a-tab-pane>
              <a-tab-pane key="code" tab="验证码登录" force-render>
                <a-form-model
                  ref="ruleFormCode"
                  :label-col="labelCol"
                  :wrapper-col="wrapperCol"
                  :model="formCode"
                  :rules="rulesCode"
                >
                  <a-form-model-item prop="phone">
                    <a-input
                      v-model="formCode.phone"
                      v-number-evolution
                      addon-before="+86"
                      placeholder="11位手机号"
                      :max-length="11"
                      size="large"
                    />
                  </a-form-model-item>

                  <a-form-model-item class="code-wrap" prop="code">
                    <a-input
                      v-model="formCode.code"
                      v-number-evolution
                      style="width: 280px"
                      placeholder="输入验证码"
                      :max-length="6"
                      size="large"
                    />
                    <CodeBtn
                      ref="child"
                      :phone="formCode.phone"
                      code-type="1"
                      send-type="0"
                      size="large"
                      :is-code="true"
                      @validate="validateImgCode"
                      @showValidate="showValidate"
                      @showPicCode="showPicCodes"
                    />
                  </a-form-model-item>
                  <!-- <a-form-model-item
                    v-show="showVerfication && showPicCode"
                    prop="verificationCode"
                  >
                    <a-input
                      ref="verificationCode"
                      v-model="formCode.verificationCode"
                      type="text"
                      placeholder="请输入图形验证码"
                      :max-length="4"
                      style="width: 240px"
                      size="large"
                      @keyup="getCode"
                    />

                    <div
                      class="code"
                      title="点击切换验证码"
                      @click="refreshCode()"
                    >
                      <IdentifyCode
                        v-if="loginType == 'code'"
                        :identify-code="identifyPicCode"
                      />
                    </div>
                  </a-form-model-item> -->
                </a-form-model>
              </a-tab-pane>
            </a-tabs>
            <a-button
              :loading="loginLoading"
              class="login-btn"
              type="primary"
              size="large"
              @click="handleLoginBefore"
            >
              登录
            </a-button>
            <div class="auto-login">
              <div class="left">
                <!-- <input v-model="form.autoLogin" type="checkbox">
                <span>下次自动登录</span> -->
                <nuxt-link to="/register">
                  免费注册
                </nuxt-link>
              </div>
              <nuxt-link to="/bypassAccount">
                子账号登陆
              </nuxt-link>
              <nuxt-link to="/forget">
                忘记密码？
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Identify from '@/components/Identify'
import { getRandomCode } from '@/utils/index'
// import IdentifyCode from '@/components/Identify'
import CodeBtn from '@/components/CodeBtn/index'
export default {
  components: { Identify, CodeBtn },
  data () {
    return {
      labelCol: { span: 0 },
      wrapperCol: { span: 25 },
      showVerfication: false, // 是否进行图片验证码
      loginType: 'pass',
      form: {
        username: '',
        password: '',
        autoLogin: false,
        verificationCode: ''
      },
      formCode: {
        phone: '',
        code: '',
        verificationCode: '' // 输入的图片验证码
      },
      pwdReg: /(?=.*[0-9])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,20}/,
      rules: {
        username: [
          {
            required: true,
            message: '手机号为必填项',
            trigger: 'blur'
          }
          // {
          //   validator: (rule, value, callback) => {
          //     if (value === '') {
          //       callback()
          //     } else {
          //       if (/^1[3456789]\d{9}$/.test(value)) {
          //         callback()
          //       } else {
          //         callback(new Error('请输入正确格式的手机号'))
          //       }
          //     }
          //   },
          // trigger: 'blur'
          // }
        ],
        password: [
          {
            required: true,
            message: '密码为必填项',
            trigger: 'blur'
          },
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback()
              } else {
                if (this.setpswdblurfns()) {
                  callback()
                } else {
                  callback(new Error('请输入正确的密码格式'))
                }
              }
            },
            trigger: 'blur'
          }
        ],
        verificationCode: [
          {
            required: true,
            message: '请输入图片校验码',
            trigger: ['blur', 'change']
          },
          {
            validator: (rule, value, callback) => {
              if (value.toLowerCase() !== this.identifyCode.toLowerCase()) {
                callback(new Error('图形验证码不正确'))
              }
              callback()
            },
            trigger: ['blur', 'change']
          }
        ]
      },
      rulesCode: {
        phone: [
          {
            required: true,
            message: '请输入手机号',
            trigger: ['blur', 'change']
          },
          {
            validator: (rule, value, callback) => {
              if (!/^1[3456789]\d{9}$/.test(value)) {
                callback(new Error('手机号格式不正确'))
              }
              callback()
            },
            trigger: ['blur', 'change']
          }
        ],
        code: [
          {
            required: true,
            message: '请输入验证码',
            trigger: ['blur', 'change']
          }
        ],
        verificationCode: [
          {
            required: true,
            message: '请输入图形验证码',
            trigger: ['blur', 'change']
          },
          {
            validator: (rule, value, callback) => {
              if (value.toLowerCase() !== this.identifyPicCode.toLowerCase()) {
                callback(new Error('图形验证码不正确'))
              }
              callback()
            },
            trigger: ['blur', 'change']
          }
        ]
      },
      loginLoading: false,
      identifyCode: '',
      identifyPicCode: '',
      showPicCode: false
    }
  },
  computed: {
    ...mapState({
      autoLogin: state => state.user.loginForm.autoLogin,
      isLogin: state => state.user.isLogin,
      loginForm: state => state.user.loginForm,
      redirectPath: state => state.user.redirectPath,
      allConfig: state => state.user.allConfig
    })
  },
  watch: {
    autoLogin: {
      handler (newVal) {
        if (newVal && !this.isLogin) {
          this.login(this.loginForm)
        }
      },
      immediate: true
    }
  },
  mounted () {
    this.refreshCode()
    if (this.$route.query.out) {
      localStorage.setItem('store', '{}')
      this.$router.push('/login')
    }
  },
  methods: {
    showPicCodes (val) {
      this.showPicCode = val
    },
    // 切换tab
    callback (key) {
      this.loginType = key
      // this.form = {}
      // this.formCode = {}
    },
    // 校验密码长度
    setpswdblurfns () {
      const length = this.form.password.length
      if (
        length >= this.allConfig.pwd_min_length * 1 &&
        length <= this.allConfig.pwd_max_length * 1
      ) {
        return true
      } else {
        return false
      }
    },
    // 登录前校验
    handleLoginBefore () {
      if (this.loginType === 'pass') {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.login(this.form)
          }
        })
      }
      if (this.loginType === 'code') {
        this.$refs.ruleFormCode.validate((valid) => {
          if (valid) {
            this.login(this.formCode)
          }
        })
      }
    },
    // 是否调用发送验证码接口
    getCode () {
      if (this.loginType === 'pass') {
        if (
          this.$refs.verificationCode.value.toLowerCase() ===
          this.identifyCode.toLowerCase()
        ) {
          console.log('相等')
          this.$refs.child.getMsg()
        }
      } else if (this.loginType === 'code') {
        if (
          this.$refs.verificationCode.value.toLowerCase() ===
          this.identifyPicCode.toLowerCase()
        ) {
          console.log('相等')
          this.$refs.child.getMsg()
        }
      }
    },
    // 获取验证码组件校验图形验证
    validateImgCode (callback) {
      let flag = false
      // if (this.$refs.verificationCode.value) {
      // }
      this.$refs.ruleForm.validateField(
        'verificationCode',
        err => (flag = !err)
      )
      callback(flag)
    },
    // 是否显示图片校验
    showValidate (callback) {
      const isShow = true
      this.showVerfication = true
      callback(isShow)
    },
    login (form) {
      this.loginLoading = true
      if (this.loginType === 'pass') {
        this.$api.user
          .login(form)
          .then((res) => {
            this.result(res, form)
          })
          .finally(() => {
            this.loginLoading = false
          })
      }
      if (this.loginType === 'code') {
        this.$api.user
          .loginByCode(form)
          .then((res) => {
            this.result(res, form)
          })
          .finally(() => {
            this.loginLoading = false
          })
      }
    },
    result (res, form) {
      if (res.code === '000000') {
        this.$message.success('登录成功')
        // 保存用户信息
        this.$store.dispatch('user/login', res.data)
        // 保存token到cookies
        this.$cookies.set('token', res.data.token)
        // 保存租户id到cookies
        this.$cookies.set('tenantId', res.data.tenantId)
        // 设置是否自动登录
        this.$store.dispatch('user/setAutoLogin', form)
        // 判断是否有需要重定向的地址
        if (this.redirectPath) {
          this.$router.replace(this.redirectPath)
          this.$store.commit('user/saveRedirectPath', '')
        } else {
          this.$router.replace('/')
        }
      } else {
        this.$message.warning(res.msg)
      }
    },
    // 更新验证码
    refreshCode () {
      this.identifyCode = getRandomCode()
      this.identifyPicCode = getRandomCode()
    }
  }
}
</script>
<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100vh;
  background: #f5f6fb url('../../static/img/login/bg.png') no-repeat center;
  background-size: cover;
  .login-btn {
    width: 100%;
  }
  .code {
    position: absolute;
    right: -110px;
    top: -10px;
  }
}

.titleTop {
  padding-top: 160px;
  color: #fff;
  font-size: 16px;
  .titleInfo {
    display: flex;
    justify-content: space-between;
    > div:nth-child(1) {
      > h2 {
        font-weight: bold;
        color: #1d7aec;
        font-size: 28px;
        margin-bottom: 40px;
      }
      > ul {
        > li {
          height: 22px;
          line-height: 22px;
          margin-bottom: 24px;
          color: #8d9eb3;
          font-size: 16px;
        }
      }
    }
    .login-box {
      width: 412px;
      height: 437px;
      background-color: #fff;
      padding: 40px 30px 38px;
      margin-right: 50px;
      position: relative;
      color: #97aacc;
      .title {
        font-size: 22px;
        font-weight: 700;
        color: #1d7aec;
        margin-bottom: 20px;
      }
      .content {
        .borderbule {
          width: 100%;
          height: 40px;
          border: 1px solid rgb(221 221 221);
          margin-top: 8px;
          .ant-input {
            width: 100%;
            height: 40px;
            border-radius: 0;
            outline: none;
            border: 0;
            font-size: 14px;
            color: #000;
          }
          input:focus {
            outline: none;
            font-size: 14px;
            box-shadow: none;
          }
        }
        .auto-login {
          font-size: 14px;
          position: absolute;
          bottom: 10px;
          bottom: 19px;
          left: 16px;
          width: 98%;
          display: flex;
          justify-content: space-around;
          .left {
            display: flex;
            align-items: center;
            cursor: pointer;
            span {
              margin-left: 6px;
            }
          }
          button {
            color: #97aacc;
          }
        }
        .register {
          font-size: 14px;
          margin-top: 10px;
          a {
            color: #97aacc;
          }
        }
      }
    }
  }
}
.ant-input {
  border-radius: 0;
  height: 40px;
}
</style>
