<template>
  <div
    :class="itemData.disable ? 'product-item product-disable' : 'product-item'"
    @click="handleClickJump(itemData.path)"
  >
    <div :class="`left-icon iconfont ${itemData.icon}`" />
    <div class="right-con">
      <div class="item-top">
        <span>{{ itemData.title }}</span>
        <div v-if="itemData.hot" class="hot-img" />
      </div>
      <span class="info">{{ itemData.info }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemData: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {}
  },
  methods: {
    // 点击跳转
    handleClickJump (path) {
      if (!path) {
        return
      }
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
.product-item {
  color: #fff;
  display: flex;
  width: 301px;
  padding: 18px 0 18px 20px;
  height: 82px;
  .left-icon {
    font-size: 22px;
    margin-right: 14px;
  }
  .right-con {
    .item-top {
      display: inline-block;
      margin-bottom: 2px;
      position: relative;
      span {
        font-size: 18px;
        display: block;
      }
      div {
        position: absolute;
        right: -38px;
        top: 50%;
        transform: translateY(-40%);
        width: 30px;
        height: 18px;
        background: url('~/static/img/home/product-hot.png') no-repeat center;
      }
    }
    .info {
      font-size: 12px;
      display: block;
    }
  }
  &:hover {
    background: #6864e7;
  }
}
.product-disable {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
