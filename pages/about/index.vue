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
          <div v-if="companypages[1]" class="introduce-info">
            <div class="public-title">
              {{ companypages[1].pageName }}
            </div>
            <div class="bottom-line" />
            <p>{{ companypages[1].context }}</p>
            <!-- <p>
              公司成立于2007年，是国内领先的互联网业务平台服务提供商。公司专注为用户提供低价高性能云计算产品，致力于云计算应用的易用性开发，并引导云计算在国内普及。目前公司研发以及运营云服务基础设施服务平台（IaaS），面向全球客户提供基于云计算的IT解决方案与客户服务，拥有丰富的国内BGP、双线高防、香港等优质的IDC资源。
            </p>
            <p>
              公司一直秉承"以人为本、客户为尊、永续创新"的价值观，坚持"以微笑收获友善，
              以尊重收获理解，以责任收获支持，以谦卑收获成长"的行为观向客户提供全面优质的互联网应用服务。
            </p> -->
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
        <!-- 新闻公告tab栏切换 -->
        <div v-if="!newsDetail" class="newtabs">
          <div
            v-for="(item, ind) in newtabsList"
            :key="ind"
            :class="
              newsTabSelectIndex === ind
                ? 'newtabs-item newtabs-active'
                : 'newtabs-item'
            "
            @click="onChangeNewTabs(ind, item.newTypeCode)"
          >
            {{ item.newTypeName }}
          </div>
        </div>
        <!-- 新闻公告主体部分 -->
        <div v-if="!newsDetail" class="newstabs-content">
          <div v-for="item in newsList" :key="item.id" class="newstabs-items">
            <!-- <div class="img" /> -->
            <div class="newstab-title">
              <div class="newstab-header">
                <h1 @click="getDetail(item.id)">
                  {{ item.newsTitle }}
                </h1>
                <!-- <div class="news-time">
                  最新
                </div>
                <div class="news-trends">
                  公司动态
                </div> -->
              </div>
              <div class="newstab-about">
                {{
                  item.seoDescribe ||
                    '为深入推进“互联网+农业”模式，着力培养高水平电商人才，大力推进乡村振兴战略，河源市人社局结合河源市农村电商发展现状，在深河指挥部和社会资源的大力支持下，主导建设了“E网兴农”农村电商产业园。这是河源市深入学习贯彻习近平总书记关于乡村振兴工作的重要论述精..'
                }}
              </div>
              <div class="newstab-footer">
                <div class="time">
                  <a-icon type="clock-circle" class="icon" />
                  {{ item.newsPublishTime.replace('T', ' ') }}
                </div>
                <!-- <div class="attilude">
                  <a-icon type="like" class="icon" />
                  256
                </div> -->
              </div>
            </div>
          </div>
        </div>
        <!-- 分页功能 -->
        <div v-show="!newsDetail" class="pagination">
          <a-pagination
            v-model="current"
            :hide-on-single-page="true"
            :total="total"
            :page-size="pageSize"
            @change="pageChange(current, pageSize, firstCode)"
          />
        </div>
        <!-- 新闻公告详情部分 -->
        <div v-if="newsDetail" class="news-content">
          <div class="news-title">
            <a-icon type="left" @click="backContent()" />
            {{ newsDetail.newsTitle }}
          </div>
          <div class="news-name">
            <!-- <span class="left">最新</span> -->
            <span
              class="right"
            >发布时间：{{ newsDetail.newsPublishTime }} | 作者：{{
              newsDetail.createUserName
            }}</span>
          </div>
          <div class="news-cont">
            <div v-html="newsDetail.context">
              {{ newsDetail.context }}
            </div>
            <!-- <p>
              穿越千年时光，开封的宋都古城韵味犹存。作为开封古城区传统风貌保存最完整、面积规模最大的历史文化街区，双龙巷历史文化街区是保护与延续开封古都文化最理想的空间载体，如何合理保护利用？双龙巷文化旅游发展有限公司负责人刘涛涛告诉记者，“我们采用‘保护+微更新’管理模式，详细指导古城每一寸土地的保护、开发和利用2018年，开封市编制施行《开封宋都古城保护与修缮规划》。在总体保护框架要求下，面积共计64.7公顷的3个历史文化街区采用“保护+文旅”模式，坚持保护为主、修旧如旧原则，对各级文保单位、历史建筑等全方位保护；并大力发展文化产业，打造宋文化品牌IP，为宋都古城产业转型升级提供优质场所。
            </p>
            <p>
              双龙巷文化旅游发展有限公司负责人刘涛涛告诉记者，“我们采用‘保护+微更新’管理模式，详细指导古城每一寸土地的保护、开发和利用2018年，开封市编制施行《开封宋都古城保护与修缮规划》。在总体保护框架要求下，面积共计64.7公顷的3个历史文化街区采用“保护+文旅”模式，坚持保护为主、修旧如旧原则，对各级文保单位、历史建筑等全方位保护；并大力发展文化产业，打造宋文化品牌IP为宋都古城产业转型升级提供优质场所。
            </p>
            <img class="news-img" src="" alt="">
            <p>
              穿越千年时光，开封的宋都古城韵味犹存。作为开封古城区传统风貌保存最完整、面积规模最大的历史文化街区，双龙巷历史文化街区是保护与延续开封古都文化最理想的空间载体，如何合理保护利用？双龙巷文化旅游发展有限公司负责人刘涛涛告诉记者，“我们采用‘保护+微更新’管理模式，详细指导古城每一寸土地的保护、开发和利用2018年，开封市编制施行《开封宋都古城保护与修缮规划》。在总体保护框架要求下，面积共计64.7公顷的3个历史文化街区采用“保护+文旅”模式，坚持保护为主、修旧如旧原则，对各级文保单位、历史建筑等全方位保护；并大力发展文化产业，打造宋文化品牌IP，为宋都古城产业转型升级提供优质场所。
            </p>
            <p>
              双龙巷文化旅游发展有限公司负责人刘涛涛告诉记者，“我们采用‘保护+微更新’管理模式，详细指导古城每一寸土地的保护、开发和利用2018年，开封市编制施行《开封宋都古城保护与修缮规划》。在总体保护框架要求下，面积共计64.7公顷的3个历史文化街区采用“保护+文旅”模式，坚持保护为主、修旧如旧原则。
            </p>
            <p>
              双龙巷文化旅游发展有限公司负责人刘涛涛告诉记者，“我们采用‘保护+微更新’管理模式，详细指导古城每一寸土地的保护、开发和利用2018年，开封市编制施行《开封宋都古城保护与修缮规划》。在总体保护框架要求下，面积共计64.7公顷的3个历史文化街区采用“保护+文旅”模式，坚持保护为主、修旧如旧原则，对各级文保单位、历史建筑等全方位保护；并大力发展文化产业，打造宋文化品牌IP为宋都古城产业转型升级提供优质场所。
            </p>
            <p>
              穿越千年时光，开封的宋都古城韵味犹存。作为开封古城区传统风貌保存最完整、面积规模最大的历史文化街区，双龙巷历史文化街区是保护与延续开封古都文化最理想的空间载体，如何合理保护利用？双龙巷文化旅游发展有限公司负责人刘涛涛告诉记者，“我们采用‘保护+微更新’管理模式，详细指导古城每一寸土地的保护、开发和利用2018年，开封市编制施行《开封宋都古城保护与修缮规划》。在总体保护框架要求下，面积共计64.7公顷的3个历史文化街区采用“保护+文旅”模式，坚持保护为主、修旧如旧原则，对各级文保单位、历史建筑等全方位保护；并大力发展文化产业，打造宋文化品牌IP，为宋都古城产业转型升级提供优质场所。
            </p> -->
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
                <div class="code-box">
                  <a target="_blank" href="#">浙江云盾</a>
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
                    <img src="https://ydidc.com/logo_small.gif" alt="">
                  </div>
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
        <div class="links">
          <div class="public-box">
            友情链接
            <div class="bottom-line" />
          </div>
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Statement from '@/components/About/statement'
export default {
  components: { Statement },
  async asyncData ({ app }) {
    // 获取公司简介
    const newsData = await app.$api.pages.getCompanyPage()
    // 获取新闻类别
    const typeData = await app.$api.news.getAllNewsList({
      currentPage: 1,
      pageSize: 999
    })
    console.log('data12345', typeData.data.list)
    const typeCode = typeData.data.list[0].newTypeCode
    // 获取新闻类别信息
    const detailData = await app.$api.news.getNews({
      currentPage: 1,
      pageSize: 999,
      newTypeCode: typeCode
    })
    return {
      companypages: newsData.data.list,
      newtabsList: typeData.data.list,
      newsList: detailData.data.list,
      firstCode: typeData.data.list[0].newTypeCode,
      total: Number(detailData.data.totalCount)
    }
  },
  data () {
    return {
      tabList: ['公司简介', '新闻公告', '法律声明', '友情链接'],
      newtabsList: [],
      firstCode: '',
      newsList: [],
      newsDetail: [],
      tabSelectIndex: 0,
      newsDetail: false,
      newsTabSelectIndex: 0,
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
      immediate: true,
      handler (route) {
        this.tabSelectIndex = route.query.tab * 1
      }
    }
  },
  mounted () {
    this.getWebInfo()
    console.log('1273941278916598', this.friendLinks)
  },
  methods: {
    // tab选择
    onChangeTab (index) {
      this.tabSelectIndex = index
    },
    // 新闻公告tab选择
    onChangeNewTabs (ind, item) {
      this.newsTabSelectIndex = ind
      this.getNewsListInfo(1, 999, item)
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
      this.getNewsListInfo(this.newtabsList[0].newTypeCode)
      console.log('newtabsList', this.newtabsList)
    },
    // 获取新闻类别信息
    async getNewsListInfo (current, pageSize, code) {
      console.log(current, pageSize, code)
      const newsData = await this.$api.news.getNews({
        currentPage: current || 1,
        pageSize: pageSize || 8,
        newTypeCode: code
      })
      console.log('getAllNewsList', newsData)
      this.newsList = newsData.data.list || []
      this.total = Number(newsData.data.totalCount) || 0
    },
    // 进入详情页面
    async getDetail (id) {
      this.newsDetail = true
      const newData = await this.$api.news.getOneNews(id)
      this.newsDetail = newData.data
      this.newsDetail.newsPublishTime = this.newsDetail.newsPublishTime.replace(
        'T',
        ' '
      )
      console.log('newsDetail', this.newsDetail)
    },
    // 回退新闻内容页面
    backContent () {
      this.newsDetail = false
    },
    // 页码功能
    pageChange (current, pageSize, code) {
      this.getNewsListInfo(current, pageSize, code)
      console.log('current', current, pageSize, code)
    },
    // 获取友情链接
    async getWebInfo () {
      const linksData = await this.$api.home.getFriendLink()
      this.$store.dispatch('home/setFriendLinks', linksData.data?.list || [])
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
                  color: #333;
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
          margin-top: 20px;
          .img {
            width: 350px;
            height: 150px;
            margin-right: 30px;
            background: red;
            border-radius: 8px;
          }
          .newstab-title {
            padding-bottom: 30px;
            border-bottom: 1px solid #f1f1f1;
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
