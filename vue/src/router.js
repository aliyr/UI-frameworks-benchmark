import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import VirtualScroller from './views/VirtualScroller.vue'
import CallApi from './views/CallApi'
import treeView from './views/treeView'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
      component:treeView  
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
