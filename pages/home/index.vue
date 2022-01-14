<template>
  <div class="home">
    <!-- 轮播图 -->
    <Banner type="home" />
    <!-- 服务提供 -->
    <div class="service">
      <div class="w">
        <div class="title">
          <p class="title-top">
            浙江云盾为您提供高速、稳定、安全、弹性的云计算服务
          </p>
          <p class="title-bottom">
            根据不同应用场景推荐适合您的最优质服务器，满足您一切需求
          </p>
        </div>
        <div class="container">
          <div v-for="(item, index) in serviceList" :key="index" class="lit">
            <div class="service-title">
              <div class="service-bg">
                入门型
              </div>
              <p>2核2G云服务器</p>
              <p>适用小型企业官网或者个人站长</p>
            </div>
            <div class="service-content">
              <div
                v-for="(it, ind) in item.content"
                :key="ind"
                class="service-found"
              >
                <span>{{ it.question }}</span>
                <input type="text" :value="it.answer">
              </div>
            </div>
            <div class="service-footer">
              立即购买
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 选择云盾 -->
    <div class="choice">
      <div class="w">
        <div class="title">
          <p class="title-top">
            为什么选择浙江云盾
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
      <div class="w">
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
      <div class="w">
        <div class="title">
          <p class="title-top">
            解决方案
          </p>
          <p class="title-bottom">
            根据行业特性，为您提供高可用、安全的解决方案
          </p>
        </div>
      </div>
    </div>
    <!-- 关于我们 -->
    <div class="about">
      <div class="w">
        <div class="container">
          <div class="content">
            <p class="about-title">
              关于我们
            </p>
            <p class="about-content">
              公司成立于2007年，是国内领先的互联网业务平台服务致力于云计算应用的易用性开发，并引导云计算在国内普及。目前公司研发以及运营云服务基础设施服务平台(laaS)
              ,面向全球客户提供基于云计算的IT解决方案与客户服务，拥有丰富的国内BGP、双线高防、香港等优质的IDC资源。
            </p>
            <div class="about-btn">
              了解更多 →
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 新闻公告 -->
    <div class="news">
      <div class="w">
        <div class="n-title">
          <p class="title-top">
            新闻公告
          </p>
        </div>
        <div class="container">
          <div v-for="(item, index) in newsList" :key="index" class="lit">
            <div
              class="news-bg"
              :style="`background:url(${item.bg}) no-repeat center`"
            >
              <div class="news-title">
                {{ item.title }}
              </div>
              <div class="news-mark">
                {{ item.mark }}
              </div>
            </div>
            <div class="news-con">
              <ul>
                <li v-for="(it, ind) in item.content" :key="ind">
                  <p>
                    {{ it.con }} <span class="news-time">{{ it.time }}</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="news-footer">
          查看更多 →
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '~/components/product/banner.vue'
export default {
  components: { Banner },
  data () {
    return {
      serviceList: [
        {
          content: [
            {
              question: '地域',
              answer: '中国大连'
            },
            {
              question: '宽带',
              answer: '5M'
            },
            {
              question: '默认防护',
              answer: '5/20G'
            },
            {
              question: '时长',
              answer: '一个月'
            },
            {
              question: '价格',
              answer: '￥81.7'
            }
          ]
        },
        {
          content: [
            {
              question: '地域',
              answer: '中国大连'
            },
            {
              question: '宽带',
              answer: '5M'
            },
            {
              question: '默认防护',
              answer: '5/20G'
            },
            {
              question: '时长',
              answer: '一个月'
            },
            {
              question: '价格',
              answer: '￥81.7'
            }
          ]
        },
        {
          content: [
            {
              question: '地域',
              answer: '中国大连'
            },
            {
              question: '宽带',
              answer: '5M'
            },
            {
              question: '默认防护',
              answer: '5/20G'
            },
            {
              question: '时长',
              answer: '一个月'
            },
            {
              question: '价格',
              answer: '￥81.7'
            }
          ]
        },
        {
          content: [
            {
              question: '地域',
              answer: '中国大连'
            },
            {
              question: '宽带',
              answer: '5M'
            },
            {
              question: '默认防护',
              answer: '5/20G'
            },
            {
              question: '时长',
              answer: '一个月'
            },
            {
              question: '价格',
              answer: '￥81.7'
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
      newsList: [
        {
          bg: require('~/static/img/home/home_news1.png'),
          title: '官方公告',
          mark: '了解官方最新动态',
          content: [
            { con: '了解最新资讯了解最新资讯...', time: '2021-10-10' },
            { con: '了解最新资讯了解最新资讯...', time: '2021-10-10' },
            { con: '了解最新资讯了解最新资讯...', time: '2021-10-10' },
            { con: '了解最新资讯了解最新资讯...', time: '2021-10-10' },
            { con: '了解最新资讯了解最新资讯...', time: '2021-10-10' },
            { con: '了解最新资讯了解最新资讯...', time: '2021-10-10' }
          ]
        },
        {
          bg: require('~/static/img/home/home_news2.png'),
          title: '最新活动',
          mark: '最新活动等你来抢',
          content: [
            { con: '了解最新资讯了解最新资讯...', time: '2021-10-10' },
            { con: '了解最新资讯了解最新资讯...', time: '2021-10-10' },
            { con: '了解最新资讯了解最新资讯...', time: '2021-10-10' },
            { con: '了解最新资讯了解最新资讯...', time: '2021-10-10' },
            { con: '了解最新资讯了解最新资讯...', time: '2021-10-10' },
            { con: '了解最新资讯了解最新资讯...', time: '2021-10-10' }
          ]
        },
        {
          bg: require('~/static/img/home/home_news3.png'),
          title: '业内新闻',
          mark: '了解最新业内资讯',
          content: [
            { con: '了解最新资讯了解最新资讯...', time: '2021-10-10' },
            { con: '了解最新资讯了解最新资讯...', time: '2021-10-10' },
            { con: '了解最新资讯了解最新资讯...', time: '2021-10-10' },
            { con: '了解最新资讯了解最新资讯...', time: '2021-10-10' },
            { con: '了解最新资讯了解最新资讯...', time: '2021-10-10' },
            { con: '了解最新资讯了解最新资讯...', time: '2021-10-10' }
          ]
        }
      ],
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
          title: '稳定放心用',
          bg: require('~/static/img/home/home-choic2.png'),
          content:
            '单实例可用性达99.975%,多可用区多实例可用性达9995%，云盘可靠性达99999999%，可实现自动宕机迁移、快照备份'
        },
        {
          mark: '赔偿',
          title: '稳定放心用',
          bg: require('~/static/img/home/home-choic3.png'),
          content:
            '单实例可用性达99.975%,多可用区多实例可用性达9995%，云盘可靠性达99999999%，可实现自动宕机迁移、快照备份'
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
            '专业的售后工程师团队未您提供7*24*365技术服务，保障产品的无忧使用和业务的稳定运行'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
// 版心
.w {
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
    color: #333333;
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
    height: 759px;
    overflow: hidden;
    .container {
      display: flex;
      justify-content: space-between;
      .lit {
        width: 292px;
        height: 429px;
        background: #ffffff;
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
            color: #ffffff;
            text-shadow: 0px 3px 21px rgba(82, 106, 113, 0.78);
            background: url(~/static/img/home/home_service1.png) no-repeat;
            background-size: cover;
          }
          p:nth-child(2) {
            font-size: 20px;
            font-weight: bold;
            color: #ffffff;
          }
          p:nth-child(3) {
            font-size: 14px;
            font-weight: 500;
            color: #ffffff;
          }
        }
        .service-content {
          width: 292px;
          height: 259px;
          padding-top: 10px;
          padding-left: 24px;
          .service-found {
            font-size: 14px;
            font-weight: 500;
            margin-top: 10px;
            color: #778699;
            span {
              display: inline-block;
              width: 80px;
            }
            input {
              width: 175px;
              height: 34px;
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
          color: #ffffff;
          background: #e8506e;
          box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.06);
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
          color: #ffffff;
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
              color: #ffffff;
              line-height: 32px;
            }
            .btn {
              width: 98px;
              height: 38px;
              font-size: 14px;
              font-weight: 500;
              color: #ffffff;
              line-height: 38px;
              text-align: center;
              border: 1px solid #ffffff;
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
            color: #333333;
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
          color: #ffffff;
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
              color: #ffffff;
              line-height: 32px;
            }
            .btn {
              width: 98px;
              height: 38px;
              font-size: 14px;
              font-weight: 500;
              color: #ffffff;
              line-height: 38px;
              text-align: center;
              border: 1px solid #ffffff;
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
            color: #333333;
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
          background: #ffffff;
          box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.06);
        }
        .safe-content {
          font-size: 16px;
          font-weight: 500;
          color: #333333;
        }
      }
    }
  }
  // 解决方案
  .solve {
    width: 100%;
    height: 670px;
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
          color: #333333;
        }
        .about-content {
          width: 479px;
          height: 135px;
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #333333;
          margin-bottom: 50px;
          line-height: 30px;
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
        color: #333333;
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
          color: #ffffff;
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
          color: #ffffff;
          line-height: 32px;
        }
        .news-con li {
          list-style-type: disc !important;
          margin-top: 18px;
          margin-left: 38px;
          font-size: 14px;
          font-weight: 500;
          color: #dae2f2;
          p {
            position: relative;
            color: #333333;
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
