<template>
  <div class="container mb-10">
    <div class="text-center pt-10 mb-10">
      <h2 class="fz-2 lh-sm fw-normal">店家資訊</h2>
    </div>
    <div class="card mb-3" style="max-width: 100%;">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div id="map"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  data () {
    return {
      center: [25.1068997, 121.520533], // 中心點座標
      zoom: 17,
      map: {},
      customIcon: {},
      marker: {},
      title: {}
    }
  },
  methods: {
    iconUrl () {
      return 'https://storage.googleapis.com/vue-course-api.appspot.com/sasimi1327/1679226742498.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=kmR%2FjNR4Zp9MyZrRlfOoPGeAqFtX%2F8Q3iNdR0bN4sXI5VL6nqKhND12WZXX0UhUOHGWfOT3FSnY4%2BoMGMy12rehI8NozVPAKhdzY6nHALZHbnUySKLFE1V%2FPlLVEa0aRvhPAbEsJDf6MZ43Fk5Lg1woN7MzPoCLIaRT3jG3XhjNXnorMYE8kQqEqIc1p%2BPH0YZ8WIoMXLYhDxWx2ben8sMOlV4rpwB6%2Bf5Kk4NLH6lPuBL5%2BCE0RausOn3Yqjv6llr1N%2FHmAaTu2MyoSywFJsaz9HrbsihwK7c7vp0sOVJTlIO%2Bz%2FaYMFs07F3Q7%2FKRGBYyKpCpgBgzPY%2FEmGo0b1g%3D%3D'
    },
    setMap () {
      // 設置地圖
      this.map = L.map('map').setView(this.center, this.zoom)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap', // 商用時必須要有版權出處
        zoomControl: true // 是否秀出 - + 按鈕
      }).addTo(this.map)
    },
    setIcon () {
      // 設置圖釘icon
      this.customIcon = L.icon({
        iconUrl: this.iconUrl(),
        iconSize: [180, 62]
      })
    },
    setMarker () {
      // 設置圖釘
      this.marker = L.marker(this.center, {
        icon: this.customIcon,
        title: this.title,
        opacity: 1.0
      }).addTo(this.map)
    }
  },
  mounted () {
    // *** 放置地圖
    this.setMap()
    this.setIcon()
    this.setMarker()
  }
}
</script>

<style>
#map {
  height: 60vh;
}
</style>
