// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import * as $http from './requests'

Vue.use(MintUI)

Vue.config.productionTip = false

Vue.prototype.$http = $http

router.beforeEach((to, from, next) => {
  if (to.path === '/cart' || to.path === '/mine') {
    next("/login")
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
