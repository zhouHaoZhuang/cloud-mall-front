<template>
  <div>
    <div id="10" @click="clickprog">
      <div id="100" ref="prog1">
        100G
      </div>
      <div id="300" ref="prog3">
        300G
      </div>
      <div id="500" ref="prog5">
        500G
      </div>
      <div ref="prog" class="prog" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickprog (e) {
      if (e.path[0].id === '10') {
        return
      }
      // console.log(e.target, '///////')
      // 100G宽度304px  300G宽度158px  500G宽度157px
      // console.log(e.path[0].offsetWidth, '----')
      let newwidth = e.offsetX
      let space = 0
      if (e.path[0].id === '100') {
        space = (newwidth / e.path[0].offsetWidth) * 100
        // console.log(space, '----')
      } else if (e.path[0].id === '300') {
        newwidth = e.offsetX + 304
        space = (e.offsetX / e.path[0].offsetWidth) * 200 + 100
        // console.log(space, '----')
      } else if (e.path[0].id === '500') {
        newwidth = e.offsetX + 304 + 158
        space = (e.offsetX / e.path[0].offsetWidth) * 200 + 300
        // console.log(space, e.offsetX, e.path[0].offsetWidth, '----')
      } else if (e.path[0].id === '0') {
        // console.log(e.path)
      } else {
        // console.log(e.path[0])
      }
      if (space % 5) {
        // console.log(space, '有余数')
        space = space - (space % 5) + 5
        // console.log(space, '****')
      } else {
        // console.log(e.offsetX, e.path[0].offsetWidth, space, '没有余数')
      }
      this.space = space.toFixed(0)
      this.$refs.prog1.style.color = 'rgb(153, 153, 153)'
      this.$refs.prog3.style.color = 'rgb(153, 153, 153)'
      this.$refs.prog5.style.color = 'rgb(153, 153, 153)'
      if (this.space > 90) {
        this.$refs.prog1.style.color = '#fff'
      }
      if (this.space > 260) {
        this.$refs.prog3.style.color = '#fff'
      }
      if (this.space > 455) {
        this.$refs.prog5.style.color = '#fff'
      }
      const wih = this.$refs.prog
      wih.style.width = newwidth + 'px'
      // console.log(wih.offsetWidth)
    }
  }
}
</script>

<style></style>
