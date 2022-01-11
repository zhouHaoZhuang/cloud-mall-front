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
          <div
          v-if="solutionData.foundbg"
            class="info-found"
            :style="`${solutionData.foundbg}`"
          />
          <div
            class="info-img"
            :style="`${solutionData.bottombg};${solutionData.bottomwidth}`"
          />
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
        position: relative;
        width: 610px !important;
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
        .info-found {
          width: 120px;
          height: 38px;
          background-size: cover !important;
        }
        .info-img {
          position: absolute;
          right: 3px;
          bottom: 20px;
          height: 58px;
          background-size: cover !important;
        }
        .infoTitle {
          margin-bottom: 20px;
          font-size: 26px;
          color: #333;
          font-weight: bold;
          text-indent: 0;
        }
      }
    }
  }
}
</style>
