<template>
  <div>
    <div class="titleTop">
      <h1>云数据库</h1>
      <p>安全、稳定可靠、可弹性伸缩的高性能云数据库服务。</p>
    </div>
    <div class="buyInfo">
      <div class="basset">
        <div>基本设置</div>
        <div>
          <p>
            <span>地域：</span><span id="atv">中国内蒙</span><span>中国深圳</span>
          </p>
          <p class="notice">
            不同地域之间的内网不互通；建议选择与应用同一地域的云数据库产品，达到最佳访问速度。
          </p>
          <p>
            <span>数据库类型：</span><span id="atv">SQL Server</span><span>MySQL</span>
          </p>
          <p>
            <span>数据库版本：</span><span id="atv">2017 企业版</span><span>2016企业版</span><span>2012 WEB版</span><span>2012标准版</span><span>2012企业版</span>
          </p>
          <!-- <p>
            <span>数据库版本：</span><span id="atv">8.0</span><span>5.7</span><span>5.6</span>
          </p> -->
          <p class="notice">
            版本创建后不可变更，请按需选择所需版本。
          </p>
          <p><span>架构：</span><span id="atv">基础版</span></p>
          <p class="notice">
            存储与计算分离架构，单个计算节点，实现超高的性价比。
          </p>
        </div>
      </div>
      <div class="Insspe">
        <div>实例规格</div>
        <div>
          <p><span>存储类型</span><span>本地SSD盘</span></p>
          <p>
            本地SSD盘是指与数据库引擎位于同一节点的SSD盘。将数据存储于本地SSD盘，可以降低I/O延时。
          </p>
          <div>
            <span>实例规格</span>
            <select id="" name="">
              <option value="">
                1核2G
              </option>
              <option value="">
                2核4G
              </option>
              <option value="">
                4核8G
              </option>
              <option value="">
                4核16G
              </option>
              <option value="">
                8核16G
              </option>
            </select>
            <div>
              <span>存储空间</span>
              <div>100G 300G 500G</div>
              <div>
                <input id="" type="text" name="" value="5">
                <span>上</span>
                <span>下</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>网络</div>
        <div>
          <p><span>网络类型</span><span>经典网格</span></p>
        </div>
      </div>
      <div>
        <div>购买量</div>
        <div>
          <p>
            <span>购买时长：</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>1年</span><span>2年</span><span>3年</span>
          </p>
          <p><span>自动续费：</span><span>是</span><span>否</span></p>
          <p>
            <span>购买台数：</span><input id="" type="text" name="" value="1"><span>上</span><span>下</span>
          </p>
        </div>
      </div>
      <div class="price">
        <div>价格</div>
        <div>
          <div>
            <span>配置价格：</span>
            <span>￥64.35</span>
          </div>
          <p>
            中国内蒙 MySQL 8.0 1核2G(规格) 经典网络 5G(存储空间) 1个月 ×
            1台(购买量) <a href="">&gt;&gt;收起&lt;&lt;</a>
          </p>
          <div>
            <span>立即购买</span>
            <span>请先登录，此地域购买需要实名认证</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.titleTop {
  width: 100%;
  height: 360px;
  margin-top: 0;
  background-image: url(https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/buy_banner.jpg);
  color: rgb(255, 255, 255);
  padding-top: 150px;
  h1 {
    color: rgb(255, 255, 255);
    font-size: 36px;
    text-align: center;
    margin-bottom: 35px;
  }
  p {
    text-align: center;
  }
}

