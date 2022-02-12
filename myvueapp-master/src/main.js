import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/css/tailwind.css'
Vue.router = router
Vue.use(router)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
