<template>
  <div class="assurance">
    <!-- 轮播图 -->
    <Banner type="assurance" />
    <!-- 优势 -->
    <div class="goodness">
      <div class="w">
        <div class="container">
          <div class="left">
            <p class="goodness-title">
              稳定放心用
            </p>
            <p class="content">
              专业、稳定，一站式解决web应用核心安全痛点
            </p>
          </div>
          <div class="right">
            <img
              src="../../static/img/assurance/assurancegoodness.png"
              alt=""
            >
            <div class="point">
              <div class="info">
                多线路节点容灾，智能最优路径，窒秒级响
                应，最高可支持百万QPS业务接入防护
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 服务器安全护航 -->
    <div class="safe">
      <div class="w">
        <div class="title">
          <p class="title-top">
            服务器安全护航
          </p>
          <p class="title-bottom">
            应用防火墙安全系数高，保障业务的核心数据安全
          </p>
        </div>
        <div class="cntainer">
          <div class="left">
            <img src="../../static/img/assurance/assurancesafe.png" alt="">
          </div>
          <div class="right">
            <div class="content">
              我们构建了一个隔离的网络环境，专有网络之间逻辑上彻底隔离，只能通过对外映射的IP(弹性公网IP和NAT
              IP)互联。由于使用隧道封装技术对云服务器的IP报文进行封装，所以云服务器的数据链路层(二层MAC地址)信息不会进入物理网络，实现了不同云服务器间二层网络隔离，因此也实现了不同专有网络间二层网络隔离。专有网络内的ECS使用安全组防火墙进行三层网络访问控制。
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 故障赔偿 -->
    <div class="error">
      <div class="w">
        <div class="title">
          <p class="title-top">
            100倍故障赔偿
          </p>
          <p class="title-bottom">
            浙江云盾承诺由于浙江云盾故障导致产品无法正常使用，我们将提供100倍的故障时间赔偿让您使用舒心
          </p>
        </div>
        <div class="container">
          <div
            v-for="(item, index) in errorList"
            :key="index"
            class="list"
            :style="`background:url(${item.bg}) no-repeat center`"
          >
            <div v-if="item.sort" class="info">
              <i>{{ item.sort }}</i>{{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 赔偿类型 -->
    <div class="type">
      <div class="w">
        <div class="title">
          <p class="title-top">
            赔偿类型
          </p>
        </div>
        <div class="container">
          <div v-for="(item, index) in typeList" :key="index">
            <div v-if="item.content !== ''" class="list">
              <div
                class="typeTitle"
                :style="`background:url(${item.bg}) center no-repeat`"
              >
                {{ item.title }}
              </div>
              <div class="typeContent">
                {{ item.content }}
              </div>
            </div>
            <div
              v-if="item.content === ''"
              class="list-one"
              :style="`background:url(${item.bg}) center no-repeat`"
            >
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 无理由退款 -->
    <div class="refund">
      <div class="w">
        <div class="title">
          <p class="title-top">
            5天无理由退款
          </p>
          <p class="title-bottom">
            购买浙江云盾服务器，我们承诺5天无理由全额退款
          </p>
        </div>
        <div class="container">
          <div
            v-for="(item, index) in reundList"
            :key="index"
            class="list"
            :style="`background:url(${item.bg}) no-repeat center`"
          >
            <div v-if="item.sort" class="info">
              <i>{{ item.sort }}</i>{{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 退款常见问题 -->
    <div class="question">
      <div class="w">
        <div class="title">
          <p class="title-top">
            赔偿类型
          </p>
        </div>
        <div class="container">
          <div class="left">
            <div class="question-title">
              <div class="bg" />
              跨机房热迁移服务
            </div>
            <div
              v-for="item in questionList"
              :key="item.sort"
              class="right-content"
            >
              <div class="right-icon">
                {{ item.sort }}
              </div>
              <div class="right-text">
                {{ item.content }}
              </div>
            </div>
          </div>
          <div class="right">
            <div class="right-text">
              <div class="question-title">
                <div class="bg" />
                退款流程
              </div>
              <div class="question-content">
                用户中心提交退款申请>系统审核通过>款项退至您的浙江云盾账户，您可以直接前往用户中心查看
              </div>
            </div>
            <div class="right-text">
              <div class="question-title">
                <div class="bg" />
                续费、升配订单可以申请退款吗?
              </div>
              <div class="question-content">
                续费及升级订单为子订单，不可申请退款;如主购买订单符合5天内无理由退款规则，可申请—并退款
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 服务支持 -->
    <div class="support">
      <div class="w">
        <div class="title">
          <p class="title-top">
            7X24小时多渠道服务支持
          </p>
          <p class="title-bottom">
            在您使用浙江云盾产品期间遇到任何问题，专业的售后工程师团队为您提供7*24*365技术服务，
          </p>
        </div>
        <div class="container">
          <div v-for="(item, index) in supportList" :key="index" class="list">
            <div
              class="support-icon"
              :style="`background:url(${item.bg}) no-repeat center`"
            />
            <div class="support-title">
              {{ item.title }}
            </div>
            <div class="support-line" />
            <div class="support-content">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '~/components/product/banner.vue'
export default {
  components: { Banner },
  data () {
    return {
      errorList: [
        {
          sort: 1,
          bg: require('~/static/img/assurance/assuranceerror1.png'),
          content: '联系客服/提交工单'
        },
        {
          sort: 0,
          bg: require('~/static/img/assurance/assuranceerror.png')
        },
        {
          sort: 2,
          bg: require('~/static/img/assurance/assuranceerror2.png'),
          content: '技术排查定位问题'
        },
        {
          sort: 0,
          bg: require('~/static/img/assurance/assuranceerror.png')
        },
        {
          sort: 3,
          bg: require('~/static/img/assurance/assuranceerror3.png'),
          content: '快速解决故障'
        },
        {
          sort: 0,
          bg: require('~/static/img/assurance/assuranceerror.png')
        },
        {
          sort: 4,
          bg: require('~/static/img/assurance/assuranceerror4.png'),
          content: '核实赔偿范围'
        },
        {
          sort: 0,
          bg: require('~/static/img/assurance/assuranceerror.png')
        },
        {
          sort: 5,
          bg: require('~/static/img/assurance/assuranceerror5.png'),
          content: '赔偿100倍故障时间'
        }
      ],
      typeList: [
        {
          title: '故障赔偿',
          bg: require('~/static/img/assurance/assurancetype.png'),
          content:
            '浙江云盾平台原因导致您的云服务器、云虚拟主机、服务器托管完全不可访问，不可正常使用'
        },
        {
          title: '非故障类不可补偿',
          bg: require('~/static/img/assurance/assurancetype1.png'),
          content: ''
        },
        {
          title: '非故障类不可补偿',
          bg: require('~/static/img/assurance/assurancetype2.png'),
          content: ''
        }
      ],
      reundList: [
        {
          sort: 1,
          bg: require('~/static/img/assurance/assurancerefund1.png'),
          content: '联系客服/提交工单'
        },
        {
          sort: 0,
          bg: require('~/static/img/assurance/assuranceerror.png')
        },
        {
          sort: 2,
          bg: require('~/static/img/assurance/assurancerefund2.png'),
          content: '技术排查定位问题'
        },
        {
          sort: 0,
          bg: require('~/static/img/assurance/assuranceerror.png')
        },
        {
          sort: 3,
          bg: require('~/static/img/assurance/assurancerefund3.png'),
          content: '快速解决故障'
        },
        {
          sort: 0,
          bg: require('~/static/img/assurance/assuranceerror.png')
        },
        {
          sort: 4,
          bg: require('~/static/img/assurance/assurancerefund4.png'),
          content: '核实赔偿范围'
        }
      ],
      questionList: [
        { sort: 1, content: '新购5天内可申请无理由退款' },
        {
          sort: 2,
          content:
            '每个用户每月云服务器限最多退款1次，每月最多累积可退1台;每个用户云虚拟主机限每月最多退款1次，每月最多累积可退1台'
        },
        { sort: 3, content: '未签订合同及申请发票' },
        {
          sort: 4,
          content: '部分活动产品不支持5天无理由退款(详情请见活动规则)'
        }
      ],
      supportList: [
        {
          bg: require('~/static/img/assurance/assurancesupport1.png'),
          title: '售前服务',
          content: '售前咨询团队将竭诚为您提供云产品咨询、解决方案及其它服务'
        },
        {
          bg: require('~/static/img/assurance/assurancesupport2.png'),
          title: '售中服务',
          content:
            '为您配备专业的架构师团队，一对一提供全程架构指导，保障业务快速上云'
        },
        {
          bg: require('~/static/img/assurance/assurancesupport3.png'),
          title: '售后服务',
          content:
            '专业的技术支持7*24小时待命，充分保障您产品的无忧使用和业务的稳定运行'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
// 版心
.w {
  width: 1220px;
  height: 100%;
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
}
// 标题
.title {
  width: 100%;
  height: 150px;
  p {
    text-align: center;
  }
  .title-top {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 29px !important;
    color: #333333;
  }
  .title-bottom {
    font-size: 16px;
    font-weight: bold;
    color: #778699;
    margin-bottom: 60px;
  }
}
.assurance {
  background-color: #fff;
  // 优势
  .goodness {
    width: 100%;
    height: 798px;
    .container {
      display: flex;
      justify-content: space-around;
      width: 100%;
      height: 100%;
      padding: 100px 0 147px 0;
      box-sizing: border-box;
      .left {
        width: 510px;
        height: 491px;
        .goodness-title {
          font-size: 36px;
          margin-top: 189px;
          font-weight: bold;
          color: #333333;
        }
        .content {
          font-size: 16px;
          font-weight: bold;
          color: #778699;
        }
      }
      .right {
        position: relative;
        width: 510px;
        height: 491px;
        img {
          width: 100%;
          height: 100%;
        }
        .point {
          position: absolute;
          left: 302px;
          bottom: -56px;
          width: 363px;
          height: 111px;
          box-sizing: border-box;
          padding-top: 40px;
          background: url(~/static/img/assurance/assurancegoodness1.png)
            no-repeat;
          background-size: cover;
          .info {
            margin: auto;
            width: 303px;
            height: 43px;
            font-size: 16px;
            font-weight: bold;
            color: #778699;
            line-height: 26px;
          }
        }
      }
    }
  }
  // 服务器安全护航
  .safe {
    width: 100%;
    height: 670px;
    .cntainer {
      position: relative;
      height: 420px;
      .left {
        position: absolute;
        top: 50px;
        left: 0px;
        z-index: 999;
        width: 493px;
        height: 323px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .right {
        position: absolute;
        top: 0px;
        right: 0px;
        width: 990px;
        height: 100%;
        background-color: #f7f8fa;
        .content {
          position: absolute;
          top: 107px;
          right: 66px;
          width: 533px;
          height: 165px;
          font-size: 16px;
          font-weight: bold;
          color: #778699;
          line-height: 30px;
        }
      }
    }
  }
  // 故障赔偿
  .error {
    width: 100%;
    height: 353px;
    .container {
      display: flex;
      justify-content: space-around;
      .list {
        position: relative;
        width: 80px;
        height: 80px;
        background-size: contain !important;
        .info {
          position: absolute;
          bottom: -30px;
          left: -37px;
          width: 156px;
          height: 16px;
          text-align: center;
          i {
            width: 8px;
            height: 15px;
            margin-right: 16px;
            font-size: 20px;
            font-family: Arial;
            font-weight: bold;
            font-style: italic;
            color: #ff5c00;
            line-height: 30px;
          }
        }
      }
    }
  }
  // 赔偿类型
  .type {
    height: 383px;
    .title {
      height: 100px;
    }
    .container {
      display: flex;
      justify-content: space-around;
      .list {
        width: 380px;
        height: 180px;
        background-size: cover !important;
        box-shadow: 0px 0px 30px 0px rgba(15, 47, 87, 0.06);
        .typeTitle {
          width: 100%;
          height: 64px;
          font-size: 24px;
          font-weight: bold;
          color: #ffffff;
          text-align: center;
          line-height: 64px;
        }
        .typeContent {
          width: 295px;
          height: 42px;
          margin: 35px auto;
          font-size: 14px;
          font-weight: 500;
          color: #333333;
          line-height: 28px;
        }
      }
      .list-one {
        width: 380px;
        height: 180px;
        font-size: 24px;
        font-weight: bold;
        color: #ffffff;
        line-height: 180px;
        text-align: center;
      }
    }
  }
  // 无理由退款
  .refund {
    width: 100%;
    height: 323px;
    .container {
      display: flex;
      justify-content: space-around;
      .list {
        position: relative;
        width: 80px;
        height: 80px;
        background-size: contain !important;
        .info {
          position: absolute;
          bottom: -30px;
          left: -37px;
          width: 156px;
          height: 16px;
          text-align: center;
          i {
            width: 8px;
            height: 15px;
            margin-right: 16px;
            font-size: 20px;
            font-family: Arial;
            font-weight: bold;
            font-style: italic;
            color: #ff5c00;
            line-height: 30px;
          }
        }
      }
    }
  }
  // 退款常见问题
  .question {
    width: 100%;
    height: 614px;
    .title {
      height: 100px;
    }
    .container {
      display: flex;
      justify-content: space-around;
      .left {
        width: 560px;
        height: 420px;
        box-shadow: 0px 0px 30px 0px rgba(15, 47, 87, 0.06);
        .right-content {
          position: relative;
          width: 440px;
          height: 22px;
          margin-left: 62px;
          margin-bottom: 44px;
          .right-icon {
            position: absolute;
            top: 0px;
            display: inline-block;
            width: 22px;
            height: 22px;
            line-height: 22px;
            text-align: center;
            border-radius: 50%;
            color: #fff;
            background-color: #1d7aec;
          }
          .right-text {
            display: inline-block;
            margin-left: 37px;
            width: 398px;
          }
        }
      }
      .right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 560px;
        height: 420px;
        .right-text {
          width: 560px;
          height: 200px;
          box-shadow: 0px 0px 30px 0px rgba(15, 47, 87, 0.06);
          .question-content {
            width: 395px;
            height: 42px;
            margin-left: 112px;
            font-size: 14px;
            font-weight: 500;
            color: #778699;
            line-height: 28px;
          }
        }
      }
      .question-title {
        height: 48px;
        font-size: 24px;
        font-weight: bold;
        color: #333333;
        margin-top: 40px;
        margin-left: 48px;
        margin-bottom: 30px;
        .bg {
          width: 48px;
          height: 48px;
          margin-right: 15px;
          display: inline-block;
          background: #ffffff;
          vertical-align: middle;
          box-shadow: 0px 0px 30px 0px rgba(15, 47, 87, 0.06);
          background: url(~/static/img/assurance/assrancequestion.png) no-repeat;
          background-size: cover;
        }
      }
    }
  }
  // 服务支持
  .support {
    width: 100%;
    height: 490px;
    .container {
      display: flex;
      justify-content: space-around;
      .list {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        width: 380px;
        height: 260px;
        background: #ffffff;
        border: 2px solid #edf2fa;
        .support-icon {
          width: 70px;
          height: 60px;
          background-size: contain !important;
        }
        .support-title {
          font-size: 24px;
          font-weight: 800;
          color: #333333;
        }
        .support-line {
          width: 30px;
          height: 4px;
          background-color: #1d7aec;
        }
        .support-content {
          width: 280px;
          font-size: 14px;
          font-weight: 500;
          color: #778699;
          line-height: 28px;
          text-align: center;
        }
      }
      .list:hover {
        border-bottom: 3px solid #1d7aec;
      }
    }
  }
}
</style>
