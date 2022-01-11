<template>
  <div>
    <div class="helpInfo">
      <h3><span>首页></span><a href="">帮助中心</a></h3>
      <div
        v-if="listAll"
        class="helpInfo-listall"
        @click="changeList"
      >
        <div
          v-for="item in listAll"
          :key="item.typeCode"
        >
          <div
            :style="`background: url(${item.typeIcon}) no-repeat;`"
            class="img-typeIcon"
            @mousemove="item.isShow = true"
            @mouseout="item.isShow = false"
          >
            <h4
              :data-tid="item.typeCode"
              class="img-typeIcon"
            >
              {{ item.typeName }}
            </h4>
          </div>
          <div
            v-show="item.isShow"
            class="subtype"
          >
            <p
              v-for="title in item.ccHelpTypeList"
              :key="title.typeCode"
              :data-cid="title.typeCode"
            >
              {{ title.typeName }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    HelpTypeList: {
      type: Array,
      default: () => []
    }
  },
  // nuxt推荐请求方式
  async asyncData ({ app }) {
    // 获取全部帮助中心的列表数据
    let listAll = await app.$api.help.getRegionDetail()
    listAll = listAll.data.ccHelpTypeList
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
  mounted () {
    console.log(this.listAll, 'asjaksjaksjaksjkak')
    if (this.HelpTypeList.length > 0) {
      this.listAll = this.HelpTypeList
    }
  },
  methods: {
    changeList (e) {
      if (e.path[0].localName !== 'p') {
        return
      }
      this.$router.push({
        path: `/pc/help/class/${e.path[0].dataset.cid}/${e.path[1].childNodes[2].dataset.tid}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.helpInfo {
  width: 100%;
  margin: 0;
  h3 {
    height: 40px;
  }
  .helpInfo-listall {
    padding-top: 80px;
  }
  > div {
    width: 100%;
    display: flex;
    justify-content: space-around;
    > div {
      flex: 1;
    }
    > div {
      position: relative;
      .img-typeIcon {
        height: 200px;
        background-color: #0006;
        h4 {
          height: 200px;
          line-height: 200px;
          font-size: 24px;
          font-weight: bold;
          color: #fff;
          text-align: center;
        }
      }
      .subtype {
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    > div {
      margin: 0 38px 0 20px;
      p {
        border-bottom: 1px solid rgb(221 221 221);
        margin-left: 40px;
        margin-bottom: 0;
        height: 39px;
        line-height: 39px;
        color: #000;
      }
      p:hover {
        color: rgb(5 159 255);
        cursor: pointer;
        background-color: rgb(250, 250, 250);
      }
      p:nth-child(2) {
        border-top: 1px solid rgb(221, 221, 221);
      }
    }
    > div:nth-child(4) {
      margin: 0;
    }
  }
}
</style>
