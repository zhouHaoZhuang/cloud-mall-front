<template>
  <!-- 弹性云服务器 -->
  <div class="cloud">
    <div class="info-banner">
      <div class="info-box">
        <div class="auto">
          <div class="info-nav">
            <div class="product-info">
              <h1 class="product-info-title">
                弹性云服务器
              </h1>
              <div class="product-info-detail">
                浙江云盾服务器配备纯SSD架构打造的高性能存储，旨在为用户提供优质、高效、弹性伸缩的云计算服务。云服务器采用由数据切片技术构建的三层存储功能，切实保护客户数据的安全。同时可弹性扩展的资源用量，为客户业务在高峰期的顺畅保驾护航；灵活多样的计费方式，为客户最大程度的节省IT运营成本，提高资源的有效利用率。
              </div>
            </div>
            <p class="product-info-btn">
              <!-- <router-link
                class="info-btn1"
                to="/pc/cloud-price"
              >
                立即选购
              </router-link> -->
              <nuxt-link class="info-btn1" to="/pc/cloud-price">
                立即选购
              </nuxt-link>
              <!-- <router-link
                class="info-btn1"
                to="/pc/cloud-product"
              >
                产品价格
              </router-link> -->
              <nuxt-link class="info-btn1" to="/pc/cloud-product">
                产品价格
              </nuxt-link>
            </p>
            <p class="product-info-stand">
              支持
              <a>5天无理由退款</a>
              服务
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 锚点导航栏 -->
    <AnchorNav :nav-data="navList" />
    <!-- 产品优势 -->
    <div id="advantage" class="server-module youshi-module auto">
      <p class="module-title">
        <span class="module-title-name"> 产品优势 </span>
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
            <div class="adv-icon adv-icon-5" />
            <div class="adv-title">
              性能可靠,确保业务稳定
            </div>
            <div class="adv-content">
              浙江云盾服务器在硬件级别上实现云主机之间的完全隔离；采用高端服务器进行部署，同时采用集中的管理与监控，确保业务稳定可靠。
            </div>
          </li>
          <li>
            <div class="adv-icon adv-icon-6" />
            <div class="adv-title">
              灵活部署,助您一键上云
            </div>
            <div class="adv-content">
              针对不同行业、领域的企业级用户，以专业成熟的一站式行业云解决方案，帮助用户快速应用云计算。
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
    <div id="function" class="server-module module-marg-top product-power-wrap">
      <div class="auto">
        <p class="module-title">
          <span class="module-title-name">产品功能</span>
        </p>
        <div class="product-power">
          <ul class="clearfix">
            <li class="clearfix">
              <span class="pp-icon pp-icon-1" />
              <div class="content-wrap">
                <div class="content-title">
                  计算
                </div>
                <div class="content">
                  丰富的实例规格，灵活扩容，支撑用户业务发展；有北京、辽宁、江苏、香港、广东五大节点，满足用户多样化需求。云服务器提供丰富的实例规格(CPU、内存）和带宽、云盘选择，支持随时升级，满足各种业务需求。99.99%的高可用性，为业务的稳定运行提供保障。
                </div>
              </div>
            </li>
            <li class="clearfix">
              <span class="pp-icon pp-icon-2" />
              <div class="content-wrap">
                <div class="content-title">
                  存储
                </div>
                <div class="content">
                  三层存储技术，支撑用户数据自动生成备份，切实保障用户数据安全，满足不同的I/O性能要求。采用浙江云盾三层存储革新技术，自动分层缓存、沉淀、备份数据
                  保障用户数据完整性、可用性，数据安全性高达99.999%。
                </div>
              </div>
            </li>
            <li class="clearfix">
              <span class="pp-icon pp-icon-3" />
              <div class="content-wrap">
                <div class="content-title">
                  安全
                </div>
                <div class="content">
                  网络安全、服务器安全等基础防护 ；云监控监测，实时预警。
                  提供DDoS防护、DNS劫持检测、入侵检测、漏洞扫描、网页木马检测、登录防护等安全服务
                  。对服务器的监控报警服务，提供实时监控，性能高低一目了然。
                </div>
              </div>
            </li>
            <li class="clearfix">
              <span class="pp-icon pp-icon-4" />
              <div class="content-wrap">
                <div class="content-title">
                  管理
                </div>
                <div class="content">
                  提供控制台、远程终端和 API
                  等多种管理方式，给您完全管理权限。提供web控制台、API两种方式，能够轻松的开通、关闭、重启、升级云服务器；提供CPU、内存、硬盘IO的实时监控和报表，随时了解云服务器运行情况。
                </div>
              </div>
            </li>
            <li class="clearfix">
              <span class="pp-icon pp-icon-5" />
              <div class="content-wrap">
                <div class="content-title">
                  网络
                </div>
                <div class="content">
                  全网BGP带宽，承诺独享，多运营商覆盖。
                  BGP网络支持国内所有主流运营商接入；覆盖全国的快速公网体验，提供灵活的网络规划选择。
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 优势对比 -->
    <div id="comparison" class="server-module module-marg-top adv-compare-wrap">
      <div class="auto">
        <p class="module-title">
          <span class="module-title-name">优势对比</span>
        </p>
        <div class="adv-compare">
          <ul class="clearfix">
            <li>
              <div class="adv-compare-title" />
              <div>服务可用性（SLA）</div>
              <div>数据持久性</div>
              <div>网络可用性</div>
              <div>虚拟化架构</div>
              <div>资源超卖</div>
              <div>交付时间</div>
              <div>ARP攻击防护</div>
              <div>在线过户</div>
              <div>控制面板</div>
              <div>攻击防护</div>
              <div>SSD性能</div>
              <div>OEM能力</div>
              <div>自建数据中心</div>
              <div>资源监控告警</div>
            </li>
            <li class="active">
              <div class="adv-compare-title">
                浙江云盾主机
              </div>
              <div>99.99%</div>
              <div>99.999%</div>
              <div>99.999%</div>
              <div>VM</div>
              <div>绝不超卖</div>
              <div>1-10分钟</div>
              <div>彻底隔离</div>
              <div>
                <span class="true-icon" />
              </div>
              <div>全部自助完成</div>
              <div>5G免费DDOS防护</div>
              <div>随机读800M/s，随机写500M/s</div>
              <div>
                <span class="true-icon" />
              </div>
              <div>
                <span class="true-icon" />
              </div>
              <div>
                <span class="true-icon" />
              </div>
            </li>
            <li>
              <div class="adv-compare-title">
                其他云厂商
              </div>
              <div>大多99%至99.95%</div>
              <div>-</div>
              <div>-</div>
              <div>KVM/Hyper-V/VmWare等</div>
              <div>超卖情况普遍</div>
              <div>几分钟至几小时</div>
              <div>一般没有彻底解决</div>
              <div>×</div>
              <div>部分半自动</div>
              <div>大多没有免费防护</div>
              <div>50~200M/s</div>
              <div>×</div>
              <div>大多没有自建数据中心</div>
              <div>大多没有</div>
            </li>
            <li>
              <div class="adv-compare-title">
                传统独立主机
              </div>
              <div>较低</div>
              <div>较低</div>
              <div>较低</div>
              <div>×</div>
              <div>×</div>
              <div>1-2天</div>
              <div>×</div>
              <div>×</div>
              <div>×</div>
              <div>大多没有免费防护</div>
              <div>100~150M/s</div>
              <div>×</div>
              <div>大多没有自建数据中心</div>
              <div>×</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 应用场景 -->
    <div id="scene" class="server-module module-marg-top app-scene-wrap">
      <div class="auto">
        <p class="module-title">
          <span class="module-title-name">应用场景</span>
        </p>
        <div class="tab">
          <div class="app-scene-block">
            <div
              v-for="(item, index) in items"
              :key="index"
              class="app-scene-item"
              href="javascript:;"
              :class="{ active: index === curId }"
              @click="tab(index)"
            >
              {{ item.item }}
            </div>
          </div>
          <div class="app-scene-detail">
            <div class="shiyong">
              适用对象
            </div>
            <div
              v-for="(content, index) in contents"
              v-show="index === curId"
              :key="index"
              class="shiyong2"
            >
              {{ content.content }}
            </div>
            <div class="shiyong">
              上云建议
            </div>
            <div
              v-for="(ita, index) in contentsa"
              v-show="index === curId"
              :key="index"
              class="shiyong2"
            >
              {{ ita.ita }}
            </div>
            <div
              v-for="(itb, index) in contentsb"
              v-show="index === curId"
              :key="index"
              class="shiyong3"
            >
              {{ itb.itb }}
            </div>
            <div class="app-car-wrap">
              <div class="app-car-title">
                推荐配置
              </div>
              <div class="app-car-content clearfix">
                <div>CPU：8核</div>
                <div>内存：8G</div>
                <div>带宽：5M</div>
                <div>默认防护：5/20G</div>
                <a href="" class="app-buy-button">立即购买</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 常见问题 -->
    <div id="issue" class="faq-wrap">
      <div class="auto">
        <p class="module-title">
          <span class="module-title-name">常见问题</span>
          <span class="group-span" />
        </p>
        <ul class="qa-box clearfix">
          <li>
            <p class="qa-title qa-title1">
              <span>备案指南</span>
              <a href="">更多>></a>
            </p>
            <div class="qa-box-list" />
          </li>
          <li>
            <p class="qa-title qa-title1">
              <span>安全类问题</span>
              <a href="">更多>></a>
            </p>
            <div class="qa-box-list" />
          </li>
          <li>
            <p class="qa-title qa-title1">
              <span>基础类问题</span>
              <a href="">更多>></a>
            </p>
            <div class="qa-box-list" />
          </li>
        </ul>
      </div>
    </div>
    <FixedTopNav :nav-data="navList" />
  </div>
</template>

<script>
import AnchorNav from '@/components/AnchorNav/index'
import FixedTopNav from '@/components/FixedTopNav/index'
export default {
  components: { AnchorNav, FixedTopNav },
  data () {
    return {
      curId: 0,
      items: [
        { item: '入门型' },
        { item: '进阶型' },
        { item: '专业型' },
        { item: '理想型' }
      ],
      contents: [
        { content: '小型企业官网或者个人站长' },
        { content: '地方与行业门户网站' },
        { content: '网上商城、团购网' },
        { content: '社区SNS/论坛/ERP/OACRM、网络游戏等其他高端服务' }
      ],
      contentsa: [
        {
          ita: '网站初始阶段并发访问量小，只需要一台低配置的服务器即可，应用程序，数据库，文件等所有资源均在一台服务器上，后期可以基于云计算弹性特征随时调整资源配置，无需担心低配服务器在业务突增时带来的资源不足问题。'
        },
        {
          ita: '社区网站业务相对个人网站，有更多的用户访问，为保证性能，此时就需要对带宽、内存、CPU进行优化，以便提供更大的空间，提升访问速度。'
        },
        {
          ita: '随着电子商务的不断发展，众多企业逐渐意识到电子商务的重要性。该配置适用于开发、测试、上线初期，后期可根据您的业务的实际增长进行增减，可灵活控制。'
        },
        {
          ita: '适合对计算性能要求较高的应用场景，如企业运营活动、批量处理、分布式分析、游戏app等。'
        }
      ],
      contentsb: [
        { itb: '适用于个人网站初始阶段并发访问量小，经济配置省钱适用。' },
        { itb: '适合流量适中的网站应用，或简单开发环境、代码存储库等。' },
        {
          itb: '计算能力满足90%云计算使用者需求，适合企业运营活动、并行计算应用、普通数据处理服务等。'
        },
        {
          itb: '网络游戏在近年来发展迅速，除了传统网络终端之外，网页游戏、手机游戏等发展迅速，也让整个游戏市场愈发壮大。浙江云盾按需付费的方式节省了大量现金流和运营费用。'
        }
      ],
      navList: [
        {
          id: 'advantage',
          title: '产品优势'
        },
        {
          id: 'function',
          title: '产品功能'
        },
        {
          id: 'comparison',
          title: '优势对比'
        },
        {
          id: 'scene',
          title: '应用场景 '
        },
        {
          id: 'issue',
          title: '场景问题'
        }
      ]
    }
  },
  methods: {
    tab (index) {
      this.curId = index
    }
  }
}
</script>

<style lang="scss" scoped>
// 弹性云服务器
.info-banner {
  background: url(~/static/img/cloud/banner.png) no-repeat center;
  position: relative;
  height: 502px;
  width: 100%;
  min-width: 1220;
  .info-box {
    height: 100%;
    .auto {
      overflow: visible;
      margin: 0 auto;
      min-width: 1220px;
      max-width: 1220px;
      padding-left: 10px;
      box-sizing: border-box;
      .info-nav {
        position: relative;
        height: 412px;
        padding-top: 72px;
        .product-info {
          padding-top: 60px;
          .product-info-title {
            font-size: 36px;
            color: #fff;
            font-weight: normal;
            margin-bottom: 30px;
          }
          .product-info-detail {
            margin-top: 10px;
            width: 720px;
            font-size: 14px;
            color: #fff;
            line-height: 30px;
          }
        }
        .product-info-btn {
          margin: 30px 0px 28px;
          .info-btn1 {
            display: inline-block;
            width: 120px;
            height: 35px;
            text-align: center;
            line-height: 35px;
            font-size: 14px;
            color: #fff;
            background: #0080ff;
            margin-right: 20px;
          }
          .info-btn2 {
            display: inline-block;
            width: 120px;
            height: 35px;
            text-align: center;
            line-height: 35px;
            font-size: 14px;
            color: #fff;
            background: transparent;
            border: solid 1px #ffffff;
          }
        }
        .product-info-stand {
          font-size: 12px;
          margin-bottom: 14px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
          color: #fff;
        }
      }
    }
  }
}
// 吸顶导航栏
.nav-hide {
  border-top: 1px solid #fff;
  border-bottom: 1px solid #eee;
}
.nav-box {
  width: 100%;
  height: 68px;
  .auto {
    overflow: visible;
    margin: 0 auto;
    min-width: 1220px;
    max-width: 1220px;
    padding-left: 10px;
    box-sizing: border-box;
    .orientation-nav-box {
      position: relative;
      .banner-nav {
        position: absolute;
        height: 68px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
      }
      .banner-nav li a:hover,
      .banner-nav li a.active {
        border-bottom: 2px solid #059fff;
      }
      .banner-nav li a {
        display: inline-block;
        padding: 0px 10px;
        font-size: 14px;
        color: #4c4c4c;
        justify-content: space-around;
      }
    }
  }
}
.nav-hide .banner-nav li a {
  height: 68px;
  line-height: 68px;
}
//产品优势
// .youshi-module{
//     margin-top: 50px;
// }
.auto {
  overflow: visible;
  margin: 0 auto;
  min-width: 1220px;
  max-width: 1220px;
  padding-left: 0px;
  box-sizing: border-box;
}
.module-title {
  position: relative;
  height: 32px;
  line-height: 32px;
  text-align: center;
  margin-top: 50px;
}
.module-title .module-title-name {
  display: inline-block;
  padding-right: 15px;
  font-size: 26px;
  color: #333;
}
.adv-wrap ul li {
  width: 240px;
  float: left;
  margin: 60px 32px 0px;
  .adv-title {
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 16px;
    letter-spacing: 0px;
    color: #333333;
    text-align: center;
    margin: 30px 0 20px;
  }
  .adv-content {
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    line-height: 24px;
    color: #999999;
  }
  .adv-icon {
    width: 36px;
    height: 36px;
    margin: 0 auto;
  }
  .adv-icon-1 {
    background: url(~/static/img/cloud/product_adv_1.png);
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
  .adv-icon-5 {
    background: url(~/static/img/cloud/product_adv_5.png) no-repeat center;
  }
  .adv-icon-6 {
    background: url(~/static/img/cloud/product_adv_6.png) no-repeat center;
  }
  .adv-icon-7 {
    background: url(~/static/img/cloud/product_adv_7.png) no-repeat center;
  }
  .adv-icon-8 {
    background: url(~/static/img/cloud/product_adv_8.png) no-repeat center;
  }
}
.clearfix:after {
  display: block;
  clear: both;
  content: '';
}
// 产品功能
.product-power-wrap {
  background-color: #f7f8fa;
  padding: 30px 0 80px 0;
}
.auto {
  overflow: visible;
  margin: 0 auto;
  min-width: 1220px;
  max-width: 1220px;
}
.module-title {
  position: relative;
  height: 32px;
  line-height: 32px;
  text-align: center;
}
.module-title .module-title-name {
  display: inline-block;
  padding-right: 15px;
  font-size: 26px;
  color: #333;
}
.module-marg-top {
  margin-top: 80px;
}
.product-power {
  margin-top: 60px;
  border: solid 1px #cfd6e3;
  ul {
    margin: 0;
  }
  li {
    border-bottom: solid 1px #cfd6e3;
    .content-title {
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 46px;
      letter-spacing: 0px;
      font-weight: bold;
      color: #000000;
      padding: 10px;
    }
    .content {
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 20px;
      letter-spacing: 0px;
      color: #000000;
    }
    .pp-icon {
      display: inline-block;
      width: 45px;
      height: 45px;
      margin: 45px 35px;
    }
    .pp-icon-1 {
      background: url(~/static/img/cloud/product_count_1.png) no-repeat center;
    }
    .pp-icon-2 {
      background: url(~/static/img/cloud/product_count_2.png) no-repeat center;
    }
    .pp-icon-3 {
      background: url(~/static/img/cloud/product_count_3.png) no-repeat center;
    }
    .pp-icon-4 {
      background: url(~/static/img/cloud/product_count_4.png) no-repeat center;
    }
    .pp-icon-5 {
      background: url(~/static/img/cloud/product_count_5.png) no-repeat center;
    }
  }
}
//优势对比
.module-marg-top {
  margin-top: 80px;
}
.adv-compare {
  margin-top: 60px;
}
.auto {
  overflow: visible;
  margin: 0 auto;
  min-width: 1220px;
  max-width: 1220px;
}
.adv-compare ul li:nth-child(1) {
  border-left: solid 1px #d3d3d3;
}
.adv-compare ul li {
  float: left;
  width: 277px;
}
.adv-compare ul li div:nth-child(1) {
  height: 63px;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 63px;
  letter-spacing: 0px;
  color: #333333;
  border-bottom: solid 1px #d3d3d3;
}
.adv-compare ul li div:nth-child(odd) {
  background: #f6f6f6;
}
.adv-compare ul li div:nth-child(1) {
  border-top: solid 1px #d3d3d3;
}
.adv-compare ul li div {
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  height: 38px;
  line-height: 38px;
  letter-spacing: 0px;
  color: #666666;
  border-right: solid 1px #d3d3d3;
  text-align: center;
}
.adv-compare ul .active {
  width: 373px;
  box-shadow: 0px 2px 6px 0px rgba (0 0 0 / 33%);
  border: solid 1px #00aaff;
  margin-top: -11px;
}
.adv-compare ul .active div:nth-child(odd) {
  background-color: #edf4fc;
}
.adv-compare ul .active div:nth-child(1) {
  height: 74px;
  line-height: 74px;
  background-color: #0080ff;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  border-top: none;
  color: #ffffff;
}
.true-icon {
  display: inline-block;
  width: 17px;
  height: 16px;
  background: url(~/static/img/cloud/true-icon.png) no-repeat center;
}
// 应用场景
.app-scene-wrap {
  background-color: #f7f8fa;
  padding: 30px 0;
  height: 610px;
}
.app-scene-block {
  display: flex;
  justify-content: space-around;
  position: relative;
  margin-top: 38px;
}
.app-scene-item {
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 46px;
  letter-spacing: 0px;
  color: #333333;
  z-index: 3;
  width: 100px;
  text-align: center;
}
.app-scene-detail {
  width: 100%;
  height: 332px;
  // position: absolute;
  // top: 48px;
  // left: 0;
  background-color: #ffffff;
  border: solid 1px #cfd6e3;
  padding: 40px;
  // z-index: 2;
  text-align: left;
  position: relative;
  > .shiyong {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    /* line-height: 46px; */
    letter-spacing: 0px;
    color: #000000;
    font-weight: bold;
    margin-top: 15px;
  }
  > .shiyong2 {
    width: 680px;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 30px;
    letter-spacing: 0px;
    color: #000000;
    padding-top: 10px;
  }
  > .shiyong3 {
    width: 680px;
    font-size: 14px;
    font-weight: normal;
    letter-spacing: 0px;
    color: #0080ff;
    line-height: 23px;
  }
  > .app-car-wrap {
    position: absolute;
    right: 70px;
    top: 40px;
    display: inline-block;
    width: 360px;
    height: 240px;
    background: url(~/static/img/cloud/product_sence_bg.png) no-repeat center;
    > .app-car-title {
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 26px;
      letter-spacing: 0px;
      color: #ffffff;
      text-align: center;
      padding: 24px 0 22px;
    }
    > .app-car-content {
      font-size: 14px;
      font-weight: normal;
      letter-spacing: 0px;
      color: #ffffff;
      > div {
        float: left;
        width: 140px;
        margin: 0px 0px 0px 40px;
        padding: 13px 0px 13px 0px;
      }
      > a {
        // display: block;
        width: 90px;
        height: 34px;
        border-radius: 2px;
        border: solid 1px #ffffff;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 33px;
        letter-spacing: 0px;
        color: #ffffff;
        text-align: center;
        margin: 14px 0 0 42px;
      }
    }
  }
}

// 常见问题
.fff .faq-wrap {
  background: #fff;
}
.faq-wrap {
  padding: 30px 0;
}
.qa-box {
  margin: 50px 0px 40px 0px;
}
.qa-box li:first-child {
  border-left: 0px;
}
.qa-box li {
  position: relative;
  float: left;
  width: 364px;
  height: 240px;
  background: #fff;
  margin: 0 20px;
}
.qa-title1 {
  background-position: 30px 0;
}
.qa-title {
  position: relative;
  height: 36px;
  line-height: 36px;
  margin-top: 22px;
}
.qa-title span {
  display: inline-block;
  margin-left: 30px;
  font-size: 18px;
  color: #333;
}
.qa-title a {
  position: absolute;
  right: 22px;
  top: 0px;
  display: inline-block;
  font-size: 12px;
  color: #0080ff;
}
.qa-box-list {
  margin-left: 30px;
  margin-top: 8px;
  margin: 8px 0px 0px 30px;
}
</style>
