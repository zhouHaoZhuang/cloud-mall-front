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
            分类：
          </div>
          <div class="choose-value">
            <div class="selection">
              <TabSelect
                v-model="typeId"
                :list="typeList"
                @change="typeChange"
              />
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
                @change="handleCpuOrMemoryChange('cpu')"
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
                @change="handleCpuOrMemoryChange('memory')"
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
                bg-color="#FCAC33"
              />
              <div class="info-txt">
                系统盘免费赠送
                <span class="strong"> 40G </span>
                <img
                  class="info-icon"
                  src="../../../static/img/cloud/gift.png"
                >
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
                  :min="20"
                  :max="item.number"
                  :on-change="val => changeSsdData(val, index)"
                />
                <NumberInput
                  v-model="item.size"
                  :min="20"
                  :on-change="handleChangeGetPrice"
                />
                <a-icon
                  class="close-icon"
                  type="close"
                  @click="delDisk(index)"
                />
              </div>
              <div class="ssd-item-add" @click="addDisk">
                <a-icon class="icon" type="plus" />
                <div v-if="form.dataDisk" class="txt">
                  还可以添加
                  <span class="strong">
                    {{ 16 - form.dataDisk.length }}块
                  </span>
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
                  <a-tooltip placement="top">
                    <template slot="title">
                      <span> {{ key }}</span>
                    </template>
                    <span> {{ key }}</span>
                  </a-tooltip>
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
                实例创建后通过控制台“重置实例密码”操作完成设置
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
              <a-input-password
                v-model="form.password"
                v-password-input
                :max-length="30"
                class="password-input"
                @change="inputChangeOrBlur('password')"
                @blur="inputChangeOrBlur('password')"
              />
              <a-tooltip placement="top">
                <template slot="title">
                  <div>
                    1、8-30个字符，必须同时包含下面四项中的三项：大写字母、小写字母、数字、和特殊字符
                  </div>
                  <div>
                    2、（仅支持下列特殊字符： ( ) ` ~ ! @ # $ % ^ {{ '&' }} * -
                    _ + = | { } [ ] : ; ' >
                    <span v-text="'<'" />
                    , . ? / ）。
                  </div>
                </template>
                <a-icon class="question-icon" type="question-circle" />
              </a-tooltip>
            </div>
            <div v-if="passwordStatus === 2" class="password-info">
              请输入密码
            </div>
            <div v-if="passwordStatus === 3" class="password-info">
              密码格式不正确
            </div>
          </div>
        </div>
        <div v-if="form.loginType === 1" class="choose-item">
          <div class="choose-label">
            确认密码：
          </div>
          <div class="choose-value">
            <div class="system">
              <a-input-password
                v-model="form.okPassword"
                v-password-input
                :max-length="30"
                class="password-input"
                @change="inputChangeOrBlur('okPassword')"
                @blur="inputChangeOrBlur('okPassword')"
              />
            </div>
            <div v-if="okPasswordStatus === 2" class="password-info">
              请输入确认密码
            </div>
            <div v-if="okPasswordStatus === 3" class="password-info">
              两次密码不一致
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
                @change="handleChangeGetPrice"
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
              <TabSelect v-model="form.autoRenew" :list="renewData" />
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
                  <div class="label">
                    已选择的规格：
                  </div>
                  <span>{{ addressName }}</span>
                  <span>{{ form.cpu }}核(CPU)</span>
                  <span>{{ form.memory }}G(内存)</span>
                  <span>{{ form.internetMaxBandwidthOut }}M(带宽)</span>
                  <span>{{ diskNum }}G(磁盘)</span>
                  <!-- <span>{{ form.cpu }}G(防御)</span> -->
                  <span>{{ form.period }}个月</span>
                  <span>x {{ form.amount }}台(购买量)</span>
                </div>
                <!-- 收起/展开配置 -->
                <!-- <div
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
                /> -->
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
import {
  setCpuOrDiskData,
  jumpCloudAdminDetail,
  jumpCloudAdminRealName
} from '@/utils/index'
export default {
  components: {
    DragSlider,
    TabSelect,
    NumberInput
  },
  // nuxt推荐请求方式
  async asyncData ({ app, $axios, params, query }) {
    console.log('进入请求', params, query)
    // 获取产品code
    const productData = await app.$api.cloud.productList()
    const productCode =
      productData.data &&
      Array.isArray(productData.data.list) &&
      productData.data.list.length > 0
        ? productData.data.list[0].productCode
        : ''
    // 获取地域列表
    const data = await app.$api.cloud.addressList()
    console.log('地域列表', data)
    const selectAddressId =
      Array.isArray(data.data) && data.data.length > 1
        ? data.data[1].regionId
        : ''
    // console.log('地域id', selectAddressId)
    // 获取规格簇列表
    const typeData = await app.$api.cloud.typeList()
    const typeId =
      Array.isArray(typeData.data) && typeData.data.length > 0
        ? typeData.data[0].typeFamily
        : ''
    const typeList = typeId
      ? typeData.data.map((ele) => {
        return {
          ...ele,
          title: ele.description,
          value: ele.typeFamily
        }
      })
      : []
    console.log('获取规格簇列表', typeData, typeId, typeList)
    if (selectAddressId && typeId) {
      // 获取cpu数据
      const cpu = await app.$api.cloud.getAddressCpu({
        regionId: selectAddressId,
        specFamily: typeId
      })
      const cpuData = [...setCpuOrDiskData(cpu.data, '核')]
      // console.log('cpu数据', cpu, cpuData)
      // 生成获取内存/询价/购买时，cpu和内存的参数/可能会别的页面跳转
      const newCpu = query.cpu ? query.cpu * 1 : cpuData[0]?.value
      // 获取内存数据
      const disk = await app.$api.cloud.getAddressDisk({
        regionId: selectAddressId,
        specFamily: typeId,
        cpuCoreCount: newCpu
      })
      const memoryData = [...setCpuOrDiskData(disk.data, 'G')]
      // console.log('memory数据', disk, memoryData)
      // 生成获取内存/询价/购买时，cpu和内存的参数/可能会别的页面跳转
      const newMemory = query.memory
        ? query.memory * 1
        : memoryData[0]?.value * 1
      // console.log('cpu+内存', cpuData, memoryData)
      // 获取对应的实例和实例属性，属性值---目前页面没有设计选择，默认拿第一个
      const regionList = await app.$api.cloud.getRegionDetail({
        regionId: selectAddressId,
        specFamily: typeId,
        cpuCoreCount: newCpu,
        memorySize: newMemory
      })
      const regionDetail =
        regionList.data && regionList.data[0] ? regionList.data[0] : {}
      // console.log('实例数据', regionList, regionDetail)
      // 获取镜像数据
      const systemList = await app.$api.cloud.systemList({
        regionId: selectAddressId,
        instanceType: regionDetail.instanceTypeId
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
        instanceTypeFamily: typeId, // 分类id
        ioOptimized: 'optimized', // I/O优化
        cpu: newCpu, // CPU
        memory: newMemory, // 内存
        ssdSystem: true, // 系统盘-免费赠送
        // localStorageAmount: regionDetail.localStorageAmount, // 数据盘可添加的总数-默认写死4块
        // 数据盘
        dataDisk: [],
        internetMaxBandwidthOut: 1, // 公网带宽
        // defense: 20, // 防御峰值
        osName: '', // 系统名称
        imageId, // 镜像id
        loginType: 0, // 登录方式
        password: '',
        okPassword: '',
        period: 1, // 购买时长
        priceUnit: 'Month', // 购买时长单位
        autoRenew: 0, // 自动续费
        amount: 1, // 购买数量
        tradePrice: '0.00', // 服务器金额
        // 产品编码-从导航云服务点击进来，每个产品都有自己的编码-暂时写死
        productCode
      }
      // 查询服务器价格
      const priceData = await app.$api.cloud.getCloudPrice(form)
      return {
        addressData: data.data,
        selectAddressId,
        typeId,
        typeList,
        cpuData,
        memoryData,
        systemList: newSystemList,
        systemEditionList,
        defaultSystem,
        form: {
          ...form,
          ...priceData.data
        },
        // 单个实例
        regionDetail
      }
    } else {
      return {}
    }
  },
  data () {
    return {
      setCpuOrDiskData,
      // 地域数据
      addressData: [],
      selectAddressId: '',
      // 规格簇数据
      typeList: [],
      typeId: '',
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
      // 单个实例
      regionDetail: {},
      passwordStatus: 1,
      okPasswordStatus: 1,
      // 新的密码校验
      newReg:
        /(?!^\d{8-30}$)(?!^[a-zA-Z]{8,30}$)(?!^[0-9a-zA-Z]{8,30}$)^[0-9a-zA-Z()`~!@#$%^&*-_+=|{}[:;'><,.?/]{8,30}$/
    }
  },
  computed: {
    ...mapState({
      token: state => state.user.token
    }),
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
          // 产品编码-从导航云服务点击进来，每个产品都有自己的编码-暂时写死
          productCode: this.form.productCode,
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
      this.typeId = this.typeList.length > 0 ? this.typeList[0].value : ''
      // 生成询价+购买参数
      const newForm = {
        ...this.form,
        cpu: 1,
        memory: 1,
        period: 1,
        regionId: item.regionId,
        dataDisk: [],
        internetMaxBandwidthOut: 1,
        tradePrice: '价格计算中...' // 服务器金额
      }
      this.form = { ...newForm }
      this.getCpu()
    },
    // 分类切换
    typeChange () {
      this.getCpu()
    },
    // 获取地域对应的cpu信息
    getCpu () {
      this.$api.cloud
        .getAddressCpu({
          regionId: this.selectAddressId,
          specFamily: this.typeId
        })
        .then((res) => {
          this.cpuData = [...setCpuOrDiskData(res.data, '核')]
          if (this.cpuData.length > 0) {
            this.form.cpu = this.cpuData[0]?.value
            this.getDisk()
          } else {
            this.$message.warning('该地域/内存/CPU下没有实例')
            this.form.tradePrice = '---'
            this.memoryData = []
          }
        })
    },
    // 获取地域对应的内存信息
    getDisk (cpu) {
      this.$api.cloud
        .getAddressDisk({
          regionId: this.selectAddressId,
          specFamily: this.typeId,
          cpuCoreCount: cpu || this.cpuData[0].value
        })
        .then((res) => {
          this.memoryData = [...setCpuOrDiskData(res.data, 'G')]
          this.form.memory = this.memoryData[0]?.value
          this.getRegionData()
        })
    },
    // 获取对应的实例和实例属性，属性值---目前页面没有设计选择，默认拿第一个
    getRegionData () {
      this.$api.cloud
        .getRegionDetail({
          regionId: this.selectAddressId,
          specFamily: this.typeId,
          cpuCoreCount: this.form.cpu,
          memorySize: this.form.memory
        })
        .then((res) => {
          if (res.data && res.data.length > 0) {
            this.form.instanceType = res.data[0].instanceTypeId
            this.getSystemData()
          } else {
            this.$message.warning('该地域/内存/CPU下没有实例')
            this.form.tradePrice = '---'
          }
        })
    },
    // 获取对应地域的系统镜像
    getSystemData () {
      this.$api.cloud
        .systemList({
          regionId: this.selectAddressId,
          instanceType: this.form.instanceType
        })
        .then((res) => {
          this.systemList = res.data.imageMap
          const newSystemList = res.data.imageMap
          this.defaultSystem = Object.keys(newSystemList)[0]
          this.systemEditionList = newSystemList[this.defaultSystem]
          this.form.imageId =
            Array.isArray(newSystemList[this.defaultSystem]) &&
            newSystemList[this.defaultSystem].length > 0
              ? newSystemList[this.defaultSystem][0].imageId
              : ''
          this.getCloudPrice()
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
      if (this.form.dataDisk.length === 16) {
        return
      }
      const newId =
        this.form.dataDisk.length === 0
          ? -1
          : this.form.dataDisk[this.form.dataDisk.length - 1].id - 1
      this.form.dataDisk.push({
        id: newId,
        number: 500,
        category: 'cloud_ssd',
        size: 20
      })
      this.handleChangeGetPrice()
    },
    // 删除一块ssd数据盘
    delDisk (index) {
      this.form.dataDisk.splice(index, 1)
      this.handleChangeGetPrice()
    },
    // cpu+内存 发生改变，需要先请求实例列表，再去请求价格
    handleCpuOrMemoryChange (type) {
      if (type === 'cpu') {
        this.getDisk(this.form.cpu)
      } else {
        this.getRegionData()
      }
    },
    // cpu+内存+数据盘+带宽+镜像+购买时长+数量发生改变，再次进行询价
    handleChangeGetPrice () {
      this.getCloudPrice()
    },
    validatePass () {
      const value = this.form.password
      if (!value) {
        this.passwordStatus = 2
      } else {
        if (!this.newReg.exec(value)) {
          this.passwordStatus = 3
        } else {
          this.passwordStatus = 1
        }
      }
    },
    validatePass2 () {
      const value = this.form.okPassword
      if (!value) {
        this.okPasswordStatus = 2
      } else if (value !== this.form.password) {
        this.okPasswordStatus = 3
      } else {
        this.okPasswordStatus = 1
      }
    },
    // 密码输入框+确认密码输入框change+blur事件
    inputChangeOrBlur (type) {
      if (type === 'password') {
        this.validatePass()
      } else {
        this.validatePass2()
      }
    },
    // 系统镜像-系统change
    handleSystemChange (val) {
      this.systemEditionList = this.systemList[val].map((item) => {
        return { ...item }
      })
      this.form.osName = this.systemEditionList[0].OSName
      this.form.imageId = this.systemEditionList[0].imageId
      this.handleChangeGetPrice()
    },
    // 立即购买
    handleBuyCloud () {
      // 判断登录方式是否是设置密码
      if (this.form.loginType === 1 && !this.form.password) {
        this.$message.warning('请输入登录密码')
        return
      }
      // 密码格式是否正确
      if (this.form.password && !this.pwdReg.test(this.form.password)) {
        this.$message.warning('密码格式不正确')
        return
      }
      // 两次密码是否一致
      if (this.form.password && this.form.password !== this.form.okPassword) {
        this.$message.warning('两次登录密码不一致')
        return
      }
      // 判断登录状态
      if (!this.isLogin) {
        this.$message.warning('请先登录')
        return
      }
      // 处理时间，判断是年还是月
      const time = this.setBuyTimeData(this.form.period)
      // 获取镜像名称
      const osName = this.systemEditionList.find(
        ele => ele.imageId === this.form.imageId
      ).OSName
      // 处理购买时后端所需要数据
      const newForm = {
        // 兼容后期可能一次性购买多个
        orderLineList: [
          {
            purchaseDuration: time.period,
            durationUnit: time.priceUnit,
            itemCode: this.regionDetail.instanceTypeId,
            quantity: this.form.amount
          }
        ],
        // 产品编码-从导航云服务点击进来，每个产品都有自己的编码-暂时写死
        productCode: this.form.productCode,
        // 询价时所用参数
        productConfig: {
          ...this.form,
          instanceTypeFamily: this.typeId,
          osName,
          // 处理时间，判断是年还是月
          ...time
        },
        // 交易类型
        tradeType: 1
      }
      this.$api.cloud.createCloudOrder(newForm).then((res) => {
        if (res.code === '000000') {
          this.$message.success('生成订单成功')
          jumpCloudAdminDetail(res.data.orderNo, this.token)
        } else {
          this.$message.warning(res.msg)
        }
        if (res.code === '1313009') {
          jumpCloudAdminRealName(this.token)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.cloud-price-container {
  .password-info {
    color: red;
    margin-top: 6px;
  }
  // 轮播图
  .banner-wrap {
    width: 100%;
    height: 480px;
    margin-top: 0;
    background: url('https://ydidc-test.oss-cn-shanghai.aliyuncs.com/idc-mall/cloud/bg.png')
      no-repeat center;
    background-size: cover;
    color: rgb(255, 255, 255);
    padding-top: 150px;
    margin-bottom: 50px;
    h1 {
      color: #fff;
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
              height: 70px;
              border-right: none;
              background: #fff;
              text-align: center;
              color: #4c4c4c;
              margin-bottom: 20px;
              margin-right: 20px;
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
                background: #f5f7fa;
              }
              .bot-info {
                margin-top: 5px;
                height: 35px;
                line-height: 35px;
                background: #f5f7fa;
                color: #999;
              }
              &.active {
                color: #fff;
                .top-tit,
                .bot-info {
                  background: #1d7aec;
                  color: #fff;
                }
              }
            }
          }
          // 选型
          .selection {
            display: flex;
          }
          .info-txt {
            color: #ff9900;
            line-height: 34px;
            margin-left: 10px;
            display: flex;
            align-items: center;
            .strong {
              font-weight: 700;
            }
            .info-icon {
              margin-left: 6px;
              margin-top: -3px;
            }
          }
          .selection-ssd {
            .ssd-item {
              display: flex;
              margin-bottom: 20px;
              .close-icon {
                margin-top: 11px;
                margin-left: 15px;
                cursor: pointer;
              }
            }
            .ssd-item-add {
              width: 609px;
              height: 40px;
              border: 1px dashed #1d7aec;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #1d7aec;
              background: rgba(29, 122, 236, 0.1);
              cursor: pointer;
              .icon {
                font-size: 20px;
              }
              .txt {
                margin-right: 25px;
                margin-left: 10px;
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
              width: 200px;
            }
            .select2 {
              width: 280px;
            }
            .password-input {
              width: 280px;
              height: 35px;
              // border-radius: 2px;
              // &:hover,
              // &:focus {
              //   border: 1px solid #d9d9d9;
              //   box-shadow: none;
              // }
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
              color: #f43131;
            }
            .left-box {
              display: flex;
              align-items: center;
              .cloud-select-info {
                font-size: 14px;
                color: #999;
                display: flex;
                .label {
                  color: #000;
                }
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
      border-color: #1d7aec;
      .choose-left {
        background-color: #1d7aec;
        color: #fff;
      }
    }
  }
  .price-box {
    position: sticky;
    z-index: 10;
    box-shadow: 0 -2px 12px 1px rgba(0, 0, 0, 0.11);
    border: solid 1px rgb(238, 238, 238);
    background-color: rgb(255, 255, 255);
    bottom: 0;
    .buy-btn {
      position: absolute;
      top: 35px;
      right: 20px;
      padding: 0 30px;
      height: 40px;
      line-height: 40px;
      border: none;
      border-radius: 2px;
      background-color: #1d7aec;
      font-size: 16px;
      color: #fff;
      text-align: center;
      cursor: pointer;
      font-weight: 700;
    }
  }
}
</style>
