<template>
  <div class="header-item">
    <div class="top-title">
      <img v-if="itemData.iconimg" :src="itemData.iconimg" alt="">
      <span>
        {{ itemData.title }}
      </span>
    </div>
    <div class="con-list">
      <div
        v-for="(item, index) in itemData.list"
        :key="index"
        :class="{ item: true, 'item-two': hoverIndex === 1 }"
      >
        <span v-if="item.title === '阿里云'" class="right-after" />
        <a :href="item.path">
          <div class="item-top">
            <span>{{ item.title }}</span>
            <img
              v-if="item.iconimg"
              width="20px"
              style="margin-left: 10px"
              :src="item.iconimg"
              alt=""
            >
            <div v-if="item.hot" class="hot-img" />
            <div v-if="item.new" class="new-img" />
          </div>
          <!-- <span class="info">{{ item.info }}</span> -->
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
    },
    hoverIndex: {
      type: Number,
      default: () => {}
    }
  },
  data () {
    return {}
  },
  mounted () {},
  methods: {}
}
</script>

<style lang="scss" scoped="scoped">
.header-item {
  // width: 15%;
  margin: 0 0 0 5%;
  font-size: 16px;
  // border: 1px solid #59ff2f;
  color: #fff;
  .top-title {
    display: flex;
    align-items: center;
    height: 16px;
    color: #ffffff;
    margin-bottom: 16px;
    font-size: 19px;
    font-weight: 500;
    img {
      margin-right: 10px;
      width: 25px;
      height: 20px;
    }
  }
  .con-list {
    .item {
      // width: 100%;
      margin-bottom: 16px;
      margin-left: 35px;
      // background: #2b3033;
      // padding: 16px;
      // border: 1px solid #2b3033;
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
        margin-top: 5px;
        position: relative;
        display: flex;
        align-items: center;
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
    .item-two {
      margin-left: 0px;
      position: relative;
    }

    .item:hover {
      a {
        color: #ffffff;
      }
      border-bottom: 1px solid #fafafa;
      .info {
        color: #059fff;
      }
    }
    // .item:hover::after {
    //   content: '';
    //   display: block;
    //   height: 6px;
    //   background: #3b77e3;
    //   border-radius: 100px 100px 0px 0px;
    // }
  }
}
.right-after {
  content: '';
  position: absolute;
  width: 1px;
  height: 30px;
  background: #ffffff;
  opacity: 0.2;
  z-index: 1;
  right: -38px;
  top: -26px;
}
</style>
