<template>
  <div>
    <div class="helpInfo">
      <div @click="changeList"
           v-if="listAll">
        <div v-for="(item) in listAll"
             :key="item.typeCode">
          <img :src="item.typeIcon"
               alt="">
          <h4 :data-tid="item.typeCode">{{item.typeName}}</h4>
          <p v-for="(title) in item.ccHelpTypeList"
             :key="title.typeCode"
             :data-cid="title.typeCode">
            {{title.typeName}}
          </p>
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
    const listAll = await app.$api.help.getRegionDetail()
    return {
      listAll: listAll.data.ccHelpTypeList
    }
  },
  data () {
    return {
      listAll: []
    }
  },
  props: {
    HelpTypeList: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
    console.log(this.listAll);
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
        path: `/pc/help/class/${e.path[0].dataset.cid}/${e.path[1].childNodes[0].dataset.tid}`,
      })
    },

  }
}
</script>

<style lang="scss" scoped>
.helpInfo {
  width: 100%;
  margin: 0;
  > div {
    width: 100%;
    display: flex;
    justify-content: space-around;
    > div {
      flex: 1;
    }
    > div:nth-child(1) {
      > h4 {
        background: url(https://www.ydidc.com/Uploads/2016-10-27/help_icon_7.png)
          no-repeat;
        background-size: 30px 30px;
        background-position: 0 5px;
      }
    }
    > div:nth-child(2) {
      > h4 {
        background: url(https://www.ydidc.com/Uploads/2016-10-27/help_icon_4.png)
          no-repeat;
        background-size: 30px 30px;
        background-position: 0 5px;
      }
    }
    > div:nth-child(3) {
      > h4 {
        background: url(https://www.ydidc.com/Uploads/2016-10-27/help_icon_1.png)
          no-repeat;
        background-size: 30px 30px;
        background-position: 0 5px;
      }
    }
    > div:nth-child(4) {
      > h4 {
        background: url(https://www.ydidc.com/Uploads/2016-10-27/help_icon_5.png)
          no-repeat;
        background-size: 30px 30px;
        background-position: 0 5px;
      }
    }

    > div {
      margin: 0 38px 0 20px;
      h4 {
        height: 42px;
        line-height: 42px;
        font-size: 18px;
        font-weight: 500;
        padding-left: 40px;
        margin-bottom: 0;
        // border-bottom: 1px solid #000;
      }
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
