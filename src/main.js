import { createApp } from 'vue'
import { createPinia } from 'pinia'
// axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// vue loading
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

import $httpMessageState from '@/methods/pushMessageState'

import './assets/all.scss'
import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

app.config.globalProperties.$httpMessageState = $httpMessageState

app.component('LoadingView', Loading)
app.use(router)

app.use(pinia)
app.use(VueAxios, axios)
app.mount('#app')
