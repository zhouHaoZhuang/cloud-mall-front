<template>
  <div class="number-input-wrap">
    <div class="left" @click="handleReduce">
      <a-icon class="icon" type="minus" />
    </div>
    <div class="center">
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
    <div class="right" @click="handleAdd">
      <a-icon class="icon" type="plus" />
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
  margin-left: 20px;
  .left,
  .right {
    width: 36px;
    height: 36px;
    background: #edf2fa;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
      font-size: 20px;
      color: #bbc2ce;
    }
    &:hover {
      background: #1d7aec;
      .icon {
        color: #fff;
      }
    }
  }
  .center {
    display: flex;
    align-items: center;
    height: 36px;
    overflow: hidden;
    color: #000;
    position: relative;
    padding-right: 5px;
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
      position: absolute;
      top: 50%;
      right: 5px;
      transform: translateY(-50%);
    }
  }
}
</style>
