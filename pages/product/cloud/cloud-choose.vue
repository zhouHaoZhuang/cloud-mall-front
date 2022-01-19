<template>
  <!-- 弹性云服务器 -->
  <div class="cloud">
    <!-- 轮播图 -->
    <Banner :type="{ typeName: 'choose', typeId: 1 }" />
    <!-- 产品优势 -->
    <div class="goodness-module auto">
      <p class="title">
        <span class="title-name"> 产品优势 </span>
      </p>
      <div class="adv-wrap">
        <ul class="clearfix">
          <li class="">
            <!-- 图标 -->
            <div class="adv-icon adv-icon-1" />
            <div class="adv-title">
              跨机房热迁移服务
            </div>
            <div class="adv-content">
              打破地域限制，轻松应对时间空间带来的运营困扰，最快仅需5分钟，即可将数据从一机房迁移至另一机房。
            </div>
          </li>
          <li>
            <div class="adv-icon adv-icon-2" />
            <div class="adv-title">
              服务器在线push功能
            </div>
            <div class="adv-content">
              浙江云盾鼓励支持用户将手中闲置服务器随时转让，提高闲置资源使用率，减少资源浪费并帮用户有效降低成本。
            </div>
          </li>
          <li>
            <div class="adv-icon adv-icon-3" />
            <div class="adv-title">
              三层存储技术
            </div>
            <div class="adv-content">
              缓存、沉淀、备份层，三层分别对数据进行处理、缓存与灾备，三层间实时同步，数据安全性达到99.999%，高可用性达到99.99%。
            </div>
          </li>
          <li>
            <div class="adv-icon adv-icon-4" />
            <div class="adv-title">
              免费20G防御
            </div>
            <div class="adv-content">
              浙江云盾采用自带硬防节点，部分节点享免费20G防御，可实现300G防御峰值，有效防御DDoS、CC等恶意攻击，保障用户网络安全。
            </div>
          </li>
          <li>
            <div class="adv-icon adv-icon-7" />
            <div class="adv-title">
              纯SSD架构配备至强硬件
            </div>
            <div class="adv-content">
              搭建纯SSD架构的高性能企业级云服务器，同时采用Intel Haswell
              CPU、高频DDR4内存、高速Sas3
              SSD闪存作为底层硬件配置，分钟级响应速度。
            </div>
          </li>
          <li>
            <div class="adv-icon adv-icon-8" />
            <div class="adv-title">
              全网BGP带宽
            </div>
            <div class="adv-content">
              浙江云盾使用BGP线路，解决了南北互联互通的问题。同时自身具有容灾性，保障线路安全稳定。
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 产品功能 -->
    <div class="function-moudle">
      <div class="auto">
        <p class="title">
          <span class="title-name"> 产品功能 </span>
        </p>
        <div class="container">
          <div class="function-left">
            <p class="left-title">
              01 计算
            </p>
            <p class="left-content">
              丰富的实例规格，灵活扩容，支撑用户业务发展;有北京、辽宁、江苏、香港、广东五大节点，满足用户多样化需求。云服务器提供丰富的实例规格(CPU、内存）和带宽、云盘选择，支持随时升级，满足各种业务需求。99.99%的高可用性，为业务的稳定运行捉供保障
            </p>
          </div>
          <div class="function-right">
            <div class="right-container">
              <p class="right-title">
                02 存储
              </p>
              <p class="right-content">
                三层存储技术，支撑用户数据自动生成备份,切实保障用户数据安全，满足不同的I/O性能要求。采用浙江云盾三层存储革新技术，自动分层缓存、沉淀、备份数据保障用户数据完整性、可用性，数据安全性高达99.9999%,
              </p>
            </div>
            <div class="right-container">
              <p class="right-title">
                03 管理
              </p>
              <p class="right-content">
                提供控制台、远程终端和API等多种管理方式，给您完全管理权限。提供web控制台、API两种方式，能够轻松的开通、关闭、重启、升级云服务器;提供CPU、内存、硬盘IO的实时监控和报表,随时了解云服务器运行情况。
              </p>
            </div>
            <div class="right-container">
              <p class="right-title">
                04 安全
              </p>
              <p class="right-content">
                网络安全、服务器安全等基础防护;云监控监测,实时预警。提供DDos防护、DNS劫持检测、入侵检测、漏洞扫描、网页木马检测、登录防护等安全服务。对服务器的监控报警服务，提供实时监控,性能高低一目了然。
              </p>
            </div>
            <div class="right-container">
              <p class="right-title">
                05 网络
              </p>
              <p class="right-content">
                全网BGP带宽，承诺独享，多运营商覆盖。BGP网络支持国内所有主流运营商接入;覆盖全国的快速公网体验，提供灵活的网络规划选择。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 优势对比 -->
    <div class="contrast-moudle">
      <div class="auto">
        <p class="title">
          <span class="title-name"> 优势对比 </span>
        </p>
        <div class="container">
          <div class="contrast-left box">
            <div class="line">
              服务器可用性(SLA)
            </div>
            <div class="line">
              数据持久性
            </div>
            <div class="line">
              网络可用性
            </div>
            <div class="line">
              虚拟化架构
            </div>
            <div class="line">
              资源超卖
            </div>
            <div class="line">
              交付时间
            </div>
            <div class="line">
              ARP攻击防护
            </div>
            <div class="line">
              在线过户
            </div>
            <div class="line">
              控制面板
            </div>
            <div class="line">
              攻击防护
            </div>
            <div class="line">
              SSD能力
            </div>
            <div class="line">
              OEM能力
            </div>
            <div class="line">
              自建数据中心
            </div>
            <div class="line">
              资源监控告警
            </div>
          </div>
          <div class="contrast-right box">
            <div class="contrast-title">
              其他云厂商
            </div>
            <div class="contrast-content">
              <div class="line">
                大多99%至99.959%
              </div>
              <div class="line">
                一
              </div>
              <div class="line">
                一
              </div>
              <div class="line">
                KVM/Hyper-v/VmWare等
              </div>
              <div class="line">
                超卖情况普遍
              </div>
              <div class="line">
                几分钟至几小时
              </div>
              <div class="line">
                —般没有彻底解决
              </div>
              <div class="line red">
                <a-icon type="close-circle" theme="filled" />
              </div>
              <div class="line">
                部分半自动
              </div>
              <div class="line">
                大多没有免费防护
              </div>
              <div class="line">
                50~200M/s
              </div>
              <div class="line red">
                <a-icon type="close-circle" theme="filled" />
              </div>
              <div class="line">
                大多没有自建数据中心
              </div>
              <div class="line">
                大多没有
              </div>
            </div>
          </div>
          <div class="contrast-right box">
            <div class="contrast-title">
              浙江云盾主机
              <div class="icon" />
            </div>
            <div class="contrast-content">
              <div class="line">
                99.99%
              </div>
              <div class="line">
                99.999%
              </div>
              <div class="line">
                99.999%
              </div>
              <div class="line">
                VM
              </div>
              <div class="line">
                绝不超卖
              </div>
              <div class="line">
                1-10分钟
              </div>
              <div class="line">
                彻底隔离
              </div>
              <div class="line">
                <a-icon type="check-circle" theme="filled" />
              </div>
              <div class="line">
                全部自动完成
              </div>
              <div class="line">
                5G免费DDOS防护
              </div>
              <div class="line">
                随机读800M/s，随机写500M/s
              </div>
              <div class="line">
                <a-icon type="check-circle" theme="filled" />
              </div>
              <div class="line">
                <a-icon type="check-circle" theme="filled" />
              </div>
              <div class="line">
                <a-icon type="check-circle" theme="filled" />
              </div>
            </div>
          </div>
          <div class="contrast-right box">
            <div class="contrast-title">
              传统独立主机
            </div>
            <div class="contrast-content">
              <div class="line">
                较低
              </div>
              <div class="line">
                较低
              </div>
              <div class="line">
                较低
              </div>
              <div class="line red">
                <a-icon type="close-circle" theme="filled" />
              </div>
              <div class="line red">
                <a-icon type="close-circle" theme="filled" />
              </div>
              <div class="line">
                1-2天
              </div>
              <div class="line red">
                <a-icon type="close-circle" theme="filled" />
              </div>
              <div class="line red">
                <a-icon type="close-circle" theme="filled" />
              </div>
              <div class="line red">
                <a-icon type="close-circle" theme="filled" />
              </div>
              <div class="line">
                大多没有免费防护
              </div>
              <div class="line">
                100~150M/s
              </div>
              <div class="line red">
                <a-icon type="close-circle" theme="filled" />
              </div>
              <div class="line">
                大多没有自建数据中心
              </div>
              <div class="line red">
                <a-icon type="close-circle" theme="filled" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 应用场景 -->
    <div class="application-moudle">
      <div class="auto">
        <p class="title">
          <span class="title-name"> 应用场景 </span>
        </p>
        <div class="container">
          <div class="application-left">
            <div
              v-for="item in items"
              :key="item.id"
              :class="
                curId === item.id
                  ? 'application-left-box check'
                  : 'application-left-box'
              "
              @click="changeCurId(item.id)"
            >
              {{ item.item }}
            </div>
          </div>
          <div class="application-center">
            <div
              v-for="item in application"
              v-show="curId === item.id"
              :key="item.id"
              class="application-show"
            >
              <div class="application-center-top">
                <p class="application-center-title">
                  {{ item.titleOne }}
                </p>
                {{ item.contentOne }}
              </div>
              <div class="application-center-bottom">
                <p class="application-center-title">
                  {{ item.titleTwo }}
                </p>
                {{ item.contentTwo }}
              </div>
            </div>
          </div>
          <div class="application-right">
            <div
              v-for="(item, index) in contents"
              v-show="curId === item.id"
              :key="index"
              class="application-list"
            >
              <div
                v-for="(ele, ind) in item.text"
                :key="ind"
                class="application-items"
              >
                {{ ele.title }}:{{ ele.content }}
              </div>
              <div class="application-btn">
                <nuxt-link
                  :to="{
                    path: '/pc/cloud-price',
                    query: { cpu: item.cpu, memory: item.memory }
                  }"
                >
                  立即购买
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 常见问题 -->
    <div class="question-moudle">
      <div class="auto">
        <p class="title">
          <span class="title-name"> 常见问题 </span>
        </p>
        <div class="container">
          <div
            v-for="(item, index) in question"
            :key="index"
            class="question-list"
          >
            <div
              class="bg"
              :style="`background:url(${item.bg}) center no-repeat`"
            />
            <div class="content">
              {{ item.content }}
            </div>
          </div>
        </div>
        <div class="question-btn">
          <nuxt-link to="/pc/help/helpInfo">
            更多
          </nuxt-link>
          <!-- <a href=":;javaScript">更多</a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/banner/banner.vue'
