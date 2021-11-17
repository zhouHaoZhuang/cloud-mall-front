<template>
  <div class="-container">
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
.-container {
  background: #fafafa;
}
</style>
