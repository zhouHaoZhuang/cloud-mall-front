<template>
  <div class="recruit-container">
    <div class="container">
      <h2 class="inweb">
        内部分发网络CDN
      </h2>
      <div class="charge-type">
        <div class="leftbox">
          <span class="innerbox">计费类型</span>
        </div>
        <div class="rightbox">
          按使用流量计费
        </div>
      </div>
      <div class="charge-type">
        <div :class="{ leftbox: true, 'gray-bg': !checked }">
          <span class="innerbox">服务协议</span>
        </div>
        <div class="rightcheckbox">
          <a-checkbox v-model="checked" />
          内容分发网络CDN服务协议
        </div>
      </div>
    </div>
    <div class="fixed-bottom">
      <a-button
        type="primary"
        :class="{ 'fix-btn': true, disabled: !checked }"
        :disabled="!checked"
        @click="instantSetup"
      >
        立即开通
      </a-button>
    </div>
    <a-modal
      :title="title"
      :visible="visible"
      :ok-text="oktext"
      :cancel-text="canceltext"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      {{ ModalText }}
    </a-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { jumpCloudAdminDash, jumpCloudAdminRealName } from '@/utils/index'
export default {
  data () {
    return {
      jumpCloudAdminRealName,
      jumpCloudAdminDash,
      checked: false,
      ModalText: '',
      visible: false,
      title: '提示',
      oktext: '',
      canceltext: ''
    }
  },
  computed: {
    ...mapState({
      token: state => state.user.token
    })
  },
  methods: {
    handleCancel (e) {
      this.visible = false
    },
    handleOk (e) {
      // 跳转到实名认证页面
      if (this.func === 1) {
        jumpCloudAdminRealName(this.token)
      }
      this.visible = false
    },
    instantSetup () {
      // 如果未登录，弹窗提示“您还未登录，请登录后再进行服务开通。马上登录”，点击【马上登录】跳转到登录页面
      // 已经登录，未认证，弹窗提示“您尚未实名认证，开通CDN服务需要先实名认证通过。去认证” ，点击【去认证】跳转到实名认证页面
      // 不用判断登录,只用判断是否实名认证就可以,没有实名认证跳转到实名认证页面
      this.$api.cloud.instantAccountSetup().then((res) => {
        // 已经实名认证
        if (res.code === '000000') {
          jumpCloudAdminDash(this.token)
        }
        // 没有实名认证
        if (res.code === '1313009') {
          this.$message.warning(res.msg)
          // 跳转到控制台
          this.visible = true
          this.ModalText = '当前账户未进行实名认证,是否先进行实名认证?'
          this.oktext = '确认'
          this.canceltext = '取消'
          this.func = 1
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.recruit-container {
  background-color: #f5f7fd;
  width: 100%;
  height: 100vh;
  .container {
    width: 1540px;
    .inweb {
      font-weight: 600;
      color: #13274b;
      font-size: 28px;
      margin-top: 80px;
      padding: 30px 0 20px 0;
    }
    .charge-type {
      width: 1540px;
      height: 136px;
      margin-bottom: 20px;
      background-color: #fff;
      border-radius: 4px;
      position: relative;
      .leftbox {
        width: 52px;
        height: 136px;
        background-color: skyblue;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        background-color: #3b77e3;
        color: white;
        border-radius: 4px;

        .innerbox {
          display: block;
          width: 1em;
          line-height: 26px;
        }
      }
      .gray-bg {
        background-color: #d3d3d3;
      }
      .rightbox {
        position: absolute;
        left: 70px;
        top: 50px;
        width: 166px;
        height: 44px;
        background-color: #3b77e3;
        border-radius: 4px;
        line-height: 44px;
        text-align: center;
        font-size: 16px;
        color: white;
        cursor: pointer;
      }
      .rightcheckbox {
        position: absolute;
        left: 70px;
        top: 50px;
        font-size: 16px;
        color: #3b77e3;
      }
    }
  }
  .fixed-bottom {
    width: 100vw;
    height: 150px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    .fix-btn {
      width: 140px;
      height: 50px;
      line-height: 44px;
      color: white;
      font-size: 16px;
      text-align: center;
      border-radius: 4px;
      position: absolute;
      right: 190px;
    }
    .disabled {
      background-color: #b0c8f4;
      border: 1px solid #b0c8f4;
    }
  }
}
</style>
