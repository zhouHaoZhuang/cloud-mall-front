<template>
  <div class="layout-footer">
    <!-- 加入我们 -->
    <!-- <div v-show="show" class="join-wrap">
      <div class="container join">
        <span>加入我们，立即开启您的云服务之旅！</span>
        <div class="btn">
          免费注册
        </div>
      </div>
    </div> -->
    <!-- 底部 -->
    <div v-show="show" class="footer-wrap">
      <!-- 优势 -->
      <!-- <div class="advantage-wrap">
        <div class="container advantage">
          <div v-for="(item, index) in advantageList" :key="index" class="item">
            <img :src="item.img" alt="" class="img">
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div> -->
      <!-- 快捷入口 -->
      <div class="quick-wrap">
        <div class="container quick">
          <div v-for="(item, index) in linkList" :key="index" class="item">
            <div class="title">
              {{ item.title }}
            </div>
            <div class="list">
              <a
                v-for="(ele, idx) in item.list"
                :key="idx"
                :to="ele.path"
                class="list-item"
                @click="handleClick(ele.path)"
              >
                <span
                  v-if="ele.path == 'controlPanel'"
                  @click="handleClick(ele.path)"
                >
                  {{ ele.name }}
                </span>
                <a v-else style="color: #ffffffcf" :href="ele.path">
                  {{ ele.name }}
                </a>
              </a>
            </div>
          </div>
          <!-- 联系我们 -->
          <div class="item">
            <div class="title">
              联系我们
            </div>
            <div class="list">
              <div class="list-ele">
                <div class="label">
                  服务热线：
                </div>
                <div class="value">
                  {{ webInfo.serverPhone }}
                </div>
              </div>
              <div class="list-ele">
                <div class="label">
                  电子邮箱：
                </div>
                <div class="value">
                  {{ webInfo.email }}
                </div>
              </div>
              <div class="list-ele">
                <div class="label">
                  联系地址：
                </div>
                <div class="value address">
                  {{ webInfo.companyAddress }}
                </div>
              </div>
              <div class="list-ele">
                <div class="label">
                  商务洽谈：
                </div>
                <div class="value">
                  {{ webInfo.businessPhone }}
                </div>
              </div>
              <div class="list-outerChain">
                <div v-show="false" class="ele">
                  <div v-if="webInfo.wechatQrCode" class="img-box">
                    <i />
                    <img :src="webInfo.wechatQrCode" alt="">
                  </div>
                </div>
                <div class="ele">
                  <div class="img-box">
                    <i />
                    <span class="qq-hint">请选择QQ进行咨询</span>
                    <div class="right">
                      {{ webInfo.qqNumber }}
                    </div>
                  </div>
                </div>
                <div
                  v-show="false"
                  class="ele"
                  @click="jumpOutside(webInfo.webLink)"
                />
                <div class="ele" @click="mailsome" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 友情链接-->
      <div class="links-wrap">
        <div class="links">
          <!-- <div class="img" /> -->
          <!-- <div
            v-for="(item, index) in friendLinks"
            :key="index"
            class="item"
            @click="jumpOutside(item.linkUrl)"
          >
            {{ item.linkName }}
          </div> -->
        </div>
      </div>
      <!-- copyright -->
      <div class="copyright-wrap">
        <div class="container">
          <p>
            {{ webInfo.publicSecurityRecord }}&nbsp;&nbsp;&nbsp;
            {{ webInfo.copyRightInfo }}
            &nbsp;&nbsp;&nbsp;
            {{ webInfo.companyName }}
            &nbsp;&nbsp;<img
              width="13px"
              src="~/static/img/home/filing.png"
              alt=""
            >
            <span @click="handleClickJump('')"> {{ webInfo.recordNo }}</span>
            &nbsp;&nbsp;
            {{ webInfo.bottomInfo }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { jumpCloudAdmin, jumpCloudAdminWork } from '@/utils/index'
export default {
  data () {
    return {
      advantageList: [
        {
          title: '100倍故障赔偿',
          img: require('~/static/img/home/product_footer_1.png')
        },
        {
          title: '5天无理由退款',
          img: require('~/static/img/home/product_footer_2.png')
        },
        {
          title: '7x24小时服务',
          img: require('~/static/img/home/product_footer_3.png')
        },
        {
          title: '0元快速备案',
          img: require('~/static/img/home/product_footer_4.png')
        },
        {
          title: '1V1专席秘书',
          img: require('~/static/img/home/product_footer_5.png')
        }
      ],
      jumpCloudAdmin,
      jumpCloudAdminWork,
      linkList: [
        {
          title: '浙江云盾产品',
          list: [
            {
              name: '云服务器',
              path: '/cloud-choose'
            },
            {
              name: 'CDN加速',
              path: '/introduce-product'
            }
            // {
            //   name: '云虚拟主机',
            //   path: ''
            // },
            // {
            //   name: '云监控',
            //   path: ''
            // }
          ]
        },
        {
          title: '解决方案',
          list: [
            {
              name: '游戏云解决方案',
              path: '/programme/game'
            },
            {
              name: '电商云解决方案',
              path: '/programme/online'
            },
            {
              name: '金融云解决方案',
              path: '/programme/finance'
            },
            {
              name: '网站云解决方案',
              path: '/programme/website'
            },
            {
              name: '移动云解决方案',
              path: '/programme/move'
            }
          ]
        },
        {
          title: '帮助与支持',
          list: [
            {
              name: '帮助中心',
              path: '/help/helpInfo'
            },
            // {
            //   name: 'Whois查询',
            //   path: ''
            // },
            {
              name: '控制台',
              path: 'controlPanel'
            },
            // {
            //   name: '备案服务',
            //   path: ''
            // },
            {
              name: '工单服务',
              path: 'workBillService'
            }
          ]
        },
        {
          title: '其他链接',
          list: [
            {
              name: '公司简介',
              path: '/about/index?tab=0'
            },
            {
              name: '法律声明',
              path: '/about/index?tab=2'
            },
            {
              name: '新闻公告',
              path: '/about/index?tab=1'
            },
            {
              name: '友情链接',
              path: '/about/index?tab=3'
            },
            {
              name: '服务协议',
              path: '/passport/agreement'
            }
          ]
        }
      ],
      show: true
    }
  },
  computed: {
    ...mapState({
      friendLinks: state => state.home.friendLinks,
      webInfo: state => state.home.webInfo,
      token: state => state.user.token,
      allConfig: state => state.user.allConfig
    })
  },
  watch: {
    $route: {
      handler (newVal) {
        if (
          newVal.path === '/login' ||
          newVal.path === '/register' ||
          newVal.path === '/instant-open' ||
          newVal.path === '/price-detail'
        ) {
          this.show = false
        } else {
          this.show = true
        }
      },
      immediate: true
    },
    webInfo: {
      handler (newVal) {
        this.linkList[0].title = this.linkList[0].title.replace(
          '浙江云盾',
          newVal.title || ''
        )
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    // 跳转外部链接
    jumpOutside (path) {
      const newPath = path.includes('http') ? path : 'https://' + path
      window.open(newPath, '_blank')
    },
    handleClick (path) {
      if (path === 'controlPanel') {
        this.jumpCloudAdmin(this.token)
        return
      } else if (path === 'workBillService') {
        this.jumpCloudAdminWork(this.token)
        return
      }
      this.$router.push(path)
    },
    mailsome () {
      parent.location.href =
        'mailto:' + this.allConfig.email_address + '?subject=' + '' + ''
    },
    // 点击跳转
    handleClickJump (path) {
      if (!path) {
        return
      }
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
.layout-footer {
  .join-wrap {
    height: 160px;
    background: url('~/static/img/home/footer-bg.png') no-repeat center;
    overflow: hidden;
    .join {
      text-align: center;
      font-size: 24px;
      color: #fff;
      padding-top: 30px;
      .btn {
        margin: 30px auto 0;
        width: 120px;
        height: 36px;
        line-height: 36px;
        background-color: #fff;
        border-radius: 2px;
        border: solid 1px #fff;
        font-size: 20px;
        color: #188ae0;
        text-align: center;
      }
    }
  }
  .footer-wrap {
    // height: 634px;
    background: url('../static/img/home/footerbj.png') no-repeat center;
    background-size: 100% 100%;
    background-color: #202835;
    padding-top: 52px;
    .advantage-wrap {
      font-size: 16px;
      color: #fff;
      margin-bottom: 36px;
      .advantage {
        display: flex;
        justify-content: space-around;
        padding-bottom: 52px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        .item {
          margin-right: 80px;
          span {
            margin-left: 10px;
          }
        }
      }
    }
    .quick-wrap {
      margin-bottom: 50px;
      .quick {
        font-size: 14px;
        color: #525c66;
        display: flex;
        .item {
          width: 160px;
          margin-right: 50px;
          .title {
            color: #fff;
            font-weight: Medium;
            margin-bottom: 20px;
            font-size: 18px;
          }
          .list {
            .list-item {
              line-height: 30px;
              color: #ffffffcf;
              display: block;
              cursor: pointer;
            }
            .list-item:hover {
              color: #1890ff;
            }
            .list-ele {
              display: flex;
              line-height: 36px;
              .label {
                color: #ffffffcf;
                width: 70px;
              }
              .value {
                flex: 1;
                color: #fff;
              }
              .address {
                word-wrap: break-word;
              }
            }
            .list-outerChain {
              display: flex;
              margin-top: 25px;
              .ele {
                width: 38px;
                height: 38px;
                margin-right: 20px;
                background: url('~/static/img/home/icons-qq.png') no-repeat;
                position: relative;
                .img-box {
                  width: 145px;
                  height: 120px;
                  position: absolute;
                  left: -50px;
                  bottom: 33px;
                  background: #fff;
                  padding: 10px;
                  margin-bottom: 15px;
                  display: none;
                  .qq-hint,
                  .right {
                    line-height: 20px;
                  }
                  i {
                    display: inline-block;
                    position: absolute;
                    bottom: -6px;
                    left: 64px;
                    width: 0;
                    height: 0;
                    line-height: 0;
                    vertical-align: middle;
                    border: 6px dashed transparent;
                    border-top-style: solid;
                    border-top-color: #fff;
                    border-bottom-width: 0;
                  }
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
              }
              .ele:nth-child(1) {
                background-position: 0 -46px;
              }
              .ele:nth-child(1):hover {
                background-position: 0 -86px;
                .img-box {
                  display: block;
                }
              }
              .ele:nth-child(2) {
                background-position: -40px -46px;
              }
              .ele:nth-child(2):hover {
                background-position: -40px -86px;
                .img-box {
                  display: block;
                  width: 145px;
                  height: 70px;
                }
              }
              .ele:nth-child(3) {
                background-position: -80px -46px;
              }
              .ele:nth-child(3):hover {
                background-position: -80px -86px;
              }
              .ele:nth-child(4) {
                background-position: -120px -46px;
              }
              .ele:nth-child(4):hover {
                background-position: -120px -86px;
              }
            }
          }
        }
        .item:last-child {
          width: 340px;
        }
      }
    }
    .links-wrap {
      .links {
        width: 1190px;
        margin: 0 auto;
        // padding: 28px 0 22px 28px;
        border-top: 1px solid #414447;
        position: relative;
        .img {
          display: inline-block;
          width: 25px;
          height: 20px;
          background: url('~/static/img/home/icons-qq.png') no-repeat -93px -18px;
          position: absolute;
          left: 0;
          top: 26px;
        }
        .item {
          display: inline-block;
          color: #7a7d80;
          font-size: 12px;
          line-height: 22px;
          margin-right: 20px;
          cursor: pointer;
        }
      }
    }
    .copyright-wrap {
      // border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding: 20px 0;
      text-align: center;
      color: #7a7d80;
      overflow: hidden;
      p {
        line-height: 24px;
        font-size: 12px;
        margin: 0;
      }
    }
  }
}
</style>
