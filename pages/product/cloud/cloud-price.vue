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
        <span> 地域及可用区 </span>
      </div>
      <div class="choose-right">
        <div class="choose-item">
          <div class="choose-label">
            地域：
          </div>
          <div class="choose-value">
            <div class="address">
              <a-select
                v-model="selectAddressId"
                style="width: 200px"
                placeholder="请选择地域"
                size="large"
                @change="handleAddressChange"
              >
                <a-select-option
                  v-for="item in addressData"
                  :key="item.regionId"
                  :value="item.regionId"
                >
                  {{ item.localName }}
                </a-select-option>
              </a-select>
            </div>
          </div>
        </div>
        <div class="choose-item">
          <div class="choose-label">
            可用区：
          </div>
          <div class="choose-value">
            <div class="address">
              <TabSelect
                v-model="zoneId"
                :list="sureAreaData"
                @change="zoneChange"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 实例规格 -->
    <div class="choose-public-box container">
      <div class="choose-left">
        <span> 实例规格 </span>
      </div>
      <div class="choose-right">
        <div class="choose-item">
          <div class="choose-label">
            CPU：
          </div>
          <div class="choose-value">
            <div class="cpu-box">
              <a-select
                v-model="regionQuery.cpuCoreCount"
                style="width: 200px"
                size="large"
                placeholder="请选择CPU"
                @change="handleCpuOrMemoryChange('cpu')"
              >
                <a-select-option
                  v-for="item in cpuData"
                  :key="item"
                  :value="item"
                >
                  {{ item }}核
                </a-select-option>
              </a-select>
              <div class="label">
                内存：
              </div>
              <a-select
                v-model="regionQuery.memorySize"
                style="width: 200px"
                placeholder="请选择内存"
                size="large"
                @change="handleCpuOrMemoryChange('memory')"
              >
                <a-select-option
                  v-for="item in memoryData"
                  :key="item"
                  :value="item"
                >
                  {{ item }}G
                </a-select-option>
              </a-select>
            </div>
          </div>
        </div>
        <div class="choose-item">
          <div class="choose-label">
            类型：
          </div>
          <div class="choose-value">
            <TabSelect
              v-model="typeId"
              width="100"
              :loose="true"
              :list="typeList"
              @change="typeChange"
            />
          </div>
        </div>
        <!-- 实例列表 -->
        <div class="choose-item">
          <div class="table-box">
            <a-table
              :locale="{ emptyText: '暂无数据' }"
              :columns="columns"
              :data-source="regionList"
              row-key="instanceTypeId"
              :pagination="false"
              :scroll="{ y: 300 }"
            >
              <div slot="instanceTypeFamilyShow" slot-scope="text, record">
                <a-radio
                  :checked="radioValue(record)"
                  @click="handleSelectRegion(record)"
                >
                  {{ text }}
                </a-radio>
              </div>
              <div slot="cpuCoreCount" slot-scope="text, record">
                {{ text }} vCPU | {{ record.memorySize }} GB
              </div>
              <div slot="instanceBandwidthRx" slot-scope="text">
                {{ text }} kbit/s
              </div>
              <div slot="instancePpsRx" slot-scope="text">
                {{ text }} PPS
              </div>
            </a-table>
          </div>
        </div>
      </div>
    </div>
    <!-- 存储 -->
    <div class="choose-public-box container">
      <div class="choose-left">
        <span> 存储 </span>
      </div>
      <div class="choose-right">
        <div class="choose-item">
          <div class="choose-label">
            系统盘：
          </div>
          <div class="choose-value">
            <div class="selection">
              <div class="ssd-item">
                <a-select
                  v-model="form.systemDisk.category"
                  default-value="cloud_essd"
                  style="width: 130px; margin-right: 20px"
                  size="large"
                  @change="handleSystemDiskTypeChange"
                >
                  <a-select-option
                    v-for="item in systemDiskTypeList"
                    :key="item"
                    :value="item"
                  >
                    {{ cloudDiskTypeMap[item] }}
                  </a-select-option>
                </a-select>
                <DragSlider
                  :value="form.systemDisk.size"
                  company="G"
                  :number="500"
                  :min="40"
                  :max="500"
                  :on-change="changeSsdSystem"
                />
                <NumberInput
                  v-model="form.systemDisk.size"
                  company="G"
                  :step="10"
                  :min="40"
                  :max="500"
                  :on-change="handleChangeGetPrice"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="choose-item">
          <div class="choose-label">
            数据盘：
          </div>
          <div class="choose-value">
            <div class="selection-ssd">
              <div
                v-for="(item, index) in form.dataDisk"
                :key="item.id"
                class="ssd-item"
              >
                <a-select
                  v-model="item.category"
                  style="width: 130px; margin-right: 20px"
                  size="large"
                  @change="val => handleDataDiskTypeChange(val, index)"
                >
                  <a-select-option
                    v-for="ele in dataDiskTypeList"
                    :key="ele"
                    :value="ele"
                  >
                    {{ cloudDiskTypeMap[ele] }}
                  </a-select-option>
                </a-select>
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
                  class="close-icon"
                  type="close"
                  @click="delDisk(index)"
                />
              </div>
              <div class="ssd-item-add" @click="addDisk">
                <a-icon class="icon" type="plus" />
                <div v-if="form.dataDisk" class="txt">
                  <span>还可以添加</span>
                  <span class="strong"> {{ 4 - form.dataDisk.length }}块 </span>
                  <span>磁盘</span>
                </div>
              </div>
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
    <!-- 网络 -->
    <div class="choose-public-box container">
      <div class="choose-left">
        <span> 网络 </span>
      </div>
      <div class="choose-right">
        <div class="choose-item">
          <div class="choose-label">
            计费方式：
          </div>
          <div class="choose-value">
            <TabSelect v-model="billingMethod" :list="billingMethodList" />
          </div>
        </div>
        <div class="choose-item">
          <div class="choose-label">
            带宽值：
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
      </div>
    </div>
    <!-- 镜像 -->
    <div class="choose-public-box container">
      <div class="choose-left">
        <span> 镜像 </span>
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
                class="select1"
                placeholder="请选择系统类别"
                size="large"
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
                class="select2"
                placeholder="请选择系统版本"
                size="large"
                @change="handleChangeGetPrice"
              >
                <a-select-option
                  v-for="item in systemEditionList"
                  :key="item.imageId"
                >
                  <a-tooltip placement="top">
                    <template slot="title">
                      <span> {{ item.OSName }}</span>
                    </template>
                    <span> {{ item.OSName }}</span>
                  </a-tooltip>
                </a-select-option>
              </a-select>
              <a-tooltip placement="top">
                <template slot="title">
                  <span> Linux 操作系统数据盘挂载到 /data 目录 </span>
                </template>
                <a-icon class="question-icon" type="question-circle" />
              </a-tooltip>
            </div>
            <div
              v-if="overseasList.includes(addressName)"
              class="txt-info"
              style="margin-top: 20px"
            >
              当前地域下的云服务器购买后，暂不支持 Linux 和 Windows
              系统互相更换，请慎重选择。
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 密码 -->
    <div class="choose-public-box container">
      <div class="choose-left">
        <span> 密码 </span>
      </div>
      <div class="choose-right">
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
                    _ + = | { } : ; ' >
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
    <!-- 购买数量 -->
    <div class="choose-public-box container">
      <div class="choose-left">
        <span> 购买数量 </span>
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
                :loose="true"
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
                style="margin-left: 0"
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
    <!-- 配置价格 -->
    <div class="choose-public-box price-box container">
      <div class="choose-left">
        <span> 配置价格 </span>
      </div>
      <div class="choose-right">
        <div class="choose-item">
          <div class="choose-label">
            最终价格：
          </div>
          <div class="choose-value">
            <div class="price">
              <span> ￥ </span>
              <span class="price-txt">
                {{ form.tradePrice }}
              </span>
              <a-tooltip placement="top" overlay-class-name="overlay-wrap">
                <template slot="title">
                  <div class="price-tooltip">
                    <span>镜像</span>
                    <span>￥{{ form.imagePrice }}</span>
                  </div>
                  <div class="price-tooltip">
                    <span>实例</span>
                    <span>￥{{ form.canEnjoyDiscountPrice }}</span>
                    <span class="ml"> 省￥{{ form.discountPrice }} </span>
                  </div>
                </template>
                <a-icon class="question-icon" type="question-circle" />
              </a-tooltip>
            </div>
            <div class="coupon-box">
              <div class="left">
                <Iconfont class="icon" type="icon-youhuiquan_1" />
                <span>已节省¥{{ form.discountPrice }}</span>
              </div>
              <div class="right">
                <Iconfont class="icon" type="icon-liwu" />
                <span>已享{{ form.discount }}折</span>
              </div>
            </div>
          </div>
        </div>
        <div
          v-show="isShowCloudSelect"
          class="choose-item"
          style="margin-top: 30px"
        >
          <div class="table-box" style="margin-left: 33px">
            <a-table
              :columns="configColumns"
              :data-source="configData"
              :row-key="
                (record, index) => {
                  return index
                }
              "
              :pagination="false"
            >
              <div slot="regionId">
                {{ addressName }}
              </div>
              <div slot="zoneId">
                {{ getSureAreaName }}
              </div>
              <div slot="region">
                {{ getRegion }}
              </div>
              <div slot="instanceTypeFamily">
                {{ getTypeName }}
              </div>
              <div slot="systemDisk">
                {{ cloudDiskTypeMap[form.systemDisk.category] }}-{{
                  form.systemDisk.size
                }}G
              </div>
              <div slot="dataDisk">
                <a-tooltip placement="top">
                  <template slot="title">
                    <div>ESSD-{{ essdNum }} G</div>
                    <div>SSD-{{ ssdNum }} G</div>
                    <div>高效云盘-{{ highNum }} G</div>
                  </template>
                  <div>
                    <span>{{ form.dataDisk.length }}块</span>
                    <a-icon type="info-circle" />
                  </div>
                </a-tooltip>
              </div>
              <div slot="internetMaxBandwidthOut">
                {{ form.internetMaxBandwidthOut }}Mbps
              </div>
              <div slot="amount">
                {{ form.amount }}台 x {{ form.period
                }}{{
                  setBuyTimeData(form.period).priceUnit === 'Month'
                    ? '个月'
                    : '年'
                }}
              </div>
              <div slot="imageSystem">
                <a-tooltip placement="top">
                  <template slot="title">
                    <span>
                      {{ getSystemName }}
                    </span>
                  </template>
                  <div class="text-overflow" style="width: 100px">
                    <span>{{ getSystemName }}</span>
                    <a-icon type="info-circle" />
                  </div>
                </a-tooltip>
              </div>
            </a-table>
          </div>
        </div>
      </div>
      <!-- 购买+配置按钮 -->
      <div class="config-btn" @click="changeIsShowCloudSelect">
        {{ isShowCloudSelect ? '关闭' : '展开' }}配置
      </div>
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
  jumpCloudAdminRealName,
  judgePwdFormat
} from '@/utils/index'
import {
  cpuData,
  memoryData,
  overseasList,
  cloudDiskTypeMap
} from '@/utils/enum'
export default {
  components: {
    DragSlider,
    TabSelect,
    NumberInput
  },
  // nuxt推荐请求方式
  async asyncData ({ app, $axios, params, query }) {
    // 获取产品code
    const productData = await app.$api.cloud.productList()
    const productCode =
      productData.data &&
      Array.isArray(productData.data.list) &&
      productData.data.list.length > 0
        ? productData.data.list.find(
          ele => ele.supplierProductCode === 'ECS_ALI'
        ).productCode
        : ''
    // 获取地域列表
    const addressData = await app.$api.cloud.addressList()
    const firstData =
      Array.isArray(addressData.data) && addressData.data.length > 0
        ? addressData.data[1]
        : { regionId: '', regionZone: { zones: [] } }
    const selectAddressId = firstData.regionId
    // 设置可用区数据
    const sureAreaData = firstData.regionZone.zones.map((ele) => {
      return {
        ...ele,
        title: ele.localName,
        value: ele.zoneId
      }
    })
    const zoneId = -1
    sureAreaData.unshift({
      title: '随机可用区',
      value: -1
    })
    if (selectAddressId) {
      const regionQuery = {
        cpuCoreCount: query.cpu ? query.cpu : undefined,
        memorySize: query.memory ? query.memory : undefined
      }
      // 获取对应的实例列表
      const regionData = await app.$api.cloud.getRegionDetail({
        regionId: selectAddressId,
        ...regionQuery
      })
      const regionList =
        Array.isArray(regionData.data) && regionData.data.length > 0
          ? regionData.data
          : []
      const firstRegion = regionList.length > 0 ? regionList[0] : {}
      if (regionList.length > 0) {
        // 获取系统盘类型列表
        const systemTypeData = await app.$api.cloud.getSystemDiskTypeList({
          regionId: selectAddressId,
          instanceType: firstRegion.instanceTypeId
        })
        const systemDiskTypeList =
          Array.isArray(systemTypeData.data) && systemTypeData.data.length > 0
            ? systemTypeData.data
            : []
        const firstSysType =
          systemDiskTypeList.length > 0 ? systemDiskTypeList[0] : undefined
        // 获取数据盘类型列表
        const dataTypeData = await app.$api.cloud.getDataDiskTypeList({
          regionId: selectAddressId,
          instanceType: firstRegion.instanceTypeId
        })
        const dataDiskTypeList =
          Array.isArray(dataTypeData.data) && dataTypeData.data.length > 0
            ? dataTypeData.data
            : []
        const firstDataType =
          dataDiskTypeList.length > 0 ? dataDiskTypeList[0] : undefined
        // 获取镜像数据
        const systemList = await app.$api.cloud.systemList({
          regionId: selectAddressId,
          instanceType: firstRegion.instanceTypeId
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
          regionId: selectAddressId, // 地域id
          instanceTypeFamily: firstRegion.instanceTypeFamily, // 分类id
          ioOptimized: 'optimized', // I/O优化
          instanceType: firstRegion.instanceTypeId, // 实例规格ID
          cpu: firstRegion.cpuCoreCount,
          memory: firstRegion.memorySize,
          systemDisk: {
            category: firstSysType,
            performanceLevel:
              firstSysType && firstSysType === 'cloud_essd' ? 'PL0' : '',
            size: 40
          }, // 系统盘-免费赠送
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
          addressData: addressData.data,
          selectAddressId,
          sureAreaData,
          zoneId,
          // 列表实例
          regionList,
          systemList: newSystemList,
          systemEditionList,
          defaultSystem,
          form: {
            ...form,
            ...priceData.data
          },
          regionQuery,
          systemDiskTypeList,
          firstSysType,
          dataDiskTypeList,
          firstDataType
        }
      } else {
        return {
          addressData: addressData.data,
          selectAddressId,
          sureAreaData,
          zoneId,
          regionQuery
        }
      }
    } else {
      return {}
    }
  },
  data () {
    return {
      overseasList,
      cloudDiskTypeMap,
      // 渲染cpu tab选择数据
      cpuData,
      // 内存数据
      memoryData,
      setCpuOrDiskData,
      // 地域数据
      addressData: [],
      selectAddressId: '',
      // 可用区数据
      sureAreaData: [],
      zoneId: -1,
      // 规格簇数据
      typeList: [
        {
          title: '全部类型',
          value: 'all'
        },
        {
          title: '通用型',
          value: 'general-purpose'
        },
        {
          title: '计算型',
          value: 'compute-optimized'
        },
        {
          title: '内存型',
          value: 'memory-optimized'
        },
        {
          title: '大数据型',
          value: 'big-data'
        },
        {
          title: '本地SSD',
          value: 'local-ssd'
        },
        {
          title: '高主频型',
          value: 'high-clockSpeed'
        },
        {
          title: '共享型',
          value: 'basic'
        },
        {
          title: '增强型',
          value: 'enhancement'
        }
      ],
      typeId: 'all',
      // 查询价格参数
      form: {
        systemDisk: {
          category: 'cloud_essd',
          performanceLevel: 'PL0',
          size: 40
        },
        dataDisk: []
      },
      // 是否显示已选择配置
      isShowCloudSelect: false,
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
      // 计费方式
      billingMethod: 1,
      billingMethodList: [
        {
          title: '按固定宽带',
          value: 1
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
      regionList: [],
      columns: [
        {
          title: '规格族',
          dataIndex: 'instanceTypeFamilyShow',
          scopedSlots: { customRender: 'instanceTypeFamilyShow' }
        },
        {
          title: '实例规格',
          dataIndex: 'instanceTypeId'
        },
        {
          title: 'vCPUs｜内存',
          dataIndex: 'cpuCoreCount',
          scopedSlots: { customRender: 'cpuCoreCount' }
        },
        {
          title: '内网宽带',
          dataIndex: 'instanceBandwidthRx',
          scopedSlots: { customRender: 'instanceBandwidthRx' }
        },
        {
          title: '内网收发包',
          dataIndex: 'instancePpsRx',
          scopedSlots: { customRender: 'instancePpsRx' }
        }
      ],
      passwordStatus: 1,
      okPasswordStatus: 1,
      configColumns: [
        {
          title: '地域',
          dataIndex: 'regionId',
          scopedSlots: { customRender: 'regionId' }
        },
        {
          title: '可用区',
          dataIndex: 'zoneId',
          scopedSlots: { customRender: 'zoneId' }
        },
        {
          title: '实例',
          dataIndex: 'region',
          scopedSlots: { customRender: 'region' }
        },
        {
          title: '类型',
          key: 'instanceTypeFamily',
          scopedSlots: { customRender: 'instanceTypeFamily' }
        },
        {
          title: '系统盘',
          key: 'systemDisk',
          scopedSlots: { customRender: 'systemDisk' }
        },
        {
          title: '数据盘',
          dataIndex: 'dataDisk',
          scopedSlots: { customRender: 'dataDisk' }
        },
        {
          title: '宽带',
          dataIndex: 'internetMaxBandwidthOut',
          scopedSlots: { customRender: 'internetMaxBandwidthOut' }
        },
        {
          title: '购买数量',
          dataIndex: 'amount',
          scopedSlots: { customRender: 'amount' }
        },
        {
          title: '系统镜像',
          dataIndex: 'imageSystem',
          scopedSlots: { customRender: 'imageSystem' }
        }
      ],
      configData: [
        {
          regionId: this.selectAddressId, // 地域id
          zoneId: this.zoneId // 可用区id
        }
      ],
      regionQuery: {
        cpuCoreCount: undefined,
        memorySize: undefined
      },
      // 系统盘类型列表
      systemDiskTypeList: [],
      firstSysType: '',
      // 数据盘类型列表
      dataDiskTypeList: [],
      firstDataType: '',
      timeout: null
    }
  },
  computed: {
    ...mapState({
      token: state => state.user.token,
      isLogin: state => state.user.isLogin
    }),
    radioValue () {
      return function (record) {
        return this.form.instanceType === record.instanceTypeId
      }
    },
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
    // 返回可用区名称
    getSureAreaName () {
      if (this.sureAreaData.length > 0) {
        const newSureArea = this.sureAreaData.find(
          item => item.value === this.zoneId
        )
        return newSureArea.title
      } else {
        return ''
      }
    },
    // 返回类型名称
    getTypeName () {
      if (this.typeList.length > 0) {
        const newType = this.typeList.find(item => item.value === this.typeId)
        return newType.title
      } else {
        return ''
      }
    },
    // 返回实例数据
    getRegion () {
      if (this.regionList.length > 0) {
        const newRegion = this.regionList.find(
          item => item.instanceTypeId === this.form.instanceType
        )
        return `${newRegion.cpuCoreCount}vCPU | ${newRegion.memorySize}G`
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
    // 返回选择的系统镜像名称
    getSystemName () {
      if (this.systemList.length === 0 && this.systemEditionList.length === 0) {
        return ''
      }
      const systemName1 = Object.keys(this.systemList).find(
        ele => ele === this.defaultSystem
      )
      const systemName2 = this.systemEditionList.find(
        ele => ele.imageId === this.form.imageId
      )
      return `${systemName1}/${systemName2?.OSName}`
    },
    // 返回essd数据盘大小
    essdNum () {
      if (this.form.dataDisk && Array.isArray(this.form.dataDisk)) {
        let sum = 0
        this.form.dataDisk.forEach((item) => {
          if (item.category === 'cloud_essd') {
            sum += item.size
          }
        })
        return sum
      } else {
        return 0
      }
    },
    // 返回ssd数据盘大小
    ssdNum () {
      if (this.form.dataDisk && Array.isArray(this.form.dataDisk)) {
        let sum = 0
        this.form.dataDisk.forEach((item) => {
          if (item.category === 'cloud_ssd') {
            sum += item.size
          }
        })
        return sum
      } else {
        return 0
      }
    },
    // 返回高效云盘大小
    highNum () {
      if (this.form.dataDisk && Array.isArray(this.form.dataDisk)) {
        let sum = 0
        this.form.dataDisk.forEach((item) => {
          if (item.category === 'cloud_efficiency') {
            sum += item.size
          }
        })
        return sum
      } else {
        return 0
      }
    }
  },
  methods: {
    // 获取系统盘分类列表
    getSystemDiskTypeList (isGetPrice = false) {
      this.$api.cloud
        .getSystemDiskTypeList({
          regionId: this.selectAddressId,
          instanceType: this.form.instanceType
        })
        .then((res) => {
          this.systemDiskTypeList =
            Array.isArray(res.data) && res.data.length > 0 ? [...res.data] : []
          this.firstSysType =
            this.systemDiskTypeList.length > 0
              ? this.systemDiskTypeList[0]
              : undefined
          this.form.systemDisk = {
            category: this.firstSysType,
            performanceLevel:
              this.firstSysType && this.firstSysType === 'cloud_essd'
                ? 'PL0'
                : '',
            size: 40
          }
          this.form.dataDisk = []
          if (!isGetPrice) {
            return
          }
          this.handleChangeGetPrice()
        })
    },
    // 获取数据盘分类列表
    getDataDiskTypeList () {
      this.$api.cloud
        .getDataDiskTypeList({
          regionId: this.selectAddressId,
          instanceType: this.form.instanceType
        })
        .then((res) => {
          this.dataDiskTypeList =
            Array.isArray(res.data) && res.data.length > 0 ? [...res.data] : []
          this.firstDataType =
            this.dataDiskTypeList.length > 0
              ? this.dataDiskTypeList[0]
              : undefined
        })
    },
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
      this.form.discountPrice = '0.00'
      this.form.discount = ''
      const newForm = {
        ...this.form,
        // 处理时间，判断是年还是月
        ...this.setBuyTimeData(this.form.period)
      }
      this.$api.cloud.getCloudPrice(newForm).then((res) => {
        this.form = { ...this.form, ...res.data }
      })
    },
    // 地域切换
    handleAddressChange (val) {
      this.zoneId = -1
      this.typeId = 'all'
      const addressObj = this.addressData.find(ele => ele.regionId === val)
      this.sureAreaData = addressObj.regionZone.zones.map((ele) => {
        return {
          ...ele,
          title: ele.localName,
          value: ele.zoneId
        }
      })
      this.sureAreaData.unshift({
        title: '随机可用区',
        value: -1
      })
      // 生成询价+购买参数
      const newForm = {
        ...this.form,
        regionId: this.selectAddressId,
        zoneId: undefined,
        period: 1,
        dataDisk: [],
        internetMaxBandwidthOut: 1,
        tradePrice: '价格计算中...',
        discountPrice: '0.00',
        discount: ''
      }
      this.form = { ...newForm }
      this.regionQuery.cpuCoreCount = undefined
      this.regionQuery.memorySize = undefined
      this.getRegionData()
    },
    // 可用区切换
    zoneChange () {
      if (this.timeout) {
        clearTimeout(this.timeout)
      }
      this.timeout = setTimeout(() => {
        this.getRegionData()
      }, 2000)
    },
    // 分类切换
    typeChange () {
      this.regionQuery.cpuCoreCount = undefined
      this.regionQuery.memorySize = undefined
      this.getRegionData()
    },
    // 获取对应的实例和实例属性，属性值---目前页面没有设计选择，默认拿第一个
    getRegionData () {
      this.$api.cloud
        .getRegionDetail({
          regionId: this.selectAddressId,
          specFamily: this.typeId,
          family: this.typeId,
          regionZone: this.zoneId === -1 ? undefined : this.zoneId,
          ...this.regionQuery
        })
        .then((res) => {
          if (Array.isArray(res.data) && res.data.length > 0) {
            this.regionList = [...res.data]
            this.form.instanceType = res.data[0].instanceTypeId
            this.form.instanceTypeFamily = res.data[0].instanceTypeFamily
            this.form.cpu = res.data[0].cpuCoreCount
            this.form.memory = res.data[0].memorySize
            this.getSystemData()
            this.getSystemDiskTypeList(true)
            this.getDataDiskTypeList()
          } else {
            this.regionList = []
            this.$message.warning('没有实例')
            this.form.tradePrice = '---'
          }
        })
    },
    // 选择实例
    handleSelectRegion (record) {
      this.form.instanceType = record.instanceTypeId
      this.form.instanceTypeFamily = record.instanceTypeFamily
      this.form.cpu = record.cpuCoreCount
      this.form.memory = record.memorySize
      this.getSystemDiskTypeList(true)
      this.getDataDiskTypeList()
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
    // 修改ssd系统盘
    changeSsdSystem (val) {
      this.form.systemDisk.size = val
      this.handleChangeGetPrice()
    },
    // 添加一块ssd数据盘
    addDisk () {
      if (this.form.dataDisk.length === 4) {
        return
      }
      const newId =
        this.form.dataDisk.length === 0
          ? -1
          : this.form.dataDisk[this.form.dataDisk.length - 1].id - 1
      this.form.dataDisk.push({
        id: newId,
        number: 500,
        category: this.firstDataType,
        performanceLevel: this.firstDataType === 'cloud_essd' ? 'PL0' : '',
        size: 40
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
        this.regionQuery.memorySize = undefined
      }
      this.typeId = 'all'
      this.getRegionData()
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
        if (judgePwdFormat(value) < 3) {
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
    // 系统盘类型change
    handleSystemDiskTypeChange (val) {
      this.form.systemDisk.performanceLevel = val === 'cloud_essd' ? 'PL0' : ''
      this.getCloudPrice()
    },
    // 数据盘类型change
    handleDataDiskTypeChange (val, index) {
      this.form.dataDisk.splice(index, 1, {
        ...this.form.dataDisk[index],
        performanceLevel: val === 'cloud_essd' ? 'PL0' : ''
      })
      this.getCloudPrice()
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
            itemCode: this.form.instanceTypeId,
            quantity: this.form.amount
          }
        ],
        // 产品编码-从导航云服务点击进来，每个产品都有自己的编码-暂时写死
        productCode: this.form.productCode,
        // 询价时所用参数
        productConfig: {
          ...this.form,
          instanceTypeFamily: this.form.instanceTypeFamily,
          osName,
          // 处理时间，判断是年还是月
          ...time,
          regionId: this.selectAddressId,
          zoneId: this.zoneId === -1 ? undefined : this.zoneId
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
  background: #f5f7fd;
  padding-bottom: 20px;
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
    min-height: 100px;
    display: flex;
    margin-bottom: 16px;
    background-color: #fff;
    border-left: 0;
    font-size: 14px;
    color: #999;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    .choose-left {
      width: 35px;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      background-color: rgba(235, 241, 252, 1);
      color: #12264c;
      font-size: 16px;
      span {
        width: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .choose-right {
      padding: 30px 0;
      flex: 1;
      margin-left: 30px;
      background: #fff;
      .choose-item {
        display: flex;
        margin-bottom: 20px;
        .table-box {
          width: 100%;
          margin-left: 60px;
          margin-right: 30px;
          .ant-table-body {
            /* 整个滚动条 */
            &::-webkit-scrollbar {
              width: 20px;
              height: 20px;
              background-color: red;
            }
            /* 滚动条上的按钮 (上下箭头). */
            &::-webkit-scrollbar-button {
              background-color: #2196f3;
              border-radius: 50px;
              height: 20px;
              width: 20px;
            }
            /* 滚动条上的滚动滑块. */
            &::-webkit-scrollbar-thumb {
              background-color: #e91e63;
              border-radius: 50px;
            }
            /*  滚动条轨道. */
            &::-webkit-scrollbar-track {
              background-color: #eff6fc;
            }
            /* 滚动条没有滑块的轨道部分 */
            &::-webkit-scrollbar-track-piece {
              background-color: red;
            }
          }
        }
        .choose-label {
          width: 110px;
          text-align: right;
          margin-right: 15px;
          line-height: 33px;
          color: #13274b;
        }
        .choose-value {
          flex: 1;
          // 地域
          // .address {
          // }
          // 实例规格-cpu
          .cpu-box {
            display: flex;
            align-items: center;
            .label {
              color: #13274b;
              font-size: 14px;
              margin-left: 50px;
            }
          }
          // 选型
          .selection {
            display: flex;
            .ssd-item {
              display: flex;
            }
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
              border: 1px dashed #3b77e3;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #1d7aec;
              background: rgba(211, 241, 255, 0.5);
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
            color: #3b77e3;
            line-height: 39px;
            margin-left: 10px;
          }
          // 系统
          .system {
            .select1,
            .select2 {
              font-size: 14px;
              height: 35px;
              border-radius: 2px !important;
              .ant-select-selection {
                border-color: #1a92dd;
              }
            }
            .select1 {
              width: 230px;
            }
            .select2 {
              width: 380px;
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
            color: #13274b;
            line-height: 25px;
            .price-txt {
              font-size: 26px;
              color: #3b77e3;
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
          .coupon-box {
            display: flex;
            margin-top: 10px;
            .left,
            .right {
              display: flex;
              align-items: center;
              color: #12264c;
            }
            .right {
              margin-left: 40px;
              color: #ff7f61;
            }
            .icon {
              font-size: 22px;
              margin-right: 10px;
            }
          }
        }
        &:last-child {
          margin-bottom: 0 !important;
        }
      }
    }
    &:hover {
      .choose-left {
        background-color: #3b77e3;
        color: #fff;
      }
    }
  }
  .price-box {
    position: sticky;
    z-index: 10;
    box-shadow: 0 -2px 12px 1px rgba(0, 0, 0, 0.11);
    border: solid 1px rgb(238, 238, 238);
    bottom: 0;
    .config-btn,
    .buy-btn {
      position: absolute;
      top: 35px;
      right: 20px;
      padding: 0 30px;
      height: 40px;
      line-height: 40px;
      border: none;
      background-color: #3b77e3;
      border-radius: 0px 4px 4px 0px;
      font-size: 16px;
      color: #fff;
      text-align: center;
      cursor: pointer;
      font-weight: 700;
    }
    .config-btn {
      border: 1px solid #3b77e3;
      color: #3b77e3;
      border-radius: 4px 0px 0px 4px;
      border-right: none;
      right: 144px;
      background: transparent;
    }
  }
}
</style>
<style lang="scss">
.cloud-price-container {
  .table-box {
    .ant-table-thead > tr > th,
    .ant-table-tbody > tr > td {
      padding: 12px 16px;
    }
    .ant-table-body {
      /* 整个滚动条 */
      &::-webkit-scrollbar {
        width: 6px;
      }
      /* 滚动条上的按钮 (上下箭头). */
      &::-webkit-scrollbar-button {
        display: none;
      }
      /* 滚动条上的滚动滑块. */
      &::-webkit-scrollbar-thumb {
        background-color: #3b77e3;
        border-radius: 50px;
      }
      /* 滚动条没有滑块的轨道部分 */
      &::-webkit-scrollbar-track-piece {
        background-color: #eff6fc;
        border-radius: 50px;
      }
    }
  }
}
.overlay-wrap {
  .ant-tooltip-inner {
    background-color: #fff !important;
    width: 200px;
    height: 80px;
    border-radius: 4px;
    color: #3b77e3;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .ml {
      margin-left: 15px;
      color: #ff7f61;
    }
  }
  .ant-tooltip-arrow {
    &::before {
      background: #fff;
    }
  }
}
</style>
