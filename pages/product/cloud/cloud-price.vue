<template>
  <div class="cloud-price-container">
    <!-- 轮播图 -->
    <div class="banner-wrap">
      <h1>弹性云服务器</h1>
      <p>稳定、安全、弹性、高性能的云端计算服务，实时满足您的多样性业务需求</p>
    </div>
    <!-- 主体选购 -->
    <!-- 地域 -->
    <div class="choose-public-box container">
      <div class="choose-left">
        <span> 地域 </span>
      </div>
      <div class="choose-right">
        <div class="choose-item">
          <div class="choose-label" style="width: 110px">
            地域：
          </div>
          <div class="choose-value">
            <div class="address">
              <div class="address-item active">
                <div class="top-tit">
                  中国香港
                </div>
                <div class="bot-info">
                  中国香港
                </div>
              </div>
              <div class="address-item">
                <div class="top-tit">
                  中国香港
                </div>
                <div class="bot-info">
                  中国香港
                </div>
              </div>
              <div class="address-item">
                <div class="top-tit">
                  中国香港
                </div>
                <div class="bot-info">
                  中国香港
                </div>
              </div>
              <div class="address-item">
                <div class="top-tit">
                  中国香港
                </div>
                <div class="bot-info">
                  中国香港
                </div>
              </div>
              <div class="address-item">
                <div class="top-tit">
                  中国香港
                </div>
                <div class="bot-info">
                  中国香港
                </div>
              </div>
              <div class="address-item">
                <div class="top-tit">
                  中国香港
                </div>
                <div class="bot-info">
                  中国香港
                </div>
              </div>
              <div class="address-item">
                <div class="top-tit">
                  中国香港
                </div>
                <div class="bot-info">
                  中国香港
                </div>
              </div>
              <div class="address-item">
                <div class="top-tit">
                  中国香港
                </div>
                <div class="bot-info">
                  中国香港
                </div>
              </div>
              <div class="address-item">
                <div class="top-tit">
                  中国香港
                </div>
                <div class="bot-info">
                  中国香港
                </div>
              </div>
              <div class="address-item">
                <div class="top-tit">
                  中国香港
                </div>
                <div class="bot-info">
                  中国香港
                </div>
              </div>
              <div class="address-item">
                <div class="top-tit">
                  中国香港
                </div>
                <div class="bot-info">
                  中国香港
                </div>
              </div>
              <div class="address-item">
                <div class="top-tit">
                  中国香港
                </div>
                <div class="bot-info">
                  中国香港
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 选型 -->
    <div class="choose-public-box selection container">
      <div class="choose-left">
        <span> 选型 </span>
      </div>
      <div class="choose-right">
        <div class="choose-item">
          <div class="choose-label">
            I/O优化：
          </div>
          <div class="choose-value">
            <div class="selection">
              <TabSelect v-model="form.ioFlag" />
              <div class="info-txt">
                免费赠送
                <span class="strong"> I/O优化 </span>
              </div>
            </div>
          </div>
        </div>
        <div class="choose-item">
          <div class="choose-label">
            CPU：
          </div>
          <div class="choose-value">
            <div class="selection">
              <TabSelect v-model="form.cpu" :list="cpuData" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 系统信息 -->
    <div class="choose-public-box system container">
      <div class="choose-left">
        <span> 系统信息 </span>
      </div>
      <div class="choose-right">
        <div class="choose-item">
          <div class="choose-label">
            公共镜像：
          </div>
          <div class="choose-value">
            123
          </div>
        </div>
      </div>
    </div>
    <!-- 购买量 -->
    <div class="choose-public-box count container">
      <div class="choose-left">
        <span> 购买量 </span>
      </div>
      <div class="choose-right">
        <div class="choose-item">
          <div class="choose-label">
            购买时长：
          </div>
          <div class="choose-value">
            123
          </div>
        </div>
      </div>
    </div>
    <!-- 价格 -->
    <div class="choose-public-box price container">
      <div class="choose-left">
        <span> 价格 </span>
      </div>
      <div class="choose-right">
        <div class="choose-item">
          <div class="choose-label">
            配置价格：
          </div>
          <div class="choose-value">
            123
          </div>
        </div>
      </div>
    </div>
    <DragSlider
      :value="value"
      :number="1000"
      :min="10"
      :max="1000"
      :on-change="changeProgress"
    />
    <DragSlider
      :value="value1"
      :number="300"
      :min="10"
      :max="300"
      :on-change="changeProgress1"
    />
  </div>
