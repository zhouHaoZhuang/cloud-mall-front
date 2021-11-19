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
          <p>
            <span class="atv">存储类型：</span><span class="blue">本地SSD盘</span>
          </p>
          <p>
            本地SSD盘是指与数据库引擎位于同一节点的SSD盘。将数据存储于本地SSD盘，可以降低I/O延时。
          </p>
          <div>
            <span class="atv">实例规格：</span>
            <select id="" name="">
              <option value="1核2G">
                1核2G
              </option>
              <option value="2核4G">
                2核4G
              </option>
              <option value="4核8G">
                4核8G
              </option>
              <option value="4核16G">
                4核16G
              </option>
              <option value="8核16G">
                8核16G
              </option>
            </select>
          </div>
          <div>
            <span class="atv">存储空间：</span>
            <div id="10" @click="clickprog">
              <div id="100" ref="prog1">
                100G
              </div>
              <div id="300" ref="prog3">
                300G
              </div>
              <div id="500" ref="prog5">
                500G
              </div>
              <div ref="prog" class="prog" />
            </div>
            &nbsp;
            <div>
              <input id="" v-model="space" type="text" name="">
              <span>上</span>
              <span>下</span>
            </div>
          </div>
        </div>
      </div>
      <div class="net">
        <div>网络</div>
        <div>
          <p><span class="atv">网络类型：</span><span>经典网格</span></p>
        </div>
      </div>
      <div class="purc">
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
export default {
  data () {
    return {
      space: 15
    }
  },
  methods: {
    clickprog (e) {
      if (e.path[0].id === '10') {
        return
      }
      // console.log(e.target, '///////')
      // 100G宽度304px  300G宽度158px  500G宽度157px
      // console.log(e.path[0].offsetWidth, '----')
      let newwidth = e.offsetX
      let space = 0
      if (e.path[0].id === '100') {
        space = (newwidth / e.path[0].offsetWidth) * 100
        // console.log(space, '----')
      } else if (e.path[0].id === '300') {
        newwidth = e.offsetX + 304
        space = (e.offsetX / e.path[0].offsetWidth) * 200 + 100
        // console.log(space, '----')
      } else if (e.path[0].id === '500') {
        newwidth = e.offsetX + 304 + 158
        space = (e.offsetX / e.path[0].offsetWidth) * 200 + 300
        // console.log(space, e.offsetX, e.path[0].offsetWidth, '----')
      } else if (e.path[0].id === '0') {
        // console.log(e.path)
      } else {
        // console.log(e.path[0])
      }
      if (space % 5) {
        // console.log(space, '有余数')
        space = space - (space % 5) + 5
        // console.log(space, '****')
      } else {
        // console.log(e.offsetX, e.path[0].offsetWidth, space, '没有余数')
      }
      this.space = space.toFixed(0)
      this.$refs.prog1.style.color = 'rgb(153, 153, 153)'
      this.$refs.prog3.style.color = 'rgb(153, 153, 153)'
      this.$refs.prog5.style.color = 'rgb(153, 153, 153)'
      if (this.space > 90) {
        this.$refs.prog1.style.color = '#fff'
      }
      if (this.space > 260) {
        this.$refs.prog3.style.color = '#fff'
      }
      if (this.space > 455) {
        this.$refs.prog5.style.color = '#fff'
      }
      const wih = this.$refs.prog
      wih.style.width = newwidth + 'px'
      // console.log(wih.offsetWidth)
    }
  }
}
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
  z-index: 110;
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
    > div:nth-child(2) {
      padding: 32px 0 16px;
      margin-bottom: 16px;
      > p:nth-child(2) {
        padding: 0 112px 0 106px;
        margin-bottom: 16px;
        font-size: 12px;
        color: rgb(153, 153, 153);
      }
      > div:nth-child(3) {
        select {
          margin-left: -5px;
          width: 180px;
          height: 40px;
          padding: 10px;
          color: rgb(0 170 255);
          border: solid 1px rgb(0 170 255);
        }
      }
      > div:nth-child(4) {
        display: flex;
        margin-top: 50px;
        margin-left: -5px;
        > div:nth-child(2) {
          display: flex;
          width: 620px;
          position: relative;
          border: solid 1px rgb(238, 238, 238);
          > div {
            position: relative;
            text-align: right;
            padding-right: 10px;
            font-size: 12px;
            color: rgb(153 153 153);
            z-index: 100;
          }
          // 进度条
          .prog {
            width: 50px;
            height: 25px;
            background-color: rgb(66, 164, 255);
            position: absolute;
            z-index: 80;
            top: 0;
            left: 0;
            transition: width 0.1s;
          }
          > div:nth-child(1) {
            flex: 2;
            border-right: 1px solid rgb(238, 238, 238);
          }
          > div:nth-child(2) {
            flex: 1;
            border-right: 1px solid rgb(238, 238, 238);
          }
          > div:nth-child(3) {
            flex: 1;
          }
        }
      }
    }
    span {
      display: inline-block;
    }
    .atv {
      width: 107px;
      text-align: right;
      font-size: 14px;
      color: rgb(153, 153, 153);
    }
    .blue {
      border: 1px solid rgb(221 221 221);
      width: 130px;
      height: 35px;
      line-height: 35px;
      text-align: center;
      font-size: 14px;
      color: rgb(51 51 51);
      // margin: 8px 0 16px;
      margin-left: -1px;
      background-color: rgb(5, 159, 255);
      color: rgb(255, 255, 255);
    }
  }
  .net:hover {
    border-color: rgb(5, 159, 255);
    > div:nth-child(1) {
      background-color: rgb(5, 159, 255);
      color: rgb(255, 255, 255);
    }
  }
  .net {
    width: 1220px;
    height: 106px;
    display: flex;
    margin: 16px auto 0;
    border: 1px solid rgb(238, 238, 238);
    border-left: 0;
    background-color: #fff;
    > div:nth-child(1) {
      width: 31px;
      writing-mode: vertical-lr;
      height: 108px;
      background-color: rgb(235, 236, 238);
      color: rgb(119, 119, 119);
      margin-top: -2px;
      text-align: center;
      padding-left: 5px;
      border: solid 1px rgb(238, 238, 238);
    }
    > div:nth-child(2) {
      > p {
        display: flex;
        height: 100%;
        align-items: center;
        > span:nth-child(2) {
          border: 1px solid rgb(221 221 221);
          width: 130px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          font-size: 14px;
          color: rgb(51 51 51);
          // margin: 8px 0 16px;
          margin-left: -1px;
          background-color: rgb(5, 159, 255);
          color: rgb(255, 255, 255);
        }
      }
    }
    .atv {
      width: 107px;
      text-align: right;
      font-size: 14px;
      color: rgb(153, 153, 153);
    }
  }
  .purc:hover {
    border-color: rgb(5, 159, 255);
    > div:nth-child(1) {
      background-color: rgb(5, 159, 255);
      color: rgb(255, 255, 255);
    }
  }
  .purc {
    width: 1220px;
    height: 226px;
    display: flex;
    margin: 16px auto;
    border: 1px solid rgb(238, 238, 238);
    border-left: 0;
    background-color: #fff;
    > div:nth-child(1) {
      width: 31px;
      writing-mode: vertical-lr;
      height: 228px;
      background-color: rgb(235, 236, 238);
      color: rgb(119, 119, 119);
      margin-top: -2px;
      text-align: center;
      padding-left: 5px;
      border: solid 1px rgb(238, 238, 238);
    }
    > div:nth-child(2) {
      padding: 32px 0 16px;
      > p > span {
        display: inline-block;
      }
      > p:nth-child(1) {
        span {
          line-height: 35px;
          text-align: center;
          width: 85px;
          height: 35px;
          border: solid 1px rgb(221 221 221);
          margin-left: -1px;
          font-size: 14px;
          color: rgb(85, 85, 85);
        }
      }
      > p > span:nth-child(1) {
        width: 107px;
        text-align: right;
        font-size: 14px;
        color: rgb(153, 153, 153);
        border: 0;
      }
      > p:nth-child(2) > span:nth-child(1) ~ span {
        width: 129px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        border: solid 1px rgb(221 221 221);
      }
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
