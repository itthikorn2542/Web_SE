import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Sidebar from '../components/Sidebar.vue'
import home from './home'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Sidebar,
    children:[
      ...home
    ]
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
