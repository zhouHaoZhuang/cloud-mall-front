<template>
  <div>
    <div class="black" />
    <div class="agreement-main">
      <div class="auto">
        <div class="agreement-container">
          <div class="agreement-box">
            <div class="agreement-content">
              <h2>CDN服务等级协议</h2>
              <h2 class="title">本服务等级协议（Service Level Agreement，以下简称 “SLA”）规定了云盾互联向客户提供的CDN（简称“CDN”）的服务可用性等级指标及赔偿方案。</h2>
              <h2 class="title">版本生效日期：2022年4月1日</h2>
              <p class="strong">1.定义</p>
              <p>·服务周期：以一个自然月做为一个服务周期，如不满一个月按一个月计算。</p>
              <p>·服务周期总分钟数：按照每月每周七（7）天每天二十四（24）小时计算。</p>
              <p>·失败请求：因CDN系统原因导致的域名返回的5XX的请求和因为CDN服务故障导致的用户正常请求未能到达CDN服务器端的请求视为失败请求。因CDN服务故障导致的用户正常请求未能到达CDN服务器端的失败请求，将通过故障前7天内用户域名的平均请求数计算。</p>
              <p>·有效的总请求：客户某一云盾互联账号下所有CDN服务器端接收到的所有请求视为有效的总请求。</p>
              <p>·每5分钟错误率：</p>
              <h2><img width="380px" src="../../../static/img/assurance/service1.png" alt=""></h2>
              <p class="strong">2.服务可用性</p>
              <p class="strong-two">2.1 服务可用性计算公式</p>
              <p>CDN服务可用性按服务周期统计，统计对象为某一云盾互联账户下的所有开启CDN服务的域名（月请求量小于100万的域名除外），并按照如下方式计算。</p>
              <h2><img width="380px" src="../../../static/img/assurance/service2.png" alt=""></h2>
              <p class="strong-two">2.2 服务可用性承诺</p>
              <p>CDN服务可用性不低于99.90%，如CDN未达到上述可用性承诺，客户可以根据本协议第3条约定获得赔偿。赔偿范围不包括以下原因所导致的服务不可用时间：</p>
              <p>·（1）云盾互联预先通知客户后进行系统维护所引起的，包括割接、维修、升级和模拟故障演练；</p>
              <p>·（2）任何云盾互联所属设备以外的网络、设备故障或配置调整引起的；</p>
              <p>·（3）客户的应用程序或数据信息受到黑客攻击而引起的；</p>
              <p>·（4）客户维护不当或保密不当致使数据、口令、密码等丢失或泄漏所引起的；</p>
              <p>·（5）客户自行升级操作系统所引起的；</p>
              <p>·（6）客户的应用程序或安装活动所引起的；</p>
              <p>·（7）客户的疏忽或由客户授权的操作所引起的；</p>
              <p>·（8）客户未遵循云盾互联产品使用文档或使用建议引起的；</p>
              <p>·（9）不可抗力引起的；</p>
              <p>·（10）其他非云盾互联原因所造成的不可用，包括但不限于第三方CDN或源站问题导致的不可用；</p>
              <p>·（11）出现“突发带宽”，但未提前向云盾互联申请或者申请不成功的（突发带宽的定义、申请和计费规则详见“CDN服务协议”内的相关条款）。</p>
              <p class="strong">3.赔偿方案</p>
              <p class="strong-two">3.1 赔偿标准</p>
              <p>根据客户某一云盾互联账号下CDN产品的服务可用性，按照下表中的标准计算赔偿金额，赔偿方式仅限于用于购买CDN产品的代金券，且赔偿总额不超过未达到服务可用性承诺当月客户支付的月度服务费用（不含用代金券抵扣的费用）的25%。</p>
<table class="table">
                  <tr class="topic">
                      <td>服务可用性</td>
                      <td>赔偿代金券金额</td>
                  </tr>
                  <tr>
                      <td>低于99.90%但等于或高于99.00%</td>
                      <td>月度服务费用的10%</td>
                  </tr>
                  <tr>
                      <td>低于99.00%</td>
                      <td>月度服务费用的25%</td>
                  </tr>
              </table>
              <p class="strong-two">3.2 赔偿申请时限</p>
              <p>客户可以在每月第五（5）个工作日后对上个月没有达到可用性的实例提出赔偿申请。赔偿申请必须限于在内容分发网络CDN服务没有达到可用性的相关月份结束后两（2）个月内提出。超出申请时限的赔偿申请将不被受理。</p>
              <p class="strong">4.其他</p>
              <p>云盾互联有权对本SLA条款作出修改。如本SLA条款有任何修改，云盾互联将提前30天以网站公示或发送邮件的方式通知您。如您不同意云盾互联对SLA所做的修改，您有权停止使用CDN服务，如您继续使用CDN服务，则视为您接受修改后的SLA。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      webInfo: state => state.home.webInfo
    })
  },
  // eslint-disable-next-line vue/order-in-components
  data () {
    return {
      url: ''
    }
  },
  mounted () {
    this.url = this.getUrl()
  },
  methods: {
    getUrl () {
      return window.location.protocol + '//' + window.location.host
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  line-height: 26px;
}
.black {
  height: 80px;
  background-color: black;
}
.agreement-main {
  width: 100%;
  margin-bottom: 30px;
  margin-top: 10px;
  .auto {
    margin: 0 auto;
    min-width: 1220px;
    max-width: 1220px;
    .agreement-container {
      padding-top: 30px;
      overflow: auto;
      .agreement-box {
        border: 1px solid #e5e5e5;
        margin-top: 10px;
        .agreement-content {
          padding: 20px 30px;
          h2 {
            padding-bottom: 20px;
            font-size: 24px;
            color: #333;
            text-align: center;
          }
          h2:nth-child(3){
            border-bottom: 1px solid #ddd;

          }
          h2:nth-child(2){
            padding-bottom: 16px;
          }
          .title{
              font-size: 18px;
          }
          .spec {
            text-indent: 0;
            padding: 0;
            display: flex;
            justify-content: space-between;
          }
          p {
            // padding-top: 1em;
            text-indent: 0;
          }
          .pad-l-2em {
            padding-left: 4em;
          }
          .pad-l-4em {
            padding-left: 6em;
          }
        }
      }
    }
  }
}
.strong {
            font-size: 16px;
            font-weight: 600;
          }
.strong-two{
  // color: red;
  font-size: 15px;
}
.table{
    margin-left: 300px;
    tr td{
    border: 1px solid gray;
    padding: 6px 0;
    width: 300px;
    text-align: center;
    
}
}
.topic{
        background-color: #D7D7D7;
    }
</style>
