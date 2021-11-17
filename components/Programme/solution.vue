<template>
  <div class="solution-container">
    <div class="container">
      <div class="title">
        {{ solutionData.title }}
      </div>
      <div
        class="solution-box"
        :style="`background:url(${solutionData.bg}) no-repeat;${solutionData.height}`"
      >
        <div class="info-box" :style="solutionData.infoWidth">
          <p v-for="(item, index) in solutionData.infoList" :key="index">
            {{ item }}
          </p>
          <div class="btn">
            在线咨询
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    solutionData: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.solution-container {
  .container {
    padding-left: 10px;
    .title {
      padding-top: 80px;
      padding-bottom: 60px;
      font-size: 36px;
      color: #555;
      text-align: center;
    }
    .solution-box {
      .info-box {
        float: right;
        padding: 25px;
        font-size: 14px;
        color: #666;
        text-indent: 2em;
        background-color: #fff;
        p {
          line-height: 32px;
          margin: 0;
        }
        .btn {
          width: 120px;
          height: 35px;
          line-height: 35px;
          margin-top: 35px;
          text-align: center;
          font-size: 16px;
          color: #fff;
          text-indent: 0;
          border-radius: 4px;
          background-color: #059fff;
        }
      }
    }
  }
}
</style>
