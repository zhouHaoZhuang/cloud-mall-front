<template>
  <!-- 最外层包裹 -->
  <div class="slider-wrap">
    <!-- 滑动输入条的每一块，共计四块 -->
    <div ref="slider" class="slider-box" @click="handleChangePre">
      <div v-for="item in sliderData" :key="item" class="item">
        {{ item }}
      </div>
    </div>
    <!-- 结构同上,用于进度条修改后所展示的结构,同时包裹在滑动输入条背景盒子里 -->
    <div
      ref="sliderBg"
      class="slider-bg"
      :style="{ width: width + 'px' }"
      @click="handleChangePre"
    >
      <div class="slider-box slider-copy-bg">
        <div v-for="item in sliderData" :key="item" class="item">
          {{ item }}
        </div>
      </div>
    </div>
    <!-- 滑块 -->
    <div ref="trunk" class="slider-btn" :style="{ left: left + 'px' }" />
  </div>
</template>

<script>
export default {
  props: {
    // 组件默认进度
    value: {
      type: Number,
      default: 0
    },
    // 渲染拖拽输入条的数据,输入条只会有四块，每块均分传递来的number
    number: {
      type: Number,
      default: 1000
    },
    // 单位  带宽-M 数据盘-G
    company: {
      type: String,
      default: 'G'
    },
    // 最小值
    min: {
      type: Number,
      default: 0
    },
    // 最大值--暂不需要-默认最大值就是进度条最大宽度 600px
    // max: {
    //   type: Number,
    //   default: 1000
    // },
    // 滑块改动后需要触发的回调,参数可以拿到修改后的滑块值
    onChange: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
      sliderData: [], // 滑动输入条的页面结构渲染数据
      slider: null, // 滚动条DOM元素
      thunk: null, // 拖拽DOM元素
      per: this.value,
      width: 0,
      left: 0
    }
  },
  watch: {
    // 根据传递的数值渲染页面结构
    number: {
      handler (newVal, oldVal) {
        this.sliderData = [...this.setSliderData()]
      },
      immediate: true
    },
    // 根据value值控制页面进度条进度
    value: {
      handler (newVal, oldVal) {
        this.width = this.computedWidthAndLeft(newVal)
        this.left = this.computedWidthAndLeft(newVal) - 8
      },
      immediate: true
    }
  },
  // 渲染到页面的时候
  mounted () {
    // 滑动输入条
    this.slider = this.$refs.slider
    // 滑块
    this.thunk = this.$refs.trunk
    // 滑块鼠标按下事件
    this.thunk.onmousedown = (e) => {
      const disX = e.clientX
      // 滑块鼠标移动事件
      document.onmousemove = (e) => {
        // 拖拽的时候获取的新width
        const newWidth = e.clientX - disX + this.width
        this.per = Math.min(newWidth, 600)
        if (this.per < this.computedWidthAndLeft(this.min)) {
          this.per = this.computedWidthAndLeft(this.min)
        }
      }
      // 滑块鼠标抬起事件
      document.onmouseup = () => {
        this.onChange(this.computedValue(this.per))
        document.onmousemove = document.onmouseup = null
      }
      return false
    }
  },
  methods: {
    // 根据传递的数值渲染页面结构
    setSliderData () {
      const newArr = []
      const num = this.number / 4
      for (let i = 0; i < 4; i++) {
        newArr.push(num * (i + 1) + this.company)
      }
      return newArr
    },
    // 计算返回进度条宽度等比的实际数据的值
    computedValue (val) {
      return parseInt(((val || this.width) / 600) * this.number)
    },
    // 根据实际数据的值计算页面宽度+距离左侧距离
    computedWidthAndLeft (val) {
      return (val / this.number) * 600
    },
    // 点击修改进度
    handleChangePre (e) {
      let newPer = e.layerX
      if (newPer < this.computedWidthAndLeft(this.min)) {
        newPer = this.computedWidthAndLeft(this.min)
      }
      this.onChange(this.computedValue(newPer))
    }
  }
}
</script>

<style lang="scss" scoped>
.slider-wrap {
  position: relative;
  width: 600px;
  height: 35px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 2px;
  font-size: 14px;
  .slider-box {
    width: 600px;
    display: flex;
    .item {
      width: 25%;
      height: 35px;
      line-height: 35px;
      color: #4c4c4c;
      padding-right: 8px;
      border-left: 1px solid #ddd;
      text-align: right;
      cursor: pointer;
      font-weight: 400;
      &:first-child {
        border-left: none;
      }
    }
  }
  .slider-bg {
    height: 35px;
    position: absolute;
    top: 0;
    overflow: hidden;
    background-color: #059fff;
    margin-top: -1px;
    border-radius: 2px 0 0 2px;
    transition: width 0.2s;
    .slider-copy-bg {
      position: absolute;
      top: 0;
      .item {
        color: #fff;
        border: none;
      }
    }
  }
  .slider-btn {
    position: absolute;
    top: -3px;
    left: 0;
    width: 16px;
    height: 40px;
    background: url('~/static/img/common/slide_range_bg.png') no-repeat center;
    cursor: pointer;
    z-index: 3;
    cursor: pointer;
    transition: left 0.2s;
  }
}
</style>
