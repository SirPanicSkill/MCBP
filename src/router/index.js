import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/pages/Homepage'
import About from '@/pages/About'
import Services from '@/pages/Services'
import Consulting from '@/pages/Consulting'
import Cpp from '@/pages/Cpp'
import Contacts from '@/pages/Contacts'

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
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/consulting',
      name: 'Consulting',
      component: Consulting
    },
    {
      path: '/cpp',
      name: 'Cpp',
      component: Cpp
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    }
  ]
})
