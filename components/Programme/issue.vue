<template>
  <div class="issue-container">
    <div class="container">
      <div class="title">
        {{ issueData.title }}
        <div class="bootom-line" />
      </div>
      <div class="list">
        <div
          v-for="(item, index) in issueData.list"
          :key="index"
          :class="issueData.list.length === 3 ? 'item item-width' : 'item'"
        >
          <div
            class="top-img"
            :style="`background:url(${item.bg}) no-repeat`"
          />
          <div class="right">
            <div class="item-title">
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
    issueData: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.issue-container {
  height: 894px;
  margin-top: 180px;
  background: #f9f9f9;
  .container {
    padding-left: 10px;
    .title {
      padding-top: 100px;
      padding-bottom: 96px;
      font-size: 36px;
      color: #333;
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
        background: #ffffff;
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.06);
        .top-img {
          width: 220px;
          height: 220px;
          background-size: cover !important;
        }
        .right {
          width: 350px;
          height: 220px;
          padding: 0 23px;
          .item-title {
            font-size: 24px;
            color: #333;
            margin: 20px 0;
            font-weight: bold;
          }
          .info {
            font-size: 14px;
            color: #333;
            line-height: 22px;
          }
        }
      }
      .item-width {
        display: block;
        width: 30%;
        height: 469px;
        .top-img {
          width: 100%;
          height: 220px;
          background-size: cover !important;
        }
      }
      .item:nth-child(1) {
        margin: 0 40px 40px 0px;
      }
      .item:nth-child(3) {
        margin-right: 40px;
      }
      .item-width:nth-child(2) {
        margin-right: 40px;
      }
      .item:hover {
        box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
        .item-title {
          color: #059fff;
        }
      }
    }
  }
}
</style>
