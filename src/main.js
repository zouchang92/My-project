// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import vueVimeoPlayer from 'vue-vimeo-player'
import carousel from 'v-owl-carousel'
import axios from 'axios'

// css and scss files include
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/font-awesome.min.css'
import './assets/index.scss'
import './assets/plus.css'


// Global axios
axios.defaults.withCredentials = true
axios.interceptors.request.use((config) => {
  config.headers['X-Requested-With'] = 'XMLHttpRequest'
  let regex = /.*csrftoken=([^;.]*).*$/
  config.headers['X-CSRFToken'] = document.cookie.match(regex) === null ? null : document.cookie.match(regex)[1]
  return config
})

Vue.prototype.$ajax = axios

// Global hosts
Vue.prototype.$host = 'http://127.0.0.1:8000'

// remove below file for change color
// import './assets/css/color/color-2.css'

Vue.use(BootstrapVue)
Vue.use(vueVimeoPlayer)
Vue.component('carousel', carousel)
Vue.config.productionTip = false

export const vues = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
