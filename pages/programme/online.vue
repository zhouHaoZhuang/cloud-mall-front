<template>
  <div class="finance-container">
    <!-- 轮播图 -->
    <Banner type="online" />
    <!-- 面临的问题 -->
    <div class="issue-online">
      <div class="container">
        <div class="online-tit">
          随形势而变化的电商云服务
        </div>
        <div class="online-wrap">
          <div class="online-box">
            <div class="online-info-box">
              <h4>电商云面临的问题</h4>
              <p>
                随着互联网的飞速发展，电子商务与传统产业的深度结合前所未有地改变着企业生产经营的组织形式，而随着用户数量和业务规模的激增，既有的电子商务平台已经难以满足业务高速增长的需求。电子商务企业迫切需要一个既能够适应庞大业务规模（海量数据）、又能够满足业务快速增长及动态需的解决方案。
              </p>
            </div>
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
import Banner from '@/components/Programme/banner'
import Solution from '@/components/Programme/solution'
import Advantage from '@/components/Programme/advantage'
import More from '@/components/Programme/more'
export default {
  components: { Banner, Solution, Advantage, More },
  data () {
    return {
      solutionData: {
        title: '解决方案构架部署',
        height: 'height: 370px',
        bg: require('~/static/img/programme/ecommerce-deploy.png'),
        infoWidth: 'width: 30%',
        infoList: [
          '电商云解决方案具备高弹性可扩展性、成本比传统IT架构节约70%以上、效率高、运维维护成本低等特点，帮助电商企业快速实现平台搭建、节约成本、应对高业务并发、强化安全防护能力等目标，助力电商用户快速实现互联网金融创新。'
        ]
      },
      advantageData: {
        title: '电商云服务优势',
        list: [
          {
            title: '高效运维',
            info: '365天7*24小时高效运维服务，提供专业环境搭建、系统搭建、主动监控、实时服务的贴心服务。',
            bg: require('~/static/img/programme/eyoushi_img1.png')
          },
          {
            title: '全景备份',
            info: '高效便捷的实时全景备份功能，用户自定义备份事件，通过控制台一键备份，数据安全得到最大的保证。',
            bg: require('~/static/img/programme/eyoushi_img2.png')
          },
          {
            title: '弹性扩展',
            info: '在面对大促、活动、以及大型市场活动时期流量激增问题，浙江云盾针对电商云用户个性的临时资源扩展服务，秒级扩展IT资源，轻松应对业务激增，帮助企业节约成本。',
            bg: require('~/static/img/programme/eyoushi_img3.png')
          },
          {
            title: '万兆网络',
            info: '电商云所在服务器集群，全线配备万兆网络，轻松应对大促、流量激增。并可享受免费硬防服务，有效防御DDoS攻击，保障用户网络稳定安全。',
            bg: require('~/static/img/programme/eyoushi_img4.png')
          }
        ]
      }
    }
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
.finance-container {
  background: #f5f6f7;
  .issue-online {
    background: #fff;
    padding-bottom: 60px;
    .online-tit {
      padding-top: 80px;
      padding-bottom: 60px;
      font-size: 36px;
      color: #555;
      text-align: center;
    }
    .online-wrap {
      position: relative;
      height: 440px;
      background: url('~/static/img/programme/ecomm-issue-icon.png') no-repeat
        200px center;
      .online-box {
        position: absolute;
        top: 80px;
        right: 0;
        width: 500px;
        h4 {
          display: inline-block;
          padding-bottom: 10px;
          margin-bottom: 30px;
          font-weight: 400;
          font-size: 24px;
          color: #666;
          border-bottom: 2px solid #059fff;
        }
        p {
          line-height: 2;
          font-size: 14px;
          color: #999;
        }
      }
    }
  }
}
</style>
