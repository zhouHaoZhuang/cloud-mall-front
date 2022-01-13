<template>
  <div class="banner-container">
    <!-- 占位div -->
    <div class="seize" />
    <!-- 轮播图 -->
    <div class="img">
      <a-carousel :after-change="onChange">
        <div>
          <h3>1</h3>
        </div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </a-carousel>
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
    onChange (a, b, c) {
      console.log(a, b, c)
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-container {
  .seize {
    height: 80px;
    background: #192933;
  }
  .img {
    width: 100%;
    height: 657px;
    background: red;
    background-size: cover !important;
    .ant-carousel >>> .slick-slide {
      text-align: center;
      height: 160px;
      line-height: 160px;
      background: #364d79;
      overflow: hidden;
    }

    .ant-carousel >>> .slick-slide h3 {
      color: #fff;
    }
  }
}
</style>
