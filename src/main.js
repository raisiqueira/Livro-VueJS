import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

const router = new VueRouter()

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
