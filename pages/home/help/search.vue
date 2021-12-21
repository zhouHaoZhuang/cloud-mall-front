<template>
  <div class="help-search-container">
    <h1 class="help-search-top">
      <img src="https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/help/img/help_home.png"
           alt=""><span>搜索</span><span>"{{keyWords}}"</span>
    </h1>
    <div class="help-search-info">
      <ul>
        <li class="liatv">全部(0)</li>
        <li>帮助文档(0)</li>
        <li>新闻中心(0)</li>
      </ul>
      <div>
        <div v-for="(item) in listAll"
             :key='item.id'>
          <h1>{{item.title}}</h1>
          <p class="help-search-centext">{{item.context}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  async asyncData ({ query, app }) {
    const keyWords = query.keyWords
    const listAll = await app.$api.help.getSearchList({ keyWords })
    // console.log(listAll, '搜索获取的数据');
    return {
      listAll: listAll.data,
      keyWords,
    }
  },
  data () {
    return {
      listAll: null,
      keyWords: '',
    }
  },
  mounted () {
    // console.log(this.listAll, '搜索');
  },

}
</script>

<style lang='scss' scoped>
.help-search-container {
  padding-left: 80px;
  margin-bottom: 100px;
  .help-search-top {
    margin-bottom: 20px;
    img {
      width: 20px;
      height: 16px;
      margin-right: 10px;
    }
    color: #666;
    display: flex;
    align-items: center;
  }
  .help-search-info {
    ul {
      display: flex;
      color: #333;
      border-bottom: 1px solid #e1e4e6;
      li {
        padding: 0 32px;
        font-size: 16px;
        height: 55px;
        margin-right: 10px;
        line-height: 55px;
        border-bottom: 2px solid transparent;
      }
      li:hover {
        border-bottom-color: #0af;
        color: #0af;
      }
      .liatv {
        border-bottom-color: #0af;
        color: #0af;
      }
    }
  }
  .help-search-centext {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
  }
}
</style>