export default {
  components: { Banner },
  data () {
    return {
      curId: 1,
      items: [
        { item: '入门型', id: 1 },
        { item: '进阶型', id: 2 },
        { item: '专业型', id: 3 },
        { item: '理想型', id: 4 }
      ],
      application: [
        {
          titleOne: '适用对象',
          contentOne: '小型企业官网或者个人站长',
          titleTwo: '上云建议',
          contentTwo:
            '网站初始阶段并发访问量小，只需要一台低配置的服务器即可，应用程序，数据库，文件等所有资源均在一台服务器上，后期可以基于云计算弹性特征随时调整资源配置，无需担心低配服务器在业务突增时带来的资源不足问题。',
          id: 1
        },
        {
          titleOne: '适用对象',
          contentOne: '地方与行业门户网站',
          titleTwo: '上云建议',
          contentTwo:
            '社区网站业务相对个人网站，有更多的用户访问，为保证性能，此时就需要对带宽、内存、CPU进行优化，以便提供更大的空间，提升访问速度。',
          id: 2
        },
        {
          titleOne: '适用对象',
          contentOne: '网上商城、团购网',
          titleTwo: '上云建议',
          contentTwo:
            '随着电子商务的不断发展，众多企业逐渐意识到电子商务的重要性。该配置适用于开发、测试、上线初期，后期可根据您的业务的实际增长进行增减，可灵活控制。计算能力满足90%云计算使用者需求，适合企业运营活动、并行计算应用、普通数据处理服务等。',
          id: 3
        },
        {
          titleOne: '适用对象',
          contentOne: '社区SNS/论坛/ERP/OACRM、网络游戏等其他高端服务',
          titleTwo: '上云建议',
          contentTwo:
            '适合对计算性能要求较高的应用场景，如企业运营活动、批量处理、分布式分析、游戏app等。网络游戏在近年来发展迅速，除了传统网络终端之外，网页游戏、手机游戏等发展迅速，也让整个游戏市场愈发壮大。浙江云盾按需付费的方式节省了大量现金流和运营费用。',
          id: 4
        }
      ],
      contents: [
        {
          id: 1,
          cpu: 1,
          memory: 1,
          text: [
            { title: 'CPU', content: '1核' },
            { title: '内存', content: '2G' },
            { title: '宽带', content: '1M' },
            { title: '时长', content: '1个月' }
          ]
        },
        {
          id: 2,
          cpu: 2,
          memory: 4,
          text: [
            { title: 'CPU', content: '2核' },
            { title: '内存', content: '4G' },
            { title: '宽带', content: '1M' },
            { title: '时长', content: '1个月' }
          ]
        },
        {
          id: 3,
          cpu: 4,
          memory: 8,
          text: [
            { title: 'CPU', content: '4核' },
            { title: '内存', content: '8G' },
            { title: '宽带', content: '1M' },
            { title: '时长', content: '1个月' }
          ]
        },
        {
          id: 4,
          cpu: 8,
          memory: 16,
          text: [
            { title: 'CPU', content: '8核' },
            { title: '内存', content: '16G' },
            { title: '宽带', content: '1M' },
            { title: '时长', content: '1个月' }
          ]
        }
      ],
      question: [
        {
          bg: require('~/static/img/cloud/question1.png'),
          content: '备案指南'
        },
        {
          bg: require('~/static/img/cloud/question2.png'),
          content: '安全类问题'
        },
        {
          bg: require('~/static/img/cloud/question3.png'),
          content: '基础类问题'
        }
      ]
    }
  },
  methods: {
    changeCurId (item) {
      this.curId = item
    }
  }
}
</script>

