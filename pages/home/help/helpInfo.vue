<template>
  <div>
    <div class="helpInfo">
      <h3>
        <img
          width="15px"
          src="~/static/img/help/frontpagelogo.png"
          alt=""
        ><span>首页></span><a href="">帮助中心</a>
      </h3>
      <div v-if="listAll" class="helpInfo-listall">
        <div
          v-for="item in listAll"
          :key="item.typeCode"
          @mouseleave="item.isShow = false"
        >
          <transition name="slide">
            <div
              v-show="!item.isShow"
              :style="`background: url(${item.typeIcon}) no-repeat;background-size: cover;`"
              class="img-typeIcon"
              @mouseenter="item.isShow = true"
            >
              <h4 :data-tid="item.typeCode">
                {{ item.typeName }}
              </h4>
            </div>
          </transition>
          <transition name="bounce">
            <div
              v-show="item.isShow"
              class="subtype"
              @mouseleave="item.isShow = false"
            >
              <img
                class="backgro-img"
                src="~/static/img/help/Subscript.png"
                alt=""
              >
              <span
                v-for="title in item.ccHelpTypeList"
                :key="title.typeCode"
                @click="
                  changeList(title.typeCode, item.typeName, title.typeName)
                "
              >
                <img width="20px" height="20px" :src="title.typeIcon" alt="">
                {{ title.typeName }}
              </span>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // nuxt推荐请求方式
  async asyncData ({ app }) {
    // 获取全部帮助中心的列表数据
    let listAll = await app.$api.help.getRegionDetail({ code: 'help_type_01' })
    listAll = listAll.data ? listAll.data.ccHelpTypeList : []
    for (let index = 0; index < listAll.length; index++) {
      const element = listAll[index]
      element.isShow = false
    }
    console.log(listAll, '帮助中心的列表数据')
    return {
      listAll
    }
  },
  data () {
    return {
      listAll: []
    }
  },
  methods: {
    changeList (helpTypeCode, LeveltwoTitle, LevelthreeTitle) {
      this.$router.push({
        path: '/pc/help/classInfo',
        query: {
          helpTypeCode,
          LeveltwoTitle,
          LevelthreeTitle
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.slide-enter-active {
  animation: slide-in 0.2s;
}
.slide-leave-active {
  animation: slide-in 0.2s reverse;
}
@keyframes slide-in {
  0% {
    transform: translateY(-200px);
  }
  100% {
    transform: translateY(0px);
  }
}
.bounce-enter-active {
  animation: bounce-in 0.2s;
}
.bounce-leave-active {
  animation: bounce-in 0.2s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-200px);
  }
}
.helpInfo {
  width: 1290px;
  margin: 30px auto;
  background-color: #fff;
  h3 {
    height: 40px;
    img {
      margin-top: -5px;
      margin-right: 5px;
    }
  }
  .helpInfo-listall {
    padding-top: 80px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    overflow: hidden;
    height: 281px;
    > div {
      flex: 1;
      overflow: hidden;
      height: 327px;
      margin: 0 38px 0 20px;
      .img-typeIcon {
        height: 200px;
        h4 {
          height: 200px;
          line-height: 200px;
          font-size: 24px;
          background-color: #0006;
          font-weight: bold;
          color: #fff;
          text-align: center;
        }
      }
      .subtype {
        background: url("../../../static/img/help/helpTypebj.png") no-repeat;
        width: 100%;
        height: 200px;
        display: flex;
        flex-wrap: wrap;
        position: relative;
        padding: 20px 30px;
        align-content: flex-start;
        .backgro-img {
          width: 95%;
          height: 90%;
          position: absolute;
          z-index: 0;
          top: 10px;
          left: 10px;
        }
        span {
          display: block;
          position: relative;
          z-index: 1;
          width: 50%;
          height: 30px;
          line-height: 30px;
          font-size: 16px;
          color: #fff;
        }
      }
    }
  }
}
</style>
