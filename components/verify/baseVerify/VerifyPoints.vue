<template>
  <div
    style="position: relative"
    @mouseover="mode === 'pop' ? (showImage = true) : undefined"
    @mouseout="mode === 'pop' ? (showImage = false) : undefined"
  >
    <div
      class="verify-img-out"
      v-show="showImage"
      @mouseover="mode === 'pop' ? (showImage = true) : undefined"
      @mouseout="mode === 'pop' ? (showImage = false) : undefined"
      :style="
        mode === 'pop'
          ? {
              display: 'none',
              position: 'absolute',
              bottom: '42px',
              height: parseInt(setSize.imgHeight) + vSpace + 'px'
            }
          : { position: 'relative', height: parseInt(setSize.imgHeight) + vSpace + 'px' }
      "
    >
      <div
        class="verify-img-panel"
        :style="{
          width: setSize.imgWidth,
          height: setSize.imgHeight,
          'background-size': setSize.imgWidth + ' ' + setSize.imgHeight,
          'margin-bottom': vSpace + 'px'
        }"
      >
        <div class="verify-refresh" style="z-index:3" @click="refresh" v-show="showRefresh">
          <i class="iconfont icon-refresh"></i>
        </div>
        <canvas
          :width="setSize.imgWidth"
          :height="setSize.imgHeight"
          ref="canvas"
          @click="bindingClick ? canvasClick($event) : undefined"
        ></canvas>
        <div
          v-for="(tempPoint, index) in tempPoints"
          :key="index"
          class="point-area"
          :style="{
            'background-color': '#1abd6c',
            color: '#fff',
            'z-index': 9999,
            width: '30px',
            height: '30px',
            'text-align': 'center',
            'line-height': '30px',
            'border-radius': '50%',
            position: 'absolute',
            top: parseInt(tempPoint.y - 10) + 'px',
            left: parseInt(tempPoint.x - 10) + 'px'
          }"
        >
          {{ index + 1 }}
        </div>
      </div>
    </div>
    <div
      class="verify-bar-area"
      :style="{
        width: this.barSize.width,
        height: this.barSize.height,
        color: this.barAreaColor,
        'border-color': this.barAreaBorderColor,
        'line-height': this.barSize.height
      }"
    >
      <span class="verify-msg">{{ text }}</span>
    </div>
  </div>
</template>
<script type="text/babel">
/**
 * VerifyPoints
 * @description ??????
 * */

import { resetSize, _code_chars, _code_color1, _code_color2 } from './util'
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'
import img4 from '../img/img4.png'
import img5 from '../img/img5.png'

function getOffset(Node, offset = { top: 0, left: 0 }) {
  if (Node == document.body) {
    //???????????????body????????????????????????
    return offset
  }

  offset.top += Node.offsetTop
  offset.left += Node.offsetLeft

  return getOffset(Node.parentNode, offset) //????????????offset?????????
}

