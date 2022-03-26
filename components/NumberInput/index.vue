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
        @blur="handleInput"
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
  width: 139px;
  height: 38px;
  display: flex;
  margin-left: 20px;
  border-radius: 4px;
  overflow: hidden;
  .left,
  .right {
    width: 38px;
    height: 38px;
    background: #3b77e3;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #3b77e3;
    .icon {
      font-size: 20px;
      color: #fff;
    }
  }
  .center {
    display: flex;
    align-items: center;
    height: 38px;
    overflow: hidden;
    color: #3b77e3;
    position: relative;
    padding-right: 5px;
    border-top: 1px solid #3b77e3;
    border-bottom: 1px solid #3b77e3;
    .input {
      width: 60px;
      border: none;
      color: #3b77e3;
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
      transform: translateY(-46%);
    }
  }
}
</style>
