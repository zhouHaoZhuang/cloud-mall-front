<template>
  <div class="issue-container">
    <div class="container">
      <div class="title">
        {{ issueData.title }}
      </div>
      <div class="list">
        <div
          v-for="(item, index) in issueData.list"
          :key="index"
          :class="issueData.list.length === 3 ? 'item item-width' : 'item'"
        >
          <div
            class="top-img"
            :style="`background:url(${issueData.bg}) no-repeat`"
          />
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
      padding-bottom: 60px;
      .item {
        width: 23%;
        height: 380px;
        padding-top: 35px;
        margin: 0px 1%;
        .top-img {
          width: 100px;
          height: 100px;
          margin: 0 auto;
        }
        .item-title {
          font-size: 18px;
          color: #333;
          text-align: center;
          margin: 20px 0 15px 0;
        }
        .info {
          margin: 0 20px;
          font-size: 12px;
          color: #999;
          line-height: 24px;
        }
      }
      .item-width {
        width: 31%;
      }
      .item:nth-child(2) {
        .top-img {
          background-position: 0 -100px !important;
        }
      }
      .item:nth-child(3) {
        .top-img {
          background-position: 0 -200px !important;
        }
      }
      .item:nth-child(4) {
        .top-img {
          background-position: 0 -300px !important;
        }
      }
      .item:hover {
        background-color: #fff;
        box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
        .item-title {
          color: #059fff;
        }
      }
      .item:nth-child(1):hover {
        .top-img {
          background-position: -100px 0 !important;
        }
      }
      .item:nth-child(2):hover {
        .top-img {
          background-position: -100px -100px !important;
        }
      }
      .item:nth-child(3):hover {
        .top-img {
          background-position: -100px -200px !important;
        }
      }
      .item:nth-child(4):hover {
        .top-img {
          background-position: -100px -300px !important;
        }
      }
    }
  }
}
</style>
