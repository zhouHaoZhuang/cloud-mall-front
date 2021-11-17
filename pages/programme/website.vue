<template>
  <div class="website-container">
    <!-- 轮播图 -->
    <Banner type="website" />
    <!-- 面临的问题 -->
    <Issue :issue-data="issueData" />
    <!-- 解决方案构架部署 -->
    <Solution :solution-data="solutionData" />
    <!-- 服务优势 -->
    <Advantage :advantage-data="advantageData" />
    <!-- 更多解决方案 -->
    <More type="website" />
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
        title: '网站云面临的问题',
        bg: require('~/static/img/programme/w-issue-sprite.png'),
        list: [
          {
            title: '配置选型',
            info: '如果用户已经拥有网站程序，那么就需要根据实际业务情况选择合适的云服务器，并在服务器上部署程序运行所需要的语言环境。如果用户初次使用云服务，那么如何选择CPU，硬盘，内存，带宽的大小就成为用户首先遇到的问题。'
          },
          {
            title: 'DDoS攻击',
            info: '如果用户顺利部署了网站在云服务器上，如何保障网站安全稳定的运行，是所有网站管理者都关心的问题。但是如果自行搭建安全体系往往会让成本成倍的增长，而且很复杂。无疑给用户带来更大的成本以及时间压力。'
          },
          {
            title: '数据备份',
            info: '随着网站的发展，积累的数据越来越多，比如静态文件（代码、图片等）和数据库数据。如果需要用户实时自行备份，那所花费的时间以及精力无疑也会成倍的增长。所以解决如何解决数据备份又是企业以及开发者面临的问题之一！'
          },
          {
            title: 'I/O读写',
            info: '大部分网站都属于交互型网站，速度快，能让多处理器的性能发挥出来。当前技术条件下，I/O是系统性能提高的瓶颈，I/O问题没有解决好， 处理器数量增加不一定带来性能的提升，新增资源有可能被I/O全部消耗掉。'
          }
        ]
      },
      solutionData: {
        title: '解决方案构架部署',
        height: 'height: 492px',
        bg: `background:url(${require('~/static/img/programme/web-deploy.png')}) no-repeat left top`,
        infoTitle: '构架说明',
        infoWidth: 'width: 30%',
        infoList: [
          '浙江云盾网站解决方案为企业以及开发者用户实现灵活弹性自动化的基础IT设施建设、 按需付费的服务模式以及0成本的运维IT服务体系。 把传统的IDC数据中心改造成了一个高度简化、标准化、自动化和弹性灵活的云数据中心。使得企业以及开发者的IT支撑系统从“成本中心”而转型成为推动企业核心业务不断发展的引擎。'
        ]
      },
      advantageData: {
        title: '网站云服务优势',
        list: [
          {
            title: '弹性扩展',
            info: '当网站用户在面对云服务器配置选型的问题时，浙江云盾针对网站用户个性的配置选择需求、同时可临时资源扩展的诉求，支持产品随时随地秒级扩展IT资源，轻松解决配置选型问题，高效便捷，节约成本。',
            bg: require('~/static/img/programme/eyoushi_img3.png')
          },
          {
            title: '全景备份',
            info: '针对网站用户面临的备份问题，浙江云盾推出高效便捷的实时全景备份/全景恢复功能。用户可以自定义备份事件，通过控制台一键备份，使数据安全在得到最大的保证的同时，降低用户备份成本。',
            bg: require('~/static/img/programme/eyoushi_img2.png')
          },
          {
            title: '自带防御',
            info: '随着互联网的发展，DDoS、CC攻击已成为非常普遍的攻击模式。网站安全稳定运行成为了每个用户的愿望！浙江云盾网站解决方案，针对这一问题，各个已开放的节点自带默认防御峰值。真正从根本上解决网络安全问题，保护用户网站免受攻击威胁！',
            bg: require('~/static/img/programme/wyoushi_img1.png')
          },
          {
            title: '1V1专席秘书',
            info: '网站用户上云前期面临着多种多样的个性化问题，比如环境部署、数据迁移、售后运维等等，随时都需要有人来协助解决问题。但是行业传统的工单服务模式已被用户广为诟病，因此浙江云盾进行改革创新，每个用户都将配备1名专席客服人员，在正常工作时间帮助解决用户疑难杂症。',
            bg: require('~/static/img/programme/wyoushi_img2.png')
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
.website-container {
  background: #f5f6f7;
}
</style>
