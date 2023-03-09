import { createApp } from 'vue'
// axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// vue loading
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

import './assets/all.scss'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.component('LoadingView', Loading)

app.use(VueAxios, axios)
app.mount('#app')
