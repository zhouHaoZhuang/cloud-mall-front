<template>
  <div class="move-container">
    <!-- 轮播图 -->
    <Banner type="move" />
    <!-- 面临的问题 -->
    <Issue :issue-data="issueData" />
    <!-- 解决方案构架部署 -->
    <Solution :solution-data="solutionData" />
    <!-- 服务优势 -->
    <Advantage :advantage-data="advantageData" />
    <!-- 更多解决方案 -->
    <More type="move" />
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
        title: '移动云面临发的问题',
        bg: require('~/static/img/programme/m-issue-sprite.png'),
        list: [
          {
            title: '访问延迟',
            bg: require('~/static/img/programme/movequestion1.png'),
            info: '访问延迟是移动云部署面临一个重要问题，因为移动云计算应用中，数据交互非常频繁；有些数据传输过程中数据量很大，比如视频、3D游戏、网站图片组等。当数据量非常大时，延迟就会显著增加，这对实时性要求高的业务以及应用是无法忍受的。'
          },
          {
            title: '无线网络的异构性',
            bg: require('~/static/img/programme/movequestion2.png'),
            info: '随着无线通信技术的飞速发展，出现了蜂窝移动通信网，无线城域网，无线局域网等新兴组网技术的异构网络。因此对于云服务提供商，在这些异构网络之间提供无缝漫游和服务是一个极大的挑战。'
          },
          {
            title: '访问稳定性',
            bg: require('~/static/img/programme/movequestion3.png'),
            info: '目前最广泛应用的移动终端仍是手机设备，随着智能手机的发展，一部手机需要处理越来越多的应用。这就不但要求手机最大化容量，还要求应用自身所在服务器的稳定以及快速，能够迅速响应并接收用户终端数据请求，完成快速访问。'
          },
          {
            title: '云服务质量',
            bg: require('~/static/img/programme/movequestion4.png'),
            info: '移动异构网络环境存在着各种不稳定和限制因素，因此，作为移动云计算服务的提供商，在提供海量应用于计算的同时，如何确保云服务的质量也是用户面临的问题之一。'
          }
        ]
      },
      solutionData: {
        title: '解决方案架构部署',
        height: 'height: 380px',
        bg: `background:url(${require('~/static/img/programme/mobile-dep.png')}) no-repeat 100px top`,
        bottombg: `background:url(${require('~/static/img/programme/movebottomimg.png')}) no-repeat center`,
        bottomwidth: 'width: 408px',
        infoWidth: 'width: 40%',
        infoList: [
          '通过部署移动云平台(双机热备，保证业务的实时在线)实现移动接入的中心管控。随时随地通过手机、平板电脑等移动设备安全顺畅地访问服务器上的各种应用软件！基于云计算的集中式基代处理池，利用BGP多线网络优势贯通移动、联通、铁通以及移动终端的无线协作网络等移动网络，形成开放的实时云基础设施的绿色移动接入网。每个移动终端接收或发送的信号的处理都可以在基带池中-个基带处理单元内完成。这样的架构具有较高的灵活性，可以很好的处理共享资源。使用该方案有效提高基础设施利用率,减少损耗并有效降低成本。该移动云解决方案有效简化运维流程，7*24小时提供专业IT运维服务。',
        ]
      },
      advantageData: {
        title: '服务优势',
        list: [
          {
            title: '负载均衡',
            info: '将访问流量自动分发到多台弹性云服务器，扩展应用系统对外的服务能力，有效提升应用访问质量。',
            bg: require('~/static/img/programme/moveadvantage1.png')
          },
          {
            title: '弹性扩展',
            info: '随时获取、可弹性扩展的计算服务器，享受高效、便捷、可靠、安全的计算环境。',
            bg: require('~/static/img/programme/moveadvantage2.png')
          },
          {
            title: '高品质网络',
            info: '选择与移动应用最为匹配的 BGP 多线网络，贯通移动、联通、铁通、电信等移动网，无论用户在任何地点、任何场合都可轻松访问您的应用，快速获取数据。',
            bg: require('~/static/img/programme/moveadvantage3.png')
          },
          {
            title: '节约成本',
            info: '按实际使用情况随时获取资源，实时创建服务器。告别传统囤货式购买，以最低的成本，最高效的模式轻松应对移动云端部署。',
            bg: require('~/static/img/programme/moveadvantage4.png')
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
.move-container {
  background: #fff;
}
</style>
