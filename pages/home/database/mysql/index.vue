<template>
  <div>
    <div class="titleTop">
      <div class="mysalInfo">
        <h1>云数据库 MySQL</h1>
        <span>
          云数据库
          MySQL提供高性能、高可靠的数据库服务。拥有稳定、安全、弹性、经济的特点，默认支持标准的数据库协议，实现监控、故障自动切换、数据备份与恢复、实例管理等多种功能，广泛应用于各类应用场景。
        </span>
        <p>
          <router-link class="select" to='/pc/mysql/buy.html'>立即选购</router-link>
          <!-- <a href="">产品价格</a> -->
          <router-link to='/pc/mysql/price.html'>产品价格</router-link>
        </p>
        <p>
          <a>支持5天无理由退款</a>
        </p>
      </div>
    </div>
    <div>
      <!--四大标题-->
      <!-- <div class="fourModulesAll">
        <div class="fourModules">
          <div
            v-for="(item, i) in fourModules"
            :key="i"
            :class="i == 0 ? 'ativ' : ''"
            @click="clickTo(i)"
          >
            {{ item.name }}
          </div>
        </div>
      </div> -->
        <AnchorNav :nav-data="arrTitle" />
      <div id="Adv" class="Adv">
        <p>{{ fourModules[0].name }}</p>
        <div>
          <div v-for="(item, i) in fourModules[0].advList" :key="i">
            <img :src="item.img_url" alt="">
            <p>{{ item.title }}</p>
            <p>{{ item.info }}</p>
          </div>
        </div>
      </div>
      <div id="fun" class="fun">
        <p>{{ fourModules[1].name }}</p>
        <div>
          <div v-for="(item, i) in fourModules[1].funList" :key="i">
            <img :src="item.img_url" alt="">
            <div>
              <p>{{ item.title }}</p>
              <ul>
                <li v-for="(v, inx) in item.infoAll" :key="inx">
                  {{ v }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="scenes" class="scenes">
        <p>{{ fourModules[2].name }}</p>
        <div>
          <p>
            <!-- class="active" -->
            <span
              v-for="(v, i) in fourModules[2].scenesList"
              :key="i"
              :class="atv == i ? 'active' : ''"
              @click="atv = i"
            >{{ v.title }}</span>
          </p>
          <div>
            <img :src="fourModules[2].scenesList[atv].img_url" alt="">
            <div>
              <p>{{ fourModules[2].scenesList[atv].headName }}</p>
              <p>{{ fourModules[2].scenesList[atv].headInfo }}</p>
              <p>{{ fourModules[2].scenesList[atv].recom.title }}</p>
              <ul>
                <li
                  v-for="(v, i) in fourModules[2].scenesList[atv].recom
                    .recomAll"
                  :key="i"
                >
                  <img :src="v.img_url" alt="">
                  <span>{{ v.head }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="Assoc" class="Assoc">
        <p>{{ fourModules[3].name }}</p>
        <div>
          <div v-for="(v, i) in fourModules[3].assocList" :key="i">
            <img :src="v.img_url" alt="">
            <p>{{ v.title }}</p>
            <p>{{ v.info }}</p>
            <a href="">查看 &gt;</a>
          </div>
        </div>
      </div>
    </div>
    <FixedTopNav :navData = arrTitle></FixedTopNav>
  </div>
</template>

<script>
import AnchorNav from '@/components/AnchorNav/index'
import FixedTopNav from '@/components/FixedTopNav/index'
export default {
  data () {
    return {
      fourModules: [
        {
          name: '产品优势',
          advList: [
            {
              img_url:
                'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/20191223/product-adv-icon-1.png',
              title: '快速部署',
              info: '选择规格后下单，几分钟内即可创建MySQL实例。具备完善的监控、告警功能，可立即投入使用，立即创造价值。'
            },
            {
              img_url:
                'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/20191223/product-adv-icon-2.png',
              title: '完善保障',
              info: '拥有完善的数据自动备份机制，高可靠性让您可以放心将数据放在云端，无需担心数据丢失。'
            },
            {
              img_url:
                'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/20191223/product-adv-icon-3.png',
              title: '日常监控',
              info: '管理控制台中可查看数据库负载情况、IOPS情况、当前总连接数等十五项重要指标，可全方位监控数据库运行状况，迅速识别运行异常的数据库。'
            },
            {
              img_url:
                'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/20191223/product-adv-icon-4.png',
              title: '数据安全',
              info: '提供用户身份认证、审计日志等安全措施。内核线程优化特性确保业务性能稳定。'
            },
            {
              img_url:
                'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/20191223/product-adv-icon-5.png',
              title: '运维便捷',
              info: '监控、自动备份等功能降低用户数据库运维成本和服务器网络运维成本，让设备投入成本降到最低。'
            },
            {
              img_url:
                'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/20191223/product-adv-icon-6.png',
              title: '7*24小时服务',
              info: '您无需关心 MySQL 的安装、部署、版本更新及故障处理，客服团队7*24为您免除后顾之忧。'
            }
          ]
        },
        {
          name: '产品功能',
          funList: [
            {
              img_url:
                'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/20191223/product-function-icon-1.png',
              title: '灵活计费 可扩展强',
              infoAll: [
                '多版本选择：提供不同版选择，贴近业务所需。',
                '弹性拓展：可按需随时升级内存、磁盘空间等。',
                '高配尊享：最高支持8核CPU、32GB内存、500G存储空间。',
                '只读实例：横向扩展数据库读取能力，拥有独立的链接地址，可由应用端控制压力分配。'
              ]
            },
            {
              img_url:
                'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/20191223/product-function-icon-2.png',
              title: '自动备份 数据可靠',
              infoAll: [
                '双重监控：资源和引擎双重监控。',
                '数据还原：支持一键恢复备份数据至当前实例。',
                '自动备份：在指定的时间自动全量备份 MySQL 数据库并保留7天。'
              ]
            },
            {
              img_url:
                'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/20191223/product-function-icon-3.png',
              title: '数据加密 多重保障',
              infoAll: [
                '白名单组：支持白名单组添加，最大支持创建50个分组。',
                '安全加密：提供全方位的数据库安全支持。',
                '审计日志：记录所有访问源和访问行为信息。',
                '全面防护：公网地址自动开启DDoS防护，保持业务永续。'
              ]
            }
          ]
        },
        {
          name: '应用场景',
          scenesList: [
            {
              title: '网站应用',
              img_url:
                'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/scenebg1.jpg',
              headName: '轻松实现网站数据存储',
              headInfo:
                '基于浙江云盾云服务器，轻松实现网站搭建。并通过云数据库MySQL，实现网站访客记录，注册用户账号列表保存以及历史数据的存储。',
              recom: {
                title: '推荐搭配使用',
                recomAll: [
                  {
                    img_url:
                      'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/cdn_icon_small.png',
                    head: 'CDN'
                  },
                  {
                    img_url:
                      'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/store_icon_small.png',
                    head: '对象存储'
                  },
                  {
                    img_url:
                      'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/balance_icon_small.png',
                    head: '负载均衡'
                  },
                  {
                    img_url:
                      'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/server_icon_small.png',
                    head: '云服务器'
                  },
                  {
                    img_url:
                      'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/host_icon_small.png',
                    head: '云虚拟主机'
                  },
                  {
                    img_url:
                      'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/domain_icon_small.png',
                    head: '域名'
                  }
                ]
              }
            },
            {
              title: '电商应用',
              img_url:
                'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/scenebg2.jpg',
              headName: '高效数据存储',
              headInfo:
                '可为电子商务应用程序提供可靠且经济高效的数据存储，使应用在网络上快速安全地运行。',
              recom: {
                title: '推荐搭配使用',
                recomAll: [
                  {
                    img_url:
                      'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/cdn_icon_small.png',
                    head: 'CDN'
                  },
                  {
                    img_url:
                      'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/balance_icon_small.png',
                    head: '负载均衡'
                  },
                  {
                    img_url:
                      'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/server_icon_small.png',
                    head: '云服务器'
                  }
                ]
              }
            },
            {
              title: '游戏应用',
              img_url:
                'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/scenebg3.jpg',
              headName: '弹性扩容伸缩，高效快速回档',
              headInfo:
                '基于浙江云盾云服务器和云数据库MySQL，实现高可用的弹性扩容伸缩性能。借助云数据库 MySQL 任意时间点回档功能及支持批量操作的特性，随时随地恢复到任意时间点，为游戏回档提供支持。',
              recom: {
                title: '推荐搭配使用',
                recomAll: [
                  {
                    img_url:
                      'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/cdn_icon_small.png',
                    head: 'CDN'
                  },
                  {
                    img_url:
                      'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/balance_icon_small.png',
                    head: '负载均衡'
                  },
                  {
                    img_url:
                      'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/server_icon_small.png',
                    head: '云服务器'
                  }
                ]
              }
            },
            {
              title: '金融应用',
              img_url:
                'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/scenebg4.jpg',
              headName: '高效三中心部署架构',
              headInfo:
                '搭建事前、事中、事后三层数据安全防护网，使用双机热备、同城、异地三中心部署架构，充分满足金融级合规可靠性要求。',
              recom: {
                title: '推荐搭配使用',
                recomAll: [
                  {
                    img_url:
                      'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/cdn_icon_small.png',
                    head: 'CDN'
                  },
                  {
                    img_url:
                      'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/balance_icon_small.png',
                    head: '负载均衡'
                  },
                  {
                    img_url:
                      'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/server_icon_small.png',
                    head: '云服务器'
                  }
                ]
              }
            }
          ]
        },
        {
          name: '关联产品',
          assocList: [
            {
              img_url:
                'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/server_icon.png',
              title: '云服务器',
              info: '浙江云盾弹性云服务器采用纯SSD架构硬件设备，只需几分钟，便可轻松云端获取和启用，实现您的计算需求。'
            },
            {
              img_url:
                'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/load_icon.png',
              title: '负载均衡',
              info: '浙江云盾负载均衡，是对多台云服务器进行流量分发的负载均衡服务。'
            },
            {
              img_url:
                'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/cdn_icon.png',
              title: 'CDN加速',
              info: '浙江云盾 CDN加速是在传统CDN加速基础上实现的对数据网络加速进一步优化的融合管理服务。'
            },
            {
              img_url:
                'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/storage_icon.png',
              title: '对象存储',
              info: '浙江云盾海量存储系统是非结构化数据存储管理平台，支持中心和边缘存储。'
            }
          ]
        }
      ],
      atv: 0,
      arrTitle:[
        {
          id:'Adv',
          title:'产品优势'
        },
        {
          id:'fun',
          title:'产品功能'
        },
        {
          id:'scenes',
          title:'应用场景'
        },
        {
          id:'Assoc',
          title:'关联产品'
        },
      ]
    }
  },
  components:{
    FixedTopNav,
    AnchorNav
  },
  methods: {
    clickTo (i) {
      // console.log(i)
      document.getElementById(i).scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss" scoped>
.titleTop {
  position: relative;
  width: 100%;
  height: 502px;
  background-image: url('https://www.ydidc.com/template/Home/Zkeys/PC/Static//css/module/database/img/20191223/banner.png');
  background-size: 124% 100%;
  background-position: -159px 0;
  background-repeat: no-repeat;
}
.mysalInfo {
  color: white;
  padding-top: 132px;
  padding-left: 149.6px;
  h1 {
    font-size: 36px;
    color: rgb(255, 255, 255);
    font-weight: normal;
    margin-bottom: 30px;
  }
  span {
    display: block;
    width: 720px;
    height: 60px;
    line-height: 30px;
  }
  > p:nth-child(3) {
    margin: 30px 0 28px;
    //   color: rgb(253, 253, 253);
    > a {
      display: inline-block;
      border: 1px solid rgb(255, 255, 255);
      width: 120px;
      text-align: center;
      line-height: 35px;
      font-size: 14px;
      color: rgb(255, 255, 255);
      border-radius: 2px;
    }
    > a:nth-child(1) {
      margin-right: 20px;
    }
    > .select {
      color: rgb(255, 255, 255);
      background-color: rgb(5, 159, 255);
      border: 1px solid rgb(5, 159, 255);
    }
  }
  > p:nth-child(4) {
    font-size: 12px;
  }
}
.fourModulesAll {
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
}
.fourModules {
  display: flex;
  width: 1020px;
  height: 68px;
  background-color: #fff;
  margin: 0 auto;
  justify-content: space-around;
  > div {
    width: 76px;
    height: 66px;
    padding: 0 10px;
    line-height: 66px;
    text-align: center;
    font-size: 14px;
    color: #333;
  }
  > div:hover {
    border-bottom: 2px solid rgb(31, 184, 255);
  }
  .ativ {
    border-bottom: 2px solid rgb(31, 184, 255);
  }
}
.Adv {
  width: 1220px;
  height: 536px;
  padding-bottom: 30px;
  margin: 50px auto 0;
  > p {
    width: 100%;
    text-align: center;
    font-size: 26px;
    color: rgb(51, 51, 51);
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    > div {
      width: 240px;
      height: 180px;
      margin: 60px 80px 0;
      text-align: center;
      > p:nth-child(2) {
        margin: 30px auto 20px;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 16px;
        color: rgb(51, 51, 51);
      }
      > p:nth-child(3) {
        text-align: left;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        line-height: 24px;
        color: rgb(153, 153, 153);
      }
    }
  }
}
.fun {
  width: 100%;
  padding: 80px 0;
  margin-top: 95px;
  background-color: rgb(247, 248, 250);
  > p {
    text-align: center;
    font-size: 26px;
    color: rgb(51, 51, 51);
  }
  > div {
    border: solid 1px rgb(207, 214, 227);
    width: 1218px;
    margin: 0 auto;
    background-color: #fff;

    > div {
      width: 1218px;
      height: 209px;
      display: flex;
      border-bottom: solid 1px rgb(207, 214, 227);
      > img {
        width: 45px;
        height: 45px;
        margin: 45px 35px;
      }
      > div {
        padding: 18px 0 25px;
        > p {
          font-size: 18px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 46px;
          letter-spacing: 0px;
          font-weight: bold;
          color: rgb(0, 0, 0);
          margin: 0;
        }
        > ul > li:before {
          content: '';
          display: inline-block;
          width: 5px;
          height: 5px;
          background: rgb(0, 128, 255);
          border-radius: 50%;
          position: relative;
          left: -2px;
          top: -2px;
          margin-right: 10px;
        }
        > ul > li {
          font-size: 14px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 30px;
          color: rgb(102, 102, 102);
        }
      }
    }
    > div:nth-child(3) {
      border: 0;
    }
  }
}
.scenes {
  width: 100%;
  padding: 80px 0 50px;
  margin-bottom: 55px;
  > p {
    text-align: center;
    font-size: 26px;
    color: rgb(51, 51, 51);
  }
  > div {
    text-align: center;
    margin: 0 auto;
    width: 1220px;
    height: 613px;
    > p {
      width: 85%;
      display: flex;
      margin: 0 auto;
      justify-content: space-around;
      > span {
        display: block;
        // border-bottom: 1px solid #000;
        width: 160px;
        height: 48px;
        line-height: 48px;
        font-weight: normal;
        font-size: 16px;
        color: #000;
      }
      .active {
        border-bottom: 2px solid rgb(5, 159, 255);
        color: rgb(5, 159, 255);
      }
    }
    > div {
      width: 1200px;
      height: 613px;
      padding: 20px;
      border: solid 1px rgb(207, 214, 227);
      display: flex;
      > img {
        width: 770px;
        height: 573px;
      }
      > div {
        text-align: left;
        background-color: rgb(247, 248, 250);
        width: 371px;
        height: 573px;
        padding: 40px 23px 0 32px;
        > p:nth-child(1) {
          font-size: 18px;
          line-height: 30px;
          color: rgb(51, 51, 51);
          background: url(https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/circle-big.png)
            left no-repeat;
          padding-left: 16px;
          margin-left: -16px;
          margin-bottom: 0;
        }
        > p:nth-child(2) {
          font-size: 12px;
          line-height: 24px;
          color: rgb(102, 102, 102);
          margin-bottom: 40px;
        }
        > p:nth-child(3) {
          font-size: 14px;
          line-height: 30px;
          color: rgb(51, 51, 51);
          background: url(https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/circle-small.png)
            left no-repeat;
          padding-left: 16px;
          margin-left: -16px;
        }
        > ul {
          > li {
            display: flex;
            align-items: center;
            border-bottom: solid 1px rgb(221, 221, 221);
            > img {
              width: 15px;
              height: 15px;
            }
            > span {
              display: block;
              padding-left: 15px;
              font-size: 12px;
              color: rgb(51, 51, 51);
              line-height: 50px;
              width: 271px;
            }
          }
          > li:last-child {
            border: 0;
          }
        }
      }
    }
  }
}
.Assoc {
  width: 100%;
  padding: 60px 0;
  height: 522px;
  background-color: rgb(247, 248, 250);
  > p {
    font-size: 26px;
    width: 100%;
    text-align: center;
    color: rgb(51, 51, 51);
  }
  > div {
    width: 1220px;
    height: 340px;
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    > div {
      // box-sizing: border-box;
      width: 278px;
      text-align: center;
      padding: 50px 32px 0;
      background-color: #fff;
      border: solid 1px rgb(207, 214, 227);
      position: relative;
      a {
        position: absolute;
        bottom: 44px;
        left: 43%;
      }
      > p:nth-child(2) {
        font-size: 18px;
        color: rgb(51, 51, 51);
      }
      > p:nth-child(3) {
        font-size: 12px;
        color: rgb(102, 102, 102);
        line-height: 23px;
        margin-top: 10px;
        margin-bottom: 21px;
        height: 69px;
      }
    }
  }
}
</style>
