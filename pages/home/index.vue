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
      ]
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
        padding-top: 30px;
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
    }
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