<style lang="scss" scoped>
.cloud {
  background-color: #fff;
}
.auto {
  overflow: hidden;
  margin: 0 auto;
  width: 1200px;
  height: 100%;
  box-sizing: border-box;
}
//产品优势
.goodness-module {
  margin: 20px auto 80px;
  width: 1200px !important;
}
.title {
  position: relative;
  height: 32px;
  line-height: 32px;
  text-align: center;
  margin: 70px auto;
}
.title .title-name {
  display: inline-block;
  padding-right: 15px;
  font-size: 36px;
  font-weight: bold;
  color: #333;
}
.adv-wrap ul li {
  width: 380px;
  height: 310px;
  float: left;
  padding: 50px;
  background: #fff;
  border: 2px solid #edf2fa;
  margin-top: 30px;
  .adv-title {
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    line-height: 16px;
    letter-spacing: 0px;
    color: #fff;
    text-align: center;
    margin: 30px 0 20px;
  }
  .adv-content {
    font-size: 14px;
    margin-top: 38px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    line-height: 24px;
    color: #778699;
  }
  .adv-icon {
    width: 60px;
    height: 54px;
    margin: 0 auto;
    background-size: contain !important;
  }
  .adv-icon-1 {
    background: url(~/static/img/cloud/product_adv_1.png) no-repeat center;
  }
  .adv-icon-2 {
    background: url(~/static/img/cloud/product_adv_2.png) no-repeat center;
  }
  .adv-icon-3 {
    background: url(~/static/img/cloud/product_adv_3.png) no-repeat center;
  }
  .adv-icon-4 {
    background: url(~/static/img/cloud/product_adv_4.png) no-repeat center;
  }
  .adv-icon-7 {
    background: url(~/static/img/cloud/product_adv_5.png) no-repeat center;
  }
  .adv-icon-8 {
    background: url(~/static/img/cloud/product_adv_6.png) no-repeat center;
  }
}
.adv-wrap ul li:nth-child(2) {
  margin: 30px 30px 0;
}
.adv-wrap ul li:nth-child(5) {
  margin: 30px 30px 0;
}
.clearfix:after {
  display: block;
  clear: both;
  content: '';
}
// 产品功能
.function-moudle {
  width: 100%;
  height: 798px;
  background: #f9f9f9;
  .container {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 530px;
    color: #fff;
    .function-left {
      width: 380px;
      height: 530px;
      padding: 0 48px;
      background: url(~/static/img/cloud/function_left_bg.png) center no-repeat;
      background-size: cover;
      .left-title {
        width: 100%;
        margin: 40px 0 28px 0;
        font-size: 24px;
        font-weight: 800;
      }
      .left-content {
        width: 100%;
        font-size: 14px;
        font-weight: 500;
        line-height: 28px;
        opacity: 0.72;
      }
    }
    .function-right {
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
      justify-content: flex-start;
      width: 840px;
      .right-container {
        box-sizing: border-box;
        width: 380px;
        height: 250px;
        margin-left: 30px;
        padding: 0 48px;
        background-size: cover !important;
        .right-title {
          margin: 40px 0 20px 0;
          font-size: 24px;
          font-weight: 800;
          color: #fff;
        }
        .right-content {
          width: 100%;
          font-size: 14px;
          font-weight: 500;
          line-height: 26px;
          color: #778699;
        }
      }
      .right-container:nth-child(1) {
        background: url(~/static/img/cloud/function_right_bg1.png) center
          no-repeat;
      }
      .right-container:nth-child(2) {
        background: url(~/static/img/cloud/function_right_bg2.png) center
          no-repeat;
      }
      .right-container:nth-child(3) {
        background: url(~/static/img/cloud/function_right_bg3.png) center
          no-repeat;
      }
      .right-container:nth-child(4) {
        background: url(~/static/img/cloud/function_right_bg4.png) center
          no-repeat;
      }
    }
  }
}
// 优势对比
.contrast-moudle {
  width: 100%;
  .container {
    display: flex;
    justify-content: flex-start;
    width: 822px;
    margin-bottom: 80px;
    .box {
      width: 320px;
      height: 622px;
    }
    .contrast-left {
      width: 120px;
      height: 463px;
      font-size: 14px;
      margin-right: 30px;
      margin-top: 117px;
      font-weight: bold;
      color: #778699;
      line-height: 50px;
      .line {
        height: 32px;
      }
    }
    .contrast-right {
      margin-left: 30px;
      border: 2px solid #edf2fa;
      .contrast-title {
        width: 100%;
        height: 80px;
        line-height: 80px;
        text-align: center;
        font-size: 24px;
        font-weight: 800;
        color: #fff;
        background: url(~/static/img/cloud/contrast-right-titlebg1.png)
          no-repeat center;
        background-size: cover;
      }
      .contrast-content {
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        color: #778699;
        line-height: 50px;
        .line {
          height: 37px;
        }
        .red {
          color: red;
        }
      }
    }
    .contrast-right:nth-child(3) {
      background: url(~/static/img/cloud/contrast-right-content2.png) no-repeat
        bottom right;
      background-size: cover;
      .contrast-title {
        position: relative;
        background: url(~/static/img/cloud/contrast-right-titlebg2.png)
          no-repeat center;
        background-size: cover;
        .icon {
          position: absolute;
          right: 70px;
          top: 10px;
          width: 33px;
          height: 28px;
          background: url(~/static/img/cloud/contrast-right-title2.png)
            no-repeat center;
          background-size: cover;
        }
      }
      .contrast-content {
        color: #fff;
      }
    }
  }
}
// 应用场景
.application-moudle {
  width: 100%;
  height: 586px;
  background: #f9f9f9;
  .container {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 320px;
    .application-left {
      width: 200px;
      height: 100%;
      background-color: #fff;
      .application-left-box {
        width: 100%;
        height: 80px;
        line-height: 80px;
        text-align: center;
        font-size: 24px;
        color: #333;
        cursor: pointer;
      }
      .check {
        width: 210px;
        color: #fff;
        background: url(~/static/img/cloud/applicationcheck.png) no-repeat
          center;
        background-size: cover;
      }
    }
    .application-center {
      width: 594px;
      height: 100%;
      margin: 0 30px;
      font-size: 16px;
      color: #778699;
      padding: 40px 28px 0 32px;
      background-color: #fff;
      .application-center-top {
        margin-bottom: 30px;
      }
      .application-center-title {
        font-size: 20px;
        color: #333;
        font-weight: bold;
      }
    }
    .application-right {
      position: relative;
      width: 346px;
      height: 100%;
      padding: 30px 30px 0px 30px;
      background: url(~/static/img/cloud/applicationlist.png) no-repeat center;
      background-size: cover;
      .application-list {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        .application-items {
          width: 140px;
          height: 40px;
          font-size: 20px;
          color: #fff;
        }
      }
      .application-btn {
        position: absolute;
        left: 83px;
        bottom: 23px;
        width: 180px;
        height: 60px;
        font-size: 24px;
        color: #fff;
        line-height: 60px;
        text-align: center;
        background-color: #fcac33;
        a {
          color: #fff;
        }
      }
    }
  }
}
// 常见问题
.question-moudle {
  height: 543px;
  .container {
    display: flex;
    height: 240px;
    .question-list {
      display: flex;
      align-items: center;
      width: 380px;
      height: 160px;
      padding-left: 40px;
      background-color: #fff;
      border: 2px solid #edf2fa;
      .bg {
        width: 80px;
        height: 80px;
        background-color: blue;
        background-size: cover !important;
      }
      .content {
        margin-left: 23px;
        height: 80px;
        line-height: 80px;
        text-align-last: left;
        font-size: 24px;
        color: #333;
      }
    }
    .question-list:nth-child(2) {
      margin: 0 30px;
    }
  }
  .question-btn {
    width: 300px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    margin: 0 auto;
    color: #1d7aec;
    background-color: #e8f1fd;
    a {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
