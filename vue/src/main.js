import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueVirtualScroller from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import VJstree from 'vue-jstree'


Vue.config.productionTip = false
Vue.use(VueVirtualScroller)

new Vue({
  router,
  store,
  components:{
    VJstree
  },

  render: h => h(App)
}).$mount('#app')
