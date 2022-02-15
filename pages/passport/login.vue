<template>
  <div class="login-container">
    <!-- <div>登录-pc端</div> -->
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
          <h4 class="title">
            登录
          </h4>
          <div class="content">
            <div class="borderbule">
              <input
                v-model="form.phone"
                v-number-evolution
                type="text"
                placeholder="请输入手机号"
              >
            </div>
            <div class="borderbule">
              <input
                v-model="form.password"
                type="password"
                placeholder="请输入登录密码"
              >
            </div>
            <div class="auto-login">
              <div class="left">
                <input v-model="form.autoLogin" type="checkbox">
                <span>下次自动登录</span>
              </div>
              <nuxt-link to="/pc/forget">
                忘记密码？
              </nuxt-link>
            </div>
            <a-button
              :loading="loginLoading"
              class="login-btn"
              type="primary"
              size="large"
              @click="handleLoginBefore"
            >
              登录
            </a-button>
            <div class="register">
              <nuxt-link to="/pc/register">
                免费注册
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
export default {
  data () {
    return {
      form: {
        phone: '',
        password: '',
        autoLogin: false
      },
      phoneReg:
        /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/,
      loginLoading: false
    }
  },
  computed: {
    ...mapState({
      autoLogin: state => state.user.loginForm.autoLogin,
      isLogin: state => state.user.isLogin,
      loginForm: state => state.user.loginForm,
      redirectPath: state => state.user.redirectPath
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
    if (this.$route.query.out) {
      localStorage.setItem('store', '{}')
      this.$router.push('/login-pc')
    }
  },
  methods: {
    // 登录前校验
    handleLoginBefore () {
      if (this.form.phone === '') {
        this.$message.warning('请输入手机号')
        return
      }
      if (!this.phoneReg.test(this.form.phone)) {
        this.$message.warning('请输入格式正确的手机号')
        return
      }
      if (this.form.password === '') {
        this.$message.warning('请输入密码')
        return
      }
      this.login(this.form)
    },
    login (form) {
      this.loginLoading = true
      this.$api.user
        .login(form)
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
        })
        .finally(() => {
          this.loginLoading = false
        })
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
      width: 360px;
      height: 370px;
      background-color: #fff;
      padding: 40px 30px 38px;
      margin-right: 50px;
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
          line-height: 40px;
          border: 1px solid rgb(221 221 221);
          margin-top: 8px;
          padding-left: 10px;
          input {
            width: 100%;
            outline: none;
            border: 0;
            line-height: 0;
            font-size: 14px;
            color: #000;
          }
          input:focus {
            outline: none;
            font-size: 14px;
          }
        }
        .auto-login {
          font-size: 14px;
          margin: 10px 0;
          display: flex;
          justify-content: space-between;
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
</style>