export default {
  name: 'VerifyPoints',
  props: {
    //?????????pop?????????fixed
    mode: {
      type: String,
      default: 'fixed'
    },
    //?????????????????????
    defaultNum: {
      type: Number,
      default: 4
    },
    //?????????????????????
    checkNum: {
      type: Number,
      default: 3
    },
    //??????
    vSpace: {
      type: Number,
      default: 5
    },
    // imgUrl: {
    //   type: String,
    //   default: img1
    // },
    imgName: {
      type: Array,
      default() {
        return ['350x150', '350x450']
      }
    },
    imgSize: {
      type: Object,
      default() {
        return {
          width: '400px',
          height: '200px'
        }
      }
    },
    barSize: {
      type: Object,
      default() {
        return {
          width: '400px',
          height: '40px'
        }
      }
    }
  },
  data() {
    return {
      fontPos: [], // ?????????????????????
      checkPosArr: [], //?????????????????????
      num: 1, //???????????????
      imgRand: 0, // //?????????????????????
      setSize: {
        imgHeight: 0,
        imgWidth: 0,
        barHeight: 0,
        barWidth: 0
      },
      showImage: true,
      tempPoints: [],
      text: '',
      barAreaColor: undefined,
      barAreaBorderColor: undefined,
      showRefresh: true,
      bindingClick: true,
      imgUrl: img1,
      imgUrlList: [img1, img2, img3, img4, img5]
    }
  },
  computed: {
    resetSize() {
      return resetSize
    }
  },
  methods: {
    init() {
      //????????????
      this.fontPos.splice(0, this.fontPos.length)
      this.checkPosArr.splice(0, this.checkPosArr.length)
      this.num = 1
      this.imgRand = Math.floor(Math.random() * this.imgName.length)

      this.$nextTick(() => {
        this.setSize = this.resetSize(this) //????????????????????????
        this.refresh()
        this.$parent.$emit('ready', this)
      })
    },
    canvasClick(e) {
      this.checkPosArr.push(this.getMousePos(this.$refs.canvas, e))
      if (this.num == this.checkNum) {
        this.num = this.createPoint(this.getMousePos(this.$refs.canvas, e))
        setTimeout(() => {
          var flag = this.comparePos(this.fontPos, this.checkPosArr)
          if (flag == false) {
            //????????????
            this.$parent.$emit('error', this)
            this.barAreaColor = '#d9534f'
            this.barAreaBorderColor = '#d9534f'
            this.text = '????????????'

            setTimeout(() => {
              this.refresh()
            }, 400)
          } else {
            //????????????
            this.barAreaColor = '#4cae4c'
            this.barAreaBorderColor = '#5cb85c'
            this.text = '????????????'
            this.showRefresh = false
            this.bindingClick = false
            this.$parent.$emit('success', this)
          }
        }, 400)
      }

      if (this.num < this.checkNum) {
        this.num = this.createPoint(this.getMousePos(this.$refs.canvas, e))
      }
    },
    //?????????????????????
    drawImg: function(obj, img) {
      //??????canvas??????
      var canvas = this.$refs.canvas
      var ctx = canvas.getContext('2d')

      // ????????????
      ctx.drawImage(img, 0, 0, parseInt(this.setSize.imgWidth), parseInt(this.setSize.imgHeight))

      // ????????????
      var fontSizeArr = [
        'italic small-caps bold 20px microsoft yahei',
        'small-caps normal 25px arial',
        '34px microsoft yahei'
      ]
      var fontStr =
        '?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????' //??????????????????

      var fontChars = []

      var avg = Math.floor(parseInt(this.setSize.imgWidth) / (parseInt(this.defaultNum) + 1))
      var tmp_index = ''
      var color2Num = Math.floor(Math.random() * 5)

      for (var i = 1; i <= this.defaultNum; i++) {
        fontChars[i - 1] = this.getChars(fontStr, fontChars)

        tmp_index = Math.floor(Math.random() * 3)
        ctx.font = fontSizeArr[tmp_index]
        ctx.fillStyle = _code_color2[color2Num]

        if (Math.floor(Math.random() * 2) == 1) {
          var tmp_y = Math.floor(parseInt(this.setSize.imgHeight) / 2) + tmp_index * 20 + 20
        } else {
          var tmp_y = Math.floor(parseInt(this.setSize.imgHeight) / 2) - tmp_index * 20
        }

        ctx.fillText(fontChars[i - 1], avg * i, tmp_y)
        this.fontPos[i - 1] = { char: fontChars[i - 1], x: avg * i, y: tmp_y }
      }

      for (var i = 0; i < this.defaultNum - this.checkNum; i++) {
        this.shuffle(this.fontPos).pop()
      }

      var msgStr = ''
      for (var i = 0; i < this.fontPos.length; i++) {
        msgStr += this.fontPos[i].char + ','
      }

      this.text = '??????????????????' + msgStr.substring(0, msgStr.length - 1) + '???'

      return this.fontPos
    },
    //????????????
    getMousePos: function(obj, e) {
      var x = e.offsetX - 5
      var y = e.offsetY - 5

      return { x, y }
    },
    //????????????
    getChars: function(fontStr, fontChars) {
      var tmp_rand = parseInt(Math.floor(Math.random() * fontStr.length))
      if (tmp_rand > 0) {
        tmp_rand = tmp_rand - 1
      }

      var tmp_char = fontStr.charAt(tmp_rand)
      if (fontChars.indexOf(tmp_char) == -1) {
        return tmp_char
      } else {
        return this.getChars(fontStr, fontChars)
      }
    },
    //????????????
    shuffle: function(arr) {
      var m = arr.length,
        i
      var tmpF
      while (m) {
        i = (Math.random() * m--) >>> 0
        tmpF = arr[m]
        arr[m] = arr[i]
        arr[i] = tmpF
        //[arr[m], arr[i]] = [arr[i], arr[m]];	//????????????????????????????????????
      }
      return arr
    },
    //???????????????
    createPoint: function(pos) {
      this.tempPoints.push(Object.assign({}, pos))
      return ++this.num
    },
    comparePos: function(fontPos, checkPosArr) {
      var flag = true
      for (var i = 0; i < fontPos.length; i++) {
        if (
          !(
            parseInt(checkPosArr[i].x) + 40 > fontPos[i].x &&
            parseInt(checkPosArr[i].x) - 40 < fontPos[i].x &&
            parseInt(checkPosArr[i].y) + 40 > fontPos[i].y &&
            parseInt(checkPosArr[i].y) - 40 < fontPos[i].y
          )
        ) {
          flag = false
          break
        }
      }

      return flag
    },
    refresh: function() {
      this.tempPoints.splice(0, this.tempPoints.length)
      this.barAreaColor = '#000'
      this.barAreaBorderColor = '#ddd'
      this.bindingClick = true

      this.fontPos.splice(0, this.fontPos.length)
      this.checkPosArr.splice(0, this.checkPosArr.length)
      this.num = 1

      // this.imgRand = Math.floor(Math.random() * this.imgName.length); //?????????????????????
      var img = new Image()
      // img.src = this.imgUrl + this.imgName[this.imgRand];
      this.imgUrl = this.imgUrlList[Math.round(Math.random() * 4)]
      img.src = this.imgUrl
      // ????????????????????????
      var _this = this
      img.onload = function() {
        _this.$nextTick(() => {
          _this.fontPos = _this.drawImg(_this.$el, this)
        })
      }

      this.text = '????????????'
      this.showRefresh = true
    }
  },
  watch: {
    // type?????????????????????
    type: {
      immediate: true,
      handler() {
        this.init()
      }
    }
  },
  mounted() {
    // ????????????
    this.$el.onselectstart = function() {
      return false
    }
  },
  i18n: {
    messages: {
      'en-US': {},
      'zh-CN': {}
    }
  }
}
</script>
