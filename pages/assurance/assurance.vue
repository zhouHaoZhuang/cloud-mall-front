<template>
  <div>
    <!-- 头部 -->
    <div class="security-banner">
      <div class="container">
        <div class="header-info">
          <h1>百分服务，助您上云无忧</h1>
          <p>
            匠心打造完整的VIP会员服务体系，为国内国际用户提供多种服务支持和服务保障让
            <br>
            用户尊享售后服务，让云端部署更轻松、更高效
          </p>
          <a href="" class="btn1">立即注册</a>
        </div>
      </div>
    </div>
    <!-- 锚点导航 -->
    <AnchorNav :nav-data="navList" />
    <!-- 0元免费备案 -->
    <div id="advantage" class="security-beian scoll1">
      <div class="container">
        <h1 class="security-title">
          0元免费备案
          <span>为用户提供免费备案服务，1V1备案处理机制，最快1个工作日取得备案号</span>
        </h1>
        <ul class="security-list">
          <li class="item1">
            <p />
            <h5>登录会员中心</h5>
          </li>
          <li class="item2">
            <p />
            <h5>录入资料提交我司初审</h5>
          </li>
          <li class="item3">
            <p />
            <h5>提交管局审核</h5>
          </li>
          <li class="item4">
            <p />
            <h5>备案成功</h5>
          </li>
        </ul>
        <p class="security-btns">
          <a href="" class="btn2">我要备案</a>
        </p>
        <div class="security-problems js_problems1">
          <h3>备案常见问题</h3>
          <div>
            <a-collapse accordion>
              <a-collapse-panel key="1" header="备案需要多长时间？">
                <p>{{ text1 }}</p>
              </a-collapse-panel>
              <a-collapse-panel
                key="2"
                header="备案期间网站都要关站吗？"
                :disabled="false"
              >
                <p>{{ text2 }}</p>
              </a-collapse-panel>
              <a-collapse-panel key="3" header="如何添加白名单？">
                <p>{{ text3 }}</p>
              </a-collapse-panel>
              <a-collapse-panel key="4" header="幕布照片的要求及邮寄说明">
                <p>{{ text4 }}</p>
              </a-collapse-panel>
            </a-collapse>
          </div>
        </div>
      </div>
    </div>
    <!-- 100倍故障赔偿 -->
    <div id="function" class="security-compensation scoll2">
      <div class="container">
        <h1 class="security-title">
          100倍故障赔偿
          <span>浙江云盾承诺由于浙江云盾故障导致产品无法正常使用，我们将提供100倍的故障时间赔偿让您使用舒心</span>
        </h1>
        <ul class="security-list">
          <li class="item1">
            <p />
            <h5>联系客服/提交工单</h5>
          </li>
          <li class="item2">
            <p />
            <h5>技术排查定位问题</h5>
          </li>
          <li class="item3">
            <p />
            <h5>快速解决故障</h5>
          </li>
          <li class="item4">
            <p />
            <h5>核实赔偿范围</h5>
          </li>
          <li class="item5">
            <p />
            <h5>赔偿100倍故障时间</h5>
          </li>
        </ul>
        <div class="security-stype">
          <h3>赔偿类型</h3>
          <ul>
            <li class="item1">
              <h4>故障赔偿</h4>
              <p>
                浙江云盾平台原因导致您的云服务器、云虚拟主机、服务器托管完全不可访问，不可正常使用
              </p>
            </li>
            <li class="item2">
              <h4>非故障类不可补偿</h4>
              <p>
                用户因操作或被攻击导致的云产品不能访问、IP被封停的情况，不可补偿
              </p>
            </li>
            <li class="item3">
              <h4>故障赔偿</h4>
              <p>
                由于运营商故障导致的丢包和延时，不可抗力、意外事件导致的损失不在赔偿范围内
              </p>
            </li>
          </ul>
        </div>
        <p class="security-btns" />
      </div>
    </div>
    <!-- 5天无理由退款 -->
    <div id="comparison" class="security-refund scoll3">
      <div class="container">
        <h1 class="security-title">
          5天无理由退款
          <span>浙江云盾承诺用户购买云服务器5天内无条件退款，
            致力为您打造更优良的服务器体验环境。购买浙江云盾服务器，我们承诺5天无理由全额退款</span>
        </h1>
        <ul class="security-list">
          <li class="item1">
            <p />
            <h5>提交退款申请</h5>
          </li>
          <li class="item2">
            <p />
            <h5>审核确定</h5>
          </li>
          <li class="item3">
            <p />
            <h5>退款至账余额</h5>
          </li>
          <li class="item4">
            <p />
            <h5>重新购买</h5>
          </li>
        </ul>
        <div class="security-btns">
          <a href="" class="btn3">我要退款</a>
        </div>
        <div class="security-problems js_problems2">
          <h3>退款常见问题</h3>
          <div>
            <a-collapse accordion>
              <a-collapse-panel key="1" header="5天无理由退款条件">
                <p>{{ text5 }}</p>
              </a-collapse-panel>
              <a-collapse-panel key="2" header="退款流程" :disabled="false">
                <p>{{ text6 }}</p>
              </a-collapse-panel>
              <a-collapse-panel key="3" header="续费、升级订单可以申请退款吗？">
                <p>{{ text7 }}</p>
              </a-collapse-panel>
            </a-collapse>
          </div>
        </div>
      </div>
    </div>
    <!-- 7X24小时多渠道服务支持 -->
    <div id="scene" class="security-support scoll4">
      <div class="container">
        <h1 class="security-title">
          7X24小时多渠道服务支持
          <span>
            专业的售后工程师团队为您提供 7*24*365
            技术服务，在您使用浙江云盾产品期间遇到任何问题，您可及时
            <a href="">提交工单</a>
            或
            <a href="">咨询在线QQ</a>
            或
            <em>拨打400-888-8888</em>
            为您服务
          </span>
        </h1>
        <div class="security-stype">
          <ul>
            <li class="item1">
              <h4>售前服务</h4>
              <p>售前咨询团队将竭诚为您提供云产品咨询、解决方案及其它服务</p>
            </li>
            <li class="item2">
              <h4>售中服务</h4>
              <p>
                为您配备专业的架构师团队，一对一提供全程架构指导，保障业务快速上云
              </p>
            </li>
            <li class="item3">
              <h4>售后服务</h4>
              <p>
                专业的技术支持7*24小时待命，充分保障您产品的无忧使用和业务的稳定运行
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- VIP多对1服务 -->
    <div id="issue" class="security-vip scoll5">
      <div class="container">
        <h1 class="security-title">
          VIP多对1服务
          <span>为了进一步提供更细致、更专业的服务，浙江云盾针对VIP客户，我司将通过建立微信群/QQ讨论组/电话等形式为您安排多人的技术团队为您提供售前售后的服务</span>
        </h1>
        <dl>
          <dt />
          <dd>
            <h4>微信讨论组</h4>
            <p>
              针对VIP客户，为了进一步提供更细致、专业的服务，我司通过建立微信或QQ讨论组随时随地为您服务，我司将安排主管及以上级别负责人员与贵方人员一起对接完成售前、售中、售后服务，为您提供最优质最舒心的服务。
            </p>
          </dd>
        </dl>
        <ul>
          <li class="item1">
            <a href="">QQ联系</a>
          </li>
          <li class="item2">
            <a href="">
              咨询热线：
              <span>400-888-8888</span>
            </a>
          </li>
          <li class="item3">
            <a href="">上门服务</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 吸顶 -->
    <!-- <FixedTopNav :navData = navList></FixedTopNav> -->
  </div>
