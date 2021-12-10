<template>
  <div class="number-input-wrap">
    <div class="left-box">
      <a-input
        v-number-evolution="{ value: 0, min, max }"
        :value="inputValue"
        class="input"
        @change="handleInput"
      />
      <div class="company">
        {{ company }}
      </div>
    </div>
    <div class="right-step">
      <div class="up" @click="handleAdd">
        <a-icon class="icon" type="caret-up" />
      </div>
      <div class="down" @click="handleReduce">
        <a-icon class="icon" type="caret-down" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 双向绑定
  model: {
    event: 'changeValue',
    prop: 'value'
  },
  props: {
    // 组件传递的值
    value: {
      type: Number,
      default: 0
    },
    // 单位  带宽-M 数据盘-G
    company: {
      type: String,
      default: 'G'
    },
    // 步长
    step: {
      type: Number,
      default: 10
    },
    // 最小值
    min: {
      type: Number,
      default: 40
    },
    // 最大值
    max: {
      type: Number,
      default: 500
    },
    // 值修改后的回调，参数是修改后的值
    onChange: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
      inputValue: 0
    }
  },
  watch: {
    value: {
      handler () {
        this.inputValue = this.value
      },
      immediate: true
    }
  },
  methods: {
    // 输入
    handleInput (e) {
      if (e.target.value > this.max) {
        this.inputValue = this.max
      } else if (e.target.value < this.min) {
        this.inputValue = this.min
      } else {
        this.inputValue = e.target.value * 1
      }
      this.$emit('changeValue', this.inputValue)
      this.onChange()
    },
    // 点击增加
    handleAdd () {
      if (this.inputValue + this.step > this.max) {
        this.inputValue = this.max
      } else {
        this.inputValue += this.step
      }
      this.$emit('changeValue', this.inputValue)
      this.onChange()
    },
    // 点击减少
    handleReduce () {
      if (this.inputValue - this.step < this.min) {
        this.inputValue = this.min
      } else {
        this.inputValue -= this.step
      }
      this.$emit('changeValue', this.inputValue)
      this.onChange()
    }
  }
}
</script>

<style lang="scss" scoped>
.number-input-wrap {
  display: flex;
  .left-box {
    display: flex;
    border: 1px solid #ddd;
    height: 35px;
    margin-left: 10px;
    border-radius: 2px;
    overflow: hidden;
    .input {
      width: 50px;
      border: none;
      &:hover,
      &:focus {
        border: none;
        box-shadow: none;
      }
    }
    .company {
      width: 30px;
      height: 35px;
      border-left: 1px solid #ddd;
      background-color: #f5f5f5;
      line-height: 35px;
      text-align: center;
    }
  }
  .right-step {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .up,
    .down {
      width: 32px;
      height: 15px;
      line-height: 15px;
      text-align: center;
      background-color: #f5f5f5;
      cursor: pointer;
      &:hover {
        background-color: #029fd9;
        color: #fff;
      }
    }
  }
}
</style>
