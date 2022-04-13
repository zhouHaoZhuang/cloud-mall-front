<template>
  <div class="passAccount-container">
    <div class="top-title">
      子账号登陆
    </div>
    <div class="passAccount">
      <a-form-model
        ref="ruleForm"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        :model="form"
        :rules="rules"
        style="width: 56%"
      >
        <a-form-model-item prop="username">
          <a-input
            v-model="form.username"
            placeholder="请输入账号"
            size="large"
          >
            <a-icon slot="prefix" type="user" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item prop="password">
          <a-input
            v-model="form.password"
            v-password-input
            placeholder="请输入密码"
            type="password"
            :max-length="20"
            size="large"
          >
            <a-icon slot="prefix" type="lock" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item prop="verificationCode">
          <a-input
            v-model="form.verificationCode"
            type="text"
            placeholder="请输入图形验证码"
            :max-length="4"
            style="width: 320px"
            size="large"
            @pressEnter="onSubmit"
          >
            <a-icon slot="prefix" type="smile" />
          </a-input>
          <div class="code" title="点击切换验证码" @click="refreshCode()">
            <Identify :identify-code="identifyCode" />
          </div>
        </a-form-model-item>
        <span>如果您忘记密码，请联系主账号在控制台重置密码。</span>
        <a-form-model-item class="login-btn">
          <a-button
            style="width: 100%; margin-top: 30px"
            type="primary"
            size="large"
            :loading="loading"
            @click="onSubmit"
          >
            登录
          </a-button>
        </a-form-model-item>
        <a-form-model-item class="login-btn">
          <a-button
            style="width: 100%"
            size="large"
            @click="toPer"
          >
            主账号登录
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
// import CodeBtn from "@/components/CodeBtn/index";
import Identify from '@/components/Identify'
import { getRandomCode } from '@/utils/index'
export default {
  name: 'BypassAccount',
  components: { Identify },
  data () {
    return {
      labelCol: { span: 0 },
      wrapperCol: { span: 24, offset: 0 },
      form: {
        username: '',
        password: '',
        verificationCode: '' // 输入的图片验证码
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入账号',
            trigger: ['blur', 'change']
          }
          // {
          //   pattern: /^1[3456789]\d{9}$/,
          //   message: "手机号格式不正确",
          //   trigger: ["blur", "change"]
          // }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
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
              if (value.toLowerCase() !== this.identifyCode.toLowerCase()) {
                callback(new Error('图形验证码不正确'))
              }
              callback()
            },
            trigger: ['blur', 'change']
          }
        ]
      },
      loading: false,
      identifyCode: '' // 要核对的验证码
    }
  },
  mounted () {
    this.refreshCode()
  },
  methods: {
    // 更新验证码
    refreshCode () {
      this.identifyCode = getRandomCode()
    },
    // 登录
    onSubmit () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          if (!this.form.username.includes('@')) {
            this.$message.warn('请检查子账号是否正确')
            return
          }
          this.loading = true
          this.$api.user
            .login(this.form)
            .then((res) => {
              if (res.code === '000000') {
                this.$message.success('登录成功')
                // 保存用户信息
                this.$store.dispatch('user/login', res.data)
                // 保存token到cookies
                this.$cookies.set('token', res.data.token)
                // 保存租户id到cookies
                this.$cookies.set('tenantId', res.data.tenantId)
                // 设置是否自动登录
                this.$store.dispatch('user/setAutoLogin', this.form)
                // 判断是否有需要重定向的地址
                if (this.redirectPath) {
                  this.$router.replace(this.redirectPath)
                  this.$store.commit('user/saveRedirectPath', '')
                } else {
                  this.$router.replace('/')
                }
              } else {
                this.loading = false
                this.$message.warning(res.msg)
              }
            })
            .finally(() => {
              this.loginLoading = false
            })
        }
      })
    },
    // 跳转主账号登录
    toPer () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  .login-wrap {
    margin-top: -50px;
  }
  .top {
    text-align: center;
    margin-bottom: 70px;
    .header {
      height: 44px;
      line-height: 44px;
      .logo {
        height: 44px;
        vertical-align: top;
        margin-right: 16px;
      }
      .title {
        font-size: 33px;
        color: #ccc;
        font-weight: 600;
        position: relative;
        top: 2px;
      }
    }
  }
  .login {
    width: 400px;
    margin: 0 auto;
  }
  .code {
    cursor: pointer;
    position: absolute;
    right: -122px;
    top: -10px;
  }
}
</style>
<style lang="scss" scoped>
.passAccount-container {
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
  .passAccount {
    width: 900px;
    height: 650px;
    margin: 0 auto;
    padding: 35px 60px 10px;
    background-color: #fff;
    box-shadow: 0 2px 16px rgb(0 0 0 / 12%);
    display: flex;
    flex-direction: column;
    align-items: center;
    .code {
      position: absolute;
      right: -110px;
      top: -10px;
    }
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
          color: #bfbfbf;
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
          color: #bfbfbf;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.beauty-scroll {
  overflow-y: auto !important;
}
.login-container {
  .login-btn {
    margin-bottom: 10px;
  }
  .code-wrap,
  .btn-box {
    .ant-form-item-children {
      display: flex;
      justify-content: space-between;
      .btn1 {
        padding-left: 0;
      }
      .btn2 {
        padding-right: 0;
      }
    }
  }
}
</style>
