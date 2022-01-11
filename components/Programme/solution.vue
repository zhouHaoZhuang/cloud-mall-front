<template>
  <div class="solution-container">
    <div class="container">
      <div class="title">
        {{ solutionData.title }}
        <div class="bootom-line" />
      </div>
      <div class="solution-box">
        <div
          class="img-box"
          :style="`${solutionData.bg};${solutionData.height}`"
        />
        <div class="info-box" :style="solutionData.infoWidth">
          <div v-if="solutionData.infoTitle" class="infoTitle">
            {{ solutionData.infoTitle }}
          </div>
          <p v-for="(item, index) in solutionData.infoList" :key="index">
            {{ item }}
          </p>
          <div class="info-img" />
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
  height: 910px;
  background-color: #fff;
  .container {
    padding-left: 10px;
    .title {
      padding-top: 140px;
      padding-bottom: 80px;
      font-size: 36px;
      color: #333;
      font-weight: bold;
      text-align: center;
      .bootom-line {
        margin: 20px auto;
        width: 60px;
        height: 4px;
        background: #1d7aec;
      }
    }
    .solution-box {
      display: flex;
      justify-content: space-between;
      .img-box {
        width: 570px;
        background-size: cover !important;
      }
      .info-box {
        width: 610px;
        float: right;
        padding: 25px;
        font-size: 14px;
        color: #666;
        text-indent: 2em;
        background-color: #fff;
        p {
          line-height: 26px;
          font-size: 16px;
          color: #333;
        }
        .info-img {
          width: 408px;
          height: 58px;
          background: url('~/static/img/programme/infoimg.png') no-repeat center;
          background-size: cover;
          margin: 70px 0 0 140px;
        }
        .infoTitle {
          margin-bottom: 25px;
          font-size: 24px;
          color: #333;
          text-indent: 0;
          text-align: center;
        }
      }
    }
  }
}
</style>
