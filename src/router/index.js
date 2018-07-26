import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/pages/Homepage'
import About from '@/pages/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
