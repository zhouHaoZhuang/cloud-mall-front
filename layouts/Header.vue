<template>
  <div
    :class="{ 'layout-header': true, 'background-white': isWhite($route.path) }"
  >
    <div class="container header-box">
      <!-- logo -->
      <div class="logo" @click="handleClickJump('/')">
        <img :src="webInfo.websiteLogo" alt="">
        <!-- <h1>浙江云盾</h1> -->
      </div>
      <!-- nav -->
      <div class="nav">
        <div v-for="(item, index) in navList" :key="index" class="item">
          <nuxt-link v-if="item.path" class="jump noSubmenu" :to="item.path">
            <div class="title-wrap">
              {{ item.title }}
              <!-- <img
                v-if="index === 0"
                src="~/static/img/home/hot.png"
                alt=""
                class="hot"
              > -->
            </div>
            <!-- mask 鼠标进入nav展示列表 -->
            <div v-if="hoverIndex == index" class="popup-box">
              <div class="container popup-wrap">
                <HeaderItem
                  v-for="(ele, idx) in headerItemData"
                  :key="idx"
                  :item-data="ele"
                />
              </div>
            </div>
            <div class="underscore" />
          </nuxt-link>
          <a
            v-else
            class="jump noSubmenu"
            href="javascript:void(0)"
            @mouseenter="mouseEnter(index, item.show)"
            @mouseleave="mouseLeave"
          >
            <div class="title-wrap">
              <span>{{ item.title }}</span>
              <!-- <img
                v-if="index === 0"
                src="~/static/img/home/hot.png"
                alt=""
                class="hot"
              > -->
              <a-icon
                v-if="index === 4"
                style="margin-left: 5px"
                type="caret-down"
              />
            </div>
            <!-- mask 鼠标进入nav展示列表 -->
            <div v-if="hoverIndex == 4" class="popup-box">
              <div class="container popup-wrap">
                <HeaderItem
                  v-for="(ele, idx) in headerItemData"
                  :key="idx"
                  :item-data="ele"
                />
              </div>
            </div>
            <div class="underscore" />
          </a>
        </div>
      </div>
      <!-- login -->
      <div class="login">
        <!-- 语言 -->
        <!-- <div class="language">
          <div class="select">
            <span>中国站</span>
            <div class="arr" />
          </div>
          <div class="mask">
            <div class="item-select">
              中国站
            </div>
            <div class="item">
              简体中文
            </div>
          </div>
        </div> -->
        <!-- 备案 -->
        <!-- <div class="record">
          备案
        </div> -->
        <!-- 登录/注册 -->
        <div v-if="!isLogin" class="btns">
          <div
            v-show="allConfig && allConfig.enable_login == '1'"
            class="btn disembark"
            @click="handleClickJump('/login')"
          >
            登录
          </div>
          <div
            v-show="allConfig && allConfig.enable_register == '1'"
            class="btn"
            @click="handleClickJump('/register')"
          >
            免费注册
          </div>
        </div>
        <!-- 已登录用户信息 -->
        <div v-else class="userinfo">
          <img
            width="30px"
            src="~/static/img/home/member.png"
            alt=""
            @click="jumpCloudAdmin(token)"
          >
          <div class="name" @click="jumpCloudAdmin(token)">
            <!-- <i>*</i> -->
            <span>{{ userInfo.phone }}</span>
          </div>
          <!-- 控制台 -->
          <div class="control" @click="jumpCloudAdmin(token)">
            控制台
          </div>
          <!-- 登出 -->
          <div class="logout" @click="handleLoginOut">
            退出
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HeaderItem from '../components/HeaderItem/index.vue'
import { jumpCloudAdmin } from '@/utils/index.js'
export default {
  components: {
    HeaderItem
  },
  data () {
    return {
      navList: [
        {
          title: '首页',
          path: '/'
        },
        {
          title: '产品',
          path: '/cloud-choose',
          children: [
            {
              title: '云计算',
              list: [
                {
                  title: '云服务器',
                  info: '高速稳定高弹性的计算服务',
                  path: '/cloud-choose',
                  hot: true,
                  new: false
                },
                {
                  title: '负载均衡',
                  info: '高性能流量分发的负载均衡服务',
                  path: '/balancing-ba',
                  hot: false,
                  new: false
                },
                {
                  title: '对象存储',
                  info: '高可用、易扩展、低成本、一站式',
                  path: '/object-based-use',
                  hot: false,
                  new: false
                },
                {
                  title: '云数据库 MySQL',
                  info: '稳定可靠、可弹性伸缩的数据方案',
                  path: '/mysql',
                  hot: false,
                  new: false
                },
                {
                  title: '云数据库 SQL Server',
                  info: '安全运行、轻松管理的数据方案',
                  path: '/sqlserver',
                  hot: false,
                  new: false
                }
              ]
            },
            {
              title: '网站服务',
              list: [
                {
                  title: '云虚拟主机',
                  info: '基于云计算的虚拟主机服务',
                  path: '',
                  hot: true,
                  new: false
                },
                {
                  title: '域名注册',
                  info: '提供五星级的域名注册服务',
                  path: '/Domain-name',
                  hot: true,
                  new: false
                },
                {
                  title: 'CDN加速',
                  info: '智能调度的内容分发服务',
                  path: '',
                  hot: false,
                  new: false
                },
                {
                  title: '百度智能建站',
                  info: '智能化构建网站和小程序',
                  path: '',
                  hot: false,
                  new: true
                }
              ]
            },
            {
              title: 'IDC服务',
              list: [
                {
                  title: '服务器托管',
                  info: '安全贴心高品质的托管服务',
                  path: '',
                  hot: false,
                  new: false
                },
                {
                  title: '裸金属服务器',
                  info: '高性能安全隔离物理集群服务',
                  path: '',
                  hot: false,
                  new: true
                },
                {
                  title: '浙江云盾分销系统',
                  info: '一键部署、低成本、快速运营',
                  path: '',
                  hot: false,
                  new: true
                },
                {
                  title: '商标注册',
                  info: '品牌保护，从商标注册开始',
                  path: '',
                  hot: false,
                  new: true
                }
              ]
            },
            {
              title: '安全与管理',
              list: [
                {
                  title: 'SSL证书',
                  info: '提供一站式的证书部署服务',
                  path: '',
                  hot: false,
                  new: false
                },
                {
                  title: '云监控',
                  info: '精准灵活超便捷的资源预警服务',
                  path: '',
                  hot: false,
                  new: false
                },
                {
                  title: '网站备案',
                  info: '免费、快速、便捷的备案服务',
                  path: '',
                  hot: false,
                  new: false
                }
              ]
            }
          ]
        },
        {
          title: '服务保障',
          path: '/assurance',
          children: [
            {
              title: '',
              list: [
                {
                  title: '0元免费备案',
                  info: '',
                  path: '',
                  hot: false,
                  new: false
                },
                {
                  title: 'VIP多对1服务',
                  info: '',
                  path: '',
                  hot: false,
                  new: false
                }
              ]
            },
            {
              title: '',
              list: [
                {
                  title: '100倍故障赔偿',
                  info: '',
                  path: '',
                  hot: false,
                  new: false
                }
              ]
            },
            {
              title: '',
              list: [
                {
                  title: '5天无理由退款',
                  info: '',
                  path: '',
                  hot: false,
                  new: false
                }
              ]
            },
            {
              title: '',
              list: [
                {
                  title: '7X24小时多渠道服务支持',
                  info: '',
                  path: '',
                  hot: false,
                  new: false
                }
              ]
            }
          ]
        },
        {
          title: '帮助中心',
          path: '/help/helpInfo'
        },
        {
          title: '解决方案',
          path: '',
          show: true,
          children: [
            {
              // title: '行业解决方案',
              list: [
                {
                  title: '金融解决方案',
                  info: '',
                  path: '/programme/finance',
                  hot: false,
                  new: false
                }
                // {
                //   title: '网站解决方案',
                //   info: '',
                //   path: '/programme/website',
                //   hot: false,
                //   new: false
                // }
              ]
            },
            {
              title: '',
              list: [
                {
                  title: '电商解决方案',
                  info: '',
                  path: '/programme/online',
                  hot: false,
                  new: false
                }
              ]
            },
            {
              title: '',
              list: [
                {
                  title: '移动解决方案',
                  info: '',
                  path: '/programme/move',
                  hot: false,
                  new: false
                }
              ]
            },
            {
              title: '',
              list: [
                {
                  title: '游戏解决方案',
                  info: '',
                  path: '/programme/game',
                  hot: false,
                  new: false
                }
              ]
            },
            {
              title: '',
              list: [
                {
                  title: '网站解决方案',
                  info: '',
                  path: '/programme/website',
                  hot: false,
                  new: false
                }
              ]
            }
          ]
        },
        {
          title: '关于我们',
          path: '/about/index?tab=0',
          children: [
            {
              title: '关于我们',
              list: [
                {
                  title: '公司简介',
                  info: '',
                  path: '/about/index?tab=0',
                  hot: false,
                  new: false
                }
              ]
            },
            {
              title: '',
              list: [
                {
                  title: '新闻公告',
                  info: '',
                  path: '/about/index?tab=1',
                  hot: false,
                  new: false
                }
              ]
            },
            {
              title: '',
              list: [
                {
                  title: '联系我们',
                  info: '',
                  path: '/about/index?tab=2',
                  hot: false,
                  new: false
                }
              ]
            },
            {
              title: '',
              list: [
                {
                  title: '代理招募',
                  info: '',
                  path: '/about/recruit',
                  hot: false,
                  new: false
                }
              ]
            }
          ]
        }
      ],
      jumpCloudAdmin,
      hoverIndex: -1,
      headerItemData: {},
      hoverStyle: '',
      typeCentext: null,
      whiteList: ['/login', '/register', '/forget']
    }
  },
  computed: {
    ...mapState({
      isLogin: state => state.user.isLogin,
      userInfo: state => state.user.userInfo,
      token: state => state.user.token,
      webInfo: state => state.home.webInfo,
      allConfig: state => state.user.allConfig
    })
  },
  watch: {
    $route: {
      immediate: true,
      handler (to, from) {
        if (to.path === '/login' && this.allConfig.enable_login !== '1') {
          this.$router.push('/')
        }
        if (
          to.path === '/register' &&
          this.allConfig.enable_register !== '1'
        ) {
          this.$router.push('/')
        }
      }
    }
  },
  mounted () {
    console.log(this.allConfig, 'allConfig')
  },
  methods: {
    isWhite (path) {
      return this.whiteList.includes(path)
    },
    jumpConsole () {
      console.log(this.token, this.jumpCloudAdmin)
      this.jumpCloudAdmin(this.token)
    },
    // 鼠标进入
    mouseEnter (index, show) {
      console.log(index, show)
      this.hoverIndex = index
      this.headerItemData = { ...this.navList[index].children }
      console.log(this.headerItemData)
    },
    // 鼠标离开
    mouseLeave () {
      this.hoverIndex = -1
    },
    // 点击跳转
    handleClickJump (path) {
      if (!path) {
        return
      }
      if (!this.whiteList.includes(this.$route.path)) {
        this.$store.commit('user/saveRedirectPath', this.$route.path)
      }
      this.$router.push(path)
    },
    // 点击退出
    handleLoginOut () {
      console.log('点击了退出')
      this.$cookies.remove('token', { path: '/' })
      this.$store.dispatch('user/logOut')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
.layout-header {
  width: 100%;
  height: 80px;
  background-color: transparent;
  border-bottom-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  transition: all 0.1s linear;
  border-bottom: 1px solid #ffffff30;
  .header-box {
    height: 100%;
    display: flex;
    padding: 0;
    width: 1220px;
    .logo {
      width: 116px;
      margin: 0 10px;
      position: relative;
      cursor: pointer;
      overflow: hidden;
      text-align: center;
      img {
        position: absolute;
        width: 100%;
        height: auto;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
      h1 {
        text-indent: -999999px;
      }
    }
    .nav {
      margin-left: 20px;
      height: 80px;
      display: flex;
      font-size: 18px;
      color: #fff;
      .item {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 30px;
        // overflow: hidden;
        cursor: pointer;
        box-sizing: border-box;
        .jump {
          color: #fff;
          transition: 0s;
          height: 100%;
          display: flex;
          position: relative;
          align-items: center;
          .title-wrap {
            position: relative;
          }
          .hot {
            position: absolute;
            top: -3px;
            left: 73px;
          }
        }
        .popup-box {
          // display: block;
          position: absolute;
          top: 75px;
          left: -640px;
          right: 0;
          z-index: 1000;
          margin: 0 auto;
          min-width: 1200px;
          max-width: 60%;
          height: 150px;
          // padding-top: 40px;
          background: url('../static/img/home/indexHover.png') no-repeat;
          background-size: 150% 100%;
          background-position: -405px -15px;
          font-size: 14px;
          .popup-wrap {
            margin-top: 15px;
            display: flex;
            width: 100%;
          }
        }
      }
      .noSubmenu:hover {
        a {
          color: #059fff;
          // margin-top: 3px;
        }
        // border-bottom: 3px solid #059fff;
        // .popup-box {
        //   display: block;
        // }
        .underscore {
          background-color: #059fff;
        }
      }
      .underscore {
        width: 60%;
        height: 3px;
        background-color: transparent;
        position: absolute;
        // border: 1px solid #b6c8d3;
        bottom: 0;
        left: 20%;
      }
      // .item:nth-child(1) {
      //   // a {
      //   //   // color: #fcf53f;
      //   // }
      // }
    }
    .login {
      height: 100%;
      // margin-left: 130px;
      float: right;
      display: flex;
      align-items: center;
      color: #fff;
      .language {
        width: 100px;
        position: relative;
        height: 31px;
        display: flex;
        align-items: center;
        .select {
          cursor: pointer;
          display: flex;
          align-items: center;
          span {
            font-size: 14px;
          }
          .arr {
            width: 0;
            height: 0;
            border-top: 8px solid white;
            border-right: 4px solid transparent;
            border-left: 4px solid transparent;
            position: absolute;
            right: 33px;
            top: 50%;
            transform: translateY(-50%);
          }
        }
        .mask {
          width: 85px;
          height: 120px;
          background: #212629;
          padding-top: 20px;
          display: none;
          z-index: 999;
          position: absolute;
          left: -10px;
          top: 30px;
          padding-left: 15px;
          .item-select {
            height: 40px;
            color: #999;
          }
          .item {
            height: 40px;
            color: #059fff;
          }
        }
      }
      .language:hover {
        color: #059fff;
        .arr {
          border-top: 8px solid #059fff;
        }
        .mask {
          display: block;
        }
      }
      .record {
        cursor: pointer;
      }
      .record:hover {
        color: #059fff;
      }
      .btns {
        margin-left: 18px;
        display: flex;
        align-items: center;
        .btn {
          height: 38px;
          line-height: 38px;
          text-align: center;
          cursor: pointer;
        }
        .btn:nth-child(1) {
          width: 86px;
        }
        .btn:nth-child(2) {
          width: 58px;
          margin-left: 19px;
        }
        .disembark {
          width: 79px;
          height: 32px;
          background: #01ab79;
          border-radius: 15px;
          color: #ffffff;
          font-weight: 400;
          line-height: 32px;
        }
      }
      .userinfo {
        margin-left: 30px;
        display: flex;
        align-items: center;
        cursor: pointer;
        .name {
          margin-left: 5px;
          margin-right: 3px;
          position: relative;
          padding-left: 3px;
          display: flex;
          align-items: center;
          i {
            font-size: 16px;
            position: absolute;
            top: -2px;
            left: 0;
          }
          span {
            width: 40px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .control {
          margin: 0 20px;
        }
        .logout {
          margin-left: 17px;
          cursor: pointer;
          width: 75px;
          height: 32px;
          text-align: center;
          border: 1px solid #dddddd;
          font-weight: 500;
          color: #ffffff;
          line-height: 32px;
        }
        .name:hover,
        .control:hover,
        .logout:hover {
          color: #059fff;
          border-color: #059fff;
        }
      }
    }
  }
}
.background-white {
  background-color: #2b303b;
}
.layout-header:hover {
  // background-color: #2b3033;
  border-bottom-color: transparent;
}
</style>
