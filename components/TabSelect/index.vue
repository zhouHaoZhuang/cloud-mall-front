<template>
  <div class="tab-select-wrap">
    <div
      v-for="item in list"
      :key="item.value"
      :class="selectValue === item.value ? 'tab-item active' : 'tab-item'"
      :style="{ width: width + 'px' }"
      @click="handleChange(item.value)"
    >
      {{ item.title }}
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
      type: [Number, Boolean, String],
      default: 0
    },
    // 渲染组件的数据源
    list: {
      type: Array,
      default: () => []
    },
    // 单个tab的宽度
    width: {
      type: String,
      default: '129'
    }
  },
  data () {
    return {
      selectValue: 0
    }
  },
  watch: {
    value: {
      handler () {
        this.selectValue = this.value
      },
      immediate: true
    }
  },
  methods: {
    // 选择tab
    handleChange (val) {
      this.selectValue = val
      this.$emit('changeValue', this.selectValue)
      this.$emit('change')
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-select-wrap {
  display: flex;
  .tab-item {
    height: 35px;
    border: 1px solid #ddd;
    border-right: none;
    background-color: #fff;
    line-height: 35px;
    text-align: center;
    font-size: 14px;
    color: #4c4c4c;
    text-overflow: ellipsis;
    word-break: keep-all;
    white-space: nowrap;
    cursor: pointer;
    &:last-child {
      border-right: 1px solid #ddd;
    }
    &.active {
      border-color: #1a92dd;
      background-color: #059fff;
      color: #fff;
    }
  }
}
</style>
