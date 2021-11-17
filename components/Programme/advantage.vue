<template>
  <div class="advantage-container">
    <div class="container">
      <div class="title">
        {{ advantageData.title }}
      </div>
      <div class="list">
        <div
          v-for="(item, index) in advantageData.list"
          :key="index"
          class="item"
        >
          <div class="top">
            <div class="bg" :style="`background:url(${item.bg}) no-repeat`" />
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
  background: #fff;
  .container {
    padding-left: 10px;
    .title {
      padding-top: 80px;
      padding-bottom: 60px;
      font-size: 36px;
      color: #555;
      text-align: center;
    }
    .list {
      display: flex;
      .item {
        width: 23.5%;
        min-height: 400px;
        margin-left: 2%;
        margin-bottom: 60px;
        border: 1px solid #e6e6e6;
        background-color: #fff;
        .top {
          height: 160px;
          padding-top: 25px;
          background-color: #e9f0f7;
          .bg {
            width: 180px;
            height: 111px;
            margin: 0 auto;
          }
        }
        .bot {
          padding: 30px 20px;
          font-size: 12px;
          color: #999;
          .bot-title {
            margin-bottom: 18px;
            font-size: 18px;
            color: #333;
            text-align: center;
          }
          .info {
            line-height: 2;
          }
        }
      }
      .item:nth-child(1) {
        margin-left: 0;
      }
      .item:hover {
        .bot-title {
          color: #059fff;
        }
      }
    }
  }
}
</style>