.price {
  width: 1220px;
  height: 155px;
  box-shadow: 0 -2px 12px 1px rgba(0, 0, 0, 0.11);
  border: solid 1px rgb(238, 238, 238);
  background-color: rgb(255, 255, 255);
  margin: 0 auto;
  position: sticky;
  bottom: 0;
  // padding: 25px 0;
  display: flex;
  margin-bottom: 56px;
  > div:nth-child(1) {
    width: 30px;
    display: flex;
    align-items: center;
    writing-mode: vertical-lr;
    padding-top: 62px;
    background-color: rgb(237, 241, 242);
    color: rgb(153, 153, 153);
  }
  > div:nth-child(2) {
    padding: 35px 0 10px;
    position: relative;
    width: 1188px;
    > div:nth-child(1) {
      > span {
        display: inline-block;
      }
      span:nth-child(1) {
        width: 110px;
        height: 30px;
        line-height: 30px;
        text-align: right;
        font-size: 14px;
        font-weight: normal;
        color: rgb(153, 153, 153);
      }
      span:nth-child(2) {
        color: rgb(255, 102, 0);
        font-weight: 700;
        font-size: 24px;
      }
    }
    > p {
      font-size: 12px;
      color: rgb(153, 153, 153);
      margin-top: 20px;
      margin-left: 110px;
    }
    > div:nth-child(3) {
      position: absolute;
      right: 20px;
      top: 40px;
      > span {
        display: block;
      }
      > span:nth-child(1) {
        position: relative;
        left: 100px;
        display: flex;
        align-items: center;
        width: 124px;
        height: 40px;
        justify-content: center;
        background-color: rgb(255, 102, 0);
        font-size: 16px;
        font-weight: 700;
        border-radius: 2px;
        color: rgb(255, 255, 255);
      }
      > span:nth-child(2) {
        margin-top: 10px;
        font-size: 14px;
        color: rgb(119, 119, 119);
      }
    }
  }
}
.price:hover {
  border-color: rgb(5, 159, 255);
  > div:nth-child(1) {
    background-color: rgb(5, 159, 255);
    color: rgb(255, 255, 255);
  }
}
.buyInfo {
  background-color: rgb(246, 247, 249);
  // margin-top: 20px;
  padding: 45px 0;
  .basset {
    width: 1220px;
    height: 376px;
    display: flex;
    margin: 0 auto 16px;
    background-color: #fff;
    border: 1px solid rgb(238, 238, 238);
    border-left: 0;
    > div:nth-child(1) {
      width: 30px;
      writing-mode: vertical-lr;
      height: 100%;
      background-color: rgb(235, 236, 238);
      color: rgb(119, 119, 119);
      text-align: center;
      padding-left: 5px;
    }
    > div:nth-child(2) {
      padding: 32px 0 16px;
      background-color: #fff;
      > p > span {
        display: inline-block;
      }
      > p > span:nth-child(1) {
        width: 107px;
        text-align: right;
        font-size: 14px;
        color: rgb(153, 153, 153);
      }
      > p > span:nth-child(1) ~ span {
        border: 1px solid rgb(221 221 221);
        background-color: rgb(255, 255, 255);
        width: 130px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        font-size: 14px;
        color: rgb(51 51 51);
        // margin: 8px 0 16px;
        margin-left: -1px;
      }
      > p #atv {
        background-color: rgb(5, 159, 255);
        color: rgb(255, 255, 255);
      }
      > .notice {
        font-size: 12px;
        color: rgb(153, 153, 153);
        margin-left: 107px;
      }
    }
  }
  .Insspe:hover {
    border-color: rgb(5, 159, 255);
    > div:nth-child(1) {
      background-color: rgb(5, 159, 255);
      color: rgb(255, 255, 255);
    }
  }
  .Insspe {
    width: 1220px;
    height: 285px;
    display: flex;
    margin: 0 auto;
    border: 1px solid rgb(238, 238, 238);
    border-left: 0;
    background-color: #fff;
    > div:nth-child(1) {
      width: 31px;
      writing-mode: vertical-lr;
      height: 287px;
      background-color: rgb(235, 236, 238);
      color: rgb(119, 119, 119);
      margin-top: -2px;
      text-align: center;
      padding-left: 5px;
      border: solid 1px rgb(238, 238, 238);
    }
  }
}
.basset:hover {
  border-color: rgb(5, 159, 255);
  > div:nth-child(1) {
    background-color: rgb(5, 159, 255);
    color: rgb(255, 255, 255);
  }
}
</style>
