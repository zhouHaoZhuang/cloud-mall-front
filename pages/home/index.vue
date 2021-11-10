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
      <div class="public-box">
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

          </div>
          <div class="product-con">
            
          </div>
          <ProductItem />
        </div>
        <div class="right">
          <div class="top">
            <ProductItem />
          </div>
          <div class="bot">
            <div class="bot1">
              <ProductItem />
            </div>
            <div class="bot2">
              <ProductItem />
            </div>
          </div>
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
