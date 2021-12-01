<template>
  <div>
    <!-- <div>登录-pc端</div> -->
    <div class="titleTop">
      <div class="titleInfo">
        <div>
          <h2>数十万用户的信赖之选</h2>
          <ul>
            <li>节点遍布国内主要区域</li>
            <li>全动态BGP网络</li>
            <li>至强硬件打造强悍性能体验</li>
            <li>技术服务7×24全天响应</li>
          </ul>
        </div>
        <div>
          <h4>用户登录</h4>
          <div>
            <div class="borderbule">
              <input type="text" placeholder=" 手机号 / 已认证邮箱">
            </div>
            <div class="borderbule">
              <input type="password" placeholder=" 登录密码">
            </div>
            <div>
              <input type="checkbox"><a>下次自动登录</a>
              <a>忘记密码？</a>
            </div>
            <div>
              <p>登录</p>
            </div>
            <p><span>还没有账号？立即</span> <a>免费注册</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import env from '~/config/env'
export default {
  // nuxt推荐请求方式
  // async asyncData ({ app }) {
  //   const dataa = await app.$api.home.list({ action: 'apphome' })
  //   // console.log('请求之后', dataa)
  //   return {
  //     result: dataa
  //   }
  // },
  data () {
    return {
      result: []
    }
  },
  // 读数据 返回vuex
  fetch ({ store }) {
    // 异步业务逻辑 读取服务端的数据提交给vuex
    console.log('fetch')
  },
  mounted () {
    // 生命周期调用接口-不推荐
    this.getList()
    console.log('环境变量', process.env, process.env.NODE_ENV, env.BASE_URL)
  },
  methods: {
    getList () {
      this.$api.home.list({ action: 'apphome' }).then((res) => {
        console.log(res)
        this.result = [...res.data.category]
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.titleTop {
  background-image: url(https://www.ydidc.com/template/Home/Zkeys/PC/Static/statics/images/login/login-bg.jpg);
  width: 100%;
  height: 700px;
  padding-top: 184px;
  padding-left: 20px;
  color: rgb(255 255 255);
  font-size: 16px;
  .titleInfo {
    width: 1220px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    > div:nth-child(1) {
      > h2 {
        font-weight: 400;
        color: #fff;
        font-size: 28px;
        margin-bottom: 40px;
      }
      > ul {
        > li {
          height: 22px;
          line-height: 22px;
          margin-bottom: 24px;
          text-indent: 38px;
          background: url(https://www.ydidc.com/template/Home/Zkeys/PC/Static/statics/images/login/login_desc_icon.png)
            no-repeat left center;
          font-size: 16px;
        }
      }
    }
    > div:nth-child(2) {
      width: 380px;
      height: 370px;
      background-color: #fff;
      padding: 40px 40px 38px;
      margin-right: 50px;
      > h4 {
        text-align: center;
        font-size: 22px;
        font-weight: 700;
        color: rgb(102, 102, 102);
        margin-bottom: 20px;
      }
      > div > div {
        width: 300px;
        height: 40px;
        line-height: 40px;
        border: 1px solid rgb(221 221 221);
        margin-top: 8px;
        padding-left: 41px;
      }
      > div > div:nth-child(1) {
        background-image: url(https://www.ydidc.com/template/Home/Zkeys/PC/Static/statics/images/login/login_icons.png);
        background-repeat: no-repeat;
        background-position: 9px -278px;
      }
      > div > div:nth-child(2) {
        background-image: url(https://www.ydidc.com/template/Home/Zkeys/PC/Static/statics/images/login/login_icons.png);
        background-repeat: no-repeat;
        background-position: 10px -196px;
      }
      a{
        color: rgb(0 170 255);
      }
      > div > div {
        > input {
          width: 150px;
          outline: none;
          border: 0;
          color: rgb(0, 0, 0);
          line-height: 0;
          font-size: 14px;
        }
        input:focus {
          outline: none;
          color: #000;
          font-size: 14px;
        }
      }
      > div > div:nth-child(3) {
        border: 0;
        padding: 0;
        font-size: 12px;
        color: rgb(0 170 255);
        margin-bottom: 10px;
        input {
          width: 15px;
          position: relative;
          top: 3px;
        }
        >a:nth-child(3){
          margin-left: 149px;
        }
      }
      > div > div:nth-child(4) {
        border: 0;
        padding: 0;
        background-color: rgb(0, 170, 255);
        color: rgb(255, 255, 255);
        text-align: center;
        margin-bottom: 20px;
        > p {
          margin: 0;
        }
      }
      >div>p:nth-child(5){
        color: #000;
        font-size: 12px;
        >span{
          color: rgb(153 153 153);
        }
      }
    }
  }
}
</style>