</template>

<script>
import AnchorNav from '@/components/AnchorNav/index'
import FixedTopNav from '@/components/FixedTopNav/index'
export default {
  components: { AnchorNav, FixedTopNav },
  data () {
    return {
      navList: [
        {
          id: 'advantage',
          title: '0元免费备案'
        },
        {
          id: 'function',
          title: '100倍故障赔偿'
        },
        {
          id: 'comparison',
          title: '5天无理由退款'
        },
        {
          id: 'scene',
          title: '7X24小时多渠道服务支持 '
        },
        {
          id: 'issue',
          title: 'vip多对一服务'
        }
      ],
      text1:
        '备案资料提交成功后，我司会在1-2个工作日内初审并上报至当地通信管局，审核时长要看各个管局的审核效率，管局的官方回复是在20个工作日内审核，大多数地区管局实际审核大约在1-2周。审核通过后会以短信或邮件的形式通知您；由于最后的审核是在管局，我们接入商是没有审核权限的，所以请耐心等待管局审核即可，并无其他加快备案的方法。',
      text2: `①、新增备案或者新增网站备案：没有备案的域名是不允许进行访问的。需要确认您的域名是打不开的，再做备案操作；（新增备案的域名在管局审核期间需要关闭网站，取得备案号后才可以开通网站。）

②、接入备案：网站需要正常打开；如果您的备案管局审核失败，请您尽快根据管局说的原因进行修改后重新提交。`,
      text3: `域名已经有备案记录，可以添加白名单直接使用，无需等待审核，提交即可解析使用

①、登录官网会员中心，输入账户及密码进行登录

②、登录官网会员中心，左边框栏点击备案管理，选择白名单，在页面中选择提交白名单

③、输入正确的备案过的“域名”及“网站备案/许可证号”即可提交，提交即过白名单，可以直接使用，无需等待审核，

④、如果提交白名单的域名比较多，可以操作选择“白名单批量添加”按钮进行批量提交白名单

加入的白名单会统一在已加入白名单列表，因无备案记录等原因退回的，统一在未加入白名单列表（可以重新申请加入白名单）`,
      text4:
        '您好，目前备案是支持邮寄幕布的。备案幕布照片要求：站在幕布正中间拍照，只拍上半身即可。整个画面背景必须都是幕布，显示效果幕布字迹清晰。',
      text5:
        '①、新购5天内可申请无理由退款；②、每个用户每月云服务器限最多退款1次，每月最多累积可退1台；每个用户云虚拟主机限每月最多退款1次，每月最多累积可退1台；③、未签订合同及申请发票；④、部分活动产品不支持5天无理由退款（详情请见活动规则）。',
      text6:
        '用户中心提交退款申请 > 系统审核通过 > 款项退至您的浙江云盾账户，您可以直接前往用户中心查看。',
      text7:
        '您好，续费及升级订单为子订单，不可申请退款；如主购买订单符合5天内无理由退款规则，可申请一并退款；'
    }
  }
}
</script>

