<template>
  <div class="object">
    <!-- 对象储存 -->
    <div>
      <div class="info-banner">
        <div class="info-box">
          <div class="auto">
            <div class="info-nav">
              <div class="product-info">
                <h1 class="product-info-title">
                  对象储存
                </h1>
                <div class="product-info-detail">
                  浙江云盾对象存储系统是非结构化数据存储管理平台，支持中心和边缘存储，能够实现存储需求的弹性伸缩，主要应用于海量数据管理的各类场景。
                </div>
              </div>
              <p class="product-info-btn">
                <router-link class="info-btn1" to="/pc/object-based-price.html">立即使用</router-link>
                <!-- <a href="#" class="info-btn1">立即使用</a> -->
                <router-link class="info-btn2" to="/pc/object-based-price.html">产品价格</router-link>
                <!-- <a href="#" class="info-btn2" @click="product">产品价格</a> -->
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 锚点导航 -->
    <AnchorNav :nav-data="navList" />
    <!-- 产品优势 -->
    <div id="open" class="server-module youshi-module auto">
      <p class="module-title">
        <span class="module-title-name"> 产品优势 </span>
      </p>
      <div class="adv-wrap">
        <ul class="clearfix">
          <li class="">
            <!-- 图标 -->
            <div class="adv-icon adv-icon-1" />
            <div class="adv-title">
              高可靠
            </div>
            <div class="adv-content">
              基于纠删码存储方案，能够提供更好的可靠性。跨数据中心的副本冗余，能够保障服务的高可用性。
            </div>
          </li>
          <li>
            <div class="adv-icon adv-icon-2" />
            <div class="adv-title">
              易扩展
            </div>
            <div class="adv-content">
              利用浙江云盾对象存储，存储空间无上限限制，也无需担心扩容问题。能够实现存储需求的弹性伸缩，从而提高业务灵活性。
            </div>
          </li>
          <li>
            <div class="adv-icon adv-icon-3" />
            <div class="adv-title">
              低成本
            </div>
            <div class="adv-content">
              无需前期投入。浙江云盾对象存储按需使用、按需付费的便捷性，能够有效避免存储及带宽资源的闲置浪费。
            </div>
          </li>
          <li>
            <div class="adv-icon adv-icon-4" />
            <div class="adv-title">
              数据智能化
            </div>
            <div class="adv-content">
              与浙江云盾其他产品紧密协同，提供标准 HDFS
              访问方式，为大数据和机器学习的海量高速读写场景提供了标准平台。
            </div>
          </li>
          <li>
            <div class="adv-icon adv-icon-5" />
            <div class="adv-title">
              存储加速
            </div>
            <div class="adv-content">
              边缘存储可充分利用可用链路带宽，数据在边缘节点上传和下载可平均提速
              60% 以上。
            </div>
          </li>
          <li>
            <div class="adv-icon adv-icon-6" />
            <div class="adv-title">
              边缘计算
            </div>
            <div class="adv-content">
              就近集成边缘计算及边缘缓存服务，边缘存储节点具备本地数据处理能力。
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 核心功能及服务 -->
    <div id="market" class="server-module function-wrap">
      <div class="auto">
        <p class="module-title" style="margin-bottom: 50px">
          <span class="module-title-name">核心功能及服务</span>
          <span class="group-span" />
        </p>
        <div class="clearfix">
          <div>
            <div class="service-item">
              <div class="service-item-icon service-item-icon-1" />
              <p class="title">
                多媒体数据处理
              </p>
              <p class="des">
                基于对象存储，您可以一站式地完成图片处理和音视频处理。
              </p>
            </div>
            <div class="service-item">
              <div class="service-item-icon service-item-icon-2" />
              <p class="title">
                跨区域同步
              </p>
              <p class="des">
                跨区域同步让用户通过简单操作即可对不同存储区域的数据进行高效迁移和同步，实现数据异地容灾。
              </p>
            </div>
            <div class="service-item">
              <div class="service-item-icon service-item-icon-3" />
              <p class="title">
                生命周期管理
              </p>
              <p class="des">
                生命周期管理让用户可以根据业务需要，为存储空间制定规则，存储对象可自动化定时进行存储类型转化或删除操作。
              </p>
            </div>
          </div>
          <div>
            <div class="service-item">
              <div class="service-item-icon service-item-icon-4" />
              <p class="title">
                低频存储
              </p>
              <p class="des">
                低频存储提供了比标准存储更低的价格，适用于数据访问实时，读取频率较低的业务场景（如企业数据备份、监控数据、网盘应用等）。
              </p>
            </div>
            <div class="service-item">
              <div class="service-item-icon service-item-icon-5" />
              <p class="title">
                镜像存储
              </p>
              <p class="des">
                镜像存储适用于迁移原有业务系统的已有数据。可以帮助用户实现无缝数据迁移，迁移过程中并不影响原有业务系统的访问。
              </p>
            </div>
            <div class="service-item">
              <div class="service-item-icon service-item-icon-6" />
              <p class="title">
                上传／下载
              </p>
              <p class="des">
                针对不同的上传/下载场景，浙江云盾提供了丰富的API接口和工具供用户使用，同时支持服务端上传和客户端直传，并提供加速服务。
              </p>
            </div>
          </div>
          <div>
            <div class="service-item">
              <div class="service-item-icon service-item-icon-7" />
              <p class="title">
                灵活部署
              </p>
              <p class="des">
                同时支持在浙江云盾边缘节点和客户侧边缘节点部署边缘存储服务。
              </p>
            </div>
            <div class="service-item">
              <div class="service-item-icon service-item-icon-8" />
              <p class="title">
                多级备份
              </p>
              <p class="des">
                提供边缘和中心多级服务备份。
              </p>
            </div>
            <div class="service-item">
              <div class="service-item-icon service-item-icon-9" />
              <p class="title">
                边缘安全
              </p>
              <p class="des">
                通信加密，及时脱敏，边缘存储数据具备网银级安全可靠性。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 使用场景 -->
    <div id="advantage" class="server-module scene-wrap">
      <div class="auto">
        <p class="module-title">
          <span class="module-title-name">适用场景</span>
          <span class="group-span" />
        </p>
        <table class="table scene-table">
          <tbody>
            <tr>
              <td width="200" class="td1">
                <div class="table-item table-item-1">
                  私有云存储
                </div>
              </td>
              <td class="td2">
                <p class="des-text">
                  企业客户可以选择私有化部署浙江云盾对象存储系统。
                </p>
                <p class="des-text">
                  基于公有云存储的经验积累，私有云存储解决方案具备高可靠、强安全、易扩展等特性。同时还能提供成熟的系统管理和运维，让企业以更低廉的产品及维护成本，满足在容量、性能及稳定性上的需求。
                </p>
              </td>
            </tr>
            <tr>
              <td width="200" class="td1">
                <div class="table-item table-item-2">
                  多媒体数据处理
                </div>
              </td>
              <td class="td2">
                <p class="des-text">
                  针对有海量用户生成内容的场景，浙江云盾对象存储服务的高并发能力可以灵活应对大流量的业务场景。对存储在云端的图片、音视频等文件进行数据处理。
                </p>
              </td>
            </tr>
            <tr>
              <td width="200" class="td1">
                <div class="table-item table-item-3">
                  内容加速分发
                </div>
              </td>
              <td class="td2">
                <p class="des-text">
                  面对视频、游戏等热点资源分发的业务场景，您可以使用浙江云盾云对象存储作为源站，搭配浙江云盾
                  CDN加速 进行加速分发，方便您通过 CDN
                  节点就近访问资源，提升用户体验。
                </p>
              </td>
            </tr>
            <tr>
              <td width="200" class="td1">
                <div class="table-item table-item-4">
                  海量数据高并发
                </div>
              </td>
              <td class="td2">
                <p class="des-text">
                  浙江云盾针对海量数据高并发的场景做了深度优化，实现对象存储访问协议到
                  HDFS 协议的转换。
                </p>
                <p class="des-text">
                  相较于传统 Hadoop
                  方案，用户可获得更优的读取、分析性能，更强的稳定性和更好的扩展性。
                </p>
              </td>
            </tr>
            <tr>
              <td width="200" class="td1">
                <div class="table-item table-item-5">
                  备份和归档
                </div>
              </td>
              <td class="td2">
                <p class="des-text">
                  浙江云盾提供高可用和高可靠的存储解决方案来备份和归档用户的关键数据，用户可以设置不同的访问权限和级别，保障数据访问安全。
                </p>
                <p class="des-text">
                  相较于传统自建方案，用户无需采购高昂硬件，无需担心扩容、安全等问题，从而节省更多的存储、维护、人力成本。
                </p>
              </td>
            </tr>
            <tr>
              <td width="200" class="td1">
                <div class="table-item table-item-6">
                  静态资源托管
                </div>
              </td>
              <td class="td2">
                <p class="des-text">
                  浙江云盾无缝集合各类第三方扩展插件，如
                  WordPress、Discuz、Emlog
                  等，并支持一键将各类插件里的静态资源托管到浙江云盾。
                </p>
              </td>
            </tr>
            <tr>
              <td width="200" class="td1">
                <div class="table-item table-item-1">
                  边缘存储
                </div>
              </td>
              <td class="td2">
                <p class="des-text">
                  浙江云盾边缘存储服务在大规模边缘节点和用户侧部署服务，加速数据存储至边缘，并最终将持久化数据保存至中心，有效解决数据上传链路差，带宽利用率低等行业痛点，降低本地存储成本。
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- 常见问题 -->
    <div id="process" class="faq-wrap">
      <div class="auto">
        <p class="module-title">
          <span class="module-title-name">常见问题</span>
          <span class="group-span"></span>
        </p>
        <ul class="qa-box clearfix">
          <li>
            <p class="qa-title qa-title1">
              <span>备案指南</span>
              <a href="">更多>></a>
            </p>
            <div class="qa-box-list"></div>
          </li>
          <li>
            <p class="qa-title qa-title1">
              <span>安全类问题</span>
              <a href="">更多>></a>
            </p>
            <div class="qa-box-list"></div>
          </li>
          <li>
            <p class="qa-title qa-title1">
              <span>基础类问题</span>
              <a href="">更多>></a>
            </p>
            <div class="qa-box-list"></div>
          </li>
        </ul>
      </div>
    </div>
    <FixedTopNav :navData = navList></FixedTopNav>
  </div>
