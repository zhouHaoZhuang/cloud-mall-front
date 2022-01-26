<template>
  <div>
    <h2>
      <a-icon type="home" />
      <nuxt-link to="/pc">
        首页
      </nuxt-link>
      <span><a-icon type="right" /></span>
      <nuxt-link to="/pc/help/helpInfo">
        {{ LeveltwoTitle }}
      </nuxt-link>
      <span><a-icon type="right" /></span>
      <a @click="typeCentexthtml = false">{{ LevelthreeTitle }}</a>
    </h2>
    <client-only>
      <div v-if="!typeCentexthtml">
        <div v-if="typeCentext" class="typeCentext-list">
          <h3
            v-for="(item, index) in typeCentext"
            :key="index"
            @click="typeCentexthtml = item"
          >
            <a-icon type="file-text" theme="twoTone" />
            <span>
              {{ item.title }}
            </span>
          </h3>
        </div>
        <div v-else class="typeCentext-list">
          未获取到内容
        </div>
        <div class="pager">
          <a-pagination
            v-model="listQuery.currentPage"
            :total="listQuery.total"
            show-less-items
            @change="currentPageChange"
          />
        </div>
      </div>
      <div v-if="typeCentexthtml" class="typeCentext-html">
        <h2>{{ typeCentexthtml.title }}</h2>
        <p v-html="typeCentexthtml.context" />
        <div>
          <p>
            {{ typeCentexthtml.createTime.replace('T', ' ').slice(0, 10) }}
          </p>
          <p>发布者:{{ typeCentexthtml.createUserName }}</p>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  // nuxt推荐请求方式
  async asyncData ({ app, query }) {
    // 点击目录的时候获取目录下的内容
    let typeCentext = await app.$api.help.addressList({
      helpTypeCode: query.helpTypeCode,
      ...app.listQuery
    })
    console.log(typeCentext, '点击目录的时候获取目录下的内容')
    const total = typeCentext.data ? typeCentext.data.totalCount * 1 : 0
    typeCentext = typeCentext.data.list
    const keyWords = query.keyWords
    if (keyWords) {
      // 如果有关键字，则按关键字搜索
      const SearchList = await app.$api.help.getSearchList({ keyWords })
      typeCentext = SearchList.data
    }
    return {
      typeCentext,
      total
    }
  },
  data () {
    return {
      typeCentext: null,
      listQuery: {
        helpTypeCode: '',
        currentPage: 1,
        pageSize: 24,
        total: 0
      },
      LeveltwoTitle: '',
      LevelthreeTitle: '',
      typeCentexthtml: null
    }
  },
  mounted () {
    this.listQuery.total = this.total
    this.listQuery.helpTypeCode = this.$route.query.helpTypeCode
    this.LeveltwoTitle = this.$route.query.LeveltwoTitle
    this.LevelthreeTitle = this.$route.query.LevelthreeTitle
    if (this.$route.query.keyWords) {
      // 如果有关键字，则按关键字搜索
      console.log(this.$route.query.keyWords, '关键字')
      this.getDetail()
    }
  },
  methods: {
    currentPageChange (currentPage) {
      this.listQuery.currentPage = currentPage
      this.getList()
    },
    // 获取搜索列表
    async getDetail () {
      const SearchList = await this.$api.help.getSearchList({
        keyWords: this.$route.query.keyWords
      })
      console.log(SearchList, '搜索列表lllllllllllllllllll')
      this.typeCentext = SearchList.data
    },
    // 获取目录列表
    getList () {
      this.$api.help.addressList(this.listQuery).then((res) => {
        this.typeCentext = res.data.list
        this.listQuery.total = res.data.totalCount * 1
      })
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  padding: 20px 305px;
  img {
    margin-top: -5px;
    margin-right: 5px;
  }
}
.typeCentext-list {
  padding: 20px 305px;
  background: url('../../../static/img/help/helpwordbj.png') no-repeat;
  width: 100%;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  h3 {
    width: 30%;
    height: 40px;
    background-color: #fff;
    padding: 3px 10px;
    margin: 0;
    display: flex;
    align-items: center;
    box-shadow: 0px 2px 10px 0px #0000000f;
    img {
      margin-right: 10px;
    }
  }
}
.pager {
  padding: 20px 305px;
  text-align: right;
}
.typeCentext-html {
  padding: 20px 305px;
  margin-bottom: 60px;
  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #333333;
  }
  div {
    margin-top: 50px;
    p {
      text-align: right;
    }
  }
}
</style>
