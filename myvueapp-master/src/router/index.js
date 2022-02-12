import Vue from 'vue'
import VueRouter from 'vue-router'
// import Sidebar from '../components/Sidebar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Sidebar',
    component: () => import('../components/Sidebar.vue'),
    children:[
      
    ]
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
