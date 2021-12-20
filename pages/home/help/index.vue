<template>
  <div>
    <div class="titletop">
      <div>
        <div>
          <div>
            <input type="text"
                   placeholder="请输入您要搜索的关键词...">
          </div>
          <div class="search"
               @click="search" />
        </div>
        <ul>
          <li>云服务器</li>
          <li>域名注册</li>
          <li>虚拟主机</li>
          <li>服务器租用</li>
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
  data () {
    return {}
  },
  methods: {
    search () {
      this.$router.push({
        path: '/pc/help/search'
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
