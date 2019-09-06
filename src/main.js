// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vant from 'vant'
import App from './App'
import router from './router'
import store from './store'

import 'vant/lib/index.css'

Vue.use(Vant)

Vue.config.productionTip = false

// 路由发生变化修改页面title
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    store.dispatch("getHeaderTitle", {headerTitle: to.meta.title});
  }
  next();
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
