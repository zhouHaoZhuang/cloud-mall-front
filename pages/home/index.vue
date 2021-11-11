<template>
  <div class="home-container">
    <!-- 轮播图 -->
    <div class="banner-wrap">
      <div class="banner">
        <a-carousel ref="banner" effect="fade" dots-class="dot">
          <div class="banner-item banner-item1">
            <!-- info -->
            <div class="container banner-info-box">
              <div class="banner-info" :style="bottomStyle">
                <h2>浙江云盾助力企业快速上云</h2>
                <div class="btn">
                  最新活动
                </div>
              </div>
            </div>
          </div>
          <div class="banner-item banner-item2" />
        </a-carousel>
      </div>
      <div class="more">
        <div class="container">
          更多>
        </div>
      </div>
    </div>
    <!-- 快捷入口 -->
    <div class="entrance-wrap">
      <div class="entrance container">
        <div
          v-for="(item, index) in entranceList"
          :key="index"
          class="item"
          :style="item.padding"
        >
          <div class="left-img" :style="item.bgPosition" />
          <div class="right">
            <div class="title">
              {{ item.title }}
            </div>
            <div class="info">
              {{ item.info }}
            </div>
            <div v-if="item.more" class="more">
              查看详情 >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 产品 -->
    <div class="product-wrap">
      <div class="public-box" style="margin-bottom: 80px">
        <div class="content">
          <div class="public-title">
            浙江云盾为您提供
            <span>高速、稳定、安全、弹性</span>
            的云计算服务
          </div>
          <div class="public-info">
            计算、存储、监控、安全，完善的云产品满足您的一切所需
          </div>
        </div>
      </div>
      <div class="container product">
        <div class="left">
          <div class="product-top">
            <img
              src="~/static/img/home/product-icon1.png"
              alt=""
              class="left-img"
            >
            <span class="title">云计算服务</span>
          </div>
          <div class="product-con">
            <ProductItem
              v-for="(ele, index) in productList.one"
              :key="index"
              :item-data="ele"
            />
          </div>
        </div>
        <div class="right">
          <div class="top">
            <div class="product-top">
              <img
                src="~/static/img/home/product-icon2.png"
                alt=""
                class="left-img"
              >
              <span class="title">域名与网站</span>
            </div>
            <div class="product-con">
              <ProductItem
                v-for="(ele, index) in productList.two"
                :key="index"
                :item-data="ele"
              />
            </div>
          </div>
          <div class="bot">
            <div class="bot1">
              <div class="product-top">
                <img
                  src="~/static/img/home/product-icon3.png"
                  alt=""
                  class="left-img"
                >
                <span class="title">安全服务</span>
              </div>
              <div class="product-con">
                <ProductItem
                  v-for="(ele, index) in productList.three"
                  :key="index"
                  :item-data="ele"
                />
              </div>
            </div>
            <div class="bot2">
              <div class="product-top">
                <img
                  src="~/static/img/home/product-icon4.png"
                  alt=""
                  class="left-img"
                >
                <span class="title">IDC服务</span>
              </div>
              <div class="product-con">
                <ProductItem
                  v-for="(ele, index) in productList.four"
                  :key="index"
                  :item-data="ele"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 资质 -->
    <div class="honor-wrap">
      <div class="public-box" style="margin-bottom: 55px">
        <div class="content">
          <div class="public-title">
            提供
            <span>安全合规</span>
            的云计算服务
          </div>
          <div class="public-info">
            权威认证的云计算服务，充分保障您的业务实践与业务安全
          </div>
        </div>
      </div>
      <div class="container honor">
        <div v-for="(item, index) in honorList" :key="index" class="item">
          <img :src="item.img" alt="" class="img">
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
    <!-- 优势 -->
    <div class="wsymain-wrap">
      <div class="public-box" style="margin-bottom: 80px">
        <div class="content">
          <div class="public-title">
            为什么
            <span>选择</span>
            浙江云盾
          </div>
          <div class="public-info">
            完善的云产品，为用户提供多种服务支持和保障，让云端部署更轻松、更高效
          </div>
        </div>
      </div>
      <div class="container wsymain">
        <div class="left">
          <div
            v-for="(item, index) in wsymainList"
            :key="index"
            :class="index === wsymainSelectIndex ? 'item active' : 'item'"
            :style="item.width"
            @click="wsymainSelect(index)"
          >
            <div
              v-if="index !== wsymainSelectIndex"
              class="img"
              :style="item.bgPosition"
            />
            <div v-else class="img" :style="item.activePosition" />
            <span>{{ item.title }}</span>
          </div>
        </div>
        <div
          class="right"
          :style="`background: url(${wsymainDetail.bg}) no-repeat center`"
        >
          <h3 class="title">
            {{ wsymainDetail.title }}
          </h3>
          <div class="info">
            {{ wsymainDetail.info }}
          </div>
          <div class="btns">
            <div class="btn" @click="handleClickJump('')">
              查看详情
            </div>
            <div class="btn" @click="handleClickJump('')">
              联系我们
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 地图 -->
    <div class="map-wrap">
      <div class="public-box" style="margin-bottom: 85px">
        <div class="content">
          <div class="public-title">
            您的业务可以
            <span>遍布</span>
            世界各地
          </div>
          <div class="public-info">
            网络拉近了人类的距离，云计算推动了文明的新高度
          </div>
        </div>
      </div>
      <div class="container map">
        <div class="content">
          <div class="region-dot position1">
            <div class="dot" />
            <div class="pulse" />
          </div>
          <div class="region-dot position2">
            <div class="dot" />
            <div class="pulse" />
          </div>
          <div class="region-dot position3">
            <div class="dot" />
            <div class="pulse" />
          </div>
          <div class="region-dot position4">
            <div class="dot" />
            <div class="pulse" />
          </div>
          <div class="region-dot position5">
            <div class="dot" />
            <div class="pulse" />
          </div>
          <div class="region-dot position6">
            <div class="dot" />
            <div class="pulse" />
          </div>
          <div class="region-txt position7">
            华北
          </div>
          <div class="region-dot position8">
            <div class="dot" />
            <div class="pulse" />
          </div>
          <div class="region-txt position9">
            华东
          </div>
          <div class="region-dot position10">
            <div class="dot" />
            <div class="pulse" />
          </div>
          <div class="region-txt position11">
            香港
          </div>
          <div class="region-dot position12">
            <div class="dot" />
            <div class="pulse" />
          </div>
          <div class="region-txt position13">
            华南
          </div>
        </div>
      </div>
    </div>
    <!-- 解决方案 -->
    <div class="programme-wrap">
      <div class="public-box" style="margin-bottom: 80px">
        <div class="content">
          <div class="public-title">
            浙江云盾
            <span>解决</span>
            方案
          </div>
          <div class="public-info">
            根据行业特性，为您提供高可用、安全的解决方案
          </div>
        </div>
      </div>
      <div class="programme">
        <div class="container programme-content">
          <div class="banner-list-wrap">
            <ul
              :style="`left:${programmeIndex * 300}px`"
              :class="
                hasAni
                  ? programmeDirection === 'left'
                    ? 'transtion-left'
                    : 'transtion-right'
                  : ''
              "
            >
              <li
                v-for="(item, index) in programmeList"
                :key="index + item.title"
                :style="`background: url(${item.bg}) no-repeat center`"
              >
                <div class="bg-mask" />
                <div class="icon" :style="item.iconPosition" />
                <div class="title">
                  {{ item.title }}
                </div>
                <div class="info">
                  {{ item.info }}
                </div>
                <div class="btn" @click="handleClickJump(item.path)">
                  查看详情
                </div>
              </li>
            </ul>
            <div class="arr-l" @click="handleProgrammePrev">
              <div class="bg" />
            </div>
            <div class="arr-r" @click="handleProgrammeNext">
              <div class="bg" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 新闻动态 -->
    <div class="news-wrap">
      <div class="public-box" style="margin-bottom: 80px">
        <div class="content">
          <div class="public-title">
            浙江云盾
            <span>新闻</span>
            动态
          </div>
          <div class="public-info">
            为您提供最新行业资讯、活动公告、产品发布，汇聚最前沿最流行的云计算技术
          </div>
        </div>
      </div>
      <div class="container news" />
    </div>
  </div>
