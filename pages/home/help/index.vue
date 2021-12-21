<template>
  <div>
    <div class="titletop">
      <div>
        <div>
          <div>
            <input v-model="keyWords"
                   type="text"
                   placeholder="请输入您要搜索的关键词...">
          </div>
          <div class="search"
               @click="search" />
        </div>
        <ul>
          <li v-for="(item) in hotAll"
              :key="item.id">{{item.keyWords}}</li>
        </ul>
      </div>
    </div>
    <div class="helpInfo">
      <router-view :key="$route.params.cid">
      </router-view>
    </div>
  </div>
</template>

<script>
export default {
  // nuxt推荐请求方式
  async asyncData ({ app }) {
    // 获取全部帮助中心的列表数据
    const listAll = await app.$api.help.getRegionDetail()
    const hotAll = await app.$api.help.getHot()
    // console.log(hotAll, 'hotAll');
    return {
      listAll: listAll.data.ccHelpTypeList,
      hotAll: hotAll.data.list
    }
  },
  data () {
    return {
      listAll: null,
      hotAll: null,
      keyWords: ''
    }
  },
  mounted () {

  },
  methods: {
    search () {
      this.$router.push({
        path: '/pc/help/search',
        query: {
          keyWords: this.keyWords
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.titletop {
  background-image: url(https://www.ydidc.com/template/Home/Zkeys/PC/Static/statics/images/help/banner.jpg);
  height: 362px;
  padding-top: 175px;
  position: relative;
  min-width: 1220px;
  background-position: -155px 0;
  > div {
    width: 1000px;
    height: 87px;
    margin: 0 auto;
    // border: 1px solid #ffffff;
    // text-align: center;
    > div {
      display: flex;
      width: 800px;
      margin: 0 auto;
      justify-content: space-between;
      .search {
        background: url(https://www.ydidc.com/template/Home/Zkeys/PC/Static/statics/images/help/search.png)
          no-repeat;
        border: 0;
        height: 46px;
        width: 120px;
        background-color: rgb(5 159 255);
        background-position: 48px 10px;
      }
    }
    > ul {
      display: flex;
      width: 800px;
      margin: 12px auto 0;
      li {
        color: rgb(5 159 255);
        margin-right: 20px;
      }
    }
    > ul:before {
      content: '搜索热词：';
      float: left;
      height: 25px;
      color: rgb(153 153 153);
    }
    input {
      width: 636px;
      height: 46px;
      padding: 0 20px;
      border: 2px solid rgb(5 159 255);
      background-color: #fff;
    }
    input:focus {
      outline: none;
    }
  }
}
.helpInfo {
  width: 1290px;
  // height: 432px;
  margin: 0 auto 85px;
  padding-top: 110px;
  // padding-left: -20px;
}
</style>
