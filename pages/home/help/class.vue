<template>
  <div class="clas">
    <div class="claList">
      <div>
        <p
          @mouseenter="isShow = true"
          @mouseleave="isShow = false"
        >
          <span>{{ typeList.typeName }}</span>
          <img
            ref="imgs"
            src="https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/help/img/nav-list.svg"
            alt=""
          >
        </p>
        <ul>
          <li
            v-for="v in typeList.ccHelpTypeList"
            :key="v.typeCode"
            :class="atvNum == v.typeCode ? 'atvBlue' : ''"
            @click="checlass(v.typeCode)"
          >
            {{ v.typeName }}
          </li>
        </ul>
      </div>
      <div>
        <img
          src="https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/help/img/help_home.png"
          alt=""
        >
        <span>{{ title }}</span>
        <div>
          <div
            v-for="v in contextList"
            :key="v.id"
            class="context"
          >
            <h1>
              {{ v.title }}
            </h1>
            <p>{{ v.context }}</p>
          </div>
        </div>
      </div>
    </div>
    <div
      v-show="isShow"
      class="havList"
      @mouseenter="isShow = true"
      @mouseleave="isShow = false"
    >
      <HelpInfo :help-type-list="listAll" />
    </div>
  </div>
</template>

<script>
import HelpInfo from './helpInfo'
export default {
  components: {
    HelpInfo
  },
  // nuxt推荐请求方式
  async asyncData ({ app, params }) {
    // 获取全部帮助中心的列表数据
    const listAtv = await app.$api.help.getRegionDetail({ id: params.tid })
    const typeList =
      Array.isArray(listAtv.data.ccHelpTypeList) &&
      listAtv.data.ccHelpTypeList.length > 0
        ? listAtv.data.ccHelpTypeList[0]
        : {}
    const typeCentext = await app.$api.help.addressList({
      helpTypeCode: params.cid
    })
    const listAll = await app.$api.help.getRegionDetail()
    console.log(params.tid, params.cid, '帮助中心的列表数据')

    const newListAll = Array.isArray(listAll.data.ccHelpTypeList)
      ? listAtv.data.ccHelpTypeList
      : []
    return {
      typeList,
      contextList: typeCentext.data.list,
      listAll: newListAll,
      tid: params.tid
    }
  },
  data () {
    return {
      useNum: 0,
      isShow: false,
      atvNum: '',
      title: '',
      typeList: null,
      contextList: null,
      tid: ''
    }
  },
  watch: {
    isShow (val) {
      if (val) {
        this.$refs.imgs.src =
          'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/help/img/nav-list-active.svg'
      } else {
        this.$refs.imgs.src =
          'https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/help/img/nav-list.svg'
      }
    },
    // 监视搜索词变化
    '$route.params.cid': {
      immediate: true,
      handler (v) {
        // this.init(v)
      }
    }
  },
  mounted () {
    this.atvNum = this.$route.params.cid
    const title = this.typeList.ccHelpTypeList.find((v) => {
      return this.atvNum === v.typeCode
    })
    this.title = title.typeName
  },
  methods: {
    checlass (cid) {
      console.log(cid, 'cid')
      this.$router.push({
        path: `/pc/help/class/${cid}/${this.tid}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.claList {
  position: relative;
  top: -70px;
  width: 1220px;
  display: flex;
  background-color: rgb(255, 255, 255);
  > div:nth-child(1) {
    background-color: rgb(245, 246, 247);
    width: 220px;
    //   height: 643px;

    //   display: flex;

    > p:hover {
      color: rgb(5, 159, 255);
    }
    > p {
      height: 50px;
      line-height: 50px;
      width: 100%;
      padding-left: 35px;
      font-weight: bold;
      font-size: 14px;
      margin: 0;
      border-bottom: 1px solid rgb(229 229 229);
      // background-color: rgb(255, 243, 70);
      > img {
        width: 30px;
        height: 30px;
        margin-left: 70px;
      }
    }
    > ul {
      margin: 0;
      > li {
        height: 50px;
        line-height: 50px;
        width: 100%;
        padding-left: 30px;
        border-bottom: 1px solid rgb(229 229 229);
        border-left: 5px solid transparent;
      }
      .atvBlue {
        color: rgb(0 136 255);
        border-left: 5px solid rgb(0 136 255);
      }
    }
  }
  > div:nth-child(2) {
    height: 50px;
    line-height: 50px;
    > img {
      margin-left: 30px;
      margin-right: 12px;
    }
  }
}
.clas {
  position: relative;
}
.havList {
  width: 1000px;
  height: 254px;
  position: absolute;
  top: -70px;
  right: 70px;
  border: 1px solid rgb(230, 230, 230);
  background-color: #fff;
}
.context {
  margin-left: 20px;
  padding-left: 20px;
  h1 {
    height: 30px;
  }
  p {
    width: 950px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
