<template>
  <div>
    <div class="titletop">
      <div>
        <h1 class="help-center">
          帮助中心
        </h1>
        <div>
          <div class="search-input">
            <input
              v-model="keyWords"
              type="text"
              placeholder="请输入您要搜索的关键词..."
            >
          </div>
          <!-- icon-31sousuo -->
          <Iconfont @click="search" class="search" type="icon-31sousuo" />
        </div>
        <ul>
          <li
            v-for="item in hotAll"
            :key="item.id"
            @click="searchLi(item.keyWords)"
          >
            {{ item.keyWords }}
          </li>
        </ul>
      </div>
    </div>
    <div>
      <router-view :key="$route.query.keyWords" />
    </div>
  </div>
</template>

<script>
export default {
  // nuxt推荐请求方式
  async asyncData ({ app }) {
    // 获取全部帮助中心的列表数据
    // const listAll = await app.$api.help.getRegionDetail()
    let hotAll = await app.$api.help.getHot()
    // listAll = listAll.data ? listAll.data.ccHelpTypeList : []
    hotAll = hotAll.data ? hotAll.data.list : []
    return {
      hotAll
    }
  },
  data () {
    return {
      hotAll: null,
      keyWords: ''
    }
  },
  mounted () {
    this.hotAll = this.hotAll.splice(0, 5)
    // console.log(this.listAll, 'listAll')
  },
  methods: {
    search () {
      console.log(this.keyWords, '搜索')
      this.$router.push({
        path: '/help/classInfo',
        query: {
          keyWords: this.keyWords
        }
      })
    },
    searchLi (keyWords) {
      this.keyWords = keyWords
      this.search()
    }
  }
}
</script>
<style lang="scss" scoped>
.titletop {
  background: url('https://ydidc-test.oss-cn-shanghai.aliyuncs.com/idc-mall/help/helptitle.png') no-repeat;
  background-size: 110% 100%;
  height: 580px;
  padding-top: 175px;
  position: relative;
  min-width: 1220px;
  background-position: -155px 0;
  .help-center {
    font-size: 36px;
    color: #fff;
    font-weight: bold;
    margin-left: 50px;
    text-align: center;
    margin-bottom: 30px;
  }
  > div {
    width: 1000px;
    height: 87px;
    margin: 0 auto;
    > div {
      width: 800px;
      margin: 0 auto;
      position: relative;
      justify-content: space-between;
      .search-input {
        height: 60px;
        text-align: center;
        line-height: 60px;
        border-radius: 30px;
      }
      .search {
        position: absolute;
        font-size: 30px;
        color: #1D7AEC;
        right: 25px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
      }
    }
    > ul {
      display: flex;
      width: 800px;
      margin: 12px auto 0;
      li {
        color: #059FFF;
        margin-right: 20px;
        width: 100px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    > ul:before {
      content: '搜索热词：';
      float: left;
      height: 25px;
      color: #999999;
    }
    input {
      width: 100%;
      height: 100%;
      padding: 0 20px;
      border-radius: 30px;
      background-color: #fff;
      border: 2px solid transparent;
    }
    input:focus {
      outline: none;
      border: 2px solid #059FFF;
    }
  }
}
</style>
