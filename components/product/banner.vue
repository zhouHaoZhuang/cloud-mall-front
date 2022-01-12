<template>
  <div class="banner-container">
    <!-- 占位div -->
    <div class="seize" />
    <!-- 轮播图 -->
    <div
      class="banner"
      :style="`background:url(${bannerData[type].bg}) no-repeat center`"
    >
      <div class="container">
        <p>{{ bannerData[type].title }}</p>
        <p>{{ bannerData[type].info }}</p>
        <div class="btn">
          立即选购
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    type: {
      type: String,
      default: 'choose'
    }
  },
  data () {
    return {
      bannerData: {
        choose: {
          title: '弹性云服务器',
          info: '浙江云盾服务器配备纯SSD架构打造的高性能存储，旨在为用户提供优质、高效、弹性伸缠的云计算服务。云服务器采用由数据切片技术构建的三层存储功能，切实保护客户数据的安全。同时可弹性扩展的资源用量，为客户业务在高峰期的赎畅保驾护航;灵活多样的计费方式，为客户最大程度的节省IT运营成本，提高资源的有效利用率。',
          bg: require('~/static/img/cloud/cloudbg.png')
        }
      }
    }
  },
  methods: {
    // 点击跳转
    handleClickJump (path) {
      if (!path) {
        return
      }
      this.$router.push(path)
    },
  }
}
</script>

<style lang="scss" scoped>
.banner-container {
  .seize {
    height: 80px;
    background: #192933;
  }
  .banner {
    height: 657px;
    background-size: cover !important;
    .container {
      padding-left: 10px;
      padding-top: 115px;
      color: #fff;
      p:nth-child(1) {
        font-size: 70px;
        font-weight: 800;
        text-align: center;
        color: #fff;
      }
      p:nth-child(2) {
        margin-top: 37px;
        margin-bottom: 115px;
        text-align: center;
        font-size: 20px;
        color: #fff;
      }
      .btn {
        width: 220px;
        height: 60px;
        background: url('~/static/img/programme/btnbanner.png') center no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        font-size: 20px;
        background-color: transparent;
      }
    }
  }
}
</style>
