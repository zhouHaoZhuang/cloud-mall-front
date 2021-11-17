<template>
  <div class="header-item">
    <div class="top-title">
      {{ itemData.title }}
    </div>
    <div class="con-list">
      <div v-for="(item, index) in itemData.list" :key="index" class="item">
        <a :href="item.path">
          <div class="item-top">
            <span>{{ item.title }}</span>
            <div v-if="item.hot" class="hot-img" />
            <div v-if="item.new" class="new-img" />
          </div>
          <span class="info">{{ item.info }}</span>
        </a>
      </div>
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
.header-item {
  width: 23.5%;
  margin-left: 2%;
  color: #fff;
  .top-title {
    height: 16px;
    color: #7a8185;
    margin-bottom: 16px;
  }
  .con-list {
    .item {
      width: 100%;
      margin-bottom: 16px;
      background: #2b3033;
      padding: 16px;
      border: 1px solid #2b3033;
      a {
        display: block;
        width: 100%;
        height: 100%;
        color: #fff;
        transition: 0s;
      }
      .item-top {
        display: inline-block;
        margin-bottom: 5px;
        position: relative;
        div {
          position: absolute;
          right: -38px;
          top: 1px;
          width: 30px;
          height: 18px;
          background: url('~/static/img/home/nav_item_icon.png') no-repeat
            center;
        }
        .hot-img {
          background-position: 0 0;
        }
        .new-img {
          background-position: 0 -20px;
        }
      }
      .info {
        font-size: 12px;
        color: #7a8185;
        display: block;
      }
    }
    .item:hover {
      a {
        color: #059fff;
      }
      border: 1px solid #059fff;
      .info {
        color: #059fff;
      }
    }
  }
}
</style>
