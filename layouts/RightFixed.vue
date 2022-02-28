<template>
  <div v-show="show" class="right-fixed">
    <div class="item">
      <span>QQ咨询</span>
      <div class="detail">
        <span>请选择客服进行咨询</span>
        <div class="box">
          <div class="left" />
          <div class="right">
            <a
              class="ceshi"
              target="_blank"
              :href="`http://wpa.qq.com/msgrd?v=3&amp;uin=${webInfo.qqNumber}&amp;site=qq&amp;menu=yes`"
            >{{ webInfo.qqNumber }}</a>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="item">
      <span>微信咨询</span>
      <div v-if="webInfo.wechatQrCode" class="detail">
        <img class="img" :src="webInfo.wechatQrCode" alt="">
      </div>
    </div> -->
    <div class="item">
      <span>电话咨询</span>
      <div class="detail">
        <span>请选择客服进行咨询</span>
        <div class="box">
          <div class="left" />
          <div class="right">
            {{ webInfo.serverPhone }}
          </div>
        </div>
      </div>
    </div>
    <div class="item">
      <!-- <div class="img" /> -->
      <span>备案</span>
    </div>
    <div class="item">
      <div class="img" />
      <span>工单</span>
    </div>
    <div
      class="item"
      :style="`opacity:${btnFlag ? '1' : '0'}`"
      @click="backTop"
    >
      <div class="img" />
      <span>TOP</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      scrollTop: 0,
      btnFlag: false,
      show: true
    }
  },
  async fetch () {
    const webInfoData = await this.$api.home.getWebInfo()
    const companyInfoData = await this.$api.home.getCompanyInfo()
    this.$store.dispatch('home/setWebCompanyInfo', {
      ...webInfoData.data.list[0],
      ...companyInfoData.data.list[0]
    })
  },
  computed: {
    ...mapState({
      webInfo: state => state.home.webInfo
    })
  },
  watch: {
    $route: {
      handler (newVal) {
        if (newVal.path === '/login-pc' || newVal.path === '/pc/register') {
          this.show = false
        } else {
          this.show = true
        }
      },
      immediate: true
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods: {
    // 点击跳转
    handleClickJump (path) {
      if (!path) {
        return
      }
      this.$router.push(path)
    },
    // 回顶部
    // backTop () {}
    backTop () {
      const timer = setInterval(() => {
        const ispeed = Math.floor(-this.scrollTop / 13)
        document.documentElement.scrollTop = document.body.scrollTop =
          this.scrollTop + ispeed
        if (this.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop () {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      this.scrollTop = scrollTop
      if (this.scrollTop > 60) {
        this.btnFlag = true
      } else {
        this.btnFlag = false
      }
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
.right-fixed {
  position: fixed;
  right: 20px;
  bottom: 100px;
  z-index: 99999;
  .item {
    width: 55px;
    height: 55px;
    margin-bottom: 5px;
    background: #fff;
    text-align: center;
    font-size: 12px;
    color: #666;
    border: 1px solid #eee;
    cursor: pointer;
    position: relative;
    .detail {
      width: 325px;
      padding: 20px;
      background: #fff;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 66px;
      box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.1);
      text-align: left;
      color: #666;
      font-size: 14px;
      display: none;
      .box {
        margin-top: 14px;
        padding-left: 30px;
        color: #999;
        display: flex;
        align-items: center;
        line-height: 18px;
      }
      .img {
        width: 100%;
        height: 100%;
      }
      &::after {
        content: '';
        position: absolute;
        border: 6px solid transparent;
        border-left-color: #fff;
        right: -12px;
        top: 50%;
        margin-top: -6px;
      }
    }
  }
  .item:nth-child(1),
  .item:nth-child(2),
  .item:nth-child(3) {
    padding-top: 35px;
  }
  .item:nth-child(1) {
    background: url('~/static/img/home/qq.png') #fff no-repeat center 8px;
    .detail {
      .box {
        background: url('~/static/img/home/message-hover.png') no-repeat;
      }
    }
  }
  // .item:nth-child(2) {
  //   background: url('~/static/img/home/wx.png') #fff no-repeat center 8px;
  //   .detail {
  //     width: 118px;
  //     height: 118px;
  //     padding: 0;
  //   }
  // }
  .item:nth-child(2) {
    background: url('~/static/img/home/tel.png') #fff no-repeat center 8px;
    .detail {
      width: 220px;
      .box {
        background: url('~/static/img/home/tel-hover.png') no-repeat;
      }
    }
  }
  .item:nth-child(3) {
    background: url('~/static/img/home/rightfiling.png') #fff no-repeat center
      8px;
    background-size: 60%;
    .detail {
      width: 220px;
      .box {
        background: url('~/static/img/home/rightfiling-hover.png') no-repeat;
      }
    }
  }
  .item:nth-child(1):hover {
    background: url('~/static/img/home/qq-active.png') #fff no-repeat center 8px;
    .detail {
      display: block;
    }
  }
  // .item:nth-child(2):hover {
  //   background: url('~/static/img/home/wx-active.png') #fff no-repeat center 8px;
  //   .detail {
  //     display: block;
  //   }
  // }
  .item:nth-child(2):hover {
    background: url('~/static/img/home/tel-active.png') #fff no-repeat center
      8px;
    .detail {
      display: block;
    }
  }
  .item:nth-child(3):hover {
    background: url('~/static/img/home/rightfiling-hover.png') #fff no-repeat
      center 8px;
    background-size: 60%;
    .detail {
      display: block;
    }
  }
  .item:nth-child(4),
  .item:nth-child(5),
  .item:nth-child(6) {
    .img {
      width: 26px;
      height: 26px;
      margin: 5px auto 2px;
      background: url('~/static/img/home/side-menu.png') no-repeat;
    }
  }
  .item:nth-child(3) {
    display: none;
  }
  .item:nth-child(4) {
    display: none;
    .img {
      background-position: -85px 0;
    }
  }
  // .item:nth-child(5) {
  //   display: none;
  //   .img {
  //     background-position: -116px 0;
  //   }
  // }
  .item:nth-child(5) {
    // transition: 0.3s all linear;
    .img {
      background-position: -206px 0;
    }
  }
  .item:nth-child(4):hover {
    .img {
      background-position: -85px -28px;
    }
  }
  .item:nth-child(5):hover {
    .img {
      background-position: -116px -28px;
      background-position: -206px -27px;
    }
  }
  .item:nth-child(6):hover {
    .img {
      background-position: -206px -27px;
    }
  }
  .item:hover {
    color: #059fff;
    border-color: #059fff;
  }
}
/*右侧咨询*/
@media (max-width: 1440px) {
  .right-fixed {
    right: 2px !important;
    bottom: 60px !important;
  }
}
</style>
