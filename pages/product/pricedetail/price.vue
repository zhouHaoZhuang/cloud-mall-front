<template>
  <div class="recruit-container">
    <div class="container">
      <h2 class="inweb">
        CDN详细价格信息
      </h2>
      <div class="charge-type">
        <p class="text-one">
          CDN的计费方式:按流量计费
        </p>
        <p class="text-two">
          注意：塞拉云CDN仅支持近30天的日志下载，如对日志和计费有异议，请在日志有效期内提出对账申请，逾期无法提供对账服务。
        </p>
        <ul class="anchor">
          <li>
            <a @click="handleNavJump(1)">按[流量]计费说明</a>
          </li>
          <li>
            <a @click="handleNavJump(2)">静态HTTPS请求数计费</a>
          </li>
        </ul>
        <a-button type="primary" class="btnopen" @click="skipInstant">
          立即开通
        </a-button>
      </div>
      <div id="billing" class="charge-type-two">
        <p class="text-one">
          CDN的计费方式:按流量计费
        </p>
        <a-table
          :row-class-name="getRowClassname"
          :columns="columns"
          :data-source="data"
          :pagination="false"
        />
        <div class="centerbox">
          <p class="tittle">
            计费规则:
          </p>
          <p class="description">
            <span class="tittle-one">计费项</span> :&emsp;流量&emsp;&emsp;<span
              class="tittle-one"
            >付费方式</span>:&emsp;按量付费&emsp;&emsp;<span class="tittle-one">计费周期</span>:&emsp;按小时计费，实时扣费。
          </p>
          <p class="description">
            <span class="tittle-one">计费规则</span> :&emsp;按中国内地流量 和
            其他国家及地区流量阶梯价格计费，当月按各大区分别超额累进（以自然月为一个累计周期）
          </p>
          <p class="description">
            <span class="tittle-one">
              流量账单收费示例（仅中国内地流量情况）</span>
          </p>
          <p class="description">
            5月1日至5月15日累计消耗的流量为10200GB
            5月16日0点至1点消耗的流量为90GB，月累计消耗流量为10290GB5月16日0点至1点使用的90GB中，有40G落在0GB
            – 10TB阶梯内，单价为0.21元/GB剩下的50G在10TB -
            50TB阶梯内，单价为0.19元/GB则5月16日0点至1点产生账单金额为40GB x
            0.21元/GB+50GB x 0.19元/GB=17.9元
          </p>
          <p class="tittle">
            说明:
          </p>
          <p class="description">
            出账时间：账单出账时间通常在当前计费周期结束后3小时左右，具体以系统实际出账时间为准；账单生成后会自动从您的账户余额中扣除资金以结算账单。按流量计费的带宽上限为10Gbps。如果您的业务实际带宽峰值大于10Gbps，请使用按带宽计费或咨询客服申请特殊配置
          </p>
          <p class="description">
            <span class="tittle-one"> 流量进制:&emsp;</span>

            按流量计费方式的流量进制为1024，例如：1GB = 1024 MB
          </p>
        </div>
      </div>
      <div id="httpsrequest" class="charge-type-three">
        <p class="text-one">
          按静态HTTPS请求数
        </p>
        <a-table
          :columns="columnsTwo"
          :data-source="dataTwo"
          :pagination="false"
          :row-class-name="getRowClassname"
        />
        <div class="centerbox">
          <p class="tittle">
            计费规则:
          </p>
          <p class="description">
            <span class="tittle-one">计费项</span>
            :&emsp;静态HTTPS请求数&emsp;&emsp;<span
              class="tittle-one"
            >付费方式</span>:&emsp;按量付费&emsp;&emsp;<span class="tittle-one">计费周期</span>:&emsp;按小时计费，实时扣费。
          </p>
          <p class="tittle">
            说明:
          </p>
          <p class="description">
            账单出账时间为当前计费周期结束。账单出账时间通常在当前计费周期结束后3小时左右，具体以系统出账时间为准，账单生成后会自动从您的账户余额中扣除费用以结算账单。
          </p>
        </div>
      </div>
    </div>
    <a-modal
      :title="title"
      :visible="visible"
      :ok-text="oktext"
      :cancel-text="canceltext"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      {{ ModalText }}
    </a-modal>
  </div>
</template>

