<template>
  <div class="banner-container">
    <!-- 轮播图 -->
    <div class="banner-wrap">
      <div class="banner">
        <a-carousel
          ref="banner"
          effect="fade"
          dots-class="dot"
          :autoplay="true"
        >
          <div
            v-for="item in bannerData[type.typeName]"
            :key="item.id"
            class="banner-item"
            :style="`background: url(${item.pcPicture}) no-repeat center`"
            @click="goLink(item.pictureLink, item.openLinkType)"
          >
            <!-- info -->
            <div class="container banner-info-box">
              <div class="banner-info" :style="bottomStyle">
                <h2 v-if="item.display">
                  {{ item.title }}
                </h2>
                <div v-if="item.display" class="info">
                  {{ item.describe }}
                </div>
                <div
                  v-if="item.pcButtonName"
                  class="btn"
                  @click.stop="goButton(item.pcButtonLink, item.openLinkType)"
                >
                  {{ item.pcButtonName }}
                </div>
              </div>
            </div>
          </div>
        </a-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    type: {
      type: Object,
      default: 'choose'
    }
  },
  data () {
    return {
      bannerData: {
        choose: [
          {
            id: 1,
            status: 0,
            display: true,
            title: '弹性云服务器',
            pcButtonLink: '/pc/cloud-price',
            pcButtonName: '立即选购',
            describe:
              '浙江云盾服务器配备纯SSD架构打造的高性能存储，旨在为用户提供优质、高效、弹性伸缠的云计算服务。云服务器采用由数据切片技术构建的三层存储功能，切实保护客户数据的安全。同时可弹性扩展的资源用量，为客户业务在高峰期的赎畅保驾护航;灵活多样的计费方式，为客户最大程度的节省IT运营成本，提高资源的有效利用率。',
            pcPicture: require('~/static/img/cloud/cloudbg.png')
          }
        ],
        assurance: [
          {
            id: 3,
            status: 0,
            display: true,
            title: '百分服务，助您上云无忧 ',
            pcButtonLink: '/pc/cloud-price',
            describe:
              '百分服务,助您上云无忧匠心打造完整的VIP会员服务体系，为国内国际用户提供多种服务支持和服务保障让用户尊享售后服务，让云端部署更轻松、更高效',
            pcPicture: require('~/static/img/assurance/assurancebanner.png')
          }
        ],
        home: [
          {
            id: 1,
            title: '浙江云盾助力企业快速上云',
            pcButtonLink: '/pc/cloud-choose',
            pcButtonName: '了解产品',
            describe:
              'Zhejiang yundun helps enterprises go to the cloud quickly',
            pcPicture: require('~/static/img/home/home_banner1.png')
          }
        ],
        time: null
      },
      bottomStyle: 'bottom:235px',
      curId: 1
    }
  },
  mounted () {
    // 获取数据
    this.getBanner()
    // 获取网站信息
    this.getWebInfo()
  },
  beforeDestroy () {
    clearInterval(this.time)
  },
  methods: {
    // 获取轮播图
    getBanner () {
      if (this.type.typeId !== 1 && this.type.typeId !== 3) {
        this.$api.home
          .getBannerList({
            'qp-bannerType-eq': this.type.typeId,
            sorter: 'desc'
          })
          .then((res) => {
            this.bannerData[this.type.typeName] = res.data.list.filter((item) => {
              return item.status === 0
            })
            console.log('lunbotu', this.bannerData[this.type.typeName])
          })
      }
    },
    // 获取网站信息
    async getWebInfo () {
      // 获取友情链接
      const linksData = await this.$api.home.getFriendLink()
      this.$store.dispatch('home/setFriendLinks', linksData.data?.list || [])
      // 获取网站信息+公司信息
      const webInfoData = await this.$api.home.getWebInfo()
      const companyInfoData = await this.$api.home.getCompanyInfo()
      let resultData = {}
      const newArr = [
        ...(webInfoData.data?.list || []),
        ...(companyInfoData.data?.list || [])
      ]
      newArr.forEach((item) => {
        resultData = { ...resultData, ...item }
      })
      this.$store.dispatch('home/setWebCompanyInfo', resultData)
    },
    // 点击跳转
    handleClickJump (path) {
      if (!path) {
        return
      }
      this.$router.push(path)
    },
    // 定时器自动轮播
    bannerTime () {
      this.time = setInterval(() => {
        this.nextBanner()
      }, 3000)
    },
    // 轮播图切换
    nextBanner () {
      this.bannerIndex = this.bannerIndex === 1 ? 2 : 1
      this.$refs.banner.next()
    },
    // 点击banner进行页面跳转
    goLink (link, type) {
      if (type && type === '1') {
        this.$router.push(link)
      } else {
        const routeUrl = this.$router.resolve({
          path: link
        })
        window.open(routeUrl.href, '_blank')
      }
    },
    // 点击按钮页面跳转
    goButton (link, type) {
      if (type && type === '1') {
        this.$router.push(link)
      } else {
        const routeUrl = this.$router.resolve({
          path: link
        })
        window.open(routeUrl.href, '_blank')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-container {
  position: relative;
  .banner-wrap {
    height: 576px;
    position: relative;
    background-color: #ccc;
    .banner {
      min-width: 1220px;
      height: 100%;
      position: relative;
      .banner-item {
        width: 100%;
        height: 576px;
        background-size: cover !important;
        .banner-info-box {
          position: relative;
          height: 100%;
          .banner-info {
            position: absolute;
            top: 116px;
            left: 50%;
            width: 100%;
            transform: translateX(-50%);
            color: #fff;
            transition: all 0.8s;
            h2 {
              font-size: 70px;
              font-weight: 800;
              margin-bottom: 39px;
              text-align: center;
              color: #fff;
            }
            .info {
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              width: 1100px;
              font-size: 20px;
              text-align: center;
              line-height: 32px;
            }
            .btn {
              position: absolute;
              left: 50%;
              bottom: -100px;
              transform: translateX(-50%);
              font-size: 20px;
              width: 220px;
              height: 60px;
              background: linear-gradient(169deg, #0b73f0, #2fb4ff);
              border-radius: 30px;
              line-height: 60px;
              text-align: center;
              cursor: pointer;
              a {
                width: 100%;
                height: 100%;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
}
</style>
<style>
.ant-carousel .slick-dots-bottom {
  bottom: 30px;
}
</style>
