<template>
  <div>
    <div class="helpInfo">
      <div @click="changeList">
        <div>
          <h4>注册与购买</h4>
          <p data-cid="5">
            账户问题
          </p>
          <p data-cid="6">
            选购指南
          </p>
          <p data-cid="7">
            付款结算
          </p>
          <p data-cid="8">
            合同及发票
          </p>
        </div>
        <div>
          <h4>备案问题</h4>
          <p data-cid="15">
            备案指南
          </p>
          <p data-cid="16">
            管局备案要求
          </p>
          <p data-cid="17">
            前置审批说明
          </p>
          <p data-cid="21">
            法律法规
          </p>
        </div>
        <div>
          <h4>云服务问题</h4>
          <p data-cid="10">
            控制台使用
          </p>
          <p data-cid="11">
            基础类问题
          </p>
          <p data-cid="12">
            应用类问题
          </p>
          <p data-cid="13">
            网络类问题
          </p>
          <p data-cid="14">
            安全类问题
          </p>
        </div>
        <div>
          <h4>使用规则</h4>
          <p data-cid="23">
            常见问题
          </p>
          <p data-cid="24">
            规则说明
          </p>
          <p data-cid="30">
            总则
          </p>
          <p data-cid="31">
            信息安全处罚规则
          </p>
          <p data-cid="32">
            法律法规
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeList (e) {
      if (e.path[0].localName !== 'p') {
        return
      }
      console.log(e.path[0].localName)
      console.log(e.path[0].dataset.cid)
      this.$router.push({
        path: `/pc/help/class/${e.path[0].dataset.cid}`,
      })
    }
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
