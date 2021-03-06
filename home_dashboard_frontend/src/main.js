// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueSocketio from 'vue-socket.io'

Vue.use(VueSocketio, 'http://localhost:5000', store)

Vue.config.productionTip = false


/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'

})
