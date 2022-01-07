<template>
  <div class="about-container">
    <!-- 轮播图 -->
    <div class="banner-wrap">
      <div class="container">
        <p>杭州云盾科技</p>
        <p>质量为本、客户为根、勇于拼搏、务实创新</p>
        <div class="product">
          了解产品
        </div>
        
        <div class="tabs">
          <div
            v-for="(item, index) in tabList"
            :key="index"
            :class="tabSelectIndex === index ? 'tab-item active' : 'tab-item'"
            @click="onChangeTab(index)"
          >
            {{ item }}
          </div>
        </div>
        <div class="tabs-container" />
      </div>
    </div>
    <!-- 主体部分 -->
    <div class="about-content container">
      <!-- 公司简介 -->
      <div v-if="tabSelectIndex === 0" class="introduce">
        <div class="introduce-all">
          <div class="introduce-img">
            <img src="~/static/img/about/company.png" alt="">
          </div>
          <div class="introduce-info">
            <div class="public-title">
              公司简介
            </div>
            <div class="bottom-line" />
            <p>
              公司成立于2007年，是国内领先的互联网业务平台服务提供商。公司专注为用户提供低价高性能云计算产品，致力于云计算应用的易用性开发，并引导云计算在国内普及。目前公司研发以及运营云服务基础设施服务平台（IaaS），面向全球客户提供基于云计算的IT解决方案与客户服务，拥有丰富的国内BGP、双线高防、香港等优质的IDC资源。
            </p>
            <p>
              公司一直秉承"以人为本、客户为尊、永续创新"的价值观，坚持"以微笑收获友善，
              以尊重收获理解，以责任收获支持，以谦卑收获成长"的行为观向客户提供全面优质的互联网应用服务。
            </p>
          </div>
        </div>
        <div class="contact-all">
          <div class="container contact">
            <div class="contact-info">
              <div class="public-title">
                联系方式
              </div>
              <div class="list">
                <div
                  class="item"
                  :style="{
                    backgroundImage: `url(${require('~/static/img/about/contact_tel.png')})`
                  }"
                >
                  <div class="title">
                    <div>全国咨询电话</div>
                    {{ webInfo.serverPhone }}
                  </div>
                </div>
                <div
                  class="item"
                  :style="{
                    backgroundImage: `url(${require('~/static/img/about/contact_qq.png')})`
                  }"
                >
                  <div class="title">
                    <div>QQ咨询</div>
                    {{ webInfo.qqNumber }}
                  </div>
                </div>
                <div
                  class="item"
                  :style="{
                    backgroundImage: `url(${require('~/static/img/about/contact_email.png')})`
                  }"
                >
                  <div class="title">
                    <div>邮箱/E-mail</div>
                    {{ webInfo.email }}
                  </div>
                </div>
                <div
                  class="item"
                  :style="{
                    backgroundImage: `url(${require('~/static/img/about/contact_postage.png')})`
                  }"
                >
                  <div class="title">
                    <div>邮政编码</div>
                    {{ webInfo.postcode || '311200' }}
                  </div>
                </div>
              </div>
            </div>
            <div class="contact-img">
              1
            </div>
          </div>
        </div>
      </div>
      <!-- 新闻公告 -->
      <div v-if="tabSelectIndex === 1" class="news">
        <div />
        <div class="public-box">
          新闻公告
        </div>
      </div>
      <!-- 法律声明 -->
      <Statement v-if="tabSelectIndex === 2" />
      <!-- 友情链接 -->
      <div v-if="tabSelectIndex === 3" class="friendship">
        <div class="links">
          <a
            v-for="(item, index) in linkList"
            :key="index"
            :href="item.path"
            class="item"
            target="_blank"
          >
            <img :src="item.img" :alt="item.name">
          </a>
        </div>
        <div class="info-con">
          <div class="public-box">
            交换链接说明
          </div>
          <p class="info1">
            符合PR>=5，Alexa排名20,000以内的网站，可以和浙江云盾相互添加网站链接，具体操作方式如下：
          </p>
          <div class="step-box">
            <div class="share-link-left-title">
              在贵站添加浙江云盾链接
            </div>
            <p class="share-link-left-title-introduce">
              您可以根据下方提示，在您的网站中插入浙江云盾的文字链接、图片链接代码。
            </p>
            <div class="share-code-title">
              文字链接代码：
            </div>
            <div class="code-wrap">
              <div class="left">
                <div class="code-box" v-text="txtCode" />
                <div class="btn-box">
                  <div class="btn" @click="handleCopy('txt')">
                    复制代码
                  </div>
                  <div class="success" :style="`opacity:${txtMessage ? 1 : 0}`">
                    您已复制成功
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="share-code-title">
                  文字预览效果：
                </div>
                <a target="_blank" href="#">浙江云盾</a>
              </div>
            </div>
            <div class="share-code-title">
              图片链接代码：
            </div>
            <div class="code-wrap">
              <div class="left">
                <div class="code-box">
                  <div v-text="imgCode1" />
                  <div v-text="imgCode2" />
                  <div v-text="imgCode3" />
                </div>
                <div class="btn-box">
                  <div class="btn" @click="handleCopy('img')">
                    复制代码
                  </div>
                  <div class="success" :style="`opacity:${imgMessage ? 1 : 0}`">
                    您已复制成功
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="share-code-title">
                  图片预览效果：
                </div>
                <div class="img-box">
                  <img src="https://ydidc.com/logo_small.gif" alt="">
                </div>
              </div>
            </div>
            <div class="share-link-left-title share-link-left-title2">
              将贵站链接邮件给我们
            </div>
            <p
              class="share-link-left-title-introduce"
              style="margin-bottom: 34px"
            >
              完成第一步后，将贵站链接邮件至
              <a href="mailto:service@ydidc.com">service@ydidc.com</a>
            </p>
            <div class="share-link-left-title share-link-left-title3">
              浙江云盾审核回复
            </div>
            <p class="share-link-left-title-introduce">
              收到邮件后，我们会于5个工作日内尽快审核并回复。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Statement from '@/components/About/statement'
