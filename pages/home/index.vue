<template>
  <div class="home">
    <!-- 轮播图 -->
    <Banner :type="{ typeName: 'home', typeId: 0 }" />
    <!-- 服务提供 -->
    <div class="service">
      <div class="about-container">
        <div class="title">
          <p class="title-top">
            {{ webInfo.title }}为您提供高速、稳定、安全、弹性的云计算服务
          </p>
          <p class="title-bottom">
            根据不同应用场景推荐适合您的最优质服务器，满足您一切需求
          </p>
        </div>
        <div class="container">
          <div v-for="(item, index) in serviceList" :key="index" class="lit">
            <div class="service-title">
              <div class="service-bg">
                {{ item.tip }}
              </div>
              <p>{{ item.title }}</p>
              <p>{{ item.describe }}</p>
            </div>
            <div class="service-content">
              <div
                v-for="(ele, ind) in item.content"
                :key="ind"
                class="service-found"
              >
                <div class="service-que">
                  {{ ele.question }}
                </div>
                <div class="service-text">
                  {{ ele.answer }}
                </div>
                <!-- <input type="text" :value="ele.answer"> -->
              </div>
            </div>
            <nuxt-link
              :to="{
                path: '/cloud-price',
                query: { cpu: item.cpu, memory: item.memory }
              }"
            >
              <div class="service-footer">
                立即购买
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- 选择云盾 -->
    <div class="choice">
      <div class="about-container">
        <div class="title">
          <p class="title-top">
            为什么选择{{ webInfo.title }}
          </p>
          <p class="title-bottom">
            完善的云产品，为用户提供多种服务支持和保障，让云端部署更轻松、更高效
          </p>
        </div>
        <div class="container">
          <div v-for="(item, index) in choiceList" :key="index" class="lit">
            <div
              class="lit-down"
              :style="`background:url(${item.bg}) no-repeat center`"
            >
              <div class="left">
                <p>{{ item.title }}</p>
                <div class="btn">
                  查看详情
                </div>
              </div>
              <div class="right">
                {{ item.content }}
              </div>
            </div>
            <div
              class="lit-top"
              :style="`background:url(${item.bg}) no-repeat center`"
            >
              {{ item.mark }}
            </div>
          </div>
        </div>
        <div class="container-bottom">
          <div v-for="(item, index) in choiceTwoList" :key="index" class="lit">
            <div
              class="lit-down"
              :style="`background:url(${item.bg}) no-repeat center`"
            >
              <div class="left">
                <p>{{ item.title }}</p>
                <div class="btn">
                  查看详情
                </div>
              </div>
              <div class="right">
                {{ item.content }}
              </div>
            </div>
            <div
              class="lit-top"
              :style="`background:url(${item.bg}) no-repeat center`"
            >
              {{ item.mark }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 安全 -->
    <div class="safe">
      <div class="about-container">
        <div class="title">
          <p class="title-top">
            提供安全合规的云计算服务
          </p>
          <p class="title-bottom">
            权威认证的云计算服务，充分保障您的业务实践与业务安全
          </p>
        </div>
        <div class="container">
          <div v-for="(item, index) in safeList" :key="index" class="lit">
            <div class="safe-bg">
              <div
                class="bg"
                :style="`background:url(${item.bg}) no-repeat center`"
              />
            </div>
            <div class="safe-content">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 解决方案 -->
    <div class="solve">
      <div class="about-container">
        <div class="title">
          <p class="title-top">
            解决方案
          </p>
          <p class="title-bottom">
            根据行业特性，为您提供高可用、安全的解决方案
          </p>
        </div>
        <div class="swiper-container">
          <div class="swiper mySwiper">
            <div class="swiper-wrapper">
              <div
                v-for="(item, index) in solveList"
                :key="index"
                :class="`swiper-slide slide-${item.id}`"
              >
                <div class="slide-cover">
                  <div class="slide-icon">
                    <Iconfont :type="item.type" />
                  </div>
                  <div class="slide-line" />
                  <div class="slide-title">
                    {{ item.title }}
                  </div>
                  <div class="slide-content">
                    {{ item.content }}
                  </div>
                  <div class="slide-btn">
                    <nuxt-link :to="item.path">
                      <a-icon type="right-circle" />
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-button-next" />
            <div class="swiper-button-prev" />
          </div>
        </div>
      </div>
    </div>
    <!-- 关于我们 -->
    <div class="about">
      <div class="about-container">
        <div class="container">
          <div class="content">
            <p class="about-title">
              关于我们
            </p>
            <p
              v-if="companyInfo"
              class="about-content"
              v-html="companyInfo.context"
            />
            <div class="about-btn">
              <nuxt-link to="/about/index?tab=0">
                了解更多 →
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 新闻公告 -->
    <div class="news">
      <div class="about-container">
        <div class="n-title">
          <p class="title-top">
            新闻公告
          </p>
        </div>
        <div class="container">
          <div v-for="(item, index) in newsList" :key="index" class="lit">
            <div
              class="news-bg"
              :style="`background:url(${require(`~/static/img/home/home_news${index}.png`)}) no-repeat center`"
            >
              <div class="news-title">
                {{ item.newTypeName }}
              </div>
              <div class="news-mark">
                {{ item.mark }}
              </div>
            </div>
            <div class="news-con">
              <ul>
                <li v-for="(ele, ind) in item.ccNewsResDtos" :key="ind">
                  <p @click="goNewsPage(item.newTypeCode, item.id)">
                    <span class="text-overflow newsTit">
                      {{ ele.newsTitle }}
                    </span>
                    <span class="news-time">{{
                      ele.modifyTime | formatDate('YYYY-MM-DD')
                    }}</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="news-footer">
          <nuxt-link to="/about/index?tab=1">
            查看更多 →
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Swiper from '../../node_modules/swiper/swiper-bundle'

// Import Swiper styles
import '../../node_modules/swiper/swiper-bundle.min.css'
import Banner from '~/components/banner/banner.vue'

export default {
  components: { Banner },
  async asyncData ({ app, $axios, params, query }) {
    // 获取新闻公告信息
    const newsData = await app.$api.home.getNewsTypeInfo({
      pageSize: '3'
    })
    // 获取首页关于我们
    const companyData = await app.$api.pages.getCompanyPage()
    console.log(companyData.data.list[0], 'companyData')
    const companyInfo =
      companyData.data &&
      Array.isArray(companyData.data.list) &&
      companyData.data.list.length > 0
        ? companyData.data.list[0]
        : {}
    const newsList =
      newsData.data &&
      Array.isArray(newsData.data.list) &&
      newsData.data.list.length > 0
        ? newsData.data.list.filter(item => item.status === 0)
        : []
    return {
      newsList,
      companyInfo
    }
  },
  data () {
    return {
      serviceList: [
        {
          tip: '入门型',
          title: '1核1G云服务器',
          describe: '适用小型企业官网或者个人站长',
          cpu: 1,
          memory: 1,
          content: [
            {
              question: '地域',
              answer: '中国北京'
            },
            {
              question: '宽带',
              answer: '1M'
            },
            {
              question: '时长',
              answer: '1个月'
            }
          ]
        },
        {
          tip: '进阶型',
          title: '2核4G云服务器',
          describe: '适用地方与行业门户网站',
          cpu: 2,
          memory: 4,
          content: [
            {
              question: '地域',
              answer: '中国北京'
            },
            {
              question: '宽带',
              answer: '1M'
            },
            {
              question: '时长',
              answer: '1个月'
            }
          ]
        },
        {
          tip: '专业型',
          title: '4核8G云服务器',
          describe: '适用网上商城、团购网',
          cpu: 4,
          memory: 8,
          content: [
            {
              question: '地域',
              answer: '中国北京'
            },
            {
              question: '宽带',
              answer: '1M'
            },
            {
              question: '时长',
              answer: '1个月'
            }
          ]
        },
        {
          tip: '理想型',
          title: '8核16G云服务器',
          describe: '适用社区、网络游戏等其他高端服务',
          cpu: 8,
          memory: 16,
          content: [
            {
              question: '地域',
              answer: '中国北京'
            },
            {
              question: '宽带',
              answer: '1M'
            },
            {
              question: '时长',
              answer: '1个月'
            }
          ]
        }
      ],
      safeList: [
        {
          bg: require('~/static/img/home/home_safe1.png'),
          content: 'IDC/云计算资质'
        },
        {
          bg: require('~/static/img/home/home_safe2.png'),
          content: '阿里云'
        },
        {
          bg: require('~/static/img/home/home_safe3.png'),
          content: '软件著作权'
        },
        {
          bg: require('~/static/img/home/home_safe4.png'),
          content: '中国移动'
        },
        {
          bg: require('~/static/img/home/home_safe5.png'),
          content: '中国电信'
        },
        {
          bg: require('~/static/img/home/home_safe6.png'),
          content: '中国联通'
        }
      ],
      newsList: [],
      choiceList: [
        {
          mark: '稳定',
          title: '稳定放心用',
          bg: require('~/static/img/home/home-choic1.png'),
          content:
            '单实例可用性达99.975%,多可用区多实例可用性达9995%，云盘可靠性达99999999%，可实现自动宕机迁移、快照备份'
        },
        {
          mark: '安全',
          title: '服务器安全护航',
          bg: require('~/static/img/home/home-choic2.png'),
          content:
            '免费提供DDoS防护、木马查杀、防暴力破解等服务，通过多方国际安全认证，ECS云盘支持数据加密功能'
        },
        {
          mark: '赔偿',
          title: '100倍故障赔偿',
          bg: require('~/static/img/home/home-choic3.png'),
          content:
            '由于浙江云盾故障导致产品无法正常使用，我们将提供100倍的故障时间赔偿让您使用舒心。'
        }
      ],
      choiceTwoList: [
        {
          mark: '退款',
          title: '5天无理由退款',
          bg: require('~/static/img/home/home-choic4.png'),
          content:
            '浙江云盾承诺用户购买云服务器5天内无条件退款，致力为您打造更优良的服务器体验环境'
        },
        {
          mark: '客户支持',
          title: '7×24小时多渠道服务支持',
          bg: require('~/static/img/home/home-choic5.png'),
          content:
            '专业的售后工程师团队为您提供7*24*365技术服务，保障产品的无忧使用和业务的稳定运行'
        }
      ],
      solveList: [
        {
          id: 'one',
          title: '网站云解决方案',
          type: 'icon-wangzhan',
          path: '/programme/website',
          content:
            '网站云为企业及开发者提供灵活弹性自动化的基础IT设施建设、按需付费的服务模式及成本的运维服务体系，帮助客户转型，推动企业核心业务创新发展。'
        },
        {
          id: 'two',
          title: '电商云解决方案',
          type: 'icon-a-gouwuche1',
          path: '/programme/online',
          content:
            '电商云帮助电商客户快速实现平台搭建、节约成本、应对业务高并发、强化安全防护能力，助力电商客户快速实现金融创新及业务增收的目标。'
        },
        {
          id: 'three',
          title: '游戏云解决方案',
          type: 'icon-a-youxi1',
          path: '/programme/game',
          content:
            '游戏云为客户游戏开发、游戏运营提供专属服务集群；多场景多类型的游戏部署解决方案，同时提供尊贵VIP售后服务，为客户游戏稳定运行提供基石。'
        },
        {
          id: 'four',
          title: '移动云解决方案',
          type: 'icon-a-shouji13',
          path: '/programme/move',
          content:
            '移动云应用虚拟化系统为客户提供最佳的应用性能及灵活的应用虚拟化服务，帮助客户实现手机、平板电脑等移动设备安全顺畅地访问服务器上各种应用软件。'
        },
        {
          id: 'five',
          title: '金融云解决方案',
          type: 'icon-xianxingduosejinrong',
          path: '/programme/finance',
          content:
            '金融云为客户提供量身定制的云计算服务，IT硬件零投入，云设施运维零维护，高品质保障的售后服务机制，帮助金融用户高效应用云计算服务，是您互联网转型的首选。'
        }
      ],
      companyInfo: null
    }
  },
  computed: {
    ...mapState({
      webInfo: state => state.home.webInfo
    })
  },
  mounted () {
    this.initSwiper()
    this.choiceList[2].content =
      '由于' +
      this.webInfo.title +
      '故障导致产品无法正常使用，我们将提供100倍的故障时间赔偿让您使用舒心。'
    this.choiceTwoList[0].content =
      this.webInfo.title +
      '承诺用户购买云服务器5天内无条件退款，致力为您打造更优良的服务器体验环境'
  },
  methods: {
    // 解决方案轮播
    initSwiper () {
      this.swiper = new Swiper('.mySwiper', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        observer: true,
        observeParents: true,
        loop: true, // 循环模式选项
        slidesPerView: 3.8, // 设置slider容器能够同时显示的slides数量(carousel模式)。
        spaceBetween: -160, // 在slide之间设置距离（单位px）。
        centeredSlides: true // 设置活动块居中
      })
    },
    // 点击跳转新闻公告页面
    goNewsPage (code, id) {
      this.$router.push({
        path: '/about/index?tab=1',
        query: { code, id }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.about-container {
  width: 1220px;
  height: 100%;
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: hidden;
}
// 标题
.title {
  width: 100%;
  height: 150px;
  margin-top: 80px;
  p {
    text-align: center;
  }
  .title-top {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 29px !important;
    color: #333;
  }
  .title-bottom {
    font-size: 16px;
    font-weight: bold;
    color: #778699;
    margin-bottom: 60px;
  }
}
.home {
  background-color: #fff;
  // 服务提供
  .service {
    width: 100%;
    height: 659px;
    overflow: hidden;
    .container {
      display: flex;
      justify-content: space-between;
      .lit {
        width: 292px;
        height: 329px;
        background: #fff;
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.06);
        .service-title {
          position: relative;
          width: 292px;
          height: 120px;
          padding-top: 32px;
          padding-left: 20px;
          background: url(~/static/img/home/home_service.png) no-repeat;
          background-size: cover;
          .service-bg {
            position: absolute;
            top: 0px;
            right: 0px;
            width: 74px;
            height: 25px;
            text-align: center;
            font-size: 14px;
            font-weight: bold;
            color: #fff;
            text-shadow: 0px 3px 21px rgba(82, 106, 113, 0.78);
            background: url(~/static/img/home/home_service1.png) no-repeat;
            background-size: cover;
          }
          p:nth-child(2) {
            font-size: 20px;
            font-weight: bold;
            color: #fff;
          }
          p:nth-child(3) {
            font-size: 14px;
            font-weight: 500;
            color: #fff;
          }
        }
        .service-content {
          width: 292px;
          height: 159px;
          padding-top: 10px;
          padding-left: 24px;
          .service-found {
            display: flex;
            font-size: 14px;
            font-weight: 500;
            margin-top: 10px;
            color: #778699;
            .service-que {
              display: inline-block;
              width: 80px;
            }
            .service-text {
              width: 175px;
              height: 34px;
              line-height: 34px;
              text-align: center;
              outline: none;
              border: 1px solid #eeeeee;
              border-radius: 4px;
            }
          }
        }
        .service-footer {
          width: 292px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          font-size: 18px;
          font-weight: bold;
          color: #fff;
          background: #e8506e;
          box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.06);
          a {
            color: #fff;
          }
        }
      }
    }
  }
  // 选择云盾
  .choice {
    width: 100%;
    height: 698px;
    background: #f9f9f9;
    .container {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      .lit {
        position: relative;
        .lit-top {
          position: absolute;
          top: 0;
          left: 0;
          width: 380px;
          height: 180px;
          font-size: 24px;
          font-weight: bold;
          color: #fff;
          line-height: 180px;
          text-align: center;
          transition: opacity 1s;
          background-size: cover;
        }
        .lit-top:hover {
          opacity: 0;
        }
        .lit-down {
          display: flex;
          width: 380px;
          height: 180px;
          .left {
            width: 170px;
            height: 180px;
            padding-left: 23px;
            padding-top: 30px;
            background-size: cover;
            p {
              width: 130px;
              height: 55px;
              font-size: 24px;
              font-weight: 500;
              color: #fff;
              line-height: 32px;
            }
            .btn {
              width: 98px;
              height: 38px;
              font-size: 14px;
              font-weight: 500;
              color: #fff;
              line-height: 38px;
              text-align: center;
              border: 1px solid #fff;
            }
          }
          .right {
            width: 210px;
            height: 180px;
            padding-left: 25px;
            padding-top: 20px;
            padding-right: 23px;
            background-color: #fff;
            font-size: 14px;
            font-weight: 500;
            color: #333;
            line-height: 28px;
          }
        }
      }
    }
    .container-bottom {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      .lit {
        position: relative;
        .lit-top {
          position: absolute;
          top: 0;
          left: 0;
          width: 585px;
          height: 180px;
          font-size: 24px;
          font-weight: bold;
          color: #fff;
          line-height: 180px;
          text-align: center;
          transition: opacity 1s;
          background-size: cover;
        }
        .lit-top:hover {
          opacity: 0;
        }
        .lit-down {
          display: flex;
          width: 585px;
          height: 180px;
          .left {
            width: 280px;
            height: 180px;
            padding-left: 23px;
            padding-top: 30px;
            background-size: cover;
            p {
              width: 224px;
              height: 55px;
              font-size: 24px;
              font-weight: 500;
              color: #fff;
              line-height: 32px;
            }
            .btn {
              width: 98px;
              height: 38px;
              font-size: 14px;
              font-weight: 500;
              color: #fff;
              line-height: 38px;
              text-align: center;
              border: 1px solid #fff;
            }
          }
          .right {
            width: 305px;
            height: 180px;
            padding-left: 25px;
            padding-top: 20px;
            padding-right: 23px;
            background-color: #fff;
            font-size: 14px;
            font-weight: 500;
            color: #333;
            line-height: 28px;
          }
        }
      }
    }
  }
  // 安全
  .safe {
    width: 100%;
    height: 422px;
    .container {
      display: flex;
      justify-content: space-around;
      .lit {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 140px;
        height: 175px;
        .safe-bg {
          width: 140px;
          height: 140px;
          .bg {
            width: 70px;
            height: 70px;
            margin-left: 35px;
            margin-top: 35px;
            background-size: contain !important;
          }
        }
        .safe-bg:hover {
          background: #fff;
          box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.06);
        }
        .safe-content {
          font-size: 16px;
          font-weight: 500;
          color: #333;
        }
      }
    }
  }
  // 解决方案
  .solve {
    width: 100%;
    height: 670px;
    .swiper-container {
      .mySwiper {
        .swiper-wrapper {
          .swiper-slide {
            position: relative;
            text-align: center;
            width: 360px;
            height: 460px;
            transition: 300ms;
            transform: scale(0.6);
            background-size: cover !important;
            .slide-cover {
              position: absolute;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              top: 0px;
              left: 0px;
              width: 440px;
              height: 460px;
              background: #292e33;
              opacity: 0.7;
              .slide-icon {
                font-size: 80px;
                color: #fff;
                margin-bottom: 20px;
              }
              .slide-line {
                width: 30px;
                height: 4px;
                background: #fff;
                border-radius: 2px;
                margin-bottom: 50px;
              }
              .slide-title {
                font-size: 24px;
                font-weight: bold;
                color: #fff;
              }
              .slide-content {
                display: none;
                width: 268px;
                font-size: 14px;
                text-align: left;
                font-weight: 500;
                color: #fff;
                line-height: 28px;
              }
              .slide-btn {
                display: none;
                width: 40px;
                height: 40px;
                margin-top: 37px;
              }
            }
          }
          .slide-one {
            background: url(~/static/img/home/home_solve3.png) no-repeat center;
          }
          .slide-two {
            background: url(~/static/img/home/home_solve4.png) no-repeat center;
          }
          .slide-three {
            background: url(~/static/img/home/home_solve5.png) no-repeat center;
          }
          .slide-four {
            background: url(~/static/img/home/home_solve1.png) no-repeat center;
          }
          .slide-five {
            background: url(~/static/img/home/home_solve2.png) no-repeat center;
          }
          .swiper-slide-active,
          .swiper-slide-duplicate-active {
            transform: scale(1);
            .slide-cover {
              position: absolute;
              display: flex;
              flex-direction: column;
              justify-content: left;
              align-items: center;
              top: 0px;
              left: 0px;
              width: 440px;
              height: 460px;
              background: #0f6de9;
              opacity: 0.7;
              .slide-icon {
                font-size: 80px;
                color: #fff;
                margin-bottom: 20px;
              }
              .slide-line {
                display: none;
                width: 30px;
                height: 4px;
                background: #fff;
                border-radius: 2px;
                margin-bottom: 50px;
              }
              .slide-title {
                font-size: 24px;
                font-weight: bold;
                color: #fff;
                margin-bottom: 38px;
              }
              .slide-content {
                display: block;
                width: 268px;
                font-size: 14px;
                text-align: left;
                font-weight: 500;
                color: #fff;
                line-height: 28px;
              }
              .slide-btn {
                display: block;
                width: 40px;
                height: 40px;
                margin-top: 18px;
                font-size: 40px;
                a {
                  color: #fff;
                }
              }
            }
          }
          .swiper-slide-next {
            transform: scale(0.8);
            z-index: 998 !important;
          }
          .swiper-slide-prev {
            transform: scale(0.8);
          }
          .swiper-slide-active {
            z-index: 999 !important;
          }
        }
      }
    }
  }
  // 关于我们
  .about {
    width: 100%;
    height: 721px;
    background: url(~/static/img/home/home_about.png) no-repeat;
    background-size: cover;
    .container {
      position: relative;
      .content {
        position: absolute;
        top: 120px;
        right: 0px;
        width: 480px;
        height: 300px;
        .about-title {
          height: 34px;
          margin-bottom: 40px;
          font-size: 36px;
          font-weight: bold;
          color: #333;
        }
        .about-content {
          width: 479px;
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #333;
          margin-bottom: 50px;
          line-height: 30px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
        }
        .about-btn {
          width: 120px;
          height: 38px;
          font-size: 14px;
          font-weight: 500;
          color: #1d7aec;
          line-height: 38px;
          text-align: center;
          border: 1px solid #1d7aec;
        }
      }
    }
  }
  // 新闻公告
  .news {
    width: 100%;
    height: 734px;
    background-color: #f9f9f9;
    .n-title {
      width: 100%;
      height: 100px;
      margin-top: 80px;
      p {
        text-align: center;
      }
      .title-top {
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 29px !important;
        color: #333;
      }
    }
    .container {
      display: flex;
      justify-content: space-around;
      .lit {
        width: 380px;
        height: 363px;
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.06);
        .news-bg {
          width: 380px;
          height: 100px;
          background-size: cover !important;
          overflow: hidden;
        }
        .news-title {
          height: 23px;
          font-size: 24px;
          font-weight: 500;
          color: #fff;
          line-height: 32px;
          text-align: center;
          margin-top: 26px;
          margin-bottom: 16px;
        }
        .news-mark {
          height: 14px;
          text-align: center;
          font-size: 14px;
          font-weight: 500;
          color: #fff;
          line-height: 32px;
        }
        .news-con li {
          position: relative;
          list-style-type: disc !important;
          margin-top: 18px;
          margin-left: 38px;
          font-size: 14px;
          font-weight: 500;
          color: #dae2f2;
          p {
            position: absolute;
            color: #333;
            width: 100%;
            cursor: pointer;
            .newsTit {
              display: inline-block;
              width: 220px;
            }
          }
          .news-time {
            position: absolute;
            right: 20px;
            color: #999999;
          }
        }
      }
    }
    .news-footer {
      margin: 50px auto;
      width: 120px;
      height: 38px;
      background: #f9f9f9;
      border: 1px solid #1d7aec;
      font-size: 14px;
      font-weight: 500;
      color: #1d7aec;
      line-height: 38px;
      text-align: center;
    }
  }
}
</style>
<style>
.swiper-button-prev {
  color: #ccc;
  width: 10px;
  height: 20px;
}
.swiper-button-next {
  color: #ccc;
  width: 10px;
  height: 20px;
}
</style>
