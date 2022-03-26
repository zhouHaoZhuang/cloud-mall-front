<template>
  <div class="tab-select-wrap">
    <div
      v-for="item in list"
      :id="list.length === 1 ? 'radius' : ''"
      :key="item.value"
      :class="[
        selectValue === item.value ? 'tab-item active' : 'tab-item',
        loose ? 'tab-margin' : ''
      ]"
      :style="{
        width: width + 'px',
        background: bgColor,
        borderColor: bgColor
      }"
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
    },
    // 自定义背景颜色
    bgColor: {
      type: String,
      default: ''
    },
    // 是否分开展示
    loose: {
      type: Boolean,
      default: false
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
  flex-wrap: wrap;
  #radius {
    border-radius: 4px;
  }
  .tab-item {
    height: 40px;
    border: 1px solid #ddd;
    border-right: none;
    background-color: #fff;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    color: #4c4c4c;
    text-overflow: ellipsis;
    word-break: keep-all;
    white-space: nowrap;
    margin-bottom: 8px;
    cursor: pointer;
    &:first-child {
      border-radius: 4px 0 0 4px;
    }
    &:last-child {
      border-right: 1px solid #ddd;
      border-radius: 0 4px 4px 0;
    }
    &:nth-child(8n) {
      border-right: 1px solid #ddd;
    }
    &.active {
      border-color: #3b77e3;
      background-color: #3b77e3;
      color: #fff;
    }
  }
  .tab-margin {
    margin-right: 8px;
    border: 1px solid #ddd;
    border-radius: 4px !important;
  }
}
</style>
