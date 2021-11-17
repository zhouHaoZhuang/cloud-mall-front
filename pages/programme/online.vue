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
        height: 'height: 560px',
        bg: require('~/static/img/programme/ecommerce-deploy.png'),
        infoWidth: 'width: 35%',
        infoList: [
          '电商云解决方案具备高弹性可扩展性、成本比传统IT架构节约70%以上、效率高、运维维护成本低等特点，帮助电商企业快速实现平台搭建、节约成本、应对高业务并发、强化安全防护能力等目标，助力电商用户快速实现互联网金融创新。'
        ]
      },
      advantageData: {
        title: '金融云服务优势',
        list: [
          {
            title: '简易操作，灵活管理',
            info: '集群技术，实现多节点共同参与计算，自动并行处理并负载均衡。浙江云盾服务器基于集群，硬件冗余度非常高，轻松应对硬件故障问题。',
            bg: require('~/static/img/programme/fyoushi_img1.png')
          },
          {
            title: '高可用系统',
            info: '浙江云盾服务器均采用 Intel Haswell CPU、DDR4 内存，拥有更好的内存计算能力；默认开通 I/O 优化实例，搭配 SSD 固态云盘获得更好的存储性能。',
            bg: require('~/static/img/programme/fyoushi_img2.png')
          },
          {
            title: 'BGP多线线路',
            info: '浙江云盾为金融云用户提供BGP多线专线线路，最佳访问路由是由网络上的骨干路由器根据路由跳数与其它技术指标来确定的，不占用服务器的任何系统资源。服务器的上行路由与下行路由都能选择最优的路径，能真正实现高速的单IP访问。',
            bg: require('~/static/img/programme/fyoushi_img3.png')
          },
          {
            title: '低成本，高性能',
            info: '随着机房的扩容以及业务的不断增加，信息管理系统的操作也随之变得更加复杂。浙江云盾为用户研发了灵活易用的用户管理中心，让用户简单便捷灵活地管理自己业务。',
            bg: require('~/static/img/programme/fyoushi_img4.png')
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
