<template>
  <div class="clas">
    <div class="claList">
      <div>
        <p @mouseenter="isShow = true" @mouseleave="isShow = false">
          <span>{{ helpList[useNum].title }}</span>
          <img
            ref="imgs"
            src="https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/help/img/nav-list.svg"
            alt=""
          >
        </p>
        <ul>
          <li
            v-for="v in helpList[useNum].list"
            :key="v.cid"
            :class="atvNum === v.cid ? 'atvBlue' : ''"
            @click="checlass(v.cid)"
          >
            {{ v.name }}
          </li>
        </ul>
      </div>
      <div>
        <img
          src="https://www.ydidc.com/template/Home/Zkeys/PC/Static/css/module/help/img/help_home.png"
          alt=""
        >
        <span>{{ title }}</span>
      </div>
    </div>
    <div
      v-show="isShow"
      class="havList"
      @mouseenter="isShow = true"
      @mouseleave="isShow = false"
    >
      <helpInfo />
    </div>
  </div>
</template>

<script>
import helpInfo from './helpInfo.vue'
export default {
  components: {
    helpInfo
  },
  data () {
    return {
      helpList: [
        {
          title: '注册与购买',
          list: [
            {
              cid: 5,
              name: '账户问题'
            },
            {
              cid: 6,
              name: '选购指南'
            },
            {
              cid: 7,
              name: '付款结算'
            },
            {
              cid: 8,
              name: '合同及发票'
            }
          ]
        },
        {
          title: '备案问题',
          list: [
            {
              cid: 15,
              name: '备案指南'
            },
            {
              cid: 16,
              name: '管局备案要求'
            },
            {
              cid: 17,
              name: '前置审批说明'
            },
            {
              cid: 21,
              name: '法律法规'
            }
          ]
        },
        {
          title: '云服务问题',
          list: [
            {
              cid: 10,
              name: '控制台使用'
            },
            {
              cid: 11,
              name: '基础类问题'
            },
            {
              cid: 12,
              name: '应用类问题'
            },
            {
              cid: 13,
              name: '网络类问题'
            },
            {
              cid: 14,
              name: '安全类问题'
            }
          ]
        },
        {
          title: '使用规则',
          list: [
            {
              cid: 23,
              name: '常见问题'
            },
            {
              cid: 24,
              name: '规则说明'
            },
            {
              cid: 30,
              name: '总则'
            },
            {
              cid: 31,
              name: '信息安全处罚规则'
            },
            {
              cid: 32,
              name: '法律法规'
            }
          ]
        }
      ],
      useNum: 0,
      isShow: false,
      atvNum: 0,
      title: ''
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
    $route (to, from) {
      console.log(to)
    },
    // 监视搜索词变化
    '$route.params.cid': {
      immediate: true,
      handler (v) {
        this.init(v)
      }
    }
  },
  created () {
    this.init(this.$route.params.cid)
  },
  methods: {
    checlass (cid) {
      this.atvNum = cid
      const title = this.helpList[this.useNum].list.find((v) => {
        return this.atvNum == v.cid
      })
      this.title = title.name
    },
    init (id) {
      const cid = id
      // console.log(cid)
      this.atvNum = cid * 1
      if (this.atvNum == 5 || this.atvNum ==6 || this.atvNum ==7 || this.atvNum ==8) {
        this.useNum = 0
      } else if (this.atvNum == 15 || this.atvNum ==16 || this.atvNum ==17 || this.atvNum ==21) {
        this.useNum = 1
      } else if (this.atvNum == 10 || this.atvNum ==11 || this.atvNum ==12 || this.atvNum ==13 || this.atvNum ==14) {
        this.useNum = 2
      } else if (this.atvNum == 23 || this.atvNum ==24 ||this.atvNum ==30 || this.atvNum ==31 || this.atvNum ==32) {
        this.useNum = 3
      }
      const title = this.helpList[this.useNum].list.find((v) => {
        return this.atvNum == v.cid
      })
      // console.log(this.useNum,this.atvNum);
      this.title = title.name
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
        padding-left: 35px;
        border-bottom: 1px solid rgb(229 229 229);
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
  //   width: 1220px;
  //   display: flex;
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
</style>
