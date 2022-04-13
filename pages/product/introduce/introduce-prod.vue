<template>
  <div class="recruit-container">
    <!-- 轮播图 -->
    <div class="bgimage">
<div class="banner-wrap">
      <div class="container">
        <!-- <p>CDN加速</p> -->
        <div class="cdn-speed" />
        <div class="txt-list">
          CDN通过广泛的网络节点分布，提供快速、稳定、安全、可编程的全球内容分发加速服务，支持将网站、音视频、下载等内容分发至接近用户的节点，使用户可就近取得所需内容，提高用户访问的响应速度和成功率
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
        <a class="btn right-margin" @click="skipInstant"> 立即开通 </a>
        <a class="btn2 right-margin" @click="skipAdmin"> 管理控制台 </a>
        <a
          class="right-margin price-color"
          @click="skipPriceDetail"
        >产品价格</a>
      </div>
    </div>
    </div>
    
    <!-- 锚点导航 -->
    <AnchorNav :nav-data="navList" />
    <!-- 产品优势 -->
    <div id="support" class="support-wrap">
      <div class="public-title">
        产品优势
      </div>
      <div class="public-title-down">
        ADVANTAGES
      </div>
      <div class="list">
        <div
          v-for="(item, index) in productSuperiority"
          :key="index"
          class="item"
        >
          <div class="bg" :style="item.bg" />
          <div class="title">
            {{ item.title }}
          </div>
          <div class="title-desc">
            {{ item.desc }}
          </div>
        </div>
      </div>
    </div>
    <!-- 产品功能 -->
    <div id="process" class="process-wrap">
      <div class="container">
        <div class="public-title">
          产品功能
        </div>
        <div class="public-title-down">
          FEATURES
        </div>
        <div class="list">
          <div
            v-for="(item, index) in cooperationProcess"
            :key="index"
            class="item"
          >
            <div class="bg" :style="item.bg" />
            <div class="right">
              <div class="title">
                {{ item.title }}
              </div>
              <p class="desc">
                {{ item.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 应用场景 -->
    <div id="environment" class="environment-wrap">
      <div class="public-title">
        应用场景
      </div>
      <div class="public-title-down">
        SCENARIOS
      </div>
      <div class="list">
        <div v-for="(item, index) in applicationSce" :key="index" class="item">
          <div class="bg" :style="item.bg" />
          <div class="title">
            {{ item.title }}
          </div>
          <div class="desc-two">
            {{ item.desc }}
          </div>
        </div>
      </div>
    </div>
    <!-- 帮助文档 -->
    <div id="helpdoc" class="help-wrap">
      <div class="container">
        <div class="public-title">
          帮助文档
        </div>
        <div class="public-title-down">
          DUCUMENTATION
        </div>
        <div class="helpInfo">
      <div v-if="listAll" class="helpInfo-listall">
        <div
          v-for="item in listAll"
          :key="item.typeCode"
          @mouseleave="item.isShow = false"
        >
          <transition name="slide">
            <div
              v-show="!item.isShow"
              :style="`background: url(${item.typeIcon}) no-repeat;background-size: cover;`"
              class="img-typeIcon"
              @mouseenter="item.isShow = true"
            >
              <h4 :data-tid="item.typeCode">
                {{ item.typeName }}
              </h4>
            </div>
          </transition>
          <transition name="bounce">
            <div
              v-show="item.isShow"
              class="subtype"
              @mouseleave="item.isShow = false"
            >
              <!-- <img
                class="backgro-img"
                src="~/static/img/help/Subscript.png"
                alt=""
              /> -->
              <div class="backgro-img">
                <span
                  v-for="title in item.ccHelpTypeList"
                  :key="title.typeCode"
                  :title="title.typeName"
                  @click="
                    changeList(title.typeCode, item.typeName, title.typeName)
                  "
                >
                  <img
                    width="20px"
                    height="20px"
                    :src="title.typeIcon"
                    alt=""
                  >
                  {{ title.typeName }}
                </span>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
        <!-- <div class="list">
          <div v-for="(item, index) in helpList" :key="index" class="item">
            <div class="bg" :style="item.bg" />
            <div class="right">
              <div class="title">
                {{ item.title }}
              </div>
              <p class="desc">
                {{ item.desc }}
              </p>
            </div>
          </div>
        </div> -->
      </div>
    </div>

    <!-- 页面顶部吸顶锚点导航 -->
    <FixedTopNav :nav-data="navList" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AnchorNav from '@/components/AnchorNav/index'
import FixedTopNav from '@/components/FixedTopNav/index'

import {
  jumpCloudAdmin,
  jumpCloudAdminRealName,
  jumpCloudAdminDash
} from '@/utils/index.js'

export default {
  components: { AnchorNav, FixedTopNav },
  data () {
    return {
      jumpCloudAdmin,
      timer: null,
      ModalText: '',
      visible: false,
      title: '提示',
      oktext: '',
      canceltext: '',
      listAll: [],
      navList: [
        {
          id: 'support',
          title: '产品优势'
        },
        {
          id: 'process',
          title: '产品功能 '
        },

        {
          id: 'environment',
          title: '应用场景'
        },
        {
          id: 'helpdoc',
          title: '帮助文档'
        }
      ],
      navSelectIndex: 0,
      productSuperiority: [
        {
          title: '快速，全球覆盖',
          bg: `width: 114px;height: 114px;background: url(${require('~/static/img/introduce/productSuperiority_1.png')}) no-repeat center;margin-top:20px`,
          desc: '全球拥有2800+节点。覆盖70多个国家和地区，包括中国内地（大陆）、中国香港、中国澳门、中国台湾、其他国家和地区，全网带宽输出能力达150 Tbps'
        },
        {
          title: '站点安全性',
          bg: `width: 82px;height:104px;background: url(${require('~/static/img/introduce/productSuperiority_2.png')}) no-repeat center;margin-top:28px`,
          desc: '为网络提供系统级保护，您的流量和程序受益于各种形式的保护，支持多种防盗链功能、HTTPS安全传输、IP黑名单等高级安全控制功能'
        },
        {
          title: '简单且高效',
          bg: `width: 104px;height: 54px;background: url(${require('~/static/img/introduce/productSuperiority_3.png')}) no-repeat center;margin-top:52px;margin-bottom:76px`,
          desc: '通过标准化配置，更及时的的作出响应，用户自主在控制台进行访问控制、性能优化、缓存策略等配置，实时掌握CDN服务使用情况'
        },
        {
          title: '心动的价格',
          bg: `width: 118px;height: 104px;background: url(${require('~/static/img/introduce/productSuperiority_4.png')}) no-repeat center;margin-top:34px`,
          desc: '性能和技术强大的同时，价格也同样有竞争力，灵活的计费模式，免去您的麻烦'
        }
      ],
      cooperationProcess: [
        {
          title: '全链路加速',
          bg: `width: 135px;height: 105px;background: url(${require('~/static/img/introduce/productfunc-1.png')}) no-repeat center;background-size: cover !important;display:inline-block`,
          desc: '只需上传加速域名证书/私钥，获得企业级HTTPS加速服务。自此基础上，用户进行自定义配置后，可将原请求方式进行强制 HTTPS 跳转'
        },
        {
          title: '智能优化',
          bg: `width: 135px;height: 105px;background: url(${require('~/static/img/introduce/2.png')}) no-repeat center;background-size: cover !important;display:inline-block`,
          desc: '通过页面优化、智能压缩、过滤参数（提高缓存命中率）等方式来提升用户请求的响应速度和文件下载速度，减少传输内容节约开销的同时提升加速效果'
        },
        {
          title: '静态资产缓存',
          bg: `width: 135px;height: 105px;background: url(${require('~/static/img/introduce/8.png')}) no-repeat center;background-size: cover !important;display:inline-block`,
          desc: '加速向查看者交付静态内容（即图像、样式表等）。均衡使用 CPU 多核处理能力，进行高性能缓存，配合 SSD 加速能力，减少用户访问等待时间'
        },
        {
          title: '访问控制',
          bg: `width: 135px;height: 105px;background: url(${require('~/static/img/introduce/4.png')}) no-repeat center;background-size: cover !important;display:inline-block`,
          desc: '可通过URL鉴权设置、Refer防盗链设置、IP黑/白名单设置、UA黑/白名单设置能够很好地解决盗链危害'
        }
      ],
      applicationSce: [
        {
          title: '移动加速 ',
          bg: `width: 182px;height: 182px;background: url(${require('~/static/img/introduce/14.png')}) no-repeat center`,
          desc: '当全球分布的客户端进行更新文件（apk文件）时，将自动扩展，通过 HTTPDNS 服务，避免 DNS 劫持并进行DNS精准解析。可以通过内容分发网络使更新的内容立即在用户所在的边缘站点可用'
        },
        {
          title: '直播和点播视频流',
          bg: `width: 182px;height: 182px;background: url(${require('~/static/img/introduce/9.png')}) no-repeat center`,
          desc: '提供多种选项来将媒体（包括预录制文件和直播） 分发给所需的持续高吞吐量流式传输给全球查看者。视频直播，将媒体片段缓存到边缘站点，并折叠对清单文件的多个请求，以减少来源应用程序的负载'
        },
        {
          title: '站点/下载加速',
          bg: `width: 182px;height: 182px;background: url(${require('~/static/img/introduce/11.png')}) no-repeat center`,
          desc: '应用于中小文件的加速分发，例如，各种门户网站、电子商务类网站、新闻资讯类网站或应用、娱乐游戏类网站等；同时支持各类大文件的下载和分发加速，例如游戏安装包、应用更新、手机ROM升级、应用程序包下载'
        }
      ],
      helpList: [
        {
          title: '产品文档',
          bg: `width: 50px;height: 60px;background: url(${require('~/static/img/introduce/help_1.png')}) no-repeat center;background-size: cover !important;display:inline-block;margin-left:20px`,
          desc: 'CDN产品帮助文档'
        },
        {
          title: '常见问题',
          bg: `width: 51px;height: 61px;background: url(${require('~/static/img/introduce/help_2.png')}) no-repeat center;background-size: cover !important;display:inline-block;margin-left:20px`,
          desc: '问题解惑，汇总合集'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      isLogin: state => state.user.isLogin,
      token: state => state.user.token
    })
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  created(){
    this.asyncData()
  },
  methods: {
    // nuxt推荐请求方式
 async  asyncData () {
    // 获取全部帮助中心的列表数据
    let listAll = await this.$api.help.getRegionDetail({ code: 'help_type_01' })
    listAll = listAll.data ? listAll.data.ccHelpTypeList : []
    listAll = listAll || []
    for (let index = 0; index < listAll.length; index++) {
      const element = listAll[index]
      element.isShow = false
    }
    this.listAll = listAll
  },
    changeList (helpTypeCode, LeveltwoTitle, LevelthreeTitle) {
      this.$router.push({
        path: '/help/classInfo',
        query: {
          helpTypeCode,
          LeveltwoTitle,
          LevelthreeTitle
        }
      })
    },
    // 判断是否实名认证
    isRealName () {
      return new Promise((resolve, reject) => {
        this.$api.cloud.instantAccountSetup().then((res) => {
          resolve(res.code)
        })
      })
    },
    async skipAdmin () {
      if (this.isLogin === true) {
        // this.jumpCloudAdmin(this.token)
        const isName = await this.isRealName()
        if (isName === '1310013') {
          // 已经实名认证
          jumpCloudAdminDash(this.token)
        } else if (isName === '1313009') {
          this.visible = true
          this.ModalText = '当前账户未进行实名认证,是否先进行实名认证?'
          this.oktext = '确认'
          this.canceltext = '取消'
          this.func = 3
        }
      } else {
        this.visible = true
        this.ModalText = '您还未登录，请先登录'
        this.oktext = '确认登录'
        this.canceltext = '取消'
        this.func = 1
      }
    },
    // 判断确认按钮的功能
    handleOk (e) {
      // 未登录
      if (this.func === 1) {
        this.$router.push('/login')
      } else if (this.func === 2) {
        this.$router.push('/instant-open')
      } else if (this.func === 3) {
        jumpCloudAdminRealName(this.token)
      }
      this.visible = false
    },
    handleCancel (e) {
      this.visible = false
    },

    skipInstant () {
      // 判断是否开通过,开通过就提示,没开通过就让跳转,开通过进行提示
      this.$api.cloud.isAccountSetup().then((res) => {
        if (res.code === '000000') {
          if (res.data === true) {
            this.$message.warning('当前账户已开通CDN服务')
          } else {
            // 未开通
            this.func = 2
            this.handleOk()
          }
        } else if (res.code === '000001') {
          // 未登录
          this.visible = true
          this.ModalText = '您还未登录，请登录后再进行服务开通'
          this.oktext = '确认登录'
          this.canceltext = '取消'
          this.func = 1
        } else {
          this.$message.warning(res.msg)
        }
      })
    },
    skipPriceDetail () {
      // 跳转到产品价格详情
      this.$router.push('/price-detail')
    },
    // 点击跳转
    handleClickJump (path) {
      if (!path) {
        return
      }
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.recruit-container {
  background: #fff;
  margin: 0 auto;
  .bgimage{
    background-image: url('~/static/img/assurance/bgcolor.png');
  background-repeat: no-repeat;
  background-size: 100% 700px;
  }
  .banner-wrap {
    position: relative;
    height: 700px;
    background: url('~/static/img/programme/prudect-nav.gif') no-repeat center;
    color: #fff;
    font-size: 18px;
    .container {
      padding-top: 180px;
      .cdn-speed {
        width: 270px;
        height: 50px;
        background: url('~/static/img/programme/cdn-speed.png') no-repeat center;
      }
      p:nth-child(1) {
        font-size: 50px;
        margin-bottom: 30px;
      }
      .txt-list {
        display: flex;
        align-items: center;
        width: 706px;
        line-height: 30px;
        font-size: 20px;
        margin: 60px 0 70px 0;
      }
      .btn {
        margin: 30px 0 28px;
        display: inline-block;
        width: 140px;
        height: 50px;
        text-align: center;
        border-radius: 4px;
        border: 1px solid #ffffff;
        line-height: 44px;
        font-size: 18px;
        background: white;
        color: #0080ff;
        border-radius: 4px;
      }
      .btn2 {
        margin: 30px 0 28px;
        display: inline-block;
        width: 140px;
        height: 50px;
        text-align: center;
        border-radius: 4px;
        border: 1px solid #ffffff;
        line-height: 44px;
        font-size: 18px;
        background: rgba(0, 0, 0, 0);
        color: white;
        border-radius: 4px;
      }
      .right-margin {
        margin-right: 30px;
      }
      .price-color {
        cursor: pointer;
        color: #f9f9f9;
      }
    }
  }
  // 公共头部
  .public-title {
    height: 32px;
    line-height: 32px;
    text-align: center;
    padding-right: 15px;
    font-size: 36px;
    color: #333;
  }
  .public-title-down {
    font-size: 24px;
    text-align: center;
    font-weight: 400;
    color: #8b95a7;
    line-height: 33px;
    margin: 20px 0 50px 0;
    text-indent: -0.6em;
  }
  .support-wrap {
    padding: 50px 0 0;
    margin-bottom: 100px;
    .list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .item {
        width: 290px;
        height: 424px;
        padding: 30px 20px 40px 20px;
        margin: 10px;
        box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
        .bg {
          background-size: 100% !important;
          margin: 0 auto;
        }
        .title {
          font-size: 24px;
          font-family: Microsoft YaHei;
          font-weight: 600;
          color: rgba(51, 51, 51, 1);
          text-align: center;
          margin: 50px 0 20px 0;
        }

        .title-desc {
          font-size: 16px;
          line-height: 24px;
          color: #9ca4b5;
        }
      }
      .item:hover {
        box-shadow: 0px 0px 10px 2px rgba(59, 119, 227, 0.1);
      }
      .item:nth-child(1):hover .bg {
        background: url('~/static/img/introduce/18.png') no-repeat center !important;
      }
      .item:nth-child(2):hover .bg {
        background: url('~/static/img/introduce/16.png') no-repeat center !important;
      }
      .item:nth-child(3):hover .bg {
        background: url('~/static/img/introduce/15.png') no-repeat center !important;
      }
      .item:nth-child(4):hover .bg {
        background: url('~/static/img/introduce/17.png') no-repeat center !important;
      }
    }
    .consulting {
      height: 180px;
      background: url('~/static/img/about/consulting1.jpg') no-repeat center;
      display: flex;
      margin-top: 60px;
      .txt-box {
        padding-top: 40px;
        margin-left: 368px;
        font-family: Microsoft YaHei;
        div:nth-child(1) {
          font-size: 27px;
          font-weight: 400;
          color: #fff;
          line-height: 62px;
        }
        div:nth-child(2) {
          font-size: 18px;
          font-weight: 400;
          color: #fff;
          line-height: 50px;
        }
      }
      .btn {
        width: 180px;
        height: 55px;
        background: #fff;
        border-radius: 4px;
        font-size: 18px;
        font-weight: bold;
        color: #0066ff;
        text-align: center;
        line-height: 55px;
        margin-left: 80px;
        margin-top: 65px;
      }
    }
  }
  .process-wrap {
    display: flex;
    justify-content: space-between;
    padding: 140px 0;
    background-color: #f5f7fd;
    .container {
      width: 1600px;

      .list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .item {
          width: 584px;
          height: 178px;
          margin: 10px 20px 20px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #ffffff;
          padding-left: 20px;
          .bg {
            background-size: 23px 24px !important;
            height: 28px;
          }
          .right {
            width: 534px;
            height: 220px;
            padding: 0 10px;
            display: inline-block;
            margin-left: 30px;
            .title {
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: rgba(102, 102, 102, 1);
              line-height: 24px;
              text-align: left;
              margin-top: 50px;
              font-size: 24px;
              font-weight: 600;
              color: #333;
              margin-bottom: 20px;
            }
            .desc {
              font-size: 16px;
              color: #9ca4b5;
              line-height: 24px;
            }
          }
        }
        .item:hover {
          box-shadow: 0px 0px 10px 2px rgba(59, 119, 227, 0.1);
        }
        .item:nth-child(1):hover .bg {
          background: url('~/static/img/introduce/6.png') no-repeat center !important;
        }
        .item:nth-child(2):hover .bg {
          background: url('~/static/img/introduce/1.png') no-repeat center !important;
        }
        .item:nth-child(3):hover .bg {
          background: url('~/static/img/introduce/7.png') no-repeat center !important;
        }
        .item:nth-child(4):hover .bg {
          background: url('~/static/img/introduce/3.png') no-repeat center !important;
        }
      }
    }
  }
  .environment-wrap {
    padding: 140px 0 116px 0;
    .list {
      display: flex;
      justify-content: center;
      .item {
        width: 386px;
        height: 510px;
        padding: 70px 44px 50px 44px;
        margin: 10px;
        box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
        .bg {
          background-size: 100% !important;
          margin: 0 auto;
        }
        .title {
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          text-align: center;
          font-size: 24px;
          margin: 40px 0 16px 0;
          font-weight: 600;
        }

        .desc-two {
          font-size: 16px;
          line-height: 24px;
          color: #9ca4b5;
        }
      }
      .item:hover {
        box-shadow: 0px 0px 10px 2px rgba(59, 119, 227, 0.1);
      }
      .item:nth-child(1):hover .bg {
        background: url('~/static/img/introduce/13.png') no-repeat center !important;
      }
      .item:nth-child(2):hover .bg {
        background: url('~/static/img/introduce/10.png') no-repeat center !important;
      }
      .item:nth-child(3):hover .bg {
        background: url('~/static/img/introduce/12.png') no-repeat center !important;
      }
    }
    .consulting {
      height: 180px;
      background: url('~/static/img/about/consulting1.jpg') no-repeat center;
      display: flex;
      margin-top: 60px;
      .txt-box {
        padding-top: 40px;
        margin-left: 368px;
        font-family: Microsoft YaHei;
        div:nth-child(1) {
          font-size: 27px;
          font-weight: 400;
          color: #fff;
          line-height: 62px;
        }
        div:nth-child(2) {
          font-size: 18px;
          font-weight: 400;
          color: #fff;
          line-height: 50px;
        }
      }
      .btn {
        width: 180px;
        height: 55px;
        background: #fff;
        border-radius: 4px;
        font-size: 18px;
        font-weight: bold;
        color: #0066ff;
        text-align: center;
        line-height: 55px;
        margin-left: 80px;
        margin-top: 65px;
      }
    }
  }
  .help-wrap {
    display: flex;
    justify-content: space-between;
    padding: 90px 0;
    background-color: #f5f7fd;
    .container {
      width: 1200px;
      .list {
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        .item {
          width: 330px;
          height: 128px;
          margin: 10px 10px 20px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #ffffff;
          margin-right: 30px;
          .bg {
            background-size: 23px 24px !important;
            height: 28px;
          }
          .right {
            width: 234px;
            height: 134px;
            padding: 0 10px;
            display: inline-block;
            margin-left: 20px;
            .title {
              font-size: 24px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: rgba(102, 102, 102, 1);
              line-height: 24px;
              text-align: left;
              margin-top: 30px;
              font-weight: 600;
              color: #333;
              margin-bottom: 20px;
            }
            .desc {
              font-size: 18px;
              color: #9ca4b5;
              line-height: 28px;
            }
          }
        }
        .item:hover {
          box-shadow: 0px 0px 10px 2px rgba(59, 119, 227, 0.1);
        }
      }
    }
  }
}
.slide-enter-active {
  animation: slide-in 0.2s;
}
.slide-leave-active {
  animation: slide-in 0.2s reverse;
}
@keyframes slide-in {
  0% {
    transform: translateY(-200px);
  }
  100% {
    transform: translateY(0px);
  }
}
.bounce-enter-active {
  animation: bounce-in 0.2s;
}
.bounce-leave-active {
  animation: bounce-in 0.2s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-200px);
  }
}
.helpInfo {
  width: 1224px;
  margin: 30px auto;
  h3 {
    height: 40px;
    img {
      margin-top: -5px;
      margin-right: 5px;
    }
  }
  .helpInfo-listall {
    padding-top: 80px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    overflow: hidden;
    height: 281px;
    > div {
      flex: 1;
      overflow: hidden;
      height: 327px;
      margin: 0 38px 0 20px;
      .img-typeIcon {
        height: 200px;
        h4 {
          height: 200px;
          line-height: 200px;
          font-size: 24px;
          background-color: #0006;
          font-weight: bold;
          color: #fff;
          text-align: center;
        }
      }
      .subtype {
        background: url('../../../static/img/help/helpTypebj.png') no-repeat;
        background-size: 100% 100%;
        width: 100%;
        height: 200px;
        display: flex;
        flex-wrap: wrap;
        position: relative;
        padding: 10px 20px;
        align-content: flex-start;
        .backgro-img {
          background: url('../../../static/img/help/Subscript.png') no-repeat;
          background-size: 100% 100%;
          display: flex;
          flex-wrap: wrap;
          align-content: center;
          width: 100%;
          height: 100%;
          padding: 0px 10px;
          span {
            padding-left: 10%;
            display: block;
            line-height: 40px;
            cursor: pointer;
            height: 40px;
            width: 156px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            img {
              margin-right: 5px;
            }
          }
        }
        span {
          display: block;
          position: relative;
          z-index: 1;
          width: 50%;
          height: 30px;
          line-height: 30px;
          font-size: 16px;
          color: #fff;
        }
      }
    }
  }
}
</style>
