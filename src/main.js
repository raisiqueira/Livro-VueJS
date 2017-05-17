import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Hello from './components/Hello.vue'

const router = new VueRouter({
    routes: [
        { path:'/', component: Hello }
    ]
})

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