export default {
  components: { Statement },
  data () {
    return {
      tabList: ['公司简介', '新闻公告', '法律声明', '友情链接'],
      tabSelectIndex: 0,
      linkList: [
        {
          name: '阿里云',
          path: 'https://www.aliyun.com/',
          img: require('~/static/img/about/60c480641dab2.jpg')
        },
        {
          name: '阿里云',
          path: 'https://www.aliyun.com/',
          img: require('~/static/img/about/60c480641dab2.jpg')
        },
        {
          name: '阿里云',
          path: 'https://www.aliyun.com/',
          img: require('~/static/img/about/60c480641dab2.jpg')
        }
      ],
      txtCode: '<a target="_blank" href="https://ydidc.com">浙江云盾</a>',
      imgCode1: '<a target="_blank" href="https://ydidc.com">',
      imgCode2: '<img src="https://ydidc.com/logo_small.gif">',
      imgCode3: '</a>',
      txtMessage: false,
      imgMessage: false,
      loading: false
    }
  },
  computed: {
    ...mapState({
      friendLinks: state => state.home.friendLinks,
      webInfo: state => state.home.webInfo
    })
  },
  watch: {
    $route: {
      immediate: true,
      handler (route) {
        this.tabSelectIndex = route.query.tab * 1
      }
    }
  },
  created () {
    this.getNewsInfo()
  },
  methods: {
    // tab选择
    onChangeTab (index) {
      this.tabSelectIndex = index
    },
    // 点击复制
    handleCopy (type) {
      if (this.loading) {
        return
      }
      this.loading = true
      const txt =
        type === 'txt'
          ? this.txtCode
          : this.imgCode1 + this.imgCode2 + this.imgCode3
      this.$copyText(txt).then((e) => {
        if (type === 'txt') {
          this.txtMessage = true
        } else {
          this.imgMessage = true
        }
        setTimeout(() => {
          if (type === 'txt') {
            this.txtMessage = false
          } else {
            this.imgMessage = false
          }
          this.loading = false
        }, 1000)
      })
    },
    // 获取新闻信息
    async getNewsInfo () {
      const newsData = await this.$api.news.getAllNewsList()
      console.log('newsData', newsData)
    }
  }
}
</script>

