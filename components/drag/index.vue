<template>
  <div class="gdt">
    <div id="10" @click="clickprog">
      <div id="100" ref="prog1">
        {{ data.scale[0] }}G
      </div>
      <div id="300" ref="prog3">
        {{ data.scale[1] }}G
      </div>
      <div id="500" ref="prog5">
        {{ data.scale[2] }}G
      </div>
      <div ref="prog" class="prog" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data () {
    return {
      space: 15
    }
  },
  methods: {
    clickprog (e) {
      if (e.path[0].id === '10') {
        return
      }
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
      console.log(this.space, '----')
      this.data.valfun(this.space)
    }
  }
}
</script>

<style lang="scss" scoped>
.gdt > div {
  display: flex;
  width: 620px;
  position: relative;
  border: solid 1px rgb(238, 238, 238);
  > div {
    position: relative;
    text-align: right;
    padding-right: 10px;
    font-size: 12px;
    color: rgb(153 153 153);
    z-index: 100;
    height: 25px;
    line-height: 25px;
  }
  // 进度条
  .prog {
    width: 50px;
    height: 25px;
    background-color: rgb(66, 164, 255);
    position: absolute;
    z-index: 80;
    top: 0;
    left: 0;
    transition: width 0.1s;
  }
  > div:nth-child(1) {
    flex: 2;
    border-right: 1px solid rgb(238, 238, 238);
  }
  > div:nth-child(2) {
    flex: 1;
    border-right: 1px solid rgb(238, 238, 238);
  }
  > div:nth-child(3) {
    flex: 1;
  }
}
</style>
