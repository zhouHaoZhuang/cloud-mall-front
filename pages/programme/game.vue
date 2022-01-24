<template>
  <div class="game-container">
    <!-- 轮播图 -->
    <Banner type="game" />
    <!-- 面临的问题 -->
    <Issue :issue-data="issueData" />
    <!-- 解决方案构架部署 -->
    <Solution :solution-data="solutionData" />
    <!-- 服务优势 -->
    <Advantage :advantage-data="advantageData" />
    <!-- 更多解决方案 -->
    <More type="game" />
  </div>
</template>

<script>
import Banner from '@/components/Programme/banner'
import Issue from '@/components/Programme/issue'
import Solution from '@/components/Programme/solution'
import Advantage from '@/components/Programme/advantage'
import More from '@/components/Programme/more'
export default {
  components: { Banner, Issue, Solution, Advantage, More },
  data () {
    return {
      issueData: {
        title: '游戏云全系列产品',
        bg: require('~/static/img/programme/g-issue-sprite.png'),
        list: [
          {
            title: '专属集群',
            bg: require('~/static/img/programme/game1.png'),
            info: '打造低虚拟化、高可用性的游戏集群，每一个数据中心浙江云盾都配备了万兆独立光纤，搭建了完善的实时监控故障告警技术。硬防可达300G，可有效防御 DDoS 攻击，保障游戏用户网络稳定安全。'
          },
          {
            title: '高可用产品',
            bg: require('~/static/img/programme/game2.png'),
            info: '浙江云盾为游戏云用户量身打造了高 IO 性能的独立云服务器，平均读写可达 1000Mb/秒，有效避免了游戏卡顿现象。同时通过最新的安全技术，实现高安全的隔离能力，保障游戏用户体验。'
          },
          {
            title: '一对一专席秘书服务',
            bg: require('~/static/img/programme/game3.png'),
            info: '浙江云盾为游戏云用户提供尊贵的1对1 VIP专席秘书，专业工程师提供部署游戏上线专业架构指导。提供专业护航支持，专席秘书 60S快速响应用户需求，并进行安排处理问题。运维人员 365 天主动运维，实时监控。'
          }
        ]
      },
      solutionData: {
        title: '解决方案架构部署',
        height: 'height: 380px',
        bg: `background:url(${require('~/static/img/programme/gamesolution.png')}) no-repeat left top`,
        foundbg: `background:url(${require('~/static/img/programme/found.png')}) no-repeat left top`,
        bottombg: `background:url(${require('~/static/img/programme/onlinebottombg.png')}) no-repeat center`,
        bottomwidth: 'width: 529px',
        infoWidth: 'width: 30%',
        infoTitle: '架构说明',
        infoList: [
          '浙江云盾游戏云服务，从构建基础设施到游戏上线到后期精细化运营，浙江云盾服务涵盖项目整个发展周期。浙江云盾拥有业内领先的辽宁双线高防节点以及国内优质的BGP多线网络资源，高效稳定的云服务器、云数据库以及专业的安全服务，为用户提供贴心全面的的游戏云解决方案，筑造游戏稳定运行的基石。'
        ]
      },
      advantageData: {
        title: '服务优势',
        list: [
          {
            title: '游戏更新智能分发网络',
            info: '开放存储服务与内容分发网络服务结合 ，可实现游戏升级更新包与客户端高速、低成本的分发与加速。',
            bg: require('~/static/img/programme/gameadvantage1.png')
          },
          {
            title: '飞速游戏体验',
            info: '游戏云专属服务器集群，高I0读写性能。保证在高并发下依然能够保证稳定的IOPS,有效避免了游戏卡顿现象，提升玩家体验以及留存率。',
            bg: require('~/static/img/programme/gameadvantage2.png')
          },
          {
            title: '海量游戏日志存储',
            info: '启用简单日志服务对游戏日志进行存储查询，通过DPC整合日志数据到ODPS中，实现海量日志数据分析。为游戏云用户提供数据支撑。',
            bg: require('~/static/img/programme/gameadvantage3.png')
          },
          {
            title: '稳定不等待',
            info: '浙江云盾服务器配备万兆独立BGP多线带宽以及优质高防双线路，完美解决玩家南北互通问题，进入不用等，实现跨地域统一管理。 300G硬防，轻松应对DDoS。',
            bg: require('~/static/img/programme/gameadvantage4.png')
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
.game-container {
  background: #fff;
}
</style>