</template>

<script>
import ProductItem from '../../components/Home/productItem/index.vue'
export default {
  components: { ProductItem },
  data () {
    return {
      time: null,
      bannerIndex: 1,
      bottomStyle: 'bottom:235px',
      entranceList: [
        {
          title: '云服务器',
          info: '浙江云盾-安全、稳定、低成本、满意付款',
          more: false,
          path: '',
          morePath: '',
          bgPosition: 'width:74px;background-position:-227px 0',
          padding: 'padding:0 45px 0 102px'
        },
        {
          title: 'SSL证书',
          info: '数字证书一站式管理，快速接入HTTPS安全',
          more: false,
          path: '',
          morePath: '',
          bgPosition: 'width:92px;background-position:-114px 0',
          padding: 'padding:0 45px 0 113px'
        },
        {
          title: '虚拟主机',
          info: '基于云计算的虚拟主机快速建站服务',
          more: false,
          path: '',
          morePath: '',
          bgPosition: 'width:106px;background-position: 0 0',
          padding: 'padding:0 35px 0 130px'
        },
        {
          title: '了解浙江云盾',
          info: '专业的云计算服务提供商',
          more: true,
          path: '',
          morePath: '',
          bgPosition: 'width:78px;background-position:-324px 0',
          padding: 'padding:0 35px 0 110px'
        }
      ],
      productList: {
        one: [
          {
            title: '云服务器',
            info: '极速稳定高弹性的计算服务',
            icon: 'iconyunfuwuqi',
            path: '',
            hot: true,
            disable: false
          },
          {
            title: '负载均衡',
            info: '高性能流量分发的负载均衡服务',
            icon: 'iconfuzhaijunheng',
            path: '',
            hot: false,
            disable: false
          },
          {
            title: '云数据库MySQL',
            info: '稳定可靠、可弹性伸缩的数据方案',
            icon: 'iconyunshujuku',
            path: '',
            hot: false,
            disable: false
          },
          {
            title: '云数据库 SQL Server',
            info: '安全运行、轻松管理的数据方案',
            icon: 'iconyunshujunkuSQLServer',
            path: '',
            hot: false,
            disable: false
          },
          {
            title: '对象存储',
            info: '高可用、易用、低成本、一站式',
            icon: 'iconduixiangcunchu',
            path: '',
            hot: false,
            disable: false
          }
        ],
        two: [
          {
            title: '云虚拟主机',
            info: '基于云计算的虚拟主机服务',
            icon: 'iconyunxunizhuji',
            path: '',
            hot: true,
            disable: false
          },
          {
            title: '域名注册',
            info: '提供五星级的域名注册服务',
            icon: 'iconyumingzhuche',
            path: '',
            hot: false,
            disable: false
          },
          {
            title: '网站备案',
            info: '免费、快速、便捷的备案服务',
            icon: 'iconwangzhanbeian',
            path: '',
            hot: false,
            disable: false
          },
          {
            title: 'CDN加速',
            info: '智能调度的内容分发服务',
            icon: 'iconCDNjiasu',
            path: '',
            hot: false,
            disable: false
          }
        ],
        three: [
          {
            title: '云帮手',
            info: '提供跨云一站式云服务器管理',
            icon: 'iconyunbangshou',
            path: '',
            hot: false,
            disable: true
          },
          {
            title: 'SSL证书',
            info: '提供一站式的证书部署系统',
            icon: 'iconSSLzhengshu',
            path: '',
            hot: false,
            disable: false
          }
        ],
        four: [
          {
            title: '服务器托管',
            info: '安全贴心高品质的托管服务',
            icon: 'iconfuwuqituoguan',
            path: '',
            hot: false,
            disable: false
          },
          {
            title: '裸金属服务器',
            info: '高性能安全隔离物理集群服务',
            icon: 'iconwulijifuwuqi',
            path: '',
            hot: false,
            disable: false
          }
        ]
      },
      honorList: [
        {
          name: 'IDC/云计算资质',
          img: require('~/static/img/home/honor1.png')
        },
        {
          name: 'CNNIC',
          img: require('~/static/img/home/honor2.png')
        },
        {
          name: '中国移动',
          img: require('~/static/img/home/honor3.png')
        },
        {
          name: '中国电信',
          img: require('~/static/img/home/honor4.png')
        },
        {
          name: '中国联通',
          img: require('~/static/img/home/honor5.png')
        },
        {
          name: '软件著作权',
          img: require('~/static/img/home/honor6.png')
        }
      ],
      wsymainList: [
        {
          title: '备案',
          width: 'width:141px',
          bgPosition: 'background-position:0px 0px',
          activePosition: 'background-position:0px -85px',
          detail: {
            title: '0元免费备案',
            info: '为用户提供免费备案服务，备案过程0担忧——1V1备案处理机制，最快1个工作日取得备案号。',
            bg: require('~/static/img/home/av-bg5.jpg')
          }
        },
        {
          title: '赔偿',
          width: 'width:141px',
          bgPosition: 'background-position:-72px 0px',
          activePosition: 'background-position:-72px -85px',
          detail: {
            title: '100倍故障赔偿',
            info: '由于浙江云盾故障导致产品无法正常使用，我们将提供100倍的故障时间赔偿让您使用舒心。',
            bg: require('~/static/img/home/av-bg4.jpg')
          }
        },
        {
          title: '退款',
          width: 'width:141px',
          bgPosition: 'background-position:-144px 0px',
          activePosition: 'background-position:-144px -85px',
          detail: {
            title: '5天无理由退款',
            info: '浙江云盾承诺用户购买云服务器5天内无条件退款， 致力为您打造更优良的服务器体验环境。',
            bg: require('~/static/img/home/av-bg3.jpg')
          }
        },
        {
          title: '客户支持',
          width: 'width:222px',
          bgPosition: 'background-position:-216px 0px',
          activePosition: 'background-position:-216px -85px',
          detail: {
            title: '7X24小时多渠道服务支持',
            info: '专业的售后工程师团队为您提供7*24*365技术服务，保障产品的无忧使用和业务的稳定运行。',
            bg: require('~/static/img/home/av-bg2.jpg')
          }
        },
        {
          title: 'VIP服务',
          width: 'width:222px',
          bgPosition: 'background-position:-288px 0px',
          activePosition: 'background-position:-288px -85px',
          detail: {
            title: 'VIP多对1服务',
            info: '浙江云盾针对VIP客户，将通过建立微信群/QQ讨论组/电话等形式为您安排多人的技术团队提供服务。',
            bg: require('~/static/img/home/av-bg1.jpg')
          }
        }
      ],
      wsymainDetail: {
        title: '0元免费备案',
        info: '为用户提供免费备案服务，备案过程0担忧——1V1备案处理机制，最快1个工作日取得备案号。',
        bg: require('~/static/img/home/av-bg5.jpg')
      },
      wsymainSelectIndex: 0,
      programmeList: [
        {
          title: '金融云解决方案',
          info: '金融云为客户提供量身定制的云计算服务，IT硬件零投入，云设施运维零维护，高品质保障的售后服务机制，帮助金融用户高效应用云计算服务，是您互联网转型的首选。',
          path: '',
          bg: require('~/static/img/home/finance-photo.jpg'),
          iconPosition: 'background-position:0 -60px'
        },
        {
          title: '移动云解决方案',
          info: '移动云应用虚拟化系统为客户提供最佳的应用性能及灵活的应用虚拟化服务，帮助客户实现手机、平板电脑等移动设备安全顺畅地访问服务器上各种应用软件。',
          path: '',
          bg: require('~/static/img/home/mobile-photo.jpg'),
          iconPosition: 'background-position:0 -120px'
        },
        {
          title: '电商云解决方案',
          info: '电商云帮助电商客户快速实现平台搭建、节约成本、应对业务高并发、强化安全防护能力，助力电商客户快速实现金融创新及业务增收的目标。',
          path: '',
          bg: require('~/static/img/home/busin-photo.jpg'),
          iconPosition: 'background-position:0 -180px'
        },
        {
          title: '游戏云解决方案',
          info: '游戏云为客户游戏开发、游戏运营提供专属服务集群；多场景多类型的游戏部署解决方案，同时提供尊贵VIP售后服务，为客户游戏稳定运行提供基石。',
          path: '',
          bg: require('~/static/img/home/game-photo.jpg'),
          iconPosition: 'background-position:0 -240px'
        },
        {
          title: '网站云解决方案',
          info: '网站云为企业及开发者提供灵活弹性自动化的基础IT设施建设、按需付费的服务模式及成本的运维服务体系，帮助客户转型，推动企业核心业务创新发展。',
          path: '',
          bg: require('~/static/img/home/cloud-photo.jpg'),
          iconPosition: 'background-position:0 0'
        },
        {
          title: '金融云解决方案',
          info: '金融云为客户提供量身定制的云计算服务，IT硬件零投入，云设施运维零维护，高品质保障的售后服务机制，帮助金融用户高效应用云计算服务，是您互联网转型的首选。',
          path: '',
          bg: require('~/static/img/home/finance-photo.jpg'),
          iconPosition: 'background-position:0 -60px'
        },
        {
          title: '移动云解决方案',
          info: '移动云应用虚拟化系统为客户提供最佳的应用性能及灵活的应用虚拟化服务，帮助客户实现手机、平板电脑等移动设备安全顺畅地访问服务器上各种应用软件。',
          path: '',
          bg: require('~/static/img/home/mobile-photo.jpg'),
          iconPosition: 'background-position:0 -120px'
        },
        {
          title: '电商云解决方案',
          info: '电商云帮助电商客户快速实现平台搭建、节约成本、应对业务高并发、强化安全防护能力，助力电商客户快速实现金融创新及业务增收的目标。',
          path: '',
          bg: require('~/static/img/home/busin-photo.jpg'),
          iconPosition: 'background-position:0 -180px'
        },
        {
          title: '游戏云解决方案',
          info: '游戏云为客户游戏开发、游戏运营提供专属服务集群；多场景多类型的游戏部署解决方案，同时提供尊贵VIP售后服务，为客户游戏稳定运行提供基石。',
          path: '',
          bg: require('~/static/img/home/game-photo.jpg'),
          iconPosition: 'background-position:0 -240px'
        }
      ],
      programmeIndex: -4,
      programmeDirection: 'left',
      programmeLoading: false,
      hasAni: true
    }
  },
  watch: {
    bannerIndex: {
      handler (newVal, oldVal) {
        console.log('轮播图切换回调', newVal, oldVal)
        this.bottomStyle =
          newVal === 1 ? 'bottom:235px;opacity:1' : 'bottom:-150px;opacity:0'
      },
      immediate: true
    }
  },
  mounted () {
    this.bannerTime()
    console.log(this.productList)
  },
  beforeDestroy () {
    clearInterval(this.time)
  },
  methods: {
    // 点击跳转
    handleClickJump (path) {
      if (!path) {
        return
      }
      this.$router.push(path)
    },
    // 定时器自动轮播
    bannerTime () {
      this.time = setInterval(() => {
        this.nextBanner()
      }, 3000)
    },
    // 轮播图切换
    nextBanner () {
      this.bannerIndex = this.bannerIndex === 1 ? 2 : 1
      this.$refs.banner.next()
    },
    // 优势选择
    wsymainSelect (index) {
      this.wsymainSelectIndex = index
      this.wsymainDetail = { ...this.wsymainList[index].detail }
    },
    // 解决方案下一张
    handleProgrammeNext () {
      if (this.programmeLoading) {
        return
      }
      this.programmeLoading = true
      this.programmeDirection = 'left'
      this.programmeList.push(this.programmeList[Math.abs(this.programmeIndex)])
      this.programmeIndex--
      setTimeout(() => {
        this.programmeLoading = false
      }, 800)
    },
    // 解决方案上一张
    handleProgrammePrev () {
      if (this.programmeLoading) {
        return
      }
      this.programmeLoading = true
      this.programmeDirection = 'right'
      this.programmeList.unshift(this.programmeList.pop())
      this.programmeIndex++
      setTimeout(() => {
        // this.hasAni = false
        // this.programmeIndex = 0
        this.programmeLoading = false
      }, 800)
    }
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  background: #fafafa;
  .banner-wrap {
    height: 660px;
    position: relative;
    .banner {
      min-width: 1220px;
      height: 100%;
      position: relative;
      .banner-item {
        width: 100%;
        height: 660px;
        .banner-info-box {
          position: relative;
          height: 100%;
          .banner-info {
            position: absolute;
            left: 0;
            color: #fff;
            transition: all 0.8s;
            h2 {
              font-size: 46px;
              color: #fff;
            }
            .btn {
              margin: 75px 0 0;
              font-size: 16px;
              width: 198px;
              height: 38px;
              border: 1px solid #fff;
              line-height: 38px;
              text-align: center;
              cursor: pointer;
            }
          }
        }
      }
      .banner-item1 {
        background: url('~/static/img/home/banner1.jpg') no-repeat center;
      }
      .banner-item2 {
        background: url('~/static/img/home/banner2.jpg') no-repeat center;
      }
    }
    .more {
      height: 50px;
      line-height: 50px;
      text-align: right;
      color: #fff;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(255, 255, 255, 0.16);
      overflow: hidden;
    }
  }
  .entrance-wrap {
    padding: 55px 0;
    background: #fff;
    .entrance {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .item {
        width: 25%;
        display: flex;
        position: relative;
        .left-img {
          height: 70px;
          background: url('~/static/img/home/icons.png') no-repeat;
          position: absolute;
          left: 0;
          top: 0;
        }
        .right {
          font-size: 12px;
          .title {
            font-size: 18px;
            color: #000;
            margin-bottom: 5px;
          }
          .info {
            color: #666;
            line-height: 20px;
          }
          .more {
            color: #ff8a00;
          }
        }
      }
    }
  }
  // 首页公共标题盒子
  .public-box {
    font-size: 30px;
    color: #000;
    text-align: center;
    .content {
      .public-title {
        span {
          color: #059fff;
        }
      }
      .public-info {
        font-size: 14px;
        margin: 13px 0 0;
        color: #666;
      }
    }
  }
  .product-wrap {
    padding: 90px 0 100px;
    background: #fafafa;
    overflow: hidden;
    min-width: 1220px;
    .product {
      height: 631px;
      display: flex;
      color: #fff;
      .left {
        width: 459px;
        height: 631px;
        margin-right: 20px;
        background: url('~/static/img/home/product1.png') no-repeat center;
        .product-con {
          padding: 32px 0 20px 76px;
          overflow: hidden;
        }
      }
      .right {
        .top {
          width: 700px;
          height: 303px;
          margin-bottom: 20px;
          background: url('~/static/img/home/product2.png') no-repeat center;
          .product-con {
            display: flex;
            flex-wrap: wrap;
            padding: 32px 0 20px 76px;
            overflow: hidden;
            .product-item {
              width: 260px;
              &:hover {
                background: #47556c;
              }
            }
          }
        }
        .bot {
          display: flex;
          .bot1 {
            width: 340px;
            height: 308px;
            margin-right: 20px;
            background: url('~/static/img/home/product3.png') no-repeat center;
            .product-item {
              &:hover {
                background: #27addc;
              }
            }
          }
          .bot2 {
            width: 340px;
            height: 308px;
            background: url('~/static/img/home/product4.png') no-repeat center;
          }
        }
      }
      .product-top {
        display: flex;
        align-items: center;
        font-size: 16px;
        height: 64px;
        padding-left: 33px;
        position: relative;
        .left-img {
          width: 24px;
          height: 25px;
          margin-right: 10px;
        }
        &::after {
          content: '';
          position: absolute;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 1);
          opacity: 0.18;
        }
      }
      .product-con {
        padding-left: 49px;
        padding-top: 21px;
        .product-item {
          width: 250px;
        }
      }
    }
  }
  .honor-wrap {
    padding: 80px 0 60px;
    overflow: hidden;
    background: #fff;
    .honor {
      display: flex;
      justify-content: space-between;
      .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        width: 200px;
        padding-top: 10px;
        height: 160px;
        margin: 25px 0 20px 4px;
        .img {
          margin: 0 auto;
          margin-bottom: 15px;
        }
        span {
          font-size: 14px;
          color: #000;
        }
      }
      .item:nth-child(1) {
        margin-left: 0;
      }
      .item:hover {
        box-shadow: 0px 10px 20px rgba(2, 48, 76, 0.1);
      }
    }
  }
  .wsymain-wrap {
    background: #f5f6f7;
    padding: 80px 0;
    overflow: hidden;
    .wsymain {
      display: flex;
      .left {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        text-align: center;
        width: 500px;
        font-size: 18px;
        height: 315px;
        overflow: hidden;
        .item {
          height: 142px;
          background: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-right: 25px;
          margin-bottom: 30px;
          padding-top: 20px;
          color: #000;
          cursor: pointer;
          .img {
            width: 65px;
            height: 74px;
            margin: 0 auto 9px;
            background: url('~/static/img/home/wsymain-icons.png') no-repeat;
          }
        }
        .item.active {
          color: #fff;
          background: url('~/static/img/home/av-active.jpg') no-repeat center;
        }
      }
      .right {
        width: 720px;
        height: 315px;
        padding: 40px 0 0 40px;
        background: #fff;
        .title {
          font-size: 30px;
          color: #000;
        }
        .info {
          font-size: 16px;
          margin: 16px 0 35px;
          color: #666;
          line-height: 30px;
          width: 380px;
        }
        .btns {
          display: flex;
          .btn {
            width: 178px;
            height: 48px;
            font-size: 18px;
            color: #666;
            margin-right: 20px;
            border: 1px solid #ddd;
            line-height: 48px;
            text-align: center;
            margin-right: 20px;
          }
          .btn:nth-child(1) {
            border: 1px solid #059fff;
            background: #059fff;
            color: #fff;
          }
        }
      }
    }
  }
  .map-wrap {
    padding: 80px 0 40px;
    background: #fff;
    .map {
      width: 100%;
      position: relative;
      height: 601px;
      background: url('~/static/img/home/world-map-bg.png') no-repeat center;
      .content {
        position: relative;
        width: 1000px;
        margin: 0 auto;
      }
      .region-dot,
      .region-txt {
        position: absolute;
        top: 0;
        left: 0;
      }
      .region-dot {
        .dot {
          width: 16px;
          height: 16px;
          border-radius: 16px;
          background: #14cc45;
        }
        .pulse {
          position: absolute;
          top: -36px;
          left: -36px;
          height: 88px;
          width: 88px;
          border-radius: 48px;
          background: #14cc45;
          opacity: 0.12;
          animation: warn 2s ease-out;
          animation-iteration-count: infinite;
        }
      }
      .region-txt {
        font-size: 16px;
        color: #808080;
      }
      .position1 {
        left: 50px;
        top: 126px;
      }
      .position2 {
        left: 179px;
        top: 230px;
      }
      .position3 {
        left: 258px;
        top: 443px;
      }
      .position4 {
        left: 545px;
        top: 206px;
      }
      .position5 {
        left: 829px;
        top: 230px;
      }
      .position6 {
        left: 884px;
        top: 222px;
        .dot,
        .pulse {
          background: #059fff;
        }
      }
      .position7 {
        left: 906px;
        top: 202px;
      }
      .position8 {
        left: 871px;
        top: 272px;
        .dot,
        .pulse {
          background: #059fff;
        }
      }
      .position9 {
        left: 896px;
        top: 272px;
      }
      .position10 {
        left: 855px;
        top: 311px;
        .dot,
        .pulse {
          background: #059fff;
        }
      }
      .position11 {
        left: 872px;
        top: 321px;
      }
      .position12 {
        left: 832px;
        top: 302px;
        .dot,
        .pulse {
          background: #059fff;
        }
      }
      .position13 {
        left: 796px;
        top: 316px;
      }
    }
  }
  .programme-wrap {
    padding-top: 80px;
    .programme {
      height: 500px;
      background: #292e33;
      .container {
        width: 1200px;
      }
      .programme-content {
        height: 100%;
        .banner-list-wrap {
          position: relative;
          height: 100%;
          overflow: hidden;
          ul {
            position: absolute;
            left: 0;
            top: 0;
            width: 999999px;
            height: 500px;
            margin: 0;
            display: flex;
            li {
              position: relative;
              height: 500px;
              width: 300px;
              transition: all 0.5s;
              color: #fff;
              font-size: 20px;
              div {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                transition: top 0.5s;
              }
              .bg-mask {
                height: 100%;
                position: absolute;
                width: 100%;
                background-color: #059fff;
                display: none;
              }
              .icon {
                top: 170px;
                width: 60px;
                height: 60px;
                background: url('~/static/img/home/solution-items-icon.png')
                  no-repeat;
              }
              .title {
                top: 280px;
              }
              .info {
                text-indent: 26px;
                font-size: 12px;
                width: 100%;
                height: 150px;
                padding: 0 30px;
                overflow: hidden;
                top: 282px;
                line-height: 2;
                opacity: 0;
                transition: all 0.6s;
              }
              .btn {
                top: 452px;
                width: 118px;
                height: 34px;
                line-height: 32px;
                text-align: center;
                border: 1px solid #fff;
                font-size: 14px;
                opacity: 0;
                transition: all 0.6s;
              }
            }
            li:nth-child(odd) .bg-mask {
              opacity: 0.5;
            }
            li:nth-child(even) .bg-mask {
              opacity: 0.8;
            }
            li:hover {
              .icon {
                top: 76px;
              }
              .title {
                top: 168px;
              }
              .info {
                top: 230px;
                opacity: 1;
              }
              .btn {
                top: 380px;
                opacity: 1;
              }
              .bg-mask {
                display: block;
              }
            }
          }
          .transtion-left {
            transition: left 0.6s cubic-bezier(0.17, 0.67, 0.95, 0.79);
          }
          .transtion-right {
            transition: left 0.6s;
          }
          .arr-l,
          .arr-r {
            position: absolute;
            top: 0;
            width: 40px;
            height: 500px;
            opacity: 0;
            transition: all 0.5s;
            background-color: rgba(255, 255, 255, 0.08);
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            .bg {
              width: 20px;
              height: 36px;
              background: url('~/static/img/home/index-sprite.png') no-repeat;
              background-position: 0 -1538px;
            }
          }
          .arr-l {
            left: 0;
          }
          .arr-r {
            right: 0;
            .bg {
              background-position: 0 -1500px;
            }
          }
        }
        .banner-list-wrap:hover {
          .arr-l,
          .arr-r {
            opacity: 1;
          }
        }
      }
    }
  }
  .news-wrap {
    padding: 75px 0 55px;
    overflow: hidden;
  }
}
@keyframes warn {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  30% {
    transform: scale(0);
    opacity: 0.1;
  }
  60% {
    transform: scale(0.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
<style>
/* antdv 走马灯指示点样式重写 */
.ant-carousel .slick-dots li button {
  width: 30px;
  height: 4px;
  border-radius: 0;
}
.ant-carousel .slick-dots li.slick-active button {
  width: 30px;
}
.ant-carousel .slick-dots-bottom {
  bottom: 85px;
}
</style>
