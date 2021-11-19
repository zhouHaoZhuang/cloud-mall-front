<template>
  <div>
    <div class="helpInfo">
      <div>
        <div>
          <h4>注册与购买</h4>
          <p>账户问题</p>
          <p>选购指南</p>
          <p>付款结算</p>
          <p>合同及发票</p>
        </div>
        <div>
          <h4>备案问题</h4>
          <p>备案指南</p>
          <p>管局备案要求</p>
          <p>前置审批说明</p>
          <p>法律法规</p>
        </div>
        <div>
          <h4>云服务问题</h4>
          <p>控制台使用</p>
          <p>基础类问题</p>
          <p>应用类问题</p>
          <p>网络类问题</p>
          <p>安全类问题</p>
        </div>
        <div>
          <h4>使用规则</h4>
          <p>常见问题</p>
          <p>规则说明</p>
          <p>总则</p>
          <p>信息安全处罚规则</p>
          <p>法律法规</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  .helpInfo{
      width: 100%;
      >div{
          width: 100%;
          display: flex;
          justify-content: space-around;
          >div:nth-child(1){
              background-image: url(https://www.ydidc.com/Uploads/2016-10-27/help_icon_7.png) no-repeat;
              h4{

              }
          }
      }
  }
</style>
