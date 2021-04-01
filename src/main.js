import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import toast from './components/common/toast'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

Vue.use(toast)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
// require('./assets/css/base.css')