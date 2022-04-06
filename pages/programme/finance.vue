<template>
  <div class="finance-container">
    <!-- 轮播图 -->
    <Banner type="finance" />
    <!-- 面临的问题 -->
    <Issue :issue-data="issueData" />
    <!-- 解决方案构架部署 -->
    <Solution :solution-data="solutionData" />
    <!-- 服务优势 -->
    <Advantage :advantage-data="advantageData" />
    <!-- 更多解决方案 -->
    <More type="finance" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
        title: '金融云面临发的问题',
        list: [
          {
            title: '数据的安全性',
            info: '金融领域对于数据安全以及用户隐私保护的需求要比其他任何行业要求都高。金融行业是具体管钱的行业，客户的隐私、企业的数据安全、产品安全等等都尤其重要。',
            bg: require('~/static/img/programme/question1.png')
          },
          {
            title: '互联互通',
            info: '各金融体系、机构的数据标准、接口等有待进一步统一，以便提供更便捷的数据交换和处理;而现实是通常多机构多种标准或接口，系统整合难度大。',
            bg: require('~/static/img/programme/question2.png')
          },
          {
            title: '数据量大',
            info: '在国外，如果银行的客户数或账户数超过千万就属于大型银行了,但这与我国的四大银行的一些省级分行的数据量相当，中国工商银行2002年完成的数据集中工程有3亿多账户。数据量太大，数据的存储和处理就成了问题，同时对IT设备的处理能力带来很大的挑战。',
            bg: require('~/static/img/programme/question3.png')
          },
          {
            title: '成本过高',
            info: '金融体系、机构整合云端面临技术投入大，成本高，不灵活，运维难度大，交付周期长等问题。',
            bg: require('~/static/img/programme/question4.png')
          }
        ]
      },
      solutionData: {
        title: '解决方案架构部署',
        height: 'height: 380px',
        bg: `background:url(${require('~/static/img/programme/financial-dep.png')}) no-repeat left top`,
        bottombg: `background:url(${require('~/static/img/programme/infoimg.png')}) no-repeat center`,
        bottomwidth: 'width: 408px',
        infoWidth: 'width: 610px',
        infoList: [
          '金融云微金融解决方案为P2P、小贷、典当、担保、众筹等小微金融企业提供定制个性化的云计算服务。互联网微金融用户也能享有金融级的安全保障;海量计算、弹性部署能解决互联网业务的海量并发问题，同时大幅降低初创企业IT成本。此外，浙江云盾联手合作伙伴共同打造微金融生态链，提供一站式解决方案平台。在整个产品选择和设计上，浙江云盾努力为金融用户创造一个安全可 靠的运行环境，并为用户提供一支可信赖的技术运维支持团队，可以帮助客户完成从前期规划、实施、应用迁移,到后期运维每一阶段的工作，为金融行业持续发展做出贡献。'
        ]
      },
      advantageData: {
        title: '服务优势',
        list: [
          {
            title: '简易操作，灵活管理',
            info: '集群技术，实现多节点共同参与计算，自动并行处理并负载均衡。浙江云盾服务器基于集群，硬件冗余度非常高，轻松应对硬件故障问题。',
            bg: require('~/static/img/programme/fyoushi1.png')
          },
          {
            title: '高可用系统',
            info: '浙江云盾服务器均采用 Intel Haswell CPU、DDR4 内存，拥有更好的内存计算能力；默认开通 I/O 优化实例，搭配 SSD 固态云盘获得更好的存储性能。',
            bg: require('~/static/img/programme/fyoushi2.png')
          },
          {
            title: 'BGP多线线路',
            info: '提供BGP多线专线线路，最佳访问路由是由网络上的骨干路由器根据路由跳数与其它技术指标来确定的，不占用服务器的任何系统资源。服务器的上行路由与下行路由都能选择最优的路径,能真正实现高速的单IP访问。',
            bg: require('~/static/img/programme/fyoushi3.png')
          },
          {
            title: '低成本高性能',
            info: '随着机房的扩容以及业务的不断增加，信息管理系统的操作也随之变得更加复杂。浙江云盾为用户研发了灵活易用的用户管理中心，让用户简单便捷灵活地管理自己业务。',
            bg: require('~/static/img/programme/fyoushi4.png')
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
    this.advantageData.list[0].info = this.advantageData.list[0].info.replace(
      '浙江云盾',
      this.webInfo.title || ''
    )
    this.advantageData.list[1].info = this.advantageData.list[1].info.replace(
      '浙江云盾',
      this.webInfo.title || ''
    )
    this.advantageData.list[3].info = this.advantageData.list[3].info.replace(
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
.finance-container {
  background: #fff;
  background-image: url('~/static/img/assurance/bgcolor.png');
  background-repeat: no-repeat;
  background-size: 100% 700px;
}
</style>
