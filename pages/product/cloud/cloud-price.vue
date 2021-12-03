<template>
  <div>
    <div class="titleTop">
      <h1>弹性云服务器</h1>
      <p>稳定、安全、弹性、高性能的云端计算服务，实时满足您的多样性业务需求</p>
    </div>
    <div class="buyInfo">
      <div class="basset">
        <div>地域</div>
        <div>
          <p>
            <span>地域：</span>
            <span id="atv">中国大连</span>
            <span>中国沈阳</span>
            <span>中国广州</span>
            <span>中国内蒙</span>
            <span>中国北京</span>
            <span>深圳</span>
            <span>香港三区</span>
            <span>泰国曼谷</span>
          </p>
          <p>
            <span />
            <span>印度·孟买</span>
            <span>韩国·首尔</span>
            <span>新加坡</span>
            <span>日本·东京</span>
            <span>德国·法兰克福</span>
            <span>俄罗斯·莫斯科</span>
            <span>美国·弗吉尼亚</span>
            <span>美国·硅谷</span>
          </p>
          <p>
            <span />
            <span>加拿大·多伦多</span>
            <span>香港高防</span>
          </p>
        </div>
      </div>
      <div class="Insspe">
        <div>选型</div>
        <div>
          <p>
            <span class="atv">I/O优化：</span><span class="blue">免费开启</span><span>免费赠送</span><span>I/O优化</span>
          </p>
          <p>
            <span class="atv">CPU：</span><span class="blue">1核</span><span>2核</span><span>4核</span><span>8核</span><span>16核</span>
          </p>
          <p>
            <span class="atv">内存：</span><span class="blue">1G</span><span>2G</span><span>4G</span><span>8G</span>
          </p>
          <p>
            <span class="atv">SSD系统盘：</span><span class="blue">免费开启</span><span>免费赠送</span><span>I/O优化</span>
          </p>
          <p>
            <span class="atv">SSD数据盘：</span>
            <drag :data="{ scale: [200, 600, 1000, 'G'], valfun: val }" />
          </p>
          <p>
            <span class="atv" />
            <drag :data="{ scale: [200, 600, 1000, 'G'], valfun: val }" />
          </p>
          <p>
            <span class="atv">公网带宽：</span>
            <drag :data="{ scale: [30, 75, 300, 'M'], valfun: val }" />
          </p>
          <p>
            <span class="atv">防御峰值：</span><span class="blue">20G</span><span>30G</span><span>50G</span><span>100G</span><span>200G</span><span>300G</span>
          </p>
        </div>
      </div>
    </div>
    <div class="net">
      <div>系统信息</div>
      <div>
        <p>
          <span class="atv">公共镜像：</span><span><input type="text"><input type="text"></span>
        </p>
        <p>
          <span class="atv">登录方式：</span><span>设置密码</span><span>暂不设置</span>
        </p>
        <p>
          <span class="atv" />主机创建后，自动生成的密码将通过短信的形式发送给您。同时您也可登录浙江云盾控制台重置主机密码
        </p>
      </div>
    </div>
    <div class="purc">
      <div>购买量</div>
      <div>
        <p>
          <span>购买时长：</span><span>1个月</span><span>2个月</span><span>3个月</span><span>4个月</span><span>5个月</span><span>6个月</span><span>7个月</span><span>8个月</span><span>9个月</span><span>1年</span><span>2年</span><span>3年</span>
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
</template>

