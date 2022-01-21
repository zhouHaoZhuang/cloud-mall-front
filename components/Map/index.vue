<template>
  <div id="container" class="map" />
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      defaultCenter: ['120.252183', '30.235558'],
      lon: '',
      lat: ''
    }
  },
  computed: {
    ...mapState({
      webInfo: state => state.home.webInfo
    })
  },
  watch: {
    webInfo: {
      handler (newVal) {
        if (JSON.stringify(newVal) !== '{}') {
          this.getMapLonAndLat()
        }
      }
    }
  },
  methods: {
    // 根据地址获取经纬度
    getMapLonAndLat () {
      const data = {
        key: '85d36ba445fe780cb205a92d6d7e4a65',
        address: this.webInfo.companyAddress
      }
      this.$api.home.getMapLonAndLat(data).then((res) => {
        if (res.status === '1') {
          const newData = res.geocodes[0].location.split(',')
          this.lon = newData[0]
          this.lat = newData[1]
        } else {
          this.lon = this.defaultCenter[0]
          this.lat = this.defaultCenter[1]
        }
        this.createMap()
      })
    },
    createMap () {
      // 创建地图实例
      const map = new window.AMap.Map('container', {
        resizeEnable: true,
        zoom: 16,
        center: [this.lon, this.lat]
        // zoomEnable: false, // 是否缩放
        // dragEnable: false // 是否拖动
      })
      // 创建一个 Marker 实例：
      const marker = new window.AMap.Marker({
        position: new window.AMap.LngLat(this.lon, this.lat) // 经纬度对象，也可以是经纬度构成的一维数组[lon, lat]
      })
      // 将创建的点标记添加到已有的地图实例：
      map.add(marker)
    }
  }
}
</script>

<style lang="scss" scoped>
#container {
  width: 100%;
  height: 100%;
}
</style>