</template>

<script>
import AnchorNav from '@/components/AnchorNav/index'
export default {
  components: { AnchorNav },
  data(){
    return{
      navList:[
        {
          id: 'open',
          title: '产品优势'
        },
        {
          id: 'market',
          title: '核心功能及服务'
        },
        {
          id: 'advantage',
          title: '使用场景'
        },
        {
          id: 'process',
          title: '常见问题 '
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.info-banner {
  background: url(~/static/img/object/banner.png) no-repeat center;
  position: relative;
  height: 502 px;
  width: 100%;
  min-width: 1220 px;
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
      }
    }
  }
}
//产品优势
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
  margin: 60px 82px 0px;
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
    width: 40px;
    height: 36px;
    margin: 0 auto;
  }
  .adv-icon-1 {
    background: url(~/static/img/object/product-adv-icon-1.png);
  }
  .adv-icon-2 {
    background: url(~/static/img/object/product-adv-icon-2.png) no-repeat center;
  }
  .adv-icon-3 {
    background: url(~/static/img/object/product-adv-icon-3.png) no-repeat center;
  }
  .adv-icon-4 {
    background: url(~/static/img/object/product-adv-icon-4.png) no-repeat center;
  }
  .adv-icon-5 {
    background: url(~/static/img/object/product-adv-icon-5.png) no-repeat center;
  }
  .adv-icon-6 {
    background: url(~/static/img/object/product-adv-icon-6.png) no-repeat center;
  }
}
.clearfix:after {
  display: block;
  clear: both;
  content: '';
}
// 核心功能及服务
.function-wrap {
  padding: 80px 0 0px;
  background: #f7f8fa;
}
.auto {
  overflow: visible;
  margin: 0 auto;
  min-width: 1220px;
  max-width: 1220px;
  padding-left: 0px;
  box-sizing: border-box;
}
.service-item {
  width: 33.3%;
  height: 242px;
  float: left;
}
.service-item-icon {
  width: 100%;
  height: 41px;
}
.service-item-icon-1 {
  background: url(~/static/img/object/product-function-icon-1.png) no-repeat
    center;
}
.service-item-icon-2 {
  background: url(~/static/img/object/product-function-icon-2.png) no-repeat
    center;
}
.service-item-icon-3 {
  background: url(~/static/img/object/product-function-icon-3.png) no-repeat
    center;
}
.service-item-icon-4 {
  background: url(~/static/img/object/product-function-icon-4.png) no-repeat
    center;
}
.service-item-icon-5 {
  background: url(~/static/img/object/product-function-icon-5.png) no-repeat
    center;
}
.service-item-icon-6 {
  background: url(~/static/img/object/product-function-icon-6.png) no-repeat
    center;
}
.service-item-icon-7 {
  background: url(~/static/img/object/product-function-icon-7.png) no-repeat
    center;
}
.service-item-icon-8 {
  background: url(~/static/img/object/product-function-icon-8.png) no-repeat
    center;
}
.service-item-icon-9 {
  background: url(~/static/img/object/product-function-icon-9.png) no-repeat
    center;
}
.service-item .title {
  color: #333333;
  font-size: 18px;
  font-weight: normal;
  text-align: center;
  margin: 20px 0 14px;
}
.service-item .des {
  padding: 0 40px;
  font-size: 14px;
  color: #666666;
  line-height: 26px;
  text-align: center;
}
//适用场景
.scene-wrap {
  padding: 80px 0 60px;
}
.auto {
  overflow: visible;
  margin: 0 auto;
  min-width: 1220px;
  max-width: 1220px;
  padding-left: 0px;
  box-sizing: border-box;
}
.scene-wrap .module-title {
  color: #fff;
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
.scene-table {
  border-collapse: collapse;
  margin: 32px 0 60px;
}
.scene-table .td1 {
  padding-left: 36px;
  background: #fbfbfb;
//   text-align: center;
  vertical-align: middle !important;
}
.scene-table td {
  border: 1px solid #e5e5e5;
}
.table-item {
  height: 50px;
  line-height: 50px;
  padding-left: 35px;
  font-size: 14px;
  color: #333;
}
.table-item-1 {
    background: url(~/static/img/object/icon-scene-1.png) no-repeat left center;
}
.table-item-2 {
    background: url(~/static/img/object/icon-scene-2.png) no-repeat left center;
}
.table-item-3 {
    background: url(~/static/img/object/icon-scene-3.png) no-repeat left center;
}
.table-item-4 {
    background: url(~/static/img/object/icon-scene-4.png) no-repeat left center;
}
.table-item-5 {
    background: url(~/static/img/object/icon-scene-5.png) no-repeat left center;
}
.table-item-6 {
    background: url(~/static/img/object/icon-scene-6.png) no-repeat left center;
}
.table-item-7 {
    background: url(~/static/img/object/icon-scene-7.png) no-repeat left center;
}
.scene-table .td2 {
  padding: 20px 30px 20px 38px;
}
.scene-table .des-text {
  padding-left: 10px;
  position: relative;
  color: #666666;
  line-height: 24px;
  margin-bottom: 6px;
}
.scene-table .des-text:before {
  content: '';
  display: inline-block;
  width: 5px;
  height: 5px;
  background: #0080ff;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: -2px;
}
//常见问题
.faq-wrap {
    background-color: #f7f8fa;
    padding: 30px 0;
}
.module-title {
    position: relative;
    height: 32px;
    line-height: 32px;
    text-align: center;
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
