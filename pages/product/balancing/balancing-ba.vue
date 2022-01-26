<template>
  <div class="balancing">
    <!-- 负载均衡 -->
    <div class="info-banner">
      <div class="info-box">
        <div class="auto">
          <div class="info-nav">
            <div class="product-info">
              <h1 class="product-info-title">
                负载均衡
              </h1>
              <div class="product-info-detail">
                浙江云盾负载均衡，是对多台云服务器进行流量分发的负载均衡服务。可在多个实例间自动分配应用程序的对外服务能力，通过消除单点故障提升应用系统的可用性，让您实现更高水平的应用程序容错能力，从而无缝提供分配应用程序流量所需的负载均衡容量，为您提供高效、稳定、安全的服务。
              </div>
            </div>
            <p class="product-info-btn">
              <a href="#" class="info-btn1">立即选购</a>
              <a href="#" class="info-btn2" @click="product">产品价格</a>
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
    <!-- 吸顶导航栏 -->
    <AnchorNav :nav-data="navList" />
    <!-- 产品特点 -->
    <div id="trait" class="server-module auto youshi-module">
      <p class="module-title">
        <span class="module-title-name"> 产品特点 </span>
      </p>
      <div class="adv-wrap">
        <ul class="clearfix">
          <li class="">
            <!-- 图标 -->
            <div class="adv-icon adv-icon-1" />
            <div class="adv-title">
              独享实例性能
            </div>
            <div class="adv-content">
              单个实例独享计算资源，公网IP独立，数量不超开。
            </div>
          </li>
          <li>
            <div class="adv-icon adv-icon-2" />
            <div class="adv-title">
              支持多种协议
            </div>
            <div class="adv-content">
              支持四层(TCP/UDP)以及七层(HTTP/HTTPS)协议负载，满足不同应用场景需求。
            </div>
          </li>
          <li>
            <div class="adv-icon adv-icon-3" />
            <div class="adv-title">
              提高云服务器可用性
            </div>
            <div class="adv-content">
              将前端访问转发给后端两个或两个以上业务节点，提高了云服务器可利用性。
            </div>
          </li>
          <li>
            <div class="adv-icon adv-icon-4" />
            <div class="adv-title">
              便于横向扩展
            </div>
            <div class="adv-content">
              后端节点根据实际场景需求可自由地增加或减少。
            </div>
          </li>
          <li>
            <div class="adv-icon adv-icon-5" />
            <div class="adv-title">
              适用于高并发访问的业务
            </div>
            <div class="adv-content">
              高并发业务访问由多个节点均衡分摊，或按指定权重值承受不同的负载。
            </div>
          </li>
          <li>
            <div class="adv-icon adv-icon-6" />
            <div class="adv-title">
              消除单节点故障
            </div>
            <div class="adv-content">
              采用多个节点提供业务访问处理，从而避免了单个节点故障引发业务停滞的问题。
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
                  多种协议支持
                  <span
                    class="sed-title"
                  >丰富的协议支持，满足您多样化的应用场景</span>
                </div>
                <div class="content">
                  <div>
                    具体协议：支持包含TCP协议和UDP协议的四层负载均衡，和包含HTTP协议和HTTPS协议的七层负载均衡。
                  </div>
                  <div>
                    证书管理：针对HTTPS协议提供集中化的证书管理系统，满足用户的可靠、安全传输等需求。
                  </div>
                </div>
              </div>
            </li>
            <li class="clearfix">
              <span class="pp-icon pp-icon-2" />
              <div class="content-wrap">
                <div class="content-title">
                  多层次容灾保障
                  <span
                    class="sed-title"
                  >提供多层次的容灾策略与高可用的用户体验</span>
                </div>
                <div class="content">
                  <div>
                    健康检查：定时检测后端云服务器的运行状况，一旦检测到云服务器异常，则不会再转发流量到异常实例上，保证可用性。
                  </div>
                  <div>
                    集群部署：采用集群部署，各机器之间会话同步，机器故障和集群维护对用户透明，无单点故障。
                  </div>
                </div>
              </div>
            </li>
            <li class="clearfix">
              <span class="pp-icon pp-icon-3" />
              <div class="content-wrap">
                <div class="content-title">
                  智能调度
                  <span
                    class="sed-title"
                  >多种调度算法与转发模式，提升应用部署灵活性</span>
                </div>
                <div class="content">
                  <div>
                    调度算法：支持加权轮询和最小连接数调度算法，可根据自身需求选择相应算法来分配用户流量。
                  </div>
                  <div>
                    域名URL转发：支持根据不同的域名和URL进行流量调度，提升应用系统灵活性。
                  </div>
                </div>
              </div>
            </li>
            <li class="clearfix">
              <span class="pp-icon pp-icon-4" />
              <div class="content-wrap">
                <div class="content-title">
                  会话保持
                  <span
                    class="sed-title"
                  >将一定时间内来自同一用户的访问请求转发到同一服务器上处理，实现用户访问连续性</span>
                </div>
                <div class="content">
                  <div>
                    基于源IP的会话保持：四层（TCP/UDP）负载均衡通过IP地址实现会话保持。
                  </div>
                  <div>
                    基于cookie的会话保持：七层(HTTP/HTTPS)负载均衡通过cookie支持会话保持。
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 架构部署 -->
    <div id="framework" class="server-module module-marg-top">
      <p class="module-title">
        <span class="module-title-name">架构部署</span>
        <span class="group-span" />
      </p>
      <div class="slb-frame" />
    </div>
    <!-- 常见问题 -->
    <div id="process" class="faq-wrap">
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
export default {
  components: { AnchorNav },
  data () {
    return {
      navList: [
        {
          id: 'trait',
          title: '产品特点'
        },
        {
          id: 'function',
          title: '产品功能'
        },
        {
          id: 'framework',
          title: '架构部署'
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
//负载均衡
.info-banner {
  background: url('https://ydidc-test.oss-cn-shanghai.aliyuncs.com/idc-mall/balancing/banner.png') no-repeat center;
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
//产品特点
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
    width: 36px;
    height: 36px;
    margin: 0 auto;
  }
  .adv-icon-1 {
    background: url(~/static/img/balancing/product-spe-1.png);
  }
  .adv-icon-2 {
    background: url(~/static/img/balancing/product-spe-2.png) no-repeat center;
  }
  .adv-icon-3 {
    background: url(~/static/img/balancing/product-spe-3.png) no-repeat center;
  }
  .adv-icon-4 {
    background: url(~/static/img/balancing/product-spe-4.png) no-repeat center;
  }
  .adv-icon-5 {
    background: url(~/static/img/balancing/product-spe-5.png) no-repeat center;
  }
  .adv-icon-6 {
    background: url(~/static/img/balancing/product-spe-6.png) no-repeat center;
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
.module-marg-top {
  margin-top: 80px;
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
.product-power {
  margin-top: 60px;
  border: solid 1px #cfd6e3;
  background: #fff;
  ul {
    margin: 0;
  }
}
.product-power li {
  border-bottom: solid 1px #cfd6e3;
  .pp-icon {
    float: left;
    display: inline-block;
    width: 45px;
    height: 45px;
    margin: 30px 35px;
  }
  .pp-icon-1 {
    background: url(~/static/img/balancing/product-function-1.png) no-repeat
      center;
  }
  .pp-icon-2 {
    background: url(~/static/img/balancing/product-function-2.png) no-repeat
      center;
  }
  .pp-icon-3 {
    background: url(~/static/img/balancing/product-function-3.png) no-repeat
      center;
  }
  .pp-icon-4 {
    background: url(~/static/img/balancing/product-function-4.png) no-repeat
      center;
  }
}
.content-wrap {
  float: left;
  width: 90%;
  padding-top: 18px;
  padding-bottom: 20px;
}
.content-title {
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 46px;
  letter-spacing: 0px;
  font-weight: bold;
  color: #000000;
}
.sed-title {
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 20px;
  letter-spacing: 0px;
  color: #333333;
  margin-left: 40px;
}
.content {
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 20px;
  letter-spacing: 0px;
  color: #000000;
}
.content div {
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 30px;
  letter-spacing: 0px;
  color: #666666;
  position: relative;
  margin-left: 15px;
}
.content div:before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: #0080ff;
  border-radius: 50%;
  position: absolute;
  top: 12px;
  left: -15px;
}
//架构部署
.module-marg-top {
  margin-top: 80px;
}
.slb-frame {
  margin-top: 65px;
  margin-bottom: 65px;
  width: 100%;
  height: 700px;
  background: url(~/static/img/balancing/slb_frame.jpg) no-repeat center;
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
