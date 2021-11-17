<template>
  <div class="more-container">
    <div class="container">
      <div class="title">
        更多行业解决方案
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
          <a :href="item.path" target="_blank">
            <div class="bg-img" />
            <p class="item-title">
              {{ item.title }}
            </p>
          </a>
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
          title: '移动云解决方案',
          type: 'move',
          path: '/pc/programme/move'
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
          title: '电商云解决方案',
          type: 'online',
          path: '/pc/programme/online'
        },
        {
          title: '金融云解决方案',
          type: 'finance',
          path: '/pc/programme/finance'
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
  background: #f5f6f7;
  .container {
    padding-left: 10px;
    .title {
      padding-top: 80px;
      padding-bottom: 60px;
      font-size: 36px;
      color: #333;
      text-align: center;
    }
    .list {
      display: flex;
      .item {
        width: 25%;
        height: 180px;
        margin-bottom: 80px;
        font-size: 16px;
        text-align: center;
        a {
          width: 100%;
          height: 100%;
          display: inline-block;
          color: #666;
        }
        .bg-img {
          width: 60px;
          height: 60px;
          margin: 30px auto 20px;
          background: url('~/static/img/programme/fangan-sprite.png') no-repeat;
        }
        p {
          margin: 0;
        }
      }
      .item-none {
        display: none;
      }
      .item:hover {
        background: #fff;
        box-shadow: 8px 10px 16px rgba(0, 0, 0, 0.12);
        a {
          color: #059fff;
        }
      }
      .item1 {
        .bg-img {
          background-position: 0 0;
        }
      }
      .item1:hover {
        .bg-img {
          background-position: -60px 0;
        }
      }
      .item2 {
        .bg-img {
          background-position: 0 -120px;
        }
      }
      .item2:hover {
        .bg-img {
          background-position: -60px -120px;
        }
      }
      .item3 {
        .bg-img {
          background-position: 0 -180px;
        }
      }
      .item3:hover {
        .bg-img {
          background-position: -60px -180px;
        }
      }
      .item4 {
        .bg-img {
          background-position: 0 -240px;
        }
      }
      .item4:hover {
        .bg-img {
          background-position: -60px -240px;
        }
      }
      .item5 {
        .bg-img {
          background-position: 0 -60px;
        }
      }
      .item5:hover {
        .bg-img {
          background-position: -60px -60px;
        }
      }
    }
  }
}
</style>