<script>
import drag from '@/components/drag/index'
export default {
  components: {
    drag
  },
  data () {
    return {
      space: 0
    }
  },
  methods: {
    val (a) {
      console.log(a)
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
  // background-color: rgb(246, 247, 249);
  // margin-top: 20px;
  padding: 45px 0;
  .basset {
    width: 1220px;
    height: 260px;
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
    // height: 518px;
    display: flex;
    margin: 0 auto;
    border: 1px solid rgb(238, 238, 238);
    border-left: 0;
    background-color: #fff;
    > div:nth-child(1) {
      width: 31px;
      writing-mode: vertical-lr;
      //   height: 287px;
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
        // padding: 0 112px 0 106px;
        margin-bottom: 16px;
        font-size: 12px;
        color: rgb(153, 153, 153);
        > span:nth-child(3) {
          border: 1px solid #dddddd;
          background-color: white;
          width: 130px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          font-size: 14px;
          color: #333333;
          margin-left: -1px;
        }
        > span:nth-child(4) {
          border: 1px solid #dddddd;
          background-color: white;
          width: 130px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          font-size: 14px;
          color: #333333;
          margin-left: -1px;
        }
        > span:nth-child(5) {
          border: 1px solid #dddddd;
          background-color: white;
          width: 130px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          font-size: 14px;
          color: #333333;
          margin-left: -1px;
        }
        > span:nth-child(6) {
          border: 1px solid #dddddd;
          background-color: white;
          width: 130px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          font-size: 14px;
          color: #333333;
          margin-left: -1px;
        }
      }
      > p:nth-child(3) {
        // padding: 0 112px 0 106px;
        margin-bottom: 16px;
        font-size: 12px;
        color: rgb(153, 153, 153);
        > span:nth-child(3) {
          border: 1px solid #dddddd;
          background-color: white;
          width: 130px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          font-size: 14px;
          color: #333333;
          margin-left: -1px;
        }
        > span:nth-child(4) {
          border: 1px solid #dddddd;
          background-color: white;
          width: 130px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          font-size: 14px;
          color: #333333;
          margin-left: -1px;
        }
        > span:nth-child(5) {
          border: 1px solid #dddddd;
          background-color: white;
          width: 130px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          font-size: 14px;
          color: #333333;
          margin-left: -1px;
        }
      }
      > p:nth-child(5) {
        display: flex;
      }
      > p:nth-child(6) {
        display: flex;
      }
      > p:nth-child(7) {
        display: flex;
      }
      > p:nth-child(8) {
        > span:nth-child(3) {
          border: 1px solid #dddddd;
          background-color: white;
          width: 130px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          font-size: 14px;
          color: #333333;
          margin-left: -1px;
        }
        > span:nth-child(4) {
          border: 1px solid #dddddd;
          background-color: white;
          width: 130px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          font-size: 14px;
          color: #333333;
          margin-left: -1px;
        }
        > span:nth-child(5) {
          border: 1px solid #dddddd;
          background-color: white;
          width: 130px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          font-size: 14px;
          color: #333333;
          margin-left: -1px;
        }
        > span:nth-child(6) {
          border: 1px solid #dddddd;
          background-color: white;
          width: 130px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          font-size: 14px;
          color: #333333;
          margin-left: -1px;
        }
        > span:nth-child(7) {
          border: 1px solid #dddddd;
          background-color: white;
          width: 130px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          font-size: 14px;
          color: #333333;
          margin-left: -1px;
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
}
.net {
  width: 1220px;
  height: 175px;
  display: flex;
  margin: -27px auto 0;
  border: 1px solid rgb(238, 238, 238);
  border-left: 0;
  background-color: #fff;
  > div:nth-child(1) {
    width: 31px;
    writing-mode: vertical-lr;
    // height: 108px;
    background-color: rgb(235, 236, 238);
    color: rgb(119, 119, 119);
    margin-top: -2px;
    text-align: center;
    padding-left: 5px;
    border: solid 1px rgb(238, 238, 238);
  }
  > div:nth-child(2) {
    margin-top: 30px;
    > p {
      display: flex;
      // height: 100%;
      align-items: center;
      > span:nth-child(2) {
        > input:nth-child(1) {
          border: 1px solid rgb(5, 159, 255);
        }
        > input:nth-child(2) {
          margin-left: 10px;
          border: 1px solid rgb(5, 159, 255);
        }
      }
    }
    > p:nth-child(2) {
      > span:nth-child(2) {
        border: 1px solid #dddddd;
        background-color: white;
        width: 130px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        font-size: 14px;
        color: #333333;
        margin-left: -1px;
      }
      > span:nth-child(3) {
        background-color: rgb(5, 159, 255);
        border: 1px solid #dddddd;
        // background-color: white;
        width: 130px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        font-size: 14px;
        color: white;
        margin-left: -1px;
      }
    }
  }
  > div:nth-child(3) {
    display: flex;
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
.basset:hover {
  border-color: rgb(5, 159, 255);
  > div:nth-child(1) {
    background-color: rgb(5, 159, 255);
    color: rgb(255, 255, 255);
  }
}
</style>