<style lang="scss" scoped>
.about-container {
  background: #fff;
  .banner-wrap {
    position: relative;
    top: 0px;
    height: 657px;
    min-width: 1220px;
    overflow: hidden;
    background: url('~/static/img/about/banner.png') center #0a1d46 no-repeat;
    background-size: cover;
    padding-top: 155px;
    color: #fff;
    .container {
      position: relative;
      height: 100%;
      .product {
        position: absolute;
        top: 234px;
        left: 50%;
        transform: translateX(-50%);
        width: 220px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        background: linear-gradient(169deg, #0b73f0, #2fb4ff);
        border-radius: 30px;
        font-size: 20px;
        font-weight: 500;
        color: #ffffff;
      }
      p:nth-child(1) {
        font-size: 36px;
        margin: 0 0 35px;
        text-align: center;
      }
      p:nth-child(2) {
        line-height: 24px;
        font-size: 14px;
        text-align: center;
        margin: 0;
      }
      .tabs {
        height: 80px;
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 5;
        display: flex;
        .tab-item {
          width: 25%;
          font-size: 18px;
          text-align: center;
          line-height: 80px;
          cursor: pointer;
        }
        .tab-item:hover {
          background: #1d7aec;
        }
        .active {
          background: #1d7aec;
        }
      }
      .tabs-container {
        position: absolute;
        bottom: 0px;
        transform: translateX(-350px);
        width: 2000px;
        height: 80px;
        background: #091937;
        opacity: 0.5;
      }
    }
  }
  .about-content {
    min-height: 500px;
    .public-box {
      margin: 34px 0;
      padding-left: 20px;
      height: 24px;
      border-left: 6px solid #059fff;
      line-height: 24px;
      font-size: 18px;
      text-align: left;
      color: #059fff;
    }
    .public-title {
      font-size: 36px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #333333;
    }
    .introduce {
      height: 1200px;
      .introduce-all {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 100px 0;
        width: 100%;
        height: 700px;
        background-color: #fff;
        .introduce-img {
          width: 610px;
          height: 500px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .introduce-info {
          width: 610px;
          height: 500px;
          padding: 48px 120px 95px;
          .bottom-line {
            width: 50px;
            height: 3px;
            margin: 32px 0 29px 0;
            background: #0257b2;
          }
          p {
            font-size: 16px;
            font-weight: 500;
            color: #666666;
          }
        }
      }
      .contact-all {
        position: absolute;
        left: 0px;
        width: 100%;
        height: 500px;
        background-color: #f8fafb;
        .contact {
          display: flex;
          justify-content: space-between;
          box-sizing: border-box;
          padding: 100px 0;
          .contact-info {
            width: 610px;
            height: 300px;
            .list {
              display: flex;
              flex-wrap: wrap;
              margin-top: 70px;
              .item {
                margin-bottom: 60px;
                width: 49%;
                height: 46px;
                padding-left: 70px;
                background: no-repeat left center;
                background-size: contain;
                text-align: left;
                .title {
                  font-size: 16px;
                  font-weight: 500;
                  color: #333333;
                }
              }
            }
          }
          .contact-img {
            width: 610px;
            height: 300px;
            background-color: red;
          }
        }
      }
    }
    .friendship {
      overflow: hidden;
      padding: 58px 0;
      .links {
        display: flex;
        flex-wrap: wrap;
        margin-top: 36px;
        padding-bottom: 60px;
        border-bottom: 1px solid #e6e6e6;
        .item {
          display: inline-block;
          width: 25%;
          height: 120px;
          border: 1px solid #e6e6e6;
          border-right: none;
          border-top: none;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .item:last-child {
          border-right: 1px solid #e6e6e6;
        }
        .item:nth-child(1),
        .item:nth-child(2),
        .item:nth-child(3),
        .item:nth-child(4) {
          border-top: 1px solid #e6e6e6;
        }
        .item:hover {
          box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
        }
      }
      .info-con {
        font-size: 14px;
        line-height: 14px;
        color: #666;
        .info1 {
          margin-bottom: 35px;
        }
        .step-box {
          width: 90%;
          height: 530px;
          padding-left: 50px;
          margin-bottom: 100px;
          background: url('~/static/img/about/links-share-virtical-bg.png')
            no-repeat 0 0;
          .share-link-left-title {
            margin-bottom: 10px;
            font-size: 18px;
            line-height: 30px;
            color: #059fff;
          }
          .share-link-left-title2 {
            margin-top: 55px;
          }
          .share-code-title {
            color: #999;
            font-size: 14px;
            margin-left: 20px;
          }
          .code-wrap {
            margin: 15px 0 0 20px;
            display: flex;
            .left {
              .code-box {
                width: 498px;
                background-color: #fff;
                color: #666;
                padding: 6px 20px;
                font-size: 14px;
                border: 1px solid #e5e5e5;
                div {
                  margin: 2px 0;
                }
                div:nth-child(2) {
                  margin-left: 15px;
                }
              }
              .btn-box {
                display: flex;
                margin: 10px 0 20px 0;
                .btn {
                  width: 100px;
                  height: 30px;
                  line-height: 30px;
                  font-size: 14px;
                  border-radius: 2px;
                  background: #059fff;
                  color: #fff;
                  text-align: center;
                  cursor: pointer;
                }
                .success {
                  height: 30px;
                  line-height: 30px;
                  margin-left: 15px;
                  padding-left: 24px;
                  background: url('~/static/img/about/links-ok.png') no-repeat 0
                    center;
                  font-size: 14px;
                  color: #ff8800;
                  transition: opacity 0.3s;
                }
              }
            }
            .right {
              margin-left: 300px;
              margin-top: -20px;
              .share-code-title {
                margin-left: 0;
                margin-bottom: 13px;
              }
              a {
                color: #0000ee;
              }
              .img-box {
                width: 122px;
                height: 44px;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
