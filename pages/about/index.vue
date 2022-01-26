<template>
  <div class="about-container">
    <!-- 轮播图 -->
    <div class="banner-wrap">
      <Banner :type="{ typeName: 'assurance', typeId: 4 }" />
      <div class="container">
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
            <img :src="companyPicture" alt="">
          </div>
          <div v-if="companypages" class="introduce-info">
            <div class="public-title">
              {{ companypagesPageName || '关于我们' }}
            </div>
            <div class="bottom-line" />
            <div
              class="introduce-text"
              introduce-text
              v-html="companypagesContext"
            />
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
            <!-- 地图 -->
            <div class="contact-img">
              <Map />
            </div>
          </div>
        </div>
      </div>
      <!-- 新闻公告 -->
      <div v-if="tabSelectIndex === 1" class="news">
        <!-- 新闻公告tab栏切换 -->
        <div v-if="!detailSelect" class="newtabs">
          <div
            v-for="(item, index) in newtabsList"
            :key="index"
            :class="
              newsTabSelectIndex === item.id
                ? 'newtabs-item newtabs-active'
                : 'newtabs-item'
            "
            @click="onChangeNewTabs(item.id, item.newTypeCode)"
          >
            {{ item.newTypeName }}
          </div>
        </div>
        <!-- 新闻公告主体部分 -->
        <div v-if="!detailSelect" class="newstabs-content">
          <div
            v-for="(item, index) in newsList"
            :key="index"
            class="newstabs-items"
          >
            <div v-if="item.tittleImage" class="newstab-img">
              <img :src="item.tittleImage">
            </div>
            <div class="newstab-title">
              <div class="newstab-header">
                <h1 @click="getDetail(item.id)">
                  {{ item.newsTitle }}
                </h1>
              </div>
              <div class="newstab-about">
                {{ item.seoDescribe }}
              </div>
              <div class="newstab-footer">
                <div class="time">
                  <a-icon type="clock-circle" class="icon" />
                  {{ item.newsPublishTime | formatDate }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 分页功能 -->
        <div v-show="newsList.length > 8 && !detailSelect" class="pagination">
          <a-pagination
            v-model="current"
            :hide-on-single-page="true"
            :total="total"
            :page-size="pageSize"
            @change="pageChange(current, pageSize, firstCode)"
          />
        </div>
        <!-- 新闻公告详情部分 -->
        <div v-if="detailSelect" class="news-content">
          <div class="news-title">
            <a-icon type="left" @click="backContent()" />
            {{ newsDetail.newsTitle }}
          </div>
          <div class="news-name">
            <!-- <span class="left">最新</span> -->
            <span class="right">
              <span>发布时间：</span>{{ newsDetail.newsPublishTime | formatDate }}
              <span>|</span>
              <span>作者：</span>{{ newsDetail.createUserName }}
            </span>
          </div>
          <div class="news-cont">
            <div v-html="newsDetail.context">
              {{ newsDetail.context }}
            </div>
          </div>
        </div>
      </div>
      <!-- 法律声明 -->
      <Statement v-if="tabSelectIndex === 2" />
      <!-- 友情链接 -->
      <div v-if="tabSelectIndex === 3" class="friendship">
        <div class="info-con">
          <div class="public-box">
            交换链接说明
            <div class="bottom-line" />
          </div>
          <p class="info1">
            符合PR>=5，Alexa排名20,000以内的网站，可以和
            {{ websiteInfo.websiteName }}
            相互添加网站链接，具体操作方式如下：
          </p>
          <div class="step-box">
            <div class="share-link-left-title">
              在贵站添加{{ websiteInfo.websiteName }}链接
            </div>
            <p class="share-link-left-title-introduce">
              您可以根据下方提示，在您的网站中插入
              {{ websiteInfo.websiteName }}
              的文字链接、图片链接代码。
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
                <div class="code-box">
                  <a
                    target="_blank"
                    :href="websiteInfo.internationalSiteAddress"
                  >{{ websiteInfo.websiteName }}</a>
                </div>
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
                <div class="code-box">
                  <div class="img-box">
                    <a
                      target="_blank"
                      :href="websiteInfo.internationalSiteAddress"
                    ><img
                      :src="websiteInfo.websiteLogo"
                      alt=""
                    ></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="share-link-left-title share-link-left-title2">
              将贵站链接邮件给我们
            </div>
            <div
              class="share-link-left-title-introduce"
              style="margin-bottom: 34px"
            >
              完成第一步后，将贵站链接邮件至
              <a href="mailto:service@ydidc.com">{{ webInfo.email }}</a>
            </div>
            <div class="share-link-left-title share-link-left-title3">
              {{ websiteInfo.websiteName }}审核回复
            </div>
            <p class="share-link-left-title-introduce">
              收到邮件后，我们会于5个工作日内尽快审核并回复。
            </p>
          </div>
        </div>
        <div class="links">
          <div class="public-box">
            友情链接
            <div class="bottom-line" />
          </div>
          <a
            v-for="(item, index) in linkList"
            :key="index"
            :href="item.linkUrl"
            class="item"
            target="_blank"
          >
            <img :src="item.linkLogo" :alt="item.linkName">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Banner from '~/components/banner/banner.vue'
import Statement from '@/components/About/statement'
import Map from '@/components/Map'
export default {
  components: { Statement, Banner, Map },
  async asyncData ({ app, query }) {
    // 获取公司网站信息
    const websiteData = await app.$api.home.getWebInfo()
    // 获取公司简介
    const newsData = await app.$api.pages.getCompanyPage()
    let companyInfo = []
    if (newsData.data && newsData.data.list) {
      companyInfo = newsData.data.list.filter(item => item.status === 0)
    }
    // 获取新闻类别
    const typeData = await app.$api.news.getAllNewsList({
      currentPage: 1,
      pageSize: 999
    })
    let typeTabs = []
    let typeCode = ''
    if (typeData.data && typeData.data.list) {
      typeTabs = typeData.data.list.filter(item => item.status === 0)
      typeCode = typeTabs[0]?.newTypeCode
    }
    if (query.code) {
      typeCode = query.code
    }
    let select = typeTabs[0]?.id
    if (query.id) {
      select = query?.id
    }
    // 获取新闻类别信息
    let detailData = []
    if (typeTabs.length > 0) {
      const res = await app.$api.news.getNews({
        currentPage: 1,
        pageSize: 999,
        newTypeCode: typeCode
      })
      detailData = res.data.list
    }
    return {
      companypages: companyInfo,
      companypagesPageName: newsData.data?.list[0].pageName,
      companypagesContext: newsData.data?.list[0].context,
      companyPicture: newsData.data?.list[0].bannerPicture,
      websiteInfo: websiteData.data?.list[0],
      txtCode: `<a target="_blank" href="${websiteData.data?.list[0].internationalSiteAddress}">${websiteData.data?.list[0].websiteName}</a>`,
      imgCode1: `<a target="_blank" href="${websiteData.data?.list[0].internationalSiteAddress}">`,
      imgCode2: `<img src="${websiteData.data?.list[0].websiteLogo}">`,
      newtabsList: typeTabs,
      newsList: detailData,
      firstCode: typeCode,
      total: Number(detailData.data?.totalCount),
      newsTabSelectIndex: select
    }
  },
  data () {
    return {
      tabList: ['公司简介', '新闻公告', '法律声明', '友情链接'],
      newtabsList: [],
      firstCode: '',
      newsList: [],
      newsDetail: [],
      detailSelect: false,
      tabSelectIndex: 0,
      linkList: [
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
      loading: false,
      companypages: [],
      current: 1,
      pageSize: 8,
      total: 0
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
      handler (route) {
        this.tabSelectIndex = route.query.tab * 1
      },
      immediate: true
    }
  },
  mounted () {
    this.getWebInfo()
  },
  methods: {
    // tab选择
    onChangeTab (index) {
      this.tabSelectIndex = index
      // this.$router.push({ path: `/pc/about/index?tab=${index}` })
    },
    // 新闻公告tab选择
    onChangeNewTabs (ind, item) {
      this.newsTabSelectIndex = ind
      this.getNewsListInfo(1, 999, item)
      // this.getNewsInfo()
      this.firstCode = item
      this.current = 1
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
    // 获取新闻类别
    async getNewsInfo () {
      const newsData = await this.$api.news.getAllNewsList({
        currentPage: 1,
        pageSize: 999
      })
      this.newtabsList = newsData.data.list
      console.log('新闻类别', this.newtabsList)
      this.getNewsListInfo(this.newtabsList[0].newTypeCode)
    },
    // 获取新闻类别信息
    async getNewsListInfo (current, pageSize, code) {
      const newsData = await this.$api.news.getNews({
        currentPage: current || 1,
        pageSize: pageSize || 8,
        newTypeCode: code
      })
      this.newsList = newsData.data?.list || []
      this.total = Number(newsData.data?.totalCount) || 0
    },
    // 进入详情页面
    async getDetail (id) {
      this.detailSelect = true
      const newData = await this.$api.news.getOneNews(id)
      this.newsDetail = newData.data
    },
    // 回退新闻内容页面
    backContent () {
      this.detailSelect = false
    },
    // 页码功能
    pageChange (current, pageSize, code) {
      this.getNewsListInfo(current, pageSize, code)
    },
    // 获取友情链接
    async getWebInfo () {
      const linksData = await this.$api.home.getFriendLink()
      this.linkList = linksData.data.list.filter(item => item.status === 0)
      console.log('友情链接', this.linkList)
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
    height: 576px;
    min-width: 1220px;
    overflow: hidden;
    background: url('https://ydidc-test.oss-cn-shanghai.aliyuncs.com/idc-mall/about/banner.png') center #0a1d46 no-repeat;
    background-size: cover;
    color: #fff;
    .container {
      position: relative;
      height: 80px;
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
        color: #fff;
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
        bottom: 80px;
        right: 0;
        z-index: 9999;
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
        bottom: 80px;
        transform: translateX(-650px);
        width: 3000px;
        height: 80px;
        background: #091937;
        opacity: 0.5;
      }
    }
  }
  .about-content {
    min-height: 500px;
    .public-box {
      width: 100%;
      height: 54px;
      font-size: 20px;
      font-weight: 500;
      color: #1d7aec;
      line-height: 52px;
      border-bottom: 1px solid #f1f1f1;
      margin-bottom: 38px;
      .bottom-line {
        width: 30px;
        height: 2px;
        background: #1d7aec;
      }
    }
    .public-title {
      font-size: 36px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #333;
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
          .introduce-text {
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
                  color: #333;
                }
              }
            }
          }
          .contact-img {
            width: 610px;
            height: 300px;
          }
        }
      }
    }
    .news {
      .newtabs {
        display: flex;
        justify-content: flex-start;
        border-bottom: 1px solid #f1f1f1;
        margin-bottom: 20px;
        .newtabs-item {
          margin-right: 60px;
          margin-top: 30px;
          padding-bottom: 17px;
          cursor: pointer;
        }
        .newtabs-active {
          border-bottom: 2px solid #1d7aec;
        }
      }
      .pagination {
        display: flex;
        justify-content: center;
        margin: 20px 0;
      }
      .newstabs-content {
        margin-top: 30px;
        padding-bottom: 20px;
        .newstabs-items {
          display: flex;
          justify-content: flex-start;
          width: 100%;
          border-bottom: 1px solid #f1f1f1;
          margin-top: 20px;
          .newstab-img {
            width: 220px;
            height: 140px;
            margin-right: 30px;
            border-radius: 8px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .newstab-title {
            padding-bottom: 30px;
            .newstab-header {
              display: flex;
              justify-content: flex-start;
              height: 30px;
              line-height: 30px;
              h1 {
                font-size: 16px;
                font-weight: bold;
                color: #333;
                line-height: 30px;
                cursor: pointer;
              }
              .news-time {
                margin: auto 10px;
                text-align: center;
                width: 40px;
                height: 18px;
                line-height: 18px;
                background: #fff;
                border: 1px solid #1d7aec;
                border-radius: 8px;
              }
              .news-trends {
                margin: auto 0px;
                text-align: center;
                width: 76px;
                height: 20px;
                line-height: 20px;
                background: #f5f5f5;
                border: 1px solid #dddddd;
                border-radius: 8px;
              }
            }
            .newstab-about {
              margin: 16px 0 26px 0;
              font-size: 14px;
              font-weight: normal;
              line-height: 26px;
            }
            .newstab-footer {
              display: flex;
              justify-content: flex-start;
              font-size: 14px;
              color: #999;
              .icon {
                margin-right: 8px;
              }
              .time {
                margin-right: 40px;
              }
            }
          }
        }
      }
      .news-content {
        height: 900px;
        padding: 60px 0 103px 0;
        .news-title {
          font-size: 24px;
          font-weight: 500;
          color: #333;
          margin-bottom: 20px;
        }
        .news-name {
          width: 100%;
          height: 16px;
          margin-bottom: 50px;
          .left {
            display: inline-block;
            width: 40px;
            height: 18px;
            line-height: 16px;
            text-align: center;
            border: 1px solid #005dad;
            border-radius: 8px;
            margin-right: 20px;
          }
          .right {
            display: inline-block;
            width: 424px;
            height: 16px;
            font-size: 12px;
            font-weight: 500;
            color: #999999;
            line-height: 60px;
          }
        }
        .news-cont {
          .news-img {
            float: left;
            width: 424px;
            height: 230px;
            margin-right: 30px;
            margin-bottom: 10px;
            background-color: red;
          }
          p {
            margin-bottom: 2em;
          }
        }
      }
    }

    .friendship {
      overflow: hidden;
      padding-top: 58px;
      .links {
        display: flex;
        flex-wrap: wrap;
        margin-top: 36px;
        padding-bottom: 60px;
        .item {
          display: inline-block;
          width: 200px;
          height: 76px;
          margin-right: 30px;
          background: #fff;
          box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.06);
          img {
            width: 100%;
            height: 100%;
          }
        }

        .item:hover {
          box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
        }
      }
      .info-con {
        font-size: 14px;
        line-height: 14px;
        color: #666;
        height: 775px;
        border-bottom: 10px solid #f1f1f1;
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
            line-height: 30px;
            font-size: 16px;
            font-weight: bold;
            color: #333;
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
            .code-box {
              width: 498px;
              background-color: #fafafa;
              padding: 6px 20px;
              font-size: 14px;
              div {
                margin: 2px 0;
              }
              div:nth-child(2) {
                margin-left: 15px;
              }
            }
            .left {
              .btn-box {
                display: flex;
                margin: 20px 0 30px 0;
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
<style>
.about-content img {
  /* float: left;
  margin: 5px; */
  vertical-align: text-top;
}
.news-content img {
  float: left;
  margin-right: 10px;
}
</style>
