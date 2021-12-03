<template>
  <!-- 最外层包裹 -->
  <div class="slider-wrap">
    <!-- 滑动输入条的每一块，共计四块 -->
    <div ref="slider" class="slider-box">
      <div v-for="item in sliderData" :key="item" class="item">
        {{ item }}
      </div>
    </div>
    <!-- 结构同上,用于进度条修改后所展示的结构,同时包裹在滑动输入条背景盒子里 -->
    <div class="slider-bg" :style="{ width }">
      <div class="slider-box slider-copy-bg">
        <div v-for="item in sliderData" :key="item" class="item">
          {{ item }}
        </div>
      </div>
    </div>
    <!-- 滑块 -->
    <div ref="trunk" class="slider-btn" :style="{ left }" />
  </div>
</template>

<script>
export default {
  props: {
    // 滑块的进度
    value: {
      type: Number,
      default: 0
    },
    // 渲染拖拽输入条的数据,输入条只会有四块，每块均分传递来的number
    number: {
      type: Number,
      default: 1000
    },
    // 每次滑动步长
    step: {
      type: Number,
      default: 1
    },
    // 单位  带宽-M 数据盘-G
    company: {
      type: String,
      default: 'G'
    },
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
      progressNum: 0 // 组件内维护的进度
    }
  },
  computed: {
    // 设置一个百分比，提供计算slider进度宽度和trunk的left值
    // 对应公式为 当前值-最小值/最大值-最小值 = slider进度width / slider总width
    // trunk left = slider进度width + trunk宽度/2
    scale () {
      return (this.per - this.min) / (this.max - this.min)
    },
    width () {
      if (this.slider) {
        return this.slider.offsetWidth * this.scale + 'px'
      } else {
        return 0 + 'px'
      }
    },
    left () {
      if (this.slider) {
        return (
          this.slider.offsetWidth * this.scale -
          this.thunk.offsetWidth / 2 +
          'px'
        )
      } else {
        return 0 + 'px'
      }
    }
  },
  watch: {
    // 根据传递的数值渲染页面结构
    number: {
      handler (newVal, oldVal) {
        this.sliderData = [...this.setSliderData()]
      },
      immediate: true
    }
  },
  // 渲染到页面的时候
  mounted () {
    this.slider = this.$refs.slider
    this.thunk = this.$refs.trunk
    this.thunk.onmousedown = (e) => {
      const width = parseInt(this.width)
      const disX = e.clientX
      document.onmousemove = (e) => {
        console.log('移动', e, width, disX)
        // value, left, width
        // 当value变化的时候，会通过计算属性修改left，width
        // 拖拽的时候获取的新width
        // const newWidth = e.clientX - disX + width
        // // 拖拽的时候得到新的百分比
        // const scale = newWidth / this.slider.offsetWidth
        // this.per = Math.ceil((this.max - this.min) * scale + this.min)
        // this.per = Math.max(this.per, this.min)
        // this.per = Math.min(this.per, this.max
        // this.$emit('onChange', )
      }
      document.onmouseup = () => {
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
    }
    // 滑块移动时间 ---按下---移动---停止
    // 按下
    // sliderMouseDown (e) {
    //   console.log('按下', e)
    // },
    // // 移动
    // sliderMouseMove (e) {
    //   console.log('移动', e)
    // }
  }
}
</script>

<style lang="scss" scoped>
.slider-wrap {
  margin-left: 100px;
  position: relative;
  width: 600px;
  height: 35px;
  padding: 0 8px;
  border: 1px solid #ddd;
  // border-left: none;
  background-color: #fff;
  border-radius: 2px;
  font-size: 14px;
  .slider-box {
    width: 584px;
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
    transition: left 0.1s;
    cursor: pointer;
  }
}
</style>
