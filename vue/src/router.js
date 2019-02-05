import Vue from 'vue'
import Router from 'vue-router'
import Hme from './views/Home.vue'
import VirtualScroller from './views/VirtualScroller.vue'
import CallApi from './views/CallApi'
import treeView from './views/treeView'
import checkboxWrapper from './views/checkboxWrapper'
import StateManagement from './views/StateManagement'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Hme
    },
    {
      path: '/virtual-scroller',
      name: 'VirtualScroller',
      component: VirtualScroller
    },
    {
      path: '/call-api',
      name: 'CallApi',
      component: CallApi
    },
    {
      path: '/tree-View',
      name: 'treeView',
      component: treeView
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: checkboxWrapper
    },
    {
      path: '/state-management',
      name: 'statManagement',
      component: StateManagement
    }
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(About)
    // }
  ]
})
