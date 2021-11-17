<template>
  <div class="finance-container">
    1
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  methods: {
    // 点击跳转
    handleClickJump (path) {
      if (!path) {
        return
      }
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.finance-container {
  height: 600px;
  background: #f5f6f7;
}
</style>
