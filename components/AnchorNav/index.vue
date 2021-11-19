<template>
  <!-- 锚点导航 -->
  <div class="nav-wrap">
    <div class="container">
      <ul class="list">
        <li
          v-for="(item, index) in navData"
          :key="index"
          @click="handleNavJump(item)"
        >
          <span :class="navSelectIndex === index ? 'active' : ''">{{
            item.title
          }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    navData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      navSelectIndex: 0
    }
  },
  mounted () {
    this.getElementDetail()
  },
  methods: {
    // 锚点导航点击
    handleNavJump (item) {
      const nodeEle = document.querySelector(`#${item.id}`)
      nodeEle.scrollIntoView({
        block: 'start',
        top: '80px',
        behavior: 'smooth'
      })
      console.log('导航点击', item, nodeEle)
    },
    // 获取所有需要锚点跳转元素
    getElementDetail () {
      const result = []
      this.navData.forEach((ele) => {
        result.push(document.querySelector(`#${ele.id}`))
      })
      console.log('最终获取的元素是', result)
      result.forEach((ele) => {
        console.log('获取的元素的位置信息', ele.scrollTop)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-wrap {
  height: 68px;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #eee;
  background: #fff;
  .container {
    .list {
      display: flex;
      height: 68px;
      justify-content: space-around;
      transition: all ease 0.8s;
      li {
        height: 66px;
        margin-right: 5px;
        cursor: pointer;
        span {
          display: block;
          height: 68px;
          line-height: 68px;
          padding: 0 10px;
          font-size: 14px;
          color: #4c4c4c;
          &.active {
            border-bottom: 2px solid #059fff;
          }
        }
        span:hover {
          border-bottom: 2px solid #059fff;
        }
      }
    }
  }
}
</style>