<style lang="scss" scoped>
.security-banner {
  height: 490px;
  position: relative;
  background: url('~/static/img/about/banner1.jpg') center top #0a38df no-repeat;
  min-width: 1220px;
}
.container {
  width: 1220px;
  margin: 0 auto;
}
.security-banner .header-info {
  width: 660px;
  padding-top: 160px;
  color: #fff;
  overflow: hidden;
}
.security-banner .header-info h1 {
  font-size: 36px;
  margin: 0 0 30px;
  color: #fff;
}
.security-banner .header-info p {
  line-height: 24px;
  margin: 0 0 65px;
  overflow: hidden;
}
.security-banner .header-info .btn1 {
  display: block;
  width: 178px;
  height: 38px;
  border: 1px solid #fff;
  line-height: 38px;
  text-align: center;
  color: #fff;
  font-size: 16px;
}
//0元
.security-beian {
  padding: 95px 0 70px;
  overflow: hidden;
  min-width: 1220px;
}
.container {
  width: 1220px;
  // height: 800px;
  margin: 0 auto;
}
.security-title {
  font-size: 36px;
  text-align: center;
  margin: 0 0 75px;
  overflow: hidden;
  span {
    display: block;
    font-size: 14px;
    color: #666666;
    margin: 25px 0 0;
  }
}
.security-beian .security-list {
  margin-left: -40px;
  margin-right: -40px;
}
.security-beian .security-list li {
  width: 320px;
  float: left;
  text-align: center;
  height: 70px;
  &::before {
    content: '';
    width: 60px;
    height: 60px;
    display: inline-block;
    background: url('~/static/img/about/icons.png') no-repeat;
    background-position: 0 0;
  }
  p {
    margin: 13px 0;
    height: 16px;
    background: url(~/static/img/about/ico.png) center no-repeat;
  }
  p::after {
    width: 152px;
    content: '';
    float: right;
    height: 1px;
    margin: 7px 0 0;
    background: url(~/static/img/about/line.png) left center no-repeat;
  }
  p::before {
    width: 152px;
    content: '';
    float: left;
    height: 1px;
    margin: 7px 0 0;
    background: url(~/static/img/about/line.png) left center no-repeat;
  }
}
.security-btns {
  clear: both;
  text-align: center;
  padding: 110px 0 50px 0px;
  overflow: hidden;
  .btn2 {
    background: #059fff;
  }
  a {
    display: inline-block;
    font-size: 16px;
    width: 200px;
    height: 40px;
    line-height: 40px;
    margin: 100px 25px 0px;
    color: #fff;
  }
}
.security-problems h3 {
  height: 25px;
  line-height: 25px;
  font-size: 18px;
  margin: 0 0 20px;
  overflow: hidden;
}
.security-problems h3:before {
  content: '';
  width: 18px;
  height: 25px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  background: url('~/static/img/about/icons.png') -275px 1px no-repeat;
}
//100bei
.security-compensation {
  padding: 60px 0 30px;
  background: #fafafa;
  overflow: hidden;
  min-width: 1220px;
}
.security-compensation .security-list {
  margin: 0 10px 45px;
  overflow: hidden;
  li {
    width: 240px;
    float: left;
    text-align: center;
  }
  li::before {
    content: '';
    width: 60px;
    height: 60px;
    display: inline-block;
    background: url('~/static/img/about/icons.png') no-repeat;
  }
  p {
    margin: 13px 0;
    height: 16px;
    background: url(~/static/img/about/ico.png) center no-repeat;
  }
  p::after {
    width: 152px;
    content: '';
    float: right;
    height: 1px;
    margin: -1px 0 0;
    background: url(~/static/img/about/line.png) left center no-repeat;
  }
  p::before {
    width: 152px;
    content: '';
    float: left;
    height: 1px;
    margin: 7px 0 0;
    background: url(~/static/img/about/line.png) left center no-repeat;
  }
}
.security-stype {
  clear: both;
  overflow: hidden;
  h3 {
    height: 25px;
    line-height: 25px;
    font-size: 18px;
    margin: 0 0 20px;
    overflow: hidden;
  }
  h3:before {
    content: '';
    width: 16px;
    height: 25px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    background: url('~/static/img/about/icons.png') -315px 1px no-repeat;
  }
  ul {
    margin: 0 0 0 -25px;
    overflow: hidden;
    li {
      float: left;
      margin-left: 25px;
      border: 1px solid #dddddd;
      background: #fff;
      text-align: center;
      width: 380px;
      // height: 248px;
      padding: 30px 25px 0;
      overflow: hidden;
    }
    li:before {
      content: '';
      display: inline-block;
      width: 110px;
      height: 92px;
      margin: 0 0 38px;
      background: url('~/static/img/about/icons.png') no-repeat;
      background-position: 0 -199px;
    }
    .item2::before {
      content: '';
      display: inline-block;
      width: 110px;
      height: 92px;
      margin: 0 0 38px;
      background: url('~/static/img/about/icons.png') no-repeat;
      background-position: -112px -200px;
    }
    .item3::before {
      content: '';
      display: inline-block;
      width: 110px;
      height: 92px;
      margin: 0 0 38px;
      background: url('~/static/img/about/icons.png') no-repeat;
      background-position: -220px -199px;
    }
    h4 {
      font-size: 18px;
      margin: 0 0 15px;
    }
    p {
      line-height: 24px;
      color: #666666;
      height: 48px;
      overflow: hidden;
    }
  }
}
.security-btns {
  clear: both;
  text-align: center;
  padding: 40px 0;
  overflow: hidden;
}
//5tian
.security-refund {
  padding: 95px 0 70px;
  overflow: hidden;
  min-width: 1220px;
}
.security-refund .security-list {
  margin-left: -40px;
  margin-right: -40px;
}
.security-refund .security-list li {
  width: 320px;
  float: left;
  text-align: center;
  height: 70px;
  &::before {
    content: '';
    width: 60px;
    height: 60px;
    display: inline-block;
    background: url('~/static/img/about/icons.png') no-repeat;
    background-position: 0 0;
  }
  p {
    margin: 13px 0;
    height: 16px;
    background: url(~/static/img/about/ico.png) center no-repeat;
  }
  p::after {
    width: 152px;
    content: '';
    float: right;
    height: 1px;
    margin: 7px 0 0;
    background: url(~/static/img/about/line.png) left center no-repeat;
  }
  p::before {
    width: 152px;
    content: '';
    float: left;
    height: 1px;
    margin: 7px 0 0;
    background: url(~/static/img/about/line.png) left center no-repeat;
  }
}
.security-btns .btn3 {
  background-color: #059fff;
  display: inline-block;
  font-size: 16px;
  width: 200px;
  height: 40px;
  line-height: 40px;
  margin: 100px 25px 0;
  color: #fff;
}
// 7x24
.security-support {
  padding: 95px 0 85px;
  background: #fafafa;
  overflow: hidden;
  min-width: 1220px;
}
.security-title a {
  color: #059fff;
  margin: 0 5px;
}
.security-title em {
  color: #059fff;
  margin: 0 5px;
}
.security-stype {
  clear: both;
  overflow: hidden;
  ul {
    margin: 0 0 0 -25px;
    overflow: hidden;
    li {
      float: left;
      margin-left: 25px;
      border: 1px solid #dddddd;
      background: #fff;
      text-align: center;
      width: 375px;
      padding: 30px 25px 0;
      overflow: hidden;
    }
    li:before {
      content: '';
      display: inline-block;
      width: 110px;
      height: 92px;
      margin: 0 0 38px;
      background: url('~/static/img/about/icons.png') no-repeat;
      background-position: 16px -295px;
    }
    .item2::before {
      content: '';
      display: inline-block;
      width: 110px;
      height: 92px;
      margin: 0 0 38px;
      background: url('~/static/img/about/icons.png') no-repeat;
      background-position: -92px -295px;
    }
    .item3::before {
      content: '';
      display: inline-block;
      width: 110px;
      height: 92px;
      margin: 0 0 38px;
      background: url('~/static/img/about/icons.png') no-repeat;
      background-position: -218px -295px;
    }
  }
}
//vip
.security-vip {
  padding: 95px 0 100px;
  overflow: hidden;
  min-width: 1220px;
}
.security-vip dl {
  border: 1px solid #ddd;
  // height: 88px;
  padding: 45px 60px;
  overflow: hidden;
  dt {
    width: 100px;
    height: 100px;
    float: left;
    margin-right: 60px;
    background: url('~/static/img/about/icons.png') 0 -392px no-repeat;
  }
  dd h4 {
    font-size: 18px;
    margin: 0 0 15px;
  }
  dd p {
    line-height: 24px;
    color: #666666;
  }
}
.security-vip ul {
  margin: 20px 0 0 -25px;
  overflow: hidden;
  li {
    float: left;
    margin-left: 25px;
    border: 1px solid #dddddd;
    background: #fff;
    text-align: center;
    width: 388px;
    overflow: hidden;
  }
  a:before {
    content: "";
    display: block;
    width: 90px;
    height: 90px;
    margin: 0 auto 35px;
    background: url('~/static/img/about/icons.png') no-repeat;
    background-position: -269px -36px;
}
  .item2 a:before{
    content: "";
    display: block;
    width: 90px;
    height: 90px;
    margin: 0 auto 35px;
    background: url('~/static/img/about/icons.png') no-repeat;
    background-position: -115px -399px;
  }
  .item3 a:before{
    content: "";
    display: block;
    width: 90px;
    height: 90px;
    margin: 0 auto 35px;
    background: url('~/static/img/about/icons.png') no-repeat;
    background-position: -232px -405px;
  }
  a {
    display: block;
    height: 230px;
    padding: 30px 0 0;
    font-size: 18px;
    overflow: hidden;
  }
  span {
    color: #05bcff;
    font-size: 20px;
    font-family: 'Arial';
  }
}
</style>
