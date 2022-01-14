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
        <p class="info">
          {{ bannerData[type].info }}
        </p>
        <div v-if="bannerData[type].path" class="btn">
          <nuxt-link :to="bannerData[type].path">
            立即选购
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="list">
      <div
        v-for="item in curList"
        :key="item.id"
        :class="curId === item.id ? 'lit white' : 'lit'"
        @click="change(item.id)"
      />
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
          path: '/pc/cloud-prace',
          info: '浙江云盾服务器配备纯SSD架构打造的高性能存储，旨在为用户提供优质、高效、弹性伸缠的云计算服务。云服务器采用由数据切片技术构建的三层存储功能，切实保护客户数据的安全。同时可弹性扩展的资源用量，为客户业务在高峰期的赎畅保驾护航;灵活多样的计费方式，为客户最大程度的节省IT运营成本，提高资源的有效利用率。',
          bg: require('~/static/img/cloud/cloudbg.png')
        },
        assurance: {
          title: '百分服务，助您上云无忧 ',
          info: '百分服务,助您上云无忧匠心打造完整的VIP会员服务体系，为国内国际用户提供多种服务支持和服务保障让用户尊享售后服务，让云端部署更轻松、更高效',
          bg: require('~/static/img/assurance/assurancebanner.png')
        }
      },
      curList: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      curId: 1
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
    // 轮播图跳转
    change (id) {
      this.curId = id
      console.log(id)
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-container {
  position: relative;
  .seize {
    height: 80px;
    background: #192933;
  }
  .banner {
    width: 100%;
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
        margin: 37px auto 115px;
        text-align: center;
        font-size: 20px;
        color: #fff;
        width: 1000px;
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
        a {
          color: #fff;
        }
      }
    }
  }
  .list {
    position: absolute;
    display: flex;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    .lit {
      cursor: pointer;
      width: 24px;
      height: 4px;
      margin: 0 5px;
      background: rgba(255, 255, 255, 0.5);
    }
    .white {
      background-color: #fff;
    }
  }
}
</style>