<script>
import VueScrollTo from 'vue-scrollto'
const columns = [
  {
    title: '流量（计算单位：元/GB）',
    dataIndex: 'address'
  },
  {
    title: '中国内地',
    dataIndex: 'age'
  },
  {
    title: '境外',
    dataIndex: 'name'
  }
]
const columnsTwo = [
  {
    title: '计费项',
    dataIndex: 'address'
  },
  {
    title: '价格（元/万次）',
    dataIndex: 'age'
  }
]
const data = [
  {
    key: '1',
    name: '0.80',
    age: 0.21,
    address: '0GB-10TB（含）'
  },
  {
    key: '2',
    name: '0.80',
    age: 0.19,
    address: '10GB-50TB（含）'
  },
  {
    key: '3',
    name: '0.80',
    age: 0.17,
    address: '50GB-100TB（含）'
  },
  {
    key: '4',
    name: '0.80',
    age: 0.14,
    address: '100GB-1PB（含）'
  },
  {
    key: '5',
    name: '0.80',
    age: 0.11,
    address: '大雨1PB（含）'
  }
]
const dataTwo = [
  {
    key: '1',
    name: '0.80',
    age: 0.05,
    address: '静态HTTPS请求数'
  }
]
export default {
  data () {
    return {
      data,
      columns,
      dataTwo,
      columnsTwo,
      checked: false,
      skip: '',
      ModalText: '',
      visible: false,
      title: '提示',
      oktext: '',
      canceltext: ''
    }
  },
  methods: {
    // 判断确认按钮的功能
    handleOk (e) {
      // 未登录
      if (this.func === 1) {
        this.$router.push('/login')
      } else if (this.func === 2) {
        this.$router.push('/instant-open')
      }
      this.visible = false
    },
    handleCancel (e) {
      this.visible = false
    },
    skipInstant () {
      // 判断是否开通过,开通过就提示,没开通过就让跳转,开通过进行提示
      this.$api.cloud.isAccountSetup().then((res) => {
        if (res.code === '000000') {
          if (res.data === true) {
            this.$message.warning('当前账户已开通CDN服务')
          } else {
            // 未开通
            this.func = 2
            this.handleOk()
          }
        } else if (res.code === '000001') {
          // 未登录
          this.visible = true
          this.ModalText = '您还未登录，请登录后再进行服务开通'
          this.oktext = '确认登录'
          this.canceltext = '取消'
          this.func = 1
        } else {
          this.$message.warning(res.msg)
        }
      })
    },
    getRowClassname (record) {
      return 'data-rule-invalid'
    },
    // 锚点导航点击
    handleNavJump (item) {
      if (item === 1) {
        this.skip = 'billing'
      }
      if (item === 2) {
        this.skip = 'httpsrequest'
      }
      VueScrollTo.scrollTo(`#${this.skip}`, 'body', {
        container: 'body',
        easing: 'ease-in',
        force: true,
        offset: -80,
        cancelable: true,
        x: false,
        y: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.recruit-container {
  background-color: #f5f7fd;
  width: 100%;
  height: 100%;
  padding-bottom: 40px;
  .container {
    width: 1540px;
    .inweb {
      font-weight: 600;
      color: #13274b;
      font-size: 28px;
      margin-top: 80px;
      padding: 30px 0 20px 0;
    }
    .charge-type {
      width: 1540px;
      height: 280px;
      margin-bottom: 20px;
      background-color: #fff;
      border-radius: 4px;
      position: relative;
      padding: 30px 0 30px 20px;
      .text-one {
        font-size: 24px;
        color: #12264c;
      }
      .text-two {
        font-size: 18px;
        color: #12264c;
      }
      .anchor {
        color: #3b77e3;
        font-size: 16px;
        line-height: 30px;
        li {
          list-style: disc;
          margin-left: -20px;
        }
      }
      .btnopen {
        width: 200px;
        height: 50px;
        font-size: 16px;
        position: absolute;
        left: 20px;
        bottom: 20px;
      }
    }
    .charge-type:hover {
      box-shadow: 0px 0px 12px 4px rgba(59, 119, 227, 0.1);
    }
    .charge-type-two:hover {
      box-shadow: 0px 0px 12px 4px rgba(59, 119, 227, 0.1);
    }
    .charge-type-three:hover {
      box-shadow: 0px 0px 12px 4px rgba(59, 119, 227, 0.1);
    }
    .charge-type-two {
      width: 1540px;
      height: 838px;
      background-color: #fff;
      padding: 30px 20px 30px 20px;
      margin-bottom: 30px;
      .text-one {
        font-size: 24px;
        color: #12264c;
      }
      .centerbox {
        width: 1500px;
        height: 370px;
        background-color: #fdfeff;
        border: 1px solid #edf3fc;
        border-radius: 4px;
        margin-top: 30px;
        padding: 20px;
        .tittle {
          font-size: 16px;
          color: #12264c;
          font-weight: 600;
        }
        .description {
          line-height: 20px;
          .tittle-one {
            color: #13274b;
          }
        }
      }
    }
    .charge-type-three {
      width: 1540px;
      height: 408px;
      background-color: #fff;
      padding: 30px 20px 30px 20px;
      margin-bottom: 30px;
      .text-one {
        font-size: 24px;
        color: #12264c;
      }
      .centerbox {
        width: 1500px;
        height: 170px;
        background-color: #fdfeff;
        border: 1px solid #edf3fc;
        border-radius: 4px;
        margin-top: 30px;
        padding: 20px;
        .tittle {
          font-size: 16px;
          color: #12264c;
          font-weight: 600;
        }
        .description {
          line-height: 20px;
          .tittle-one {
            color: #13274b;
          }
        }
      }
    }
  }
}
//设置标表头颜色
::v-deep .ant-table-thead {
  tr {
    th {
      background-color: #ecf2fd !important;
      padding-left: 120px !important;
      font-size: 16px;
    }
  }
}
::v-deep .ant-table-tbody {
  tr {
    td {
      padding-left: 120px;
    }
  }
}
::v-deep .data-rule-invalid:hover {
  box-shadow: 0px 0px 8px 2px rgba(59, 119, 227, 0.3);
}
::v-deep .data-rule-invalid {
  box-shadow: 0px 0px 4px 0px rgba(59, 119, 227, 0.2);
}
::v-deep .ant-table-tbody {
  tr:hover:not(.ant-table-expanded-row) > td,
  .ant-table-row-hover,
  .ant-table-row-hover > td {
    background-color: #fff;
  }
}
</style>
