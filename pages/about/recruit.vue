<template>
  <div class="recruit-container">
    <!-- 轮播图 -->
    <div class="banner-wrap">
      <div class="container">
        <p>代理商招募计划全面启动</p>
        <div class="txt-list">
          海量资源
          <div class="dot" />
          轻松部署
          <div class="dot" />
          代理无忧
          <div class="dot" />
          合作共赢
        </div>
        <a class="btn"> 立即加入 </a>
      </div>
    </div>
    <!-- 锚点导航 -->
    <div class="nav-wrap">
      <div class="container">
        <ul class="list">
          <li
            v-for="(item, index) in navList"
            :key="index"
            @click="handleNavJump(item)"
          >
            <span :class="navSelectIndex === index ? 'active' : ''">{{
              item.title
            }}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 开放产品能力 -->
    <div id="open" class="open-wrap">
      <div class="container">
        <div class="public-title">
          开放产品能力
        </div>
        <div class="open-list">
          <div
            v-for="(item, index) in openList"
            :key="index"
            class="item"
            :style="item.bg"
          >
            <div class="title">
              {{ item.title }}
            </div>
            <div class="info">
              {{ item.info }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 市场机遇 -->
    <div id="market" class="market-wrap">
      <div class="container">
        <div class="public-title">
          市场机遇
        </div>
        <div class="market">
          <div class="left">
            <div class="top-tit">
              目前国内有上万家IDC行业公司
            </div>
            <div class="list">
              <div
                v-for="(item, index) in marketList"
                :key="index"
                class="item"
                :style="item.bg"
              >
                <div class="title">
                  {{ item.title }}
                </div>
                <div class="info">
                  {{ item.info }}
                </div>
              </div>
            </div>
          </div>
          <div class="right" />
        </div>
      </div>
    </div>
    <!-- 合作优势 -->
    <div id="advantage" class="advantage-wrap">
      <div class="container">
        <div class="public-title">
          合作优势
        </div>
        <div class="list">
          <div v-for="(item, index) in advantageList" :key="index" class="item">
            <div class="bg" :style="item.bg" />
            <div class="title">
              {{ item.title }}
            </div>
            <div class="info">
              {{ item.info }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 合作流程 -->
    <div id="process" class="process-wrap">
      <div class="container">
        <div class="public-title">
          合作流程
        </div>
        <div class="list">
          <div
            v-for="(item, index) in processList"
            :key="index"
            class="item"
            :style="item.bg"
          >
            <div class="bg" :style="item.iconBg" />
            <div class="title">
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 合作支持 -->
    <div id="support" class="support-wrap">
      <div class="container">
        <div class="public-title">
          合作支持
        </div>
        <div class="list">
          <div v-for="(item, index) in supportList" :key="index" class="item">
            <div class="bg" :style="item.bg" />
            <div class="title">
              {{ item.title }}
            </div>
          </div>
        </div>
        <!-- 咨询 -->
        <div class="consulting">
          <div class="txt-box">
            <div>加入浙江云盾，实现业务创新，合作共赢！</div>
            <div>获取您的专属合作方案。</div>
          </div>
          <div class="btn">
            立即咨询
          </div>
        </div>
      </div>
    </div>
    <!-- 合作条件 -->
    <div id="condition" class="condition-wrap">
      <div class="container">
        <div class="public-title">
          合作条件
        </div>
        <div class="list">
          <div v-for="(item, index) in conditionList" :key="index" class="item">
            <div class="bg" :style="item.bg" />
            <div class="title">
              {{ item.title }}
            </div>
            <div class="info">
              {{ item.info }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 搭配系统 -->
    <div id="system" class="system-wrap">
      <div class="container">
        <div class="public-title">
          搭配系统
        </div>
        <div class="system">
          <div class="left" />
          <div class="right">
            <p>
              对接
              <span class="orange">浙江云盾</span>
              资源产品，需搭配购买
              <span class="blue">浙江云盾分销系统</span>
              ，系统可无缝对接
              <span class="orange">浙江云盾及多家资源联盟</span>
              接口，并实现当天购买，当天交付部署上线，具有安装简单、维护轻松、成本低廉、业务功能齐全等特点。
            </p>
            <p>
              <span class="blue">浙江云盾分销系统</span>
              通过提供完善的平台来管理包括计算、网络、存储在内的各项资源，其功能模块涵盖了云服务器、虚拟主机、托管等业务的在线弹性购买及秒级开通交付；
              支持一键安Linux及Windows等多种环境，只需数十分钟即可轻松的搭建；
              系统集成了完善的财务系统、工单系统、备案系统、会员系统、业务系统等多种板块，满足企业所需各个业务流程管理，减少人工，高效快捷。
            </p>
            <div class="btn">
              查看详情
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      navList: [
        {
          id: 'open',
          title: '开放产品能力'
        },
        {
          id: 'market',
          title: '市场机遇'
        },
        {
          id: 'advantage',
          title: '合作优势'
        },
        {
          id: 'process',
          title: '合作流程 '
        },
        {
          id: 'support',
          title: '合作支持'
        },
        // {
        //   id: 'mess',
        //   title: '合作咨询'
        // },
        {
          id: 'condition',
          title: '合作条件'
        },
        {
          id: 'system',
          title: '搭配系统'
        }
      ],
      navSelectIndex: 0,
      openList: [
        {
          title: '云服务器',
          info: '高速稳定、高弹性',
          bg: `background-image: url(${require('~/static/img/about/server.png')});background-size: 40px 36px`
        },
        {
          title: '云虚拟主机',
          info: '基于云计算的虚拟主机服务',
          bg: `background-image: url(${require('~/static/img/about/host.png')});background-size: 40px 36px`
        },
        {
          title: '服务器托管',
          info: '安全、贴心、高品质',
          bg: `background-image: url(${require('~/static/img/about/idc.png')});background-size: 33px 36px`
        },
        {
          title: '网站备案',
          info: '免费、快速、便捷',
          bg: `background-image: url(${require('~/static/img/about/website.png')});background-size: 40px 41px`
        },
        {
          title: '负载均衡',
          info: '高性能流量分发',
          bg: `background-image: url(${require('~/static/img/about/loadbalance.png')});background-size: 33px 36px`
        },
        {
          title: '域名注册',
          info: '提供五星级的域名注册',
          bg: `background-image: url(${require('~/static/img/about/domain.png')});background-size: 37px 37px`
        },
        {
          title: '裸金属服务器',
          info: '高性能安全隔离物理集群',
          bg: `background-image: url(${require('~/static/img/about/slb.png')});background-size: 35px 32px`
        },
        {
          title: 'SSL证书',
          info: '一站式证书部署',
          bg: `background-image: url(${require('~/static/img/about/ssl.png')});background-size: 37px 38px`
        },
        {
          title: '云数据库',
          info: '稳定可靠、可弹性伸缩',
          bg: `background-image: url(${require('~/static/img/about/database.png')});background-size: 38px 39px`
        },
        {
          title: 'CDN加速',
          info: '智能调度、内容分发',
          bg: `background-image: url(${require('~/static/img/about/cdn.png')});background-size: 35px 35px`
        },
        {
          title: '对象存储',
          info: '高可用、易扩展、低成本',
          bg: `background-image: url(${require('~/static/img/about/storage.png')});background-size: 39px 29px`
        },
        {
          title: '更多',
          info: '更多产品即将上线，敬请期待',
          bg: `background-image: url(${require('~/static/img/about/more.png')});background-size: 36px 34px`
        }
      ],
      marketList: [
        {
          title: '资源',
          info: '产品、资源相对匮乏，同质性高，竞争能力弱',
          bg: `background-image: url(${require('~/static/img/about/oppor_1.png')})`
        },
        {
          title: '资金',
          info: '产品开发需持续投入巨额资金，难以负担',
          bg: `background-image: url(${require('~/static/img/about/oppor_2.png')})`
        },
        {
          title: '管理',
          info: '管理能力不足，抗风险能力弱',
          bg: `background-image: url(${require('~/static/img/about/oppor_3.png')})`
        },
        {
          title: '技术',
          info: '缺乏技术创新能力，难以进入云计算行业',
          bg: `background-image: url(${require('~/static/img/about/oppor_4.png')});background-size: 34px 38px!important`
        }
      ],
      advantageList: [
        {
          title: '多渠道接入',
          info: '无限上级接口数量，实现多渠道资源接入',
          bg: `background: url(${require('~/static/img/about/adv_1.png')}) no-repeat center 100%`
        },
        {
          title: '合作利润',
          info: '合作尊享优惠代理价格，拥有丰厚利润前景',
          bg: `background: url(${require('~/static/img/about/adv_3.png')}) no-repeat center 100%`
        },
        {
          title: '低成本投入',
          info: '按需获取资源，0库存、低投入、最大程度节约成本',
          bg: `background: url(${require('~/static/img/about/adv_2.png')}) no-repeat center 100%`
        }
      ],
      processList: [
        {
          title: '注册账号',
          bg: `background: url(${require('~/static/img/about/process_bg_1.png')}) no-repeat center`,
          iconBg: `background: url(${require('~/static/img/about/process_1.png')}) no-repeat center`
        },
        {
          title: '联系客户经理开通权限',
          bg: `background: url(${require('~/static/img/about/process_bg_2.png')}) no-repeat center`,
          iconBg: `background: url(${require('~/static/img/about/process_2.png')}) no-repeat center`
        },
        {
          title: '购买并部署系统',
          bg: `background: url(${require('~/static/img/about/process_bg_3.png')}) no-repeat center`,
          iconBg: `background: url(${require('~/static/img/about/process_3.png')}) no-repeat center`
        },
        {
          title: '对接浙江云盾资源同步等配置',
          bg: `background: url(${require('~/static/img/about/process_bg_4.png')}) no-repeat center`,
          iconBg: `background: url(${require('~/static/img/about/process_4.png')}) no-repeat center`
        },
        {
          title: '开启合作之旅',
          bg: `background: url(${require('~/static/img/about/process_bg_5.png')}) no-repeat center`,
          iconBg: `background: url(${require('~/static/img/about/process_5.png')}) no-repeat center`
        }
      ],
      supportList: [
        {
          title: '免费获赠金牌代理称号',
          bg: `width: 37px;height: 40px;background: url(${require('~/static/img/about/support_1.png')}) no-repeat center`
        },
        {
          title: '颁发代理电子授权证书',
          bg: `width: 35px;height: 34px;background: url(${require('~/static/img/about/support_2.png')}) no-repeat center`
        },
        {
          title: '获赠渠道合作优惠价格',
          bg: `width: 37px;height: 37px;background: url(${require('~/static/img/about/support_3.png')}) no-repeat center`
        },
        {
          title: '专属VIP业务渠道经理',
          bg: `width: 33px;height: 39px;background: url(${require('~/static/img/about/support_4.png')}) no-repeat center`
        },
        {
          title: '专属线上销售培训',
          bg: `width: 38px;height: 36px;background: url(${require('~/static/img/about/support_5.png')}) no-repeat center`
        },
        {
          title: '极具竞争力的产品价格',
          bg: `width: 37px;height: 37px;background: url(${require('~/static/img/about/support_6.png')}) no-repeat center`
        },
        {
          title: '7*24 全年无忧售后支持',
          bg: `width: 36px;height: 37px;background: url(${require('~/static/img/about/support_7.png')}) no-repeat center`
        },
        {
          title: '专属VIP售后技术支持',
          bg: `width: 35px;height: 39px;background: url(${require('~/static/img/about/support_8.png')}) no-repeat center`
        }
      ],
      conditionList: [
        {
          title: '公司资质',
          info: '具有正规企业资质的在营公司',
          bg: `background: url(${require('~/static/img/about/condition_1.png')}) no-repeat center`
        },
        {
          title: '服务能力',
          info: '具备至少2名技术人员的服务团队',
          bg: `background: url(${require('~/static/img/about/condition_2.png')}) no-repeat center`
        },
        {
          title: '业务能力',
          info: '有稳定的客户资源和持续拓展市场的能力',
          bg: `background: url(${require('~/static/img/about/condition_3.png')}) no-repeat center`
        },
        {
          title: '合作意愿',
          info: '认同云计算行业发展，认可浙江云盾合作',
          bg: `background: url(${require('~/static/img/about/condition_4.png')}) no-repeat center`
        }
      ]
    }
  },
  mounted () {
    this.getElementDetail()
  },
  methods: {
    // 点击跳转
    handleClickJump (path) {
      if (!path) {
        return
      }
      this.$router.push(path)
    },
    // 锚点导航点击
    handleNavJump (item) {
      const nodeEle = document.querySelector(`#${item.id}`)
      nodeEle.scrollIntoView({
        block: 'start',
        top: '80px',
        behavior: 'smooth'
      })
      console.log('导航点击', item, nodeEle)
    },
    // 获取所有需要锚点跳转元素
    getElementDetail () {
      const result = []
      this.navList.forEach((ele) => {
        result.push(document.querySelector(`#${ele.id}`))
      })
      console.log('最终获取的元素是', result)
      result.forEach((ele) => {
        console.log('获取的元素的位置信息', ele.scrollTop)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.recruit-container {
  background: #fff;
  .banner-wrap {
    position: relative;
    height: 502px;
    background: url('~/static/img/programme/about-bg.jpg') no-repeat center;
    color: #fff;
    font-size: 18px;
    .container {
      padding-top: 180px;
      p:nth-child(1) {
        font-size: 36px;
        margin-bottom: 30px;
      }
      .txt-list {
        display: flex;
        align-items: center;
        height: 48px;
        .dot {
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 1);
          border-radius: 50%;
          margin: 0 10px;
        }
      }
      .btn {
        margin: 30px 0 28px;
        display: inline-block;
        width: 120px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        font-size: 14px;
        color: #fff;
        border-radius: 2px;
        background: #0080ff;
      }
    }
  }
  .nav-wrap {
    height: 68px;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #eee;
    background: #fff;
    .container {
      .list {
        display: flex;
        height: 68px;
        justify-content: space-around;
        transition: all ease 0.8s;
        li {
          height: 66px;
          margin-right: 5px;
          cursor: pointer;
          span {
            display: block;
            height: 68px;
            line-height: 68px;
            padding: 0 10px;
            font-size: 14px;
            color: #4c4c4c;
            &.active {
              border-bottom: 2px solid #059fff;
            }
          }
          span:hover {
            border-bottom: 2px solid #059fff;
          }
        }
      }
    }
  }
  // 公共头部
  .public-title {
    height: 32px;
    line-height: 32px;
    text-align: center;
    margin-bottom: 50px;
    padding-right: 15px;
    font-size: 26px;
    color: #333;
  }
  .open-wrap {
    margin: 50px 0 55px;
    padding-bottom: 30px;
    .container {
      .open-list {
        display: flex;
        flex-wrap: wrap;
        .item {
          width: 285px;
          height: 100px;
          margin: 10px;
          padding: 29px 0 32px 85px;
          background-position: 24px 34px;
          background-repeat: no-repeat;
          box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
          .title {
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 24px;
          }
          .info {
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            line-height: 24px;
          }
        }
      }
    }
  }
  .market-wrap {
    background: rgba(247, 248, 250, 1);
    padding-top: 50px;
    padding-bottom: 30px;
    .container {
      .market {
        margin-top: 57px;
        display: flex;
        .left {
          .top-tit {
            font-size: 22px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
            line-height: 46px;
            margin-bottom: 30px;
            margin-left: 30px;
          }
          .list {
            .item {
              width: 360px;
              height: 96px;
              box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
              margin-bottom: 20px;
              background-position: 20px 28px;
              background-repeat: no-repeat;
              padding-left: 78px;
              background-size: 39px 38px;
              padding-top: 18px;
              background-color: #fff;
              .title {
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
                line-height: 36px;
              }
              .info {
                font-size: 12px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
              }
            }
          }
        }
        .right {
          width: 642px;
          height: 531px;
          margin-left: 195px;
          background: url('~/static/img/about/map.png') no-repeat center;
        }
      }
    }
  }
  .advantage-wrap {
    padding: 50px 0 80px;
    .container {
      .list {
        display: flex;
        .item {
          width: 340px;
          margin: 0 33px 0;
          height: 210px;
          box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
          text-align: center;
          .bg {
            width: 34px;
            height: 34px;
            margin: 0 auto;
            margin-top: 50px;
            background-size: cover !important;
          }
          .title {
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 16px;
            letter-spacing: 0px;
            color: #333;
            margin: 30px 0 20px;
          }
          .info {
            font-size: 12px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            line-height: 24px;
            color: #999;
          }
        }
      }
    }
  }
  .process-wrap {
    background: rgba(247, 248, 250, 1);
    padding: 50px 0 86px;
    .container {
      .list {
        display: flex;
        .item {
          width: 233px;
          height: 93px;
          margin-right: 7px;
          .bg {
            background-size: 23px 24px !important;
            height: 28px;
            margin-top: 16px;
          }
          .title {
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
            line-height: 24px;
            text-align: center;
            margin-top: 10px;
          }
        }
        .item:nth-child(1) {
          width: 243px;
          height: 103px;
          margin-top: -5px;
          .title {
            color: #fff !important;
          }
          .bg {
            background-size: 24px 24px !important;
          }
        }
        .item:nth-child(2) {
          .bg {
            background-size: 15px 28px !important;
          }
        }
        .item:nth-child(5) {
          .bg {
            background-size: 29px 25px !important;
          }
        }
      }
    }
  }
  .support-wrap {
    padding: 50px 0 0;
    margin-bottom: 100px;
    .container {
      .list {
        display: flex;
        flex-wrap: wrap;
        .item {
          width: 285px;
          height: 146px;
          padding: 30px 0 40px 0;
          margin: 10px;
          box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
          .bg {
            background-size: 100% !important;
            margin: 0 auto;
          }
          .title {
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            text-align: center;
            margin: 20px 0 20px;
          }
        }
      }
      .consulting {
        height: 180px;
        background: url('~/static/img/about/consulting1.jpg') no-repeat center;
        display: flex;
        margin-top: 60px;
        .txt-box {
          padding-top: 40px;
          margin-left: 368px;
          font-family: Microsoft YaHei;
          div:nth-child(1) {
            font-size: 27px;
            font-weight: 400;
            color: #fff;
            line-height: 62px;
          }
          div:nth-child(2) {
            font-size: 18px;
            font-weight: 400;
            color: #fff;
            line-height: 50px;
          }
        }
        .btn {
          width: 180px;
          height: 55px;
          background: #fff;
          border-radius: 4px;
          font-size: 18px;
          font-weight: bold;
          color: #0066ff;
          text-align: center;
          line-height: 55px;
          margin-left: 80px;
          margin-top: 65px;
        }
      }
    }
  }
  .condition-wrap {
    padding-bottom: 80px;
    .container {
      .list {
        display: flex;
        .item {
          width: 270px;
          margin: 0 20px;
          box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
          height: 230px;
          .bg {
            width: 270px;
            height: 120px;
            border-radius: 4px 4px 0 0;
          }
          .title {
            font-size: 18px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            text-align: center;
            margin-top: 27px;
            margin-bottom: 12px;
          }
          .info {
            font-size: 12px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            text-align: center;
          }
        }
        .item:first-child {
          margin-left: 0;
        }
        .item:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .system-wrap {
    background: rgba(247, 248, 250, 1);
    padding: 50px 0 87px;
    .container {
      .system {
        display: flex;
        .left {
          width: 575px;
          height: 350px;
          background: url('~/static/img/about/system_introduce.png') no-repeat
            center;
        }
        .right {
          width: 588px;
          margin-left: 48px;
          padding-top: 30px;
          p {
            margin: 0;
            font-size: 14px;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
            line-height: 27px;
            text-indent: 30px;
            .orange {
              color: #f59a23;
            }
            .blue {
              color: #02a7f0;
            }
          }
          .btn {
            width: 140px;
            height: 40px;
            background: rgba(0, 128, 255, 1);
            font-size: 16px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 40px;
            text-align: center;
            margin-top: 30px;
          }
        }
      }
    }
  }
}
</style>
