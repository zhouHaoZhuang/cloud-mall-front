<template>
  <div class="gdt">
    <div id="0001" @click="clickprog">
      <div :id="data.scale[0]" ref="prog1">
        {{ data.scale[0] }}{{ data.scale[3] }}
      </div>
      <div :id="data.scale[1]" ref="prog3">
        {{ data.scale[1] }}{{ data.scale[3] }}
      </div>
      <div :id="data.scale[2]" ref="prog5">
        {{ data.scale[2] }}{{ data.scale[3] }}
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
      if (e.path[0].id === '0001') {
        return
      }
      let newwidth = e.offsetX
      let space = 0
      if (e.path[0].id * 1 === this.data.scale[0]) {
        space = (newwidth / e.path[0].offsetWidth) * this.data.scale[0]
        // console.log(space, '----')
      } else if (e.path[0].id * 1 === this.data.scale[1]) {
        newwidth = e.offsetX + 304
        space =
          (e.offsetX / e.path[0].offsetWidth) *
            (this.data.scale[1] - this.data.scale[0]) +
          this.data.scale[0]
        // console.log(space, '----')
      } else if (e.path[0].id * 1 === this.data.scale[2]) {
        newwidth = e.offsetX + 304 + 158
        space =
          (e.offsetX / e.path[0].offsetWidth) *
            (this.data.scale[2] - this.data.scale[1]) +
          this.data.scale[1]
      } else if (e.path[0].id === '0') {
      } else {
      }
      if (space % 5) {
        space = space - (space % 5) + 5
      } else {
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
      //   console.log(this.space, '----')
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
