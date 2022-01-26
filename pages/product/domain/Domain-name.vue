<template>
  <div class="border-box">
    <div class="domain-search-outer">
      <div class="domain-title">
        注册一个域名，实现更多可能
      </div>
      <form action="">
        <div class="domain-search-box clearfix">
          <input
            type="text"
            name="key"
            class="domain-search-input"
            placeholder="请输入您的域名"
            maxlength="63"
            autocomplete="off"
          >
          <div class="domain-drop-trigger">
            .com
          </div>
          <input
            id="domainIndexSubmit"
            type="button"
            value="查询域名"
            class="domain-search-button"
            autocomplete="off"
          >
          <div class="domain-search-list">
            <div class="checkbox-area clearfix" />
            <div class="operate-area" />
          </div>
        </div>
      </form>
      <div class="domain-help">
        <a href="">WHOIS查询</a>
        <a href="">域名续费</a>
        <a href="">域名解析</a>
        <a href="">价格总览</a>
      </div>
    </div>
    <!-- 推荐域名 -->
    <!-- 产品优势 -->
    <div class="domain-youshi-block domain-block">
      <div class="module-title auto">
        产品优势
      </div>
      <div class="auto clearfix youshi-outer">
        <div class="youshi-item youshi-1">
          <div class="youshi-title">
            快速
          </div>
          <div class="youshi-text">
            快速的解析响应速度，30ms内访问到服务器。
          </div>
        </div>
        <div class="youshi-item youshi-2">
          <div class="youshi-title">
            便捷
          </div>
          <div class="youshi-text">
            强大的域名自助管理平台，域名转入/转出自如，修改信息简单方便。
          </div>
        </div>
        <div class="youshi-item youshi-3">
          <div class="youshi-title">
            安全
          </div>
          <div class="youshi-text">
            免费域名隐私保护服务，防止注册人信息被盗号导致的骚扰和诈骗。
          </div>
        </div>
        <div class="youshi-item youshi-4">
          <div class="youshi-title">
            放心
          </div>
          <div class="youshi-text">
            7X24小时客户服务，随时解答您的问题，让您售后无忧。
          </div>
        </div>
      </div>
    </div>
    <!-- 选项卡 -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      curId: 0,
      items: [
        { item: '入门型' },
        { item: '进阶型' },
        { item: '专业型' },
        { item: '理想型' }
      ],
      contents: [
        { content: '1' },
        { content: '2' },
        { content: '3' },
        { content: '4' }
      ]
    }
  },
  methods: {
    tab (index) {
      this.curId = index
    }
  }
}
</script>

<style lang="scss" scoped>
// 头
.domain-search-outer {
  height: 460px;
  width: 100%;
  padding-top: 165px;
  background: #202124 url(~/static/img/domain/banner.png) no-repeat center;
}
.domain-title {
  text-align: center;
  color: #fff;
  font-size: 36px;
}
.domain-search-box {
  position: relative;
  margin: 0 auto;
  width: 724px;
  height: 54px;
  margin-top: 30px;
}
.clearfix:after,
.clearfix:before {
  display: table;
  line-height: 0;
  content: '';
}
.domain-search-input {
  display: block;
  border: none;
  width: 482px;
  height: 54px;
  background: #fff;
  padding-left: 30px;
  line-height: 54px;
  font-size: 18px;
  outline: none;
}
.domain-search-input,
.domain-drop-trigger,
.domain-search-button {
  float: left;
}
.domain-drop-trigger {
  position: relative;
  width: 119px;
  height: 54px;
  line-height: 54px;
  text-align: center;
  color: #333;
  background: #fff;
  font-weight: bold;
  cursor: pointer;
  font-size: 18px;
}
.domain-search-button {
  width: 123px;
  height: 54px;
  border: none;
  background-color: #0080ff;
  line-height: 54px;
  font-size: 18px;
  color: #fff;
  outline: none;
  cursor: pointer;
}
.domain-search-list {
  display: none;
  position: absolute;
  left: 0;
  right: 0;
  top: 54px;
  z-index: 10;
  padding: 20px 19px;
  border: 1px solid #c8c8c8;
  background: #f5f5f5;
  max-height: 400px;
  overflow-y: scroll;
}
.clearfix:after,
.clearfix:before {
  display: table;
  line-height: 0;
  content: '';
}
.domain-help {
  margin-top: 32px;
  text-align: center;
}
.domain-help a:first-child {
  border-left: none;
}
.domain-help a {
  display: inline-block;
  border-left: 1px solid #bbc1c5;
  padding: 0 18px;
  font-size: 13px;
  color: #fff;
}
/* 推荐域名 */
/* 产品优势 */
.domain-youshi-block {
  height: 492px;
  background-color: #f7f8fa;
}
.header .auto {
  overflow: visible;
}
.auto {
  width: 1200px;
  min-width: 1200px;
  max-width: 1200px;
  margin: 0 auto;
}
.module-title {
  font-family: MicrosoftYaHei;
  font-size: 26px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 26px;
  letter-spacing: 0px;
  color: #333333;
  padding: 80px 0 50px 0;
  text-align: center;
}
.youshi-item:first-child {
  margin-left: 0;
}
.youshi-item {
  float: left;
  width: 282px;
  height: 260px;
  padding: 113px 36px 0 36px;
  margin-left: 24px;
  background: #fff no-repeat center 37px;
  text-align: center;
  transition: all ease 0.3s;
  background-position-y: 48px;
}
.youshi-1 {
  background-image: url(~/static/img/domain/product-adv-1.png);
}
.youshi-2 {
  background-image: url(~/static/img/domain/product-adv-2.png);
}
.youshi-3 {
  background-image: url(~/static/img/domain/product-adv-3.png);
}
.youshi-4 {
  background-image: url(~/static/img/domain/product-adv-4.png);
}
.youshi-title {
  font-size: 18px;
  color: #333;
}
.youshi-text {
  margin-top: 26px;
  line-height: 1.8em;
  font-size: 12px;
  color: #999999;
  text-align: left;
}
// 选项卡
.tab {
  width: 400px;
  border: 1px solid #ccc;
  margin: 60px auto 0;
}
.tab-bar {
  width: 400px;
  background-color: #ccc;
}
.tab-bar a {
  float: left;
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  text-decoration: none;
  color: #000;
}
.tab-bar .active {
  background-color: #0099ff;
}
.tab-con div {
  text-align: left;
  height: 100px;
}
</style>
