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

        <!-- <div class="col-md-10 mt-20">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.851146425528!2d121.51834431475676!3d25.106899683938266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ae91678fa3fb%3A0x93cdda706ec23ab6!2zMTEy5Y-w5YyX5biC5YyX5oqV5Y2A6KW_5a6J6KGX5LiA5q61MjfomZ8!5e0!3m2!1szh-TW!2stw!4v1679060967127!5m2!1szh-TW!2stw&q=112台北市北投區西安街一段27號(伊多賞)"
          width="100%"
          height="400"
          style="border:0;"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div> -->
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
      this.map = L.map('map').setView(this.center, this.zoom)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap', // 商用時必須要有版權出處
        zoomControl: true // 是否秀出 - + 按鈕
      }).addTo(this.map)
    },
    setIcon () {
      this.customIcon = L.icon({
        iconUrl: this.iconUrl(),
        iconSize: [180, 62]
      })
    },
    setMarker () {
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
