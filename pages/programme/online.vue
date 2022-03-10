<template>
  <div class="online-container">
    <!-- 轮播图 -->
    <Banner type="online" />
    <!-- 面临的问题 -->
    <div class="issue-online">
      <div class="container">
        <div class="online-tit">
          电商云面临发的问题
          <div class="bootom-line" />
        </div>
        <div class="online-wrap">
          <div class="online-box">
            <div class="online-info-box">
              <p>
                随着互联网的飞速发展，电子商务与传统产业的深度结合前所未有地改变着企业生产经营的组织形式，而随着用户数量和业务规模的激增，既有的电子商务平台已经难以满足业务高速增长的需求。电子商务企业迫切需要一个既能够适应庞大业务规模（海量数据）、又能够满足业务快速增长及动态需的解决方案。
              </p>
            </div>
            <div class="online-img-box" />
          </div>
        </div>
      </div>
    </div>
    <!-- 解决方案构架部署 -->
    <Solution :solution-data="solutionData" />
    <!-- 服务优势 -->
    <Advantage :advantage-data="advantageData" />
    <!-- 更多解决方案 -->
    <More type="online" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Banner from '@/components/Programme/banner'
import Solution from '@/components/Programme/solution'
import Advantage from '@/components/Programme/advantage'
import More from '@/components/Programme/more'

export default {
  components: { Banner, Solution, Advantage, More },
  data () {
    return {
      solutionData: {
        title: '解决方案架构部署',
        height: 'height: 370px',
        bg: `background:url(${require('~/static/img/programme/ecommerce-deploy.png')}) no-repeat left top`,
        foundbg: `background:url(${require('~/static/img/programme/found.png')}) no-repeat left top`,
        bottombg: `background:url(${require('~/static/img/programme/onlinebottombg.png')}) no-repeat center`,
        bottomwidth: 'width: 529px',
        infoWidth: 'width: 30%',
        infoTitle: '架构说明',
        infoList: [
          '浙江云盾游戏云服务，从构建基础设施到游戏上线到后期精细化运营,浙江云盾服务涵盖项目整个发展周期。浙江云盾拥有业内领先的辽宁双线高防节点以及国内优质的BGP多线网络资源，高效稳定的云服务器、云数据库以及专业的安全服务，为用户提供贴心全面的的游戏云解决方案，筑造游戏稳定运行的基石。'
        ]
      },
      advantageData: {
        title: '服务优势',
        list: [
          {
            title: '高效运维',
            info: '365天7*24小时高效运维服务，提供专业环境搭建、系统搭建、主动监控、实时服务的贴心服务。',
            bg: require('~/static/img/programme/online1.png')
          },
          {
            title: '全景备份',
            info: '高效便捷的实时全景备份功能，用户自定义备份事件，通过控制台一键备份，数据安全得到最大的保证。',
            bg: require('~/static/img/programme/online2.png')
          },
          {
            title: '弹性扩展',
            info: '在面对大促、活动、以及大型市场活动时期流量激增问题，浙江云盾针对电商云用户个性的临时资源扩展服务，秒级扩展IT资源，轻松应对业务激增，帮助企业节约成本。',
            bg: require('~/static/img/programme/online3.png')
          },
          {
            title: '万兆网络',
            info: '电商云所在服务器集群，全线配备万兆网络，轻松应对大促、流量激增。并可享受免费硬防服务，有效防御DDoS攻击，保障用户网络稳定安全。',
            bg: require('~/static/img/programme/online4.png')
          }
        ]
      }
    }
  },
  computed: {
    ...mapState({
      webInfo: state => state.home.webInfo
    })
  },
  mounted () {
    this.solutionData.infoList = [
      this.solutionData.infoList[0].replace(
        /浙江云盾/g,
        this.webInfo.title || ''
      )
    ]
    this.advantageData.list[2].info = this.advantageData.list[2].info.replace(
      '浙江云盾',
      this.webInfo.title || ''
    )
  },
  methods: {
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
.online-container {
  background: #fff;
  .issue-online {
    width: 100%;
    height: 724px;
    background: #f9f9f9;
    .online-tit {
      padding-top: 80px;
      padding-bottom: 60px;
      font-size: 36px;
      font-weight: bold;
      color: #555;
      text-align: center;
      .bootom-line {
        margin: 20px auto;
        width: 60px;
        height: 4px;
        background: #1d7aec;
      }
    }
    .online-wrap {
      height: 440px;
      .online-box {
        display: flex;
        justify-content: space-between;
        .online-info-box {
          width: 570px;
          line-height: 2;
          font-size: 16px;
          color: #333;
        }
        .online-img-box {
          width: 570px;
          height: 380px;
          background: url('~/static/img/programme/ecomm-issue-icon.png')
            no-repeat center;
        }
      }
    }
  }
}
</style>
