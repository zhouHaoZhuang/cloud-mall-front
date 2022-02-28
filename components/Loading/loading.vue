<template>
  <div v-if="loading" class="loading-wrap">
    <a-spin size="large" :spinning="loading">
      <Iconfont
        slot="indicator"
        type="icon-loading"
        class="loading-icon"
        spin
      />
    </a-spin>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false
    }
  },
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style>
.loading-wrap {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999;
}
.loading-icon{
  font-size: 28px;
  color: #fff;
}
</style>
