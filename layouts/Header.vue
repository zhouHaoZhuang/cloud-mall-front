<template>
  <div class="layout-header">
    <div class="container header-box">
      <!-- logo -->
      <div class="logo">
        <img src="~/static/img/home/logo.png" alt="">
        <h1>浙江云盾</h1>
      </div>
      <!-- nav -->
      <div class="nav">
        <div
          v-for="(item, index) in navList"
          :key="index"
          class="item"
          @mouseenter="mouseEnter(index)"
          @mouseleave="mouseLeave"
          @click="handleClickJump(item.path)"
        >
          <span>{{ item.title }}</span>
          <img
            v-if="index === 0"
            src="~/static/img/home/hot.png"
            alt=""
            class="hot"
          >
          <div v-if="hoverIndex === index" class="line" />
          <!-- mask 鼠标进入nav展示列表 -->
          <div
            v-if="JSON.stringify(headerItemData) !== '{}'"
            class="popup-box"
            @mouseleave="maskMouseLeave"
          >
            <div class="container popup-wrap">
              <HeaderItem
                v-for="(ele, idx) in headerItemData"
                :key="idx"
                :item-data="ele"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- login -->
      <div class="login">
        <!-- 语言 -->
        <div class="language">
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
        </div>
        <!-- 备案 -->
        <div class="record">
          备案
        </div>
        <!-- 登录/注册 -->
        <div class="btns">
          <div class="btn">
            免费注册
          </div>
          <div class="btn">
            登录
          </div>
        </div>
        <!-- 已登录用户信息 -->
        <!-- <div class="userinfo">
          <img src="~/static/img/home/member.png" alt="">
          <div class="name">
            <i>*</i>
            <span>勇</span>
          </div> -->
        <!-- 控制台 -->
        <!-- <div class="control">
            控制台
          </div> -->
        <!-- 登出 -->
        <!-- <div class="logout">
            退出
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import HeaderItem from '../components/HeaderItem/index.vue'
export default {
  components: {
    HeaderItem
  },
  data () {
    return {
      navList: [
        {
          title: '最新活动',
          path: '/activity'
        },
        {
          title: '产品',
          path: '',
          children: [
            {
              title: '云计算',
              list: [
                {
                  title: '云服务器',
                  info: '高速稳定高弹性的计算服务',
                  path: '',
                  hot: true,
                  new: false
                },
                {
                  title: '负载均衡',
                  info: '高性能流量分发的负载均衡服务',
                  path: '',
                  hot: false,
                  new: false
                },
                {
                  title: '对象存储',
                  info: '高可用、易扩展、低成本、一站式',
                  path: '',
                  hot: false,
                  new: false
                },
                {
                  title: '云数据库 MySQL',
                  info: '稳定可靠、可弹性伸缩的数据方案',
                  path: '',
                  hot: false,
                  new: false
                },
                {
                  title: '云数据库 SQL Server',
                  info: '安全运行、轻松管理的数据方案',
                  path: '',
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
                  path: '',
                  hot: false,
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
          path: '',
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
          path: '/help'
        },
        {
          title: '解决方案',
          path: '',
          children: [
            {
              title: '行业解决方案',
              list: [
                {
                  title: '金融解决方案',
                  info: '',
                  path: '',
                  hot: false,
                  new: false
                },
                {
                  title: '网站解决方案',
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
                  title: '电商解决方案',
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
                  title: '移动解决方案',
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
                  title: '游戏解决方案',
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
          title: '关于我们',
          path: '',
          children: [
            {
              title: '关于我们',
              list: [
                {
                  title: '公司简介',
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
                  title: '新闻公告',
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
                  title: '联系我们',
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
                  title: '代理招募',
                  info: '',
                  path: '',
                  hot: false,
                  new: false
                }
              ]
            }
          ]
        }
      ],
      hoverIndex: -1,
      headerItemData: {}
    }
  },
  // watch: {
  //   headerItemData: {
  //     handler (newVal, oldVal) {
  //       console.log(newVal, oldVal)
  //     },
  //     immediate: true,
  //     deep: true
  //   }
  // },
  methods: {
    // 鼠标进入
    mouseEnter (index) {
      this.hoverIndex = index
      this.headerItemData = { ...this.navList[index].children }
    },
    // 鼠标离开
    mouseLeave () {
      this.hoverIndex = -1
      // this.headerItemData = {}
    },
    // 点击跳转
    handleClickJump (path) {
      if (!path) {
        return
      }
      this.$router.push(path)
    },
    // 鼠标移出popup事件
    maskMouseLeave () {
      // this.hoverIndex = -1
      // this.headerItemData = {}
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
.layout-header {
  width: 100%;
  height: 80px;
  background: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  transition: all 0.1s linear;
  .header-box {
    height: 100%;
    display: flex;
    .logo {
      width: 142px;
      margin-left: 10px;
      position: relative;
      img {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
      h1 {
        text-indent: -999999px;
      }
    }
    .nav {
      display: flex;
      align-items: center;
      font-size: 18px;
      color: #fff;
      .item {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 0 24px;
        overflow: hidden;
        cursor: pointer;
        .hot {
          position: absolute;
          top: 27px;
          right: 0;
        }
        .line {
          width: 200px;
          height: 3px;
          background: #059fff;
          position: absolute;
          left: 0;
          bottom: 0;
        }
        .popup-box {
          display: none;
          position: fixed;
          top: 80px;
          left: 0;
          right: 0;
          z-index: 1000;
          margin: 0 auto;
          min-width: 1200px;
          max-width: 100%;
          height: 660px;
          padding-top: 40px;
          background-color: #212629;
          font-size: 14px;
          .popup-wrap {
            display: flex;
          }
        }
      }
      .item:hover {
        color: #059fff;
        .popup-box {
          display: block;
        }
      }
      .item:nth-child(1) {
        color: #fcf53f;
      }
    }
    .login {
      height: 100%;
      margin-left: 86px;
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
          top: 32px;
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
        }
        .btn:nth-child(1) {
          width: 86px;
          background: #059fff;
        }
        .btn:nth-child(2) {
          width: 58px;
          margin-left: 8px;
          border: 1px solid #fff;
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
          padding-left: 7px;
          i {
            font-size: 16px;
            position: absolute;
            top: -2px;
            left: 0;
          }
        }
        .control {
          margin-left: 7px;
        }
        .logout {
          margin-left: 7px;
        }
        .name:hover,
        .control:hover,
        .logout:hover {
          color: #059fff;
        }
      }
    }
  }
}
.layout-header:hover {
  background-color: #2b3033;
  border-bottom: none;
}
</style>