</template>

<script>
import DragSlider from '@/components/DragSlider/index'
import TabSelect from '@/components/TabSelect/index'
export default {
  components: {
    DragSlider,
    TabSelect
  },
  data () {
    return {
      space: 0,
      value: 250,
      value1: 75,
      // 查询价格参数
      form: {
        ioFlag: true, // I/O优化
        cpu: 1 // I/O优化
      },
      // 渲染cpu tab选择数据
      cpuData: [
        {
          title: '1核',
          value: 1
        },
        {
          title: '2核',
          value: 2
        },
        {
          title: '4核',
          value: 4
        },
        {
          title: '8核',
          value: 8
        },
        {
          title: '16核',
          value: 16
        }
      ]
    }
  },
  methods: {
    val (a) {
      console.log(a)
    },
    // 修改滑块进度
    changeProgress (val) {
      this.value = val
      console.log('进度', val)
    },
    // 修改滑块进度
    changeProgress1 (val) {
      this.value1 = val
      console.log('进度1', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.cloud-price-container {
  // 轮播图
  .banner-wrap {
    width: 100%;
    height: 360px;
    margin-top: 0;
    background-image: url(https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/database/img/buy_banner.jpg);
    color: rgb(255, 255, 255);
    padding-top: 150px;
    margin-bottom: 50px;
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
  // 选购主体
  .choose-public-box {
    min-height: 155px;
    display: flex;
    margin-bottom: 16px;
    background-color: #fff;
    border: 1px solid rgb(238, 238, 238);
    border-left: 0;
    font-size: 14px;
    color: #999;
    position: relative;
    .choose-left {
      width: 30px;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      background-color: rgb(235, 236, 238);
      span {
        width: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .choose-right {
      padding: 35px 0;
      flex: 1;
      margin-left: 30px;
      .choose-item {
        display: flex;
        margin-bottom: 20px;
        .choose-label {
          width: 140px;
          text-align: right;
          margin-right: 15px;
        }
        .choose-value {
          flex: 1;
          // 地域
          .address {
            display: flex;
            flex-wrap: wrap;
            .address-item {
              width: 129px;
              height: 65px;
              margin-left: -1 px;
              border: 1px solid #ddd;
              border-right: none;
              background-color: #f6f6f6;
              text-align: center;
              color: #4c4c4c;
              margin-bottom: 10px;
              .top-tit,
              .bot-info {
                text-overflow: ellipsis;
                word-break: keep-all;
                white-space: nowrap;
              }
              .top-tit {
                height: 35px;
                line-height: 35px;
              }
              .bot-info {
                height: 30px;
                line-height: 28px;
                font-size: 12px;
                background-color: #fff;
                color: #999;
                overflow: hidden;
                border-top: 1px solid #ddd;
                border-bottom: 1px solid #ddd;
              }
              &:nth-child(8n),
              &:last-child {
                border-right: 1px solid #ddd;
              }
              &.active {
                border-color: #1a92dd;
                background-color: #059fff;
                color: #fff;
                .bot-info {
                  color: #059fff;
                }
              }
            }
          }
          // 选型
          .selection {
            .info-txt {
              color: #999;
              .strong {
                font-weight: 700;
                color: #f60;
              }
            }
          }
          // 系统
          .system {
          }
          // 数量
          .count {
          }
          // 价格
          .price {
          }
        }
      }
    }
    &:hover {
      border-color: rgb(5, 159, 255);
      .choose-left {
        background-color: rgb(5, 159, 255);
        color: #fff;
      }
    }
  }
}
</style>
