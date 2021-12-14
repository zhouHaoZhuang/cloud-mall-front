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
              <div
                v-for="item in addressData"
                :key="item.regionId"
                :class="
                  selectAddressId === item.regionId
                    ? 'address-item active'
                    : 'address-item'
                "
                @click="addressChange(item)"
              >
                <div class="top-tit">
                  {{ item.localName }}
                </div>
                <div class="bot-info">
                  {{ item.localName }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 选型 -->
    <div class="choose-public-box container">
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
              <TabSelect
                v-model="form.ioOptimized"
                :list="[{ title: '免费开启', value: 'optimized' }]"
              />
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
              <TabSelect
                v-model="form.cpu"
                :list="cpuData"
                :on-change="handleCpuOrMemoryChange"
              />
            </div>
          </div>
        </div>
        <div class="choose-item">
          <div class="choose-label">
            内存：
          </div>
          <div class="choose-value">
            <div class="selection">
              <TabSelect
                v-model="form.memory"
                :list="memoryData"
                :on-change="handleCpuOrMemoryChange"
              />
            </div>
          </div>
        </div>
        <div class="choose-item">
          <div class="choose-label">
            SSD系统盘：
          </div>
          <div class="choose-value">
            <div class="selection">
              <TabSelect
                v-model="form.ssdSystem"
                :list="[{ title: '免费开启', value: true }]"
              />
              <div class="info-txt">
                系统盘免费赠送
                <span class="strong"> 40G </span>
              </div>
            </div>
          </div>
        </div>
        <div class="choose-item">
          <div class="choose-label">
            SSD数据盘：
          </div>
          <div class="choose-value">
            <div class="selection-ssd">
              <div
                v-for="(item, index) in form.dataDisk"
                :key="item.id"
                class="ssd-item"
              >
                <DragSlider
                  :value="item.size"
                  :number="item.number"
                  :min="40"
                  :max="item.number"
                  :on-change="val => changeSsdData(val, index)"
                />
                <NumberInput
                  v-model="item.size"
                  :on-change="handleChangeGetPrice"
                />
                <a-icon
                  v-if="!item.default"
                  class="close-icon"
                  type="close"
                  @click="delDisk(index)"
                />
              </div>
              <div class="ssd-item-add">
                <div class="add-box" @click="addDisk">
                  <div class="add-icon">
                    <a-icon type="plus" />
                  </div>
                  <div class="txt">
                    增加一块
                  </div>
                </div>
                <div v-if="form.dataDisk" class="info-txt">
                  还可以添加
                  <span class="strong"> {{ 4 - form.dataDisk.length }}块 </span>
                  磁盘
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="choose-item">
          <div class="choose-label">
            公网带宽：
          </div>
          <div class="choose-value">
            <div class="selection">
              <DragSlider
                :value="form.internetMaxBandwidthOut"
                company="M"
                :number="100"
                :min="1"
                :max="100"
                :on-change="changeBandWidth"
              />
              <NumberInput
                v-model="form.internetMaxBandwidthOut"
                company="M"
                :step="1"
                :min="1"
                :max="100"
                :on-change="handleChangeGetPrice"
              />
            </div>
          </div>
        </div>
        <!-- 暂时删除防御峰值 -->
        <!-- <div class="choose-item">
          <div class="choose-label">
            防御峰值：
          </div>
          <div class="choose-value">
            <div class="selection">
              <TabSelect
                v-model="form.defense"
                width="100"
                :list="defenseData"
              />
              <a-tooltip placement="top">
                <template slot="title">
                  <span>新加坡节点免费提供5G的恶意流量攻击防护峰值。</span>
                </template>
                <a-icon class="question-icon" type="question-circle" />
              </a-tooltip>
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <!-- 系统信息 -->
    <div class="choose-public-box container">
      <div class="choose-left">
        <span> 系统信息 </span>
      </div>
      <div class="choose-right">
        <div class="choose-item">
          <div class="choose-label">
            公共镜像：
          </div>
          <div class="choose-value">
            <div v-if="systemList" class="system">
              <a-select
                v-model="defaultSystem"
                allow-clear
                class="select1"
                placeholder="请选择系统类别"
                @change="handleSystemChange"
              >
                <a-select-option v-for="(val, key) in systemList" :key="key">
                  {{ key }}
                </a-select-option>
              </a-select>
              <a-select
                v-model="form.imageId"
                allow-clear
                class="select2"
                placeholder="请选择系统版本"
                @change="handleChangeGetPrice"
              >
                <a-select-option
                  v-for="item in systemEditionList"
                  :key="item.imageId"
                >
                  {{ item.OSName }}
                </a-select-option>
              </a-select>
              <a-tooltip placement="top">
                <template slot="title">
                  <span> Linux 操作系统数据盘挂载到 /data 目录 </span>
                </template>
                <a-icon class="question-icon" type="question-circle" />
              </a-tooltip>
            </div>
          </div>
        </div>
        <div class="choose-item">
          <div class="choose-label">
            登录方式：
          </div>
          <div class="choose-value">
            <div class="system">
              <TabSelect v-model="form.loginType" :list="loginTypeData" />
            </div>
          </div>
        </div>
        <div v-if="form.loginType === 0" class="choose-item">
          <div class="choose-label" />
          <div class="choose-value">
            <div class="system">
              <div class="txt-info">
                主机创建后，自动生成的密码将通过短信的形式发送给您。同时您也可登录浙江云盾控制台重置主机密码
              </div>
            </div>
          </div>
        </div>
        <div v-if="form.loginType === 1" class="choose-item">
          <div class="choose-label">
            登录密码：
          </div>
          <div class="choose-value">
            <div class="system">
              <a-input v-model="form.password" class="password-input" />
              <a-tooltip placement="top">
                <template slot="title">
                  <div>
                    1、密码长度8-30位，由英文字母、数字和特殊符号组成，且必须包含字母及数字
                  </div>
                  <div>
                    2、特殊符号支持如下_ ( ) ` ~ ! @ # $ % ^ * - + = { } [ ] : ;
                    , . ? /
                  </div>
                </template>
                <a-icon class="question-icon" type="question-circle" />
              </a-tooltip>
            </div>
          </div>
        </div>
        <div v-if="form.loginType === 1" class="choose-item">
          <div class="choose-label">
            确认密码：
          </div>
          <div class="choose-value">
            <div class="system">
              <a-input v-model="form.okPassword" class="password-input" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 购买量 -->
    <div class="choose-public-box container">
      <div class="choose-left">
        <span> 购买量 </span>
      </div>
      <div class="choose-right">
        <div class="choose-item">
          <div class="choose-label">
            购买时长：
          </div>
          <div class="choose-value">
            <div class="count">
              <TabSelect
                v-model="form.period"
                :list="buyTimes"
                width="80"
                :on-change="handleChangeGetPrice"
              />
            </div>
          </div>
        </div>
        <div class="choose-item">
          <div class="choose-label">
            自动续费：
          </div>
          <div class="choose-value">
            <div class="count">
              <TabSelect v-model="form.isAutoRenew" :list="renewData" />
            </div>
          </div>
        </div>
        <div class="choose-item">
          <div class="choose-label">
            购买数量：
          </div>
          <div class="choose-value">
            <div class="count">
              <NumberInput
                v-model="form.amount"
                company="台"
                :step="1"
                :min="1"
                :max="1000"
                :on-change="handleChangeGetPrice"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 价格 -->
    <div class="choose-public-box price-box container">
      <div class="choose-left">
        <span> 价格 </span>
      </div>
      <div class="choose-right">
        <div class="choose-item">
          <div class="choose-label">
            配置价格：
          </div>
          <div class="choose-value">
            <div class="price">
              <div class="price-txt">
                ￥{{ form.tradePrice }}
              </div>
            </div>
          </div>
        </div>
        <div class="choose-item" style="margin-top: 10px">
          <div class="choose-label" />
          <div class="choose-value">
            <div class="price">
              <div class="left-box">
                <div v-if="isShowCloudSelect" class="cloud-select-info">
                  {{ addressName }}
                  {{ form.cpu }}核(CPU) {{ form.memory }}G(内存)
                  {{ form.internetMaxBandwidthOut }}M(带宽) {{ diskNum }}G(磁盘)
                  <!-- {{ form.cpu }}G(防御) -->
                  {{ form.period }}个月 x {{ form.amount }}台(购买量)
                </div>
                <div
                  v-if="isShowCloudSelect"
                  class="off"
                  @click="changeIsShowCloudSelect"
                  v-text="'>>收起<<'"
                />
                <div
                  v-else
                  class="open"
                  @click="changeIsShowCloudSelect"
                  v-text="'>>展开配置<<'"
                />
              </div>
              <div v-if="!isLogin" class="right-txt">
                请先登录，此地域购买需要实名认证
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 购买按钮 -->
      <div class="buy-btn" @click="handleBuyCloud">
        立即购买
      </div>
    </div>
  </div>
</template>

<script>
// import lodash from 'lodash'
import { mapState } from 'vuex'
import DragSlider from '@/components/DragSlider/index'
import TabSelect from '@/components/TabSelect/index'
import NumberInput from '@/components/NumberInput/index'
import { setCpuOrDiskData } from '@/utils/index'
export default {
  components: {
    DragSlider,
    TabSelect,
    NumberInput
  },
  // nuxt推荐请求方式
  async asyncData ({ app }) {
    // 获取地域列表
    const data = await app.$api.cloud.addressList()
    // console.log('地域列表', data)
    const selectAddressId =
      Array.isArray(data.data) && data.data.length > 1
        ? data.data[1].regionId
        : ''
    if (selectAddressId) {
      // 获取cpu+内存数据
      const cpuAndDisk = await app.$api.cloud.getAddressCpuAndDisk({
        regionId: selectAddressId
      })
      const cpuData = [...setCpuOrDiskData(cpuAndDisk.data?.cpuCoreCount, '核')]
      const memoryData = [...setCpuOrDiskData(cpuAndDisk.data?.memorySize, 'G')]
      // 获取对应的实例和实例属性，属性值---目前页面没有设计选择，默认拿第一个
      const regionList = await app.$api.cloud.getRegionDetail({
        regionId: selectAddressId,
        cpuCoreCount: cpuData[0]?.value,
        memorySize: memoryData[0]?.value
      })
      const regionDetail =
        regionList.data && regionList.data[0] ? regionList.data[0] : {}
      // 获取镜像数据
      const systemList = await app.$api.cloud.systemList({
        regionId: selectAddressId
      })
      // 设置默认选中的系统镜像
      const newSystemList = systemList.data.imageMap
      const defaultSystem = Object.keys(newSystemList)[0]
      const systemEditionList = newSystemList[defaultSystem]
      const imageId =
        Array.isArray(newSystemList[defaultSystem]) &&
        newSystemList[defaultSystem].length > 0
          ? newSystemList[defaultSystem][0].imageId
          : ''
      // 生成询价+购买参数
      const form = {
        instanceType: regionDetail.instanceTypeId, // 实例规格ID
        regionId: selectAddressId, // 地域id
        ioOptimized: 'optimized', // I/O优化
        cpu: cpuData[0]?.value, // CPU
        memory: memoryData[0]?.value, // 内存
        ssdSystem: true, // 系统盘-免费赠送
        // localStorageAmount: regionDetail.localStorageAmount, // 数据盘可添加的总数-默认写死4块
        // 数据盘
        dataDisk: [
          {
            id: -1,
            // number: 32768,
            number: 500,
            default: true,
            category: 'cloud_essd',
            performanceLevel: 'PL0',
            size: 40
          }
        ],
        internetMaxBandwidthOut: 1, // 公网带宽
        // defense: 20, // 防御峰值
        osName: '', // 系统名称
        imageId, // 镜像id
        loginType: 1, // 登录方式
        password: '',
        okPassword: '',
        period: 1, // 购买时长
        priceUnit: 'Month', // 购买时长单位
        isAutoRenew: 0, // 自动续费
        amount: 1, // 购买数量
        tradePrice: '0.00' // 服务器金额
      }
      // 查询服务器价格
      const priceData = await app.$api.cloud.getCloudPrice(form)

      return {
        addressData: data.data,
        selectAddressId,
        cpuData,
        memoryData,
        systemList: newSystemList,
        systemEditionList,
        defaultSystem,
        form: {
          ...form,
          ...priceData.data
        }
      }
    }
  },
  data () {
    return {
      setCpuOrDiskData,
      // 地域数据
      addressData: [],
      selectAddressId: '',
      // 查询价格参数
      form: {},
      // 是否显示已选择配置
      isShowCloudSelect: true,
      // 渲染cpu tab选择数据
      cpuData: [],
      // 内存数据
      memoryData: [],
      // 防御峰值
      defenseData: [
        {
          title: '20G',
          value: 20
        },
        {
          title: '30G',
          value: 30
        },
        {
          title: '50G',
          value: 50
        },
        {
          title: '100G',
          value: 100
        },
        {
          title: '200G',
          value: 200
        },
        {
          title: '300G',
          value: 300
        }
      ],
      // 系统镜像
      defaultSystem: [],
      systemList: [], // 系统
      systemEditionList: [], // 版本
      // 登录方式
      loginTypeData: [
        {
          title: '设置密码',
          value: 1
        },
        {
          title: '暂不设置',
          value: 0
        }
      ],
      // 购买时长
      buyTimes: [
        {
          title: '1个月',
          value: 1
        },
        {
          title: '2个月',
          value: 2
        },
        {
          title: '3个月',
          value: 3
        },
        {
          title: '4个月',
          value: 4
        },
        {
          title: '5个月',
          value: 5
        },
        {
          title: '6个月',
          value: 6
        },
        {
          title: '7个月',
          value: 7
        },
        {
          title: '8个月',
          value: 8
        },
        {
          title: '9个月',
          value: 9
        },
        {
          title: '1年',
          value: 12
        },
        {
          title: '2年',
          value: 24
        },
        {
          title: '3年',
          value: 36
        }
      ],
      // 自动续费
      renewData: [
        {
          title: '是',
          value: 1
        },
        {
          title: '否',
          value: 0
        }
      ],
      // 保存上一次选择的cpu
      preCpu: '',
      // 保存上一次选择的内存
      preMemory: ''
    }
  },
  // 读数据 返回vuex
  fetch ({ store }) {
    // 异步业务逻辑 读取服务端的数据提交给vuex
  },
  computed: {
    // 返回选择的那个地域名称
    addressName () {
      if (this.addressData.length > 0) {
        const newAddress = this.addressData.find(
          item => item.regionId === this.selectAddressId
        )
        return newAddress.localName
      } else {
        return ''
      }
    },
    // 返回磁盘大小
    diskNum () {
      if (this.form.dataDisk && Array.isArray(this.form.dataDisk)) {
        let sum = 0
        this.form.dataDisk.forEach((item) => {
          sum += item.size
        })
        return sum
      } else {
        return 0
      }
    },
    ...mapState({
      isLogin: state => state.user.isLogin
    })
  },
  methods: {
    // 处理询价或者购买时，购买时长的字段
    setBuyTimeData (time) {
      if (time <= 9) {
        return {
          period: time,
          priceUnit: 'Month'
        }
      } else {
        return {
          period: time / 12,
          priceUnit: 'Year'
        }
      }
    },
    // 查询服务器价格
    getCloudPrice () {
      this.form.tradePrice = '价格计算中...'
      this.$api.cloud
        .getCloudPrice({
          ...this.form,
          // 处理时间，判断是年还是月
          ...this.setBuyTimeData(this.form.period)
        })
        .then((res) => {
          console.log('查询价格', res)
          this.form = { ...this.form, ...res.data }
        })
    },
    // 地域切换
    addressChange (item) {
      this.selectAddressId = item.regionId
      // 生成询价+购买参数
      const newForm = {
        ...this.form,
        cpu: 1,
        memory: 1,
        period: 1,
        regionId: item.regionId,
        dataDisk: [
          {
            id: -1,
            number: 500,
            default: true,
            category: 'cloud_essd',
            performanceLevel: 'PL0',
            size: 40
          }
        ],
        internetMaxBandwidthOut: 1,
        tradePrice: '0.00' // 服务器金额
      }
      this.form = { ...newForm }
      this.getCpuAndDisk()
    },
    // 获取地域对应的cpu和内存信息
    getCpuAndDisk () {
      this.$api.cloud
        .getAddressCpuAndDisk({ regionId: this.selectAddressId })
        .then((res) => {
          this.cpuData = [...setCpuOrDiskData(res.data?.cpuCoreCount, '核')]
          this.memoryData = [...setCpuOrDiskData(res.data?.memorySize, 'G')]
          this.form.cpu = this.cpuData[0]?.value
          this.form.memory = this.memoryData[0]?.value
          this.getRegionData()
        })
    },
    // 获取对应的实例和实例属性，属性值---目前页面没有设计选择，默认拿第一个
    getRegionData (isReGetPrice) {
      this.$api.cloud
        .getRegionDetail({
          regionId: this.selectAddressId,
          cpuCoreCount: this.form.cpu,
          memorySize: this.form.memory
        })
        .then((res) => {
          if (res.data && res.data.length > 0) {
            this.form.instanceType = res.data[0].instanceTypeId
            this.getCloudPrice()
          } else {
            this.$message.warning('该地域/内存/CPU下没有实例')
            if (isReGetPrice) {
              this.form.cpu = this.preCpu
              this.form.memory = this.preMemory
              this.getCloudPrice()
            }
          }
        })
    },
    // 获取对应地域的系统镜像
    getSystemData () {
      this.$api.cloud
        .systemList({ regionId: this.selectAddressId })
        .then((res) => {
          this.systemList = res.data.imageMap
        })
    },
    // 修改ssd数据盘
    changeSsdData (val, index) {
      this.form.dataDisk.splice(index, 1, {
        ...this.form.dataDisk[index],
        size: val
      })
      this.handleChangeGetPrice()
    },
    // 修改公网带宽
    changeBandWidth (val) {
      this.form.internetMaxBandwidthOut = val
      this.handleChangeGetPrice()
    },
    // 修改是否展示已选择配置
    changeIsShowCloudSelect () {
      this.isShowCloudSelect = !this.isShowCloudSelect
    },
    // 添加一块ssd数据盘
    addDisk () {
      if (this.form.dataDisk.length === 4) {
        return
      }
      this.form.dataDisk.push({
        ...this.form.dataDisk[0],
        id: this.form.dataDisk[0].id - this.form.dataDisk.length,
        size: 40,
        default: false
      })
      this.handleChangeGetPrice()
    },
    // 删除一块ssd数据盘
    delDisk (index) {
      this.form.dataDisk.splice(index, 1)
      this.handleChangeGetPrice()
    },
    // cpu+内存 发生改变，需要先请求实例列表，再去请求价格
    handleCpuOrMemoryChange () {
      // 暂存当前选择的cpu和内存，防止没有实例价格出现问题
      // const newForm = lodash.cloneDeep(this.form)
      this.preCpu = '1'
      this.preMemory = '1.0'
      this.getRegionData(true)
    },
    // cpu+内存+数据盘+带宽+镜像+购买时长+数量发生改变，再次进行询价
    handleChangeGetPrice () {
      this.getCloudPrice()
    },
    // 系统镜像-系统change
    handleSystemChange (val) {
      this.systemEditionList = this.systemList[val].map((item) => {
        return { ...item }
      })
      this.form.osName = val
      this.form.imageId = this.systemEditionList[0].imageId
      this.handleChangeGetPrice()
    },
    // 立即购买
    handleBuyCloud () {
      this.$api.cloud
        .createCloudOrder({
          ...this.form,
          // 处理时间，判断是年还是月
          ...this.setBuyTimeData(this.form.period)
        })
        .then((res) => {})
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
          line-height: 33px;
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
              cursor: pointer;
              .top-tit,
              .bot-info {
                text-overflow: ellipsis;
                word-break: keep-all;
                white-space: nowrap;
                overflow: hidden;
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
                border-top: 1px solid #ddd;
                border-bottom: 1px solid #ddd;
              }
              &:nth-child(8n),
              &:last-child {
                border-right: 1px solid #ddd;
              }
              &.active {
                background-color: #059fff;
                border: 1px solid #1a92dd;
                color: #fff;
                .bot-info {
                  color: #059fff;
                  border-bottom: 1px solid #1a92dd;
                }
              }
            }
          }
          // 选型
          .selection {
            display: flex;
          }
          .info-txt {
            color: #999;
            line-height: 34px;
            margin-left: 10px;
            .strong {
              font-weight: 700;
              color: #f60;
            }
          }
          .selection-ssd {
            .ssd-item {
              display: flex;
              margin-bottom: 20px;
              .close-icon {
                margin-top: 20px;
                margin-left: 15px;
                cursor: pointer;
              }
            }
            .ssd-item-add {
              display: flex;
              .add-box {
                display: flex;
                align-items: center;
                cursor: pointer;
                .add-icon {
                  width: 30px;
                  height: 30px;
                  line-height: 30px;
                  text-align: center;
                  background: #059fff;
                  color: #fff;
                  font-size: 18px;
                  font-weight: 700;
                }
                .txt {
                  margin-right: 25px;
                  margin-left: 20px;
                  color: #f60;
                }
              }
            }
          }
          .question-icon {
            font-size: 18px;
            color: #059fff;
            line-height: 39px;
            margin-left: 10px;
          }
          // 系统
          .system {
            .select1,
            .select2 {
              height: 35px;
              border-radius: 2px !important;
              .ant-select-selection {
                border-color: #1a92dd;
              }
            }
            .select1 {
              width: 180px;
            }
            .select2 {
              width: 280px;
            }
            .password-input {
              width: 280px;
              height: 35px;
              border-radius: 2px;
              &:hover,
              &:focus {
                border: 1px solid #d9d9d9;
                box-shadow: none;
              }
            }
          }
          // 数量
          // .count {
          // }
          // 价格
          .price {
            display: flex;
            justify-content: space-between;
            .price-txt {
              line-height: 35px;
              font-size: 24px;
              font-weight: 700;
              color: #f60;
            }
            .left-box {
              display: flex;
              align-items: center;
              .cloud-select-info {
                font-size: 12px;
                color: #999;
              }
              .off,
              .open {
                color: #0088ff;
                cursor: pointer;
              }
              .off {
                margin-left: 20px;
              }
            }
            .right-txt {
              margin-right: 10px;
            }
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
  .price-box {
    .buy-btn {
      position: absolute;
      top: 35px;
      right: 20px;
      padding: 0 30px;
      height: 40px;
      line-height: 40px;
      border: none;
      border-radius: 2px;
      background-color: #ff6600;
      font-size: 16px;
      color: #fff;
      text-align: center;
      cursor: pointer;
      font-weight: 700;
    }
  }
}
</style>
