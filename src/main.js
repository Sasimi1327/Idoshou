import { createApp } from 'vue'
import { createPinia } from 'pinia'
// axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// Vue Validate
import * as VeeValidate from 'vee-validate'
import VeeValidateRules from '@vee-validate/rules'
import * as VeeValidateI18n from '@vee-validate/i18n'
// Vue Leaflet
import { LMap, LTileLayer, LMarker, LPopup, LIcon } from '@vue-leaflet/vue-leaflet'
import 'leaflet/dist/leaflet.css'
// Vue Datepicker
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

import { date, currency } from '@/methods/filters'

import zhTW from './i18n/zh_TW.json'

import './assets/all.scss'
import App from './App.vue'
import router from './router'

// 全部加入
Object.keys(VeeValidateRules).forEach(rule => {
  if (rule !== 'default') {
    VeeValidate.defineRule(rule, VeeValidateRules[rule])
  }
})
// Activate the locale
VeeValidate.configure({
  generateMessage: VeeValidateI18n.localize('zh_TW', zhTW),
  validateOnInput: true // 調整為：輸入文字時，就立即進行驗證
})

const pinia = createPinia()
const app = createApp(App)

app.config.globalProperties.$filters = {
  date,
  currency
}

app.component('VForm', VeeValidate.Form)
app.component('VField', VeeValidate.Field)
app.component('ErrorMessage', VeeValidate.ErrorMessage)

app.component('LMap', LMap)
app.component('LTileLayer', LTileLayer)
app.component('LMarker', LMarker)
app.component('LPopup', LPopup)
app.component('LIcon', LIcon)

app.component('VueDatePicker', VueDatePicker)

app.use(router)

app.use(pinia)
app.use(VueAxios, axios)
app.mount('#app')
