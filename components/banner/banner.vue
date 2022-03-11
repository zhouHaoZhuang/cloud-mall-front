<template>
  <div class="banner-container">
    <!-- 轮播图 -->
    <div class="banner-wrap">
      <div class="banner">
        <a-carousel
          ref="banner"
          effect="fade"
          dots-class="dot"
          :autoplay="true"
        >
          <div
            v-for="item in data"
            :key="item.id"
            class="banner-item"
            :style="`background: url(${item.pcPicture}) no-repeat center`"
            @click="goLink(item.pictureLink, item.openLinkType)"
          >
            <!-- info -->
            <div class="container banner-info-box">
              <div class="banner-info" :style="bottomStyle">
                <h2 v-if="item.display">
                  {{ item.title }}
                </h2>
                <div v-if="item.display" class="info">
                  {{ item.describe }}
                </div>
                <div
                  v-if="item.pcButtonName"
                  class="btn"
                  @click.stop="goButton(item.pcButtonLink, item.openLinkType)"
                >
                  {{ item.pcButtonName }}
                </div>
              </div>
            </div>
          </div>
        </a-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {},
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      bottomStyle: 'bottom:235px'
    }
  },
  computed: {
    ...mapState({
      webInfo: state => state.home.webInfo
    })
  },
  methods: {
    // 点击跳转
    handleClickJump (path) {
      if (!path) {
        return
      }
      this.$router.push(path)
    },
    // 点击banner进行页面跳转
    goLink (link, type) {
      if (type === '1') {
        this.$router.push(link)
      }
      if (type === '0') {
        const routeUrl = this.$router.resolve({
          path: link
        })
        window.open(routeUrl.href, '_blank')
      }
    },
    // 点击按钮页面跳转
    goButton (link, type) {
      if (type === '1') {
        this.$router.push(link)
      }
      if (type === '0') {
        const routeUrl = this.$router.resolve({
          path: link
        })
        window.open(routeUrl.href, '_blank')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-container {
  position: relative;
  .banner-wrap {
    height: 576px;
    position: relative;
    background-color: #ccc;
    .banner {
      min-width: 1220px;
      height: 100%;
      position: relative;
      .banner-item {
        width: 100%;
        height: 576px;
        background-size: cover !important;
        .banner-info-box {
          position: relative;
          height: 100%;
          .banner-info {
            position: absolute;
            top: 116px;
            left: 50%;
            width: 100%;
            transform: translateX(-50%);
            color: #fff;
            transition: all 0.8s;
            h2 {
              font-size: 70px;
              font-weight: 800;
              margin-bottom: 39px;
              text-align: center;
              color: #fff;
            }
            .info {
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              width: 1100px;
              font-size: 20px;
              text-align: center;
              line-height: 32px;
            }
            .btn {
              position: absolute;
              left: 50%;
              bottom: -100px;
              transform: translateX(-50%);
              font-size: 20px;
              width: 220px;
              height: 60px;
              background: linear-gradient(169deg, #0b73f0, #2fb4ff);
              border-radius: 30px;
              line-height: 60px;
              text-align: center;
              cursor: pointer;
              a {
                width: 100%;
                height: 100%;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
}
</style>
<style>
.ant-carousel .slick-dots-bottom {
  bottom: 30px;
}
</style>
