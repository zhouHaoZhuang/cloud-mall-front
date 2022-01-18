<template>
  <div class="more-container">
    <div class="container">
      <div class="title">
        更多行业解决方案
        <div class="bootom-line" />
      </div>
      <div class="list">
        <div
          v-for="(item, index) in list"
          :key="index"
          :class="
            type === item.type
              ? `item item-none item${index + 1}`
              : `item item${index + 1}`
          "
        >
          <nuxt-link :to="item.path" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    type: {
      type: String,
      default: 'finance'
    }
  },
  data () {
    return {
      list: [
        {
          title: '金融云解决方案',
          type: 'finance',
          path: '/pc/programme/finance'
        },
        {
          title: '电商云解决方案',
          type: 'online',
          path: '/pc/programme/online'
        },
        {
          title: '游戏云解决方案',
          type: 'game',
          path: '/pc/programme/game'
        },
        {
          title: '网站云解决方案',
          type: 'website',
          path: '/pc/programme/website'
        },
        {
          title: '移动云解决方案',
          type: 'move',
          path: '/pc/programme/move'
        }
      ]
    }
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

<style lang="scss" scoped>
.more-container {
  background: #f2f5f9;
  .container {
    padding-left: 10px;
    .title {
      padding-top: 100px;
      padding-bottom: 100px;
      font-size: 36px;
      color: #333;
      text-align: center;
      .bootom-line {
        margin: 20px auto;
        width: 60px;
        height: 4px;
        background: #1d7aec;
      }
    }
    .list {
      display: flex;
      justify-content: space-between;
      .item {
        width: 22%;
        height: 330px;
        margin-bottom: 299px;
        padding-top: 55px;
        font-size: 16px;
        text-align: center;
        background-color: red;
        a {
          width: 100%;
          height: 100%;
          display: inline-block;
          color: #666;
        }
      }
      .item-none {
        display: none;
      }
      .item1 {
        background: url('~/static/img/programme/financeprogramme.png') no-repeat;
        background-size: cover;
      }
      .item2 {
        background: url('~/static/img/programme/onlineprogramme.png') no-repeat;
        background-size: cover;
      }
      .item3 {
        background: url('~/static/img/programme/gameprogramme.png') no-repeat;
        background-size: cover;
      }
      .item4 {
        background: url('~/static/img/programme/websiteprogramme.png') no-repeat;
        background-size: cover;
      }
      .item5 {
        background: url('~/static/img/programme/moveprogramme.png') no-repeat;
        background-size: cover;
      }
    }
  }
}
</style>
