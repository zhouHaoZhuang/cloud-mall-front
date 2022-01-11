<template>
  <div class="advantage-container">
    <div class="container">
      <div class="title">
        {{ advantageData.title }}
        <div class="bootom-line" />
      </div>
      <div class="list">
        <div
          v-for="(item, index) in advantageData.list"
          :key="index"
          class="item"
        >
          <div class="top">
            <div class="bg" :style="`background:url(${item.bg}) no-repeat;`" />
          </div>
          <div class="bot">
            <div class="bot-title">
              {{ item.title }}
            </div>
            <p class="info">
              {{ item.info }}
            </p>
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
    advantageData: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.advantage-container {
  background: url('~/static/img/programme/advantagebg.png') no-repeat center;
  background-size: cover;
  height: 810px;
  margin-bottom: 140px;
  .container {
    padding-left: 10px;
    .title {
      padding-top: 80px;
      padding-bottom: 60px;
      font-size: 36px;
      color: #555;
      text-align: center;
      .bootom-line {
        margin: 20px auto;
        width: 60px;
        height: 4px;
        background: #1d7aec;
      }
    }
    .list {
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 60px;
      .item {
        display: flex;
        justify-content: space-between;
        width: 580px;
        height: 220px;
        padding: 30px 25px;
        background: #ffffff;
        .top {
          width: 140px;
          height: 140px;
          .bg {
            width: 140px;
            height: 140px;
            background-size: cover !important;
          }
        }
        .bot {
          font-size: 14px;
          color: #333;
          padding-left: 25px;
          .bot-title {
            margin-bottom: 18px;
            font-size: 22px;
            font-weight: bold;
            color: #333;
          }
          .info {
            line-height: 24px;
          }
        }
      }
      .item:nth-child(2) {
        margin: 0 0 40px 40px;
      }
      .item:nth-child(3) {
        margin-right: 40px;
      }
      .item:hover {
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
        .bot-title {
          color: #059fff;
        }
      }
    }
  }
}
</style>
